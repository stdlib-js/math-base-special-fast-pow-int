"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var a=s(function(p,n){
var f=require('@stdlib/math-base-assert-is-nan/dist'),v=require('@stdlib/constants-float64-pinf/dist'),u=0,i=1;function o(e,r){var t;if(f(e))return NaN;if(r<u){if(r=-r,e===0)return e=1/e,(r&i)===i?e:v;e=1/e}else if(r===u)return 1;for(t=1;r!==u;)(r&i)===i&&(t*=e),e*=e,r>>=i;return t}n.exports=o
});var N=a();module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
