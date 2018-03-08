
import React, { PureComponent } from 'react';
import { Table } from 'reactstrap';
import { Icon } from 'react-fa';

const data = [

];

class Educacion extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    handleTo = () => (e) => {
        e.preventDefault();
    }
    render() {
        return (
            <Table hover striped>
                <thead>
                    <tr>
                        <th>Empresa</th>
                        <th>Cargo</th>
                        <th>Duración</th>
                        <th style={{ width: 60 }}></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((value, index) => (
                        <tr>
                            <td>{value.empresa}</td>
                            <td>{value.cargo}</td>
                            <td>{value.duracion}</td>
                            <td>
                                <a href="" style={{ color: 'blue' }}><Icon name="edit" /></a>
                                <a href="" style={{ color: 'red' }}><Icon name="trash" /></a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        );
    }
}

export default Educacion;