import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import 'antd/dist/antd.less';
import { Button } from 'antd';
// import '../dist/iconfont/iconfont.css';
import './index.less';

//
const a1 = <div className="container">Hello, world!222
				<div>
					<i className="iconfont icon-ticket" style={{color: 'black', fontSize: 24}}></i>
				</div>
				<div className="testStyle">
					测试less
				</div>
				<Button type="primary">Primary</Button>
				<a href="#">primary</a>
			</div>;

//
ReactDOM.render(
	a1,
	document.getElementById('root')
);