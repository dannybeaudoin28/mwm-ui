import Header from "../../components/header/Header";
import SkullImg from '../../assets/skull.jpg';
import HeartImg from '../../assets/heart.jpg';

import {
    NavigationContainer,
    LogoContainer,
    NavLinks,
    NavLink,
  } from './navigation.styles';

import './navigation.styles';
import { Outlet } from "react-router";

const Navigation = () => {
    return (
        <>
            <Header logoSrc={SkullImg} heartSrc={HeartImg} pageTitle="MourneWithMe.com" />
            <div>
                <NavigationContainer>
                    <NavLinks>
                        <NavLink to='/'>HOME</NavLink>
                        <NavLink to='/about'>ABOUT</NavLink>
                        <NavLink to='/auth'>SIGN IN</NavLink>
                    </NavLinks>
                </NavigationContainer>
                <Outlet />
            </div>
        </>

    )
};

export default Navigation;