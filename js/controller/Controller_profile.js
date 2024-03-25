import Model from '../model/Model_profile.js';
import View from '../view/View_profile.js';
export default class Controller{
    constructor()
    {   
        this.Model = new Model();
        this.View = new View();
        
    }

    setData()
    {
        if(this.Model.loadActive())
        {
            this.View.setExitBtn();
            document.getElementById('ext1').addEventListener('click', () => this.clearData());
            document.getElementById('ext2').addEventListener('click', () => this.clearData());
           
        }
        else{
            this.View.setLogReg();
        }
    }

    clearData()
    {
        localStorage.removeItem('active');
        window.location.href = 'login.html';
    }
}