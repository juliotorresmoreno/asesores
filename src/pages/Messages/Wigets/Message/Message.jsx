
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
                flexDirection: "column",
                backgroundColor: 'white',
                margin: 5, height: '100%',
                minWidth: 400
            }}>
                <div>
                    <div style={{ float: 'right' }}>
                        <a href="">Denunciar</a>&nbsp;&nbsp;
                        <a href="">Ocultar mensajes</a>
                    </div>
                    <h4>Mensajes</h4>
                    <hr />
                </div>

                <div style={{ display: 'table', height: 'calc(100% - 100px)' }}>
                    <div style={{ overflowY: 'auto', height: 380 }}>
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        texto, texto, texto, texto, texto, texto, texto, texto,
                        
                    </div>
                </div>
                <div style={{ display: 'flex' }}>
                    <Input type="text" style={{ flex: 1 }} />&nbsp;&nbsp;
                    <Button color="primary">Enviar</Button>
                </div>
            </div>
        );
    }
}

export default Message;