
import React, { PureComponent } from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

class Menu extends PureComponent {
    handleTo = () => (e) => {
        e.preventDefault();
    }
    render() {
        return (
            <div style={{
                backgroundColor: 'white',
                height: '100%', margin: 5,
                display: 'inline-table',
                padding: 15, marginBottom: 10,
                border: '1px solid #DDD',
                width: 300
            }}>
                <Button color="primary" style={{ float: 'right' }}>Nuevo</Button>
                <h4>Mensajes</h4>
                <hr />
                <ListGroup>
                    <ListGroupItem style={{ cursor: 'pointer' }}>
                        Entrada
                    </ListGroupItem>
                    <ListGroupItem style={{ cursor: 'pointer' }}>
                        Salida
                    </ListGroupItem>
                    <ListGroupItem style={{ cursor: 'pointer' }}>
                        Papelera
                    </ListGroupItem>
                </ListGroup>
            </div>
        );
    }
}

export default Menu;