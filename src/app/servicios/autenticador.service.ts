import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpInterceptor, HttpHandler, HttpEvent, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticadorService implements HttpInterceptor{

  constructor(private vinculo:HttpClient, private route:Router) {}
  intercept(req:HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('session');
    let request;
    if (token) {
      //console.log("se dio la autorizacion a: "+token);
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${ token }`
        }
      });
    }
    //return next.handle(request);
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {

        if (err.status === 401) {
          this.route.navigateByUrl('/login');
        }

        return throwError( err );

      })
    );
  }
}