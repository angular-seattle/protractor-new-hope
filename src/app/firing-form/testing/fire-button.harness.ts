import { DebugElement } from "@angular/core";
import {By} from '@angular/platform-browser';
import { FireButtonComponent } from "../fire-button.component";

export class FireButtonHarness {
    static fromElement(el: DebugElement) {
        const root = el.query(By.directive(FireButtonComponent));
        return new FireButtonHarness(root);
    }

    constructor(private root: DebugElement) {}

    getReadyButton() {
        return this.root.query(By.css('button.ready'));
    }

    getFireButton() {
        return this.root.query(By.css('button.fire'));
    }
    
    isReadyDisabled() {
        return this.getReadyButton().nativeElement.getAttributeNames().includes("disabled");
    }

    isFireDisabled() {
        return this.getFireButton().nativeElement.getAttributeNames().includes("disabled");
    }
}