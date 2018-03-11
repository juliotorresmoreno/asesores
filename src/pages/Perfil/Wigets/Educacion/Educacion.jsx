
import React, { PureComponent } from 'react';
import { Button } from 'reactstrap';
import Form from './Form';
import Table from './Table';
import { Icon } from 'react-fa';

class Educacion extends PureComponent {
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    handleTo = () => (e) => {
        e.preventDefault();
    }
    render() {
        return (
            <div style={{ backgroundColor: "white", padding: 15, border: '1px solid #DDD', marginBottom: 10 }}>
                <h4>Educación</h4>
                <div style={{ minHeight: 150 }}>
                    <Table />
                </div>
                <div>
                    <Button color="primary" onClick={this.toggle}>
                        <Icon name="plus" />&nbsp;
                        Agregar
                    </Button>
                </div>
                <Form isOpen={this.state.isOpen} toggle={this.toggle} />
            </div>
        );
    }
}

export default Educacion;