import React from 'react'
import SignupComponent from '../Components/SignupComponent'
import { Container } from 'react-bootstrap'

const SignupPageContents = (props) => {
    return (
        <Container className="align-items-center justify-content-center">
          <div className="w-80">
            <SignupComponent props={props} />
          </div>
        </Container>
  )
}

export default SignupPageContents