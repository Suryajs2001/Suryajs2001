import React from 'react';
import './Navbar.css'; // Import the CSS file for styling
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <nav class="navbar">
                <img src="nav-video.gif" alt="My cool gif" className='nav-gif'/>
                <ul class="navbar-menu">
                    <li>
                        <NavLink to='/'> Home</NavLink>
                    </li>
                    <li className='dropdown'>
                        <a href="#courses">Courses</a>
                        <div className='dropdown-content'>
                           <NavLink  to="/fullstack">Full Stack Development</NavLink> 
                                <NavLink to='/fundamental'>Fundamental courses</NavLink> 
                                <NavLink to='/algorithm'>Data Structures and Algorithms</NavLink>
                                <NavLink to='/app'>App development</NavLink>
                                <NavLink to='/system'>System Desgin</NavLink>

                        </div>
                    </li>

                    <li className='dropdown'>
                        <a href="#free-source">Notes</a>
                        <div className="dropdown-content">
                            <a href="https://webdevelopmentbyinternativeschool.notion.site/Learn-HTML-with-Internative-School-a5a77f6db87e4921ac0baff8e49c62bd?pvs=4" target='blank'>HTML</a>
                            <a href="https://webdevelopmentbyinternativeschool.notion.site/learn-css-with-internative-school-f74304a91a764935a64d288c043c764d?pvs=4" target='blank'>CSS</a>
                            <a href="https://webdevelopmentbyinternativeschool.notion.site/Javascript-for-Web-development-by-Internative-School-7810cedc2ff343d6b4862d92b0f86b24?pvs=4" target='blank'>JavaScript</a>
                        </div>
                    </li>

                    <li className='dropdown'>
                        <a href="#coding-ground">Coding Ground</a>
                        <div className='dropdown-content'>
                            <a href="https://replit.com/" target='blank'>Replit</a>
                            <a href="https://codesandbox.io/" target='blank'>Code SandBox</a>
                        </div>
                        </li>
                    <li><a href="#teams">Teams</a></li>
                    <li><a href="https://forms.zohopublic.in/myinternative/form/BookYourSeat/formperma/p3-F3sCLly9ak4bGgc03jVrvTPDbNmfVQkI_afpzjYI?zf_rszfm=1%27;">Form</a></li>
                    <li>
                    <NavLink to='/form'>Signup</NavLink>
                    </li>
                    
                    <li>
                    <NavLink to='/login'>Login</NavLink>
                        </li>

                </ul>
            </nav>

        </header>
    );
}

export default Navbar;
