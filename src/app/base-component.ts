import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { OnDestroy } from '@angular/core';

export class BaseComponent implements OnDestroy {
    private _subscriptions: Subscription[] = [];
    public ngOnDestroy(): void {
        for (let sub of this._subscriptions) {
            sub.unsubscribe();
        }
    }

    public markForSafeDelete(sub: Subscription) {
        this._subscriptions.push(sub);
    }
}

