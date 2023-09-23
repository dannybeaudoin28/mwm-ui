import Header from "../../components/header/Header";
import SkullImg from '../../assets/skull.jpg';
import HeartImg from '../../assets/heart.jpg';

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
        <>
            <Header logoSrc={SkullImg} heartSrc={HeartImg} pageTitle="MourneWithMe.com" />
                <NavigationContainer>
                    <NavLinks>
                        <NavLink to='/'>HOME</NavLink>
                        <NavLink to='/about'>ABOUT</NavLink>
                        <NavLink to='/contact'>CONTACT</NavLink>
                        <NavLink to='/auth'>SIGN IN</NavLink>
                    </NavLinks>
                </NavigationContainer>
                <Outlet />
            
        </>

    )
};

export default Navigation;