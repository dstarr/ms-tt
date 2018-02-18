import React from 'react';
import PropTypes from 'prop-types';
import {Button, Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const People = (props) => {

    let people = props.people.map((person, index) => {

        const linkUrl = `/people/${person.id}/${person.name}/${person.occupation}`;

        return (
            <tr key={index}>
                <td>{person.id}</td>
                <td>
                    <Link to={linkUrl}>{person.name}</Link>
                </td>
                <td>{person.occupation}</td>
                <td>
                    <Button onClick={() => props.deletePerson(person.id)}>Delete</Button>
                </td>
            </tr>
        )
    });

    return (
        <div>
            <h1>People</h1>
            <Table bordered={false} responsive={true} striped={true}>
                <thead>
                <tr>
                    <td><strong>ID</strong></td>
                    <td><strong>Name</strong></td>
                    <td><strong>Occupation</strong></td>
                    <td>&nbsp;</td>
                </tr>
                </thead>
                <tbody>
                {people}
                </tbody>
            </Table>
        </div>
    );
};

People.propTypes = {
    people: PropTypes.array.isRequired,
    deletePerson: PropTypes.func.isRequired
};

export default People;