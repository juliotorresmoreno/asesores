
import React, { PureComponent } from 'react';
import { Button } from 'reactstrap';
import Form from './Form';
import Table from './Table';

class Experience extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            select: {}
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    handleTo = () => (e) => {
        e.preventDefault();
    }

    handleUpdate = (value) => (e) => {
        e.preventDefault();
        this.setState({
            modal: true,
            select: value
        });
    }

    handleDelete = (value) => (e) => {
        e.preventDefault();
        alert(`handleDelete ${value.id}`);
    }

    render() {
        return (
            <div style={{ backgroundColor: "white", padding: 15, border: '1px solid #DDD', marginBottom: 10 }}>
                <h4>Experiencia</h4>
                <div style={{ minHeight: 150 }}>
                    <Table
                        onUpdate={this.handleUpdate}
                        onDelete={this.handleDelete} />
                </div>
                <div>
                    <Button
                        color="primary"
                        onClick={this.toggle}>
                        Agregar
                    </Button>
                </div>

                <Form
                    toggle={this.toggle}
                    data={this.state.select}
                    isOpen={this.state.modal}
                    className={this.props.className} />
            </div>
        );
    }
}

export default Experience;