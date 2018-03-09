

import React, { PureComponent } from 'react';

class Layout extends PureComponent {
    render() {
        return (
            <div style={{ flex: 1 }}>
                {this.props.children}
            </div>
        );
    }
}

export default Layout;