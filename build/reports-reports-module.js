(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reports-reports-module"],{

/***/ "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js":
/*!**************************************************************************!*\
  !*** ./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js ***!
  \**************************************************************************/
/*! exports provided: Ng2SearchPipeModule, Ng2SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2SearchPipeModule", function() { return Ng2SearchPipeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2SearchPipe", function() { return Ng2SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



class Ng2SearchPipe {
    /**
     * @param {?} items object from array
     * @param {?} term term's search
     * @return {?}
     */
    transform(items, term) {
        if (!term || !items)
            return items;
        return Ng2SearchPipe.filter(items, term);
    }
    /**
     *
     * @param {?} items List of items to filter
     * @param {?} term  a string term to compare with every property of the list
     *
     * @return {?}
     */
    static filter(items, term) {
        const /** @type {?} */ toCompare = term.toLowerCase();
        /**
         * @param {?} item
         * @param {?} term
         * @return {?}
         */
        function checkInside(item, term) {
            for (let /** @type {?} */ property in item) {
                if (item[property] === null || item[property] == undefined) {
                    continue;
                }
                if (typeof item[property] === 'object') {
                    if (checkInside(item[property], term)) {
                        return true;
                    }
                }
                if (item[property].toString().toLowerCase().includes(toCompare)) {
                    return true;
                }
            }
            return false;
        }
        return items.filter(function (item) {
            return checkInside(item, term);
        });
    }
}
Ng2SearchPipe.ɵfac = function Ng2SearchPipe_Factory(t) { return new (t || Ng2SearchPipe)(); };
Ng2SearchPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filter", type: Ng2SearchPipe, pure: false });
Ng2SearchPipe.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Ng2SearchPipe, factory: Ng2SearchPipe.ɵfac });
/**
 * @nocollapse
 */
Ng2SearchPipe.ctorParameters = () => [];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'filter',
                pure: false
            }]
    }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();

class Ng2SearchPipeModule {
}
Ng2SearchPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Ng2SearchPipeModule });
Ng2SearchPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function Ng2SearchPipeModule_Factory(t) { return new (t || Ng2SearchPipeModule)(); } });
/**
 * @nocollapse
 */
Ng2SearchPipeModule.ctorParameters = () => [];
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Ng2SearchPipeModule, { declarations: [Ng2SearchPipe], exports: [Ng2SearchPipe] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [Ng2SearchPipe],
                exports: [Ng2SearchPipe]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng2-search-filter.js.map

/***/ }),

/***/ "./src/app/reports/home/home.component.ts":
/*!************************************************!*\
  !*** ./src/app/reports/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../report.service */ "./src/app/reports/report.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");











