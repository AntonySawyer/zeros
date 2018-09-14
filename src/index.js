module.exports = function getZerosCount(number) {
	// looking for 5 * 2 (one way to get 0)
 	var zeros = 0;
	while(number > 0)
	{
	  number = parseInt(number/5);
	  zeros += number;
	}

	return zeros;
}
