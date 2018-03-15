
import React, { PureComponent } from 'react';
import Menu from './Wigets/Menu';
import Message from './Wigets/Message';

const customStyles = {
    container: {
        display: "flex", 
        marginLeft: 'auto', 
        marginRight: 'auto', 
        minWith: 960, 
        maxWidth:1180,
        minHeight: 400
    },
    content: {
        flex: 1, 
        margin: '0 5px', 
        minWidth: 690,
        display: 'flex'
    },
    others: {
        margin: '0 5px'
    }
}

class Messages extends PureComponent {
    render() {
        const path = this.props.location.pathname;
        return (
            <div style={customStyles.container}>
                <div style={{ margin: '0 5px', width: 300 }}>
                    <Menu path={path} />
                </div>

                <div style={customStyles.content}>
                    <Message path={path} t={Date.now()} />
                </div>
            </div>
        );
    }
}

export default Messages;

