import './style.css';

// find all strings that have 3 numbers in a row
const ex001 = () => {
	const items = ['askjd732sd', 'skdfjs', 'asddf672', 'sdfsdf', 'skdf8283ksd', '738sdfsdf'];
	return items.filter(m => /\d\d\d/g.test(m));
}

document.querySelector('#app').innerHTML = /*html*/ `
<h1>Regex Learn Site</h1>
<h2>ex001</h2>
${ex001().join(', ')}
`;
