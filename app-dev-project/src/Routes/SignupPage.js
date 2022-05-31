import React from 'react'
import { Container } from 'react-bootstrap'
import SignupComponent from '../Components/SignupComponent'

const SignupPage = () => {
  return (
      <Container className="d-felx align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
        <div className="w-80">
          <SignupComponent />
        </div>
      </Container>
  )
}

export default SignupPage