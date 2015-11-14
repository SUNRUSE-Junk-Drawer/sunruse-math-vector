if(SUNRUSE === undefined) {
	var SUNRUSE = {}
}
SUNRUSE.math = SUNRUSE.math || {}
SUNRUSE.math.vector = (function() {
	var instance = {}


instance.map = function(input, output, callback) {
	if(input instanceof Array) {
		for(var i = 0; i < input.length; i++) {
			output[i] = callback(input[i])
		}
	} else {
		output[0] = callback(input)
	}
}

instance.zip = function(inputA, inputB, output, callback) {
	if(inputA instanceof Array) {
		if(inputB instanceof Array) {
			for(var i = 0; i < inputA.length; i++) {
				output[i] = callback(inputA[i], inputB[i])
			}
		} else {
			for(var i = 0; i < inputA.length; i++) {
				output[i] = callback(inputA[i], inputB)
			}
		}		
	} else {
		if(inputB instanceof Array) {
			for(var i = 0; i < inputB.length; i++) {
				output[i] = callback(inputA, inputB[i])
			}
		} else {
			output[0] = callback(inputA, inputB)
		}
	}
}

instance.fold = function(input, callback) {
	if(input instanceof Array) {
		var computed = input[0]
		for(var i = 1; i < input.length; i++) {
			computed = callback(computed, input[i])
		}
		return computed
	} else {
		return input
	}
}

instance.zipFold = function(inputA, inputB, zipCallback, foldCallback) {
	if(inputA instanceof Array) {
		if(inputB instanceof Array) {
			var computed = zipCallback(inputA[0], inputB[0])
			for(var i = 1; i < inputA.length; i++) {
				computed = foldCallback(computed, zipCallback(inputA[i], inputB[i]))
			}
			return computed
		} else {
			var computed = zipCallback(inputA[0], inputB)
			for(var i = 1; i < inputA.length; i++) {
				computed = foldCallback(computed, zipCallback(inputA[i], inputB))
			}
			return computed
		}		
	} else {
		if(inputB instanceof Array) {
			var computed = zipCallback(inputA, inputB[0])
			for(var i = 1; i < inputB.length; i++) {
				computed = foldCallback(computed, zipCallback(inputA, inputB[i]))
			}
			return computed
		} else {
			return zipCallback(inputA, inputB)
		}
	}
}

	return instance
})()
