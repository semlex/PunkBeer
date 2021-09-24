import React, {Component} from 'react';
import {Form, InputGroup, Input, Button} from 'reactstrap';

import './search-panel.css';

export default class SearchPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: this.props.term
        }
    }

    onValueChanged = (e) => {
        e.preventDefault();
        this.setState({
            term: e.target.value
        });
    }

    onUpdateSearch = (e) => {
        e.preventDefault();
        this.props.onUpdateSearch(this.state.term);
    }

    render() {
        return (
            <Form 
                className = "search-panel my-4 px-2"
                onSubmit = {this.onUpdateSearch}>
                <InputGroup className = "d-flex">
                    <Input 
                        type = "search" 
                        placeholder = "Search for beer..."
                        value = {this.state.term}
                        onChange = {this.onValueChanged}/>
                    <Button 
                        type = "submit" 
                        color = "primary"
                        >Search</Button>
                </InputGroup>
        </Form>
        )
    }
}