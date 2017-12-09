/**
 * No-op
 * @author DoubleX @interface @since v1.0 @version v1.0
 * @param {FMIsDraw} FM_IS_DRAW - Checks whether the game's a draw
 * @param {Function(String, , Boolean)} SHOW_UNIT_TEST_BOOL_MSG - Shows the unit
 *                                                                test results
 * @param {Array[Number]} SQS_NORM - The square state as the normal test case
 * @param {Array[Number]} SQS_DRAW - The square state as the draw test case
 * @param {Array[Number]} SQS_X_WIN - The square state as the x wins test case
 * @param {Array[Number]} SQS_O_WIN - The square state as the o wins test case
 */
const UnitTestFMIsDraw = (FM_IS_DRAW, SHOW_UNIT_TEST_BOOL_MSG, SQS_NORM,
        SQS_DRAW, SQS_X_WIN, SQS_O_WIN) => {

    "use strict";

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestAll = () => {
        console.info("UnitTestFMIsDraw _unitTestAll");
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
        console.info("UnitTestFMIsDraw _unitTestNorm");
        const isSqsNormDraw = FM_IS_DRAW(SQS_NORM);
        SHOW_UNIT_TEST_BOOL_MSG("isSqsNormDraw", isSqsNormDraw, !isSqsNormDraw);
        //
    }; // _unitTestNorm

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestDraw = () => {
        console.info("UnitTestFMIsDraw _unitTestDraw");
        const isSqsDrawDraw = FM_IS_DRAW(SQS_DRAW);
        SHOW_UNIT_TEST_BOOL_MSG("isSqsDrawDraw", isSqsDrawDraw, isSqsDrawDraw);
    }; // _unitTestDraw

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestXWin = () => {
        console.info("UnitTestFMIsDraw _unitTestXWin");
        const isSqsXWinDraw = FM_IS_DRAW(SQS_X_WIN);
        SHOW_UNIT_TEST_BOOL_MSG("isSqsXWinDraw", isSqsXWinDraw, !isSqsXWinDraw);
    }; // _unitTestXWin

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestOWin = () => {
        console.info("UnitTestFMIsDraw _unitTestOWin");
        const isSqsOWinDraw = FM_IS_DRAW(SQS_O_WIN);
        SHOW_UNIT_TEST_BOOL_MSG("isSqsOWinDraw", isSqsOWinDraw, !isSqsOWinDraw);
    }; // _unitTestOWin

    console.info("UnitTestFMIsDraw Pre");
    // Duplicate the tests to prove that those functions are indeed pure
    _unitTestAll();
    _unitTestAll();
    //
    console.info("UnitTestFMIsDraw Post");

}; // UnitTestFMIsDraw