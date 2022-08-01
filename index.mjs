// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@esm/index.mjs";function e(e,r){var n;if(t(e))return NaN;if(r<0){if(r=-r,0===e)return e=1/e,1==(1&r)?e:s;e=1/e}else if(0===r)return 1;for(n=1;0!==r;)1==(1&r)&&(n*=e),e*=e,r>>=1;return n}export{e as default};
//# sourceMappingURL=index.mjs.map
