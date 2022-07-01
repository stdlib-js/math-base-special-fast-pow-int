// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=function(r){return r!=r},e=Number.POSITIVE_INFINITY;function n(n,t){var u;if(r(n))return NaN;if(t<0){if(t=-t,0===n)return n=1/n,1==(1&t)?n:e;n=1/n}else if(0===t)return 1;for(u=1;0!==t;)1==(1&t)&&(u*=n),n*=n,t>>=1;return u}export{n as default};
//# sourceMappingURL=mod.js.map
