import React from 'react'
import { Container } from 'react-bootstrap'
import SignupComponent from '../Components/SignupComponent'
import { AuthProvider } from '../Components/AuthContext'

const SignupPage = () => {
  return (
    <AuthProvider>
      <Container className="d-felx align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
        <div className="w-80">
          <SignupComponent />
        </div>
      </Container>
    </AuthProvider>
  )
}

export default SignupPage