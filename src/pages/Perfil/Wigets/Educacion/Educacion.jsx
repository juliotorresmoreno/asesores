
import React, { PureComponent } from 'react';
import { Button } from 'reactstrap';
import Form from './Form';
import Table from './Table';
import { Icon } from 'react-fa';

class Educacion extends PureComponent {
    state = {
        isOpen: false,
        select: {}
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen,
            select: {}
        });
    }

    handleUpdate = (value) => (e) => {
        e.preventDefault();
        this.setState({
            isOpen: true,
            select: value
        });
    }

    handleDelete = (value) => (e) => {
        e.preventDefault();
        alert(`handleDelete ${value.id}`);
    }

    handleTo = () => (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div style={{ backgroundColor: "white", padding: 15, border: '1px solid #DDD', marginBottom: 10 }}>
                <h4>Educación</h4>
                <div style={{ minHeight: 150 }}>
                    <Table
                        onUpdate={this.handleUpdate}
                        onDelete={this.handleDelete} />
                </div>
                <div>
                    <Button color="primary" onClick={this.toggle}>
                        <Icon name="plus" />&nbsp;
                        Agregar
                    </Button>
                </div>
                <Form
                    toggle={this.toggle}
                    data={this.state.select}
                    isOpen={this.state.isOpen}
                    className={this.props.className} />
            </div>
        );
    }
}

export default Educacion;