!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},t.parcelRequired7c6=n),n.register("f7677",(function(t,r){var a=n("1WSnx"),o={form:document.querySelector("form"),email:document.querySelector("input"),message:document.querySelector("textarea")};o.form.addEventListener("submit",(function(e){console.log(s),e.preventDefault(),e.currentTarget.reset()})),o.email.addEventListener("input",e(a).throttle((function(e){s.email=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(s))}),500)),o.message.addEventListener("input",e(a).throttle((function(e){s.message=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(s))}),500));var l,i,s={email:"",message:""};l=localStorage.getItem("feedback-form-state"),i=JSON.parse(l),l&&(o.email.value=i.email,s.email=i.email,o.message.value=i.message,s.message=i.message)})),n("f7677")}();
//# sourceMappingURL=03-feedback.f1e4b5f7.js.map
