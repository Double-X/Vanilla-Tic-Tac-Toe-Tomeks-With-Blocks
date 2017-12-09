/**
 * Potential Hotspot/Idempotent
 * @author DoubleX @interface @since v1.0 @version v1.0
 * @param {Object[Number, Number, Array[String], Array[Object[Number, Number]],
 *         Array[Object[Number, Number]]]} cfgs - The configuration values
 */
const CompositionRoot = cfgs => {

    "use strict";

    const _BOARD = document.getElementById("board");
    const _MOVES = document.getElementById("moves");
    const _BTN_CLEAR_HIST = document.getElementById("clearHist");
    const _BTN_TOGGLE_MOVE_SORT_ORD =
            document.getElementById("toggleMoveSortOrd");
    const _TXT_CUR_STAT = document.getElementById("curStat");
    const _PLAYERS = cfgs.players;
    const _BOARD_W = cfgs.boardW, _BOARD_H = cfgs.boardH;
    const _TOMEKS = cfgs.tomeks.slice(), _BLOCKS = cfgs.blocks.slice();
    // Not removing invalid special squares will lead to their wrong counts
    [_TOMEKS, _BLOCKS].forEach(specialSqs => {
        specialSqs.slice().forEach(specialSq => {
            const rowNo = specialSq.rowNo, colNo = specialSq.colNo;
            if (rowNo <= 0 || rowNo > _BOARD_H ||
                    colNo <= 0 || colNo > _BOARD_W) {
                specialSqs.splice(specialSqs.indexOf(specialSq), 1);
            }
        });
    });
    //
    const _FMIsSpecialSq =
            FMIsSpecialSq.bind(FMIsSpecialSq, _BOARD_W, _BOARD_H);
    const _FM_IS_TOMEK = _FMIsSpecialSq.bind(FMIsSpecialSq, _TOMEKS);
    const _FM_IS_BLOCK = _FMIsSpecialSq.bind(FMIsSpecialSq, _BLOCKS);
    const _WINNING_LS =
            FMWinningLs(_BOARD_W, _BOARD_H, _FM_IS_TOMEK, _FM_IS_BLOCK);
    const _FM_IS_DRAW = FMIsDraw.bind(FMIsDraw, _WINNING_LS, _FM_IS_TOMEK);
    const _FM_PLAYER = FMPlayer.bind(FMPlayer, _PLAYERS, _PLAYERS.length);
    const _FM_RENDER_CMDS = FMRenderCmds(_FM_PLAYER);
    const _FM_SQS = FMSqs(_FM_PLAYER);
    const _FM_WINNER = FMWinner.bind(FMWinner, _WINNING_LS, _FM_IS_TOMEK);
    const _FV_RENDER_DOMS = FVRenderDoms();
    const _FV_RENDER_MOVES_PARAMS = FVRenderMovesParams(_BOARD_W, _BOARD_H);
    const _FVRenderMoves = FVRenderMoves.bind(
            FVRenderMoves, _MOVES, _FV_RENDER_DOMS, _FV_RENDER_MOVES_PARAMS);
    const _FVRenderInfo = FVRenderInfo.bind(FVRenderInfo, _BTN_CLEAR_HIST,
            _BTN_TOGGLE_MOVE_SORT_ORD, _TXT_CUR_STAT, _FV_RENDER_DOMS,
            _FVRenderMoves, FVRenderInfoParams());
    const _FV_RENDER_SQ_PARAMS = FVRenderSqParams(_TOMEKS, _BLOCKS);
    const _FVRenderSq =
            FVRenderSq.bind(FVRenderSq, _FV_RENDER_DOMS, _FV_RENDER_SQ_PARAMS);
    const _FVRenderSqs = FVRenderSqs.bind(FVRenderSqs, _BOARD, _BOARD_W,
            _BOARD_H, _TOMEKS.length, _BLOCKS.length, _FV_RENDER_DOMS,
            _FV_RENDER_SQ_PARAMS);
    const _OM_STATES = new OMStates(_BOARD_W * _BOARD_H, _FM_IS_DRAW,
            _FM_RENDER_CMDS, _FM_SQS, _FM_WINNER);
    const _OC_GAME = new OCGame(_OM_STATES, FVRenderBoard, _FVRenderInfo,
            _FVRenderSqs, _FVRenderSq);

    document.getElementById("players").innerHTML = "Players: " + _PLAYERS;

    return _OC_GAME.onClearHist.bind(_OC_GAME);

}; // CompositionRoot