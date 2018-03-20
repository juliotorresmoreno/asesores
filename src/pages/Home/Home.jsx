
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Users from './Wigets/Users';

const mapProps = (state) => ({
    auth: { session: state.auth.session }
});

class Home extends PureComponent {
    render() {
        return (
            <div style={{ minWith: 960, maxWidth: 1020, marginLeft: 'auto', marginRight: 'auto' }}>
                <Users />
            </div>
        );
    }
}

export default connect(mapProps)(Home);

