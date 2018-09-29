// Sum all the numbers of the array except the highest and the lowest number
// If the highest and lowest numbers appear more than once, exclude ALL occurrences
//
// e.g. sumWithoutHighestAndLowest([6, 2, 1, 8, 10]) => 16
// e.g. sumWithoutHighestAndLowest([1, 1, 11, 2, 3]) => 5

const sumWithoutHighestAndLowest = array => {
	if(array) {
		return array
		.filter(element => element < Math.max.apply(null, array))
		.filter(element => element > Math.min.apply(null, array))
		.reduce(((accumulator, element) => accumulator + element), 0);
	} else {
		return 0;
	}
  };

module.exports = sumWithoutHighestAndLowest;
