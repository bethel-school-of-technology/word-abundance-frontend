import React, { Component } from 'react';
import Card from '../../../components/Card';
import SideNav from '../Layout/SideNav';

class HouseCleaning extends Component {
    render() {
        return (
            <div>
            <SideNav/>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-4'>
                      
                    </div>
                    <br />
                    <div className='col-sm-12'>
                    <h3> House Cleaning </h3>
                    <Card />
                    </div>
                </div>
              </div>
            </div>
        );
    }
}
export default HouseCleaning;