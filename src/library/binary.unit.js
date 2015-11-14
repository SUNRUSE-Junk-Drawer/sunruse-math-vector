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
})
