export default class Model{
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

    removeActive()
    {
        localStorage.removeItem('active');
    }
}