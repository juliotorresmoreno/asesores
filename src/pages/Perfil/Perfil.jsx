
import React, { PureComponent } from 'react';
import {
    Card, CardImg, CardText,
    CardBody, CardTitle, Row,
    CardSubtitle, Button, Col,
    Container
} from 'reactstrap';

class Perfil extends PureComponent {
    render() {
        return (
            <Container>
                <div style={{ backgroundColor: "white", minHeight: 515, padding: 15 }}>
                    <div style={{ width: 200, height: 200, textAlign: 'center', verticalAlign: 'middle', display:"table-cell" }}>
                        <img
                            style={{ width: "100%", height: 50 }} alt=""
                            src="/icons/148705-essential-collection/png/user-3.png" />
                    </div>
                </div>
            </Container>
        );
    }
}

export default Perfil;