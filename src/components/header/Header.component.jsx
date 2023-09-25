import { HeaderContainer, AppTitle } from "./header.styles";

const Header = (props) => {
    return (
        <HeaderContainer>
            <img src={props.logoSrc} alt='skull' className="App-logo"/>
            {/* <img src={props.heartSrc} alt="heart" className="App-heart"/> */}
            <AppTitle className="App-title">{props.pageTitle}</AppTitle>
        </HeaderContainer>
    )
};

export default Header;