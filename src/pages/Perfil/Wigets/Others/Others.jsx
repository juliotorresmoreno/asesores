
import React, { PureComponent } from 'react';
import { Button, Input, Form, FormGroup, Label } from 'reactstrap';
import { connect } from 'react-redux';
import { actionsCreators as actionsCreators1 } from '../../../../actions/profile';
import { actionsCreators as actionsCreators2 } from '../../../../actions/messages';
import { Icon } from 'react-fa';

const mapProps = (state) => ({
    profile: {
        precio_hora: state.profile.precio_hora
    }
});

class Others extends PureComponent {
    state = {
        precio_hora: 0
    }
    componentDidMount() {
        this.setState({
            precio_hora: parseInt(this.props.profile.precio_hora || '0', 10)
        });
    }
    componentWillReceiveProps(props) {
        this.setState({
            precio_hora: parseInt(props.profile.precio_hora || '0', 10)
        });
    }
    handleTo = () => (e) => {
        e.preventDefault();
    }
    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            precio_hora: this.state.precio_hora
        };
        this.props.updateProfile(data)
            .then(() => {
                this.props.setProfile(data);
                this.props.info("Actualizado correctamente.");
            })
            .catch((err) => {
                this.props.alert("El valor especificado no es valido.");
            });
    }
    render() {
        return (
            <div style={{ backgroundColor: "white", width: 240, padding: 15, border: '1px solid #DDD', marginBottom: 10 }}>
                <h4>Salario</h4>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label>Valor hora en dolares</Label>
                        <Input
                            type="number" min={5}
                            name="precio_hora"
                            value={this.state.precio_hora}
                            onChange={this.handleChange}
                            style={{ width: '100%' }} />
                    </FormGroup>
                    <Button color="primary">
                        <Icon name="save" />&nbsp;
                        Guardar
                    </Button>
                </Form>
            </div>
        );
    }
}

export default connect(mapProps, {
    updateProfile: actionsCreators1.update,
    setProfile: actionsCreators1.setProfile,
    ...actionsCreators2
})(Others);