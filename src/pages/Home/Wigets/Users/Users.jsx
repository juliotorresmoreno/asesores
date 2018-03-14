


import React, { PureComponent } from 'react';
import {
    Card, CardImg, CardText,
    CardBody, CardTitle, CardSubtitle, Row,
    Button, Col
} from 'reactstrap';
import { connect } from 'react-redux';
import { actionsCreators as actionsCreators1 } from '../../../../actions/users';
import { actionsCreators as actionsCreators2 } from '../../../../actions/messages';
import { withRouter } from 'react-router-dom';
import { Icon } from 'react-fa';
import { api } from '../../../../config';

const mapProps = (state) => ({
    auth: { session: state.auth.session },
    users: { data: state.users.data },
    token: state.auth.session.token
});

class Users extends PureComponent {
    handleTo = (url) => () => {
        this.props.history.push(url);
    }
    getUrl(usuario) {
        const { token } = this.props;
        return `${api}/galery/fotoPerfil/${usuario}?token=${token}`;
    }
    render() {
        const data = this.props.users.data;
        return (
            <Row>
                {data.map((value, index) => (
                    <Col style={{ marginBottom: 30 }} key={index} sm={6} lg={3} xs={12}>
                        <Card>
                            <CardImg 
                                top width="100%" alt=""
                                src={this.getUrl(value.usuario)} />
                            <CardBody>
                                <CardTitle>{value.fullname}</CardTitle>
                                <CardSubtitle>{value.legenda}</CardSubtitle>
                                <CardText>{value.descripcion}</CardText>
                                <Button
                                    color="primary"
                                    onClick={this.handleTo(`/user/${value.usuario}`)}>
                                    <Icon name="eye" />&nbsp;
                                        Ver mas
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        );
    }
}


export default connect(mapProps, {
    ...actionsCreators1,
    ...actionsCreators2
})(withRouter(Users));


