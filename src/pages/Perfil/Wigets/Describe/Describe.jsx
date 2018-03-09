
import React, { PureComponent } from 'react';
import { Button, Input, Form } from 'reactstrap';
import Editor from '../../../../components/Editor';
import { connect } from 'react-redux';
import { actionsCreators as actionsCreators1 } from '../../../../actions/profile';
import { actionsCreators as actionsCreators2 } from '../../../../actions/messages';

const mapProps = (state) => ({
    auth: { session: state.auth.session }
});

class Describe extends PureComponent {
    state = {
        legenda: ""
    }
    handleTo = () => (e) => {
        e.preventDefault();
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            legenda: this.state.legenda
        };
        this.props.updateProfile(data)
            .then(() => {
                this.props.info("Actualizado correctamente.");
            })
            .catch((err) => {
                this.props.alert(err.message);
            });
    }
    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    }
    render() {
        return (
            <div style={{ backgroundColor: "white", padding: 15, border: '1px solid #DDD', marginBottom: 10 }}>
                <h1>
                    {this.props.auth.session.nombres}&nbsp;
                    {this.props.auth.session.apellidos}
                </h1>
                <Form onSubmit={this.handleSubmit}>
                    <div style={{ display: 'flex', width: '100%' }}>
                        <Input
                            type="text" name="legenda"
                            value={this.state.legenda}
                            style={{ flex: 1 }}
                            onChange={this.handleChange} />&nbsp;&nbsp;
                        <Button style={{ float: 'right' }} color="primary">
                            Guardar
                        </Button>
                    </div>
                </Form>
                <br />
                <Editor />
                <div style={{ margin: 5 }} />
                <Button color="primary">
                    Guardar
                </Button>
            </div>
        );
    }
}

export default connect(mapProps, {
    updateProfile: actionsCreators1.update,
    ...actionsCreators2
})(Describe);