instance.clone = function(input, output) {
	instance.map(input, output, function(item) { return item })
}

instance.negate = function(input, output) {
	instance.map(input, output, function(item) { return -item })
}

instance.normalize = function(input, output) {
	var magnitude = instance.magnitude(input)
	instance.divide(input, magnitude, output)
}
