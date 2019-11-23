import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let cookies = document.cookie.split(';');
        let cookie = cookies.find((x: string) => x.indexOf('csrftoken') != -1);
        if (cookie) {
            cookie = cookie.replace('csrftoken=', '').trim();
            const clonedRequest = req.clone({ headers: req.headers.set('X-CSRFToken', cookie) });
            return next.handle(clonedRequest);
        }


        // Create simulation of upload event stream
        return next.handle(req);
    }
}