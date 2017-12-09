/**
 * No-op
 * @author DoubleX @interface @since v1.0 @version v1.0
 * @param {FMRenderCmds} FM_RENDER_CMDS - Returns the rendering commands
 * @param {Function(String, , , Boolean)} SHOW_UNIT_TEST_MSG - Shows the unit
 *                                                             test results
 */
const UnitTestFMRenderCmds = (FM_RENDER_CMDS, SHOW_UNIT_TEST_MSG) => {

    "use strict";

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestAll = () => {
        console.info("UnitTestFMRenderCmds _unitTestAll");
        // Duplicate the tests to prove that those functions are indeed pure
        _unitTestUpdateSqBoardCmds();
        _unitTestUpdateSqBoardCmds();
        _unitTestUpdateSqInfoCmds();
        _unitTestUpdateSqInfoCmds();
        _unitTestGoToMoveBoardCmds();
        _unitTestGoToMoveBoardCmds();
        _unitTestGoToMoveInfoCmds();
        _unitTestGoToMoveInfoCmds();
        _unitTestClearHistBoardCmds();
        _unitTestClearHistBoardCmds();
        _unitTestClearHistInfoCmds();
        _unitTestClearHistInfoCmds();
        //
    }; // _unitTestAll

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestUpdateSqBoardCmds = () => {
        console.info("UnitTestFMRenderCmds _unitTestUpdateSqBoardCmds");
        // Duplicate the tests to prove that those functions are indeed pure
        _unitTestUpdateSqBoardCmdsNorm();
        _unitTestUpdateSqBoardCmdsNorm();
        _unitTestUpdateSqBoardCmdsXWin();
        _unitTestUpdateSqBoardCmdsXWin();
        //
    }; // _unitTestUpdateSqBoardCmds

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestUpdateSqBoardCmdsNorm = () => {
        const updateSqBoardCmds =
                FM_RENDER_CMDS.updateSqBoardCmds(false, 4, 1, []);
        const sq = updateSqBoardCmds.sq;
        SHOW_UNIT_TEST_MSG("updateSqBoardCmds",
                JSON.stringify(updateSqBoardCmds),
                JSON.stringify({ sq: { i: 4, player: "X" } }),
                sq.i === 4 && sq.player === "X");
    }; // _unitTestUpdateSqBoardCmdsNorm

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestUpdateSqBoardCmdsXWin = () => {
        const updateSqBoardCmds =
                FM_RENDER_CMDS.updateSqBoardCmds(true, 6, 7, [0, 3, 6]);
        const sq = updateSqBoardCmds.sq;
        const winningSqs = updateSqBoardCmds.winningSqs;
        SHOW_UNIT_TEST_MSG("updateSqBoardCmds",
                JSON.stringify(updateSqBoardCmds),
                JSON.stringify({
                    sq: { i: 6, player: "X" },
                    winningSqs: [0, 3, 6]
                }),
                sq.i === 6 && sq.player === "X" && winningSqs.length === 3 &&
                [0, 3, 6].every(i => winningSqs.includes(i)));
    }; // _unitTestUpdateSqBoardCmdsXWin

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestUpdateSqInfoCmds = () => {
        console.info("UnitTestFMRenderCmds _unitTestUpdateSqInfoCmds");
        // Duplicate the tests to prove that those functions are indeed pure
        _unitTestUpdateSqInfoCmdsNorm();
        _unitTestUpdateSqInfoCmdsNorm();
        _unitTestUpdateSqInfoCmdsDraw();
        _unitTestUpdateSqInfoCmdsDraw();
        _unitTestUpdateSqInfoCmdsXWin();
        _unitTestUpdateSqInfoCmdsXWin();
        //
    }; // _unitTestUpdateSqInfoCmds

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestUpdateSqInfoCmdsNorm = () => {
        const updateSqInfoCmds =
                FM_RENDER_CMDS.updateSqInfoCmds(4, 1, false, false, "");
        const moveInfo = updateSqInfoCmds.moveInfo;
        SHOW_UNIT_TEST_MSG("updateSqInfoCmds",
                JSON.stringify(updateSqInfoCmds),
                JSON.stringify({
                    moveInfo: { i: 4, moveNo: 1 },
                    player: "O",
                    delFutures: 1
                }),
                moveInfo.i === 4 && moveInfo.moveNo === 1 && updateSqInfoCmds.
                player === "O" && updateSqInfoCmds.delFutures === 1);
    }; // _unitTestUpdateSqInfoCmdsNorm

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestUpdateSqInfoCmdsDraw = () => {
        const updateSqInfoCmds =
                FM_RENDER_CMDS.updateSqInfoCmds(1, 8, true, false, "");
        const moveInfo = updateSqInfoCmds.moveInfo;
        SHOW_UNIT_TEST_MSG("updateSqInfoCmds",
                JSON.stringify(updateSqInfoCmds),
                JSON.stringify({
                    moveInfo: { i: 1, moveNo: 8 },
                    isDraw: true,
                    delFutures: 8
                }),
                moveInfo.i === 1 && moveInfo.moveNo === 8 && updateSqInfoCmds.
                isDraw && updateSqInfoCmds.delFutures === 8);
    }; // _unitTestUpdateSqInfoCmdsDraw

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestUpdateSqInfoCmdsXWin = () => {
        const updateSqInfoCmds =
                FM_RENDER_CMDS.updateSqInfoCmds(6, 7, false, true, "X");
        const moveInfo = updateSqInfoCmds.moveInfo;
        SHOW_UNIT_TEST_MSG("updateSqInfoCmds",
                JSON.stringify(updateSqInfoCmds),
                JSON.stringify({
                    moveInfo: { i: 6, moveNo: 7 },
                    winner: "X",
                    delFutures: 7
                }),
                moveInfo.i === 6 && moveInfo.moveNo === 7 && updateSqInfoCmds.
                winner === "X" && updateSqInfoCmds.delFutures === 7);
    }; // _unitTestUpdateSqInfoCmdsXWin

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestGoToMoveBoardCmds = () => {
        console.info("UnitTestFMRenderCmds _unitTestGoToMoveBoardCmds");
        // Duplicate the tests to prove that those functions are indeed pure
        _unitTestGoToMoveBoardCmdsNorm();
        _unitTestGoToMoveBoardCmdsNorm();
        _unitTestGoToMoveBoardCmdsXWin();
        _unitTestGoToMoveBoardCmdsXWin();
        //
    }; // _unitTestGoToMoveBoardCmds

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestGoToMoveBoardCmdsNorm = () => {
        const goToMoveBoardCmds = FM_RENDER_CMDS.goToMoveBoardCmds(
                false, ["", "", "", "", "X", "", "", "", ""], []);
        const sqs = goToMoveBoardCmds.sqs;
        SHOW_UNIT_TEST_MSG("goToMoveBoardCmds",
                JSON.stringify(goToMoveBoardCmds),
                JSON.stringify({ sqs: ["", "", "", "", "X", "", "", "", ""] }),
                sqs[4] === "X" &&
                [0, 1, 2, 3, 5, 6, 7, 8].every(i => sqs[i] === ""));
    }; // _unitTestGoToMoveBoardCmdsNorm

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestGoToMoveBoardCmdsXWin = () => {
        const goToMoveBoardCmds = FM_RENDER_CMDS.goToMoveBoardCmds(
                true, ["X", "O", "", "X", "X", "O", "X", "", "O"], [0, 3, 6]);
        const sqs = goToMoveBoardCmds.sqs;
        const winningSqs = goToMoveBoardCmds.winningSqs;
        SHOW_UNIT_TEST_MSG("goToMoveBoardCmds",
                JSON.stringify(goToMoveBoardCmds),
                JSON.stringify({
                    sqs: ["X", "O", "", "X", "X", "O", "X", "", "O"],
                    winningSqs: [0, 3, 6]
                }),
                [0, 3, 4, 6].every(i => sqs[i] === "X") &&
                [1, 5, 8].every(i => sqs[i] === "O") &&
                [2, 7].every(i => sqs[i] === "") && winningSqs.length === 3 &&
                [0, 3, 6].every(i => winningSqs.includes(i)));
    }; // _unitTestGoToMoveBoardCmdsXWin

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestGoToMoveInfoCmds = () => {
        console.info("UnitTestFMRenderCmds _unitTestGoToMoveInfoCmds");
        // Duplicate the tests to prove that those functions are indeed pure
        _unitTestGoToMoveInfoCmdsNorm();
        _unitTestGoToMoveInfoCmdsNorm();
        _unitTestGoToMoveInfoCmdsDraw();
        _unitTestGoToMoveInfoCmdsDraw();
        _unitTestGoToMoveInfoCmdsXWin();
        _unitTestGoToMoveInfoCmdsXWin();
        //
    }; // _unitTestGoToMoveInfoCmds

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestGoToMoveInfoCmdsNorm = () => {
        const goToMoveInfoCmds =
                FM_RENDER_CMDS.goToMoveInfoCmds(4, 1, false, false, "");
        const movInfo = goToMoveInfoCmds.moveInfo;
        SHOW_UNIT_TEST_MSG("goToMoveInfoCmds",
                JSON.stringify(goToMoveInfoCmds),
                JSON.stringify({ moveInfo: { i: 4, moveNo: 1 }, player: "O" }),
                movInfo.i === 4 && movInfo.moveNo === 1 &&
                goToMoveInfoCmds.player === "O");
    }; // _unitTestGoToMoveInfoCmdsNorm

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestGoToMoveInfoCmdsDraw = () => {
        const goToMoveInfoCmds =
                FM_RENDER_CMDS.goToMoveInfoCmds(1, 8, true, false, "");
        const movInfo = goToMoveInfoCmds.moveInfo;
        SHOW_UNIT_TEST_MSG("goToMoveInfoCmds",
                JSON.stringify(goToMoveInfoCmds),
                        JSON.stringify(goToMoveInfoCmds),
                        JSON.stringify({
                            moveInfo: { i: 1, moveNo: 8 },
                            isDraw: true
                        }),
                movInfo.i === 1 && movInfo.moveNo === 8 &&
                goToMoveInfoCmds.isDraw);
    }; // _unitTestGoToMoveInfoCmdsDraw

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestGoToMoveInfoCmdsXWin = () => {
        const goToMoveInfoCmds =
                FM_RENDER_CMDS.goToMoveInfoCmds(6, 7, false, true, "X");
        const movInfo = goToMoveInfoCmds.moveInfo;
        SHOW_UNIT_TEST_MSG("goToMoveInfoCmds",
                JSON.stringify(goToMoveInfoCmds),
                        JSON.stringify(goToMoveInfoCmds),
                        JSON.stringify({
                            moveInfo: { i: 6, moveNo: 7 },
                            winner: "X"
                        }),
                movInfo.i === 6 && movInfo.moveNo === 7 &&
                goToMoveInfoCmds.winner === "X");
    }; // _unitTestGoToMoveInfoCmdsXWin

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestClearHistBoardCmds = () => {
        console.info("UnitTestFMRenderCmds _unitTestClearHistBoardCmds");
        const clearHistBoardCmds = FM_RENDER_CMDS.clearHistBoardCmds();
        SHOW_UNIT_TEST_MSG("clearHistBoardCmds",
                JSON.stringify(clearHistBoardCmds),
                JSON.stringify({ isClear: true }),
                clearHistBoardCmds.isClear);
    }; // _unitTestClearHistBoardCmds

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestClearHistInfoCmds = () => {
        console.info("UnitTestFMRenderCmds _unitTestClearHistInfoCmds");
        // Duplicate the tests to prove that those functions are indeed pure
        _unitTestClearHistInfoCmdsNorm();
        _unitTestClearHistInfoCmdsNorm();
        _unitTestClearHistInfoCmdsDraw();
        _unitTestClearHistInfoCmdsDraw();
        //
    }; // _unitTestClearHistInfoCmds

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestClearHistInfoCmdsNorm = () => {
        const clearHistInfoCmds = FM_RENDER_CMDS.clearHistInfoCmds(false);
        SHOW_UNIT_TEST_MSG("clearHistInfoCmds",
                JSON.stringify(clearHistInfoCmds),
                JSON.stringify({ isClear: true, player: "X" }),
                clearHistInfoCmds.isClear && clearHistInfoCmds.player === "X");
    }; // _unitTestClearHistInfoCmdsNorm

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestClearHistInfoCmdsDraw = () => {
        const clearHistInfoCmds = FM_RENDER_CMDS.clearHistInfoCmds(true);
        SHOW_UNIT_TEST_MSG("clearHistInfoCmds",
                JSON.stringify(clearHistInfoCmds),
                JSON.stringify({ isClear: true, player: "X", isDraw: true }),
                clearHistInfoCmds.isClear && clearHistInfoCmds.player ===
                "X" && clearHistInfoCmds.isDraw);
    }; // _unitTestClearHistInfoCmdsDraw

    console.info("UnitTestFMRenderCmds Pre");
    // Duplicate the tests to prove that those functions are indeed pure
    _unitTestAll();
    _unitTestAll();
    //
    console.info("UnitTestFMRenderCmds Post");

}; // UnitTestFMRenderCmds