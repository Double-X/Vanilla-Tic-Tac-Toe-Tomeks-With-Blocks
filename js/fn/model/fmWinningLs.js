/**
 * Potential Hotspot/Pure Function
 * @author DoubleX @interface @since v1.0 @version v1.0
 * @param {Number} BOARD_W - The board width
 * @param {Number} BOARD_H - The board height
 * @param {Function(Number) -> Boolean} FM_IS_TOMEK - Checks whether the passed
 *                                                    1D index's a tomek
 * @param {Function(Number) -> Boolean} FM_IS_BLOCK - Checks whether the passed
 *                                                    1D index's a block
 * @returns {Array[Array[Number]]} The requested list of winning lines
 */
const FMWinningLs = (BOARD_W, BOARD_H, FM_IS_TOMEK, FM_IS_BLOCK) => {

    "use strict";

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @since v1.0 @version v1.0
     * @returns {Array[Array[Number]]} The requested list of winning rows
     */
    const _winningRows = () => _winningLs(BOARD_H, _winningRow);

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @since v1.0 @version v1.0
     * @param {} element - The placeholder argument
     * @param {Number} i - The winning row index
     * @returns {Array[Number]} The requested winning row
     */
    const _winningRow = (element, i) => _winningL(BOARD_W, _flatRowIndex, i);

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Number} index - The winning row index
     * @param {} element - The placeholder argument
     * @param {Number} i - The winning row index
     * @returns {Number} The requested 1D winning square index
     */
    const _flatRowIndex = (index, element, i) => index * BOARD_W + i;

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @since v1.0 @version v1.0
     * @returns {Array[Array[Number]]} The requested list of winning rows
     */
    const _winningCols = () => _winningLs(BOARD_W, _winningCol);

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @since v1.0 @version v1.0
     * @param {} element - The placeholder argument
     * @param {Number} i - The winning row index
     * @returns {Array[Number]} The requested winning column
     */
    const _winningCol = (element, i) => _winningL(BOARD_H, _flatColIndex, i);

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Number} index - The winning row index
     * @param {} element - The placeholder argument
     * @param {Number} i - The winning row index
     * @returns {Number} The requested 1D winning square index
     */
    const _flatColIndex = (index, element, i) => index + BOARD_W * i;

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @since v1.0 @version v1.0
     * @returns {Array[Array[Number]]} The requested list of winning diagonals
     */
    const _winningDiags = () => _isSqBoard() ? _winningLs(2, _winningDiag) : [];

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @since v1.0 @version v1.0
     * @returns {Boolean} The check result
     */
    const _isSqBoard = () => BOARD_W === BOARD_H;

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @since v1.0 @version v1.0
     * @param {} element - The placeholder argument
     * @param {Number} i - The winning row index
     * @returns {Array[Number]} The requested winning diagonal
     */
    const _winningDiag = (element, i) => _winningL(BOARD_W, _flatDiagIndex, i);

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Number} index - The winning row index
     * @param {} element - The placeholder argument
     * @param {Number} i - The winning row index
     * @returns {Number} The requested 1D winning square index
     */
    const _flatDiagIndex = (index, element, i) => {
        return (BOARD_W - 1) * index + i * (1 - 2 * index) + BOARD_W * i;
    }; // _flatDiagIndex

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Number} lNo - The number of winning lines
     * @param {Function() ->Array[Number]} lFn - Returns the winning line
     * @returns {Number} The requested list of winning lines
     */
    const _winningLs = (lNo, lFn) => Array(lNo).fill(-1).map(lFn);

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Number} lNo - The number of winning lines
     * @param {Function() ->Array[Number]} lFn - Returns the winning line
     * @param {Number} i - The index of the winning line
     * @returns {Number} The requested winning line
     */
    const _winningL = (lNo, lFn, i) => {
        return Array(lNo).fill(-1).map(lFn.bind(FMWinningLs, i));
    }; // _winningL

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Array[Number]} winningL - The winning line to be checked
     * @returns {Boolean} The check result
     */
    const _hasNoBlocks = winningL => !winningL.some(FM_IS_BLOCK);

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Array[Number]} winningL - The winning line to be checked
     * @returns {Boolean} The check result
     */
    const _hasNonTomeks = winningL => !winningL.every(FM_IS_TOMEK);

    return _winningRows().concat(_winningCols()).concat(_winningDiags()).filter(
            _hasNoBlocks).filter(_hasNonTomeks);

}; // FMWinningLs