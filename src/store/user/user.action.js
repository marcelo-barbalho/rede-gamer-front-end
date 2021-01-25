import { postUser } from "../../services/admin.js"
import {login} from '../auth/auth.action'
import history from '../../config/history'


export const createUser = (props) => {
    return async (dispatch) => { 
        try {
            console.log(props, "dentro da action")
            // dispatch({ type: LOGIN_LOADING, loading: true })
            const {data}  = await postUser(props);
            console.log( 'no meio da action', data)
            await login(props)(dispatch)
            console.log('antes de sair da action')
            history.push('/')
        } catch (error) {
            console.log(error)
        }

    };
}

