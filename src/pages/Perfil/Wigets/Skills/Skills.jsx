
import React, { PureComponent } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Icon } from 'react-fa';
import { connect } from 'react-redux';
import { actionsCreators as actionsCreators1 } from '../../../../actions/skills';
import { actionsCreators as actionsCreators2 } from '../../../../actions/messages';
import { withRouter } from 'react-router-dom';

const mapProps = (state) => ({
    data: state.skills.data,
    profile: {
        isMe: state.profile.isMe
    }
});

class Skills extends PureComponent {
    state = {
        skills: '',
        data: []
    }

    componentDidMount() {
        const { username } = this.props.match.params;
        this.props.read(username);
    }

    componentWillReceiveProps(props) {
        this.setState({
            data: props.data
        });
    }

    handleChange = ({ target: { name, value } }) => {
        this.setState({
            [name]: value
        });
    };

    remove = (value) => () => {
        const { isMe } = this.props.profile;
        if (!isMe) return;
        this.props.delete({ id: value.id })
            .then(() => {
                this.props.info("Eliminado correctamente.");
            })
            .catch((err) => {
                this.props.alert(err.message);
            });
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { skills } = this.state;
        this.props.create({
            nombre: skills
        })
            .then(() => {
                this.setState({ skills: '' });
                this.props.info("Creado correctamente.");
            })
            .catch((err) => {
                this.props.alert(err.message);
            });
    }

    render() {
        const { isMe } = this.props.profile;
        const data = this.state.data;
        return (
            <div style={{ backgroundColor: "white", width: 240, padding: 15, border: '1px solid #DDD', marginBottom: 10 }}>
                <div style={{ minHeight: 220 }}>
                    <h4>Habilidades</h4>
                    {isMe ? <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label>Skills</Label>
                            <Input
                                type="search" name="skills"
                                value={this.state.skills}
                                onKeyPress={this.handleKeyPress}
                                onChange={this.handleChange} />
                        </FormGroup>
                    </Form> : false}
                    <div style={{ margin: '-5px -5px 10px -5px' }}>
                        {data.map((value, index) => (
                            <div
                                key={index}
                                onClick={this.remove(value)}
                                style={{
                                    display: 'inline-block',
                                    padding: 8, margin: 5,
                                    border: '1px solid #CCC',
                                    cursor: 'pointer',
                                    backgroundColor: '#DDD'
                                }}>
                                {value.nombre}&nbsp;
                                {isMe ? <Icon name="close" /> : false}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapProps, {
    ...actionsCreators1,
    ...actionsCreators2
})(withRouter(Skills));