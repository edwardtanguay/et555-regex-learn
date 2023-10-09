import './style.css';

// find all strings that have 3 numbers in a row
const ex001 = () => {
	const items = ['askjd732sd', 'skdfjs', 'asddf672', 'sdfsdf', 'skdf8283ksd', '738sdfsdf'];
	return items.filter(m => /\d\d\d/g.test(m));
};

// get an array of all numbers from strings
const ex002 = () => {
	const items = ['askjd732sd', 'skdfjs', 'asddf672', 'sdfsdf', 'skdf3828ks111d', '738sdfsdf'];
	const regex = /\d+/g;
	return items.filter(m => m.match(regex)).map(m => m.match(regex));
};

// get the names(without arrays) of image files (png or jpg) in an array only for names that start with "IMG" followed by a text of at least one character
const ex003 = () => {
	  const files = ['IMG82343.png', 'IMG23434555.txt', 'IMG283434.jpg', 'bird.png', 'IMG000000.gif', 'IMG111111.jpg', 'IMG.png', 'IMG1.jpg', 'IMG', 'IMGbird.jpg'];
  const regex = /^(IMG.+)(\.png|\.jpg)$/;
  const filteredFiles = files.filter(m => m.match(regex));
  return filteredFiles.map(m => m.replace(regex, '$1'));
};

document.querySelector('#app').innerHTML = /*html*/ `
<h1>Regex Learn Site</h1>
<h2>ex001</h2>
${ex001().join(', ')}
<h2>ex002</h2>
${ex002().join(', ')}
<h2>ex003</h2>
${ex003().join(', ')}
`;
