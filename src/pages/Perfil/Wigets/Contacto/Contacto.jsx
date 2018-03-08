
import React, { PureComponent } from 'react';
import { Button, Input, Form, FormGroup, Label } from 'reactstrap';

class Contacto extends PureComponent {
    handleTo = () => (e) => {
        e.preventDefault();
    }
    render() {
        return (
            <div style={{ backgroundColor: "white", width: 240, padding: 15, border: '1px solid #DDD', marginBottom: 10 }}>
                <h4>Contacto</h4>
                <Form onSubmit={(e) => e.preventDefault()}>
                    <FormGroup>
                        <Label>Telefono</Label>
                        <Input type="text" style={{ width: '100%' }} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input type="text" style={{ width: '100%' }} />
                    </FormGroup>
                    <Button color="primary">
                        Guardar
                    </Button>
                </Form>
            </div>
        );
    }
}

export default Contacto;