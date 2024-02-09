const common = require('./common.js');
common.hello();
import esmodule from './esmodule.js';
esmodule .hello();
console.log('Hello HMR!');
import './style.css';
//require('./style.css');