import React, {Component} from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';

export default class CardsFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', label: 'Home'},
            {name: 'favs', label: 'Favourites'}
        ]
    }

    render() {
        const buttons = this.buttons.map(({name, label}) => {
            const {filter, onFilterSelect} = this.props;
			const active = filter === name;
			return (
				<NavItem key = {name}>
                    <NavLink 
                        active = {active}
                        role = "button"
                        onClick = {() => onFilterSelect(name)}
                        >{label}</NavLink>
                </NavItem>
			)
        });

        return (
            <Nav navbar>
                {buttons}
            </Nav>
        );
    }
};