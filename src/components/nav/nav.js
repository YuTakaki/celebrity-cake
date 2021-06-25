import {NavLink, Link} from 'react-router-dom';
import logo from '../../media/cakelogo.png';
import '../../styles/nav.scss';
import {useRef} from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    leftArrow : {
        width: 50,
        position: 'absolute',
        right: 0
    }
})
const Nav = () => {
    const nav = useRef();
    const classes = useStyles();
    const navLists = [
        'Home',
        'Gallery',
        'Contact',
        'About',
    ];

    const showNav = () => {
        nav.current.classList.add('show-nav');
    }

    const closeNav = () => {
        nav.current.classList.remove('show-nav');

    }
    return ( 
        <header>
            <i onClick={showNav}>☰</i>
            <div className='logo'>
                <Link to='/'><img src={logo} /></Link>
                <Link to='/'><h1>Celebrity Cake</h1></Link>
            </div>
            
            <nav ref={nav} onClick={closeNav}>
                <ul className='navList'>
                    {navLists.map(nav =>(
                        <NavLink exact to={`/${nav === 'Home' ? '' : nav}`}>
                            <li>
                                {nav}
                            </li>
                        </NavLink>
                    ))}
                    
                </ul>
            </nav>

        </header>
     );
}
 
export default Nav;