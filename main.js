
function getInput(event){
    event.preventDefault();
    var name = event.target.username.value;
    var email = event.target.email.value;
    var pnumber = event.target.pnumber.value;
        // alert(name)
    var obj = {
        name,
        email,
        pnumber
    }
    localStorage.setItem(obj.email, JSON.stringify(obj));
    showOnScreen(obj)
    
}

    function showOnScreen(obj){
        // e.preventDefault();
        var parentel = document.getElementById('listofitems');
        var child = document.createElement('li');
        child.textContent = obj.name + "-" + obj.email + '-' + obj.pnumber;
       
        var deleteButton = document.createElement('input');
        deleteButton.type = 'button';
        deleteButton.value = "DELETE";
        deleteButton.onclick = () =>{
            localStorage.removeItem(obj.email);
            parentel.removeChild(child);
        }
        
        child.appendChild(deleteButton);
        parentel.appendChild(child);

    }
