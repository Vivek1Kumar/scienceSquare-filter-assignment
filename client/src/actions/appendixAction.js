import axios from 'axios'

import { GET_ERRORS } from './types'

export const postAppendix = (appendix, history) => dispatch => {
    axios
        .post('/api/appendix/add', appendix)
        .then(() => history.push('/'))
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            }))
}