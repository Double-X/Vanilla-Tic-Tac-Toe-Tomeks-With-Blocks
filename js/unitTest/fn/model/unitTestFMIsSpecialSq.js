/**
 * No-op
 * @author DoubleX @interface @since v1.0 @version v1.0
 * @param {FMIsSpecialSq} FM_IS_SPECIAL_SQ - Checks whether a square's special
 * @param {Function(String, , , Boolean)} SHOW_UNIT_TEST_MSG - Shows the unit
 *                                                             test results
 */
const UnitTestFMIsSpecialSq = (FM_IS_SPECIAL_SQ, SHOW_UNIT_TEST_MSG) => {

    "use strict";

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestAll = () => {
        console.info("UnitTestFMIsSpecialSq _unitTestAll");
        const fmIsSpecialSq = FM_IS_SPECIAL_SQ.bind(
                FM_IS_SPECIAL_SQ, [{ rowNo: 2, colNo: 2 }]);
        const isSpecialSqs = [0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => {
            return fmIsSpecialSq(i);
        });
        const expected = [
            false,
            false,
            false,
            false,
            true,
            false,
            false,
            false,
            false,
            false
        ];
        SHOW_UNIT_TEST_MSG("isSpecialSqs", isSpecialSqs, expected,
                isSpecialSqs.every((result, i) => result === expected[i]));
    }; // _unitTestAll

    console.info("UnitTestFMIsSpecialSq Pre");
    // Duplicate the tests to prove that those functions are indeed pure
    _unitTestAll();
    _unitTestAll();
    //
    console.info("UnitTestFMIsSpecialSq Post");

}; // UnitTestFMIsSpecialSq