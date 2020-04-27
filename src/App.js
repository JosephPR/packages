import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.scss';
import { Layout, Menu, Icon} from 'antd';
import Projects from './Components/Projects'
import About from './Components/About'
import Home from './Components/Home'
import Contact from './Components/Contact'
import Thankyou from './Components/Thankyou'

const { Header} = Layout;


function App() {
  return (
  <Router>
    <div  className='main-container'>
      <Layout>
   <Header style={{ position: 'sticky', zIndex: 1, width: '100%', backgroundColor: '#2f3e46ff' }}>
     <div className="logo" />
     <Menu
       className="top-navbar"
       theme="dark"
       mode="horizontal"
       defaultSelectedKeys={['0']}
       style={{ lineHeight: '64px' }}
     >
    
       <Menu.Item key="1"><Link className='nav-links' to='/'>Home</Link></Menu.Item>
       <Menu.Item key="2"><Link className='nav-links' to='/projects'>Projects</Link></Menu.Item>
       <Menu.Item key="3"><Link className='nav-links' to='/about'>About</Link></Menu.Item>
       <Menu.Item key="4"><Link className='nav-links' to='/contact'>Contact</Link></Menu.Item>
  
       <Menu.Item key="5"><Link className='nav-links icon' to='https://github.com/JosephPR'><Icon type="github"/></Link></Menu.Item>
       <Menu.Item key="6"><Link className='nav-links ' to='https://www.linkedin.com/in/josephpr/'><Icon type="linkedin"/></Link></Menu.Item>
       <Menu.Item key="7"><Link className='nav-links ' to='https://www.instagram.com/flipnoggin/'><Icon type="instagram"/></Link></Menu.Item>
       <Menu.Item key="8"><Link className='nav-links ' to='https://www.facebook.com/joseph.reilly.169'><Icon type="facebook"/></Link></Menu.Item>
  
     </Menu>
   </Header>

   <footer className="footer">JPR</footer>
 </Layout>

    <Route exact path="/" component={Home} />
     <Route path="/projects" component={Projects} />
     <Route path="/about" component={About} />
     <Route path="/contact" component={Contact} />
     <Route path="/thankyou" component={Thankyou} />
    </div>
   
  </Router>
  );
}

export default App;
