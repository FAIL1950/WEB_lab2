export default class View
{
    errorMsgLogin(text)
    {
        let errElem = document.getElementById('errorAlertLogin');
        
        errElem.innerHTML = "";        
        
        errElem.innerHTML = `
        <div class="alert alert-danger d-flex mt-3" role="alert">
        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Error">
        <use xlink:href="#error-circle-fill"/>
        </svg>
        <div>${text}</div>
        </div>`;       
    }

    clearMsgLogin()
    {
        let errElem = document.getElementById('errorAlertLogin');
        errElem.innerHTML = "";
    }

    gotoLogin(event)
    {
        event.preventDefault();
        window.location.href = "login.html";
    }
}