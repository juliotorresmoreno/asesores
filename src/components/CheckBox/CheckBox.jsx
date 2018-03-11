

import React, { PureComponent } from 'react';
import { Icon } from 'react-fa';

export default class CheckBox extends PureComponent {
    state = {
        checked: false
    }
    constructor(props) {
        super(props);
        this.state.checked = props.checked
    }
    handleClick = () => {
        this.setState({
            checked: !this.state.checked
        });
    }
    render() {
        const name = this.state.checked ? 'check-square' : 'square';
        return (
            <Icon
                name={name} onClick={this.handleClick}
                style={{ marginTop: '11px', cursor: 'pointer' }} />
        );
    }
}

//check  square 