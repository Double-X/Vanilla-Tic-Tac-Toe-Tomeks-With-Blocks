/**
 * Potential Hotspot/Pure Function
 * @author DoubleX @interface @since v1.0 @version v1.0
 * @param {Function(Number) -> String} FM_PLAYER - Returns the player of the
 *                                                 passed move number
 * @returns {Object[Function]} The requested API mapping
 * @todo Removes control coupling while preserving command encapsulation
 */
const FMRenderCmds = FM_PLAYER => {

    "use strict";

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @interface @since v1.0 @version v1.0
     * @param {Boolean} hasWinner - Whether there's a winner
     * @param {Number} i - The 1D index of the square to be rendered
     * @param {Number} moveNo - The move number during the rendering
     * @param {Array[Number]} winningSqs - The 1D list of winning square indices
     * @returns {Object} The requested rendering commands
     * @todo Removes control coupling while preserving command encapsulation
     */
    const updateSqBoardCmds = (hasWinner, i, moveNo, winningSqs) => {
        if (!hasWinner) return _sqCmd(i, moveNo);
        return Object.assign({}, _sqCmd(i, moveNo), _winningSqsCmd(winningSqs));
    }; // _updateSqBoardCmds

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @interface @since v1.0 @version v1.0
     * @param {Number} i - The 1D index of the square to be rendered
     * @param {Number} moveNo - The move number during the rendering
     * @param {Boolean} isDraw - Whether the game's a draw
     * @param {Boolean} hasWinner - Whether there's a winner
     * @param {String} winner - The winner to be rendered
     * @returns {Object} The requested rendering commands
     * @todo Removes control coupling while preserving command encapsulation
     */
    const updateSqInfoCmds = (i, moveNo, isDraw, hasWinner, winner) => {
        // It happens to include goToMoveInfoCmds
        return Object.assign({}, goToMoveInfoCmds(i, moveNo, isDraw, hasWinner,
                winner), _delFuturesCmd(moveNo));
        //
    }; // updateSqInfoCmds

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @interface @since v1.0 @version v1.0
     * @param {Boolean} hasWinner - Whether there's a winner
     * @param {Array[String]} curSqs - The current 1D list of square states
     * @param {Array[Number]} winningSqs - The 1D list of winning square indices
     * @returns {Object} The requested rendering commands
     * @todo Removes control coupling while preserving command encapsulation
     */
    const goToMoveBoardCmds = (hasWinner, curSqs, winningSqs) => {
        if (!hasWinner) return _sqsCmd(curSqs);
        return Object.assign({}, _sqsCmd(curSqs), _winningSqsCmd(winningSqs));
    }; // goToMoveBoardCmds

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @interface @since v1.0 @version v1.0
     * @param {Number} i - The 1D index of the square to be rendered
     * @param {Number} moveNo - The move number during the rendering
     * @param {Boolean} isDraw - Whether the game's a draw
     * @param {Boolean} hasWinner - Whether there's a winner
     * @param {String} winner - The winner to be rendered
     * @returns {Object} The requested rendering commands
     * @todo Removes control coupling while preserving command encapsulation
     */
    const goToMoveInfoCmds = (i, moveNo, isDraw, hasWinner, winner) => {
        return Object.assign({}, _moveInfoCmd(i, moveNo),
                _goToMoveInfoCmd(isDraw, hasWinner, winner, moveNo));
    }; // goToMoveInfoCmds

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @interface @since v1.0 @version v1.0
     * @returns {Object} The requested rendering commands
     */
    const clearHistBoardCmds = () => { return { isClear: true }; };

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @interface @since v1.0 @version v1.0
     * @param {Boolean} isDraw - Whether the game's a draw
     * @returns {Object} The requested rendering commands
     * @todo Removes control coupling while preserving command encapsulation
     */
    const clearHistInfoCmds = (isDraw) => {
        return isDraw ? Object.assign({}, _clearHistInfoCmds(), _isDrawCmd()) :
                _clearHistInfoCmds();
    }; // clearHistInfoCmds

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Number} i - The 1D index of the square to be rendered
     * @param {Number} moveNo - The move number during the rendering
     * @returns {Object} The requested rendering command
     */
    const _sqCmd = (i, moveNo) => {
        // i itself isn't a command so it's not extracted
        return { sq: Object.assign({}, { i }, _playerCmd(moveNo - 1)) };
        //
    }; // _sqCmd

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Number} moveNo - The move number during the rendering
     * @returns {Object} The requested rendering command
     */
    const _delFuturesCmd = moveNo => { return { delFutures: moveNo }; };

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Array[String]} curSqs - The current 1D list of square states
     * @returns {Object} The requested rendering command
     */
    const _sqsCmd = curSqs => { return { sqs: curSqs }; };

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Boolean} isDraw - Whether the game's a draw
     * @param {Boolean} hasWinner - Whether there's a winner
     * @param {String} winner - The winner to be rendered
     * @param {Number} moveNo - The move number during the rendering
     * @returns {Object} The requested rendering command
     * @todo Removes control coupling while preserving command encapsulation
     */
    const _goToMoveInfoCmd = (isDraw, hasWinner, winner, moveNo) => {
        if (isDraw) return _isDrawCmd();
        return hasWinner ? _winnerCmd(winner) : _playerCmd(moveNo);
    }; // _goToMoveInfoCmd

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Array[Number]} winningSqs - The 1D list of winning square indices
     * @returns {Object} The requested rendering command
     */
    const _winningSqsCmd = winningSqs => { return { winningSqs }; };

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Number} i - The 1D index of the square to be rendered
     * @param {Number} moveNo - The move number during the rendering
     * @returns {Object} The requested rendering command
     */
    const _moveInfoCmd = (i, moveNo) => { return { moveInfo: { i, moveNo } }; };

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @since v1.0 @version v1.0
     * @param {String} winner - The winner to be rendered
     * @returns {Object} The requested rendering command
     * @todo Removes control coupling while preserving command encapsulation
     */
    const _winnerCmd = winner => { return { winner }; };

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @since v1.0 @version v1.0
     * @returns {Object} The requested rendering commands
     * @todo Removes control coupling while preserving command encapsulation
     */
    const _clearHistInfoCmds = () => {
        // It happens to include clearHistBoardCmds
        return Object.assign({}, clearHistBoardCmds(), _playerCmd(0));
        //
    }; // _clearHistInfoCmds

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Number} moveNo - The move number during the rendering
     * @returns {Object} The requested rendering command
     */
    const _playerCmd = moveNo => { return { player: FM_PLAYER(moveNo) }; };

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @since v1.0 @version v1.0
     * @returns {Object} The requested rendering command
     */
    const _isDrawCmd = () => { return { isDraw: true }; };

    return {
        updateSqBoardCmds,
        updateSqInfoCmds,
        goToMoveBoardCmds,
        goToMoveInfoCmds,
        clearHistBoardCmds,
        clearHistInfoCmds
    };

}; // FMRenderCmds