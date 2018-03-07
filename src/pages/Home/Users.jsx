


import React, { PureComponent } from 'react';
import {
    Card, CardImg, CardText,
    CardBody, CardTitle, Row,
    CardSubtitle, Button, Col
} from 'reactstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const mapProps = (state) => ({
    auth: { session: state.auth.session }
});

const data = [
    1
];

class Users extends PureComponent {
    render() {
        if (this.props.auth.session === null) return <Redirect to="/login" />;
        return (
            data.map((value, index) => (
                <Row>
                    <Col key={index} sm={6} lg={3} xs={12}>
                        <Card>
                            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            ))
        );
    }
}

export default connect(mapProps)(Users);