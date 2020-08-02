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
				<p>Let's render children</p>
				{this.children}
			</div>
		);
	}
}

let node = (
	<MyComponent>
		<ol>
			<li>Just a child to show</li>
			<li>Another child to show</li>
		</ol>
	</MyComponent>
);

TinyReact.render(node, document.body);
