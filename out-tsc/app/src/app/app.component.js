import { Component } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = [2, "text-align", "center"];
const _c1 = ["width", "300", "alt", "Angular Logo", "src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="];
const _c2 = ["target", "_blank", "rel", "noopener", "href", "https://angular.io/tutorial"];
const _c3 = ["target", "_blank", "rel", "noopener", "href", "https://angular.io/cli"];
const _c4 = ["target", "_blank", "rel", "noopener", "href", "https://blog.angular.io/"];
export class AppComponent {
    constructor() {
        this.title = 'angular-inlining-is-broken';
    }
}
AppComponent.ngComponentDef = i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], factory: function AppComponent_Factory(t) { return new (t || AppComponent)(); }, consts: 19, vars: 1, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", _c0);
        i0.ɵɵelementStart(1, "h1");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(3, "img", _c1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "h2");
        i0.ɵɵtext(5, "Here are some links to help you start: ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "ul");
        i0.ɵɵelementStart(7, "li");
        i0.ɵɵelementStart(8, "h2");
        i0.ɵɵelementStart(9, "a", _c2);
        i0.ɵɵtext(10, "Tour of Heroes");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "li");
        i0.ɵɵelementStart(12, "h2");
        i0.ɵɵelementStart(13, "a", _c3);
        i0.ɵɵtext(14, "CLI Documentation");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "li");
        i0.ɵɵelementStart(16, "h2");
        i0.ɵɵelementStart(17, "a", _c4);
        i0.ɵɵtext(18, "Angular blog");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵselect(2);
        i0.ɵɵtextBinding(2, i0.ɵɵinterpolation1(" Welcome to ", ctx.title, "! "));
    } }, styles: [""] });
/*@__PURE__*/ i0.ɵsetClassMetadata(AppComponent, [{
        type: Component,
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null);
//# sourceMappingURL=app.component.js.map