package main;

import (
    "log"
    "net/http"
    "requestutils"
    "time"
)

func requestToken(writer http.ResponseWriter, request *http.Request){
    switch request.Method {
        case "POST":
            // Handle
            request.ParseForm();
            requestutils.ReturnToken(writer, request.Form);
            break;
        case "GET":
            log.Println("GET request to token proxy");
            writer.Write([]byte("Sorry I only accept POST requests..."));
    }
}

func main(){
    const address string = "127.0.0.1:1414";

    mulplex := http.NewServeMux()

    requestHandler := http.HandlerFunc(requestToken);
    mulplex.Handle("/proxy/token", requestHandler);

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
