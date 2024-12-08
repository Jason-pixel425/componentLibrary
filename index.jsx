import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./components/Menu/index"
import Star from "./components/Star"
import Badge from './components/Badge/Badge'
import Banner from './components/Banner/Banner.jsx'
import { FaTriangleExclamation } from "react-icons/fa6";
import { IoWarningOutline } from "react-icons/io5";




function App() {
  return (
    <>
    <h1>Your components go here</h1>
    <Badge>Badge</Badge>
    <Badge color='red'>Badge</Badge>
    <Badge color='yellow'>Badge</Badge>
    <Badge color='green'>Badge</Badge>
    <Badge color='blue'>Badge</Badge>
    <Badge color='indigo'>Badge</Badge>
    <Badge color='purple'>Badge</Badge>
    <Badge color='pink'>Badge</Badge>
    <br />
    <br />
    <br />
    <Badge type='pill'>Badge</Badge>
    <Badge type='pill' color='red'>Badge</Badge>
    <Badge type='pill' color='yellow'>Badge</Badge>
    <Badge type='pill' color='green'>Badge</Badge>
    <Badge type='pill' color='blue'>Badge</Badge>
    <Badge type='pill' color='indigo'>Badge</Badge>
    <Badge type='pill' color='purple'>Badge</Badge>
    <Badge style={{ color: 'red', fontSize: '16px', cursor: 'pointer' }} type='pill' color='pink'>Badge</Badge>
    <IoWarningOutline style={{color: '#FBBF24'}}/>
    <Banner type='warning' messageText='There are spiders here'></Banner>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
