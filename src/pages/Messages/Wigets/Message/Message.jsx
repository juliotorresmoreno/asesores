
import React, { PureComponent } from 'react';
import { Button, Input } from 'reactstrap';

class Message extends PureComponent {
    handleTo = () => (e) => {
        e.preventDefault();
    }
    render() {
        return (
            <div style={{
                marginBottom: 10, padding: 15,
                border: '1px solid #DDD',
                minHeight: 500, display: "flex", 
                flexDirection: "column",
                minWidth: 400, 
                backgroundColor: 'white'
            }}>
                <div>
                    <div style={{ float: 'right' }}>
                        <a href="">Denunciar</a>&nbsp;&nbsp;
                        <a href="">Ocultar mensajes</a>
                    </div>
                    <h4>Mensajes</h4>
                    <hr />
                </div>
                <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                    <div style={{ flex: 1 }}>
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                    </div>
                    <div style={{ display: 'flex' }}>
                        <Input type="text" style={{ flex: 1 }} />&nbsp;&nbsp;
                        <Button color="primary">Enviar</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Message;