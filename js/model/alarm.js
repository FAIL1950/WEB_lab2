export default class Alarm {
    constructor(date, time, title, email) {
        this.Email = email;
        this.Date = date;
        this.Time = time;
        this.Title = title;
    }

    run(num, alarms) {
        const fullDateTimeString = `${this.Date}T${this.Time}:00`;
        const DateTime2 = new Date(fullDateTimeString);
        const DateTime1 = new Date();
        if (DateTime1.getTime() > DateTime2.getTime()) {
            this.openModal(`Поки вас не було спрацював будильник №${num}`, this.Title, alarms, false, num);
            return false;
        }
        else {
            const timeDiff = DateTime2 - DateTime1;
            this.row = this.showAlarm(this.Date, this.Time, this.Title, num);
            
            this.timeout = setTimeout(() => this.openModal(`Спрацював будильник №${num}`, this.Title, alarms, true, num), timeDiff);

           
            return true;
        }

    }

    showAlarm(date, time, name, num) {


        const tableBody = document.getElementById("alarmTable").getElementsByTagName('tbody')[0];

        const newRow = tableBody.insertRow();
        newRow.innerHTML = `
        <td scope="row">${num}</td>
        <td>${name}</td>
        <td>${date}</td>
        <td>${time}</td>
        <td>
          <button class="btn btn-danger" id="deleteButton_${num}">Видалити</button>
        </td>
      `;
        return newRow;
    }

    fullDel(alarms, num)
    {
        this.delRowAndTimeout(alarms, num);
        this.delFromLS(alarms, num);
    }

    delRowAndTimeout() {
        this.delRow();
        this.timeoutRmv();
    }

    timeoutRmv() {
        clearTimeout(this.timeout);
    }

    delRow() {
        this.row.remove();
    }

    delFromLS(alarms, num)
    {
        delete alarms[num];
        localStorage.setItem(this.Email + "_alarms", JSON.stringify(alarms));
    }

    openModal(title, text, alarms, isActive, num) {
        if(isActive)
        {
            this.delRow();
        }
        this.delFromLS(alarms, num);
        alert(`${title}\n\n${text}`);
    }

}