import React, { Component } from 'react';
import Search from './Search';
// import hands from '../../public/hands';

class Home extends Component {
    render() {
        return (
            <div>
                <br/>
                <p id="home">Home page content</p>
                <Search/>
            </div>
            
        );
    }
}
export default Home;