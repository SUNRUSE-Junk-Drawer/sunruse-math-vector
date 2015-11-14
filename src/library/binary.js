instance.add = function(a, b, output) {
	instance.zip(a, b, output, function(a, b) { return a + b })
}

instance.subtract = function(a, b, output) {
	instance.zip(a, b, output, function(a, b) { return a - b })
}

instance.multiply = function(a, b, output) {
	instance.zip(a, b, output, function(a, b) { return a * b })
}

instance.divide = function(a, b, output) {
	instance.zip(a, b, output, function(a, b) { return a / b })
}

instance.dot = function(a, b) {
	return instance.zipFold(a, b, function(a, b) { return a * b }, function(accumulated, next) { return accumulated + next })
}

instance.cross = function(a, b, output) {
	var tempA0, tempA1, tempA2
	if(a instanceof Array) {
		tempA0 = a[0]
		tempA1 = a[1]
		tempA2 = a[2]
	} else {
		tempA0 = a
		tempA1 = a
		tempA2 = a
	}
	var tempB0, tempB1, tempB2
	if(b instanceof Array) {
		tempB0 = b[0]
		tempB1 = b[1]
		tempB2 = b[2]
	} else {
		tempB0 = b
		tempB1 = b
		tempB2 = b
	}
	output[0] = tempA1 * tempB2 - tempA2 * tempB1
	output[1] = tempA2 * tempB0 - tempA0 * tempB2
	output[2] = tempA0 * tempB1 - tempA1 * tempB0
}

instance.reflect = function(vector, normal, output) {
	var dot = instance.dot(vector, normal) * 2
	instance.zip(vector, normal, output, function(a, b) { return a - b * dot })
}
