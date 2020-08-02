import { TinyReact } from './TinyReact';

let node = (
	<div name="just-a-div-name">
		<ul>
			<li id="just-a-first-li-id">first item</li>
			<li id="just-a-second-li-id">second item</li>
			<li id="just-a-third-li-id">third item</li>
		</ul>
	</div>
);

document.body.appendChild(node);
