
import React, { PureComponent } from 'react';
import { Button } from 'reactstrap';
import Editor from '../../../../components/Editor';

class Message extends PureComponent {
    handleTo = () => (e) => {
        e.preventDefault();
    }
    render() {
        return (
            <div style={{
                backgroundColor: 'white',
                marginBottom: 10, padding: 15,
                border: '1px solid #DDD',
                minHeight: 500,
                display: "flex", flexDirection: "column"
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
                    <Editor />
                    <br />
                    <Button color="primary">Enviar</Button>
                </div>
            </div>
        );
    }
}

export default Message;