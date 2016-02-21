package apiutils;

import (
    "log"
    "net/url"
    "net/http"
    "constants"
    "strings"
    "io/ioutil"
    "encoding/json"
)

func GetAccessToken(post_body []string) (responseJson map[string]interface{}){
    const api_url string = constants.Reddit_api_url + "access_token";
    // Create the request body
    value := url.Values{};
    value.Set("grant_type", post_body[0]);
    value.Add("code", post_body[1]);
    value.Add("redirect_uri", post_body[2]);

    // Make the request
    request, _ := http.NewRequest("POST", api_url, strings.NewReader(value.Encode()));
    request.SetBasicAuth(constants.Client_Id, constants.Client_Secret);
    request.Header.Add("Content-Type", "application/x-www-form-urlencoded");

    // Set up the client
    client := &http.Client{};

    // Get the reponse
    response, _ := client.Do(request);
    response_text, _ := ioutil.ReadAll(response.Body);
    json.Unmarshal([]byte(response_text), &responseJson);

    return;
}

func ApiRequest(url string)(responseJson map[string]interface{}){
    const api_url string = constants.Reddit_api_url;

    request, _ := http.NewRequest("GET", api_url + url, nil);
    request.SetBasicAuth(constants.Client_Id, constants.Client_Secret);

    log.Println(request);

    client := &http.Client{};

    // get the response
    response, _ := client.Do(request);
    response_text, _ := ioutil.ReadAll(response.Body);
    json.Unmarshal([]byte(response_text), &responseJson);

    return;
}
