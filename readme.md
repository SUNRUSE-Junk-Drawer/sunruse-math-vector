A simple, dependency-free JavaScript library for performing vector mathematics with anonymous type vectors of any length.

# Installation

* NPM/NodeJS
[Use "npm install sunruse-math-vector"](https://docs.npmjs.com/cli/install) like any other NPM package.
Requiring "sunruse-math-vectors" will get you the object described in [Usage](#Usage).

* Browser
Include dist/browser.js or dist/browser.min.js in your page, or add it to an existing script.
The object described in [Usage](#Usage) is globally accessible at "SUNRUSE.math.vectors".
If you're using webpack, it is safe to use the NPM module "sunruse-math-vectors" in the browser.

# Usage

Vectors are defined as any anonymous array of numbers such as [5, 7.5, -3.4] for a 3D vector.

Scalars are defined as standard numbers such as 43.6 or -7.0.

Any function which outputs a vector does not return it; instead, an array must be given as a parameter which will then be populated.
This is to reduce the GC overhead of allocating and discarding large numbers of arrays.
This array can be empty or populated, or even reused in the same calculation.

# Examples

You can find further examples of each function in dist/demo.html.

## Adding two vectors

	var temp = []
    SUNRUSE.math.vectors.add([4.7, -8.4], [70.1, 10.1], temp)
	console.log(temp) // [74.8, 1.7]

## Dividing a vector by a scalar

	var temp = []
    SUNRUSE.math.vectors.divide([15, 20], 5, temp)
	console.log(temp) // [3, 4]

## Multiplying a scalar by a vector

	var temp = []
    SUNRUSE.math.vectors.divide(5, [15, 20], temp)
	console.log(temp) // [3, 4]

## Overwriting the contents of a previously used vector

	var temp = [60, -400]
    SUNRUSE.math.vectors.divide([15, 20], 5, temp)
	console.log(temp) // [3, 4]

## Reusing a vector in the same calculation

	var temp = [15, 20]
    SUNRUSE.math.vectors.divide(temp, 5, temp)
	console.log(temp) // [3, 4]

# Function Reference

## Generic set operations

These are somewhat similar to the functions in libraries like [lodash](https://lodash.com/) or [Underscore.JS](http://underscorejs.org/), applying functions to the elements in vectors or scalars.

### map

Given:

* An input vector or scalar
* An output vector
* A callback taking an element from the vector or scalar and returning an element to write

Executes the callback for each element and writes the results to the output vector.

For example:

	var temp = []
    SUNRUSE.math.vector.map([4, 5, 7], temp, aCallbackFunction)

Is equivalent to:

	temp[0] = aCallbackFunction(4)
	temp[1] = aCallbackFunction(5)
	temp[2] = aCallbackFunction(7)

Some standard JavaScript functions this is useful with include:

* Math.sin
* Math.cos
* Math.abs

### zip

Given:

* An input vector or scalar
* An input vector or scalar
* An output vector
* A callback taking an element from the first vector or scalar and second vector or scalar and returning an element to write

Executes the callback for each element and writes the results to the output vector.

For example:

	var temp = []
    SUNRUSE.math.vector.zip([4, 5, 7], [22, 34, 18], temp, aCallbackFunction)

Is equivalent to:

	temp[0] = aCallbackFunction(4, 22)
	temp[1] = aCallbackFunction(5, 34)
	temp[2] = aCallbackFunction(7, 18)

Some standard JavaScript functions this is useful with include:

* Math.min
* Math.max

### fold

Given:

* An input vector or scalar
* A callback taking the accumulated value and the next element from the vector or scalar and returning the accumulated value

Returns the result of calling the callback with each element pair in order.

For example:

    SUNRUSE.math.vector.fold([4, 5, 7, 9], aCallbackFunction)

Is equivalent to:

	aCallbackFunction(aCallbackFunction(aCallbackFunction(4, 5), 7), 9)

Some standard JavaScript functions this is useful with include:

* Math.min
* Math.max

### zipFold

Given:

* An input vector or scalar
* An input vector or scalar
* A callback taking an element from the first vector or scalar and second vector or scalar and returning their combination
* A callback taking the accumulated value and the next element from the vector or scalar and returning the accumulated value

Returns the result of calling the callback with each element pair in order.

For example:

    SUNRUSE.math.vector.zipFold([4, 5, 7], [22, 34, 18], zipFunction, foldFunction)

Is equivalent to:

	foldFunction(foldFunction(zipFunction(4, 22), zipFunction(5, 34)), zipFunction(7, 18))

## Calculations

### sum

Given an input vector or scalar, returns the sum of every element inside.

### product

Given an input vector or scalar, returns the product of every element inside.

## Unary operations

### clone

Given:

* An input vector or scalar
* An output vector

Writes each element in the input vector or scalar, unmodified, to the output vector.

### negate

Given:

* An input vector or scalar
* An output vector

Negates and writes each element in the input vector or scalar to the output vector.

## Binary operations

### add

Given:

* An input vector or scalar
* An input vector or scalar
* An output vector

Adds every element in the input vectors or scalars together and writes the results to the output vector.

### subtract

Given:

* An input vector or scalar
* An input vector or scalar
* An output vector

Subtracts every element in the second input vector or scalar from those in the first vector or scalar and writes the results to the output vector.

### multiply

Given:

* An input vector or scalar
* An input vector or scalar
* An output vector

Multiplies every element in the input vectors or scalars together and writes the results to the output vector.

### divide

Given:

* An input vector or scalar
* An input vector or scalar
* An output vector

Divides every element in the first input vector or scalar by those in the second vector or scalar and writes the results to the output vector.

### dot

Given:

* An input vector or scalar
* An input vector or scalar

Returns the dot product of the input vectors or scalars.

### cross

Given:

* An input 3-dimensional vector or scalar
* An input 3-dimensional vector or scalar
* An output vector

Writes the cross product of the input vectors or scalars to the output vector.

### reflect

Given:

* An input vector or scalar representing the vector to reflect
* An input vector or scalar representing the normal of the surface to reflect against
* An output vector

Writes the reflection of the first input vector or scalar against the normal specified in the second input vector or scalar to the output vector.

## Magnitude-based

### magnitudeSquared

Given a vector or scalar, returns the square of the magnitude of that vector or scalar.
This could be described as the square of the distance to [0, ...].
Faster than *magnitude*.

### magnitude

Given a vector or scalar, returns the magnitude of that vector or scalar.
This could be described as the distance to [0, ...].
Slower than *magnitudeSquared*.

### distanceSquared

Given:

* An input dimensional vector or scalar
* An input dimensional vector or scalar

Returns the square of the distance between the input vectors or scalars.
When vectors and scalars are mixed, the scalar is treated as a vector of the same length where each dimension has the scalar's value.
Faster than *distance*.

### distance

Given:

* An input dimensional vector or scalar
* An input dimensional vector or scalar

Returns the distance between the input vectors or scalars.
When vectors and scalars are mixed, the scalar is treated as a vector of the same length where each dimension has the scalar's value.
Slower than *distanceSquared*.

### normalize

Given:

* An input vector or scalar
* An output vector

Writes the normalized, or unit form of the input vector or scalar to the output vector.
This could be described as a vector with a length of 1 pointing in the same direction as the input vector or scalar.

# Undefined behaviour

## Normalizing a zero vector

	var temp = []
	SUNRUSE.math.vectors.normalize([0, 0], temp)
	console.log(temp) // ???

## Mixing vector length

	var temp = []
	SUNRUSE.math.vectors.add([4.7, -8.4], [70.1, 10.1, 5.6], temp)
	console.log(temp) // [74.8, 1.7, ???]

## Extra items in the output array

	var temp = [20, 51, 70]
	SUNRUSE.math.vectors.add([4.7, -8.4], [70.1, 10.1], temp)
	console.log(temp) // [74.8, 1.7, ???]

## Arguments which are not vectors or scalars

	var temp = []
	SUNRUSE.math.vectors.add([4.7, -8.4], "something else", temp)
	console.log(temp) // ???

## Arguments of incorrect length when a specific size vector is required

	var temp = []
	SUNRUSE.math.vectors.cross([4.7, -8.4], [5, 8, -12], temp)
	console.log(temp) // ???

## Vector arguments where a scalar is required

	// No example yet.

## Scalar arguments where a vector is required

	var temp = []
	SUNRUSE.math.vectors.cross(14.6, [5, 8, -12], temp)
	console.log(temp) // ???
