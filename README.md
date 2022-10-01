<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Exponential Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Exponential function][exponential-function].

<section class="intro">

The [exponential function][exponential-function] is defined as

<!-- <equation class="equation" label="eq:exponential_function" align="center" raw="y = b^x" alt="Exponential function"> -->

<div class="equation" align="center" data-raw-text="y = b^x" data-equation="eq:exponential_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@c1bdd27898df04d752ddb2dca37ca049e4c94d9b/lib/node_modules/@stdlib/math/base/special/fast/pow-int/docs/img/equation_exponential_function.svg" alt="Exponential function">
    <br>
</div>

<!-- </equation> -->

where `b` is the **base** and `x` is the **exponent**.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
pow = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-fast-pow-int@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var pow = require( 'path/to/vendor/umd/math-base-special-fast-pow-int/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-fast-pow-int@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.pow;
})();
</script>
```

#### pow( base, exponent )

Evaluates the [exponential function][exponential-function] given a signed 32-bit integer `exponent`.

```javascript
var v = pow( 2.0, 3 );
// returns 8.0

v = pow( 100.0, 0 );
// returns 1.0

v = pow( 3.14, 1 );
// returns 3.14

v = pow( -3.14, 1 );
// returns -3.14

v = pow( 2.0, -2 );
// returns 0.25

v = pow( NaN, 3 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   This implementation is **not** recommended for high-precision applications due to error accumulation. As a trivial example, consider

    ```javascript
    var v = pow( 10.0, 308 );
    // returns 1.0000000000000006e+308
    ```

    where the expected result is `1.0e+308`.

-   If provided a negative `exponent`, the implementation first computes the reciprocal of the `base` and then evaluates the exponential function. This can introduce significant error. For example,

    ```javascript
    var v = pow( -459, -98 );
    // returns 1.3878956588399783e-261
    ```

    where the expected result is `1.3878956588399598e-261`. From the bit sequences,

    ```text
    0000100111000101110110100000000111001011001011010001000101010110
    0000100111000101110110100000000111001011001011010001000100000100
    ```

    one observes that the returned value differs in the last `7` bits of the significand.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-fast-pow-int@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var x;
var y;
var v;

x = 10.0;
for ( y = 0; y < 309; y++ ) {
    v = pow( x, y );
    console.log( '%d^%d = %d', x, y, v );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/pow`][@stdlib/math/base/special/pow]</span><span class="delimiter">: </span><span class="description">exponential function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-fast-pow-int.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-fast-pow-int

[test-image]: https://github.com/stdlib-js/math-base-special-fast-pow-int/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-fast-pow-int/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-fast-pow-int/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-fast-pow-int?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-fast-pow-int.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-fast-pow-int/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-fast-pow-int/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-fast-pow-int/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-fast-pow-int/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-fast-pow-int/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-fast-pow-int/main/LICENSE

[exponential-function]: https://en.wikipedia.org/wiki/Exponential_function

<!-- <related-links> -->

[@stdlib/math/base/special/pow]: https://github.com/stdlib-js/math-base-special-pow/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
