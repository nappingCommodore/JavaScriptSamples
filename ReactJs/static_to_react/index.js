// import React from 'react';
// import ReactDOM from 'react-dom/client';

function Header() {
    return(
        <header>
        <nav className="header" >
            <img src="running.jpeg" className="header-logo"/>
            <ul className="header-list">
                <li>About Us</li>
                <li>Pricing</li>
                <li>Contact Us</li>
            </ul>
        </nav>
        </header>
    ) 
}


function MainBody(){
    return (
        <div>
        <h1>Mycool website about Running</h1>
        <h3>Why do I love running</h3>
        <ul>
            <li>It is simple and fun</li>
            <li>It is emotionally recharging</li>
            <li>Boosts immune system</li>
        </ul>
    </div>

    )
}
function Footer(){
    return(
        <footer className="footer">
        <small>© Running Development Inc 2001 </small>
    </footer>

    )
}

function Page() {
    return (
        <div className="container">
            <div className="inner-container">
                <Header/>
                <MainBody/>
                <Footer/>
            </div>

        </div>
        
    )
}

ReactDOM.render(<Page/>, document.getElementById("root"));
