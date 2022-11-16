import React, { useContext } from 'react';
import { Context } from '..';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { ABOUT_ROUTE, ACHIEVEMENTS_ROUTE, CONTACT_ROUTE, LOGIN_ROUTE, NEWS_ROUTE, STATS_ROUTE, WIDGETS_ROUTE, } from '../utils/consts';
import Button from 'react-bootstrap/Button';
import { observer } from "mobx-react-lite";
import { useNavigate } from 'react-router-dom'


const NavBar = observer(() => {
    const { user } = useContext(Context)
    const navigate = useNavigate()
    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }
    return (
        <Navbar bg="dark" variant="dark">

            <NavLink className={"mr-auto"} style={{ color: "lime" }} to={ABOUT_ROUTE}>Stats Analyzer</NavLink>
            {user.isAuth ?
                <Nav style={{ color: '#343A40', justifyContent: "center", alignItems: 'center' }}  >God bless it's woking
                    <Button variant='dark' className="ml-2" style={{ color: 'lime' }} onClick={() => navigate(NEWS_ROUTE)}>News</Button>{' '}
                    <Button variant='dark' className="ml-2" style={{ color: 'lime' }} onClick={() => navigate(STATS_ROUTE)}>Stats</Button>{' '}
                    <Button variant='dark' className="ml-2" style={{ color: 'lime' }} onClick={() => navigate(ACHIEVEMENTS_ROUTE)}>Achievements</Button>{' '}
                    <Button variant='dark' className="ml-2" style={{ color: 'lime' }} onClick={() => navigate(CONTACT_ROUTE)} >Contact</Button>{' '}
                    <Button variant='dark' className="ml-2" style={{ color: 'lime' }} onClick={() => navigate(WIDGETS_ROUTE)}>Widgets</Button>{' '}
                    <Button variant='dark' className="ml-5" style={{ color: 'lime' }} onClick={() => logOut()}>Log out</Button>{' '}
                </Nav>
                :
                <Nav style={{ color: '#383838' }}>God bless it's woking
                    <Button variant='dark' className="ml-2" style={{ color: 'lime' }} onClick={() => navigate(NEWS_ROUTE)}>News</Button>{' '}
                    <Button variant='dark' className="ml-2" style={{ color: 'lime' }} onClick={() => navigate(CONTACT_ROUTE)} >Contact</Button>{' '}
                    <Button variant='dark' className="ml-2" style={{ color: 'lime' }} onClick={() => navigate(WIDGETS_ROUTE)}>Widgets</Button>{' '}
                    <Button variant='dark' className="ml-5" style={{ color: 'lime' }} onClick={() => navigate(LOGIN_ROUTE)} >Login</Button>{' '}

                </Nav>
            }
        </Navbar>
    )
})
// function _navigateToPage(Page){
//     handleClick{() => navigate(Page)}
// }

export default NavBar