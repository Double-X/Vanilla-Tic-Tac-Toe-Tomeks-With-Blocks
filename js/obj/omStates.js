/**
 * Potential Hotspot/Idempotent
 * @author DoubleX @interface @since v1.0 @version v1.0
 */
class OMStates {

    /**
     * Idempotent
     * @author DoubleX @constructor @since v1.0 @version v1.0
     * @param {Number} sqsNo - The number of squares in the board
     * @param {Function(Array[Number]) -> Boolean} FMIsDraw - Checks if the
     *                                                        game's a draw
     * @param {Object[Function]} FMRenderCmds - Returns the API mapping
     * @param {Object[Function]} FMSqs - Returns the API mapping
     * @param {Function(Array[Number]) -> Object[Array[Number], String]}
     *        FMWinner - Returns the list of winning lines with the winner
     */
    constructor(sqsNo, FMIsDraw, FMRenderCmds, FMSqs, FMWinner) {
        this._initReadOnlys(FMIsDraw, FMRenderCmds, FMSqs, FMWinner);
        this._initCaches(sqsNo);
    }; // constructor

    /**
     * Idempotent
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Function(Array[Number]) -> Boolean} FMIsDraw - Checks if the
     *                                                        game's a draw
     * @param {Object[Function]} FMRenderCmds - Returns the API mapping
     * @param {Object[Function]} FMSqs - Returns the API mapping
     * @param {Function(Array[Number]) -> Object[Array[Number], String]}
     *        FMWinner - Returns the list of winning lines with the winner
     */
    _initReadOnlys(FMIsDraw, FMRenderCmds, FMSqs, FMWinner) {
        this._FM_IS_DRAW = FMIsDraw, this._FM_RENDER_CMDS = FMRenderCmds;
        this._FM_SQS = FMSqs, this._FM_WINNER = FMWinner;
    }; // _initReadOnlys

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Number} sqsNo - The number of squares in the board
     */
    _initCaches(sqsNo) {
        this._hist = [Array(sqsNo).fill("")];
        this._isDraw = false, this._winner = ""; // Optional performance boosts
    }; // _initCaches

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @interface @since v1.0 @version v1.0
     * @param {Number} i - The index of the specified square
     * @param {Number} moveNo - The number of moves including this update
     * @param {Function(Object, Object)} callback - To be called upon success
     */
    onUpdateSq(i, moveNo, callback) {
        if(this._canUpdateSq(i, moveNo)) this._updateSq(i, moveNo, callback);
    }; // onUpdateSq

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @interface @since v1.0 @version v1.0
     * @param {Number} i - The index of the specified square
     * @param {Number} moveNo - The move number to go to
     * @param {Function(Object, Object)} callback - To be called upon success
     */
    onGoToMove(i, moveNo, callback) {
        const curSqs = this._FM_SQS.last(moveNo + 1, this._hist);
        const { winningSqs, winner } = this._winnerInfo(curSqs);
        this._updateGoToMoveCaches(curSqs, winner);
        this._runGoToMoveCallback(i, moveNo, callback, curSqs, winningSqs);
    }; // onGoToMove

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @interface @since v1.0 @version v1.0
     * @param {Function(Object, Object)} callback - To be called upon success
     */
    onClearHist(callback) {
        this._updateClearHistCaches();
        callback(this._FM_RENDER_CMDS.clearHistBoardCmds(),
                this._FM_RENDER_CMDS.clearHistInfoCmds(this._isDraw));
    }; // onClearHist

    /**
     * Potential Hotspot/Nullipotent
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Number} i - The index of the specified square
     * @param {Number} moveNo - The number of moves including this update
     * @returns {Boolean} The check result
     */
    _canUpdateSq(i, moveNo) {
        return !this._isDraw && !this._hasWinner() && this._isVoidSq(i, moveNo);
    }; // _canUpdateSq

    /**
     * Potential Hotspot/Nullipotent
     * @author DoubleX @since v1.0 @version v1.0
     * @returns {Boolean} The check result
     */
    _hasWinner() { return this._winner.length > 0; };

    /**
     * Potential Hotspot/Nullipotent
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Number} i - The index of the specified square
     * @param {Number} moveNo - The number of moves including this update
     * @returns {Boolean} The check result
     */
    _isVoidSq(i, moveNo) {
        return this._FM_SQS.last(moveNo, this._hist)[i].length <= 0;
    }; // _isVoidSq

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Number} i - The index of the specified square
     * @param {Number} moveNo - The number of moves including this update
     * @param {Function(Object, Object)} callback - To be called upon success
     */
    _updateSq(i, moveNo, callback) {
        const curSqs = this._FM_SQS.cur(i, moveNo, this._hist);
        const { winningSqs, winner } = this._winnerInfo(curSqs);
        this._updateSqCaches(moveNo, curSqs, winner);
        this._runUpdateSqCallback(i, moveNo, callback, winningSqs);
    }; // _updateSq

    /**
     * Potential Hotspot/Nullipotent
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Array[String]} curSqs - The current square contents
     * @returns {Object[Array, String]} The requested winner info
     */
    _winnerInfo(curSqs) {
        if (this._isDraw) return { winningSqs: [], winner: "" };
        return this._FM_WINNER(curSqs);
    }; // _winnerInfo

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Number} moveNo - The number of moves including this update
     * @param {Array[String]} curSqs - The current square contents
     * @param {String} winner - The player as the winner
     */
    _updateSqCaches(moveNo, curSqs, winner) {
        // They happen to be the same
        this._updateGoToMoveCaches(curSqs, winner);
        //
        this._updateHist(moveNo, curSqs);
    }; // _updateSqCaches

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Number} moveNo - The number of moves including this update
     * @param {Array[String]} curSqs - The current square contents
     */
    _updateHist(moveNo, curSqs) {
        // Ensures the future moves will be erased upon making a present one
        this._hist.length = moveNo, this._hist[moveNo] = curSqs;
        //
    }; // _updateHist

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Number} i - The index of the specified square
     * @param {Number} moveNo - The move number to go to
     * @param {Function(Object, Object)} callback - To be called upon success
     * @param {Array[Number]} winningSqs - The list of indices of winning
                                           squares
     */
    _runUpdateSqCallback(i, moveNo, callback, winningSqs) {
        const hasWinner = this._hasWinner();
        callback(this._FM_RENDER_CMDS.updateSqBoardCmds(
                hasWinner, i, moveNo, winningSqs),
                this._FM_RENDER_CMDS.updateSqInfoCmds(i, moveNo, this._isDraw,
                        hasWinner, this._winner));
    }; // _runUpdateSqCallback

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @interface @since v1.0 @version v1.0
     * @param {Array[String]} curSqs - The current square contents
     * @param {String} winner - The player as the winner
     */
    _updateGoToMoveCaches(curSqs, winner) {
        this._updateIsDraw(curSqs);
        this._updateWinner(winner);
    }; // _updateGoToMoveCaches

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @since v1.0 @version v1.0
     * @param {String} winner - The player as the winner
     */
    _updateWinner(winner) { if (!this._isDraw) this._winner = winner; };

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Number} i - The index of the specified square
     * @param {Number} moveNo - The move number to go to
     * @param {Function(Object, Object)} callback - To be called upon success
     * @param {Array[String]} curSqs - The current square contents
     * @param {Array[Number]} winningSqs - The list of indices of winning
                                           squares
     */
    _runGoToMoveCallback(i, moveNo, callback, curSqs, winningSqs) {
        const hasWinner = this._hasWinner();
        callback(this._FM_RENDER_CMDS.goToMoveBoardCmds(
                hasWinner, curSqs, winningSqs),
                this._FM_RENDER_CMDS.goToMoveInfoCmds(
                        i, moveNo, this._isDraw, hasWinner, this._winner));
    }; // _runGoToMoveCallback

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @since v1.0 @version v1.0
     */
    _updateClearHistCaches() {
        const initSqs = this._hist[0];
        // The number of squares' constant no matter what the histories are
        this._initCaches(initSqs.length);
        //
        this._updateIsDraw(initSqs);
    }; // _updateClearHistCaches

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Array[String]} curSqs - The current square contents
     */
    _updateIsDraw(curSqs) {
        if (!this._hasWinner()) this._isDraw = this._FM_IS_DRAW(curSqs);
    }; // _updateIsDraw

}; // OMStates