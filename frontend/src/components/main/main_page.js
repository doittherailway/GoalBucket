import React from 'react';

class MainPage extends React.Component {

    render() {
        return (
            <div className="splash">
                <div className="splash-left">
                    <img className="bottom-img" src="/images/splash_1.jpg" alt=""/>
                    <img className="middle-img"src="/images/splash_2.jpg" alt="" />
                    <img className="top-img" src="/images/splash_3.jpg" alt="" />
                </div>
                <div className="splash-right">
                    <h1>GOAL</h1>
                    <h1>BUCKET</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore 
                        magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea 
                        commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore eu 
                        fugiat nulla pariatur.</p>
                </div>
            </div>
        );
    }
}

export default MainPage;