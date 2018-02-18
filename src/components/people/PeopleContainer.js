import React from 'react';
import {Button, Table} from "react-bootstrap";
import PersonAPI from "../../services/personService";
import People from './People';

let api = new PersonAPI();

class PeopleContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            people: [],
            newName: '',
            newOccupation: ''
        };
    }

    componentWillMount = () => {
        let people = api.getAuthors();

        this.setState({
            people: people
        });
    };

    render = () => {

        return (
            <div>
                <People people={this.state.people}
                        deletePerson={this.onDeletePerson} />
                <div>
                    <input onChange={this.onNameChange}
                           className='inpt'
                           placeholder={'Name'}
                           value={this.state.newName}/>
                    {' '}
                    <input onChange={this.onOccupationChange}
                           placeholder={'Occupation'}
                           value={this.state.newOccupation}/>
                    {' '}
                    <Button onClick={this.onAddNewPerson}>Add</Button>
                </div>
            </div>
        );
    };

    onAddNewPerson = () => {

        if (this.state.newName === '' ||
            this.state.newOccupation === '') {
            return;
        }

        const person = {
            id: this.getId(),
            name: this.state.newName,
            occupation: this.state.newOccupation
        };

        this.setState({
            people: this.state.people.concat(person),
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

    onDeletePerson = (id) => {

        console.log(id);

        let people = this.state.people.filter(person => (id !== person.id));

        this.setState({
            people: people
        });
    };

    getId() {

        let currentId = 0;

        for (let i = 0; i < this.state.people.length; i++) {

            if (this.state.people[i].id > currentId)
                currentId = this.state.people[i].id;
        }

        return currentId + 1;
    };
}

export default PeopleContainer;