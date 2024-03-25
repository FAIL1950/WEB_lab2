import Model from '../model/Model_index.js';
import View from '../view/View_index.js';
import Alarm from "../model/alarm.js";
export default class Controller {
    constructor() {
        this.Model = new Model();
        this.View = new View();
        document.getElementById('createAlarm').addEventListener('click', (e) => this.createAlarm(e));
        this.alarms = [];
    }

    checkAccess()
    {
        if(!this.Model.isActive())
        {
            this.View.gotoLogin();
        }
    }

    setData() {
        if (this.Model.isActive()) {
            this.View.setExitBtn();
            document.getElementById('ext1').addEventListener('click', () => this.clearData());
            document.getElementById('ext2').addEventListener('click', () => this.clearData());
        }
        else {
            this.View.setLogReg();
        }
    }

    clearData() {
        localStorage.removeItem('active');
    }

    updateClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const date = now.toLocaleDateString();

        const clockElement = document.getElementById('clock');
        const dateElement = document.getElementById('date');


        clockElement.innerText = `${hours}:${minutes}:${seconds}`;
        dateElement.innerText = `${date}`;
    }



    createAlarm(event) {

        let time = document.getElementById('alarmTime').value;
        let date = document.getElementById('alarmDate').value;
        let title = document.getElementById('alarmName').value;


        if (time.trim() !== "" && date.trim() !== "") {

            const fullDateTimeString = `${date}T${time}:00`;
            const DateTime2 = new Date(fullDateTimeString);
            const DateTime1 = new Date();

            if (DateTime1.getTime() < DateTime2.getTime()) {
                const account = this.Model.getActive();
                this.Model.saveAlarm(account.email, date, time, title);
                this.updateAlarms(false);
                this.View.clearWarning();
            }
            else {
                this.View.warningMsg('Дата або час, які ви встановили, вже минули.');
            }

        }
        else {
            this.View.warningMsg('Заповніть поля Дати та Часу.');
        }


    }

    updateAlarms(isStart) {
        const account = this.Model.getActive();
        let alrmArray = this.Model.getAlarms(account.email);

        if (alrmArray != null) {

            if (!isStart) {
                for (let i in this.alarms) {
                    if (this.alarms[i] != null) {
                        this.alarms[i].delRowAndTimeout();
                    }

                }
            
                for (let i = alrmArray.length-1; i>= 0; i--) {
                    if(alrmArray[i] == null)
                    {
                        alrmArray.splice(i,1);
                    }
                }
                localStorage.setItem(account.email+"_alarms",JSON.stringify(alrmArray));
                this.alarms = [];
                alrmArray = this.Model.getAlarms(account.email);
            }
            
            for (let i in alrmArray) {
                
                if (alrmArray[i] != null) {

                    this.alarms.push(new Alarm(alrmArray[i].Date, alrmArray[i].Time, alrmArray[i].Title, account.email));
                    if (this.alarms[i].run(i, this.alarms)) {
                        document.getElementById(`deleteButton_${i}`).addEventListener('click', () => { this.alarms[i].fullDel(this.alarms, i); this.updateAlarms(false); });
                    }
                }
                else{
                    this.alarms.push(null);
                }


            }
        }

    }


}