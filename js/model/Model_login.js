export default class Model{

    getAccount(userEmail, userPassword)
    {
        let raw = localStorage.getItem(userEmail);
        if(raw == null)
        {
            return null;
        }
        let account = JSON.parse(raw);
        if(account.password == userPassword)
        {
            let acc = {
                email: userEmail,
                name: account.name,
                password: userPassword,
                gender: account.gender,
                birthday: account.birthday
            }
            return acc;
        }
        else{
            return null;
        }

    }
    
    setActiveAccount(account)
    {
        localStorage.setItem('active', JSON.stringify(account));
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
}