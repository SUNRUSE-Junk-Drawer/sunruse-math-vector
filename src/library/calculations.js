instance.sum = function(input) {
	return instance.fold(input, function(a, b) { return a + b })
}

instance.product = function(input) {
	return instance.fold(input, function(a, b) { return a * b })
}
