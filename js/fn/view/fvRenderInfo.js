/**
 * Potential Hotspot/Idempotent
 * @author DoubleX @interface @since v1.0 @version v1.0
 * @param {Dom} BTN_CLEAR_HIST - The button for clearing the histories
 * @param {Dom} BTN_TOGGLE_MOVE_SORT_ORD - The button for reversing the moves
 * @param {Dom} TXT_CUR_STAT - The text for displaying the current statuses
 * @param {FVRenderDoms} FV_RENDER_DOMS - The seam for actually rendering doms
 * @param {FVRenderMoves} FVRenderMoves - Renders the list of moves made
 * @param {FVRenderInfoParams} FV_RENDER_INFO_PARAMS - The seam for returning
 *                                                      display contents
 * @param {Function(Number, Number)} ON_GO_TO_MOVE - Dispatches the go to move
 *                                                    event
 * @param {Function()} ON_CLEAR_HIST - Dispatches the clear histories event
 * @returns {Function(Object)} The requested function
 */
const FVRenderInfo = (BTN_CLEAR_HIST, BTN_TOGGLE_MOVE_SORT_ORD, TXT_CUR_STAT,
        FV_RENDER_DOMS, FVRenderMoves, FV_RENDER_INFO_PARAMS, ON_GO_TO_MOVE,
        ON_CLEAR_HIST) => {

    "use strict";

    const _FV_RENDER_MOVES = FVRenderMoves(ON_GO_TO_MOVE);

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @interface @since v1.0 @version v1.0
     * @param {Object} cmds - The rendering commands
     */
    const render = cmds => {
        Object.keys(cmds).forEach(_render.bind(FVRenderInfo, cmds));
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
    const _clear = () => {
        _FV_RENDER_MOVES.clear();
        _setBtnDisabled(true);
    }; // _clear

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _renderIsDraw = () => {
        _renderCurStat(FV_RENDER_INFO_PARAMS.drawGameTxt());
    }; // _renderIsDraw

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Object[Number, Number]} info - The rendering command
     */
    const _addMove = info => {
        _setBtnDisabled(false);
        _FV_RENDER_MOVES.add(info);
    }; // _addMove

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Boolean} isDisabled - Whether the button should be disabled
     */
    const _setBtnDisabled = isDisabled => {
        FV_RENDER_DOMS.setProp(BTN_CLEAR_HIST, "disabled", isDisabled);
        FV_RENDER_DOMS.setProp(
                BTN_TOGGLE_MOVE_SORT_ORD, "disabled", isDisabled);
    }; // _setBtnDisabled

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @since v1.0 @version v1.0
     * @param {String} player - The player to be rendered
     */
    const _renderPlayer = player => {
        _renderCurStat(FV_RENDER_INFO_PARAMS.nextPlayerTxt(player));
    }; // _renderPlayer

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @since v1.0 @version v1.0
     * @param {String} winner - The winner to be rendered
     */
    const _renderWinner = winner => {
        _renderCurStat(FV_RENDER_INFO_PARAMS.winnerTxt(winner));
    }; // _renderWinner

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @since v1.0 @version v1.0
     * @param {String} txt - The current status text to be rendered
     */
    const _renderCurStat = txt => {
        FV_RENDER_DOMS.setProp(TXT_CUR_STAT, "innerHTML", txt);
    }; // _renderCurStat

    const _CMDS = {
        delFutures: _FV_RENDER_MOVES.delFutures,
        isClear: _clear,
        isDraw: _renderIsDraw,
        moveInfo: _addMove,
        player: _renderPlayer,
        winner: _renderWinner
    };

    // They need not use FVRenderDoms when no doms are rendered immediately
    BTN_CLEAR_HIST.onclick = ON_CLEAR_HIST;
    BTN_TOGGLE_MOVE_SORT_ORD.onclick = _FV_RENDER_MOVES.toggleOrd;
    //

    return render;

}; // FVRenderInfo