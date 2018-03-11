

import React, { PureComponent } from 'react';
import { Input } from 'reactstrap';


export default class Years extends PureComponent {
    render() {
        const options = [];
        const { min = 1, max = 5, ...rest } = this.props;
        for (let index = min; index <= max; index++) {
            options.push(
                <option key={index} value={`${index}`}>
                    {index}
                </option>
            );
        }
        return (
            <Input type="select" {...rest}>
                {options}
            </Input>
        );
    }
}
