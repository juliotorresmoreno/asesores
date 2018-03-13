
import React, { PureComponent } from 'react';
import Menu from './Wigets/Menu';
import Message from './Wigets/Message';
import { Switch, Route, withRouter } from 'react-router-dom';

const customStyles = {
    container: { 
        display: "flex", 
        marginLeft: 'auto', 
        marginRight: 'auto', 
        minWith: 960, 
        maxWidth:1180
    },
    content: {
        display: 'table', width: '100%'
    },
    cell: {
        display: 'table-cell',
        verticalAlign: 'middle'
    },
    table: {
        height: '100%', width: '100%', display: 'table'
    },
    row: {
        display: 'table-row'
    },
    menuCell: {
        display: 'table-cell',
        verticalAlign: 'top',
        width: 300 
    },
    messageCell: {
        display: 'table-cell',
        verticalAlign: 'top'
    }
};

class Messages extends PureComponent {
    handleTo = () => (e) => {
        e.preventDefault();
    }

    renderMessage = () => <Message path={this.props.location.pathname} t={Date.now()} />

    render() {
        const path = "/mensajes/:username";
        return (
            <div style={customStyles.container}>
                <div style={customStyles.content}>
                    <div style={customStyles.cell}>
                        <div style={customStyles.table}>
                            <div style={customStyles.row}>
                                <div style={customStyles.menuCell}>
                                    <Menu path={this.props.location.pathname} />
                                </div>
                                <div style={customStyles.messageCell}>
                                    <Switch>
                                        <Route path={path} exact component={this.renderMessage} />
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Messages);
