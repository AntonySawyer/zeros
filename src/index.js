module.exports = function getZerosCount(number) {
	// looking for fives: 5 * 2 (one way to get 0)
 	let zeros = 0;
  let num = number;
	while(num > 0) {
	  num = parseInt(num/5);
	  zeros += num;
	}

	return zeros;
}
