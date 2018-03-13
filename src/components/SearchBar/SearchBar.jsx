/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { PureComponent } from 'react';
import { Input } from 'reactstrap';
import { request } from '../../util/request';
import { connect } from 'react-redux';

const mapProps = (state) => ({
    token: state.auth.session.token
});

class SearchBar extends PureComponent {
    static defaultProps = {
        data: [],
        url: '',
        onSelect: () => {},
        displayValue: (value) =>
            typeof value === "string" ?
                value : value[Object.keys(value)[0]],
        displayIcon: () => false
    };
    state = {
        isOpen: false,
        value: '',
        select: null,
        data: []
    }
    componentDidMount(props) {
        this.setState({ data: this.props.data });
    }
    componentWillReceiveProps(props) {
        this.setState({ data: props.data })
    }
    renderIcon = ({ element }) => {
        const icon = this.props.displayIcon(element);
        if (!icon) return false;
        return (
            <img style={{ height: 24, marginRight: 10 }} src={icon} alt="" />
        )
    }
    renderValue = ({ element }) => (
        <span>
            {this.props.displayValue(element)}
        </span>
    )
    handleChange = ({ target: { name, value } }) => {
        const { url } = this.props;
        if (url === "") {
            const search = new RegExp(`(${value.trim().replace(/\s+/g, '|')})`);
            const data = this.props.data.filter((v) => search.test(v.name));
            if (data.length > 10) {
                data.splice(10, data.length);
            }
            this.setState({
                [name]: value,
                data: data,
                isOpen: true
            });
        } else {
            const { token } = this.props;
            request({
                url: url + value,
                token: token
            })
                .then(({ data }) => {
                    this.setState({ data });
                });
            this.setState({
                [name]: value,
                isOpen: true
            });
        }
    }
    handleSelect = (value) => () => {
        this.setState({
            isOpen: false,
            select: value,
            value: this.props.displayValue(value)
        });
        this.props.onSelect(value);
    }
    render() {
        const { data } = this.state;
        return (
            <div ref={(el) => this.el = el}>
                <Input
                    name="value" type="text"
                    value={this.state.value}
                    onChange={this.handleChange} />
                {this.state.isOpen ? <div style={{
                    position: 'absolute',
                    backgroundColor: 'white',
                    padding: 5,
                    border: '1px solid #CCC',
                    width: this.el.clientWidth
                }}>
                    <ul style={{ display: 'block', padding: 0, marginBottom: 0 }}>
                        {data.map((value, index) => (
                            <li
                                key={index} onClick={this.handleSelect(value)}
                                style={{ display: 'block', cursor: 'pointer', margin: 10 }}>
                                <this.renderIcon element={value} />
                                <this.renderValue element={value} />
                            </li>
                        ))}
                    </ul>
                </div> : false}
            </div>
        );
    }
}

export default connect(mapProps)(SearchBar);
