/**
 * Potential Hotspot/Idempotent
 * @author DoubleX @interface @since v1.0 @version v1.0
 */
class OCGame {

    /**
     * Idempotent
     * @author DoubleX @constructor @since v1.0 @version v1.0
     * @param {OMStates} omStates - Encapsulates all business logic of the app
     * @param {Function(Object, FVRenderSq)} FVRenderSqs - Returns the 1D list
     *                                                     of sqaures
     * @param {Function(Number)} FVRenderSq - Returns a square
     * @param {FVRenderBoard} FVRenderBoard - Renders the board UI
     * @param {FVRenderInfo} FVRenderInfo - Renders the info UI
     */
    constructor(
            omStates, FVRenderBoard, FVRenderInfo, FVRenderSqs, FVRenderSq) {
        this._initReadOnlys(
                omStates, FVRenderBoard, FVRenderInfo, FVRenderSqs, FVRenderSq);
        this._bindFns();
    }; // constructor

    /**
     * Idempotent
     * @author DoubleX @since v1.0 @version v1.0
     * @param {OMStates} omStates - Encapsulates all business logic of the app
     * @param {FVRenderBoard} FVRenderBoard - Returns the board UI
     * @param {FVRenderInfo} FVRenderInfo - Returns the info UI
     * @param {Function(Object, FVRenderSq)} FVRenderSqs - Returns the 1D list
     *                                                     of sqaures
     * @param {Function(Number)} FVRenderSq - Returns a square
     */
    _initReadOnlys(
            omStates, FVRenderBoard, FVRenderInfo, FVRenderSqs, FVRenderSq) {
        this._FV_RENDER_BOARD = FVRenderBoard(
                FVRenderSqs(FVRenderSq, this.onUpdateSq.bind(this)));
        this._FV_RENDER_INFO = FVRenderInfo(
                this.onGoToMove.bind(this), this.onClearHist.bind(this));
        this._OM_STATES = omStates;
    }; // _initReadOnlys

    /**
     * Idempotent
     * @author DoubleX @since v1.0 @version v1.0
     */
    _bindFns() { this.render = this.render.bind(this); };

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @interface @since v1.0 @version v1.0
     * @param {Number} i - The index of the specified square
     * @param {Number} moveNo - The number of moves including this update
     */
    onUpdateSq(i, moveNo) {
        this._OM_STATES.onUpdateSq(i, moveNo, this.render);
    }; // onUpdateSq

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @interface @since v1.0 @version v1.0
     * @param {Number} i - The index of the specified square
     * @param {Number} moveNo - The move number to go to
     */
    onGoToMove(i, moveNo) {
        this._OM_STATES.onGoToMove(i, moveNo, this.render);
    }; // onGoToMove

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @interface @since v1.0 @version v1.0
     */
    onClearHist() { this._OM_STATES.onClearHist(this.render); };

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @interface @since v1.0 @version v1.0
     * @param {Object} boardCmds - The list of commands to be run by Board
     * @param {Object} infoCmds - The list of commands to be run by Info
     */
    render(boardCmds, infoCmds) {
        this._FV_RENDER_BOARD(boardCmds);
        this._FV_RENDER_INFO(infoCmds);
    }; // render

}; // OCGame