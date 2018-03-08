
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
            <div style={{  }}>
                <div style={{ display: "flex", marginLeft: 'auto', marginRight: 'auto', minWith: 960, maxWidth:1180 }}>
                    <div style={{ margin: '0 5px', width: 300 }}>
                        <Menu />
                    </div>
                    <div style={{ flex: 1, margin: '0 5px', minWidth: 500 }}>
                        <Message />
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapProps)(Messages);