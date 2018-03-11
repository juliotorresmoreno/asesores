
import React, { PureComponent } from 'react';
import { Button } from 'reactstrap';
import Form from './Form';
import Table from './Table';
import { Icon } from 'react-fa';

import { connect } from 'react-redux';
import { actionsCreators as actionsCreators1 } from '../../../../actions/experience';
import { actionsCreators as actionsCreators2 } from '../../../../actions/messages';

const mapProps = (state) => ({

});

class Experience extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            select: {}
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    handleTo = () => (e) => {
        e.preventDefault();
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
        this.props.confirm("¿Realmente deseas eliminar esto?", () => {
            e.preventDefault();
            const data = {
                id: `${value.id}`
            };
            this.props.delete(data)
                .then(() => {
                    this.props.info("Eliminado correctamente.");
                    this.props.toggle();
                })
                .catch((err) => {
                    this.props.alert(err.message);
                });
        });
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

export default connect(mapProps, {
    ...actionsCreators1,
    ...actionsCreators2
})(Experience);