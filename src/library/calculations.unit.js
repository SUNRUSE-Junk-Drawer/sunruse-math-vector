describe("calculations", function(){
	var vector = require("./../../dist/node")
	describe("sum", function(){
		describe("scalar", function(){
			var result
			beforeEach(function(){
				result = vector.sum(5)
			})
			it("returns the sum of the elements", function(){
				expect(result).toEqual(5)
			})
		})
		describe("vector with a single element", function(){
			var input, result
			beforeEach(function(){
				input = [5]
				result = vector.sum(input)
			})
			it("does not modify the input", function(){
				expect(input).toEqual([5])
			})
			it("returns the sum of the elements", function(){
				expect(result).toEqual(5)
			})
		})
		describe("vector with multiple elements", function(){
			var input, result
			beforeEach(function(){
				input = [300, 5, 2]
				result = vector.sum(input)
			})
			it("does not modify the input", function(){
				expect(input).toEqual([300, 5, 2])
			})
			it("returns the sum of the elements", function(){
				expect(result).toEqual(307)
			})
		})
	})
	describe("product", function(){
		describe("scalar", function(){
			var result
			beforeEach(function(){
				result = vector.product(5)
			})
			it("returns the product of the elements", function(){
				expect(result).toEqual(5)
			})
		})
		describe("vector with a single element", function(){
			var input, result
			beforeEach(function(){
				input = [5]
				result = vector.product(input)
			})
			it("does not modify the input", function(){
				expect(input).toEqual([5])
			})
			it("returns the product of the elements", function(){
				expect(result).toEqual(5)
			})
		})
		describe("vector with multiple elements", function(){
			var input, result
			beforeEach(function(){
				input = [300, 5, 2]
				result = vector.product(input)
			})
			it("does not modify the input", function(){
				expect(input).toEqual([300, 5, 2])
			})
			it("returns the product of the elements", function(){
				expect(result).toEqual(3000)
			})
		})
	})
})
