import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./components/Menu/index"
import Star from "./components/Star"
import Badge from './components/Badge/Badge'
import Banner from './components/Banner/Banner.jsx'
import { FaTriangleExclamation } from "react-icons/fa6";
import { IoWarningOutline } from "react-icons/io5";




export default function App() {
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
    <Banner type='success' messageText='There are spiders gone'></Banner>
    <Banner type='warning' messageText='There are spiders here'></Banner>
    <Banner type='error' messageText='There are spiders got you' ></Banner>
    <Banner type='info' messageText='There are spiders'></Banner>
    <Banner type='success' messageText='There are spiders gone' messageDesc='No spiders'></Banner>
    <Banner type='warning' messageText='There are spiders here' messageDesc='Kill them'></Banner>
    <Banner type='error' messageText='There are spiders got you' messageDesc='You got got'></Banner>
    <Banner type='info' messageText='There are spiders' messageDesc='Amazing'></Banner>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
