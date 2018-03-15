

import React, { PureComponent } from 'react';

class Layout extends PureComponent {
    render() {
        return (
            <div style={{ flex: 1, paddingTop: 20, display: 'flex' }}>
                {this.props.children}
            </div>
        );
    }
}

export default Layout;