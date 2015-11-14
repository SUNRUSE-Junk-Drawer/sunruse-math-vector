describe("generic set operations", function(){
	var vector = require("./../../dist/node")
	describe("map", function(){
		describe("empty vector as output", function(){
			var input, output
			beforeEach(function(){
				input = ["item a", "item b", "item c"]
				output = []
				vector.map(input, output, function(input){ return "mapped(" + input + ")" })
			})
			it("does not modify the input", function(){
				expect(input).toEqual(["item a", "item b", "item c"])
			})
			it("applies the callback to every element and writes them to the output", function(){
				expect(output).toEqual(["mapped(item a)", "mapped(item b)", "mapped(item c)"])
			})
		})
		describe("populated vector as output", function(){
			var input, output
			beforeEach(function(){
				input = ["item a", "item b", "item c"]
				output = ["existing a", "existing b", "existing c"]
				vector.map(input, output, function(input){ return "mapped(" + input + ")" })
			})
			it("does not modify the input", function(){
				expect(input).toEqual(["item a", "item b", "item c"])
			})
			it("applies the callback to every element and writes them to the output", function(){
				expect(output).toEqual(["mapped(item a)", "mapped(item b)", "mapped(item c)"])
			})
		})
		describe("input as output", function(){
			var output
			beforeEach(function(){
				output = ["item a", "item b", "item c"]
				vector.map(output, output, function(input){ return "mapped(" + input + ")" })
			})
			it("applies the callback to every element and writes them to the output", function(){
				expect(output).toEqual(["mapped(item a)", "mapped(item b)", "mapped(item c)"])
			})
		})
		describe("scalar", function(){
			var output
			beforeEach(function(){
				output = []
				vector.map("scalar", output, function(input){ return "mapped(" + input + ")" })
			})
			it("applies the callback to every element and writes them to the output", function(){
				expect(output).toEqual(["mapped(scalar)"])
			})
		})
	})
	describe("zip", function(){
		describe("vector by vector", function(){
			describe("empty vector as output", function(){
				var inputA, inputB, output
				beforeEach(function(){
					inputA = ["item a a", "item a b", "item a c"]
					inputB = ["item b a", "item b b", "item b c"]
					output = []
					vector.zip(inputA, inputB, output, function(a, b){ return "zipped(" + a + ", " + b + ")" })
				})
				it("does not modify the inputs", function(){
					expect(inputA).toEqual(["item a a", "item a b", "item a c"])
					expect(inputB).toEqual(["item b a", "item b b", "item b c"])
				})
				it("applies the callback to every element and writes them to the output", function(){
					expect(output).toEqual(["zipped(item a a, item b a)", "zipped(item a b, item b b)", "zipped(item a c, item b c)"])
				})
			})
			describe("populated vector as output", function(){
				var inputA, inputB, output
				beforeEach(function(){
					inputA = ["item a a", "item a b", "item a c"]
					inputB = ["item b a", "item b b", "item b c"]
					output = [14, 22, 18]
					vector.zip(inputA, inputB, output, function(a, b){ return "zipped(" + a + ", " + b + ")" })
				})
				it("does not modify the inputs", function(){
					expect(inputA).toEqual(["item a a", "item a b", "item a c"])
					expect(inputB).toEqual(["item b a", "item b b", "item b c"])
				})
				it("applies the callback to every element and writes them to the output", function(){
					expect(output).toEqual(["zipped(item a a, item b a)", "zipped(item a b, item b b)", "zipped(item a c, item b c)"])
				})
			})
			describe("first input as output", function(){
				var inputA, inputB
				beforeEach(function(){
					inputA = ["item a a", "item a b", "item a c"]
					inputB = ["item b a", "item b b", "item b c"]
					vector.zip(inputA, inputB, inputA, function(a, b){ return "zipped(" + a + ", " + b + ")" })
				})
				it("does not modify the inputs", function(){
					expect(inputB).toEqual(["item b a", "item b b", "item b c"])
				})
				it("applies the callback to every element and writes them to the output", function(){
					expect(inputA).toEqual(["zipped(item a a, item b a)", "zipped(item a b, item b b)", "zipped(item a c, item b c)"])
				})
			})
			describe("second input as output", function(){
				var inputA, inputB
				beforeEach(function(){
					inputA = ["item a a", "item a b", "item a c"]
					inputB = ["item b a", "item b b", "item b c"]
					vector.zip(inputA, inputB, inputB, function(a, b){ return "zipped(" + a + ", " + b + ")" })
				})
				it("does not modify the inputs", function(){
					expect(inputA).toEqual(["item a a", "item a b", "item a c"])
				})
				it("applies the callback to every element and writes them to the output", function(){
					expect(inputB).toEqual(["zipped(item a a, item b a)", "zipped(item a b, item b b)", "zipped(item a c, item b c)"])
				})
			})
			describe("inputs as output", function(){
				var output
				beforeEach(function(){
					output = ["existing a", "existing b", "existing c"]
					vector.zip(output, output, output, function(a, b){ return "zipped(" + a + ", " + b + ")" })
				})
				it("applies the callback to every element and writes them to the output", function(){
					expect(output).toEqual(["zipped(existing a, existing a)", "zipped(existing b, existing b)", "zipped(existing c, existing c)"])
				})
			})
		})
		describe("scalar by vector", function(){
			describe("empty vector as output", function(){
				var inputB, output
				beforeEach(function(){
					inputB = ["item a", "item b", "item c"]
					output = []
					vector.zip("scalar", inputB, output, function(a, b){ return "zipped(" + a + ", " + b + ")" })
				})
				it("does not modify the inputs", function(){
					expect(inputB).toEqual(["item a", "item b", "item c"])
				})
				it("applies the callback to every element and writes them to the output", function(){
					expect(output).toEqual(["zipped(scalar, item a)", "zipped(scalar, item b)", "zipped(scalar, item c)"])
				})
			})
			describe("populated vector as output", function(){
				var inputB, output
				beforeEach(function(){
					inputB = ["item a", "item b", "item c"]
					output = ["existing a", "existing b", "existing c"]
					vector.zip("scalar", inputB, output, function(a, b){ return "zipped(" + a + ", " + b + ")" })
				})
				it("does not modify the inputs", function(){
					expect(inputB).toEqual(["item a", "item b", "item c"])
				})
				it("applies the callback to every element and writes them to the output", function(){
					expect(output).toEqual(["zipped(scalar, item a)", "zipped(scalar, item b)", "zipped(scalar, item c)"])
				})
			})
			describe("input as output", function(){
				var output
				beforeEach(function(){
					output = ["existing a", "existing b", "existing c"]
					vector.zip("scalar", output, output, function(a, b){ return "zipped(" + a + ", " + b + ")" })
				})
				it("applies the callback to every element and writes them to the output", function(){
					expect(output).toEqual(["zipped(scalar, existing a)", "zipped(scalar, existing b)", "zipped(scalar, existing c)"])
				})
			})
		})
		describe("vector by scalar", function(){
			describe("empty vector as output", function(){
				var inputA, output
				beforeEach(function(){
					inputA = ["item a", "item b", "item c"]
					output = []
					vector.zip(inputA, "scalar", output, function(a, b){ return "zipped(" + a + ", " + b + ")" })
				})
				it("does not modify the inputs", function(){
					expect(inputA).toEqual(["item a", "item b", "item c"])
				})
				it("applies the callback to every element and writes them to the output", function(){
					expect(output).toEqual(["zipped(item a, scalar)", "zipped(item b, scalar)", "zipped(item c, scalar)"])
				})
			})
			describe("populated vector as output", function(){
				var inputA, output
				beforeEach(function(){
					inputA = ["item a", "item b", "item c"]
					output = ["existing a", "existing b", "existing c"]
					vector.zip(inputA, "scalar", output, function(a, b){ return "zipped(" + a + ", " + b + ")" })
				})
				it("does not modify the inputs", function(){
					expect(inputA).toEqual(["item a", "item b", "item c"])
				})
				it("applies the callback to every element and writes them to the output", function(){
					expect(output).toEqual(["zipped(item a, scalar)", "zipped(item b, scalar)", "zipped(item c, scalar)"])
				})
			})
			describe("input as output", function(){
				var output
				beforeEach(function(){
					output = ["existing a", "existing b", "existing c"]
					vector.zip("item", output, output, function(a, b){ return "zipped(" + a + ", " + b + ")" })
				})
				it("applies the callback to every element and writes them to the output", function(){
					expect(output).toEqual(["zipped(item, existing a)", "zipped(item, existing b)", "zipped(item, existing c)"])
				})
			})
		})
		describe("scalar by scalar", function(){
			describe("empty vector as output", function(){
				var output
				beforeEach(function(){
					output = []
					vector.zip("item a", "item b", output, function(a, b){ return "zipped(" + a + ", " + b + ")" })
				})
				it("applies the callback to every element and writes them to the output", function(){
					expect(output).toEqual(["zipped(item a, item b)"])
				})
			})
			describe("populated vector as output", function(){
				var output
				beforeEach(function(){
					output = ["existing"]
					vector.zip("item a", "item b", output, function(a, b){ return "zipped(" + a + ", " + b + ")" })
				})
				it("applies the callback to every element and writes them to the output", function(){
					expect(output).toEqual(["zipped(item a, item b)"])
				})
			})
		})
	})
	describe("fold", function(){
		describe("scalar", function(){
			var result
			beforeEach(function(){
				result = vector.fold("scalar", function(a, b){ return "folded(" + a + ", " + b + ")" })
			})
			it("applies the callback to every element and returns the result", function(){
				expect(result).toEqual("scalar")
			})
		})
		describe("vector with a single element", function(){
			var input, result
			beforeEach(function(){
				input = ["item a"]
				result = vector.fold(input, function(a, b){ return "folded(" + a + ", " + b + ")" })
			})
			it("does not modify the input", function(){
				expect(input).toEqual(["item a"])
			})
			it("applies the callback to every element and returns the result", function(){
				expect(result).toEqual("item a")
			})
		})
		describe("vector with multiple elements", function(){
			var input, result
			beforeEach(function(){
				input = ["item a", "item b", "item c"]
				result = vector.fold(input, function(a, b){ return "folded(" + a + ", " + b + ")" })
			})
			it("does not modify the input", function(){
				expect(input).toEqual(["item a", "item b", "item c"])
			})
			it("applies the callback to every element and returns the result", function(){
				expect(result).toEqual("folded(folded(item a, item b), item c)")
			})
		})
	})
	describe("zipFold", function(){
		describe("vector by vector", function(){
			var inputA, inputB, result
			beforeEach(function(){
				inputA = ["item a a", "item a b", "item a c"]
				inputB = ["item b a", "item b b", "item b c"]
				result = vector.zipFold(inputA, inputB, function(a, b){ return "zipped(" + a + ", " + b + ")" }, function(a, b){ return "folded(" + a + ", " + b + ")" })
			})
			it("does not modify the input", function(){
				expect(inputA).toEqual(["item a a", "item a b", "item a c"])
				expect(inputB).toEqual(["item b a", "item b b", "item b c"])
			})
			it("applies the callback to every element and returns the result", function(){
				expect(result).toEqual("folded(folded(zipped(item a a, item b a), zipped(item a b, item b b)), zipped(item a c, item b c))")
			})
		})
		describe("scalar by vector", function(){
			var inputB, result
			beforeEach(function(){
				inputB = ["item b a", "item b b", "item b c"]
				result = vector.zipFold("item a", inputB, function(a, b){ return "zipped(" + a + ", " + b + ")" }, function(a, b){ return "folded(" + a + ", " + b + ")" })
			})
			it("does not modify the input", function(){
				expect(inputB).toEqual(["item b a", "item b b", "item b c"])
			})
			it("applies the callback to every element and returns the result", function(){
				expect(result).toEqual("folded(folded(zipped(item a, item b a), zipped(item a, item b b)), zipped(item a, item b c))")
			})
		})
		describe("vector by scalar", function(){
			var inputA, result
			beforeEach(function(){
				inputA = ["item a a", "item a b", "item a c"]
				result = vector.zipFold(inputA, "item b", function(a, b){ return "zipped(" + a + ", " + b + ")" }, function(a, b){ return "folded(" + a + ", " + b + ")" })
			})
			it("does not modify the input", function(){
				expect(inputA).toEqual(["item a a", "item a b", "item a c"])
			})
			it("applies the callback to every element and returns the result", function(){
				expect(result).toEqual("folded(folded(zipped(item a a, item b), zipped(item a b, item b)), zipped(item a c, item b))")
			})
		})
		describe("scalar by scalar", function(){
			var result
			beforeEach(function(){
				result = vector.zipFold("item a", "item b", function(a, b){ return "zipped(" + a + ", " + b + ")" }, function(a, b){ return "folded(" + a + ", " + b + ")" })
			})
			it("applies the callback to every element and returns the result", function(){
				expect(result).toEqual("zipped(item a, item b)")
			})
		})
	})
})
