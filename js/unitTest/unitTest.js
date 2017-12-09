/**
 * Hotspot/No-op
 * @author DoubleX @interface @since v1.0 @version v1.0
 */
const UnitTest = () => {

    "use strict";

    const _CFGS = {
        boardW: 3,
        boardH: 3,
        players: ["X", "O"],
        tomeks: [],
        blocks: []
    };
    const _BOARD_W = _CFGS.boardW, _BOARD_H = _CFGS.boardH;
    const _TOMEKS = _CFGS.tomeks, _BLOCKS = _CFGS.blocks;
    const _SQS_NO = _BOARD_W * _BOARD_H, _PLAYERS = _CFGS.players;
    const _FM_IS_SPECIAL_SQ =
            FMIsSpecialSq.bind(FMIsSpecialSq, _BOARD_W, _BOARD_H);
    const _FM_IS_TOMEK = _FM_IS_SPECIAL_SQ.bind(FMIsSpecialSq, _TOMEKS);
    const _FM_IS_BLOCK = _FM_IS_SPECIAL_SQ.bind(FMIsSpecialSq, _BLOCKS);
    const _WINNING_LS =
            FMWinningLs(_BOARD_W, _BOARD_H, _FM_IS_TOMEK, _FM_IS_BLOCK);
    const _FM_IS_DRAW = FMIsDraw.bind(FMIsDraw, _WINNING_LS, _FM_IS_TOMEK);
    const _FM_PLAYER = FMPlayer.bind(FMPlayer, _PLAYERS, _PLAYERS.length);
    const _FM_RENDER_CMDS = FMRenderCmds(_FM_PLAYER);
    const _FM_SQS = FMSqs(_FM_PLAYER);
    const _FM_WINNER = FMWinner.bind(FMWinner, _WINNING_LS, _FM_IS_TOMEK);
    const _OM_STATES = new OMStates(
            _SQS_NO, _FM_IS_DRAW, _FM_RENDER_CMDS, _FM_SQS, _FM_WINNER);

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestAll = () => {
        console.info("UnitTest _unitTestAll");
        UnitTestFM(_FM_IS_SPECIAL_SQ, _WINNING_LS, _FM_IS_DRAW, _FM_PLAYER,
                _FM_RENDER_CMDS, _FM_SQS, _FM_WINNER, _showUnitTestBoolMsg,
                _showUnitTestMsg);
        UnitTestFV(_BOARD_W, _BOARD_H, _SQS_NO, _TOMEKS, _BLOCKS,
                _showUnitTestMsg, _showUnitTestBoolMsg);
        UnitTestOMStates(_OM_STATES, _showUnitTestMsg);
    }; // _unitTestAll

    /**
     * Hotspot/No-op
     * @author DoubleX @since v1.0 @version v1.0
     * @param {String} tag - The test case identifier
     * @param {} result - The actual test result
     * @param {} expected - The expected test result
     * @param {Boolean} isExpected - The check result
     */
    const _showUnitTestMsg = (tag, result, expected, isExpected) => {
        _showUnitTestBoolMsg(tag, result, isExpected);
        console.info("expected: " + expected);
    }; // _showUnitTestMsg

    /**
     * Hotspot/No-op
     * @author DoubleX @since v1.0 @version v1.0
     * @param {String} tag - The test case identifier
     * @param {} result - The actual test result
     * @param {Boolean} isExpected - The check result
     */
    const _showUnitTestBoolMsg = (tag, result, isExpected) => {
        console.info(tag + ": " + result);
        console.info((isExpected ? "Passed" : "Failed") + " " + tag + "!");
        if (isExpected) return;
        console.warn("The stacktrace leading to this failed test:");
        console.trace();
    }; // _showUnitTestBoolMsg

    console.info("UnitTest Pre");
    // Duplicate the whole process to prove that the whole app's idempotent
    _unitTestAll();
    _unitTestAll();
    //
    console.info("UnitTest Post");

}; // UnitTest