package main;

import (
    "log"
    "net/http"
    "requestutils"
    "time"
)

const getErrorMessage string = "Sorry I only accept POST requests! :(";

func checkRequestMethod(methodType string)(bool){
    switch methodType {
        case "POST":
            return true;
        case "GET":
            return false;
        default:
            return false;
    }
}

func requestToken(writer http.ResponseWriter, request *http.Request){
    // Make sure
    if checkRequestMethod(request.Method) {
        // Handle
        request.ParseForm();
        requestutils.ReturnToken(writer, request.Form);
    }else{
        writer.Write([]byte(getErrorMessage));
    }
}

func redditRequest(writer http.ResponseWriter, request *http.Request){
    if checkRequestMethod(request.Method) {
        // Handle
        request.ParseForm();
        requestutils.RedditApiRequest(writer, request.Form);
    }else{
        writer.Write([]byte(getErrorMessage));
    }
}

func main(){
    const address string = "127.0.0.1:1414";

    mulplex := http.NewServeMux()

    tokenHandler := http.HandlerFunc(requestToken);
    mulplex.Handle("/proxy/token", tokenHandler);
    requestHandler := http.HandlerFunc(redditRequest);
    mulplex.Handle("/proxy/request", requestHandler);

    log.Println("Listening on 1414...");
    serv := &http.Server{
        Addr:           address,
        Handler:        mulplex,
        ReadTimeout:    5 * time.Second,
        WriteTimeout:   5 * time.Second,
        MaxHeaderBytes: 1 << 20,
    }
    err := serv.ListenAndServe();

    if err != nil {
        log.Fatal("ListenAndServe: ", err);
    }
}
