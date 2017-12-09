/**
 * Hotspot/No-op
 * @author DoubleX @interface @since v1.0 @version v1.0
 * @param {OMStates} OM_STATES - The unit to be tested
 * @param {Function(String, , , Boolean)} SHOW_UNIT_TEST_MSG - Shows the unit
 *                                                             test results
 */
const UnitTestOMStates = (OM_STATES, SHOW_UNIT_TEST_MSG) => {

    "use strict";

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestAll = () => {
        console.info("UnitTestOMStates _unitTestAll");
        // Tests shouldn't be duplicated here as the test sequences matter
        _unitTestDraw();
        _unitTestOnGoToMoveDraw();
        _unitTestXWin();
        _unitTestOnGoToMoveXWin();
        _unitTestOnClearHist();
        //
    }; // _unitTestAll

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestDraw = () => {
        console.info("UnitTestOMStates _unitTestDraw");
        // Duplicate each API call to prove that they're all idempotent
        OM_STATES.onUpdateSq(4, 1, _unitTestOnUpdateSqNormCallback(
                "onUpdateSqCallback1", 4, 1, "X", "O"));
        OM_STATES.onUpdateSq(4, 1, _unitTestOnUpdateSqNormCallback(
                "onUpdateSqCallback1", 4, 1, "X", "O"));
        OM_STATES.onUpdateSq(0, 2, _unitTestOnUpdateSqNormCallback(
                "onUpdateSqCallback2", 0, 2, "O", "X"));
        OM_STATES.onUpdateSq(0, 2, _unitTestOnUpdateSqNormCallback(
                "onUpdateSqCallback2", 0, 2, "O", "X"));
        OM_STATES.onUpdateSq(2, 3, _unitTestOnUpdateSqNormCallback(
                "onUpdateSqCallback3", 2, 3, "X", "O"));
        OM_STATES.onUpdateSq(2, 3, _unitTestOnUpdateSqNormCallback(
                "onUpdateSqCallback3", 2, 3, "X", "O"));
        OM_STATES.onUpdateSq(6, 4, _unitTestOnUpdateSqNormCallback(
                "onUpdateSqCallback4", 6, 4, "O", "X"));
        OM_STATES.onUpdateSq(6, 4, _unitTestOnUpdateSqNormCallback(
                "onUpdateSqCallback4", 6, 4, "O", "X"));
        OM_STATES.onUpdateSq(3, 5, _unitTestOnUpdateSqNormCallback(
                "onUpdateSqCallback5", 3, 5, "X", "O"));
        OM_STATES.onUpdateSq(3, 5, _unitTestOnUpdateSqNormCallback(
                "onUpdateSqCallback5", 3, 5, "X", "O"));
        OM_STATES.onUpdateSq(5, 6, _unitTestOnUpdateSqNormCallback(
                "onUpdateSqCallback6", 5, 6, "O", "X"));
        OM_STATES.onUpdateSq(5, 6, _unitTestOnUpdateSqNormCallback(
                "onUpdateSqCallback6", 5, 6, "O", "X"));
        OM_STATES.onUpdateSq(7, 7, _unitTestOnUpdateSqNormCallback(
                "onUpdateSqCallback7", 7, 7, "X", "O"));
        OM_STATES.onUpdateSq(7, 7, _unitTestOnUpdateSqNormCallback(
                "onUpdateSqCallback7", 7, 7, "X", "O"));
        OM_STATES.onUpdateSq(1, 8, _unitTestOnUpdateSqDrawCallback(
                "onUpdateSqCallback8", 1, 8, "O"));
        OM_STATES.onUpdateSq(1, 8, _unitTestOnUpdateSqDrawCallback(
                "onUpdateSqCallback8", 1, 8, "O"));
        //
    }; // _unitTestDraw

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestOnGoToMoveDraw = () => {
        console.info("UnitTestOMStates _unitTestOnGoToMoveDraw");
        // Duplicate each API call to prove that they're all idempotent
        OM_STATES.onGoToMove(-1, 0, _unitTestOnGoToMoveNormCallback(
                "onGoToMoveCallback1", ["", "", "", "", "", "", "", "", ""],
                -1, 0, "X"));
        OM_STATES.onGoToMove(-1, 0, _unitTestOnGoToMoveNormCallback(
                "onGoToMoveCallback1", ["", "", "", "", "", "", "", "", ""],
                -1, 0, "X"));
        OM_STATES.onGoToMove(1, 8, _unitTestOnGoToMoveDrawCallback(
                "onGoToMoveCallback2",
                ["O", "O", "X", "X", "X", "O", "O", "X", ""], 1, 8));
        OM_STATES.onGoToMove(1, 8, _unitTestOnGoToMoveDrawCallback(
                "onGoToMoveCallback2",
                ["O", "O", "X", "X", "X", "O", "O", "X", ""], 1, 8));
        OM_STATES.onGoToMove(4, 1, _unitTestOnGoToMoveNormCallback(
                "onGoToMoveCallback3", ["", "", "", "", "X", "", "", "", ""],
                4, 1, "O"));
        OM_STATES.onGoToMove(4, 1, _unitTestOnGoToMoveNormCallback(
                "onGoToMoveCallback3", ["", "", "", "", "X", "", "", "", ""],
                4, 1, "O"));
        //
    }; // _unitTestOnGoToMoveDraw

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestXWin = () => {
        console.info("UnitTestOMStates _unitTestXWin");
        // Duplicate each API call to prove that they're all idempotent
        OM_STATES.onUpdateSq(1, 2, _unitTestOnUpdateSqNormCallback(
                "onUpdateSqCallback1", 1, 2, "O", "X"));
        OM_STATES.onUpdateSq(1, 2, _unitTestOnUpdateSqNormCallback(
                "onUpdateSqCallback1", 1, 2, "O", "X"));
        OM_STATES.onUpdateSq(0, 3, _unitTestOnUpdateSqNormCallback(
                "onUpdateSqCallback2", 0, 3, "X", "O"));
        OM_STATES.onUpdateSq(0, 3, _unitTestOnUpdateSqNormCallback(
                "onUpdateSqCallback2", 0, 3, "X", "O"));
        OM_STATES.onUpdateSq(8, 4, _unitTestOnUpdateSqNormCallback(
                "onUpdateSqCallback3", 8, 4, "O", "X"));
        OM_STATES.onUpdateSq(8, 4, _unitTestOnUpdateSqNormCallback(
                "onUpdateSqCallback3", 8, 4, "O", "X"));
        OM_STATES.onUpdateSq(3, 5, _unitTestOnUpdateSqNormCallback(
                "onUpdateSqCallback4", 3, 5, "X", "O"));
        OM_STATES.onUpdateSq(5, 6, _unitTestOnUpdateSqNormCallback(
                "onUpdateSqCallback5", 5, 6, "O", "X"));
        OM_STATES.onUpdateSq(5, 6, _unitTestOnUpdateSqNormCallback(
                "onUpdateSqCallback5", 5, 6, "O", "X"));
        OM_STATES.onUpdateSq(6, 7, _unitTestOnUpdateSqWinCallback(
                "onUpdateSqCallback6", 6, 7, "X", [0, 3, 6]));
        OM_STATES.onUpdateSq(6, 7, _unitTestOnUpdateSqWinCallback(
                "onUpdateSqCallback6", 6, 7, "X", [0, 3, 6]));
        //
    }; // _unitTestXWin

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestOnGoToMoveXWin = () => {
        console.info("UnitTestOMStates _unitTestOnGoToMoveXWin");
        // Duplicate each API call to prove that they're all idempotent
        OM_STATES.onGoToMove(-1, 0, _unitTestOnGoToMoveNormCallback(
                "onGoToMoveCallback1", ["", "", "", "", "", "", "", "", ""],
                -1, 0, "X"));
        OM_STATES.onGoToMove(-1, 0, _unitTestOnGoToMoveNormCallback(
                "onGoToMoveCallback1", ["", "", "", "", "", "", "", "", ""],
                -1, 0, "X"));
        OM_STATES.onGoToMove(6, 7, _unitTestOnGoToMoveXWinCallback(
                "onGoToMoveCallback2",
                ["X", "O", "", "X", "X", "O", "X", "", "O"], 6, 7, [0, 3, 6],
                "X"));
        OM_STATES.onGoToMove(6, 7, _unitTestOnGoToMoveXWinCallback(
                "onGoToMoveCallback2",
                ["X", "O", "", "X", "X", "O", "X", "", "O"], 6, 7, [0, 3, 6],
                "X"));
        //
    }; // _unitTestOnGoToMoveXWin

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestOnClearHist = () => {
          console.info("UnitTestOMStates _unitTestOnClearHist");
          // Duplicate each API call to prove that they're all idempotent
          OM_STATES.onClearHist(
                  _unitTestOnClearHistCallback("onClearHistCallback1", "X"));
          OM_STATES.onClearHist(
                  _unitTestOnClearHistCallback("onClearHistCallback1", "X"));
          //
    }; // _unitTestOnClearHist

    /**
     * Hotspot/No-op
     * @author DoubleX @since v1.0 @version v1.0
     * @param {String} tag - The test case identifier
     * @param {Number} i - The 1D index of the square
     * @param {Number} moveNo - The move number
     * @param {String} boardPlayer - The player to be displayed on the 2D board
     * @param {String} infoPlayer - The player to be displayed on the statuses
     */
    const _unitTestOnUpdateSqNormCallback = (
            tag, i, moveNo, boardPlayer, infoPlayer) => {
        return (boardCmds, infoCmds) => {
            const sq = boardCmds.sq, moveInfo = infoCmds.moveInfo;
            SHOW_UNIT_TEST_MSG(tag,
                    [JSON.stringify(boardCmds), JSON.stringify(infoCmds)],
                    [
                        JSON.stringify({ sq: { i, player: boardPlayer } }),
                        JSON.stringify({
                            moveInfo: { i, moveNo },
                            player: infoPlayer,
                            delFutures: moveNo
                        })
                    ], sq.i === i && sq.player === boardPlayer &&
                    moveInfo.i === i && moveInfo.moveNo === moveNo &&
                    infoCmds.player === infoPlayer &&
                    infoCmds.delFutures === moveNo);
        };
    }; // _unitTestOnUpdateSqNormCallback

    /**
     * Hotspot/No-op
     * @author DoubleX @since v1.0 @version v1.0
     * @param {String} tag - The test case identifier
     * @param {Number} i - The 1D index of the square
     * @param {Number} moveNo - The move number
     * @param {String} boardPlayer - The player to be displayed on the 2D board
     */
    const _unitTestOnUpdateSqDrawCallback = (tag, i, moveNo, boardPlayer) => {
        return (boardCmds, infoCmds) => {
            const sq = boardCmds.sq, moveInfo = infoCmds.moveInfo;
            SHOW_UNIT_TEST_MSG(tag,
                    [JSON.stringify(boardCmds), JSON.stringify(infoCmds)],
                    [
                        JSON.stringify({ sq: { i, player: boardPlayer } }),
                        JSON.stringify({
                            isDraw: true,
                            moveInfo: { i, moveNo },
                            delFutures: moveNo
                        })
                    ], sq.i === i && sq.player === boardPlayer &&
                    infoCmds.isDraw && moveInfo.i === i && moveInfo.moveNo ===
                    moveNo && infoCmds.delFutures === moveNo);
        };
    }; // _unitTestOnUpdateSqDrawCallback

    /**
     * Hotspot/No-op
     * @author DoubleX @since v1.0 @version v1.0
     * @param {String} tag - The test case identifier
     * @param {Number} i - The 1D index of the square
     * @param {Number} moveNo - The move number
     * @param {String} player - The player updated the square
     * @param {Array[Number]} winningSqs - The 1D list of winning square indices
     */
    const _unitTestOnUpdateSqWinCallback = (
            tag, i, moveNo, player, winningSqs) => {
        return (boardCmds, infoCmds) => {
            const sq = boardCmds.sq, moveInfo = infoCmds.moveInfo;
            SHOW_UNIT_TEST_MSG(tag,
                    [JSON.stringify(boardCmds), JSON.stringify(infoCmds)],
                    [
                        JSON.stringify({ sq: { i, player }, winningSqs }),
                        JSON.stringify({
                            moveInfo: { i, moveNo },
                            winner: player,
                            delFutures: moveNo
                        })
                    ], sq.i === i && sq.player === player && boardCmds.
                    winningSqs.every(sq => winningSqs.includes(sq)) &&
                    boardCmds.winningSqs.length === winningSqs.length &&
                    moveInfo.i === i && moveInfo.moveNo === moveNo && infoCmds.
                    winner === player && infoCmds.delFutures === moveNo);
        };
    }; // _unitTestOnUpdateSqWinCallback

    /**
     * Hotspot/No-op
     * @author DoubleX @since v1.0 @version v1.0
     * @param {String} tag - The test case identifier
     * @param {Array[String]} curSqs - The 1D list of square states
     * @param {Number} i - The 1D index of the square
     * @param {Number} moveNo - The move number
     * @param {String} infoPlayer - The player to be displayed on the statuses
     */
    const _unitTestOnGoToMoveNormCallback = (
            tag, curSqs, i, moveNo, infoPlayer) => {
        return (boardCmds, infoCmds) => {
          const sqs = boardCmds.sqs, moveInfo = infoCmds.moveInfo;
            SHOW_UNIT_TEST_MSG(tag,
                    [JSON.stringify(boardCmds), JSON.stringify(infoCmds)],
                    [
                        JSON.stringify({ sqs: curSqs }),
                        JSON.stringify({
                            moveInfo: { i, moveNo },
                            player: infoPlayer
                        })
                    ], sqs.every((sq, i) => sq === curSqs[i]) && sqs.length ===
                    curSqs.length && moveInfo.i === i && moveInfo.moveNo ===
                    moveNo && infoCmds.player === infoPlayer);
        };
    }; // _unitTestOnGoToMoveNormCallback

    /**
     * Hotspot/No-op
     * @author DoubleX @since v1.0 @version v1.0
     * @param {String} tag - The test case identifier
     * @param {Array[String]} curSqs - The 1D list of square states
     * @param {Number} i - The 1D index of the square
     * @param {Number} moveNo - The move number
     */
    const _unitTestOnGoToMoveDrawCallback = (tag, curSqs, i, moveNo) => {
        return (boardCmds, infoCmds) => {
            const moveInfo = infoCmds.moveInfo;
            SHOW_UNIT_TEST_MSG(tag,
                    [JSON.stringify(boardCmds), JSON.stringify(infoCmds)],
                    [
                        JSON.stringify({ sqs: curSqs }),
                        JSON.stringify({
                            isDraw: true,
                            moveInfo: { i, moveNo }
                        })
                    ], boardCmds.sqs.every((sq, i) => sq === curSqs[i]) &&
                    boardCmds.sqs.length === curSqs.length && infoCmds.
                    isDraw && moveInfo.i === i && moveInfo.moveNo === moveNo);
        };
    }; // _unitTestOnUpdateSqDrawCallback

    /**
     * Hotspot/No-op
     * @author DoubleX @since v1.0 @version v1.0
     * @param {String} tag - The test case identifier
     * @param {Array[String]} curSqs - The 1D list of square states
     * @param {Number} i - The 1D index of the square
     * @param {Number} moveNo - The move number
     * @param {Array[Number]} winningSqs - The 1D list of winning square indices
     * @param {String} winner - The winner to be displayed
     */
    const _unitTestOnGoToMoveXWinCallback = (
            tag, curSqs, i, moveNo, winningSqs, winner) => {
        return (boardCmds, infoCmds) => {
            const moveInfo = infoCmds.moveInfo;
            SHOW_UNIT_TEST_MSG(tag,
                    [JSON.stringify(boardCmds), JSON.stringify(infoCmds)],
                    [
                        JSON.stringify({ sqs: curSqs, winningSqs }),
                        JSON.stringify({ moveInfo: { i, moveNo }, winner })
                    ], boardCmds.sqs.every((sq, i) => sq === curSqs[i]) &&
                    boardCmds.sqs.length === curSqs.length &&
                    moveInfo.i === i && moveInfo.moveNo === moveNo &&
                    infoCmds.winner === winner);
        };
    }; // _unitTestOnGoToMoveXWinCallback

    /**
     * Hotspot/No-op
     * @author DoubleX @since v1.0 @version v1.0
     * @param {String} tag - The test case identifier
     * @param {String} player - The player to be displayed
     */
    const _unitTestOnClearHistCallback = (tag, player) => {
        return (boardCmds, infoCmds) => {
            SHOW_UNIT_TEST_MSG(tag,
                    [JSON.stringify(boardCmds), JSON.stringify(infoCmds)],
                    [
                        JSON.stringify({ isClear: true }),
                        JSON.stringify({ isClear: true, player })
                    ], boardCmds.isClear && infoCmds.isClear &&
                    infoCmds.player === player);
        };
    }; // _unitTestOnClearHistCallback

    console.info("UnitTestOMStates _unitTestAll Pre");
    // Duplicate the whole process to prove that the whole object's idempotent
    _unitTestAll();
    _unitTestAll();
    //
    console.info("UnitTestOMStates _unitTestAll Post");

}; // UnitTestOMStates