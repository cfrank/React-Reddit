package requestutils;

import (
    "net/url"
    "net/http"
    "constants"
    "apiutils"
    "encoding/json"
)

// Return an access token.
func ReturnToken(writer http.ResponseWriter, body url.Values){
    var grant_type string = body.Get("grant_type");
    var code string = body.Get("code");
    const Redirect_Url string = constants.Redirect_Url;

    // Construct a string array to hold the data which will be sent to the
    // api
    post_data := []string{grant_type, code, Redirect_Url}

    response, _ := json.Marshal(apiutils.GetAccessToken(post_data));

    writer.Write(response);
}
