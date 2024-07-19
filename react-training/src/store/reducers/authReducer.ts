import { AuthAction } from "../actions"

const initialState = {
 isLoggedIn: false	
}
const authReducer = (state = initialState, action: { type: string, data: any }) => {

	switch (action.type) {
		case AuthAction.LOGIN:
			console.log('action ', action)
			return {
				...state,
				isLoggedIn: true 
			}
	
		default:
			break;
	}
	return state
}

export default authReducer