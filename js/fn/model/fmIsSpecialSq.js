/**
 * Potential Hotspot/Pure Function
 * @author DoubleX @interface @since v1.0 @version v1.0
 * @param {Number} BOARD_W - The board width
 * @param {Number} BOARD_H - The board height
 * @param {Array[Object[Number]]} SPECIAL_SQS - The list of special squares
 * @param {Number} I - The 1D index of the square to be checked
 * @returns {Boolean} The check result
 */
const FMIsSpecialSq = (BOARD_W, BOARD_H, SPECIAL_SQS, I) => {

    "use strict";

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Object[Number]} sq - The row and column number pair
     * @returns {Boolean} The check result
     */
    const _isSpecial = sq => _isSameRowNo(sq.rowNo) && _isSameColNo(sq.colNo);

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Number} rowNo - The row number to be checked
     * @returns {Boolean} The check result
     */
    const _isSameRowNo = rowNo => rowNo === Math.floor(I / BOARD_H) + 1;

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Number} colNo - The column number to be checked
     * @returns {Boolean} The check result
     */
    const _isSameColNo = colNo => colNo === I % BOARD_W + 1;

    return SPECIAL_SQS.some(_isSpecial);

}; // FMIsSpecialSq