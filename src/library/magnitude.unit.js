describe("magnitude", function(){
	var vector = require("./../../dist/node")
	describe("magnitudeSquared", function(){
		describe("scalar", function(){
			var result
			beforeEach(function(){
				result = vector.magnitudeSquared(3)
			})
			it("returns the square of the magnitude", function(){
				expect(result).toEqual(9)
			})
		})
		describe("vector with a single element", function(){
			var input, result
			beforeEach(function(){
				input = [3]
				result = vector.magnitudeSquared(input)
			})
			it("does not modify the input", function(){
				expect(input).toEqual([3])
			})
			it("returns the square of the magnitude", function(){
				expect(result).toEqual(9)
			})
		})
		describe("vector with multiple elements", function(){
			var input, result
			beforeEach(function(){
				input = [3, 5, -7]
				result = vector.magnitudeSquared(input)
			})
			it("does not modify the input", function(){
				expect(input).toEqual([3, 5, -7])
			})
			it("returns the square of the magnitude", function(){
				expect(result).toEqual(83)
			})
		})
	})
	describe("magnitude", function(){
		describe("scalar", function(){
			var result
			beforeEach(function(){
				result = vector.magnitude(3)
			})
			it("returns the magnitude", function(){
				expect(result).toEqual(3)
			})
		})
		describe("vector with a single element", function(){
			var input, result
			beforeEach(function(){
				input = [3]
				result = vector.magnitude(input)
			})
			it("does not modify the input", function(){
				expect(input).toEqual([3])
			})
			it("returns the magnitude", function(){
				expect(result).toEqual(3)
			})
		})
		describe("vector with multiple elements", function(){
			var input, result
			beforeEach(function(){
				input = [3, 5, -7]
				result = vector.magnitude(input)
			})
			it("does not modify the input", function(){
				expect(input).toEqual([3, 5, -7])
			})
			it("returns the magnitude", function(){
				expect(result).toBeCloseTo(9.110433579)
			})
		})
	})
	describe("distanceSquared", function(){
		describe("vector by vector", function(){
			var inputA, inputB, result
			beforeEach(function(){
				inputA = [3, 5, -7]
				inputB = [6, -8, 4]
				result = vector.distanceSquared(inputA, inputB)
			})
			it("does not modify the input", function(){
				expect(inputA).toEqual([3, 5, -7])
				expect(inputB).toEqual([6, -8, 4])
			})
			it("returns the square of the distance", function() {
				expect(result).toEqual(299)
			})
		})
		describe("scalar by vector", function(){
			var inputB, result
			beforeEach(function(){
				inputB = [3, 5, -7]
				result = vector.distanceSquared(-2, inputB)
			})
			it("does not modify the input", function(){
				expect(inputB).toEqual([3, 5, -7])
			})
			it("returns the square of the distance", function() {
				expect(result).toEqual(99)
			})
		})
		describe("vector by scalar", function(){
			var inputA, result
			beforeEach(function(){
				inputA = [3, 5, -7]
				result = vector.distanceSquared(inputA, -2)
			})
			it("does not modify the input", function(){
				expect(inputA).toEqual([3, 5, -7])
			})
			it("returns the square of the distance", function() {
				expect(result).toEqual(99)
			})
		})
		describe("scalar by scalar", function(){
			var result
			beforeEach(function(){
				result = vector.distanceSquared(4, 6)
			})
			it("returns the square of the distance", function() {
				expect(result).toEqual(4)
			})
		})
	})
	describe("distance", function(){
		describe("vector by vector", function(){
			var inputA, inputB, result
			beforeEach(function(){
				inputA = [3, 5, -7]
				inputB = [6, -8, 4]
				result = vector.distance(inputA, inputB)
			})
			it("does not modify the input", function(){
				expect(inputA).toEqual([3, 5, -7])
				expect(inputB).toEqual([6, -8, 4])
			})
			it("returns the distance", function() {
				expect(result).toBeCloseTo(17.291616466)
			})
		})
		describe("scalar by vector", function(){
			var inputB, result
			beforeEach(function(){
				inputB = [3, 5, -7]
				result = vector.distance(-2, inputB)
			})
			it("does not modify the input", function(){
				expect(inputB).toEqual([3, 5, -7])
			})
			it("returns the distance", function() {
				expect(result).toBeCloseTo(9.949874371)
			})
		})
		describe("vector by scalar", function(){
			var inputA, result
			beforeEach(function(){
				inputA = [3, 5, -7]
				result = vector.distance(inputA, -2)
			})
			it("does not modify the input", function(){
				expect(inputA).toEqual([3, 5, -7])
			})
			it("returns the distance", function() {
				expect(result).toBeCloseTo(9.949874371)
			})
		})
		describe("scalar by scalar", function(){
			var result
			beforeEach(function(){
				result = vector.distance(4, 6)
			})
			it("returns the distance", function() {
				expect(result).toEqual(2)
			})
		})
	})
})
