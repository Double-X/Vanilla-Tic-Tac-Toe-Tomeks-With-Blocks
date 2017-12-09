/**
 * No-op
 * @author DoubleX @interface @since v1.0 @version v1.0
 * @param {Array[Array[Number]]} WINNING_LS - The list of winning lines
 * @param {Function(String, , , Boolean)} SHOW_UNIT_TEST_MSG - Shows the unit
 *                                                             test results
 */
const UnitTestFMWinningLs = (WINNING_LS, SHOW_UNIT_TEST_MSG) => {

    "use strict";

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestAll = () => {
        console.info("UnitTestFMWinningLs _unitTestAll");
        SHOW_UNIT_TEST_MSG("WINNING_LS", WINNING_LS,
                [
                    [0, 1, 2],
                    [3, 4, 5],
                    [6, 7, 8],
                    [0, 3, 6],
                    [1, 4, 7],
                    [2, 5, 8],
                    [0, 4, 8],
                    [2, 4, 6]
                ],
                WINNING_LS.some(winningL => {
                    return winningL.includes(0) && winningL.includes(1) &&
                            winningL.includes(2);
                }) && WINNING_LS.some(winningL => {
                    return winningL.includes(3) && winningL.includes(4) &&
                            winningL.includes(5);
                }) && WINNING_LS.some(winningL => {
                    return winningL.includes(6) && winningL.includes(7) &&
                            winningL.includes(8);
                }) && WINNING_LS.some(winningL => {
                    return winningL.includes(0) && winningL.includes(3) &&
                            winningL.includes(6);
                }) && WINNING_LS.some(winningL => {
                    return winningL.includes(1) && winningL.includes(4) &&
                            winningL.includes(7);
                }) && WINNING_LS.some(winningL => {
                    return winningL.includes(2) && winningL.includes(5) &&
                            winningL.includes(8);
                }) && WINNING_LS.some(winningL => {
                    return winningL.includes(0) && winningL.includes(4) &&
                            winningL.includes(8);
                }) && WINNING_LS.some(winningL => {
                    return winningL.includes(2) && winningL.includes(4) &&
                            winningL.includes(6);
                }) && WINNING_LS.every(winningL => winningL.length === 3));
    }; // _unitTestAll

    console.info("UnitTestFMWinningLs Pre");
    // Duplicate the tests to prove that those functions are indeed pure
    _unitTestAll();
    _unitTestAll();
    //
    console.info("UnitTestFMWinningLs Post");

}; // UnitTestFMWinningLs