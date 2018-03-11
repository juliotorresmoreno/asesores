
import React, { PureComponent } from 'react';
import {
    Table
} from 'reactstrap';
import { Icon } from 'react-fa';
import { connect } from 'react-redux';
import { actionsCreators as actionsCreators1 } from '../../../../actions/experience';
import { actionsCreators as actionsCreators2 } from '../../../../actions/messages';
import moment from 'moment';

const mapProps = (state) => ({
    data: state.experience.data
});

const zero = (num) => parseInt(num, 10) > 9 ? num : `0${num}`;

class TableExperience extends PureComponent {
    static defaultProps = {
        onUpdate: () => { },
        onDelete: () => { },
        data: []
    }
    componentDidMount() {
        this.props.read();
    }
    duracion(value) {
        const sw = value.continuo_trabajando !== "0";
        const date1 = moment(new Date(`${zero(value.ano_inicio)}/${zero(value.mes_inicio)}/01`));
        const date2 = moment(new Date(`${zero(value.ano_fin)}/${zero(value.mes_fin)}/01`));
        const date3 = moment(new Date());
        const duracion = (sw ? date3: date2).diff(date1, "months");
        if (isNaN(duracion) || duracion < 0) {
            return 0;
        }
        return duracion;
    }
    render() {
        const data = this.props.data;
        return (
            <Table hover striped>
                <thead>
                    <tr>
                        <th>Cargo</th>
                        <th>Empresa</th>
                        <th>Duración</th>
                        <th style={{ width: 60 }}></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((value, index) => (
                        <tr key={index}>
                            <td>{value.cargo}</td>
                            <td>{value.empresa}</td>
                            <td>{this.duracion(value)} mes(es)</td>
                            <td>
                                <a
                                    onClick={this.props.onUpdate(value)}
                                    href="" style={{ color: 'blue' }}>
                                    <Icon name="edit" />
                                </a>
                                <a
                                    onClick={this.props.onDelete(value)}
                                    href="" style={{ color: 'red' }}>
                                    <Icon name="trash" />
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        );
    }
}

export default connect(mapProps, {
    ...actionsCreators1,
    ...actionsCreators2
})(TableExperience);