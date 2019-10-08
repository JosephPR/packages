import React from 'react';
import Texty from 'rc-texty';
import QRCode from 'qrcode.react';
import '../App.css'

export default function Home () {
  return(
    <div className="intro" style={{ marginTop: 64 }}>
   <Texty mode='random' type='bounce' duration={1000}>Hello</Texty>
   <Texty mode='smooth'  duration={4000}>Welcome to my Portfolio</Texty>
   <Texty mode='sync'  duration={3000}>My name is Joseph Reilly</Texty>
   <QRCode value='https://github.com/JosephPR' />
 </div>

  )
}
