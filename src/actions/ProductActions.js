import {
	FETCH_PRODUCTS,
	FETCH_PRODUCTS_SUCCESS,
	FETCH_PRODUCTS_ERROR
} from '../constants/ActionTypes';
import axios from 'axios';



export default {
	getProducts() {
		return dispatch => {
			dispatch({type: FETCH_PRODUCTS});

      return axios.get('http://192.168.1.16:5000/products')
        // then is for RESOLVED OR SUCCESS
        .then(res => {
          dispatch({ 
            type: FETCH_PRODUCTS_SUCCESS,
            payload: res.data
          });
        })

        // catch is for ERROR OR REJECT
        .catch( res => {
        	dispatch({ type: FETCH_PRODUCTS_ERROR });
        });  
		} 
	}

}