import { Observable } from "rxjs/Observable";
import { BaseComponent } from "app/base-component";
import { Subscription } from "rxjs/Subscription";

export function safeSubscribe<T>(this: Observable<T>, component: BaseComponent,
    next?: (value: T) => void, error?: (error: T) => void, complete?: () => void, ): Subscription {
    let sub = this.subscribe(next, error, complete);
    component.markForSafeDelete(sub);
    return sub;
}
Observable.prototype.safeSubscribe = safeSubscribe;

declare module 'rxjs/Observable' {
    interface Observable<T> {
        safeSubscribe: typeof safeSubscribe;
    }
}
