/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isnan = require( '@stdlib/math-base-assert-is-nan' );
var PINF = require( '@stdlib/constants-float64-pinf' );


// VARIABLES //

var ZERO = 0|0; // asm type annotation
var ONE = 1|0; // asm type annotation


// MAIN //

/**
* Evaluates the exponential function.
*
* ## Method
*
* -   The exponential function is given by
*
*     ```tex
*     z = x^y
*     ```
*
*     where \\(x\\) is the base and \\(y\\) the exponent.
*
* -   First observe that a naive approach for exponentiation
*
*     ```tex
*     5^5 = 5 \cdot 5 \cdot 5 \cdot 5 \cdot 5
*     ```
*
*     requires \\(y-1\\) multiplications.
*
* -   We can reduce the number of multiplications by first computing \\(x2 = x \cdot x\\).
*
*     ```tex
*     5^5 = x2 \cdot x2 \cdot x
*     ```
*
*     thus requiring only three multiplications.
*
* -   This observation may be generalized, such that, for a positive exponent \\(y\\),
*
*     ```tex
*     x^y = \begin{cases}
*           x (x^2)^{\frac{y-1}{2}}, & \text{if $y$ is odd} \\
*           (x^2)^{\frac{y}{2}}, & \text{if $y$ is even}
*     \end{cases}
*     ```
*
* -   Note that the above generalization only involves powers of two. For example, in our working example, the powers are \\(1\\) and \\(4\\). To determine these powers, we observe that integer values, when stored in binary format, are simply sums of powers of two. For example, the integer \\(5\\) has the bit sequence
*
*     ```binarystring
*     00000000000000000000000000000101
*     ```
*
*     where \\(101\\) translates to
*
*     ```tex
*     2^2 + 2^0 = 4 + 1 = 5
*     ```
*
*     Thus, rather conveniently, the powers of two needed for exponentiation are easily derived from the binary representation of the integer exponent.
*
* -   The previous observation lends itself readily to an iterative exponentiation algorithm, referred to as **right-to-left binary exponentiation**. The algorithm is as follows:
*
*     ```text
*     1. Examine the least significant bit to determine if we have a power of 2.
*     2. If yes, compute an intermediate result.
*     3. Square the base.
*     4. Shift off the least significant bit (LSB).
*     5. If the exponent is greater than 0, repeat steps 1-4.
*     6. Return the intermediate result.
*     ```
*
*     For example, consider \\(5^5 = 3125\\).
*
*     ```text
*     Initialization: r = 1
*     Iteration 1: y = 101 => r = 1*5, x = 5*5 = 25
*     Iteration 2: y = 10 => x = 25*25 = 625
*     Iteration 3: y = 1 => r = 5*625 = 3125, x = 625*625
*     Return: r
*     ```
*
* ## Notes
*
* -   The above algorithm involves \\(\lfloor \log_2(y) \rfloor\\) square operations and at most \\(\lfloor \log_2(y) \rfloor\\) multiplications.
*
* -   The above algorithm may not return precise results due to an accumulation of error. For example,
*
*     ```javascript
*     var y = pow( 10.0, 308 );
*     // returns 1.0000000000000006e+308
*     // expected 1.0e+308
*     ```
*
*     If we compare the bit sequence of the returned value
*
*     ```binarystring
*     0111111111100001110011001111001110000101111010111100100010100011
*     ```
*
*     with the expected value
*
*     ```binarystring
*     0111111111100001110011001111001110000101111010111100100010100000
*     ```
*
*     we observe that the returned value differs in its last two bits.
*
* @param {number} x - base
* @param {integer32} y - exponent
* @returns {number} function value
*
* @example
* var v = pow( 2.0, 3 );
* // returns 8.0
*
* @example
* var v = pow( 3.14, 0 );
* // returns 1.0
*
* @example
* var v = pow( 2.0, -2 );
* // returns 0.25
*
* @example
* var v = pow( 0.0, 0 );
* // returns 1.0
*
* @example
* var v = pow( -3.14, 1 );
* // returns -3.14
*
* @example
* var v = pow( NaN, 0 );
* // returns NaN
*/
function pow( x, y ) {
	var v;

	if ( isnan( x ) ) {
		return NaN;
	}
	// If the exponent is negative, use the reciprocal...
	if ( y < ZERO ) {
		y = -y;
		if ( x === 0.0 ) {
			x = 1.0 / x; // +-infinity
			if ( ( y & ONE ) === ONE ) {
				// Exponent is odd, so `x` keeps its sign:
				return x;
			}
			// Exponent is even, so result is always positive:
			return PINF;
		}
		x = 1.0 / x;
	}
	// If the exponent is zero, the result is always unity...
	else if ( y === ZERO ) {
		return 1.0;
	}
	v = 1;
	while ( y !== ZERO ) {
		// Check the least significant bit (LSB) to determine if "on" (if so, we have a power of 2)...
		if ( ( y & ONE ) === ONE ) {
			v *= x;
		}
		x *= x; // possible overflow
		y >>= ONE;
	}
	return v;
}


// EXPORTS //

module.exports = pow;
