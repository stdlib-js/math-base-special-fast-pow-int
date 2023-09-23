// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,n;e=this,n=function(){"use strict";var e=Number.POSITIVE_INFINITY;return function(n,r){var t;if(function(e){return e!=e}(n))return NaN;if(r<0){if(r=-r,0===n)return n=1/n,1==(1&r)?n:e;n=1/n}else if(0===r)return 1;for(t=1;0!==r;)1==(1&r)&&(t*=n),n*=n,r>>=1;return t}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).pow=n();
//# sourceMappingURL=browser.js.map
