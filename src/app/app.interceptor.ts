import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  //intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //const API_KEY = '123456';
   // const Hello-hh = 'hi'
  //  const Access-Control-Allow-Credentials = true;
  
  //  return next.handle(httpRequest.clone({ setHeaders: { "Access-Control-Allow-Credentials":"true"} }));

    intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    
      // console.log("interceptor: " + req.url);
      req = req.clone({
        withCredentials: false
            });
           // debugger;
      
      return next.handle(req);
  }

  }
