// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,n;e=this,n=function(){"use strict";var e=function(e){return e!=e},n=Number.POSITIVE_INFINITY;return function(r,t){var f;if(e(r))return NaN;if(t<0){if(t=-t,0===r)return r=1/r,1==(1&t)?r:n;r=1/r}else if(0===t)return 1;for(f=1;0!==t;)1==(1&t)&&(f*=r),r*=r,t>>=1;return f}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).pow=n();
//# sourceMappingURL=browser.js.map
