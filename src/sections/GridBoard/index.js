import React from "react";
import { createKey } from "../../utils/ReactTools";

import "./grid-board-styles.less";

const h = React.createElement;

/**
 * hoC : Add the `colWidth` and `rowHeight` props to a cell of the grid
 * @param {Number} cw - column width in percents of the grid width (0-100)
 * @param {Number} rh - row height in percents of the grid height (0-100)
 */
const withGridDimensions = (cw, rh) => (Wrapped, i) => (...props) =>
	<Wrapped colWidth={cw} rowHeight={rh} key={createKey("cell-",i)} {...props} />;

/**
 * Define a grid of `cols` x `rows` cells
 *
 * GridBoard.Cells spanning multiples rows or columns
 * can be absolutely positionned inside this grid,
 *
 * @param {Number} cols - number of columns
 * @param {Number} rows - number of rows
 * @param {GridBoard.Cells[]} children
 */
const GridBoard = ({
	cols = 5,
	rows = 2,
	children,
	cells = [],
	...props
}) => {

	const colWidth  = 100 / cols;
	const rowHeight = 100 / rows;

	const gridCells =
		children ?
			children.map(withGridDimensions(colWidth, rowHeight)) :
			cells.map(withGridDimensions(colWidth, rowHeight)).map(GridBoard.Cell);

	const gbSection = h(
		"section",
		{ className: "grid-board", ...props },
		gridCells
	);

	return gbSection;
}

/**
 * Child elements of a grid board
 * They have a position [col, row] inside the grid
 * And a width and height (colSpan, rowSpan)
 * expressed as the number of cols and rows that they cover
 * @param {Number} col - column index (1-based)
 * @param {Number} row - row index (1-based)
 * @param {Number} [colSpan=1]
 * @param {Number} [rowSpan=1]
 */
GridBoard.Cell = ({
	col,
	row,
	colSpan = 1,
	rowSpan = 1,
	colWidth,
	rowHeight,
	children,
	className = '',
	...props
}) => {

	className += " cell";

	const cellStyle = {
		position: "absolute",
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
