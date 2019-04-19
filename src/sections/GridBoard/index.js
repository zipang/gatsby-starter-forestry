import React from "react";

import "./grid-board-styles.less";

/**
 * Add the `colWidth` and `rowHeight` props to a cell of the grid
 * @param {Number} cw - column width in percents of the grid width (0-100)
 * @param {Number} rh - row height in percents of the grid height (0-100)
 */
const withGridDimensions = (cw, rh) => (Wrapped) => (...props) =>
	<Wrapped colWidth={cw} rowHeight={rh} {...props} />;

/**
 * Define a grid of cols x rows cells
 * Then GridBoard.Cells spanning multiples rows or columns
 * can be absolutely positionned inside the grid,
 *
 * @param {Number} cols - number of columns
 * @param {Number} rows - number of rows
 * @param {Boolean} hasContainer [false] - add a container around the children
 * @param {String} containerClassName ["container"] - container class name
 * @param {Array[GridBoard.Cells]} children
 */
const GridBoard = ({
	cols = 5,
	rows = 2,
	hasContainer = false,
	containerClassName = "container",
	children,
	...props
}) => {
	const colWidth  = 100 / cols;
	const rowHeight = 100 / rows;
	const cells = children.map(withGridDimensions(colWidth, rowHeight));

	return (
		<section className="grid-board" {...props}>
			{ hasContainer ?
				<div className={containerClassName}>{ cells }</div> :
				{ cells }
			}
		</section>
	)
}

GridBoard.Cells = ({
	col,
	row,
	colWidth,
	rowHeight,
	colSpan = 1,
	rowSpan = 1,
	children,
	className = '',
	...props
}) => {

	className += " cell";
	const cellStyle = {
		position: "absolute";
		top: ((row-1) * rowHeight) + "%",
		left: ((col-1) * colWidth) + "%",
		width: (colWidth * colSpan) + "%",
		height: (rowHeight * rowSpan) + "%",
	}

	return (<div className={className} style={cellStyle} {...props}>
		{ children }
	</div>)
}

export default GridBoard;
