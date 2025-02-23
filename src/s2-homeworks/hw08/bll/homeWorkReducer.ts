import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            let sort: UserType[] = []

            if (action.payload === 'up') {

                sort = state.sort((a: UserType ,b: UserType): number => {
                    if (a.name > b.name) return 1;
                    if (a.name == b.name) return 0;
                    if (a.name < b.name) return -1;
                    return 0
                })
            } else {

                sort = state.sort((a: UserType ,b: UserType): number => {
                    if (a.name < b.name) return 1;
                    if (a.name == b.name) return 0;
                    if (a.name > b.name) return -1;
                    return 0
                })
            }

            state = sort
            return state // need to fix
        }
        case 'check': {
            state = state.filter((el) => el.age >= action.payload)
            return state // need to fix
        }
        default:
            return state
    }
}
