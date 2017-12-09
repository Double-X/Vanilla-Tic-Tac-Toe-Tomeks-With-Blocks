/**
 * No-op
 * @author DoubleX @interface @since v1.0 @version v1.0
 * @param {FMIsSpecialSq} FM_IS_SPECIAL_SQ - Checks whether a square's special
 * @param {Array[Array[Number]]} WINNING_LS - The list of winning lines
 * @param {FMIsDraw} FM_IS_DRAW - Checks whether the game's a draw
 * @param {FMPlayer} FM_PLAYER - Returns the player owning the move number
 * @param {FMRenderCmds} FM_RENDER_CMDS - Returns the rendering commands
 * @param {FMSqs} FM_SQS - Returns the current and last square statuses
 * @param {FMWinner} FM_WINNER - Returns the winner withh the winning squares
 * @param {Function(String, , , Boolean)} SHOW_UNIT_TEST_MSG - Shows the unit
 *                                                             test results
 * @param {Function(String, , Boolean)} SHOW_UNIT_TEST_BOOL_MSG - Shows the unit
 *                                                                test results
 */
const UnitTestFM = (FM_IS_SPECIAL_SQ, WINNING_LS, FM_IS_DRAW, FM_PLAYER,
        FM_RENDER_CMDS, FM_SQS, FM_WINNER, SHOW_UNIT_TEST_BOOL_MSG,
        SHOW_UNIT_TEST_MSG) => {

    "use strict";

    const _SQS_NORM = ["O", "", "X", "X", "X", "O", "O", "", ""];
    const _SQS_DRAW = ["O", "O", "X", "X", "X", "O", "O", "X", ""];
    const _SQS_X_WIN = ["X", "O", "", "X", "X", "O", "X", "", "O"];
    const _SQS_O_WIN = ["X", "X", "O", "", "O", "O", "X", "", "O"];

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestAll = () => {
        console.info("UnitTestFM _unitTestAll");
        UnitTestFMIsDraw(FM_IS_DRAW, SHOW_UNIT_TEST_BOOL_MSG, _SQS_NORM,
                _SQS_DRAW, _SQS_X_WIN, _SQS_O_WIN);
        UnitTestFMIsSpecialSq(FM_IS_SPECIAL_SQ, SHOW_UNIT_TEST_MSG);
        UnitTestFMPlayer(FM_PLAYER, SHOW_UNIT_TEST_MSG);
        UnitTestFMRenderCmds(FM_RENDER_CMDS, SHOW_UNIT_TEST_MSG);
        UnitTestFMSqs(FM_SQS, SHOW_UNIT_TEST_MSG);
        UnitTestFMWinner(FM_WINNER, SHOW_UNIT_TEST_MSG, _SQS_NORM, _SQS_DRAW,
                _SQS_X_WIN, _SQS_O_WIN);
        UnitTestFMWinningLs(WINNING_LS, SHOW_UNIT_TEST_MSG);
    }; // _unitTestAll

    console.info("UnitTestFM Pre");
    // Duplicate the tests to prove that those functions are indeed pure
    _unitTestAll();
    _unitTestAll();
    //
    console.info("UnitTestFM Post");

}; // UnitTestFM