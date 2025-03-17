import {combineReducers} from "redux";

const initState = {
    themeId: 1 as 1 | 2 | 3
}

export type initialState = typeof initState

export const themeReducer = (state = initState, action: ActionType): initialState => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {...state, themeId : action.id}

        default:
            return state
    }
}

export const changeThemeId = (id: 1 | 2 | 3) => ({ type: 'SET_THEME_ID', id } as const) // fix any

export type ActionType = ReturnType<typeof changeThemeId>

const rootReducer = combineReducers({
    theme: themeReducer,
});


export type AppStateType = ReturnType<typeof rootReducer>