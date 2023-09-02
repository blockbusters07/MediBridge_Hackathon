import React, { Component } from 'react';
import Header from '../header/Header';
import Card from '../cards/Cards'

class Landing extends Component {
    render() {
        return (
            <div>
                <Header />
                <div style={{ backgroundColor: 'lightBlue' }}>
                    <Card />
                </div>
            </div>

        )
    }
}
export default Landing