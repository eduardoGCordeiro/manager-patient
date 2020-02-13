import React, { Component } from 'react';
import {Navbar, Image} from 'react-bootstrap'
import '../../style/header.css';

export default class Header extends Component{
    render(){
        return (
            <div>
              <Navbar className='bg-header' variant='dark'>
                <Navbar.Brand href='/home'>
                  <Image src={require('../images/icon-health.png')}  width="30" height="30" className="d-inline-block align-top mr-2"/>
                  Patient Manager
                </Navbar.Brand>
              </Navbar>
            </div>
        );
    };
};

