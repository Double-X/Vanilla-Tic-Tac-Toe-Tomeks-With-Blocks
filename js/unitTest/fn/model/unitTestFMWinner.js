/**
 * No-op
 * @author DoubleX @interface @since v1.0 @version v1.0
 * @param {FMWinner} FM_WINNER - Returns the winner withh the winning squares
 * @param {Function(String, , , Boolean)} SHOW_UNIT_TEST_MSG - Shows the unit
 *                                                             test results
 * @param {Array[Number]} SQS_NORM - The square state as the normal test case
 * @param {Array[Number]} SQS_DRAW - The square state as the draw test case
 * @param {Array[Number]} SQS_X_WIN - The square state as the x wins test case
 * @param {Array[Number]} SQS_O_WIN - The square state as the o wins test case
 */
const UnitTestFMWinner = (FM_WINNER, SHOW_UNIT_TEST_MSG, SQS_NORM, SQS_DRAW,
        SQS_X_WIN, SQS_O_WIN) => {

    "use strict";

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestAll = () => {
        console.info("UnitTestFMWinner _unitTestAll");
        // Duplicate the tests to prove that those functions are indeed pure
        _unitTestNorm();
        _unitTestNorm();
        _unitTestDraw();
        _unitTestDraw();
        _unitTestXWin();
        _unitTestXWin();
        _unitTestOWin();
        _unitTestOWin();
        //
    }; // _unitTestAll

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestNorm = () => {
        console.info("UnitTestFMWinner _unitTestNorm");
        const sqsNormWinner = FM_WINNER(SQS_NORM);
        SHOW_UNIT_TEST_MSG("sqsNormWinner", JSON.stringify(sqsNormWinner),
                JSON.stringify({ winningSqs: [], winner: "" }),
                sqsNormWinner.winningSqs.length === 0 &&
                sqsNormWinner.winner === "");
    }; // _unitTestNorm

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestDraw = () => {
        console.info("UnitTestFMWinner _unitTestDraw");
        const sqsDrawWinner = FM_WINNER(SQS_DRAW);
        SHOW_UNIT_TEST_MSG("sqsDrawWinner", JSON.stringify(sqsDrawWinner),
                JSON.stringify({ winningSqs: [], winner: "" }),
                sqsDrawWinner.winningSqs.length === 0 &&
                sqsDrawWinner.winner === "");
    }; // _unitTestDraw

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestXWin = () => {
        console.info("UnitTestFMWinner _unitTestXWin");
        const sqsXWinWinner = FM_WINNER(SQS_X_WIN);
        const sqsXWinningSqs = sqsXWinWinner.winningSqs;
        SHOW_UNIT_TEST_MSG("sqsXWinWinner", JSON.stringify(sqsXWinWinner),
                JSON.stringify({ winningSqs: [0, 3, 6], winner: "X" }),
                sqsXWinningSqs.includes(0) && sqsXWinningSqs.includes(3) &&
                sqsXWinningSqs.includes(6) && sqsXWinningSqs.length === 3 &&
                sqsXWinWinner.winner === "X");
    }; // _unitTestXWin

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestOWin = () => {
        console.info("UnitTestFMWinner _unitTestOWin");
        const sqsOWinWinner = FM_WINNER(SQS_O_WIN);
        const sqsOWinningSqs = sqsOWinWinner.winningSqs;
        SHOW_UNIT_TEST_MSG("sqsOWinWinner", JSON.stringify(sqsOWinWinner),
                JSON.stringify({ winningSqs: [2, 5, 8], winner: "O" }),
                sqsOWinningSqs.includes(2) && sqsOWinningSqs.includes(5) &&
                sqsOWinningSqs.includes(8) && sqsOWinningSqs.length === 3 &&
                sqsOWinWinner.winner === "O");
    }; // _unitTestOWin

    console.info("UnitTestFMWinner Pre");
    // Duplicate the tests to prove that those functions are indeed pure
    _unitTestAll();
    _unitTestAll();
    //
    console.info("UnitTestFMWinner Post");

}; // UnitTestFMWinner