import exp from "node:constants";

const initState = {
    isLoading: false,
}

type initStateType = typeof initState

export const loadingReducer = (state = initState, action: ActionType): initStateType => { // fix any
    switch (action.type) {
        case 'CHANGE_LOADING':
            return {
                ...state, isLoading: action.isLoading
            }

        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})

export type ActionType = ReturnType<typeof loadingAC>
