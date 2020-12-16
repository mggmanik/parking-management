(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/dashboard/booking-modal/booking-modal.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/booking-modal/booking-modal.component.ts ***!
  \********************************************************************/
/*! exports provided: BookingModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingModalComponent", function() { return BookingModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");










class BookingModalComponent {
    constructor(matSnackbar, dialogRef, data) {
        this.matSnackbar = matSnackbar;
        this.dialogRef = dialogRef;
        this.data = data;
        // regex for validating indian vehicle registration number
        this.registrationNumber = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[A-Z]{2}[0-9]{1,2}([A-Z])([A-Z]*)[0-9]{4}$/)]);
    }
    ngOnInit() {
        if (this.data) {
            this.registrationNumber.patchValue(this.data);
        }
    }
    // enter vehicle registration number
    saveBooking() {
        if (this.registrationNumber.valid) {
            this.dialogRef.close(this.registrationNumber.value);
        }
        else {
            this.matSnackbar.open('Please fill valid registration number!', 'OK', { duration: 3000 });
        }
    }
}
BookingModalComponent.ɵfac = function BookingModalComponent_Factory(t) { return new (t || BookingModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])); };
BookingModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookingModalComponent, selectors: [["app-booking-modal"]], decls: 15, vars: 4, consts: [[1, "parent"], ["mat-dialog-title", "", 2, "display", "flex", "justify-content", "space-between"], [2, "font-weight", "500", "font-size", "18pt", "font-family", "'Rubik', sans-serif"], [1, "material-icons", 3, "mat-dialog-close"], ["mat-dialog-content", ""], [1, "w-100"], ["matInput", "", "placeholder", "Registration Number", "type", "text", "required", "", 2, "text-transform", "uppercase", 3, "formControl"], ["align", "center"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function BookingModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Vehicle Registration Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookingModalComponent_Template_button_click_13_listener() { return ctx.saveBooking(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.data ? "Release" : "Book", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.registrationNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data ? "Release" : "Book");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]], styles: [".parent[_ngcontent-%COMP%] {\n  width: 30vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Jvb2tpbmctbW9kYWwvYm9va2luZy1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9ib29raW5nLW1vZGFsL2Jvb2tpbmctbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFyZW50IHtcclxuICAgIHdpZHRoOiAzMHZ3O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookingModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-booking-modal',
                templateUrl: './booking-modal.component.html',
                styleUrls: ['./booking-modal.component.scss']
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/dashboard/home/home.component.ts");





const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
];
class DashboardRoutingModule {
}
DashboardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardRoutingModule });
DashboardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashboardRoutingModule_Factory(t) { return new (t || DashboardRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../angular-material.module */ "./src/app/angular-material.module.ts");
/* harmony import */ var _booking_modal_booking_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./booking-modal/booking-modal.component */ "./src/app/dashboard/booking-modal/booking-modal.component.ts");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/dashboard/home/home.component.ts");








