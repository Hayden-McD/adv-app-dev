import React from 'react'
import { Container } from 'react-bootstrap'
import LoginComponent from '../Components/LoginComponent'

const LoginPage = () => {
  return (
    <Container className="d-felx align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div className="w-80">
        <LoginComponent />
      </div>
    </Container>
)
}

export default LoginPage