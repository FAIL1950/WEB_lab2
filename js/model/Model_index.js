export default class Model{
    getActive()
    {
        let active = JSON.parse(localStorage.getItem('active'));
        return active;
    }

    isActive()
    {
        let raw = localStorage.getItem('active');
        if(raw == null)
        {
            return false;
        }
        else{
            return true;
        }
    }

    saveAlarm(email, date, time, title)
    {
        let alarms = JSON.parse(localStorage.getItem(email+"_alarms")) || [];
        let newAlarm = {
            Date:date,
            Time:time,
            Title:title
        }
        alarms.push(newAlarm);
        localStorage.setItem(email+"_alarms", JSON.stringify(alarms));
    }

    getAlarms(email)
    {
        let raw = localStorage.getItem(email+"_alarms");
        if(raw == null)
        {
            return null;
        }
        else{
            let alarms = JSON.parse(raw);
            return alarms;
        }
    }

    
    
}