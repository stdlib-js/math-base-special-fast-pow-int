// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@esm/index.mjs";var s=t,e=r;var n=function(t,r){var n;if(s(t))return NaN;if(r<0){if(r=-r,0===t)return t=1/t,1==(1&r)?t:e;t=1/t}else if(0===r)return 1;for(n=1;0!==r;)1==(1&r)&&(n*=t),t*=t,r>>=1;return n};export{n as default};
//# sourceMappingURL=index.mjs.map
