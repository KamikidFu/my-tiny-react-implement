export const TinyReact = {
	createElement(type, attributes, ...children) {
		let element = document.createElement(type);
		//process attributes
		for (const name in attributes) {
			element.setAttribute(name, attributes[name]);
		}
		//process children
		for (const child of children) {
			if (typeof child === 'string') {
				child = document.createTextNode(child);
			}
			element.appendChild(child);
		}
		debugger;
		return element;
	}
};
