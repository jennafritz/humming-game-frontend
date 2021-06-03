import React from 'react'
import LoginForm from '../Component/LoginForm'
import RegisterForm from '../Component/RegisterForm'
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'

const LoginFormModal = (props) => {

    const [loginMode, setLoginMode] = useState("login")

    return (
        <Modal
            {...props}
            size="lg"
            centered >
            <Modal.Header closeButton>
                <Modal.Title>{loginMode === "login" ? "Log In" : loginMode === "register" ? "Register" : null}</Modal.Title>
            </Modal.Header>
            <Modal.Body >
                {loginMode === "login" ? <LoginForm onHide={props.onHide} handleLogin={props.handleLogin} /> : loginMode === "register" ? <RegisterForm handleRegister={props.handleRegister} /> : null}
            </Modal.Body>
            <Modal.Footer >
                <p>{loginMode === "login" ? "Register New User" : loginMode === "register" ? "Log In to Get Started" : null}</p>
                <button onClick={() => {
                    if (loginMode === "login") {
                        return setLoginMode("register")
                    } else if (loginMode === "register") {
                        return setLoginMode("login")
                    } else return null
                }}>{loginMode === "login" ? "Register" : loginMode === "register" ? "Log In" : null}</button>
            </Modal.Footer>
        </Modal>
    )

}

export default LoginFormModal