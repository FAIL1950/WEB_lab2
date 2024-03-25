export default class View
{
    clearButtons()
    {
        let elem = document.getElementById('log_reg');
        elem.innerHTML = "";
    }

    setLogReg()
    {
        this.clearButtons();
        let elem = document.getElementById('log_reg');
        elem.innerHTML = `<div class="btn-group d-block d-md-none" role="group" style="font-size: 0;">
        <a href="login.html" class="btn btn-outline-primary btn-sm ">Увійти</a>
        <a href="registration.html" class="btn btn-outline-primary btn-sm">Зареєструватись</a>

      </div>
      <div class="btn-group d-none d-md-block" role="group" style="font-size: 0;">
        <a href="login.html" class="btn btn-outline-primary btn-md ">Увійти</a>
        <a href="registration.html" class="btn btn-outline-primary btn-md">Зареєструватись</a>
      </div>`;
    }

    setExitBtn()
    {
        this.clearButtons();
        let elem = document.getElementById('log_reg');
        elem.innerHTML = `<a href="login.html" id="ext1" class="btn btn-outline-danger btn-sm d-block d-md-none">Вийти</a>
        <a href="login.html" id="ext2" class="btn btn-outline-danger btn-md d-none d-md-block">Вийти</a>`;
    }
}