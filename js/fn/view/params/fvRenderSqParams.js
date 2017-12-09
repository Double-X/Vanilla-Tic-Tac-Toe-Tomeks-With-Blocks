/**
 * Potential Hotspot/Pure function
 * @author DoubleX @interface @since v1.0 @version v1.0
 * @param {Array[Object[Number, Number]]} TOMEKS - The list of tomek positions
 * @param {Array[Object[Number, Number]]} BLOCKS - The list of block positions
 * @returns {Object[Function]} The requested API mapping
 */
const FVRenderSqParams = (TOMEKS, BLOCKS) => {

    "use strict";

    const _TOMEK_CONTENT = "<i>T</i>", _BLOCK_CONTENT = "<u>B</u>";
    const _DOM_ID_PRE = "sq";

    /**
     * Potential Hotspot/Pure function
     * @author DoubleX @interface @since v1.0 @version v1.0
     * @param {Number} i - The 1D index of the square dom
     * @returns {String} The requested dom id
     */
    const domId = i => _DOM_ID_PRE + i;

    /**
     * Potential Hotspot/Pure function
     * @author DoubleX @interface @since v1.0 @version v1.0
     * @param {String} content - The square dom content
     * @returns {Boolean} The check result
     */
    const isBlock = content => content.includes(_BLOCK_CONTENT);

    /**
     * Potential Hotspot/Pure function
     * @author DoubleX @interface @since v1.0 @version v1.0
     * @param {String} content - The square dom content
     * @returns {Boolean} The check result
     */
    const isPlayerSq = content => !isBlock(content) && !isTomek(content);

    /**
     * Potential Hotspot/Pure function
     * @author DoubleX @interface @since v1.0 @version v1.0
     * @param {String} content - The square dom content
     * @returns {Boolean} The check result
     */
    const isTomek = content => content.includes(_TOMEK_CONTENT);

    /**
     * Potential Hotspot/Pure function
     * @author DoubleX @interface @since v1.0 @version v1.0
     * @param {Number} rowIndex - The row index of the square dom
     * @param {Number} colIndex - The column index of the square dom
     * @returns {String} The requested square content
     */
    const sqContent = (rowIndex, colIndex) => {
        if (_isSpecialSqs(rowIndex, colIndex, TOMEKS)) return _TOMEK_CONTENT;
        if (_isSpecialSqs(rowIndex, colIndex, BLOCKS)) return _BLOCK_CONTENT;
        return "";
    }; // _sqContent

    /**
     * Potential Hotspot/Pure function
     * @author DoubleX @interface @since v1.0 @version v1.0
     * @param {String} innerHTML - The original inner html
     * @returns {String} The requested inner html
     */
    const markedInnerHTML = innerHTML => "<mark>" + innerHTML + "</mark>";

    /**
     * Potential Hotspot/Pure function
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Number} rowIndex - The row index of the square dom
     * @param {Number} colIndex - The column index of the square dom
     * @param {Array[Object[Number, Number]]} specialSqs - The list of special
     *                                                      square positions
     * @returns {Boolean} The check result
     */
    const _isSpecialSqs = (rowIndex, colIndex, specialSqs) => {
        return specialSqs.some(
                _isSameSq.bind(FVRenderSqParams, rowIndex, colIndex));
    }; // _isSpecialSqs

    /**
     * Potential Hotspot/Pure function
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Number} rowIndex - The row index of the square dom
     * @param {Number} colIndex - The column index of the square dom
     * @param {Object[Number, Number]} sq - A special square position
     * @returns {Boolean} The check result
     */
    const _isSameSq = (rowIndex, colIndex, sq) => {
        return _isSamePos(sq.rowNo, rowIndex) && _isSamePos(sq.colNo, colIndex);
    }; // _isSameSq

    /**
     * Potential Hotspot/Pure function
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Number} coor - The coordinate number
     * @param {Number} i - The 1D index of the square dom
     * @returns {Boolean} The check result
     */
    const _isSamePos = (coor, i) => coor === i + 1;

    return { domId, isBlock, isPlayerSq, isTomek, sqContent, markedInnerHTML };

}; // FVRenderSqParams