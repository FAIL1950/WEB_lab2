export default class Model{

    isUnique(userEmail)
    {
        let raw = localStorage.getItem(userEmail);
        if(raw == null)
        {
            return true;
        }
        else{
            return false;
        }
    }

    createAccount(userName, userPassword, userGender, userBirthday, userEmail)
    {
        if(this.isUnique(userEmail))
        {
            const newAccount = {
                name: userName,
                password: userPassword,
                gender: userGender,
                birthday: userBirthday
            }
    
            localStorage.setItem(userEmail, JSON.stringify(newAccount));
            return true;
        }
        else {
            return false;
        }
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