
import React, { PureComponent } from 'react';
import { Col, Form, FormGroup, Input, Label } from 'reactstrap';

class FormEducacion extends PureComponent {
    render() {
        return (
            <Form>
                <FormGroup row>
                    <Label sm={5}>País</Label>
                    <Col sm={7}>
                        <Input name="pais" type="text" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={5}>Título</Label>
                    <Col sm={7}>
                        <Input name="pais" type="text" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={5}>Año de inicio</Label>
                    <Col sm={7}>
                        <Input name="pais" type="text" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={5}>Año de finalización</Label>
                    <Col sm={7}>
                        <Input name="pais" type="text" />
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

export default FormEducacion;