(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Yj9t:function(t,n,r){"use strict";r.r(n),r.d(n,"AuthModule",(function(){return f}));var a=r("ofXK"),e=r("3Pt+"),o=r("rhD1"),i=r("tyNb"),b=r("fXoL"),l=r("dNgK"),s=r("qXBG"),c=r("wZkO"),m=r("kmnG"),d=r("qFsG"),u=r("bTqV");const p=[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:(()=>{class t{constructor(t,n,r){this.matSnackbar=t,this.authService=n,this.router=r}ngOnInit(){this.initializeLoginForm()}initializeLoginForm(){this.loginForm=new e.g({email:new e.d("",[e.s.required,e.s.pattern(/.+\@.+\..+/)]),password:new e.d("",e.s.required)})}onLogin(){this.loginForm.valid?this.authService.login(this.loginForm.value).subscribe(t=>{t&&t.Authorization?this.router.navigateByUrl("/dashboard"):this.matSnackbar.open("Incorrect credentials. Please try again.","OK",{duration:3e3})}):this.matSnackbar.open("Please fill all mandatory fields !","OK",{duration:3e3})}}return t.\u0275fac=function(n){return new(n||t)(b.Lb(l.a),b.Lb(s.a),b.Lb(i.b))},t.\u0275cmp=b.Fb({type:t,selectors:[["app-login"]],decls:18,vars:1,consts:[[1,"parent","h-100"],["align","center","mat-stretch-tabs","",1,"card","mx-auto","mat-elevation-z4"],["label","LOGIN"],[3,"formGroup"],[1,"row","w-100"],[1,"col"],["matInput","","placeholder","Email","type","email","formControlName","email","required",""],[1,"w-100"],["matInput","","placeholder","Password","type","password","formControlName","password","required",""],["mat-raised-button","","color","primary",1,"mb-2",3,"click"]],template:function(t,n){1&t&&(b.Qb(0,"div",0),b.Qb(1,"mat-tab-group",1),b.Qb(2,"mat-tab",2),b.Qb(3,"form",3),b.Qb(4,"div",4),b.Qb(5,"div",5),b.Qb(6,"mat-form-field"),b.Qb(7,"mat-label"),b.vc(8,"Email"),b.Pb(),b.Mb(9,"input",6),b.Pb(),b.Pb(),b.Mb(10,"div",7),b.Qb(11,"div",5),b.Qb(12,"mat-form-field"),b.Qb(13,"mat-label"),b.vc(14,"Password"),b.Pb(),b.Mb(15,"input",8),b.Pb(),b.Pb(),b.Pb(),b.Qb(16,"button",9),b.Xb("click",(function(){return n.onLogin()})),b.vc(17,"Login"),b.Pb(),b.Pb(),b.Pb(),b.Pb(),b.Pb()),2&t&&(b.Ab(3),b.gc("formGroup",n.loginForm))},directives:[c.b,c.a,e.t,e.n,e.h,m.b,m.e,d.b,e.c,e.m,e.f,e.r,u.a],styles:[".parent[_ngcontent-%COMP%]{padding-top:160px}.parent[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{max-width:400px}mat-form-field[_ngcontent-%COMP%]{width:80%}"]}),t})()}];let h=(()=>{class t{}return t.\u0275mod=b.Jb({type:t}),t.\u0275inj=b.Ib({factory:function(n){return new(n||t)},imports:[[i.d.forChild(p)],i.d]}),t})(),f=(()=>{class t{}return t.\u0275mod=b.Jb({type:t}),t.\u0275inj=b.Ib({factory:function(n){return new(n||t)},imports:[[a.b,e.q,h,o.a]]}),t})()}}]);