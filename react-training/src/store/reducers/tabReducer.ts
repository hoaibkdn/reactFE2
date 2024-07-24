import { TABS_NUMBER } from './../../constant';
import { CHANGE_TAB } from './../actions'

const initialState = {
	active: TABS_NUMBER.POSTS
}

const tabReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case CHANGE_TAB:
			return {
				...state,
				active: action.tabActive	
			}
	
	}
	return state
}



export default tabReducer