import Header from "../../components/header/Header.component";
import SkullImg from '../../assets/skull.jpg';

import {
    NavigationContainer,
    NavLinks,
    NavLink,
  } from './navigation.styles';

import './navigation.styles';
import { Outlet } from "react-router";

const Navigation = () => {

    //TODO: implement logic if user is signed in to display notification icon & SIGN OUT button instead of sign in

    return (
        // <>
        //     <Header logoSrc={SkullImg} pageTitle="MourneWithMe.com" />
        //         <NavigationContainer>
        //             <NavLinks>
        //                 <NavLink to='/'>HOME</NavLink>
        //                 <NavLink to='/posts'>POSTS</NavLink>
        //                 <NavLink to='/post'>POST</NavLink>
        //                 <NavLink to='/about'>ABOUT</NavLink>
        //                 <NavLink to='/contact'>CONTACT</NavLink>
        //                 <NavLink to='/auth'>SIGN IN</NavLink>
        //             </NavLinks>
        //         </NavigationContainer>
        //         <Outlet />
            
        // </>
        <>
            <Header logoSrc={SkullImg} pageTitle="MourneWithMe.com" />
                <div className="navigation-container">
                    <NavLinks>
                        <NavLink to='/'>HOME</NavLink>
                        <NavLink to='/posts'>POSTS</NavLink>
                        <NavLink to='/post'>POST</NavLink>
                        <NavLink to='/about'>ABOUT</NavLink>
                        <NavLink to='/contact'>CONTACT</NavLink>
                        <NavLink to='/auth'>SIGN IN</NavLink>
                    </NavLinks>
                </div>
                <Outlet />
            
        </>

    )
};

export default Navigation;