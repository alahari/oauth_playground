import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root'
})
export class ApiService {



    private API_SERVER = "https://dv-reatta1-xl01.autozone.com:8443";

    constructor(private httpClient: HttpClient, private cookieService: CookieService) { }

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

    public getOpenAMDetails() {
        let tokenId = this.cookieService.get('AZAuthTest');

        const body = new HttpParams()
            .set('tokenId', tokenId);
        console.log(" Cookie var " + body)

        let res =  this.httpClient.get(this.API_SERVER + '/openAM/session/validate?' + 'tokenId' + "=" + tokenId);
        return res;
    }

    public logout(accessToken:string) {
        //let res =  this.httpClient.delete(this.API_SERVER + '/openAM/sso/v2/revoke?' + 'token' + "=" + accessToken+ '&'+'token_type_hint=access_token');
       
        let res =  this.httpClient.delete(this.API_SERVER + '/openAM/sso/v2/revoke?' + 'token' + "=" + "45010ad2-329e-461b-9591-dba0aa5f117d"+ '&'+'token_type_hint=access_token');
        return res;
    }


}