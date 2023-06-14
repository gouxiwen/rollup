// src/main.js
import { version } from '../package.json';
// import foo from './foo.js';
import answer from 'the-answer';
import _ from 'lodash';

const a = 1
export default () =>{
    console.log('version ' + version);
    console.log('the answer is ' + answer);
    console.log('the lodash is ' + _);
    console.log('the a is ' + a());
    import('./foo.js').then(({ default: foo }) => console.log(foo));
}