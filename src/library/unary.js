instance.clone = function(input, output) {
	instance.map(input, output, function(item) { return item })
}

instance.negate = function(input, output) {
	instance.map(input, output, function(item) { return -item })
}
