(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{uHdG:function(t,e,n){"use strict";n.r(e),n.d(e,"ReportsModule",(function(){return x}));var r=n("ofXK"),o=n("3Pt+"),c=n("fXoL");let i=(()=>{class t{transform(e,n){return n&&e?t.filter(e,n):e}static filter(t,e){const n=e.toLowerCase();return t.filter((function(t){return function t(e,r){for(let o in e)if(null!==e[o]&&null!=e[o]){if("object"==typeof e[o]&&t(e[o],r))return!0;if(e[o].toString().toLowerCase().includes(n))return!0}return!1}(t,e)}))}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=c.Kb({name:"filter",type:t,pure:!1}),t.\u0275prov=c.Hb({token:t,factory:t.\u0275fac}),t})(),a=(()=>{class t{}return t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({factory:function(e){return new(e||t)}}),t})();var s=n("rhD1"),b=n("tyNb"),d=n("wd/R"),g=n("tk/3"),p=n("AytR");let u=(()=>{class t{constructor(t){this.http=t}getToken(){return JSON.parse(localStorage.getItem("pUser")).Authorization}fetchReports(t){let e=this.getToken();return this.http.post(p.a.apiUrl+"/vehicleparking/reports",t,{headers:new g.d({Authorization:e})})}}return t.\u0275fac=function(e){return new(e||t)(c.Ub(g.b))},t.\u0275prov=c.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var l=n("dNgK"),f=n("kmnG"),h=n("qFsG"),P=n("iadO");function m(t,e){1&t&&(c.Qb(0,"h1",7),c.vc(1,"No Bookings made for the selected Date!"),c.Pb())}function v(t,e){if(1&t&&(c.Qb(0,"div"),c.vc(1),c.cc(2,"date"),c.Pb()),2&t){const t=c.bc().$implicit;c.Ab(1),c.xc(" ",c.dc(2,1,t.release_date_time,"short")," ")}}function _(t,e){1&t&&(c.Qb(0,"div"),c.vc(1," Not Left Yet ! "),c.Pb())}function C(t,e){if(1&t&&(c.Qb(0,"tr"),c.Qb(1,"td",16),c.vc(2),c.Pb(),c.Qb(3,"td"),c.vc(4),c.Pb(),c.Qb(5,"td"),c.vc(6),c.Pb(),c.Qb(7,"td"),c.vc(8),c.Pb(),c.Qb(9,"td"),c.vc(10),c.cc(11,"date"),c.Pb(),c.Qb(12,"td"),c.uc(13,v,3,4,"div",17),c.uc(14,_,2,0,"div",17),c.Pb(),c.Pb()),2&t){const t=e.$implicit,n=e.index;c.Ab(2),c.wc(n+1),c.Ab(2),c.wc(t.zone_title),c.Ab(2),c.wc(t.space_title),c.Ab(2),c.wc(t.vehicle_reg_num),c.Ab(2),c.wc(c.dc(11,7,t.booking_date_time,"short")),c.Ab(3),c.gc("ngIf",t.release_date_time),c.Ab(1),c.gc("ngIf",!t.release_date_time)}}function k(t,e){if(1&t){const t=c.Rb();c.Qb(0,"div",8),c.Qb(1,"div",9),c.Qb(2,"div",10),c.Qb(3,"input",11),c.Xb("ngModelChange",(function(e){return c.mc(t),c.bc().searchText=e})),c.Pb(),c.Pb(),c.Pb(),c.Qb(4,"table",12),c.Qb(5,"tr",13),c.Mb(6,"th"),c.Qb(7,"th"),c.vc(8,"Parking Zone"),c.Pb(),c.Qb(9,"th"),c.vc(10,"Parking Space"),c.Pb(),c.Qb(11,"th"),c.vc(12,"Registration Number"),c.Pb(),c.Qb(13,"th",14),c.Xb("click",(function(){return c.mc(t),c.bc().sortOnBookingTime()})),c.vc(14,"Booking Time"),c.Pb(),c.Qb(15,"th"),c.vc(16,"Release Time"),c.Pb(),c.Pb(),c.Qb(17,"tbody"),c.uc(18,C,15,10,"tr",15),c.cc(19,"filter"),c.Pb(),c.Pb(),c.Pb()}if(2&t){const t=c.bc();c.Ab(3),c.gc("ngModel",t.searchText),c.Ab(15),c.gc("ngForOf",c.dc(19,2,t.reports,t.searchText))}}const w=[{path:"",component:(()=>{class t{constructor(t,e){this.reportService=t,this.matSnackbar=e,this.currentDate=new Date,this.startDate=d(this.currentDate.setHours(0,0,0,0)).toISOString(!0),this.endDate=d(this.currentDate.setHours(0,0,0,0)).add(1,"days").toISOString(!0),this.reports=[]}ngOnInit(){this.getReports({start:this.startDate,end:this.endDate})}onSelectBookingDate(t){t&&t.target&&t.target.value&&(this.startDate=d(t.target.value).toISOString(!0),this.endDate=d(t.target.value).add(1,"days").toISOString(!0),this.getReports({start:this.startDate,end:this.endDate}))}sortOnBookingTime(){this.reports.sort((t,e)=>new Date(e.booking_date_time).valueOf()-new Date(t.booking_date_time).valueOf())}getReports(t){this.reportService.fetchReports(t).subscribe(t=>{t&&t.data?this.reports=t.data:this.matSnackbar.open("Something went wrong!","OK",{duration:3e3})})}}return t.\u0275fac=function(e){return new(e||t)(c.Lb(u),c.Lb(l.a))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-home"]],decls:16,vars:6,consts:[[1,"m-3"],[2,"display","flex","justify-content","space-between"],["matInput","","placeholder","DD/MM/YY",3,"matDatepicker","max","value","click","dateChange"],["matSuffix","",3,"for"],["bookingDatePicker",""],["align","center","class","mt-4",4,"ngIf"],["class","reportsContainer",4,"ngIf"],["align","center",1,"mt-4"],[1,"reportsContainer"],[1,"searchboxdiv"],[1,"searchbox"],["type","text","placeholder"," Search Reports...",2,"width","80%",3,"ngModel","ngModelChange"],[1,"table-md"],[1,"blue_row"],[2,"cursor","pointer",3,"click"],[4,"ngFor","ngForOf"],[2,"font-weight","500"],[4,"ngIf"]],template:function(t,e){if(1&t){const t=c.Rb();c.Qb(0,"div",0),c.Qb(1,"div",1),c.Qb(2,"div"),c.Qb(3,"h2"),c.vc(4,"Parking Zone Report"),c.Pb(),c.Pb(),c.Qb(5,"div"),c.Qb(6,"mat-form-field"),c.Qb(7,"mat-label"),c.vc(8,"Booking Date"),c.Pb(),c.Qb(9,"input",2),c.Xb("click",(function(){return c.mc(t),c.lc(12).open()}))("dateChange",(function(t){return e.onSelectBookingDate(t)})),c.Pb(),c.Mb(10,"mat-datepicker-toggle",3),c.Mb(11,"mat-datepicker",null,4),c.Pb(),c.Pb(),c.Pb(),c.Mb(13,"hr"),c.uc(14,m,2,0,"h1",5),c.uc(15,k,20,5,"div",6),c.Pb()}if(2&t){const t=c.lc(12);c.Ab(9),c.gc("matDatepicker",t)("max",e.currentDate)("value",e.currentDate),c.Ab(1),c.gc("for",t),c.Ab(4),c.gc("ngIf",0===e.reports.length),c.Ab(1),c.gc("ngIf",e.reports.length>0)}},directives:[f.b,f.e,h.b,P.b,P.d,f.f,P.a,r.k,o.c,o.m,o.p,r.j],pipes:[i,r.d],styles:[".reportsContainer[_ngcontent-%COMP%]{background:#fff;box-shadow:0 1px 8px rgba(20,46,110,.6);border-radius:8px;padding:2%;margin-top:20px;max-height:74vh;overflow-y:auto}.reportsContainer[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;margin-top:20px}.reportsContainer[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-weight:500}.reportsContainer[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .reportsContainer[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:20px 10px;text-align:center;color:#414d55}.reportsContainer[_ngcontent-%COMP%]   .searchboxdiv[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.reportsContainer[_ngcontent-%COMP%]   .searchboxdiv[_ngcontent-%COMP%]   .searchbox[_ngcontent-%COMP%]{display:flex;width:40%;align-items:center}.reportsContainer[_ngcontent-%COMP%]   .searchboxdiv[_ngcontent-%COMP%]   .searchbox[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{border-radius:6px;border:none;background-color:#f1f5f8;font-size:12px;padding:2% 8%;width:80%;color:#90a1ac;letter-spacing:.5px}.blue_row[_ngcontent-%COMP%]{background:#effeff;border-radius:8px}"]}),t})()}];let O=(()=>{class t{}return t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({factory:function(e){return new(e||t)},imports:[[b.d.forChild(w)],b.d]}),t})(),x=(()=>{class t{}return t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({factory:function(e){return new(e||t)},imports:[[r.b,o.i,o.q,O,s.a,a]]}),t})()}}]);