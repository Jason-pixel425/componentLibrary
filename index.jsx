import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./components/Menu/index"
import Star from "./components/Star"
import Badge from './components/Badge/Badge'
import Banner from './components/Banner/Banner.jsx'
import Card from './components/Card/Card.jsx'
import CardIcon from './components/Card/testIcon/Capture.png'
import testImage from './components/Testimonial/testImage/testImage.jfif'
import Testimonial from './components/Testimonial/Testimonial.jsx'
import { FaTriangleExclamation } from "react-icons/fa6";
import { IoWarningOutline } from "react-icons/io5";




export default function App() {
  return (
    <>
    <h1>Your components go here</h1>
    <div className='badges-container'>
    <Badge>Badge</Badge>
    <Badge color='red'>Badge</Badge>
    <Badge color='yellow'>Badge</Badge>
    <Badge color='green'>Badge</Badge>
    <Badge color='blue'>Badge</Badge>
    <Badge color='indigo'>Badge</Badge>
    <Badge color='purple'>Badge</Badge>
    <Badge color='pink'>Badge</Badge>
    <Badge type='pill'>Badge</Badge>
    <Badge type='pill' color='red'>Badge</Badge>
    <Badge type='pill' color='yellow'>Badge</Badge>
    <Badge type='pill' color='green'>Badge</Badge>
    <Badge type='pill' color='blue'>Badge</Badge>
    <Badge type='pill' color='indigo'>Badge</Badge>
    <Badge type='pill' color='purple'>Badge</Badge>
    <Badge style={{ color: 'red', fontSize: '16px', cursor: 'pointer' }} type='pill' color='pink'>Badge</Badge>
    </div>
    <Banner type='success' messageText='The spiders are gone'></Banner>
    <Banner type='warning' messageText='There are spiders here'></Banner>
    <Banner type='error' messageText='The spiders got you' ></Banner>
    <Banner type='info' messageText='There are spiders'></Banner>
    <Banner type='success' messageText='The spiders are gone' messageDesc='No spiders'></Banner>
    <Banner type='warning' messageText='There are spiders here' messageDesc='Beware'></Banner>
    <Banner type='error' messageText='The spiders got you' messageDesc='The spiders got you'></Banner>
    <Banner type='info' messageText='There are spiders' messageDesc='Amazing'></Banner>
    
    <br />
    <br />
    <br />
    <div className='cards-container'>
    <Card>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card>
    <Card><a href='#'>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</a></Card>
    <Card brandIcon={CardIcon}><a href='#'>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</a></Card>
    <Card brandIcon={CardIcon}>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card>
    </div>

    <br />
    {/* <Testimonial></Testimonial> */}
    <Testimonial imgSrc={testImage}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
    </Testimonial>
    <Testimonial>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.</Testimonial>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
