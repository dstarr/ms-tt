import React from 'react';
import {Button, Image} from 'react-bootstrap';

class Unicorn2 extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            direction: 'left'
        }
    }

    render = () => {

        return (
            <div style={{textAlign: 'center'}}>
                <Image src={`/assets/unicorn_${this.state.direction}.png`} width={400}/>
                <div>
                    <Button onClick={this.onHandleButtonClick}>Toggle Direction</Button>
                </div>

            </div>
        );
    };

    onHandleButtonClick = () => {

        let direction;
        if(this.state.direction === 'left')
            direction = 'right';
        else
            direction = 'left';


        this.setState({
            direction
        });
    };


}

Unicorn2.propTypes = {};

export default Unicorn2;