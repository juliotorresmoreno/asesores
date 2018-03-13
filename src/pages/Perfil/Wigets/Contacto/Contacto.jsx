
import React, { PureComponent } from 'react';
import { Button, Input, Form, FormGroup, Label } from 'reactstrap';
import { connect } from 'react-redux';
import { actionsCreators as actionsCreators1 } from '../../../../actions/profile';
import { actionsCreators as actionsCreators2 } from '../../../../actions/messages';
import { Icon } from 'react-fa';

const mapProps = (state) => ({
    auth: { session: state.auth.session },
    profile: {
        telefono: state.profile.telefono,
        celular: state.profile.celular,
        email: state.profile.email,
        isMe: state.profile.isMe
    }
});

const customStyles = {
    container: {
        backgroundColor: "white",
        width: 240, padding: 15,
        border: '1px solid #DDD',
        marginBottom: 10
    }
}

class Contacto extends PureComponent {
    state = {
        telefono: '',
        celular: '',
        email: ''
    }
    handleTo = () => (e) => {
        e.preventDefault();
    }
    componentDidMount() {
        this.setState({
            telefono: this.props.profile.telefono,
            celular: this.props.profile.celular,
            email: this.props.profile.email
        });
    }
    componentWillReceiveProps(props) {
        this.setState({
            telefono: props.profile.telefono,
            celular: props.profile.celular,
            email: props.profile.email
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            telefono: this.state.telefono,
            celular: this.state.celular,
            email: this.state.email,
            permiso_telefono: 'public',
            permiso_celular: 'public',
            permiso_email: 'public'
        };
        this.props.updateProfile(data)
            .then(() => {
                this.props.setProfile(data);
                this.props.info("Actualizado correctamente.");
            })
            .catch((err) => {
                this.props.alert("Ocurrio un error desconocido");
            });
    }
    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    }
    render() {
        const { isMe } = this.props.profile;
        return (
            <div style={customStyles.container}>
                <h4>Contacto</h4>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label>Telefono</Label>
                        <Input
                            type="text" name="telefono"
                            value={this.state.telefono}
                            readOnly={!isMe}
                            onChange={this.handleChange}
                            style={{ width: '100%' }} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Celular</Label>
                        <Input
                            type="text" name="celular"
                            value={this.state.celular}
                            readOnly={!isMe}
                            onChange={this.handleChange}
                            style={{ width: '100%' }} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input
                            type="email" name="email"
                            value={this.state.email}
                            readOnly={!isMe}
                            onChange={this.handleChange}
                            style={{ width: '100%' }} />
                    </FormGroup>
                    {isMe ? <Button color="primary">
                        <Icon name="save" />&nbsp;
                        Guardar
                    </Button> : false}
                </Form>
            </div>
        );
    }
}

export default connect(mapProps, {
    updateProfile: actionsCreators1.update,
    setProfile: actionsCreators1.setProfile,
    ...actionsCreators2
})(Contacto);