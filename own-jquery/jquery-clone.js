class ElementCollection extends Array {
	// Document ready function
	ready(cb) {
		const isReady = this.some((e) => {
			return e.readyState != null && e.readyState != "loading";
		});
		if (isReady) {
			cb();
		} else {
			this.on("DOMContentLoaded", cb);
		}
		return this;
	}

	// Event Listener
	on(event, cbOrSelector, cb) {
		if (typeof cbOrSelector === "function") {
			this.forEach((e) => e.addEventListener(event, cbOrSelector));
		} else {
			this.forEach((elem) => {
				elem.addEventListener(event, (e) => {
					if (e.target.matches(cbOrSelector)) cb(e);
				});
			});
		}
		return this;
	}

	// Next selector
	next() {
		this.map((e) => e.nextElementSibling).filter((e) => e != null);
		return this;
	}

	// Previous selector
	prev() {
		this.map((e) => e.previousElementSibling).filter((e) => e != null);
		return this;
	}

	// Remove Class
	removeClass(className) {
		this.forEach((e) => e.classList.remove(className));
		return this;
	}

	// Add Class
	addClass(className) {
		this.forEach((e) => e.classList.add(className));
		return this;
	}

	// Toggle Class
	toggleClass(className) {
		this.forEach((e) => e.classList.toggle(className));
		return this;
	}

	// Css
	css(property, value) {
		if (typeof property === "object") {
			this.forEach((e) => {
				for (let key in property) {
					const camelProp = key.replace(/(-[a-z])/, (g) => {
						return g.replace("-", "").toUpperCase();
					});
					this.style[camelProp] = property[key];
				}
			});
		} else {
			const camelProp = property.replace(/(-[a-z])/, (g) => {
				return g.replace("-", "").toUpperCase();
			});
			this.forEach((e) => (e.style[camelProp] = value));
		}

		return this;
	}

	// data attributes
	data(data) {
		this.forEach((e) => e.dataset[data]);
		return this;
	}

	// Add Attribute
	addAttr(attrName, attrValue) {
		this.forEach((e) => e.setAttribute(attrName, attrValue));
		return this;
	}

	// Remove Attribute
	removeAttr(attrName) {
		this.forEach((e) => e.removeAttribute(attrName));
		return this;
	}

	// Inner Text
	text(text) {
		if (text) {
			this.forEach((e) => (e.innerText = text));
			return this;
		}
		this.forEach(e => e.innerText);
	}
	// Inner Html
	html(html) {
		if (html) {
			this.forEach((e) => (e.innerHTML = html));
			return this;
		}
		this.forEach((e) => e.innerHTML);
	}
}

// Ajax
class AjaxPromise {
	constructor(promise) {
		this.promise = promise;
	}

	done(cb) {
		this.promise = this.promise.then((data) => {
			cb(data);
			return data;
		});
		return this;
	}

	fail(cb) {
		this.promise = this.promise.catch(cb);
		return this;
	}

	always(cb) {
		this.promise = this.promise.finally(cb);
		return this;
	}
}

function jq(param) {
	if (typeof param === "string" || param instanceof String) {
		return new ElementCollection(...document.querySelectorAll(param));
	} else {
		return new ElementCollection(param);
	}
}

jq.get = function ({ url, data = {}, success = () => {}, dataType }) {
	const queryString = Object.entries(data)
		.map(([key, value]) => {
			return `${key}=${value}`;
		})
		.join("&");

	return new AjaxPromise(
		fetch(`${url}?${queryString}`, {
			method: "GET",
			headers: {
				"Content-Type": dataType,
			},
		})
			.then((res) => {
				if (res.ok) {
					return res.json();
				} else {
					throw new Error(res.status);
				}
			})
			.then((data) => {
				success(data);
				return data;
			})
	);
};