const common = require('./common.js');
common.hello();
import esmodule from './esmodule.js';
esmodule .hello();
console.log('Hello HMR!');
import './style.scss';
//require('./style.css');

let response = await fetch('https://api.chucknorris.io/jokes/random');
response = await response.json();
console.log(response);