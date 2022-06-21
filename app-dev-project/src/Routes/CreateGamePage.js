import React  from 'react'
import CreateGameComponent from '../Components/CreateGameComponent'

const CreateGamePage = ({ authError, isLoggedIn, user, auth }) => {
    return (
        <CreateGameComponent
            authError={authError}
            isLoggedIn={isLoggedIn}
            user={user}
            auth={auth}
        />
    );
};

export default CreateGamePage