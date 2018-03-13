
import React, { PureComponent } from 'react';
import { Button, Input, Form } from 'reactstrap';
import { connect } from 'react-redux';
import { actionsCreators as actionsCreators1 } from '../../../../actions/profile';
import { actionsCreators as actionsCreators2 } from '../../../../actions/messages';
import { Icon } from 'react-fa';

const mapProps = (state) => ({
    auth: { session: state.auth.session },
    profile: {
        nombres: state.profile.nombres,
        apellidos: state.profile.apellidos,
        legenda: state.profile.legenda,
        descripcion: state.profile.descripcion,
        isMe: state.profile.isMe
    }
});

class Describe extends PureComponent {
    state = {
        nombres: "",
        apellidos: "",
        legenda: "",
        descripcion: ""
    }
    componentDidMount() {
        this.setState({
            legenda: this.props.profile.legenda,
            descripcion: this.props.profile.descripcion
        });
    }
    componentWillReceiveProps(props) {
        this.setState({
            legenda: props.profile.legenda,
            descripcion: props.profile.descripcion
        });
    }
    handleTo = () => (e) => {
        e.preventDefault();
    }
    handleSubmitLegenda = (e) => {
        e.preventDefault();
        const data = {
            legenda: this.state.legenda
        };
        this.props.updateProfile(data)
            .then(() => {
                this.props.setProfile(data);
                this.props.info("Actualizado correctamente.");
            })
            .catch((err) => {
                this.props.alert("Cantidad no valida");
            });
    }
    handleSubmitDescripcion = (e) => {
        e.preventDefault();
        const data = {
            descripcion: this.state.descripcion
        };
        this.props.updateProfile(data)
            .then(() => {
                this.props.setProfile(data);
                this.props.info("Actualizado correctamente.");
            })
            .catch((err) => {
                this.props.alert(err.message);
            });
    }
    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    }
    renderMe() {
        const { nombres, apellidos } = this.props.profile;
        return (
            <div style={{ backgroundColor: "white", padding: 15, border: '1px solid #DDD', marginBottom: 10 }}>
                <h1>
                    {nombres}&nbsp;{apellidos}
                </h1>
                <Form onSubmit={this.handleSubmitLegenda}>
                    <div style={{ display: 'flex', width: '100%' }}>
                        <Input
                            type="text" name="legenda"
                            value={this.state.legenda}
                            style={{ flex: 1 }}
                            onChange={this.handleChange} />&nbsp;&nbsp;
                        <Button style={{ float: 'right' }} color="primary">
                            <Icon name="save" />&nbsp;
                            Guardar
                        </Button>
                    </div>
                </Form>
                <br />
                <Form onSubmit={this.handleSubmitDescripcion}>
                    <Input
                        type="textarea" name="descripcion"
                        value={this.state.descripcion}
                        onChange={this.handleChange}
                        rows={4} style={{ minHeight: 100 }} />
                    <br />
                    <Button color="primary">
                        <Icon name="save" />&nbsp;
                        Guardar
                    </Button>
                </Form>
            </div>
        );
    }
    renderAll() {
        const { nombres, apellidos } = this.props.profile;
        return (
            <div style={{ backgroundColor: "white", padding: 15, border: '1px solid #DDD', marginBottom: 10 }}>
                <h1>
                    {nombres}&nbsp;{apellidos}
                </h1>
                <div style={{ width: '100%' }}>
                    <h4>{this.state.legenda}</h4>
                </div>
                <div style={{ minHeight: 100 }}>
                    {this.state.descripcion}
                </div>
            </div>
        );
    }
    render() {
        const { isMe } = this.props.profile;
        return isMe ? this.renderMe() : this.renderAll();
    }
}

export default connect(mapProps, {
    updateProfile: actionsCreators1.update,
    setProfile: actionsCreators1.setProfile,
    ...actionsCreators2
})(Describe);