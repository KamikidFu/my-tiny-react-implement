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
	constructor() {
		this.children = [];
	}
	setAttribute(name, value) {
		this[name] = value;
	}
	mountTo(parent) {
		let vdom = this.render();
		vdom.mountTo(parent);
	}
	appendChild(vchild) {
		this.children.push(vchild);
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
		let processChildren = (children) => {
			for (const child of children) {
				if (typeof child === 'object' && child instanceof Array) {
					processChildren(child);
				} else {
					if (
						!(child instanceof Component) &&
						!(child instanceof ElementWrapper) &&
						!(child instanceof TextWrapper)
					) {
						child = String(child);
					}
					if (typeof child === 'string') {
						child = new TextWrapper(child);
					}
					element.appendChild(child);
				}
			}
		};
		processChildren(children);
		return element;
	},
	render(vdom, element) {
		vdom.mountTo(element);
	}
};
