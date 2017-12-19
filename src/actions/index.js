//anmelde Status eines users ändern
export const changeUserState = userState => {
    return {
        type: 'CHANGE_USER_STATE',
        userState
    }
}

export const dropDownUser = (id) => {
    return {
        type: 'DROP_DOWN_USER',
        id
    }
}

export const kinderAuswahl = (id) => {
    return {
        type: 'KINDERAUSWAHL',
        id
    }
}

export const fragenAuswahl = (id) => {
    return {
        type: 'FRAGEN_AUSWAHL',
        id
    }
}

export const ergebnis = (id, value) => {
    return {
        type: 'ERGEBNIS',
        id, 
        value
    }
}