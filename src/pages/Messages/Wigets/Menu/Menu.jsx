
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
                    padding: 15, marginBottom: 10,
                    border: '1px solid #DDD', 
                    minHeight: 500
                }}>
                <Button color="primary" style={{float: 'right'}}>Nuevo</Button>
                <h4>Mensajes</h4>
                <hr />
                <ListGroup>
                    <ListGroupItem>Entrada</ListGroupItem>
                    <ListGroupItem>Salida</ListGroupItem>
                    <ListGroupItem>Papelera</ListGroupItem>
                </ListGroup>
            </div>
        );
    }
}

export default Menu;