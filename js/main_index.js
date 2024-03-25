import Controller from './controller/Controller_index.js';

let controller = new Controller();
controller.checkAccess();
controller.setData();
controller.updateClock();
setInterval(controller.updateClock, 1000);
controller.updateAlarms(true);