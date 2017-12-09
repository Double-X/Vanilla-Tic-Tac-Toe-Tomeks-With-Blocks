/**
 * Potential Hotspot/Pure Function
 * @author DoubleX @interface @since v1.0 @version v1.0
 * @param {Array[Array[Number]]} WINNING_LS - The list of winning lines
 * @param {Function(Number) -> Boolean} FM_IS_TOMEK - Checks whether the passed
 *                                                    1D index's a tomek
 * @param {Array[String]} SQS - The 1D list of the square states
 * @returns {Object[Array[Number], String]} The requested result mapping
 */
const FMWinner = (WINNING_LS, FM_IS_TOMEK, SQS) => {

    "use strict";

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @since v1.0 @version v1.0
     * @returns {Array[Number]} The requested 1D list of winning square indices
     */
    const _winningSqs = () => {
        // Removes potentially duplicate elements to reduce redundant rendering
        return _uniq(_winningLs().reduce(_flatten, []));
        //
    }; // _winningSqs

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @since v1.0 @version v1.0
     * @returns {String} The requested winner
     */
    const _winner = () => {
        // It's impossible to have more than 1 winners at the same time
        const winningLs = _winningLs();
        return winningLs.length > 0 ? _winningSq(winningLs[0]) : "";
        //
    }; // _winner

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Array} accumArr - The array accumulated all the original ones
     * @param {Array} arr - The array to be accumulated into a single one
     * @returns {Array} The requested single array
     */
    const _flatten = (accumArr, arr) => accumArr.concat(arr);

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @since v1.0 @version v1.0
     * @returns {Array} The list of effective winning lines
     */
    const _winningLs = () => {
        // It's possible to have more than 1 effective winning lines
        return WINNING_LS.filter(_isWinningL);
        //
    }; // _winningLs

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Array[Number]} winningL - The 1D list of winning square indices
     * @returns {Boolean} The check result
     */
    const _isWinningL = winningL => {
        const sq = _winningSq(winningL);
        return sq && winningL.every(_isSameSide.bind(FMWinner, sq));
    }; // _isWinningL

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Array[Number]} winningL - The 1D list of winning square indices
     * @returns {String} The requested winning square
     */
    const _winningSq = winningL => SQS[winningL.find(_isFilled)];

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Number} i - The 1D list index of the square to be checked
     * @returns {Boolean} The check result
     */
    const _isFilled = i => SQS[i];

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @since v1.0 @version v1.0
     * @param {String} sq - A square as a side to be checked
     * @param {Number} i - The 1D list index of the square to be checked
     * @returns {Boolean} The check result
     */
    const _isSameSide = (sq, i) => sq === SQS[i] || FM_IS_TOMEK(i);

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Array} arr - The array to have only unique elements
     * @returns {Array} The requested array with only unique elements
     */
    const _uniq = arr => arr.filter(_isUniq);

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @since v1.0 @version v1.0
     * @param {} element - An array elements
     * @param {Number} i - The index of the passed array element
     * @param {Array} arr - The array to have only unique elements
     * @returns {Boolean} The check result
     */
    const _isUniq = (element, i, arr) => arr.indexOf(element) === i;

    return { winningSqs: _winningSqs(), winner: _winner() };

}; // FMWinner