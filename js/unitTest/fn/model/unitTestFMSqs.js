/**
 * No-op
 * @author DoubleX @interface @since v1.0 @version v1.0
 * @param {FMSqs} FM_SQS - Returns the current and last square statuses
 * @param {Function(String, , , Boolean)} SHOW_UNIT_TEST_MSG - Shows the unit
 *                                                             test results
 */
const UnitTestFMSqs = (FM_SQS, SHOW_UNIT_TEST_MSG) => {

    "use strict";

    const _HIST = [
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "X", "", "", "", ""],
        ["O", "", "", "", "X", "", "", "", ""],
        ["O", "", "X", "", "X", "", "", "", ""],
        ["O", "", "X", "", "X", "", "O", "", ""],
        ["O", "", "X", "X", "X", "", "O", "", ""],
        ["O", "", "X", "X", "X", "O", "O", "", ""]
    ];

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestAll = () => {
        console.info("UnitTestFMSqs _unitTestAll");
        // Duplicate the tests to prove that those functions are indeed pure
        _unitTestCur();
        _unitTestCur();
        _unitTestLast();
        _unitTestLast();
        //
    }; // _unitTestAll

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestCur = () => {
        console.info("UnitTestFMSqs _unitTestCur");
        const cur = FM_SQS.cur(7, 7, _HIST);
        SHOW_UNIT_TEST_MSG("cur", cur,
                ["O", "", "X", "X", "X", "O", "O", "X", ""],
                [2, 3, 4, 7].every(i => cur[i] === "X") &&
                [0, 5, 6].every(i => cur[i] === "O") &&
                [1, 8].every(i => cur[i] === ""));
    }; // _unitTestCur

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestLast = () => {
        console.info("UnitTestFMSqs _unitTestLast");
        const last = FM_SQS.last(7, _HIST);
        SHOW_UNIT_TEST_MSG("last", last,
                ["O", "", "X", "X", "X", "O", "O", "", ""],
                [2, 3, 4].every(i => last[i] === "X") &&
                [0, 5, 6].every(i => last[i] === "O") &&
                [1, 7, 8].every(i => last[i] === ""));
    }; // _unitTestLast

    console.info("UnitTestFMSqs Pre");
    // Duplicate the tests to prove that those functions are indeed pure
    _unitTestAll();
    _unitTestAll();
    //
    console.info("UnitTestFMSqs Post");

}; // UnitTestFMSqs