
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


/*<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
    <input type="hidden" name="cmd" value="_s-xclick" />
    <input type="hidden" name="hosted_button_id" value="37NQ2BFN5C6QL" />
    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
    <img alt="" border="0" src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif" width="1" height="1"/>
    <big />
</form>*/