import React from 'react';
import './App.css';
import 'react-alice-carousel/lib/alice-carousel.css';
import {
    BrowserRouter as Router,
    NavLink,
    Route,
    Switch,
} from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

import Home from './components/Home';
import Vision from './components/Vision';
import Goal from './components/Goal';
import Events from './components/Events';
import Publication from './components/Publication';
import Books from './components/Books';
import Support from './components/Support';
import AboutUs from './components/AboutUs';
import Contactus from './components/Team';
import Partners from './components/Partners';
import Institute from './components/Institute';
import Error from './components/Error';
import Press from './components/Press';

import Stockholm from './components/stockholm/Stockholm';
import Bibletext from './components/bibletext/Bibletext';
import Kissinger from './components/kissinger/Kissinger';
import Orthodoxy from './components/orthodoxy/Orthodoxy';
import Fudan from './components/fudan/Fudan';
import Deadsea from './components/deadsea/Deadsea';
import Isaiah from './components/isaiah/Isaiah';
import Korea from './components/korea/Korea';
import Symposium from './components/2008Symposium/2008symposium';
import Bible from './components/2015Bible/2015bible';
import Localize from './components/2012Localize/Localize';
import NeeExhibitionVideo from './components/2022NeeExhibitionVideo/2022NeeExhibitionVideo';
import NeeExhibitionWord from './components/2022NeeExhibitionWord/2022NeeExhibitionWord';
import Zhang from './components/biography/Zhang';
import Waldrup from './components/biography/Waldrup';
import Reardon from './components/biography/Reardon';
import Chiu from './components/biography/Chiu';
import Feng from './components/biography/Feng';
import ScrollToTop from './components/utils/ScrollToTop';
import Thought from './components/thought/Thought';

function App() {
    return (
        <>
            <Router>
				<ScrollToTop />
                <div className='navbar-container'>
                    <Navbar
                        collapseOnSelect
                        expand='lg'
                        bg='light'
                        variant='light'
                        className='navbar-custom'>
                        <Navbar.Brand as={NavLink} to='/'>
                            <img
                                alt=''
                                src={require('./assets/images/arcLogo.png')}
                                height='80'
                                className='d-inline-block align-top'
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls='basic-navbar-nav' />
                        <Navbar.Collapse id='basic-navbar-nav'>
                            <Nav className='ml-auto'>
                                <Nav.Link as={NavLink} to='/' exact>
                                    Home
                                </Nav.Link>
								<Nav.Link as={NavLink} to='/religious-policy-institute'>
                                    Religious Policy Institute
                                </Nav.Link>
                                <Nav.Link as={NavLink} to='/publication'>
                                    Publication
                                </Nav.Link>
                                <Nav.Link as={NavLink} to='/events'>
                                    Events
                                </Nav.Link>
                                <Nav.Link as={NavLink} to='/support'>
                                    Support
                                </Nav.Link>
                                <Nav.Link as={NavLink} to='/aboutus'>
                                    About Us
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/vision' exact component={Vision} />
                    <Route path='/goal' exact component={Goal} />
                    <Route path='/events' exact component={Events} />
                    <Route path='/publication' exact component={Publication} />
                    <Route path='/books' exact component={Books} />
                    <Route path='/support' exact component={Support} />
                    <Route path='/aboutus' exact component={AboutUs} />
                    <Route path='/contactus' exact component={Contactus} />
                    <Route path='/partners' exact component={Partners} />
					<Route path='/press' exact component={Press} />
                    <Route
                        path='/religious-policy-institute'
                        exact
                        component={Institute}
                    />
                    <Route path='/stockholm' exact component={Stockholm} />
                    <Route path='/bibletext' exact component={Bibletext} />
                    <Route path='/kissinger' exact component={Kissinger} />
                    <Route path='/orthodoxy' exact component={Orthodoxy} />
                    <Route path='/fudan' exact component={Fudan} />
                    <Route path='/deadsea' exact component={Deadsea} />
                    <Route path='/isaiah' exact component={Isaiah} />
                    <Route path='/korea' exact component={Korea} />
                    <Route path='/localize' exact component={Localize} />
                    <Route path='/2008symposium' exact component={Symposium} />
                    <Route path='/2015bible' exact component={Bible} />
					<Route path='/studies-in-global-and-historical-christian-thought' exact component={Thought} />
                    <Route
                        path='/2022neeexhibitionvideo'
                        exact
                        component={NeeExhibitionVideo}
                    />
                    <Route
                        path='/2022neeexhibitionword'
                        exact
                        component={NeeExhibitionWord}
                    />
                    <Route path='/zhang' exact component={Zhang} />
                    <Route path='/waldrup' exact component={Waldrup} />
                    <Route path='/reardon' exact component={Reardon} />
                    <Route path='/chiu' exact component={Chiu} />
                    <Route path='/feng' exact component={Feng} />
                    <Route component={Error} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
