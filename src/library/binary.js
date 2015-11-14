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
