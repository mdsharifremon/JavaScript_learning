// let promise = new Promise((resolve, reject) => {
//     setTimeout(resolve, 3000, 'One');
// });
// let promise1 = new Promise((resolve, reject) => {
// 	setTimeout(resolve, 1000, "two");
// });

// promise.then((v) => console.log(v)).catch((e) => console.log(e));

// function getPromise(result) {
//     return new Promise((resolve,reject) => {
//             setTimeout(() => {
//                 if (result == true) {
//                     resolve('Wow! I have passed!');
//                 } else {
//                     reject(new Error('Ops! I have failed'));
//                 }
//             }, 2000);
//     })
// }
// getPromise(false)
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err));

/** 
* Fetch Api
*/ 
const BASE_URL = "https://jsonplaceholder.typicode.com";
// fetch(`${BASE_URL}/users/4`)
//     .then((res) => res.json())
//     .then((data) => console.log(data.address.city))
//     .catch((e) => console.log(e));

/**
 * custom fetch function 
 */ 

// function getRequest(url) {
// 	return new Promise((resolve, reject) => {
// 		const XHR = new XMLHttpRequest();
// 		XHR.open("GET", url);
// 		XHR.onreadystatechange = (e) => {
// 			if (XHR.readyState === 4) {
// 				if (XHR.status === 200) {
// 					let result = JSON.parse(XHR.response);
// 					resolve(result);
// 				} else {
// 					reject(new Error("Error on fetching data"));
// 				}
// 			}
// 		};
// 		XHR.send();
// 	});
// }

// getRequest(`${BASE_URL}/posts/`)
// 	.then((data) => console.log(data[0].title))
// 	.catch((err) => console.log(err));

/**
 * @param {Delay Function} that return promise 
 */
// const delay = s => new Promise(resolve => setTimeout(resolve, s * 1000));
// delay(2).then(() => console.log('2 second delay'));
// delay(3).then(() => console.log('3 second delay'));
// delay(4).then(() => console.log('4 second delay'));
// delay(5).then(() => console.log('5 second delay'));
// delay(6).then(() => console.log('6 second delay'));