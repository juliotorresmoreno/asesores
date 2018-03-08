
import React, { PureComponent } from 'react';
import {
    Table
} from 'reactstrap';
import { Icon } from 'react-fa';

const data = [

];

class TableExperience extends PureComponent {
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

export default TableExperience;