class DashboardModule {
}
DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function DashboardModule_Factory(t) { return new (t || DashboardModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardRoutingModule"],
            _angular_material_module__WEBPACK_IMPORTED_MODULE_3__["AngularMaterialModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _booking_modal_booking_modal_component__WEBPACK_IMPORTED_MODULE_4__["BookingModalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardRoutingModule"],
        _angular_material_module__WEBPACK_IMPORTED_MODULE_3__["AngularMaterialModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _booking_modal_booking_modal_component__WEBPACK_IMPORTED_MODULE_4__["BookingModalComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardRoutingModule"],
                    _angular_material_module__WEBPACK_IMPORTED_MODULE_3__["AngularMaterialModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/dashboard/dashboard.service.ts":
/*!************************************************!*\
  !*** ./src/app/dashboard/dashboard.service.ts ***!
  \************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





class DashboardService {
    constructor(http) {
        this.http = http;
    }
    getToken() {
        return JSON.parse(localStorage.getItem('pUser')).Authorization;
    }
    // fetch parking zones
    getParkingZones() {
        let token = this.getToken();
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/parkingzone/list`, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                Authorization: token
            })
        });
    }
    // fetch parking spaces by parking zone ID
    getParkingSpacesByZoneID(data) {
        let token = this.getToken();
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/parkingspace/filter`, data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                Authorization: token
            })
        });
    }
    // update single parking space
    updateParkingSpace(id, data) {
        let token = this.getToken();
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/parkingspace/update/${id}`, data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                Authorization: token
            })
        });
    }
    // reset parking spaces
    resetParkingSpaces() {
        let token = this.getToken();
        const data = {
            vehicle_reg_num: ''
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/parkingspace/updateAll`, data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                Authorization: token
            })
        });
    }
    // create vehicle parking booking
    createVehicleParking(data) {
        let token = this.getToken();
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/vehicleparking/create`, data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                Authorization: token
            })
        });
    }
    // update vehicle parking booking to enter release date time
    updateVehicleParking(id, data) {
        let token = this.getToken();
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/vehicleparking/update/${id}`, data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                Authorization: token
            })
        });
    }
    // remove all vehicle parking bookings from the table
    deleteAllVehicleParkings() {
        let token = this.getToken();
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/vehicleparking/deleteAll`, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                Authorization: token
            })
        });
    }
}
DashboardService.ɵfac = function DashboardService_Factory(t) { return new (t || DashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
DashboardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DashboardService, factory: DashboardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DashboardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/dashboard/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _booking_modal_booking_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../booking-modal/booking-modal.component */ "./src/app/dashboard/booking-modal/booking-modal.component.ts");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dashboard.service */ "./src/app/dashboard/dashboard.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");









function HomeComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onReset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_mat_tab_5_div_6_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r6.vehicle_reg_num);
} }
function HomeComponent_mat_tab_5_div_6_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " NOT BOOKED ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_mat_tab_5_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_mat_tab_5_div_6_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const s_r6 = ctx.$implicit; const z_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.openBookingModal(z_r4._id, s_r6._id, s_r6.vehicle_reg_num, s_r6.vehicle_parking_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HomeComponent_mat_tab_5_div_6_div_9_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HomeComponent_mat_tab_5_div_6_div_10_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r6.space_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", !s_r6.vehicle_reg_num ? "spacestatusvacant" : "spacestatusoccupied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", s_r6.vehicle_reg_num);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !s_r6.vehicle_reg_num);
} }
function HomeComponent_mat_tab_5_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function HomeComponent_mat_tab_5_Template_input_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.onFilterVacantSpaces($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Show Vacant Spaces");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeComponent_mat_tab_5_div_6_Template, 11, 4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const z_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", z_r4.zone_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r1.isChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-height", !ctx_r1.isAgent ? "75vh" : "69vh");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.filteredSpaces);
} }
class HomeComponent {
    constructor(dashboardService, matSnackbar, dialog) {
        this.dashboardService = dashboardService;
        this.matSnackbar = matSnackbar;
        this.dialog = dialog;
        this.isAgent = false;
        this.zones = [];
        this.filteredSpaces = [];
    }
    ngOnInit() {
        // check if user role is booking agent
        let user = JSON.parse(localStorage.getItem('pUser'));
        if (user.role === 'agent') {
            this.isAgent = true;
        }
        this.fetchParkingZones();
    }
    // reset parking spaces and removed vehicle parking booking data from table
    onReset() {
        this.dashboardService.resetParkingSpaces().subscribe(res => {
            if (res && res.data) {
                this.dashboardService.deleteAllVehicleParkings().subscribe(res => {
                    if (res && res.data) {
                        this.fetchParkingSpaceByZoneID(this.index);
                    }
                    else {
                        this.matSnackbar.open('Something went wrong !', 'OK', { duration: 3000 });
                    }
                });
            }
            else {
                this.matSnackbar.open('Something went wrong !', 'OK', { duration: 3000 });
            }
        });
    }
    filterParkingSpace(event) {
        this.isChecked = false;
        this.index = event.index;
        this.fetchParkingSpaceByZoneID(this.index);
    }
    // show vacant parking spaces
    onFilterVacantSpaces(event) {
        if (event && event.target) {
            if (event.target.checked) {
                this.isChecked = true;
                this.filteredSpaces = this.filteredSpaces.filter(space => !space.vehicle_reg_num);
            }
            if (!event.target.checked) {
                this.isChecked = false;
                this.fetchParkingSpaceByZoneID(this.index);
            }
        }
    }
    // on vehicle parking booking and release
    openBookingModal(zoneID, spaceID, regnum, parkID) {
        if (!this.isAgent) {
            return;
        }
        let dialogRef;
        let spaceUpdateData = {};
        let bookingData = {};
        if (!regnum) {
            dialogRef = this.dialog.open(_booking_modal_booking_modal_component__WEBPACK_IMPORTED_MODULE_1__["BookingModalComponent"]);
        }
        else {
            dialogRef = this.dialog.open(_booking_modal_booking_modal_component__WEBPACK_IMPORTED_MODULE_1__["BookingModalComponent"], {
                data: regnum
            });
        }
        dialogRef.afterClosed().subscribe(regNum => {
            if (regNum && typeof regNum === 'string') {
                if (!regnum) {
                    spaceUpdateData = {
                        vehicle_reg_num: regNum
                    };
                    bookingData = {
                        zone_id: zoneID,
                        space_id: spaceID,
                        vehicle_reg_num: regNum,
                        booking_date_time: new Date(),
                    };
                    this.dashboardService.createVehicleParking(bookingData).subscribe(res => {
                        if (res && res.data) {
                            spaceUpdateData['vehicle_parking_id'] = res.data._id;
                            this.dashboardService.updateParkingSpace(spaceID, spaceUpdateData).subscribe(res => {
                                if (res && res.data) {
                                    this.fetchParkingSpaceByZoneID(this.index);
                                }
                                else {
                                    this.matSnackbar.open('Something went wrong !', 'OK', { duration: 3000 });
                                }
                            });
                        }
                        else {
                            this.matSnackbar.open('Something went wrong !', 'OK', { duration: 3000 });
                        }
                    });
                }
                else {
                    spaceUpdateData = {
                        vehicle_reg_num: ''
                    };
                    this.dashboardService.updateVehicleParking(parkID, { release_date_time: new Date() }).subscribe(res => {
                        if (res && res.data) {
                            this.dashboardService.updateParkingSpace(spaceID, spaceUpdateData).subscribe(res => {
                                if (res && res.data) {
                                    this.fetchParkingSpaceByZoneID(this.index);
                                }
                                else {
                                    this.matSnackbar.open('Something went wrong !', 'OK', { duration: 3000 });
                                }
                            });
                        }
                        else {
                            this.matSnackbar.open('Something went wrong !', 'OK', { duration: 3000 });
                        }
                    });
                }
            }
        });
    }
    // fetch parking zones
    fetchParkingZones() {
        this.dashboardService.getParkingZones().subscribe(res => {
            if (res && res.data) {
                this.zones = res.data;
            }
            else {
                this.matSnackbar.open('Something went wrong !', 'OK', { duration: 3000 });
            }
        });
    }
    // fetch parking spaces by parking zone ID
    fetchParkingSpaceByZoneID(i) {
        this.dashboardService.getParkingSpacesByZoneID({ zoneID: this.zones[i]._id }).subscribe(res => {
            if (res && res.data) {
                this.isChecked = false;
                this.filteredSpaces = res.data;
            }
            else {
                this.matSnackbar.open('Something went wrong !', 'OK', { duration: 3000 });
            }
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 6, vars: 2, consts: [[1, "m-3"], ["align", "right"], ["mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], [1, "mt-2"], ["mat-stretch-tabs", "", 1, "mat-elevation-z4", 3, "selectedTabChange"], [3, "label", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary", 3, "click"], [3, "label"], ["align", "center", 1, "mt-3"], ["type", "checkbox", 3, "checked", "change"], [1, "ml-2"], [1, "row", "spaceContent"], ["class", "col-md-6", 4, "ngFor", "ngForOf"], [1, "col-md-6"], [1, "spaceContainer"], [1, "spacecard"], [3, "ngClass", "click"], ["align", "center"], [4, "ngIf"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_button_2_Template, 2, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-tab-group", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedTabChange", function HomeComponent_Template_mat_tab_group_selectedTabChange_4_listener($event) { return ctx.filterParkingSpace($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponent_mat_tab_5_Template, 7, 5, "mat-tab", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAgent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.zones);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTab"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], styles: [".spaceContent[_ngcontent-%COMP%] {\n  padding: 40px 24px;\n  max-height: 69vh;\n  overflow-y: auto;\n  width: 100%;\n  margin-left: unset;\n}\n.spaceContent[_ngcontent-%COMP%]   .spaceContainer[_ngcontent-%COMP%] {\n  background: #ffffff;\n  box-shadow: 0px 1px 8px rgba(20, 46, 110, 0.6);\n  border-radius: 8px;\n  padding: 1%;\n  margin: 1%;\n}\n.spaceContent[_ngcontent-%COMP%]   .spaceContainer[_ngcontent-%COMP%]   .spacecard[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.spaceContent[_ngcontent-%COMP%]   .spaceContainer[_ngcontent-%COMP%]   .spacecard[_ngcontent-%COMP%]   .spacestatusvacant[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  height: 30px;\n  width: 30px;\n  background-color: green;\n  cursor: pointer;\n}\n.spaceContent[_ngcontent-%COMP%]   .spaceContainer[_ngcontent-%COMP%]   .spacecard[_ngcontent-%COMP%]   .spacestatusoccupied[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  height: 30px;\n  width: 30px;\n  background-color: lightgrey;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQUk7RUFDSSxtQkFBQTtFQUNBLDhDQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQUVSO0FBRFE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUFHWjtBQUZZO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUloQjtBQUZZO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtBQUloQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3BhY2VDb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDQwcHggMjRweDtcclxuICAgIG1heC1oZWlnaHQ6IDY5dmg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogdW5zZXQ7XHJcbiAgICAuc3BhY2VDb250YWluZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCA4cHggcmdiYSgyMCwgNDYsIDExMCwgMC42KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgcGFkZGluZzogMSU7XHJcbiAgICAgICAgbWFyZ2luOiAxJTtcclxuICAgICAgICAuc3BhY2VjYXJkIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAuc3BhY2VzdGF0dXN2YWNhbnQge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc3BhY2VzdGF0dXNvY2N1cGllZCB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map