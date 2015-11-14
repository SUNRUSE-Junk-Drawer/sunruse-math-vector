describe("unary", function(){
	var vector = require("./../../dist/node")
	describe("clone", function(){
		describe("empty vector as output", function(){
			var input, output
			beforeEach(function(){
				input = [8, 3, 9]
				output = []
				vector.clone(input, output)
			})
			it("does not modify the input", function(){
				expect(input).toEqual([8, 3, 9])
			})
			it("copies every element to the output", function(){
				expect(output).toEqual([8, 3, 9])
			})
		})
		describe("populated vector as output", function(){
			var input, output
			beforeEach(function(){
				input = [8, 3, 9]
				output = [20, 14, 8]
				vector.clone(input, output)
			})
			it("does not modify the input", function(){
				expect(input).toEqual([8, 3, 9])
			})
			it("copies every element to the output", function(){
				expect(output).toEqual([8, 3, 9])
			})
		})
		describe("input as output", function(){
			var output
			beforeEach(function(){
				output = [8, 3, 9]
				vector.clone(output, output)
			})
			it("does not modify the input", function(){
				expect(output).toEqual([8, 3, 9])
			})
		})
		describe("scalar", function(){
			var output
			beforeEach(function(){
				output = []
				vector.clone(5, output)
			})
			it("copies every element to the output", function(){
				expect(output).toEqual([5])
			})
		})
	})
	describe("negate", function(){
		describe("empty vector as output", function(){
			var input, output
			beforeEach(function(){
				input = [8, 3, -9]
				output = []
				vector.negate(input, output)
			})
			it("does not modify the input", function(){
				expect(input).toEqual([8, 3, -9])
			})
			it("copies every element to the output, negated", function(){
				expect(output).toEqual([-8, -3, 9])
			})
		})
		describe("populated vector as output", function(){
			var input, output
			beforeEach(function(){
				input = [8, 3, -9]
				output = [20, -14, 8]
				vector.negate(input, output)
			})
			it("does not modify the input", function(){
				expect(input).toEqual([8, 3, -9])
			})
			it("copies every element to the output, negated", function(){
				expect(output).toEqual([-8, -3, 9])
			})
		})
		describe("input as output", function(){
			var output
			beforeEach(function(){
				output = [8, 3, -9]
				vector.negate(output, output)
			})
			it("does not modify the input, negated", function(){
				expect(output).toEqual([-8, -3, 9])
			})
		})
		describe("positive scalar", function(){
			var output
			beforeEach(function(){
				output = []
				vector.negate(5, output)
			})
			it("copies every element to the output, negated", function(){
				expect(output).toEqual([-5])
			})
		})
		describe("negative scalar", function(){
			var output
			beforeEach(function(){
				output = []
				vector.negate(-5, output)
			})
			it("copies every element to the output, negated", function(){
				expect(output).toEqual([5])
			})
		})
	})
})
