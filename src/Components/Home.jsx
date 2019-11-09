import React from 'react';
import Texty from 'rc-texty';
import {Icon} from 'antd'
import QRCode from 'qrcode.react';
import '../App.css'

export default function Home() {
  return (<div>
    <div className="intro" style={{
        marginTop: 64
      }}>
      <Texty mode='random' duration={1000}>Hello</Texty>
      <Texty mode='smooth' duration={4000}>Welcome to my Portfolio</Texty>
      <Texty mode='sync' duration={3000}>My name is Joseph Reilly</Texty>
    </div>
    <div className='qr'>
        <a className='github' href='https://github.com/JosephPR'><Icon type="github"/></a>
        <a className='linkedin' href='https://www.linkedin.com/in/josephpr/'><Icon type="linkedin"/></a>
        <a className='instagram' href='https://www.instagram.com/flipnoggin/'><Icon type="instagram"/></a>
        <a className='facebook' href='https://www.facebook.com/joseph.reilly.169'><Icon type="facebook"/></a>
    </div>
    <div className='qr'>
      <QRCode value='https://github.com/JosephPR'/>
      <QRCode value='https://www.linkedin.com/in/josephpr/'/>
      <QRCode value='https://www.instagram.com/flipnoggin/'/>
      <QRCode value='https://github.com/JosephPR'/>

    </div>
  </div>)
}
