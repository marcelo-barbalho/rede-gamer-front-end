import { saveToken } from "../../config/auth";
import {http} from "../../config/http";
import { auth as serviceAuth } from '../../services/auth';
import history from '../../config/history'



export const LOGIN = "LOGIN"
export const LOGIN_LOADING = "LOGIN_LOADING"


export const login = (props) => {
    return async (dispatch) => { 
        try {
            console.log("props recebida pela auth action", props, "dentro da auth action")
            // dispatch({ type: LOGIN_LOADING, loading: true })
            const {data}  = await serviceAuth(props);
            console.log( 'no meio da auth action')
            dispatch({ type: LOGIN, data })
            saveToken(data,props.username)
            http.defaults.headers["x-auth-token"] = data.token;
            console.log('antes de sair da auth action')
            history.push('/')
        } catch (error) {
            console.log(error)
        }

    };
}

