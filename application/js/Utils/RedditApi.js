import AuthActions from '../Actions/AuthActions';
import Options from '../Utils/Options';

export default{
    getAccessToken: (code) => {
        fetch('http://www.reddit.api/api/proxy/token', {
            mode: 'same-origin',
            method: 'post',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            // TODO: Better way of defining this without a long string
            body: `grant_type=authorization_code&code=${code}`
        }).then((response) => {
            return response.json();
        }).then((data) => {
            AuthActions.receivedAuthToken(data);
        }).catch((error) => {
            AuthActions.authTokenError(error);
        })
    },

    loadFrontPage: (id, listType) => {
        fetch('http://www.reddit.api/api/proxy/request', {
            mode: 'same-origin',
            method: 'post',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `url=${Options.api_base_url}${listType}`
         })
    }
}
