(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('agape-auth', ['exports', '@angular/core', '@angular/common'], factory) :
    (factory((global['agape-auth'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var HeaderComponent = (function () {
        function HeaderComponent() {
        }
        /**
         * @return {?}
         */
        HeaderComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        HeaderComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-header',
                        template: "<h1>\n  <ng-content></ng-content>\n</h1>\n",
                        styles: ["h1{color:red}"]
                    },] },
        ];
        /** @nocollapse */
        HeaderComponent.ctorParameters = function () { return []; };
        return HeaderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var HeaderModule = (function () {
        function HeaderModule() {
        }
        HeaderModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        exports: [
                            HeaderComponent
                        ],
                        declarations: [HeaderComponent]
                    },] },
        ];
        return HeaderModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.HeaderModule = HeaderModule;
    exports.ɵa = HeaderComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdhcGUtYXV0aC51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL2FnYXBlLWF1dGgvc3JjL2FwcC9tb2R1bGVzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzIiwibmc6Ly9hZ2FwZS1hdXRoL3NyYy9hcHAvbW9kdWxlcy9oZWFkZXIvaGVhZGVyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtaGVhZGVyJyxcbiAgdGVtcGxhdGU6IGA8aDE+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvaDE+XG5gLFxuICBzdHlsZXM6IFtgaDF7Y29sb3I6cmVkfWBdXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICBcdCBIZWFkZXJDb21wb25lbnRcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbSGVhZGVyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQVlFO1NBQWlCOzs7O1FBRWpCLGtDQUFROzs7WUFBUjthQUNDOztvQkFiRkEsY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxZQUFZO3dCQUN0QixRQUFRLEVBQUUsNENBR1g7d0JBQ0MsTUFBTSxFQUFFLENBQUMsZUFBZSxDQUFDO3FCQUMxQjs7Ozs4QkFURDs7Ozs7OztBQ0FBOzs7O29CQUlDQyxhQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFOzRCQUNQQyxtQkFBWTt5QkFDYjt3QkFDRCxPQUFPLEVBQUU7NEJBQ1AsZUFBZTt5QkFDaEI7d0JBQ0QsWUFBWSxFQUFFLENBQUMsZUFBZSxDQUFDO3FCQUNoQzs7MkJBWkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==