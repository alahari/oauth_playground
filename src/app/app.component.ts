import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from './sso.config';
//import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { ApiService } from './services/api-service';
import { HttpHeaders } from '@angular/common/http';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oauth2-playground';
  accessToken: any;
  refreshToken : any;
  userInfo : any;
  expires_at: any;
  userLoggedIn = false;
  newTokens = "";
  redisCache = "";
  user = "";

  constructor(private oauthService: OAuthService, private apiService: ApiService, private changeDetector: ChangeDetectorRef) {
    this.configureSingleSignon();
    //this.changeDetector.detectChanges();

  }

  ngOnInit() {

  }

  configureSingleSignon() {
    console.log("Hello");
    //debugger;
    this.oauthService.configure(authCodeFlowConfig);
    //this.oauthService.loadDiscoveryDocumentAndTryLogin();
    // this.oauthService.tryLogin();
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    //let url = 'https://dv-reatta1-xl01.autozone.com:8443/auth/oauth/v2/authorize';
    this.oauthService.tryLogin();

    //this.oauthService.loadDiscoveryDocumentAndTryLogin();
    /* this.oauthService.loadDiscoveryDocument(url).then(() => {
        // Do what ever you want here
    }); */
    //this.oauthService.tryLogin(); 
  }

  login() {
    //debugger;
    // this.oauthService.initAuthorizationCodeFlow();
    //this.oauthService.initAuthorizationCodeFlow();
    this.oauthService.initLoginFlow();

    this.accessToken = this.oauthService.getAccessToken();
    this.refreshToken = this.oauthService.getRefreshToken();

  }

  logout() {
    //this.oauthService.logOut();

    this.apiService.logout(this.accessToken).subscribe((data) => {
      console.log("Hello");
      
      console.log(data);
      //this.redisCache = JSON.stringify(data);
    },
      (error => {
        console.log("Error!!!")
      })) 

  }

  get token() {
    let claims: any = this.oauthService.getIdentityClaims();
    this.accessToken = this.oauthService.getAccessToken();
    this.refreshToken = this.oauthService.getRefreshToken();
    return claims ? claims : null;
  }

  get tokens() {
    let accessToken: any = this.oauthService.getAccessToken;
    return accessToken;
  }

  tokenInfo() {
    console.log("Token Info " + this.accessToken)
    this.apiService.getTokenInfo(this.accessToken).subscribe((data: any) => {
      console.log(data);
      this.userInfo = JSON.stringify(data);
      var d = new Date(0);
      d.setUTCSeconds(data['expires_at']);
      //this.expires_at =  data['expires_at'];
      this.expires_at = d.toLocaleTimeString();
      this.userLoggedIn = true;
      //debugger;
      this.user =  data['claims']['username'];

    },
      (error => {
        this.userInfo = "Invalid token, please login ";
        this.userLoggedIn = false;
      }))

  }

  get aToken() {
    return this.oauthService.getAccessToken;
  }

  get rToken() {
    return this.oauthService.getRefreshToken;
  }

  get signIn() {
    return this.userLoggedIn;
  }

  getAccessTokenByRefresh() {
    this.apiService.getNewAccessToken(this.refreshToken).subscribe((data: any) => {
      console.log(data);
      this.newTokens = JSON.stringify(data);
    },
      (error => {
      }))
  }

  getOpenAMDetails() {
    this.apiService.getOpenAMDetails().subscribe((data) => {
      console.log("Hello");
      
      console.log(data);
      this.redisCache = JSON.stringify(data);
    },
      (error => {
        console.log("Error!!!")
      }))
  }

  
}



