import { TinyReact, Component } from './TinyReact';

class MyComponent extends Component {
	render() {
		return (
			<div name="just-a-div-name">
				<ul>
					<li id="just-a-first-li-id">first item</li>
					<li id="just-a-second-li-id">second item</li>
					<li id="just-a-third-li-id">third item</li>
				</ul>
			</div>
		);
	}
}

let node = <MyComponent />;

TinyReact.render(node, document.body);
