import React, { Component } from 'react';
import Categories from '../../containers/Topics.js/Categories';

class Marketplace extends Component {
    render() {
        return (

            <div className='market'>
                <br />
                <br />
                <br/>
                <h2> STORE </h2>
                <Categories />
            </div>
        );
    }
}

export default Marketplace;

