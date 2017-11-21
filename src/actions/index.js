//anmelde Status eines users ändern
export const changeUserState = userState => {
    return {
        type: 'CHANGE_USER_STATE',
        userState
    }
}