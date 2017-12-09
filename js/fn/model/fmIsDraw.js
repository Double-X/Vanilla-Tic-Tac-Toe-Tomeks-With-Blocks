/**
 * Potential Hotspot/Pure Function
 * @author DoubleX @interface @since v1.0 @version v1.0
 * @param {Array[Array[Number]]} WINNING_LS - The list of winning lines
 * @param {Function(Number) -> Boolean} FM_IS_TOMEK - Checks whether the passed
 *                                                    1D index's a tomek
 * @param {Array[String]} SQS - The 1D list of the square states
 * @returns {Boolean} The check result
 */
const FMIsDraw = (WINNING_LS, FM_IS_TOMEK, SQS) => {

    "use strict";

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Array[Number]} winningL - The 1D list of winning square indices
     * @returns {Boolean} The check result
     */
    const _hasBothSides = winningL => {
        const filledSq = _filledSq(winningL);
        return filledSq && winningL.some(_isDiffSide.bind(FMIsDraw, filledSq));
    }; // _hasBothSides

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Array[Number]} winningL - The 1D list of winning square indices
     * @returns {String} The 1st filled square on the passed winning line
     */
    const _filledSq = winningL => SQS[winningL.find(_isFilled)];

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
     * @param {String} filledSq - A filled square as a side to be checked
     * @param {Number} i - The 1D list index of the square to be checked
     * @returns {Boolean} The check result
     */
    const _isDiffSide = (filledSq, i) => {
        const sq = SQS[i];
        return sq && sq !== filledSq && !FM_IS_TOMEK(i);
    }; // _isDiffSide

    return WINNING_LS.every(_hasBothSides);

}; // FMIsDraw