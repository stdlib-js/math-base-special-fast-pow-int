// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=function(r){return r!=r},e=Number.POSITIVE_INFINITY,n=r,t=e;var u=function(r,e){var u;if(n(r))return NaN;if(e<0){if(e=-e,0===r)return r=1/r,1==(1&e)?r:t;r=1/r}else if(0===e)return 1;for(u=1;0!==e;)1==(1&e)&&(u*=r),r*=r,e>>=1;return u};export{u as default};
//# sourceMappingURL=mod.js.map
