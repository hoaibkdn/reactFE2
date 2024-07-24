import { AuthAction, INCREASE_COUNT } from "../actions"

const initialState = {
 isLoggedIn: false,
 loading: 'idle',
 count: 0,
}
const authReducer = (state = initialState, action: { type: string, data: any }) => {

	switch (action.type) {
		case AuthAction.LOGIN:
			console.log('action ', action)
			return {
				...state,
				isLoggedIn: true 
			}
		case INCREASE_COUNT: {
			return {
				...state,
				count: state.count + (action.data?.increasedDistance || 0)
			}
		}
		default:
			break;
	}
	return state
}

export default authReducer