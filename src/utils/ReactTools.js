
/**
 * Given a prefix and an index, returns a unique identifiant
 * suitable to be used as the key attribute of a React component inside a list
 * @param {String} prefix
 * @param {Number} idx
 * @param {Number} [pad=2] Number of fixed digits (pad with 0)
 * @returns {String}
 * @example
 * <ul id="todos">{
 *     todos.map((todo, i) =>
 *       <li key={createKey('todo-', i)}>{todo.label}</li>
 *     )
 * }</ul>
 */
const createKey = (prefix, idx, pad) => {
	const k = prefix + ((pad?pad:2)*10+idx).toString().substr(1);
	console.log(`Creating key ${k} for index ${idx}`);
	return k;
}

export { createKey };
