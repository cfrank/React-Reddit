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
        console.log('Loading front page...');
        let accessToken = localStorage.getItem("AccessToken");
        fetch(`https://oauth.reddit.com/api/v1/me`, {
            mode: 'cors',
            method: 'GET',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization" : `bearer ${accessToken}`
            }
        }).then((response) => {
            if(response.status !== 401)
                return response.json();
            else{
                throw new Error("You need to refresh the token");
            }
        }).then((data) => {
            console.log(data);
        }).catch((error) => {
            console.log(error.message);
        })
    }
}
