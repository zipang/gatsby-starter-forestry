/**
 * Random.integer(min, max) => some integer between min and max
 * Random.pick(["rock", "paper", "scissor"]) => pick a random element from the array
 * Random.truth() => return TRUE or FALSE randomly
 */
const Random = {

	integer:function (min, max) {
		return min + Math.round(Math.random() * (max - min));
	},
	pick:function (arr) {
		return arr[Math.floor(Math.random() * arr.length)];
	},
	truth:function () {
		return Random.pick([true, false]);
	}
}

export default Random;
