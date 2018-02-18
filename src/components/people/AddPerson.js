import React from 'react';
import PropTypes from 'prop-types'
import {Button} from 'react-bootstrap';

class AddPerson extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            newName: '',
            newOccupation: ''
        }
    }

    render = () => {

        return (
            <div>
                <input onChange={this.onNameChange}
                       className='input'
                       placeholder={'Name'}
                       value={this.state.newName}/>
                {' '}
                <input onChange={this.onOccupationChange}
                       className='input'
                       placeholder={'Occupation'}
                       value={this.state.newOccupation}/>
                {' '}
                <Button onClick={this.onAddPerson}>Add</Button>
            </div>
        );
    };

    onAddPerson = () => {
        this.props.addPerson(this.state.newName, this.state.newOccupation)

        this.setState({
            newName: '',
            newOccupation: ''
        });
    };

    onOccupationChange = (e) => {
        this.setState({
            newOccupation: e.target.value
        });
    };

    onNameChange = (e) => {
        this.setState({
            newName: e.target.value
        });
    };
}

AddPerson.propTypes = {
    addPerson: PropTypes.func.isRequired
};

export default AddPerson;