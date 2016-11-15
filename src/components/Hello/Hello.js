//import './hello.css';
//import './hello.scss';
//import React, {Component} from 'react';
//
//let style={
//    backgroundColor:'yellow'
//}

// ES6语法
//export default class Hello extends Component {
//    render() {
//        return (
//            <div>
//                <h1 style={style}>Hello world</h1>
//                <h2>哈哈哈哈</h2>
//            </div>
//        )
//    }
//}

// ES5写法，用React.createClass创建模块
import './hello.css';
import 'hello.scss';

var React = require('react');

// 内联样式
let style = {
    background: 'pink'
};

var Hello = React.createClass({
    getInitialState: function(){
        console.log('getInitialState');
    },
    getDefaultProps: function(){
        console.log('getDefaultProps');
    },
    componentWillMount: function(){
        console.log('componentDidMount');
    },
    componentDidMount: function(){
        console.log('componentDidMount');
    },
    shouldComponentUpdate: function(){
        console.log('shouldComponentUpdate');
    },
    render: function(){
        console.log('render');
        return(
            <div>
                <h1 style={style}>hello world</h1>,
                <br/>,
                <img/>
            </div>
        );
    }
});

module.exports = Hello;