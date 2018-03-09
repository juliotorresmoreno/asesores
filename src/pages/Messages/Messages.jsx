
import React, { PureComponent } from 'react';
import Menu from './Wigets/Menu';
import Message from './Wigets/Message';
import { connect } from 'react-redux';

const mapProps = (state) => ({
    auth: { session: state.auth.session }
});

class Messages extends PureComponent {
    handleTo = () => (e) => {
        e.preventDefault();
    }
    render() {
        return (
            <div style={{ display: 'table', height: 'calc(100% - 56px)', minWith: 960, maxWidth: 1180, marginLeft: 'auto', marginRight: 'auto' }}>
                <div style={{ display: 'table-cell', verticalAlign: 'middle' }}>
                    <div style={{ height: '100%', width: '100%', display: 'table' }}>
                        <div style={{ display: 'table-row' }}>
                            <div style={{
                                display: 'table-cell',
                                verticalAlign: 'top',
                                width: 300
                            }}>
                                <Menu />
                            </div>
                            <div style={{ display: 'table-cell', verticalAlign: 'top' }}>
                                <Message />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapProps)(Messages);