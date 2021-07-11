
const BASE_URL = "https://jsonplaceholder.typicode.com/users";


async function fetchData() {
    let data = await fetch(BASE_URL);
    let mydata = await data.json();
    let h = mydata.map(c => c.address);
    let add = h.map(c => c.street);
    console.log(add);
}
fetchData();