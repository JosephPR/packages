import React from 'react';
import Texty from 'rc-texty';
// import {Icon} from 'antd'
// import QRCode from 'qrcode.react';
import { Link} from 'react-router-dom';

import '../App.scss'

export default function Home() {
  return (<div className="home">
    <div className="intro" style={{
      }}>
        <div className='heading'>
      <Texty mode='random' duration={1000}>Joseph Reilly</Texty>
      <Texty mode='sync' duration={3000}>Software Engineer</Texty>
        </div>
     <div className='links'>
     <Link className='project-link' to='/projects'><Texty mode='smooth' duration={6000}>Click here to check out some of my work</Texty>  </Link>
      <a className='project-link' href='https://docs.google.com/document/d/1tO05_yABI3o6cGgVrt_zy4tXTHdErPQWg3E00IqRm_U/'><Texty mode='random' duration={3000}>Here's my Resume</Texty></a>
     </div>
    </div>
 
    {/* <div className='godzilla' >
      <img  alt='godzilla' src='https://media.giphy.com/media/hRwpDnvt6lMFSx5J0h/giphy.gif'/>
    </div> */}
  
  </div>)
}
