import React from 'react';
import {Button, Container, Row, Form, Modal, Spinner} from "react-bootstrap";

class LoginModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loginSuccessful: true,
            inProgress: false
        };
    }

    handleUsernameChange = (event) => {
        this.setState({username: event.target.value});
    };

    handlePasswordChange = (event) => {
        this.setState({password: event.target.value});
    };

    validateAndSubmitForm = (event) => {
        event.preventDefault();

        this.setState({inProgress: true},
            () => {

                this.props.validateAndSubmitForm(this.state.username, this.state.password, (loginSuccessful) => {
                    this.setState({inProgress: false, loginSuccessful: loginSuccessful});
                })
                // try to login, if successful, hide modal
            });
    };

    render() {
        return (
            <div>
                {this.props.showLoginModal &&
                <Modal centered show={true}
                       backdrop='static'
                       keyboard={false}>
                    <Modal.Header>
                        <Modal.Title>
                            Login Required
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Container>
                            <Row>

                                <Form>
                                    <Form.Group controlId="formLoginUsername">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control type="text" value={this.state.username}
                                                      onChange={this.handleUsernameChange}
                                                      onSubmit={this.validateAndSubmitForm}/>
                                    </Form.Group>

                                    <Form.Group controlId="formLoginPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" value={this.state.password}
                                                      onChange={this.handlePasswordChange}
                                                      onSubmit={this.validateAndSubmitForm}/>
                                    </Form.Group>
                                </Form>
                            </Row>
                            <Row>
                                <Button
                                    onClick={this.validateAndSubmitForm}
                                    disabled={this.state.inProgress}>
                                    {this.state.inProgress && <Spinner
                                        as="span"
                                        animation="border"
                                        size="sm"
                                        role="status"
                                        aria-hidden={true}
                                    />}
                                    Submit
                                </Button>
                                {!this.state.loginSuccessful &&
                                <div style={{color:'red', marginLeft: '10px'}}>Invalid username or password.</div>}
                            </Row>
                        </Container>
                    </Modal.Body>

                </Modal>}
            </div>
        );
    }

}

export default LoginModal;