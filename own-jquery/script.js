function js(selector) {
	const self = document.querySelector(selector);

	// Inner Text
	self.text = function (text) {
		if (text) {
			self.innerText = text;
			return self;
		}
		return self.innerText;
	};

	// Inner Html
	self.html = function (html) {
		if (html) {
			self.innerHTML = html;
			return self;
		}
		return self.innerHTML;
	};
	// Insert Css
	self.css = function (styles) {
		for (let key in styles) {
			self.style[key] = styles[key];
		}
		return self;
	};

	// Event Listener
	self.on = function (eventName, callback) {
		self.addEventListener(eventName, callback);
		return self;
	};


	self.data = function (data) {
		return self.dataset[data];
	};

	// Class add
	self.addClass = function (className) {
		self.classList.add(className);
		return self;
	};

	// Class Remove
	self.removeClass = function (className) {
		self.classList.remove(className);
		return self;
	};

	// Class toggle
	self.toggleClass = function (className) {
		self.classList.toggle(className);
		return self;
	};

	// Add Attribute
	self.addAttr = function (attrName, attrValue) {
		self.setAttribute(attrName, attrValue);
		return self;
	};

	// Remove Attribute
	self.removeAttr = function (attrName) {
		self.removeAttribute(attrName);
		return self;
	};

	return self;
}

// let s = js('.app');

// console.log(js(".app").text('Hello html').html());
// js('.app').css({
//     background: 'teal',
//     color: 'red',
//     fontSize: '20px',
//     fontWeight: 'bold'
// }).text('hello');

// s.on('click', function () {
//     this.css({
//         background: "teal",
//         color: 'red',
//         fontSize: '20px',
//         fontWeight: 'bold'
//     });
// }).text('Hello sharif');
// console.log(s.data('ok'));
// s.on('click', function () {
//     this.removeAttr("title");
// })
