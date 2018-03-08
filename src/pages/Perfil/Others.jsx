
import React, { PureComponent } from 'react';
import { Container, Button, Input, Form, FormGroup, Label } from 'reactstrap';
import { connect } from 'react-redux';
import { Icon } from 'react-fa';
import Editor from '../../components/Editor';
import User from './User';

const mapProps = (state) => ({
    auth: { session: state.auth.session }
});

class Others extends PureComponent {
    handleTo = () => (e) => {
        e.preventDefault();
    }
    render() {
        return (
            <div style={{ backgroundColor: "white", width: 240, padding: 15 }}>
                <Form onSubmit={(e) => e.preventDefault()}>
                    <FormGroup>
                        <Input type="number" min={5} style={{ width: '100%' }} />
                        <div style={{ margin: 5 }} />
                        <Button color="primary">
                            Guardar
                        </Button>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default connect(mapProps)(Others);