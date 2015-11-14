instance.magnitudeSquared = function(input) {
	return instance.dot(input, input)
}

instance.magnitude = function(input) {
	return Math.sqrt(instance.magnitudeSquared(input))
}

instance.distanceSquared = function(a, b) {
	return instance.zipFold(a, b, function(a, b) {
		var temp = a - b
		return temp * temp
	}, function(accumulated, next) { return accumulated + next })
}

instance.distance = function(a, b) {
	return Math.sqrt(instance.distanceSquared(a, b))
}
