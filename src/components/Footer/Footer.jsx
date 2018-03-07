import React, { PureComponent } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './index.css';

const post = [
    {
        title: 'Lo sentimos aún no hemos posteado nada.',
        date: 'Junio 28 de 2017'
    }
]

const stores = {
    career: {
        title: 'Informacíon',
        message: 'Lo sentimos pero no estamos contratando personal en este momento, pero si gustas puedes enviar tu hoja de vida a jobs@onna-soft.com'
    },
    privacyPolicy: {
        title: 'Informacíon',
        message: 'Compartimos con usted un acuerdo de confidencialidad, salvo excepciones especiales en las que se haga necesario la contratación de terceros para ofrecer o extender alguno de los servicios prestados no compartimos su información con nadie.',
    },
    termsConditions: {
        title: 'Informacíon',
        message: 'Usted solamente tendrá derecho a solicitar soporte y/o reclamar sobre los servicios contratados, aquellos servicios de los que se haya hecho beneficiario y no hayan sido contratados por usted no tendrán soporte, estos servicios se le prestaran con la mejor intención pero sin garantía alguna.',
    }
};

const mapProps = state => ({
    show: state.footer.show,
    title: state.footer.title,
    message: state.footer.message
});

export default class extends PureComponent {
    handleView = store => e => {
        e.preventDefault();
        let { dispatch } = this.props;
    }
    handleClose = e => {
        let { dispatch } = this.props;
    }
    render = () => {
        let actions = [
            <button key={0} onClick={this.handleClose} type="button" className="btn btn-secondary" data-dismiss="modal">
                Close
            </button>
        ];
        let { show, title, message } = this.props;
        return (
            <div>
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-6 footerleft ">
                                <div className="logofooter">OnnaSoft</div>
                                <p>Somos una empresa con espíritu innovador, nos gusta probar cosas nuevas y lo vamos a sorprender con las cosas que estamos investigando.</p>
                                <p><i className="fa fa-map-pin"></i>Kra 8 no 26-58 Barranquilla - Colombia</p>
                                <p><i className="fa fa-phone"></i> Phone (Colombia) : +57 301 381 9315</p>
                                <p><i className="fa fa-envelope"></i> E-mail : info@onna-soft.com</p>

                            </div>
                            <div className="col-md-2 col-sm-6 paddingtop-bottom">
                                <h6 className="heading7">GENERAL LINKS</h6>
                                <ul className="footer-ul">
                                    <li><a href="" onClick={this.handleView('career')}>Trabajo</a></li>
                                    <li><a href="" onClick={this.handleView('privacyPolicy')}>Politica de privacidad</a></li>
                                    <li><a href="" onClick={this.handleView('termsConditions')}>Términos y condiciones</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-sm-6 paddingtop-bottom">
                                <h6 className="heading7">LATEST POST</h6>
                                <div className="post">
                                    {post.map((v, i) => (
                                        <p key={i}>{v.title}<span>{v.date}</span></p>
                                    ))}
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 paddingtop-bottom">
                                <div className="fb-page" data-href="https://www.facebook.com/OnnaSoft-1883036931957079/?ref=aymt_homepage_panel" data-tabs="timeline" data-height="300" data-small-header="false" style={{ marginBottom: 15 }} data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
                                    <div className="fb-xfbml-parse-ignore">
                                        <blockquote cite="https://www.facebook.com/OnnaSoft-1883036931957079/?ref=aymt_homepage_panel">
                                            <a href="https://www.facebook.com/OnnaSoft-1883036931957079/?ref=aymt_homepage_panel">Facebook</a>
                                        </blockquote>
                                    </div>
                                </div>
                                <div className="fb-page" data-href="https://github.com/onna-soft" data-tabs="timeline" data-height="300" data-small-header="false" style={{ marginBottom: 15 }} data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
                                    <div className="fb-xfbml-parse-ignore">
                                        <blockquote cite="https://github.com/onna-soft">
                                            <a href="https://github.com/onna-soft">Github</a>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

                <Modal isOpen={show} toggle={this.handleClose}>
                    <ModalHeader toggle={this.handleClose}>{title}</ModalHeader>
                    <ModalBody>{message}</ModalBody>
                    <ModalFooter>
                        {actions}
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
};