class ElementWrapper {
	constructor(type) {
		this.root = document.createElement(type);
	}
	setAttribute(name, value) {
		this.root.setAttribute(name, value);
	}
	appendChild(vchild) {
		vchild.mountTo(this.root);
	}
	mountTo(parent) {
		parent.appendChild(this.root);
	}
}

class TextWrapper {
	constructor(type) {
		this.root = document.createTextNode(type);
	}
	mountTo(parent) {
		parent.appendChild(this.root);
	}
}

export class Component {
	setAttribute(name, value) {
		this[name] = value;
	}
	mountTo(parent) {
		let vdom = this.render();
		vdom.mountTo(parent);
	}
}

export const TinyReact = {
	createElement(type, attributes, ...children) {
		let element = null;
		//use wrapper to create vdom
		if (typeof type === 'string') {
			element = new ElementWrapper(type);
		} else {
			element = new type();
		}
		//process attributes
		for (const name in attributes) {
			element.setAttribute(name, attributes[name]);
		}
		//process children
		for (const child of children) {
			if (typeof child === 'string') {
				//text content in node
				child = new TextWrapper(child);
			}
			element.appendChild(child);
		}
		return element;
	},
	render(vdom, element) {
		vdom.mountTo(element);
	}
};
