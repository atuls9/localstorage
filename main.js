
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

    axios.post('https://crudcrud.com/api/cf9ce9e963004965be5859e07b7f7539/atul',obj)
    .then((res)=>{
        showOnScreen(res.data)
        console.log(res.data)
    })
    .catch((err)=>{
        document.body.innerHTML=document.body.innerHTML + `<h4>Something went wrong</h4>`
        console.log(err)
    })
    // localStorage.setItem(obj.email, JSON.stringify(obj));
    // showOnScreen(obj)

}

window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/cf9ce9e963004965be5859e07b7f7539/atul")
    .then((res)=>{
        console.log(res);
        res.data.forEach((ele)=>{
            showOnScreen(ele)
        })

        
    })
    .catch((err)=>{
        console.log(err);
    })
})

function showOnScreen(obj) {
    // e.preventDefault();
    var parentel = document.getElementById('listofitems');
    var child = document.createElement('li');
    child.textContent = obj.name + "-" + obj.email + '-' + obj.pnumber;

    var deleteButton = document.createElement('input');
    deleteButton.type = 'button';
    deleteButton.value = "DELETE";
    deleteButton.onclick = () => {
        axios.delete(`https://crudcrud.com/api/cf9ce9e963004965be5859e07b7f7539/atul/${obj._id}`)
        // localStorage.removeItem(obj.email);
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
