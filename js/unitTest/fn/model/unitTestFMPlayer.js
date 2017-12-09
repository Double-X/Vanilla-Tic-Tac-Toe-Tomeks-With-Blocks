/**
 * No-op
 * @author DoubleX @interface @since v1.0 @version v1.0
 * @param {FMPlayer} FM_PLAYER - Returns the player owning the move number
 * @param {Function(String, , , Boolean)} SHOW_UNIT_TEST_MSG - Shows the unit
 *                                                             test results
 */
const UnitTestFMPlayer = (FM_PLAYER, SHOW_UNIT_TEST_MSG) => {

    "use strict";

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestAll = () => {
        console.info("UnitTestFMPlayer _unitTestAll");
        // Duplicate the tests to prove that those functions are indeed pure
        _unitTestPlayerXs();
        _unitTestPlayerXs();
        _unitTestPlayerOs();
        _unitTestPlayerOs();
        //
    }; // _unitTestAll

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestPlayerXs = () => {
        console.info("UnitTestFMPlayer _unitTestPlayerXs");
        const playerXs = [
            FM_PLAYER(0),
            FM_PLAYER(2),
            FM_PLAYER(4),
            FM_PLAYER(6),
            FM_PLAYER(8)
        ];
        SHOW_UNIT_TEST_MSG("playerXs", playerXs, ["X", "X", "X", "X", "X"],
                playerXs.every(player => player === "X"));
    }; // _unitTestPlayerXs

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestPlayerOs = () => {
        console.info("UnitTestFMPlayer _unitTestPlayerOs");
        const playerOs = [
            FM_PLAYER(1),
            FM_PLAYER(3),
            FM_PLAYER(5),
            FM_PLAYER(7),
            FM_PLAYER(9)
        ];
        SHOW_UNIT_TEST_MSG("playerOs", playerOs, ["O", "O", "O", "O", "O"],
                playerOs.every(player => player === "O"));
    }; // _unitTestPlayerOs

    console.info("UnitTestFMPlayer Pre");
    // Duplicate the tests to prove that those functions are indeed pure
    _unitTestAll();
    _unitTestAll();
    //
    console.info("UnitTestFMPlayer Post");

}; // UnitTestFMPlayer