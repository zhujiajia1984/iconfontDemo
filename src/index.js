import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../dist/iconfont/iconfont.css';

//
const a1 = <div className="container">Hello, world!222
				<div>
					<i className="iconfont icon-ticket" style={{color: 'black', fontSize: 24}}></i>
				</div>
			</div>;

//
ReactDOM.render(
	a1,
	document.getElementById('root')
);