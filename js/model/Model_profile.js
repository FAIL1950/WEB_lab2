export default class Model{

    loadActive()
    {
        let raw = localStorage.getItem('active');
        if(raw == null)
        {
            return false;
        }
        let account = JSON.parse(raw);
        
        const tableBody = document.getElementById("profileData").getElementsByTagName('tbody')[0];
        const newRow = tableBody.insertRow();
        newRow.innerHTML = `
        <td scope="row">${account.name}</td>
        <td>${account.email}</td>
        <td>${account.gender}</td>
        <td>${account.birthday}</td>
        <td>${account.password}</td>`;
        return true;
    }

}