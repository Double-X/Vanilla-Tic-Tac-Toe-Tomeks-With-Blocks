/**
 * No-op
 * @author DoubleX @interface @since v1.0 @version v1.0
 * @param {Array[Object[Number, Number]]} TOMEKS - The list of tomeks
 * @param {Array[Object[Number, Number]]} BLOCKS - The list of blocks
 * @param {Function(String, , , Boolean)} SHOW_UNIT_TEST_MSG - Shows the unit
 *                                                             test results
 * @param {Function(String, , Boolean)} SHOW_UNIT_TEST_BOOL_MSG - Shows the unit
 *                                                                test results
 * @param {FVRenderDomsStub} FVRenderDomsStub - Returns the stub for testing
 */
const UnitTestFVRenderSq = (TOMEKS, BLOCKS, SHOW_UNIT_TEST_MSG,
        SHOW_UNIT_TEST_BOOL_MSG, FVRenderDomsStub) => {

    "use strict";

    const _FV_RENDER_SQ_PARAMS = FVRenderSqParams(TOMEKS, BLOCKS);
    const _CONTENT = _FV_RENDER_SQ_PARAMS.sqContent(1, 1);
    const _ROW_STUB = { id: "row1" };

    const _calledFnInfo = [];

    /**
     * Hotspot
     * @author DoubleX @since v1.0 @version v1.0
     * @param {String} fn - The name of the API called
     * @param {String} domId - The id of the dom to be rendered
     * @param {String} attr - The name of the dom rendering attribute
     * @param {} params - The parameters for rendering the dom
     */
    const _callback = (fn, domId, attr, params) => {
        _calledFnInfo.push({ fn, domId, attr, params });
    }; // _callback

    /**
     * No-op/Placeholder
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _onclickStub = () => {};

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestAll = () => {
        console.info("UnitTestFVRenderSq _unitTestAll");
        // Duplicate each API call to prove that they're all idempotent
        _unitTestClear();
        _unitTestClear();
        _unitTestIsFilled();
        _unitTestIsFilled();
        _unitTestMark();
        _unitTestMark();
        _unitTestRender();
        _unitTestRender();
        //
    }; // _unitTestAll

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestClear = () => {
        console.info("UnitTestFVRenderSq _unitTestClear");
        _calledFnInfo.length = 0;
        _FV_RENDER_SQ.clear();
        const calledFn0 = _calledFnInfo[0];
        SHOW_UNIT_TEST_MSG("_calledFnInfo", JSON.stringify(_calledFnInfo),
                JSON.stringify([{
                    fn: "setProp",
                    domId: "sq4",
                    attr: "innerHTML",
                    params: _CONTENT
                }]), _calledFnInfo.length === 1 && calledFn0.fn ===
                "setProp" && calledFn0.domId === "sq4" && calledFn0.attr ===
                "innerHTML" && calledFn0.params === _CONTENT);
        _calledFnInfo.length = 0;
    }; // _unitTestClear

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestIsFilled = () => {
        console.info("UnitTestFVRenderSq _unitTestIsFilled");
        const isFilled = _FV_RENDER_SQ.isFilled();
        SHOW_UNIT_TEST_BOOL_MSG("isFilled", isFilled, !isFilled);
    }; // _unitTestIsFilled

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestMark = () => {
        console.info("UnitTestFVRenderSq _unitTestMark");
        _calledFnInfo.length = 0;
        _FV_RENDER_SQ.mark();
        const calledFn0 = _calledFnInfo[0];
        SHOW_UNIT_TEST_MSG("_calledFnInfo", JSON.stringify(_calledFnInfo),
                JSON.stringify([{
                    fn: "setProp",
                    domId: "sq4",
                    attr: "innerHTML",
                    params: _FV_RENDER_SQ_PARAMS.markedInnerHTML(_CONTENT)
                }]), _calledFnInfo.length === 1 && calledFn0.fn ===
                "setProp" && calledFn0.domId === "sq4" && calledFn0.attr ===
                "innerHTML" && calledFn0.params === _FV_RENDER_SQ_PARAMS.
                markedInnerHTML(_CONTENT));
        _calledFnInfo.length = 0;
    }; // _unitTestMark

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestRender = () => {
        console.info("UnitTestFVRenderSq _unitTestRender");
        _calledFnInfo.length = 0;
        _FV_RENDER_SQ.render("X");
        const calledFn0 = _calledFnInfo[0];
        SHOW_UNIT_TEST_MSG("_calledFnInfo", JSON.stringify(_calledFnInfo),
                JSON.stringify([{
                    fn: "setProp",
                    domId: "sq4",
                    attr: "innerHTML",
                    params: "X"
                }]), _calledFnInfo.length === 1 && calledFn0.fn ===
                "setProp" && calledFn0.domId === "sq4" && calledFn0.attr ===
                "innerHTML" && calledFn0.params === "X");
        _calledFnInfo.length = 0;
    }; // _unitTestRender

    const _FV_RENDER_DOMS_STUB = FVRenderDomsStub(_callback);
    const _FV_RENDER_SQ = FVRenderSq(_FV_RENDER_DOMS_STUB,
            _FV_RENDER_SQ_PARAMS, _ROW_STUB, _onclickStub, 4, _CONTENT);

    console.info("UnitTestFVRenderSq Pre");
    // Duplicate the whole process to prove that the whole function's idempotent
    _unitTestAll();
    _unitTestAll();
    //
    console.info("UnitTestFVRenderSq Post");

}; // UnitTestFVRenderSq
