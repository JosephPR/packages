import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.scss';
import { Layout, Menu} from 'antd';
import Projects from './Components/Projects'
import About from './Components/About'
import Home from './Components/Home'
import Contact from './Components/Contact'
import Thankyou from './Components/Thankyou'

const { Header} = Layout;


function App() {
  return (
  <Router>
    <div >
      <Layout>
   <Header className="navbar" style={{ position: 'sticky', zIndex: 1, width: '100%' }}>
     <div className="logo" />
     <Menu
       className="navbar"
       theme="dark"
       mode="horizontal"
       defaultSelectedKeys={['0']}
       style={{ lineHeight: '64px' }}
     >
       <Menu.Item key="1"><Link className='nav-links' to='/'>Home</Link></Menu.Item>
       <Menu.Item key="2"><Link className='nav-links' to='/projects'>Projects</Link></Menu.Item>
       <Menu.Item key="3"><Link className='nav-links' to='/about'>About</Link></Menu.Item>
       <Menu.Item key="4"><Link className='nav-links' to='/contact'>Contact</Link></Menu.Item>
     </Menu>
   </Header>


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
