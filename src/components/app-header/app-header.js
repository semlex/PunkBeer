import React, {Component} from 'react';
import {Navbar, NavbarBrand, Container, NavbarToggler, Collapse} from 'reactstrap';

import CardsFilter from '../cards-filter';

import './app-header.css';

export default class AppHeader extends Component{
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    onTogglerClick = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <Navbar dark expand = "sm" className = "app-header py-2">
                <Container>
                    <NavbarBrand className = "fs-1 fw-light lh-1" href = "/">
                        Beans Love Beers
                    </NavbarBrand>
                    <NavbarToggler onClick={() => this.setState({ isOpen: !this.state.isOpen })}/>
                    <Collapse className = "justify-content-end align-items-center" isOpen = {this.state.isOpen} navbar>
                        <CardsFilter 
                            filter = {this.props.filter}
                            onFilterSelect = {this.props.onFilterSelect}/>
                    </Collapse>
                </Container>
            </Navbar>
        )
    }
}