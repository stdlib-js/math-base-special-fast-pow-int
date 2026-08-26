"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var a=s(function(p,n){
var f=require('@stdlib/math-base-assert-is-nan/dist'),v=require('@stdlib/constants-float64-pinf/dist'),u=0,t=1;function o(e,r){var i;if(f(e))return NaN;if(r<u){if(r=-r,e===0)return e=1/e,(r&t)===t?e:v;e=1/e}else if(r===u)return 1;for(i=1;r!==u;)(r&t)===t&&(i*=e),e*=e,r>>=t;return i}n.exports=o
});var N=a();module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
