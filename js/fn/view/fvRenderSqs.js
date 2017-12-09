/**
 * Potential Hotspot/Idempotent
 * @author DoubleX @interface @since v1.0 @version v1.0
 * @param {Dom} BOARD - The dom representing the 2D board
 * @param {Number} BOARD_W - The board width
 * @param {Number} BOARD_H - The board height
 * @param {Number} TOMEK_NO - The number of tomeks
 * @param {Number} BLOCK_NO - The number of blocks
 * @param {FVRenderDoms} FV_RENDER_DOMS - The seam for actually rendering doms
 * @param {FVRenderSqParams} FV_RENDER_SQ_PARAMS - The seam for returning
 *                                                  display contents
 * @param {FVRenderSq} FVRenderSq - The square to be rendered
 * @param {Function()} ONCLICK - Dispatches the square click event
 */
const FVRenderSqs = (BOARD, BOARD_W, BOARD_H, TOMEK_NO, BLOCK_NO,
        FV_RENDER_DOMS, FV_RENDER_SQ_PARAMS, FVRenderSq, ONCLICK) => {

    "use strict";

    // It need not be a param as it doesn't matter in integration testing
    const _ROW_DOM_ID_PRE = "row";
    //

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Array[FVRenderSq]} rows - The list of accumulated squares
     * @param {} element - The placeholder argument
     * @param {Number} rowIndex - The index of the row to be accumulated
     * @returns {Array[FVRenderSq]} The requested list of squares
     * @todo Makes this function pure or at least nullipotent
     */
    const _accumRow = (rows, element, rowIndex) => rows.concat(_row(rowIndex));

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Number} rowIndex - The index of the row to be accumulated
     * @returns {Array[FVRenderSq]} The requested row containing squares
     * @todo Makes this function pure or at least nullipotent
     */
    const _row = rowIndex => {
        return Array(BOARD_W).fill("").reduce(
                _accumSq.bind(FVRenderSqs, rowIndex, _rowDom(rowIndex)), []);
    }; // _row

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Number} rowIndex - The index of the row to be accumulated
     * @returns {Dom} The row as the placeholder to display a 2D board
     * @todo Makes this function pure or at least nullipotent
     */
    const _rowDom = rowIndex => {
        // It's only used as a placeholder for the square to render a 2D board
        return _oldRowDom(rowIndex) || _newRowDom(rowIndex);
        //
    }; // _rowDom

    /**
     * Potential Hotspot/Nullipotent
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Number} rowIndex - The index of the row to be accumulated
     * @returns {Dom} The old row as the placeholder to display a 2D board
     */
    const _oldRowDom = rowIndex => document.getElementById(_rowDomId(rowIndex));

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Number} rowIndex - The index of the row to be accumulated
     * @returns {Dom} The new row as the placeholder to display a 2D board
     * @todo Makes this function pure or at least nullipotent
     */
    const _newRowDom = rowIndex => {
        const rowDom = document.createElement("div");
        rowDom.id = _rowDomId(rowIndex);
        FV_RENDER_DOMS.callFn(BOARD, "appendChild", [rowDom]);
        return rowDom;
    }; // _newRowDom

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Number} rowIndex - The index of the row to be accumulated
     * @returns {String} The requested row dom id
     */
    const _rowDomId = rowIndex => {
        // It need not be a param as it doesn't matter in integration testing
        return _ROW_DOM_ID_PRE + rowIndex;
        //
    }; // _rowDomId

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Number} rowIndex - The index of the row to be accumulated
     * @param {Dom} rowDom - The dom containing squares to display a 2D board
     * @param {Array[FVRenderSq]} row - The row containing squares
     * @param {} element - The placeholder argument
     * @param {Number} colIndex - The index of the column to be accumulated
     * @returns {Array[FVRenderSq]} The requested list of squares
     */
    const _accumSq = (rowIndex, rowDom, row, element, colIndex) => {
        return row.concat([_sq(rowDom, rowIndex, colIndex)]);
    }; // _accumSq

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Dom} rowDom - The dom containing squares to display a 2D board
     * @param {Number} rowIndex - The index of the row to be accumulated
     * @param {Number} colIndex - The index of the column to be accumulated
     * @returns {FVRenderSq} The requested square
     */
    const _sq = (rowDom, rowIndex, colIndex) => {
        const i = _sqIndex(rowIndex, colIndex);
        return FVRenderSq(rowDom, _onclick(i), i,
                FV_RENDER_SQ_PARAMS.sqContent(rowIndex, colIndex));
    }; // _sq

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Number} rowIndex - The index of the row to be accumulated
     * @param {Number} colIndex - The index of the column to be accumulated
     * @returns {Number} The requested 1D index of the square
     */
    const _sqIndex = (rowIndex, colIndex) => rowIndex * BOARD_W + colIndex;

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Number} i - The 1D index of the square
     */
    const _onclick = i => () => {
        // Binding ONCLICK directly would miss its context
        ONCLICK(i, _moveNo());
        //
    }; // _onclick

    /**
     * Potential Hotspot/Nullipotent
     * @author DoubleX @since v1.0 @version v1.0
     * @returns {Number} The requested move number
     */
    const _moveNo = () => {
        // The square to be updated isn't filled yet upon the on click event
        return _SQS.filter(_isFilled).length + 1 - TOMEK_NO - BLOCK_NO;
        //
    }; // _moveNo

    /**
     * Potential Hotspot/Nullipotent
     * @author DoubleX @since v1.0 @version v1.0
     * @param {FVRenderSq} sq - The square to be checked
     * @returns {Boolean} The check result
     */
    const _isFilled = sq => sq.isFilled();

    const _SQS = Array(BOARD_H).fill("").reduce(_accumRow, []);

    return _SQS;

}; // FVRenderSqs