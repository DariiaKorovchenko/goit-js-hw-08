function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o);var a=o("kEUo3");const l=document.querySelector("form");l.addEventListener("submit",(function(e){if(e.preventDefault(),f){for(key in f)f[key]=l.elements[key].value;console.log(f)}f={},localStorage.removeItem("feedback-form-state"),e.currentTarget.reset()})),l.addEventListener("input",e(a).throttle((function(e){f[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(f))}),500));let f={};const i=localStorage.getItem("feedback-form-state"),u=JSON.parse(i);!function(){if(i)for(key in f=u,f)l.elements[key].value=f[key]}();
//# sourceMappingURL=03-feedback.7d452862.js.map
