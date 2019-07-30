import { GET_ERRORS } from './types'
import axios from 'axios'

export const postContactUs = (contactus, history) => dispacher => {
    axios
        .post('/api/contactus', contactus)
        .then(res => history.push('/'))
        .catch(err => 
            dispacher({
                type: GET_ERRORS,
                payload: err.response.data 
            })
        )
}