function HomeComponent_h1_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Bookings made for the selected Date!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_15_tr_18_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, r_r4.release_date_time, "short"), " ");
} }
function HomeComponent_div_15_tr_18_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Not Left Yet ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_15_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HomeComponent_div_15_tr_18_div_13_Template, 3, 4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomeComponent_div_15_tr_18_div_14_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r5 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](r_r4.zone_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](r_r4.space_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](r_r4.vehicle_reg_num);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 7, r_r4.booking_date_time, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", r_r4.release_date_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !r_r4.release_date_time);
} }
function HomeComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_15_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.searchText = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Parking Zone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Parking Space");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Registration Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_15_Template_th_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.sortOnBookingTime(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Booking Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Release Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, HomeComponent_div_15_tr_18_Template, 15, 10, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.searchText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](19, 2, ctx_r2.reports, ctx_r2.searchText));
} }
class HomeComponent {
    constructor(reportService, matSnackbar) {
        this.reportService = reportService;
        this.matSnackbar = matSnackbar;
        this.currentDate = new Date();
        this.startDate = moment__WEBPACK_IMPORTED_MODULE_1__(this.currentDate.setHours(0, 0, 0, 0)).toISOString(true);
        this.endDate = moment__WEBPACK_IMPORTED_MODULE_1__(this.currentDate.setHours(0, 0, 0, 0)).add(1, 'days').toISOString(true);
        this.reports = [];
    }
    ngOnInit() {
        this.getReports({ start: this.startDate, end: this.endDate });
    }
    onSelectBookingDate(event) {
        if (event && event.target && event.target.value) {
            this.startDate = moment__WEBPACK_IMPORTED_MODULE_1__(event.target.value).toISOString(true);
            this.endDate = moment__WEBPACK_IMPORTED_MODULE_1__(event.target.value).add(1, 'days').toISOString(true);
            this.getReports({ start: this.startDate, end: this.endDate });
        }
    }
    // sort booking reports data on booking time
    sortOnBookingTime() {
        this.reports.sort((a, b) => new Date(b.booking_date_time).valueOf() - new Date(a.booking_date_time).valueOf());
    }
    // fetch reports from backend
    getReports(data) {
        this.reportService.fetchReports(data).subscribe(res => {
            if (res && res.data) {
                this.reports = res.data;
            }
            else {
                this.matSnackbar.open('Something went wrong!', 'OK', { duration: 3000 });
            }
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_report_service__WEBPACK_IMPORTED_MODULE_2__["ReportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 16, vars: 6, consts: [[1, "m-3"], [2, "display", "flex", "justify-content", "space-between"], ["matInput", "", "placeholder", "DD/MM/YY", 3, "matDatepicker", "max", "value", "click", "dateChange"], ["matSuffix", "", 3, "for"], ["bookingDatePicker", ""], ["align", "center", "class", "mt-4", 4, "ngIf"], ["class", "reportsContainer", 4, "ngIf"], ["align", "center", 1, "mt-4"], [1, "reportsContainer"], [1, "searchboxdiv"], [1, "searchbox"], ["type", "text", "placeholder", " Search Reports...", 2, "width", "80%", 3, "ngModel", "ngModelChange"], [1, "table-md"], [1, "blue_row"], [2, "cursor", "pointer", 3, "click"], [4, "ngFor", "ngForOf"], [2, "font-weight", "500"], [4, "ngIf"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Parking Zone Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Booking Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_input_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); return _r0.open(); })("dateChange", function HomeComponent_Template_input_dateChange_9_listener($event) { return ctx.onSelectBookingDate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-datepicker-toggle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-datepicker", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomeComponent_h1_14_Template, 2, 0, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HomeComponent_div_15_Template, 20, 5, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r0)("max", ctx.currentDate)("value", ctx.currentDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reports.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reports.length > 0);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepicker"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], pipes: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__["Ng2SearchPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: [".reportsContainer[_ngcontent-%COMP%] {\n  background: #ffffff;\n  box-shadow: 0px 1px 8px rgba(20, 46, 110, 0.6);\n  border-radius: 8px;\n  padding: 2%;\n  margin-top: 20px;\n  max-height: 74vh;\n  overflow-y: auto;\n}\n.reportsContainer[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 20px;\n}\n.reportsContainer[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.reportsContainer[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .reportsContainer[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  text-align: center;\n  color: #414d55;\n}\n.reportsContainer[_ngcontent-%COMP%]   .searchboxdiv[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.reportsContainer[_ngcontent-%COMP%]   .searchboxdiv[_ngcontent-%COMP%]   .searchbox[_ngcontent-%COMP%] {\n  display: flex;\n  width: 40%;\n  align-items: center;\n}\n.reportsContainer[_ngcontent-%COMP%]   .searchboxdiv[_ngcontent-%COMP%]   .searchbox[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  border-radius: 6px;\n  border: none;\n  background-color: #f1f5f8;\n  font-size: 12px;\n  padding: 2% 8%;\n  width: 80%;\n  color: #90a1ac;\n  letter-spacing: 0.5px;\n}\n.blue_row[_ngcontent-%COMP%] {\n  background: #effeff;\n  border-radius: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLDhDQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFBSTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQUVSO0FBRFE7RUFDSSxnQkFBQTtBQUdaO0FBRFE7O0VBRUksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFHWjtBQUFJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBRVI7QUFEUTtFQUNJLGFBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFHWjtBQUZZO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFJaEI7QUFFQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcG9ydHNDb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggOHB4IHJnYmEoMjAsIDQ2LCAxMTAsIDAuNik7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBwYWRkaW5nOiAyJTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA3NHZoO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIHRhYmxlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIHRoIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGgsXHJcbiAgICAgICAgdGQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6ICM0MTRkNTU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNlYXJjaGJveGRpdiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgLnNlYXJjaGJveCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWY1Zjg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyJSA4JTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzkwYTFhYztcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmJsdWVfcm93IHtcclxuICAgIGJhY2tncm91bmQ6ICNlZmZlZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _report_service__WEBPACK_IMPORTED_MODULE_2__["ReportService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "./src/app/reports/report-rotuing.module.ts":
/*!**************************************************!*\
  !*** ./src/app/reports/report-rotuing.module.ts ***!
  \**************************************************/
/*! exports provided: ReportRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportRoutingModule", function() { return ReportRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/reports/home/home.component.ts");





const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
];
class ReportRoutingModule {
}
ReportRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ReportRoutingModule });
ReportRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ReportRoutingModule_Factory(t) { return new (t || ReportRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReportRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/reports/report.service.ts":
/*!*******************************************!*\
  !*** ./src/app/reports/report.service.ts ***!
  \*******************************************/
/*! exports provided: ReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportService", function() { return ReportService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





class ReportService {
    constructor(http) {
        this.http = http;
    }
    getToken() {
        return JSON.parse(localStorage.getItem('pUser')).Authorization;
    }
    // fetch vehicle parking reports from backend
    fetchReports(data) {
        let token = this.getToken();
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/vehicleparking/reports`, data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                Authorization: token
            })
        });
    }
}
ReportService.ɵfac = function ReportService_Factory(t) { return new (t || ReportService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ReportService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ReportService, factory: ReportService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ReportService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/reports/reports.module.ts":
/*!*******************************************!*\
  !*** ./src/app/reports/reports.module.ts ***!
  \*******************************************/
/*! exports provided: ReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsModule", function() { return ReportsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../angular-material.module */ "./src/app/angular-material.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/reports/home/home.component.ts");
/* harmony import */ var _report_rotuing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./report-rotuing.module */ "./src/app/reports/report-rotuing.module.ts");








class ReportsModule {
}
ReportsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ReportsModule });
ReportsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ReportsModule_Factory(t) { return new (t || ReportsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _report_rotuing_module__WEBPACK_IMPORTED_MODULE_6__["ReportRoutingModule"],
            _angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__["Ng2SearchPipeModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ReportsModule, { declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _report_rotuing_module__WEBPACK_IMPORTED_MODULE_6__["ReportRoutingModule"],
        _angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"],
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__["Ng2SearchPipeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ReportsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _report_rotuing_module__WEBPACK_IMPORTED_MODULE_6__["ReportRoutingModule"],
                    _angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"],
                    ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__["Ng2SearchPipeModule"],
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=reports-reports-module.js.map