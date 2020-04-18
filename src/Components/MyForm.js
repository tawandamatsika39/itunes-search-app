import React from 'react';
import FieldsForm from './FieldsForm.js';
import Data from './Data.js';

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { item: "", updated: false };
    }

    myChangeHandler = event => {
        this.setState({ item: event.target.value });
        this.setState({ updated: false });
    };

    mySubmitHandler = event => {
        event.preventDefault();
        this.setState({ updated: true });

    };

    render() {
        if (this.state.updated) {
            return (
                <div>
          <FieldsForm mySubmitHandler={this.mySubmitHandler} myChangeHandler={this.myChangeHandler} />
          <Data toSearch={this.state.item} />
        </div>
            );
        } else {
            return (
                <div>
          <FieldsForm mySubmitHandler={this.mySubmitHandler} myChangeHandler={this.myChangeHandler} />
        </div>
            );
        }
    }
}

export default MyForm;