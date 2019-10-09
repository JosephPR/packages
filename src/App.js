import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import { Layout, Menu} from 'antd';
import Projects from './Components/Projects'
import About from './Components/About'
import Home from './Components/Home'
import Contact from './Components/Contact'

const { Header} = Layout;


function App() {
  return (
  <Router>
    <div>
      <Layout>
   <Header style={{ position: 'sticky', zIndex: 1, width: '100%' }}>
     <div className="logo" />
     <Menu
       theme="dark"
       mode="horizontal"
       defaultSelectedKeys={['1']}
       style={{ lineHeight: '64px' }}
     >
       <Menu.Item key="1"><Link to='/'>Home</Link></Menu.Item>
       <Menu.Item key="2"><Link to='/projects'>Projects</Link></Menu.Item>
       <Menu.Item key="3"><Link to='/about'>About</Link></Menu.Item>
       <Menu.Item key="4"><Link to='/contact'>Contact</Link></Menu.Item>
     </Menu>
   </Header>


 </Layout>

    <Route exact path="/" component={Home} />
     <Route path="/projects" component={Projects} />
     <Route path="/about" component={About} />
     <Route path="/contact" component={Contact} />
    </div>
  </Router>
  );
}

export default App;
