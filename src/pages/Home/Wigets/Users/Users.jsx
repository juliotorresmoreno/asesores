


import React, { PureComponent } from 'react';
import {
    Card, CardImg, CardText,
    CardBody, CardTitle, Row,
    Button, Col
} from 'reactstrap';
import { connect } from 'react-redux';
import { Redirect, Link, withRouter } from 'react-router-dom';

const mapProps = (state) => ({
    auth: { session: state.auth.session }
});

const data = [
    {
        id: 1,
        fullname: "Nombre Usuario",
        descripcion: "Texto generico"
    }, {
        id: 2,
        fullname: "Nombre Usuario",
        descripcion: "Texto generico"
    }, {
        id: 3,
        fullname: "Nombre Usuario",
        descripcion: "Texto generico"
    }, {
        id: 4,
        fullname: "Nombre Usuario",
        descripcion: "Texto generico"
    }, {
        id: 5,
        fullname: "Nombre Usuario",
        descripcion: "Texto generico"
    }, {
        id: 6,
        fullname: "Nombre Usuario",
        descripcion: "Texto generico"
    }, {
        id: 7,
        fullname: "Nombre Usuario",
        descripcion: "Texto generico"
    }, {
        id: 8,
        fullname: "Nombre Usuario",
        descripcion: "Texto generico"
    }, {
        id: 9,
        fullname: "Nombre Usuario",
        descripcion: "Texto generico"
    }, {
        id: 10,
        fullname: "Nombre Usuario",
        descripcion: "Texto generico"
    }, {
        id: 11,
        fullname: "Nombre Usuario",
        descripcion: "Texto generico"
    }, {
        id: 12,
        fullname: "Nombre Usuario",
        descripcion: "Texto generico"
    }, {
        id: 13,
        fullname: "Nombre Usuario",
        descripcion: "Texto generico"
    }, {
        id: 14,
        fullname: "Nombre Usuario",
        descripcion: "Texto generico"
    },
];

class Users extends PureComponent {
    handleTo = (url) => () => {
        this.props.history.push(url);
    }
    render() {
        return (
            <Row>
                {data.map((value, index) => (
                    <Col style={{ marginBottom: 30 }} key={index} sm={6} lg={3} xs={12}>
                        <Card>
                            <CardImg top width="100%" src="/icons/148705-essential-collection/png/picture-2.png" alt="" />
                            <CardBody>
                                <CardTitle>{value.fullname}</CardTitle>
                                <CardText>{value.descripcion}</CardText>
                                <Button color="primary" onClick={this.handleTo(`/user/${value.id}`)}>
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

export default connect(mapProps)(withRouter(Users));

