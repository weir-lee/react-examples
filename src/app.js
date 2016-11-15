import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/Hello/Hello.js';

// 扩展属性
var props = {};
props.foo = '123';
props.bar = 'aaa';


//<Hello {...props}/>


ReactDOM.render(
    <Hello foo="呵呵" bar="哈哈"/>,
    document.getElementById('app')
);

