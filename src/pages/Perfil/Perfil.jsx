
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Others from './Wigets/Others';
import User from './Wigets/User';
import Describe from './Wigets/Describe';
import Skills from './Wigets/Skills';
import Experience from './Wigets/Experience';
import Educacion from './Wigets/Educacion';
import Contacto from './Wigets/Contacto';

const mapProps = (state) => ({
    auth: { session: state.auth.session }
});

class Perfil extends PureComponent {
    handleTo = () => (e) => {
        e.preventDefault();
    }
    render() {
        return (
            <div style={{  }}>
                <div style={{ display: "flex", marginLeft: 'auto', marginRight: 'auto', minWith: 960, maxWidth:1180 }}>
                    <div style={{ margin: '0 5px', width: 240 }}>
                        <User />
                    </div>
                    <div style={{ flex: 1, margin: '0 5px', minWidth: 500 }}>
                        <Describe />
                        <Experience />
                        <Educacion />
                    </div>
                    <div style={{ margin: '0 5px' }}>
                        <Others />
                        <Skills />
                        <Contacto />
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapProps)(Perfil);