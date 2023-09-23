const Header = (props) => {
    return (
        <header className="App-header">
            <img src={props.logoSrc} alt='skull' className="App-logo"/>
            <img src={props.heartSrc} alt="heart" className="App-heart"/>
            <h1 className="App-title">{props.pageTitle}</h1>
        </header>
    )
};

export default Header;