"use strict";(self.webpackChunkpizza=self.webpackChunkpizza||[]).push([[592],{461:(a,i,e)=>{e.d(i,{M:()=>p});const o_apiUrl="https://testologia.site/";var c=e(4650),s=e(529);let p=(()=>{class r{constructor(t){this.http=t,this.products=[]}getProducts(){return this.http.get(o_apiUrl+"pizzas")}getProduct(t){return this.http.get(o_apiUrl+`pizzas?id=${t}`)}createOrder(t){return this.http.post(o_apiUrl+"order-pizza",t)}}return r.\u0275fac=function(t){return new(t||r)(c.LFG(s.eN))},r.\u0275prov=c.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()}}]);