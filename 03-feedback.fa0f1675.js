!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var a=o("1WSnx"),l=document.querySelector("form");l.addEventListener("submit",(function(e){if(e.preventDefault(),i){for(key in i)i[key]=l.elements[key].value;console.log(i)}i={email:"",message:""},localStorage.removeItem(f),e.currentTarget.reset()})),l.addEventListener("input",e(a).throttle((function(e){i[e.target.name]=e.target.value,localStorage.setItem(f,JSON.stringify(i))}),500));var i={email:"",message:""},f="feedback-form-state",u=localStorage.getItem(f),s=JSON.parse(u);!function(){if(u)for(key in i=s)l.elements[key].value=i[key]}()}();
//# sourceMappingURL=03-feedback.fa0f1675.js.map
