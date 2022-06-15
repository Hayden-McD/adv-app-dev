import React from 'react'
import SignupComponent from '../Components/SignupComponent'
import { Container } from 'react-bootstrap'

const SignupPageContents = () => {
    return (
        <Container className="d-felx align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
          <div className="w-80">
            <SignupComponent />
          </div>
        </Container>
  )
}

export default SignupPageContents