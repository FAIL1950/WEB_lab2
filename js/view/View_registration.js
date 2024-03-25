export default class View
{
    errorMsg(text)
    {
        let errElem = document.getElementById('errorAlertReg');
        
        this.clearMsg();       
        
        errElem.innerHTML = `
        <div class="alert alert-danger d-flex mt-3" role="alert">
        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Error">
        <use xlink:href="#error-circle-fill"/>
        </svg>
        <div>${text}</div>
        </div>`;
        
    }


    clearMsg()
    {
        let errElem = document.getElementById('errorAlertReg');
        errElem.innerHTML = "";
    }
    gotoLogin(event)
    {
        event.preventDefault();
        window.location.href = "login.html";
    }

}