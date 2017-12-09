/**
 * No-op
 * @author DoubleX @interface @since v1.0 @version v1.0
 * @param {Number} SQS_NO - The number of squares
 * @param {Function(String, , , Boolean)} SHOW_UNIT_TEST_MSG - Shows the unit
 *                                                             test results
 */
const UnitTestFVRenderBoard = (SQS_NO, SHOW_UNIT_TEST_MSG) => {

    "use strict";

    /**
     * Hotspot/No-op/Stub
     * @author DoubleX @interface @since v1.0 @version v1.0
     * @param {Function(Number, String, String)} CALLBACK -
     *         The function checking the API calls
     * @returns {Object[Function]} The requested API mapping
     */
    const FVRenderSqStub = (I, CALLBACK) => {

        /**
         * Potential Hotspot/Idempotent
         * @author DoubleX @interface @since v1.0 @version v1.0
         */
        const clear = () => { CALLBACK(I, "clear"); };

        /**
         * Potential Hotspot/Nullipotent
         * @author DoubleX @interface @since v1.0 @version v1.0
         * @returns {Boolean} The check result
         */
        const isFilled = () => false;

        /**
         * Potential Hotspot/Idempotent
         * @author DoubleX @interface @since v1.0 @version v1.0
         */
        const mark = () => { CALLBACK(I, "mark"); };

        /**
         * Potential Hotspot/Idempotent
         * @author DoubleX @interface @since v1.0 @version v1.0
         * @param {String} player - The player as the content to be rendered
         */
        const render = player => { CALLBACK(I, "render", player); };

        return { clear, isFilled, mark, render };

    }; // FVRenderSqStub

    /**
     * Pure Function
     * @author DoubleX @since v1.0 @version v1.0
     * @param {} element - The placeholder argument
     * @param {Number} i - The 1D index of the square of the moves
     * @returns {FVRenderSqStub} The requested FVRenderSq stub for testing only
     */
    const _sq = (element, i) => FVRenderSqStub(i, _callback);

    /**
     * Hotspot
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Number} i - The 1D index of the square of the moves
     * @param {String} name - The name of the API called
     * @param {} arg - The argument of the API called
     */
    const _callback = (i, name, arg) => {
        _calledFnInfo.push({ i, name, arg });
    }; // _callback

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestAll = () => {
        console.info("UnitTestFVRenderBoard _unitTestAll");
        // Duplicate each API call to prove that they're all idempotent
        _unitTestIsClear();
        _unitTestIsClear();
        _unitTestSq();
        _unitTestSq();
        _unitTestSqs();
        _unitTestSqs();
        _unitTestWinningSqs();
        _unitTestWinningSqs();
        //
    }; // _unitTestAll

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestIsClear = () => {
        console.info("UnitTestFVRenderBoard _unitTestIsClear");
        _calledFnInfo.length = 0;
        _FV_RENDER_BOARD({ isClear: true });
        SHOW_UNIT_TEST_MSG("_calledFnInfo", JSON.stringify(_calledFnInfo),
                JSON.stringify([
                    { i: 0, name: "clear" },
                    { i: 1, name: "clear" },
                    { i: 2, name: "clear" },
                    { i: 3, name: "clear" },
                    { i: 4, name: "clear" },
                    { i: 5, name: "clear" },
                    { i: 6, name: "clear" },
                    { i: 7, name: "clear" },
                    { i: 8, name: "clear" }
                ]), _calledFnInfo.length === 9 &&
                _calledFnInfo.every(calledFn => calledFn.name === "clear") &&
                _calledFnInfo.every((calledFn, i) => {
                    return _calledFnInfo.filter(calledFn => calledFn.i === i).
                            length === 1;
                }));
        _calledFnInfo.length = 0;
    }; // _unitTestIsClear

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestSq = () => {
        console.info("UnitTestFVRenderBoard _unitTestSq");
        _calledFnInfo.length = 0;
        _FV_RENDER_BOARD({ sq: { i: 4, player: "X" } });
        const calledFn = _calledFnInfo[0];
        SHOW_UNIT_TEST_MSG("_calledFnInfo", JSON.stringify(_calledFnInfo),
                JSON.stringify([{ i: 4, name: "render", arg: "X" }]),
                _calledFnInfo.length === 1 && calledFn.i === 4 &&
                calledFn.name === "render" && calledFn.arg === "X");
        _calledFnInfo.length = 0;
    }; // _unitTestSq

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestSqs = () => {
        console.info("UnitTestFVRenderBoard _unitTestSqs");
        _calledFnInfo.length = 0;
        const renderXIndices = [2, 3, 4], renderOIndices = [0, 5, 6];
        const renderEmptyIndices = [1, 7, 8];
        _FV_RENDER_BOARD({ sqs: ["O", "", "X", "X", "X", "O", "O", "", ""] });
        SHOW_UNIT_TEST_MSG("_calledFnInfo", JSON.stringify(_calledFnInfo),
                JSON.stringify([
                    { i: 0, name: "render", arg: "O" },
                    { i: 1, name: "render", arg: "" },
                    { i: 2, name: "render", arg: "X" },
                    { i: 3, name: "render", arg: "X" },
                    { i: 4, name: "render", arg: "X" },
                    { i: 5, name: "render", arg: "O" },
                    { i: 6, name: "render", arg: "O" },
                    { i: 7, name: "render", arg: "" },
                    { i: 8, name: "render", arg: "" }
                ]), _calledFnInfo.length === 9 &&
                _calledFnInfo.every(calledFn => calledFn.name === "render") &&
                _calledFnInfo.filter(calledFn => {
                    return renderXIndices.includes[calledFn.i];
                }).every(calledFn => calledFn.arg === "X") &&
                _calledFnInfo.filter(calledFn => {
                    return renderOIndices.includes[calledFn.i];
                }).every(calledFn => calledFn.arg === "O") &&
                _calledFnInfo.filter(calledFn => {
                    return renderEmptyIndices.includes[calledFn.i];
                }).every(calledFn => calledFn.arg === "") );
      _calledFnInfo.length = 0;
    }; // _unitTestSqs

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestWinningSqs = () => {
        console.info("UnitTestFVRenderBoard _unitTestWinningSqs");
        const winningSqs = [0, 3, 6];
        _FV_RENDER_BOARD({ winningSqs });
        const calledFnIndices = _calledFnInfo.map(calledFn => calledFn.i);
        SHOW_UNIT_TEST_MSG("_calledFnInfo", JSON.stringify(_calledFnInfo),
                JSON.stringify([
                    { i: 0, name: "mark" },
                    { i: 3, name: "mark" },
                    { i: 6, name: "mark" }
                ]), _calledFnInfo.length === 3 &&
                _calledFnInfo.every(calledFn => calledFn.name === "mark") &&
                winningSqs.every(
                        winningSq => calledFnIndices.includes(winningSq)));
        _calledFnInfo.length = 0;
    }; // _unitTestWinningSqs

    const _SQS = Array(SQS_NO).fill("").map(_sq);
    const _FV_RENDER_BOARD = FVRenderBoard(_SQS), _calledFnInfo = [];

    console.info("UnitTestFVRenderBoard Pre");
    // Duplicate the whole process to prove that the whole function's idempotent
    _unitTestAll();
    _unitTestAll();
    //
    console.info("UnitTestFVRenderBoard Post");

}; // UnitTestFVRenderBoard
