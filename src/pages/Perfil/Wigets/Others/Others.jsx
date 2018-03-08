
import React, { PureComponent } from 'react';
import { Button, Input, Form, FormGroup, Label } from 'reactstrap';
import { connect } from 'react-redux';

const mapProps = (state) => ({
    auth: { session: state.auth.session }
});

class Others extends PureComponent {
    handleTo = () => (e) => {
        e.preventDefault();
    }
    render() {
        return (
            <div style={{ backgroundColor: "white", width: 240, padding: 15, border: '1px solid #DDD', marginBottom: 10 }}>
                <Form onSubmit={(e) => e.preventDefault()}>
                    <FormGroup>
                        <Label>Valor hora en dolares</Label>
                        <Input type="number" min={5} style={{ width: '100%' }} />
                    </FormGroup>
                    <Button color="primary">
                        Guardar
                    </Button>
                </Form>
            </div>
        );
    }
}

export default connect(mapProps)(Others);