/**
 * Potential Hotspot/Idempotent
 * @author DoubleX @interface @since v1.0 @version v1.0
 * @param {Array[FVRenderSq]} SQS - The list of squares
 * @returns {Function(Object)} The requested function
 */
const FVRenderBoard = SQS => {

    "use strict";

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @interface @since v1.0 @version v1.0
     * @param {Object} cmds - The rendering commands
     */
    const render = cmds => {
        Object.keys(cmds).forEach(_render.bind(FVRenderBoard, cmds));
    }; // render

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Object} cmds - The rendering commands
     * @param {String} cmd - The rendering command name
     */
    const _render = (cmds, cmd) => { _CMDS[cmd](cmds[cmd]); };

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _clear = () => { SQS.forEach(_clearSq); };

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @since v1.0 @version v1.0
     * @param {FVRenderSq} sq - The square to be rendered
     */
    const _clearSq = sq => { sq.clear(); };

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Object[Number, String]} sqInfo - The square rendering commands
     */
    const _renderSq = sqInfo => { _renderSqInfo(sqInfo.player, sqInfo.i); };

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Array[String]} sqs - The 1D list of square states
     */
    const _renderSqs = sqs => { sqs.forEach(_renderSqInfo); };

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @since v1.0 @version v1.0
     * @param {String} player - The player owning the square to be rendered
     * @param {Number} i - The 1D index of the square to be rendered
     */
    const _renderSqInfo = (player, i) => { SQS[i].render(player); };

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Array[Number]} winningSqs - The 1D list of winning square
     *                                      indices
     */
    const _renderWinningSqs = winningSqs => {
        SQS.forEach(_renderWinningSq.bind(FVRenderBoard, winningSqs));
    }; // _renderWinningSqs

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Array[Number]} winningSqs - The 1D list of winning square
     *                                      indices
     * @param {FVRenderSq} sq - The square to be rendered
     * @param {Number} i - The 1D index of the square to be rendered
     */
    const _renderWinningSq = (winningSqs, sq, i) => {
        if (winningSqs.includes(i)) sq.mark();
    }; // _renderWinningSq

    const _CMDS = {
        isClear: _clear,
        sq: _renderSq,
        sqs: _renderSqs,
        winningSqs: _renderWinningSqs
    };

    return render;

}; // FVRenderBoard