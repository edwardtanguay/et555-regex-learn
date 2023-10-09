import './style.css';

// find all strings that have 3 numbers in a row
const ex001 = () => {
	const items = ['askjd732sd', 'skdfjs', 'asddf672', 'sdfsdf', 'skdf8283ksd', '738sdfsdf'];
	return items.filter(m => /\d\d\d/g.test(m));
}

// get an array of all numbers from strings
const ex002 = () => {
	const items = ['askjd732sd', 'skdfjs', 'asddf672', 'sdfsdf', 'skdf3828ks111d', '738sdfsdf'];
	const regex = /\d+/g;
	return items.filter(m => m.match(regex)).map(m => m.match(regex));
}

document.querySelector('#app').innerHTML = /*html*/ `
<h1>Regex Learn Site</h1>
<h2>ex001</h2>
${ex001().join(', ')}
<h2>ex002</h2>
${ex002().join(', ')}
`;
