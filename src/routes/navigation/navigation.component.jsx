import Header from "../../components/header/Header.component";
import SkullImg from '../../assets/skull.jpg';

import {
    NavigationContainer,
    NavLinks,
    NavLink,
} from './navigation.styles';

import './navigation.styles';
import { Outlet } from "react-router";

// const Navigation = () => {

//     //TODO: implement logic if user is signed in to display notification icon & SIGN OUT button instead of sign in

//     return (
//         <>
//             {/* <Header logoSrc={SkullImg} pageTitle="MourneWithMe.com" />
//                 <NavigationContainer>
//                     <NavLinks>
//                         <NavLink to='/'>HOME</NavLink>
//                         <NavLink to='/posts'>POSTS</NavLink>
//                         <NavLink to='/post'>POST</NavLink>
//                         <NavLink to='/about'>ABOUT</NavLink>
//                         <NavLink to='/contact'>CONTACT</NavLink>
//                         <NavLink to='/auth'>SIGN IN</NavLink>
//                     </NavLinks>
//                 </NavigationContainer>
//                 <Outlet /> */}


//         </>
//         // <>
//         //     <Header logoSrc={SkullImg} pageTitle="MourneWithMe.com" />
//         //         <div className="navigation-container">
//         //             <NavLinks>
//         //                 <NavLink to='/'>HOME</NavLink>
//         //                 <NavLink to='/posts'>POSTS</NavLink>
//         //                 <NavLink to='/post'>POST</NavLink>
//         //                 <NavLink to='/about'>ABOUT</NavLink>
//         //                 <NavLink to='/contact'>CONTACT</NavLink>
//         //                 <NavLink to='/auth'>SIGN IN</NavLink>
//         //             </NavLinks>
//         //         </div>
//         //         <Outlet />

//         // </>

//     )
// };

// export default Navigation;

import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const drawerWidth = 240;
const navItems = ['home', 'posts', 'post', "about", "contact", "auth"];

function Navigation(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MourneWithMe
            </Typography>
            <Divider />
            <List>
                <NavLinks>
                    {navItems.map((item) => (
                        <ListItem key={item} disablePadding>
                            <ListItemButton sx={{ textAlign: 'center' }}>
                                <NavLink to={'/' + item}>
                                    <ListItemText primary={item.toUpperCase()} />
                                </NavLink>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </NavLinks>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        menu
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        MourneWithMe
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <NavLinks>
                                <NavLink to={'/' + item}>
                                    <Button key={item} sx={{ color: '#fff' }}>
                                        {item}
                                    </Button>
                                </NavLink>
                            </NavLinks>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
                <Outlet/>
            </Box>
        </Box>
    );
}

Navigation.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Navigation;