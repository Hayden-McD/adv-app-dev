export const routes = {
    HOME: `/`,
    SIGNUP: `/signup`,
    LOGIN: `/login`,
    HOWTOPLAY: `/how`,
    CREATEGAME: '/create-game'
}

export const loggedin_notallowed = [routes.LOGIN, routes.SIGNUP]

export const loggedin_allowed = [routes.HOME, routes.CREATEGAME, routes.HOWTOPLAY]