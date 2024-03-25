export default class View {
  clearButtons() {
    let elem = document.getElementById('log_reg');
    elem.innerHTML = "";
  }

  setLogReg() {
    this.clearButtons();
    let elem = document.getElementById('log_reg');
    elem.innerHTML = `<div class="btn-group d-block d-md-none" role="group" style="font-size: 0;">
        <a href="src/login.html" class="btn btn-outline-primary btn-sm ">Увійти</a>
        <a href="src/registration.html" class="btn btn-outline-primary btn-sm">Зареєструватись</a>

      </div>
      <div class="btn-group d-none d-md-block" role="group" style="font-size: 0;">
        <a href="src/login.html" class="btn btn-outline-primary btn-md ">Увійти</a>
        <a href="src/registration.html" class="btn btn-outline-primary btn-md">Зареєструватись</a>
      </div>`;
  }

  setExitBtn() {
    this.clearButtons();
    let elem = document.getElementById('log_reg');
    elem.innerHTML = `<a href="src/login.html" id="ext1" class="btn btn-outline-danger btn-sm d-block d-md-none">Вийти</a>
        <a href="src/login.html" id="ext2" class="btn btn-outline-danger btn-md d-none d-md-block">Вийти</a>`;
  }

  warningMsg(text) {
    let errElem = document.getElementById('warningAlert');
    errElem.innerHTML = "";

    errElem.innerHTML = `
    <div  class="alert alert-warning d-flex align-items-center mt-3" role="alert">
        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:">
              <use xlink:href="#exclamation-triangle-fill" />
            </svg>
            <div>
              ${text}
            </div>
            </div>`;
  }

  clearWarning()
  {
    let errElem = document.getElementById('warningAlert');
    errElem.innerHTML = "";
  }

  gotoLogin()
  {
    window.location.href = "src/login.html";
  }
}