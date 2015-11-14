describe("binary", function(){
	var vector = require("./../../dist/node")
	describe("add", function(){
		describe("vector by vector", function(){
			describe("empty vector as output", function(){
				var inputA, inputB, output
				beforeEach(function(){
					inputA = [4, 8, 7]
					inputB = [3, 6, 9]
					output = []
					vector.add(inputA, inputB, output)
				})
				it("does not modify the inputs", function(){
					expect(inputA).toEqual([4, 8, 7])
					expect(inputB).toEqual([3, 6, 9])
				})
				it("writes the result of adding the elements to the output", function(){
					expect(output).toEqual([7, 14, 16])
				})
			})
			describe("populated vector as output", function(){
				var inputA, inputB, output
				beforeEach(function(){
					inputA = [4, 8, 7]
					inputB = [3, 6, 9]
					output = [14, 22, 18]
					vector.add(inputA, inputB, output)
				})
				it("does not modify the inputs", function(){
					expect(inputA).toEqual([4, 8, 7])
					expect(inputB).toEqual([3, 6, 9])
				})
				it("writes the result of adding the elements to the output", function(){
					expect(output).toEqual([7, 14, 16])
				})
			})
			describe("first input as output", function(){
				var inputA, inputB
				beforeEach(function(){
					inputA = [4, 8, 7]
					inputB = [3, 6, 9]
					vector.add(inputA, inputB, inputA)
				})
				it("does not modify the inputs", function(){
					expect(inputB).toEqual([3, 6, 9])
				})
				it("writes the result of adding the elements to the output", function(){
					expect(inputA).toEqual([7, 14, 16])
				})
			})
			describe("second input as output", function(){
				var inputA, inputB
				beforeEach(function(){
					inputA = [4, 8, 7]
					inputB = [3, 6, 9]
					vector.add(inputA, inputB, inputB)
				})
				it("does not modify the inputs", function(){
					expect(inputA).toEqual([4, 8, 7])
				})
				it("writes the result of adding the elements to the output", function(){
					expect(inputB).toEqual([7, 14, 16])
				})
			})
			describe("inputs as output", function(){
				var output
				beforeEach(function(){
					output = [4, 8, 7]
					vector.add(output, output, output)
				})
				it("writes the result of adding the elements to the output", function(){
					expect(output).toEqual([8, 16, 14])
				})
			})
		})
		describe("scalar by vector", function(){
			describe("empty vector as output", function(){
				var inputB, output
				beforeEach(function(){
					inputB = [4, 8, 7]
					output = []
					vector.add(9, inputB, output)
				})
				it("does not modify the inputs", function(){
					expect(inputB).toEqual([4, 8, 7])
				})
				it("writes the result of adding the elements to the output", function(){
					expect(output).toEqual([13, 17, 16])
				})
			})
			describe("populated vector as output", function(){
				var inputB, output
				beforeEach(function(){
					inputB = [4, 8, 7]
					output = [24, 87, 43]
					vector.add(9, inputB, output)
				})
				it("does not modify the inputs", function(){
					expect(inputB).toEqual([4, 8, 7])
				})
				it("writes the result of adding the elements to the output", function(){
					expect(output).toEqual([13, 17, 16])
				})
			})
			describe("input as output", function(){
				var output
				beforeEach(function(){
					output = [4, 8, 7]
					vector.add(9, output, output)
				})
				it("writes the result of adding the elements to the output", function(){
					expect(output).toEqual([13, 17, 16])
				})
			})
		})
		describe("vector by scalar", function(){
			describe("empty vector as output", function(){
				var inputA, output
				beforeEach(function(){
					inputA = [4, 8, 7]
					output = []
					vector.add(inputA, 9, output)
				})
				it("does not modify the inputs", function(){
					expect(inputA).toEqual([4, 8, 7])
				})
				it("writes the result of adding the elements to the output", function(){
					expect(output).toEqual([13, 17, 16])
				})
			})
			describe("populated vector as output", function(){
				var inputA, output
				beforeEach(function(){
					inputA = [4, 8, 7]
					output = ["existing a", "existing b", "existing c"]
					vector.add(inputA, 9, output)
				})
				it("does not modify the inputs", function(){
					expect(inputA).toEqual([4, 8, 7])
				})
				it("writes the result of adding the elements to the output", function(){
					expect(output).toEqual([13, 17, 16])
				})
			})
			describe("input as output", function(){
				var output
				beforeEach(function(){
					output = [4, 8, 7]
					vector.add(output, 9, output)
				})
				it("writes the result of adding the elements to the output", function(){
					expect(output).toEqual([13, 17, 16])
				})
			})
		})
		describe("scalar by scalar", function(){
			describe("empty vector as output", function(){
				var output
				beforeEach(function(){
					output = []
					vector.add(3, 7, output)
				})
				it("writes the result of adding the elements to the output", function(){
					expect(output).toEqual([10])
				})
			})
			describe("populated vector as output", function(){
				var output
				beforeEach(function(){
					output = [15]
					vector.add(3, 7, output)
				})
				it("writes the result of adding the elements to the output", function(){
					expect(output).toEqual([10])
				})
			})
		})
	})	
	describe("subtract", function(){
		describe("vector by vector", function(){
			describe("empty vector as output", function(){
				var inputA, inputB, output
				beforeEach(function(){
					inputA = [4, 8, 7]
					inputB = [3, 6, 9]
					output = []
					vector.subtract(inputA, inputB, output)
				})
				it("does not modify the inputs", function(){
					expect(inputA).toEqual([4, 8, 7])
					expect(inputB).toEqual([3, 6, 9])
				})
				it("writes the result of subtracting the elements to the output", function(){
					expect(output).toEqual([1, 2, -2])
				})
			})
			describe("populated vector as output", function(){
				var inputA, inputB, output
				beforeEach(function(){
					inputA = [4, 8, 7]
					inputB = [3, 6, 9]
					output = [14, 22, 18]
					vector.subtract(inputA, inputB, output)
				})
				it("does not modify the inputs", function(){
					expect(inputA).toEqual([4, 8, 7])
					expect(inputB).toEqual([3, 6, 9])
				})
				it("writes the result of subtracting the elements to the output", function(){
					expect(output).toEqual([1, 2, -2])
				})
			})
			describe("first input as output", function(){
				var inputA, inputB
				beforeEach(function(){
					inputA = [4, 8, 7]
					inputB = [3, 6, 9]
					vector.subtract(inputA, inputB, inputA)
				})
				it("does not modify the inputs", function(){
					expect(inputB).toEqual([3, 6, 9])
				})
				it("writes the result of subtracting the elements to the output", function(){
					expect(inputA).toEqual([1, 2, -2])
				})
			})
			describe("second input as output", function(){
				var inputA, inputB
				beforeEach(function(){
					inputA = [4, 8, 7]
					inputB = [3, 6, 9]
					vector.subtract(inputA, inputB, inputB)
				})
				it("does not modify the inputs", function(){
					expect(inputA).toEqual([4, 8, 7])
				})
				it("writes the result of subtracting the elements to the output", function(){
					expect(inputB).toEqual([1, 2, -2])
				})
			})
			describe("inputs as output", function(){
				var output
				beforeEach(function(){
					output = [4, 8, 7]
					vector.subtract(output, output, output)
				})
				it("writes the result of subtracting the elements to the output", function(){
					expect(output).toEqual([0, 0, 0])
				})
			})
		})
		describe("scalar by vector", function(){
			describe("empty vector as output", function(){
				var inputB, output
				beforeEach(function(){
					inputB = [4, 8, 7]
					output = []
					vector.subtract(9, inputB, output)
				})
				it("does not modify the inputs", function(){
					expect(inputB).toEqual([4, 8, 7])
				})
				it("writes the result of subtracting the elements to the output", function(){
					expect(output).toEqual([5, 1, 2])
				})
			})
			describe("populated vector as output", function(){
				var inputB, output
				beforeEach(function(){
					inputB = [4, 8, 7]
					output = [24, 87, 43]
					vector.subtract(9, inputB, output)
				})
				it("does not modify the inputs", function(){
					expect(inputB).toEqual([4, 8, 7])
				})
				it("writes the result of subtracting the elements to the output", function(){
					expect(output).toEqual([5, 1, 2])
				})
			})
			describe("input as output", function(){
				var output
				beforeEach(function(){
					output = [4, 8, 7]
					vector.subtract(9, output, output)
				})
				it("writes the result of subtracting the elements to the output", function(){
					expect(output).toEqual([5, 1, 2])
				})
			})
		})
		describe("vector by scalar", function(){
			describe("empty vector as output", function(){
				var inputA, output
				beforeEach(function(){
					inputA = [4, 8, 7]
					output = []
					vector.subtract(inputA, 9, output)
				})
				it("does not modify the inputs", function(){
					expect(inputA).toEqual([4, 8, 7])
				})
				it("writes the result of subtracting the elements to the output", function(){
					expect(output).toEqual([-5, -1, -2])
				})
			})
			describe("populated vector as output", function(){
				var inputA, output
				beforeEach(function(){
					inputA = [4, 8, 7]
					output = ["existing a", "existing b", "existing c"]
					vector.subtract(inputA, 9, output)
				})
				it("does not modify the inputs", function(){
					expect(inputA).toEqual([4, 8, 7])
				})
				it("writes the result of subtracting the elements to the output", function(){
					expect(output).toEqual([-5, -1, -2])
				})
			})
			describe("input as output", function(){
				var output
				beforeEach(function(){
					output = [4, 8, 7]
					vector.subtract(output, 9, output)
				})
				it("writes the result of subtracting the elements to the output", function(){
					expect(output).toEqual([-5, -1, -2])
				})
			})
		})
		describe("scalar by scalar", function(){
			describe("empty vector as output", function(){
				var output
				beforeEach(function(){
					output = []
					vector.subtract(3, 7, output)
				})
				it("writes the result of subtracting the elements to the output", function(){
					expect(output).toEqual([-4])
				})
			})
			describe("populated vector as output", function(){
				var output
				beforeEach(function(){
					output = [15]
					vector.subtract(3, 7, output)
				})
				it("writes the result of subtracting the elements to the output", function(){
					expect(output).toEqual([-4])
				})
			})
		})
	})
	describe("multiply", function(){
		describe("vector by vector", function(){
			describe("empty vector as output", function(){
				var inputA, inputB, output
				beforeEach(function(){
					inputA = [4, 8, 7]
					inputB = [3, 6, 9]
					output = []
					vector.multiply(inputA, inputB, output)
				})
				it("does not modify the inputs", function(){
					expect(inputA).toEqual([4, 8, 7])
					expect(inputB).toEqual([3, 6, 9])
				})
				it("writes the result of multiplying the elements to the output", function(){
					expect(output).toEqual([12, 48, 63])
				})
			})
			describe("populated vector as output", function(){
				var inputA, inputB, output
				beforeEach(function(){
					inputA = [4, 8, 7]
					inputB = [3, 6, 9]
					output = [14, 22, 18]
					vector.multiply(inputA, inputB, output)
				})
				it("does not modify the inputs", function(){
					expect(inputA).toEqual([4, 8, 7])
					expect(inputB).toEqual([3, 6, 9])
				})
				it("writes the result of multiplying the elements to the output", function(){
					expect(output).toEqual([12, 48, 63])
				})
			})
			describe("first input as output", function(){
				var inputA, inputB
				beforeEach(function(){
					inputA = [4, 8, 7]
					inputB = [3, 6, 9]
					vector.multiply(inputA, inputB, inputA)
				})
				it("does not modify the inputs", function(){
					expect(inputB).toEqual([3, 6, 9])
				})
				it("writes the result of multiplying the elements to the output", function(){
					expect(inputA).toEqual([12, 48, 63])
				})
			})
			describe("second input as output", function(){
				var inputA, inputB
				beforeEach(function(){
					inputA = [4, 8, 7]
					inputB = [3, 6, 9]
					vector.multiply(inputA, inputB, inputB)
				})
				it("does not modify the inputs", function(){
					expect(inputA).toEqual([4, 8, 7])
				})
				it("writes the result of multiplying the elements to the output", function(){
					expect(inputB).toEqual([12, 48, 63])
				})
			})
			describe("inputs as output", function(){
				var output
				beforeEach(function(){
					output = [4, 8, 7]
					vector.multiply(output, output, output)
				})
				it("writes the result of multiplying the elements to the output", function(){
					expect(output).toEqual([16, 64, 49])
				})
			})
		})
		describe("scalar by vector", function(){
			describe("empty vector as output", function(){
				var inputB, output
				beforeEach(function(){
					inputB = [4, 8, 7]
					output = []
					vector.multiply(9, inputB, output)
				})
				it("does not modify the inputs", function(){
					expect(inputB).toEqual([4, 8, 7])
				})
				it("writes the result of multiplying the elements to the output", function(){
					expect(output).toEqual([36, 72, 63])
				})
			})
			describe("populated vector as output", function(){
				var inputB, output
				beforeEach(function(){
					inputB = [4, 8, 7]
					output = [24, 87, 43]
					vector.multiply(9, inputB, output)
				})
				it("does not modify the inputs", function(){
					expect(inputB).toEqual([4, 8, 7])
				})
				it("writes the result of multiplying the elements to the output", function(){
					expect(output).toEqual([36, 72, 63])
				})
			})
			describe("input as output", function(){
				var output
				beforeEach(function(){
					output = [4, 8, 7]
					vector.multiply(9, output, output)
				})
				it("writes the result of multiplying the elements to the output", function(){
					expect(output).toEqual([36, 72, 63])
				})
			})
		})
		describe("vector by scalar", function(){
			describe("empty vector as output", function(){
				var inputA, output
				beforeEach(function(){
					inputA = [4, 8, 7]
					output = []
					vector.multiply(inputA, 9, output)
				})
				it("does not modify the inputs", function(){
					expect(inputA).toEqual([4, 8, 7])
				})
				it("writes the result of multiplying the elements to the output", function(){
					expect(output).toEqual([36, 72, 63])
				})
			})
			describe("populated vector as output", function(){
				var inputA, output
				beforeEach(function(){
					inputA = [4, 8, 7]
					output = ["existing a", "existing b", "existing c"]
					vector.multiply(inputA, 9, output)
				})
				it("does not modify the inputs", function(){
					expect(inputA).toEqual([4, 8, 7])
				})
				it("writes the result of multiplying the elements to the output", function(){
					expect(output).toEqual([36, 72, 63])
				})
			})
			describe("input as output", function(){
				var output
				beforeEach(function(){
					output = [4, 8, 7]
					vector.multiply(output, 9, output)
				})
				it("writes the result of multiplying the elements to the output", function(){
					expect(output).toEqual([36, 72, 63])
				})
			})
		})
		describe("scalar by scalar", function(){
			describe("empty vector as output", function(){
				var output
				beforeEach(function(){
					output = []
					vector.multiply(3, 7, output)
				})
				it("writes the result of multiplying the elements to the output", function(){
					expect(output).toEqual([21])
				})
			})
			describe("populated vector as output", function(){
				var output
				beforeEach(function(){
					output = [15]
					vector.multiply(3, 7, output)
				})
				it("writes the result of multiplying the elements to the output", function(){
					expect(output).toEqual([21])
				})
			})
		})
	})	
	describe("divide", function(){
		describe("vector by vector", function(){
			describe("empty vector as output", function(){
				var inputA, inputB, output
				beforeEach(function(){
					inputA = [12, 36, 18]
					inputB = [3, 6, 9]
					output = []
					vector.divide(inputA, inputB, output)
				})
				it("does not modify the inputs", function(){
					expect(inputA).toEqual([12, 36, 18])
					expect(inputB).toEqual([3, 6, 9])
				})
				it("writes the result of dividing the elements to the output", function(){
					expect(output).toEqual([4, 6, 2])
				})
			})
			describe("populated vector as output", function(){
				var inputA, inputB, output
				beforeEach(function(){
					inputA = [12, 36, 18]
					inputB = [3, 6, 9]
					output = [14, 22, 18]
					vector.divide(inputA, inputB, output)
				})
				it("does not modify the inputs", function(){
					expect(inputA).toEqual([12, 36, 18])
					expect(inputB).toEqual([3, 6, 9])
				})
				it("writes the result of dividing the elements to the output", function(){
					expect(output).toEqual([4, 6, 2])
				})
			})
			describe("first input as output", function(){
				var inputA, inputB
				beforeEach(function(){
					inputA = [12, 36, 18]
					inputB = [3, 6, 9]
					vector.divide(inputA, inputB, inputA)
				})
				it("does not modify the inputs", function(){
					expect(inputB).toEqual([3, 6, 9])
				})
				it("writes the result of dividing the elements to the output", function(){
					expect(inputA).toEqual([4, 6, 2])
				})
			})
			describe("second input as output", function(){
				var inputA, inputB
				beforeEach(function(){
					inputA = [12, 36, 18]
					inputB = [3, 6, 9]
					vector.divide(inputA, inputB, inputB)
				})
				it("does not modify the inputs", function(){
					expect(inputA).toEqual([12, 36, 18])
				})
				it("writes the result of dividing the elements to the output", function(){
					expect(inputB).toEqual([4, 6, 2])
				})
			})
			describe("inputs as output", function(){
				var output
				beforeEach(function(){
					output = [12, 36, 18]
					vector.divide(output, output, output)
				})
				it("writes the result of dividing the elements to the output", function(){
					expect(output).toEqual([1, 1, 1])
				})
			})
		})
		describe("scalar by vector", function(){
			describe("empty vector as output", function(){
				var inputB, output
				beforeEach(function(){
					inputB = [2, 5, 4]
					output = []
					vector.divide(20, inputB, output)
				})
				it("does not modify the inputs", function(){
					expect(inputB).toEqual([2, 5, 4])
				})
				it("writes the result of dividing the elements to the output", function(){
					expect(output).toEqual([10, 4, 5])
				})
			})
			describe("populated vector as output", function(){
				var inputB, output
				beforeEach(function(){
					inputB = [2, 5, 4]
					output = [24, 87, 43]
					vector.divide(20, inputB, output)
				})
				it("does not modify the inputs", function(){
					expect(inputB).toEqual([2, 5, 4])
				})
				it("writes the result of dividing the elements to the output", function(){
					expect(output).toEqual([10, 4, 5])
				})
			})
			describe("input as output", function(){
				var output
				beforeEach(function(){
					output = [2, 5, 4]
					vector.divide(20, output, output)
				})
				it("writes the result of dividing the elements to the output", function(){
					expect(output).toEqual([10, 4, 5])
				})
			})
		})
		describe("vector by scalar", function(){
			describe("empty vector as output", function(){
				var inputA, output
				beforeEach(function(){
					inputA = [20, 28, 16]
					output = []
					vector.divide(inputA, 4, output)
				})
				it("does not modify the inputs", function(){
					expect(inputA).toEqual([20, 28, 16])
				})
				it("writes the result of dividing the elements to the output", function(){
					expect(output).toEqual([5, 7, 4])
				})
			})
			describe("populated vector as output", function(){
				var inputA, output
				beforeEach(function(){
					inputA = [20, 28, 16]
					output = ["existing a", "existing b", "existing c"]
					vector.divide(inputA, 4, output)
				})
				it("does not modify the inputs", function(){
					expect(inputA).toEqual([20, 28, 16])
				})
				it("writes the result of dividing the elements to the output", function(){
					expect(output).toEqual([5, 7, 4])
				})
			})
			describe("input as output", function(){
				var output
				beforeEach(function(){
					output = [20, 28, 16]
					vector.divide(output, 4, output)
				})
				it("writes the result of dividing the elements to the output", function(){
					expect(output).toEqual([5, 7, 4])
				})
			})
		})
		describe("scalar by scalar", function(){
			describe("empty vector as output", function(){
				var output
				beforeEach(function(){
					output = []
					vector.divide(12, 4, output)
				})
				it("writes the result of dividing the elements to the output", function(){
					expect(output).toEqual([3])
				})
			})
			describe("populated vector as output", function(){
				var output
				beforeEach(function(){
					output = [15]
					vector.divide(12, 4, output)
				})
				it("writes the result of dividing the elements to the output", function(){
					expect(output).toEqual([3])
				})
			})
		})
	})
	describe("dot", function(){
		describe("vector by vector", function(){
			var inputA, inputB, result
			beforeEach(function(){
				inputA = [3, 8, 2]
				inputB = [6, 9, 4]
				result = vector.dot(inputA, inputB)
			})
			it("does not modify the input", function(){
				expect(inputA).toEqual([3, 8, 2])
				expect(inputB).toEqual([6, 9, 4])
			})
			it("returns the dot product", function(){
				expect(result).toEqual(98)
			})
		})
		describe("scalar by vector", function(){
			var inputB, result
			beforeEach(function(){
				inputB = [3, 8, 2]
				result = vector.dot(9, inputB)
			})
			it("does not modify the input", function(){
				expect(inputB).toEqual([3, 8, 2])
			})
			it("returns the dot product", function(){
				expect(result).toEqual(117)
			})
		})
		describe("vector by scalar", function(){
			var inputA, result
			beforeEach(function(){
				inputA = [3, 8, 2]
				result = vector.dot(inputA, 9)
			})
			it("does not modify the input", function(){
				expect(inputA).toEqual([3, 8, 2])
			})
			it("returns the dot product", function(){
				expect(result).toEqual(117)
			})
		})
		describe("scalar by scalar", function(){
			var result
			beforeEach(function(){
				result = vector.dot(7, 9)
			})
			it("returns the dot product", function(){
				expect(result).toEqual(63)
			})
		})
	})
	describe("cross", function(){
		describe("vector by vector", function(){
			describe("empty vector as output", function(){
				var inputA, inputB, output
				beforeEach(function(){
					inputA = [12, 36, 18]
					inputB = [3, 6, 9]
					output = []
					vector.cross(inputA, inputB, output)
				})
				it("does not modify the inputs", function(){
					expect(inputA).toEqual([12, 36, 18])
					expect(inputB).toEqual([3, 6, 9])
				})
				it("writes the cross product to the output", function(){
					expect(output).toEqual([216, -54, -36])
				})
			})
			describe("populated vector as output", function(){
				var inputA, inputB, output
				beforeEach(function(){
					inputA = [12, 36, 18]
					inputB = [3, 6, 9]
					output = [14, 22, 18]
					vector.cross(inputA, inputB, output)
				})
				it("does not modify the inputs", function(){
					expect(inputA).toEqual([12, 36, 18])
					expect(inputB).toEqual([3, 6, 9])
				})
				it("writes the cross product to the output", function(){
					expect(output).toEqual([216, -54, -36])
				})
			})
			describe("first input as output", function(){
				var inputA, inputB
				beforeEach(function(){
					inputA = [12, 36, 18]
					inputB = [3, 6, 9]
					vector.cross(inputA, inputB, inputA)
				})
				it("does not modify the inputs", function(){
					expect(inputB).toEqual([3, 6, 9])
				})
				it("writes the cross product to the output", function(){
					expect(inputA).toEqual([216, -54, -36])
				})
			})
			describe("second input as output", function(){
				var inputA, inputB
				beforeEach(function(){
					inputA = [12, 36, 18]
					inputB = [3, 6, 9]
					vector.cross(inputA, inputB, inputB)
				})
				it("does not modify the inputs", function(){
					expect(inputA).toEqual([12, 36, 18])
				})
				it("writes the cross product to the output", function(){
					expect(inputB).toEqual([216, -54, -36])
				})
			})
			describe("inputs as output", function(){
				var output
				beforeEach(function(){
					output = [12, 36, 18]
					vector.cross(output, output, output)
				})
				it("writes the cross product to the output", function(){
					expect(output).toEqual([0, 0, 0])
				})
			})
		})
		describe("scalar by vector", function(){
			describe("empty vector as output", function(){
				var inputB, output
				beforeEach(function(){
					inputB = [2, 5, 4]
					output = []
					vector.cross(20, inputB, output)
				})
				it("does not modify the inputs", function(){
					expect(inputB).toEqual([2, 5, 4])
				})
				it("writes the cross product to the output", function(){
					expect(output).toEqual([-20, -40, 60])
				})
			})
			describe("populated vector as output", function(){
				var inputB, output
				beforeEach(function(){
					inputB = [2, 5, 4]
					output = [24, 87, 43]
					vector.cross(20, inputB, output)
				})
				it("does not modify the inputs", function(){
					expect(inputB).toEqual([2, 5, 4])
				})
				it("writes the cross product to the output", function(){
					expect(output).toEqual([-20, -40, 60])
				})
			})
			describe("input as output", function(){
				var output
				beforeEach(function(){
					output = [2, 5, 4]
					vector.cross(20, output, output)
				})
				it("writes the cross product to the output", function(){
					expect(output).toEqual([-20, -40, 60])
				})
			})
		})
		describe("vector by scalar", function(){
			describe("empty vector as output", function(){
				var inputA, output
				beforeEach(function(){
					inputA = [20, 28, 16]
					output = []
					vector.cross(inputA, 4, output)
				})
				it("does not modify the inputs", function(){
					expect(inputA).toEqual([20, 28, 16])
				})
				it("writes the cross product to the output", function(){
					expect(output).toEqual([48, -16, -32])
				})
			})
			describe("populated vector as output", function(){
				var inputA, output
				beforeEach(function(){
					inputA = [20, 28, 16]
					output = ["existing a", "existing b", "existing c"]
					vector.cross(inputA, 4, output)
				})
				it("does not modify the inputs", function(){
					expect(inputA).toEqual([20, 28, 16])
				})
				it("writes the cross product to the output", function(){
					expect(output).toEqual([48, -16, -32])
				})
			})
			describe("input as output", function(){
				var output
				beforeEach(function(){
					output = [20, 28, 16]
					vector.cross(output, 4, output)
				})
				it("writes the cross product to the output", function(){
					expect(output).toEqual([48, -16, -32])
				})
			})
		})
		describe("scalar by scalar", function(){
			describe("empty vector as output", function(){
				var output
				beforeEach(function(){
					output = []
					vector.cross(12, 4, output)
				})
				it("writes the cross product to the output", function(){
					expect(output).toEqual([0, 0, 0])
				})
			})
			describe("populated vector as output", function(){
				var output
				beforeEach(function(){
					output = [15, 23, 55]
					vector.cross(12, 4, output)
				})
				it("writes the cross product to the output", function(){
					expect(output).toEqual([0, 0, 0])
				})
			})
		})
	})
	describe("reflect", function(){
		describe("vector by vector", function(){
			describe("empty vector as output", function(){
				var inputA, inputB, output
				beforeEach(function(){
					inputA = [12, 36, 18]
					inputB = [-0.287348, -0.766261, -0.574696]
					output = []
					vector.reflect(inputA, inputB, output)
				})
				it("does not modify the inputs", function(){
					expect(inputA).toEqual([12, 36, 18])
					expect(inputB).toEqual([-0.287348, -0.766261, -0.574696])
				})
				it("writes the reflected vector to the output", function(){
					expect(output.length).toEqual(3)
					expect(output[0]).toBeCloseTo(-11.77983)
					expect(output[1]).toBeCloseTo(-27.41285)
					expect(output[2]).toBeCloseTo(-29.55966)
				})
			})
			describe("populated vector as output", function(){
				var inputA, inputB, output
				beforeEach(function(){
					inputA = [12, 36, 18]
					inputB = [-0.287348, -0.766261, -0.574696]
					output = [14, 22, 18]
					vector.reflect(inputA, inputB, output)
				})
				it("does not modify the inputs", function(){
					expect(inputA).toEqual([12, 36, 18])
					expect(inputB).toEqual([-0.287348, -0.766261, -0.574696])
				})
				it("writes the reflected vector to the output", function(){
					expect(output.length).toEqual(3)
					expect(output[0]).toBeCloseTo(-11.77983)
					expect(output[1]).toBeCloseTo(-27.41285)
					expect(output[2]).toBeCloseTo(-29.55966)
				})
			})
			describe("first input as output", function(){
				var inputA, inputB
				beforeEach(function(){
					inputA = [12, 36, 18]
					inputB = [-0.287348, -0.766261, -0.574696]
					vector.reflect(inputA, inputB, inputA)
				})
				it("does not modify the inputs", function(){
					expect(inputB).toEqual([-0.287348, -0.766261, -0.574696])
				})
				it("writes the reflected vector to the output", function(){
					expect(inputA.length).toEqual(3)
					expect(inputA[0]).toBeCloseTo(-11.77983)
					expect(inputA[1]).toBeCloseTo(-27.41285)
					expect(inputA[2]).toBeCloseTo(-29.55966)
				})
			})
			describe("second input as output", function(){
				var inputA, inputB
				beforeEach(function(){
					inputA = [12, 36, 18]
					inputB = [-0.287348, -0.766261, -0.574696]
					vector.reflect(inputA, inputB, inputB)
				})
				it("does not modify the inputs", function(){
					expect(inputA).toEqual([12, 36, 18])
				})
				it("writes the reflected vector to the output", function(){
					expect(inputB.length).toEqual(3)
					expect(inputB[0]).toBeCloseTo(-11.77983)
					expect(inputB[1]).toBeCloseTo(-27.41285)
					expect(inputB[2]).toBeCloseTo(-29.55966)
				})
			})
			describe("inputs as output", function(){
				var output
				beforeEach(function(){
					output = [-0.287348, -0.766261, -0.574696]
					vector.reflect(output, output, output)
				})
				it("writes the reflected vector to the output", function(){
					expect(output.length).toEqual(3)
					expect(output[0]).toBeCloseTo(0.287348)
					expect(output[1]).toBeCloseTo(0.766261)
					expect(output[2]).toBeCloseTo(0.574696)
				})
			})
		})
		describe("scalar by vector", function(){
			describe("empty vector as output", function(){
				var inputB, output
				beforeEach(function(){
					inputB = [-0.287348, -0.766261, -0.574696]
					output = []
					vector.reflect(20, inputB, output)
				})
				it("does not modify the inputs", function(){
					expect(inputB).toEqual([-0.287348, -0.766261, -0.574696])
				})
				it("writes the reflected vector to the output", function(){
					expect(output.length).toEqual(3)
					expect(output[0]).toBeCloseTo(1.284393)
					expect(output[1]).toBeCloseTo(-29.908265)
					expect(output[2]).toBeCloseTo(-17.431215)
				})
			})
			describe("populated vector as output", function(){
				var inputB, output
				beforeEach(function(){
					inputB = [-0.287348, -0.766261, -0.574696]
					output = [24, 87, 43]
					vector.reflect(20, inputB, output)
				})
				it("does not modify the inputs", function(){
					expect(inputB).toEqual([-0.287348, -0.766261, -0.574696])
				})
				it("writes the reflected vector to the output", function(){
					expect(output.length).toEqual(3)
					expect(output[0]).toBeCloseTo(1.284393)
					expect(output[1]).toBeCloseTo(-29.908265)
					expect(output[2]).toBeCloseTo(-17.431215)
				})
			})
			describe("input as output", function(){
				var output
				beforeEach(function(){
					output = [-0.287348, -0.766261, -0.574696]
					vector.reflect(20, output, output)
				})
				it("writes the reflected vector to the output", function(){
					expect(output.length).toEqual(3)
					expect(output[0]).toBeCloseTo(1.284393)
					expect(output[1]).toBeCloseTo(-29.908265)
					expect(output[2]).toBeCloseTo(-17.431215)
				})
			})
		})
	})
})
