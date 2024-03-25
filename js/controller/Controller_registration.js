import Model from '../model/Model_registration.js';
import View from '../view/View_registration.js';
export default class Controller{
    constructor()
    {   
        this.Model = new Model();
        this.View = new View();
        document.getElementById('submitReg').addEventListener('click',(e)=>this.regNewAccount(e));
        document.getElementById('bud1').addEventListener('click',(e) => this.checkAccess(e));
        document.getElementById('bud2').addEventListener('click',(e) => this.checkAccess(e));
        document.getElementById('profile').addEventListener('click',(e) => this.checkAccess(e));
    }

    regNewAccount(event)
    {
        event.preventDefault();
        let email = document.getElementById('regEmail').value;
        let name = document.getElementById('regName').value;
        let birthdate = document.getElementById('regBirthdate').value;
        let password = document.getElementById('regPassword').value;
        let gender; 
        if(document.getElementById('male').checked)
        {
            gender = 'Male';
        }
        else if(document.getElementById('female').checked)
        {
            gender = 'Female';
        }
        else{
            gender = "";
        }
        
        if(email !== "" && name !== "" && birthdate !== "" && password !== "" && gender !== "")
        {
            if(!this.Model.createAccount(name, password, gender, birthdate, email)){
                this.View.errorMsg('Користувач з цією поштою вже зареєстрований.');
            }
            else{
                window.location.href = 'login.html';
            }
        }
        else{
            this.View.errorMsg('Заповніть усі поля.');
        }
    }
    checkAccess(event)
    {
        if(!this.Model.isActive())
        {
           this.View.gotoLogin(event);
        }
    }
}