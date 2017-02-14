
import '../css/index.css';

var index = 0;

function assert(value, desc) {
  const li = document.createElement('li');
  li.className = value ? 'pass' : 'fail';
  li.appendChild(document.createTextNode(desc));
  let results = getResultsArea();
  results.appendChild(li);
}

let showSeparateLine = (headline = '') => {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(headline + ' --------------------------------------------------'));
  let results = getResultsArea();
  results.appendChild(li);
};

let getResultsArea = () => {
  let results = document.getElementById('results');
  if (results) {
    return results;
  }
  let ul = document.createElement('ul');
  ul.setAttribute('id', 'results');
  document.body.appendChild(ul);
  return ul;
};


export { assert, showSeparateLine };