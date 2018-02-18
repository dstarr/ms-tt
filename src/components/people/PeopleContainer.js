import React from 'react';
import {Button, Table} from "react-bootstrap";
import PersonAPI from "../../services/personService";
import People from './People';
import AddPerson from './AddPerson';

let api = new PersonAPI();

class PeopleContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            people: []
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
                <AddPerson addPerson={this.onAddNewPerson} />
            </div>
        );
    };

    onAddNewPerson = (name, occupation) => {

        const person = {
            id: this.getId(),
            name: name,
            occupation: occupation
        };

        this.setState({
            people: this.state.people.concat(person),
            newName: '',
            newOccupation: ''
        });

    };

    onDeletePerson = (id) => {

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