
function getInput(event) {
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

function showOnScreen(obj) {
    // e.preventDefault();
    var parentel = document.getElementById('listofitems');
    var child = document.createElement('li');
    child.textContent = obj.name + "-" + obj.email + '-' + obj.pnumber;

    var deleteButton = document.createElement('input');
    deleteButton.type = 'button';
    deleteButton.value = "DELETE";
    deleteButton.onclick = () => {
        localStorage.removeItem(obj.email);
        parentel.removeChild(child);
    }

    // .......................
    var editButton = document.createElement('input');
    editButton.type = 'button';
    editButton.value = "EDIT";
    editButton.onclick = (event) => {
        localStorage.removeItem(obj.email);
        parentel.removeChild(child);
        console.log('aaaaaaa', obj.name)
        document.getElementById('username').value = obj.name;
    }

    // ----------------------------

    child.appendChild(deleteButton);
    child.appendChild(editButton);
    parentel.appendChild(child);

}
