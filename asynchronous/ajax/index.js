

// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
// xhr.onreadystatechange = function (e) {
// 	if (xhr.readyState == 4) {
// 		if (xhr.status == 200) {
// 			let result = JSON.parse(xhr.response);
// 			result.forEach(function (key, val) {
// 				console.log(key.id + ' = ' + key.title);
// 			})
// 		} else {
// 			console.log(xhr.status);
// 		}
// 	}
// };
// xhr.send();


// function getRequest(url, callback) {
// 	const XHR = new XMLHttpRequest();
// 	XHR.open("GET", url);
// 	XHR.onreadystatechange = function (e) {
// 		if (XHR.readyState == 4) {
// 			if (XHR.status == 200) {
// 				let res = JSON.parse(XHR.response);
// 				callback(null, res);
// 			} else {
// 				callback(Error, null);
// 			}
// 		}
// 	}
// 	XHR.send();
// }

// getRequest("https://jsonplaceholder.typicode.com/users", (err, res) => {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		res.forEach((val) => console.log(val.name));
// 	}
// });



// getRequest("https://jsonplaceholder.typicode.com/posts", (err,res) => {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		res.forEach((key)=> console.log(`${key.id} = ${key.title}`))
// 	}
// })



// Ajax


