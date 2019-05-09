import React from "react";

var parseTag = require('./parse-tag');



const isChildren = (x) => typeof x === 'string' || typeof x === 'number' || Array.isArray(x);

/**
 *
 * @param {String|Function} cmpnt
 * @param {Object} properties
 * @param {Array|String|Number} children
 */
const h = (cmpnt, properties, children) => {

	// if only one argument which is an array, wrap items with React.Fragment
	if (arguments.length === 1 && Array.isArray(cmpnt)) {
		return h(React.Fragment, null, cmpnt);

	} else if (!children && isChildren(properties)) {
		// If a child array or text node are passed as the second argument, shift them
		children = properties;
		properties = {};

	} else if (arguments.length === 2) {
		// If no children were passed, we don't want to pass "undefined"
		// and potentially overwrite the `children` prop
		children = [];
	}

	properties = properties ? Object.assign({}, properties) : {};

	// When a selector, parse the tag name and fill out the properties object
	if (typeof cmpnt === 'string') {
		cmpnt = parseTag(cmpnt, properties);
	}

	// Create the element
	var args = [cmpnt, properties].concat(children);
	return React.createElement.apply(React, args);
}


