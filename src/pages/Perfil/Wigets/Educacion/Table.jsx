
import React, { PureComponent } from 'react';
import { Table } from 'reactstrap';
import { connect } from 'react-redux';
import { actionsCreators as actionsCreators1 } from '../../../../actions/educacion';
import { actionsCreators as actionsCreators2 } from '../../../../actions/messages';
import { Icon } from 'react-fa';
import { withRouter } from 'react-router-dom';

const mapProps = (state) => ({
    data: state.educacion.data
});

class Educacion extends PureComponent {
    static defaultProps = {
        onUpdate: () => (e) => e.preventDefault(),
        onDelete: () => (e) => e.preventDefault(),
        data: []
    }
    componentDidMount() {
        const { username } = this.props.match.params;
        this.props.read(username);
    }
    handleTo = () => (e) => {
        e.preventDefault();
    }
    duracion(value) {
        const duracion = (value.ano_fin - value.ano_inicio) * 12;
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
                        <th>Pais</th>
                        <th>Titulo</th>
                        <th>Duración</th>
                        <th style={{ width: 60 }}></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((value, index) => (
                        <tr key={index}>
                            <td>{value.pais}</td>
                            <td>{value.titulo}</td>
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
})(withRouter(Educacion));