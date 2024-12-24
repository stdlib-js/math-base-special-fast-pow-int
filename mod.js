// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Number.POSITIVE_INFINITY;function e(e,n){var t;if(function(r){return r!=r}(e))return NaN;if(n<0){if(n=-n,0===e)return e=1/e,1==(1&n)?e:r;e=1/e}else if(0===n)return 1;for(t=1;0!==n;)1==(1&n)&&(t*=e),e*=e,n>>=1;return t}export{e as default};
//# sourceMappingURL=mod.js.map
