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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Exponential Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Exponential function][exponential-function].

<section class="intro">

The [exponential function][exponential-function] is defined as

<!-- <equation class="equation" label="eq:exponential_function" align="center" raw="y = b^x" alt="Exponential function"> -->

```math
y = b^x
```

<!-- <div class="equation" align="center" data-raw-text="y = b^x" data-equation="eq:exponential_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@c1bdd27898df04d752ddb2dca37ca049e4c94d9b/lib/node_modules/@stdlib/math/base/special/fast/pow-int/docs/img/equation_exponential_function.svg" alt="Exponential function">
    <br>
</div> -->

<!-- </equation> -->

where `b` is the **base** and `x` is the **exponent**.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-fast-pow-int
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var pow = require( '@stdlib/math-base-special-fast-pow-int' );
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

```javascript
var pow = require( '@stdlib/math-base-special-fast-pow-int' );

var x;
var y;
var v;

x = 10.0;
for ( y = 0; y < 309; y++ ) {
    v = pow( x, y );
    console.log( '%d^%d = %d', x, y, v );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/math/base/special/fast/pow.h"
```

#### stdlib_base_fast_pow( x, y )

Evaluates the [exponential function][exponential-function] given a signed 32-bit integer `exponent`.

```c
double out = stdlib_base_fast_pow( 2.0, 3 );
// returns 8.0

out = stdlib_base_fast_pow( 3.14, 0 );
// returns 1.0
```

The function accepts the following arguments:

-   **x**: `[in] double` base.
-   **y**: `[in] double` exponent.

```c
double stdlib_base_fast_pow( const double x, const int32_t y );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/math/base/special/fast/pow.h"
#include <stdlib.h>
#include <stdio.h>
#include <stdint.h>

int main( void ) {
    const double x[] = { 3.14, 2.0, 2.0, 0.0 };
    const int32_t y[] = { 0, 3, -2, 0 };

    double z;
    int i;
    for ( i = 0; i < 4; i++ ) {
        z = stdlib_base_fast_pow( x[ i ], y[ i ] );
        printf( "pow( %lf, %d ) = %lf\n", x[ i ], y[ i ], z );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/pow`][@stdlib/math/base/special/pow]</span><span class="delimiter">: </span><span class="description">exponential function.</span>

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

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

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
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-fast-pow-int/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-fast-pow-int/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-fast-pow-int/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-fast-pow-int/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-fast-pow-int/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-fast-pow-int/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-fast-pow-int/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-fast-pow-int/main/LICENSE

[exponential-function]: https://en.wikipedia.org/wiki/Exponential_function

<!-- <related-links> -->

[@stdlib/math/base/special/pow]: https://github.com/stdlib-js/math-base-special-pow

<!-- </related-links> -->

</section>

<!-- /.links -->
