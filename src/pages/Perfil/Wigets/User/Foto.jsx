
import React, { PureComponent } from 'react';
import {
    Button, Modal,
    ModalHeader, ModalBody,
    ModalFooter, TabContent,
    TabPane, Nav, NavItem,
    NavLink, Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import { Icon } from 'react-fa';
import Logo from '../../../../components/Logo';
import classnames from 'classnames';
import Webcam from 'react-webcam';
import { actionsCreators } from '../../../../actions/galerias';
import { connect } from 'react-redux';
import { api } from '../../../../config';

const mapProps = (state) => ({
    fotos: state.galerias.data,
    token: state.auth.session.token
});

const src = api + "/galery/galeria/";

class Foto extends PureComponent {
    static defaultProps = {
        isOpen: false,
        toggle: () => { }
    }
    state = {
        activeTab: '2',
        image: '',
        activeIndex: 0
    }
    left = 0;
    animating = false;
    naturalWidth = 0;
    componentDidMount() {
        this.props.read("galeria");
    }
    handleTo = () => (e) => {
        e.preventDefault();
    }
    handleFoto = (e) => {
        e.preventDefault();
    }
    toggle = (tab) => {
        this.setState({
            activeTab: tab
        });
    }
    handleExaminar = () => {
        this.input.click();
    }
    handleCapturar = () => {
        try {
            const imageSrc = this.webcam.getScreenshot();
            this.recortar(imageSrc);
        } catch (e) { }
    }
    handleUpload = () => {
        const canvas = window.document.createElement("canvas");
        const ctx = canvas.getContext('2d');
        const image = new Image();
        image.onload = () => {
            canvas.style.width = '348px';
            canvas.width = 348;
            canvas.height = 348;
            ctx.drawImage(image, this.left, 0, 348, 348, 0, 0, 348, 348);
            canvas.toBlob((capturaBlob) => {
                const data = new window.FormData();
                data.append("name", "foto");
                data.append("file", capturaBlob);
                data.append("galery", "galeria");
                this.props.upload(data)
                    .then(() => {
                        this.props.read("galeria")
                            .then(() => {
                                this.setState({ activeIndex: this.props.fotos.length - 1 });
                            });
                        this.setState({
                            activeTab: '3',
                            imageSrc: ''
                        });
                    });
            });
        };
        image.src = this.imageSrc;
    }

    handleChangeInputFile = (e) => {
        const files = this.input.files;
        if (files && files[0]) {
            var FR = new FileReader();
            FR.addEventListener("load", (e) => {
                this.recortar(e.target.result);
            });
            FR.readAsDataURL(files[0]);
        }
    }

    onExiting = () => {
        this.animating = true;
    }

    onExited = () => {
        this.animating = false;
    }

    next = () => {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === this.props.fotos.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({
            activeIndex: nextIndex
        });
    }

    previous = () => {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.props.fotos.length - 1 : this.state.activeIndex - 1;
        this.setState({
            activeIndex: nextIndex
        });
    }

    goToIndex = (newIndex) => {
        if (this.animating) return;
        this.setState({
            activeIndex: newIndex
        });
    }

    recortar = (src) => {
        const ctx = this.canvas.getContext("2d");
        const ctxPrev = this.canvasPrev.getContext("2d");
        const image = new Image();
        image.onload = () => {
            const width = image.naturalWidth;
            const height = image.naturalHeight;
            this.size = height > width ? width : height;
            
            ctx.clearRect(0, 0, 465, 348);
            var prop1 = width / height;
            var prop2 = 465 / 348;
            if (width > height && prop1 > prop2) {
                let cwidth = height * 465 / 348;
                let left = (width - cwidth) / 2;
                ctx.drawImage(image, left, 0, cwidth, height, 0, 0, 465, 348);
                this.imageSrc = this.canvas.toDataURL();
            } else {
                let cwidth = width / height * 348;
                let left = (465 - cwidth) / 2;
                ctx.drawImage(image, 0, 0, width, height, left, 0, cwidth, 348);
                this.imageSrc = this.canvas.toDataURL();
            }
            
            let left = (465 - 348) / 2;
            ctxPrev.clearRect(0, 0, 465, 348);
            ctxPrev.rect(0, 0, 465, 348);
            ctxPrev.fillStyle = 'rgba(0,0,0,0.2)';
            ctxPrev.fill();
            this.left = left;

            ctxPrev.clearRect(left, 0, 348, 348);
        };
        image.src = src;
        this.setState({
            activeTab: '4'
        });
    }

    hanldeMouseMove = ({ clientX, buttons, target }) => {
        if (buttons === 1) {
            const ctxPrev = this.canvasPrev.getContext("2d");
            const coords = this.canvasPrev.getBoundingClientRect();
            const x = clientX - coords.left;
            let left = x - 348 / 2;
            if (left < 0) left = 0;
            if (left > 465 - 348) left = 465 - 348;

            ctxPrev.clearRect(0, 0, 465, 348);
            ctxPrev.rect(0, 0, 465, 348);
            ctxPrev.fillStyle = 'rgba(255,255,255,0.2)';
            ctxPrev.fill();

            ctxPrev.clearRect(left, 0, 348, 348);
            this.left = left;
        }
    }

    handleSetFotoPerfil = () => {
        const { token, fotos } = this.props;
        const { activeIndex } = this.state;
        const canvas = window.document.createElement("canvas");
        const ctx = canvas.getContext('2d');
        const image = new Image();
        const imageSrc = src + fotos[activeIndex].src + "?token=" + token;
        image.setAttribute('crossOrigin', 'anonymous');
        image.onload = () => {
            canvas.width = image.naturalWidth;
            canvas.height = image.naturalHeight;
            ctx.drawImage(image, 0, 0);
            canvas.toBlob((capturaBlob) => {
                const data = new window.FormData();
                data.append("file", capturaBlob);
                this.props.setFotoPerfil(data)
                    .then(() => this.props.toggle());
            });
        };
        image.src = imageSrc;
    }

    render() {
        const { token, fotos } = this.props;
        const { activeIndex, activeTab } = this.state;
        return (
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
                <ModalHeader toggle={this.props.toggle}>
                    <Logo />&nbsp;
                    Foto
                </ModalHeader>
                <ModalBody>
                    <div>
                        <Nav tabs>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '2' })}
                                    onClick={() => { this.toggle('2'); }}
                                >
                                    Archivo
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '1' })}
                                    onClick={() => { this.toggle('1'); }}
                                >
                                    Foto
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '3' })}
                                    onClick={() => { this.toggle('3'); }}
                                >
                                    Galeria
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="1">
                                <br />
                                <div>
                                    <div>
                                        <Button style={{ width: 100 }} onClick={this.handleCapturar}>
                                            Capturar
                                        </Button>
                                    </div>
                                    <br />
                                    <div style={{ height: 348 }}>
                                        {activeTab === '1' || this.webcam ?
                                            <Webcam
                                                ref={(el) => this.webcam = el}
                                                audio={false} width={465}
                                                height={348} />: false}
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tabId="2">
                                <br />
                                <div>
                                    <div>
                                        <Button
                                            style={{ width: 100 }}
                                            onClick={this.handleExaminar}>
                                            Examinar
                                        </Button>
                                        <input
                                            type="file"
                                            onChange={this.handleChangeInputFile}
                                            style={{ display: 'none' }}
                                            ref={(el) => this.input = el} />
                                    </div>
                                    <br />
                                    <div style={{ height: 348 }}>
                                        <img
                                            alt="" src={this.state.imageSrc}
                                            style={{ maxWidth: 465, maxHeight: 348 }} />
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tabId="3">
                                <br />
                                <div>
                                    <div>
                                        <Button
                                            onClick={this.handleSetFotoPerfil}>
                                            Establecer como foto de perfil
                                        </Button>
                                    </div>
                                    <br />
                                    <div style={{ height: 348 }}>
                                        <Carousel
                                            activeIndex={activeIndex}
                                            next={this.next}
                                            previous={this.previous}
                                            interval={false}
                                        >
                                            {fotos.map((value, index) => (
                                                <CarouselItem
                                                    onExiting={this.onExiting}
                                                    onExited={this.onExited}
                                                    key={index}>
                                                    <div style={{textAlign: 'center'}}>
                                                        <img
                                                            style={{ maxWidth: 465, maxHeight: 348 }}
                                                            src={src + value.src + "?token=" + token} alt="" />
                                                    </div>
                                                </CarouselItem>
                                            ))}
                                            <CarouselControl style={{background: 'red'}} direction="prev" directionText="Previous" onClickHandler={this.previous} />
                                            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                                        </Carousel>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tabId="4">
                                <br />
                                <div>
                                    <div>
                                        <Button
                                            onClick={this.handleUpload}
                                            color="primary"
                                            style={{ marginRight: 10 }}>
                                            Recortar y subir
                                        </Button>
                                    </div>
                                    <br />
                                    <div style={{ height: 348 }}>
                                        <canvas
                                            onMouseMove={this.hanldeMouseMove}
                                            width={465} height={348}
                                            style={{ width: 465, height: 348, position: 'absolute' }}
                                            ref={(el) => this.canvasPrev = el} />
                                        <canvas
                                            width={465} height={348}
                                            style={{ width: 465, height: 348 }}
                                            ref={(el) => this.canvas = el} />
                                    </div>
                                </div>
                            </TabPane>
                        </TabContent>
                    </div>
                </ModalBody>
            </Modal>
        );
    }
}

export default connect(mapProps, {
    ...actionsCreators
})(Foto);