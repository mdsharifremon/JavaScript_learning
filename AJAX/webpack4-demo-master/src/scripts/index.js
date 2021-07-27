// import axios from '../../node_modules/axios';
const URL = "https://jsonplaceholder.typicode.com/users";
let btn = document.querySelector("#loadData");
let tableData = document.querySelector('#tableData');
let output = document.querySelector("#output");


// Fetch Api AJAX
    //window.onload = function () {
    //     fetch(URL)
    //         .then(res => res.json())
    //         .then(data => {
    //             let result = `<table class='table stripped'>
    //                             <thead>
    //                                 <tr>
    //                                     <th>ID</th>
    //                                     <th>Name</th>
    //                                     <th>Username</th>
    //                                     <th>Email</th>
    //                                 </tr>
    //                                 </thead> <tbody>`;
    //             data.forEach(user => {
    //                 result += `<tr>
    //                                 <td>${user.id}</td>
    //                                 <td>${user.name}</td>
    //                                 <td>${user.username}</td>
    //                                 <td>${user.email}</td>
    //                             </tr>`;
    //             })
                
    //             result += `</tbody></table`;
    //             tableData.innerHTML = result;
    //         })
    //         .catch(e => console.log(e.message));
    // };

// A Create Element Function
function createTdElement(contact, parent) {
    const tr = document.createElement('tr');

    const tdId = document.createElement("td");
		tdId.innerHTML = contact.id;
    tr.appendChild(tdId);
    
    const tdName = document.createElement('td');
        tdName.innerHTML = contact.name;
    tr.appendChild(tdName);

    const tdPhone = document.createElement('td');
        tdPhone.innerHTML = (contact.phone)? contact.phone : 'N/A';
    tr.appendChild(tdPhone);

    const tdEmail = document.createElement('td');
        tdEmail.innerHTML = (contact.email)? contact.email : 'N/A';
    tr.appendChild(tdEmail);

    const tdAction = document.createElement('td');
    const btnEdit = document.createElement('button');
        btnEdit.className = "btn mx-1 btn-sm btn-warning";
        btnEdit.innerHTML = "Edit";
    tdAction.appendChild(btnEdit);
    
        btnEdit.addEventListener('click', function (e) {
            alert('hello edit');
            })
    
    
    const btnDelete = document.createElement("button");
		btnDelete.className = "btn btn-sm mx-1 btn-danger";
		btnDelete.innerHTML = "Delete";
    tdAction.appendChild(btnDelete);

        btnDelete.addEventListener('click', function (e) {
            alert('Hello delete');
        })
    
    tr.appendChild(tdAction);
    parent.appendChild(tr);
    
}

// Fetch Data Form DB

window.onload = function () {
    // Fetch Data
    
    axios.get(URL)
        .then(res => {
            res.data.forEach((user) => createTdElement(user, output));
        })
    
    // Insert New Data
    let savePost = document.getElementById("savePost");
		savePost.addEventListener("click", function (e) {
			createNewData();
		});
}


// Insert New Data into DB
function createNewData() {
    let name = document.getElementById('name');
    let phone = document.getElementById('phone');
    let email = document.getElementById('email');

        axios.post(URL, {
            name : name.value,
            phone : phone.value,
            email : email.value,
        })
            .then(res => {
                console.log('done');
                createTdElement(res.data, output);
                name.value = '';
                phone.value = '';
                email.value = '';
            })
            .catch(err => console.log(err.message));
   
}
