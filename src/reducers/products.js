import {
	FETCH_PRODUCTS,
	FETCH_PRODUCTS_SUCCESS,
	FETCH_PRODUCTS_ERROR
} from '../constants/ActionTypes';

const initialState = {
	collection: {
		total: 0,
		per_page: 0,
		current_page: 0,
		last_page: 0,
		from: 0,
		to: 0,
		data: []
	},
	isFetching: false,
	isFetchingError: false
}

export default function (state = initialState, action) {
	switch (action.type) {
		case FETCH_PRODUCTS:
			return {
				...state,
				isFetching: true,
				isFetchingError: false				
			};

		case	FETCH_PRODUCTS_SUCCESS:
			return {
				...state,
				collection: action.payload,
				isFetching: false
			};

		case FETCH_PRODUCTS_ERROR:
			return {
				...state,
				isFetchingError: true,
				isFetching: false
			}

		default:
			return state
	}
}