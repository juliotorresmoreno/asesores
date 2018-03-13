
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Others from './Wigets/Others';
import User from './Wigets/User';
import Describe from './Wigets/Describe';
import Skills from './Wigets/Skills';
import Experience from './Wigets/Experience';
import Educacion from './Wigets/Educacion';
import Contacto from './Wigets/Contacto';
import { actionsCreators as actionsCreators1 } from '../../actions/profile';

const mapProps = (state) => ({
    auth: { session: state.auth.session },
    profile: {
        id: state.profile.id
    }
});

const customStyles = {
    container: {
        display: "flex", 
        marginLeft: 'auto', 
        marginRight: 'auto', 
        minWith: 960, 
        maxWidth:1180
    },
    content: {
        flex: 1, 
        margin: '0 5px', 
        minWidth: 500
    },
    others: {
        margin: '0 5px'
    }
}

class Perfil extends PureComponent {
    componentDidMount() {
        const { username } = this.props.match.params;
        this.props.queryProfile(username);
    }
    handleTo = () => (e) => {
        e.preventDefault();
    }
    render() {
        return (
            <div style={customStyles.container}>
                <div style={{ margin: '0 5px', width: 240 }}>
                    <User />
                </div>
                <div style={customStyles.content}>
                    <Describe />
                    <Experience />
                    <Educacion />
                </div>
                <div style={customStyles.others}>
                    <Others />
                    <Skills />
                    <Contacto />
                </div>
            </div>
        );
    }
}

export default connect(mapProps, {
    queryProfile: actionsCreators1.profile
})(Perfil);