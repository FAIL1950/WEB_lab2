import Model from '../model/Model_about.js';
import View from '../view/View_about.js';
export default class Controller{
    constructor()
    {   
        this.Model = new Model();
        this.View = new View();
        document.getElementById('bud1').addEventListener('click',(e) => this.checkAccess(e));
        document.getElementById('bud2').addEventListener('click',(e) => this.checkAccess(e));
        document.getElementById('profile').addEventListener('click',(e) => this.checkAccess(e));
    }

    setData()
    {
        if(this.Model.isActive())
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
        removeActive()
    }

    checkAccess(event)
    {
        if(!this.Model.isActive())
        {
           this.View.gotoLogin(event);
        }
    }
}