

import React, { PureComponent } from 'react';
import { Button } from 'reactstrap';
import { Icon } from 'react-fa';

class TabBasico extends PureComponent {
    render() {
        return (
            <Button color="primary">
                <Icon name="paypal" />&nbsp;
                Paypal
            </Button>
        );
    }
}

export default TabBasico;