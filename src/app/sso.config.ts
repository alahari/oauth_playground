import { AuthConfig } from 'angular-oauth2-oidc-codeflow';

   export const authCodeFlowConfig: AuthConfig = {
    // Url of the Identity Provider
    issuer: 'https://dv-reatta1-xl01.autozone.com:8443',
    // issuer: 'https://demo.identityserver.io',
    loginUrl: 'https://dv-reatta1-xl01.autozone.com:8443/auth/oauth/v2/authorize',
    tokenEndpoint: 'https://dv-reatta1-xl01.autozone.com:8443/openAM/sso/v2/token',
    //tokenEndpoint: 'https://dv-reatta1-xl01.autozone.com:8443/auth/oauth/v2/token',


    // URL of the SPA to redirect the user to after login
    redirectUri: 'https://dv-shop-ui.apps.nonprod.mem.cloud.autozone.com',
    //redirectUri: window.location.origin + '/index.html',


    // The SPA's id. The SPA is registerd with this id at the auth-server
   //  clientId: 'server.code',
    clientId: 'l7xx1178c83e206a471da040323a34acf43b',
   //clientId: 'spa',


    // Just needed if your auth server demands a secret. In general, this
    // is a sign that the auth server is not configured with SPAs in mind
    // and it might not enforce further best practices vital for security
    // such applications.
    // dummyClientSecret: 'secret',

    responseType: 'code',
    

    // set the scope for the permissions the client should request
    // The first four are defined by OIDC.
    // Important: Request offline_access to get a refresh token
    // The api scope is a usecase specific one
    scope: 'az_internal_extended',
    //scope: 'openid profile email offline_access api',

    //strictDiscoveryDocumentValidation: false,
    sessionChecksEnabled: true,
    strictDiscoveryDocumentValidation: false,


    showDebugInformation: true
   // oidc: false
  }; 



  /* export const authCodeFlowConfig: AuthConfig = {
    issuer: 'https://demo.identityserver.io',
    clientId: 'interactive.public', // The "Auth Code + PKCE" client
    responseType: 'code',
    redirectUri: window.location.origin + '/index.html',
    silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
    scope: 'openid profile email api', // Ask offline_access to support refresh token refreshes
    //useSilentRefresh: true, // Needed for Code Flow to suggest using iframe-based refreshes
    silentRefreshTimeout: 5000, // For faster testing
    timeoutFactor: 0.25, // For faster testing
    sessionChecksEnabled: true,
    showDebugInformation: true, // Also requires enabling "Verbose" level in devtools
    clearHashAfterLogin: false, // https://github.com/manfredsteyer/angular-oauth2-oidc/issues/457#issuecomment-431807040,
    nonceStateSeparator : 'semicolon' // Real semicolon gets mangled by IdentityServer's URI encoding
  }; */