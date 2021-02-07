import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private API_SERVER = "https://dv-reatta1-xl01.autozone.com:8443";

    constructor(private httpClient: HttpClient) { }

    public getTokenInfo(token: string) {
        let headers = new HttpHeaders();
        // headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        headers = headers.set('Authorization', 'Bearer ' + token);


        return this.httpClient.get(this.API_SERVER + '/auth/oauth/v2/tokeninfo', { headers: headers });
    }

    public getNewAccessToken(refreshToken: string) {
        
   const body = new HttpParams()
            // headers.set('Content-Type', 'application/json; charset=utf-8');
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .set('client_id', 'l7xx1178c83e206a471da040323a34acf43b')
            .set('grant_type', 'refresh_token')
            .set('refresh_token', refreshToken);

      


        return this.httpClient.post(this.API_SERVER + '/openAM/sso/v2/token', body, {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/x-www-form-urlencoded')
        });
    }

    public getOpenAMDetails(){
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
           
          withCredentials: true, 
          observe: 'response' as 'response'
          };  
        debugger;
        return this.httpClient.post(this.API_SERVER+'/openAM/sso/v2/revoke',{},httpOptions);
    }


}