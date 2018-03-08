
import React, { PureComponent } from 'react';
import { Button, Input, Form } from 'reactstrap';
import { connect } from 'react-redux';
import Editor from '../../../../components/Editor';

const mapProps = (state) => ({
    auth: { session: state.auth.session }
});

class Describe extends PureComponent {
    handleTo = () => (e) => {
        e.preventDefault();
    }
    render() {
        return (
            <div style={{ backgroundColor: "white", padding: 15, border: '1px solid #DDD', marginBottom: 10 }}>
                <h1>
                    {this.props.auth.session.nombres}&nbsp;
                    {this.props.auth.session.apellidos}
                </h1>
                <Form onSubmit={(e) => e.preventDefault()}>
                    <div style={{ display: 'flex', width: '100%' }}>
                        <Input type="text" style={{ fkex: 1 }} />&nbsp;&nbsp;
                        <Button style={{ float: 'right' }} color="primary">
                            Guardar
                        </Button>
                    </div>
                </Form>
                <br />
                <Editor />
                <div style={{ margin: 5 }} />
                <Button color="primary">
                    Guardar
                </Button>
            </div>
        );
    }
}

export default connect(mapProps)(Describe);