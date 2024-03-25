import Model from '../model/Model_login.js';
import View from '../view/View_login.js';
export default class Controller{
    constructor()
    {   
        this.Model = new Model();
        this.View = new View();
        document.getElementById('submitLogin').addEventListener('click',(e)=>this.checkLogin(e));
        document.getElementById('bud1').addEventListener('click',(e) => this.checkAccess(e));
        document.getElementById('bud2').addEventListener('click',(e) => this.checkAccess(e));
        document.getElementById('profile').addEventListener('click',(e) => this.checkAccess(e));
    }

    checkLogin(event)
    {
        event.preventDefault();
        let email = document.getElementById('loginEmail').value;
        let password = document.getElementById('loginPassword').value;
        if (email !== "" && password !== "") {
           let account = this.Model.getAccount(email, password);
           if(account == null)
           {
             this.View.errorMsgLogin('Невірні дані.');
           }
           else {
            this.Model.setActiveAccount(account);
            window.location.href = 'profile.html';
           }
        } 
        else{
            
            this.View.errorMsgLogin('Заповніть усі поля.');
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