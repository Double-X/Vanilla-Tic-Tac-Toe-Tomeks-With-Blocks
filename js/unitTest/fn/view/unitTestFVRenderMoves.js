/**
 * No-op
 * @author DoubleX @interface @since v1.0 @version v1.0
 * @param {Function(String, , , Boolean)} SHOW_UNIT_TEST_MSG - Shows the unit
 *                                                             test results
 * @param {Dom} MOVES - The container for the list of moves made
 * @param {Function(Number, Number)} ON_GO_TO_MOVE_STUB - The unused placeholder
 * @param {FVRenderDomsStub} FVRenderDomsStub - Returns the stub for testing
 * @param {FVRenderMovesParams} FV_RENDER_MOVES_PARAMS - The seam for returning
 *                                                        display contents
 */
const UnitTestFVRenderMoves = (SHOW_UNIT_TEST_MSG, MOVES, ON_GO_TO_MOVE_STUB,
        FVRenderDomsStub, FV_RENDER_MOVES_PARAMS) => {

    "use strict";

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
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestAll = () => {
        console.info("UnitTestFVRenderMoves _unitTestAll");
        // Duplicate each API call to prove that they're all idempotent
        _unitTestAdd();
        _unitTestAdd();
        _unitTestClear();
        _unitTestClear();
        _unitTestDelFutures();
        _unitTestDelFutures();
        //
    }; // _unitTestAll

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestAdd = () => {
        console.info("UnitTestFVRenderMoves _unitTestAdd");
        _calledFnInfo.length = 0;
        _FV_RENDER_MOVES.add({ i: 4, moveNo: 1 });
        const [calledFn0, calledFn1, calledFn2, calledFn3, calledFn4] =
                _calledFnInfo;
        SHOW_UNIT_TEST_MSG("_calledFnInfo", JSON.stringify(_calledFnInfo),
                JSON.stringify([
                    {
                        fn: "setProp",
                        domId: FV_RENDER_MOVES_PARAMS.btnDomId(0),
                        attr: "disabled",
                        params: false
                    },
                    {
                        fn: "setProp",
                        domId: FV_RENDER_MOVES_PARAMS.btnDomId(0),
                        attr: "innerHTML",
                        params: FV_RENDER_MOVES_PARAMS.startMoveTxt()
                    },
                    {
                        fn: "setProp",
                        domId: FV_RENDER_MOVES_PARAMS.btnDomId(1),
                        attr: "disabled",
                        params: true
                    },
                    {
                        fn: "setProp",
                        domId: FV_RENDER_MOVES_PARAMS.btnDomId(1),
                        attr: "innerHTML",
                        params: FV_RENDER_MOVES_PARAMS.boldTxt(
                                FV_RENDER_MOVES_PARAMS.otherMoveTxt(4, 1))
                    },
                    {
                        fn: "callFn",
                        domId: "moves",
                        attr: "appendChild",
                        params: [FV_RENDER_MOVES_PARAMS.liDomId(1)]
                    }
                ]), _calledFnInfo.length === 5 && calledFn0.fn === "setProp" &&
                calledFn0.domId === FV_RENDER_MOVES_PARAMS.btnDomId(0) &&
                calledFn0.attr === "disabled" && !calledFn0.params && calledFn1.
                fn === "setProp" && calledFn1.domId === FV_RENDER_MOVES_PARAMS.
                btnDomId(0) && calledFn1.attr === "innerHTML" && calledFn1.
                params === FV_RENDER_MOVES_PARAMS.startMoveTxt() && calledFn2.
                fn === "setProp" && calledFn2.domId === FV_RENDER_MOVES_PARAMS.
                btnDomId(1) && calledFn2.attr === "disabled" && calledFn2.
                params && calledFn3.fn === "setProp" && calledFn3.domId ===
                FV_RENDER_MOVES_PARAMS.btnDomId(1) && calledFn3.attr ===
                "innerHTML" && calledFn3.params === FV_RENDER_MOVES_PARAMS.
                boldTxt(FV_RENDER_MOVES_PARAMS.otherMoveTxt(4, 1)) && calledFn4.
                fn === "callFn" && calledFn4.domId === "moves" &&
                calledFn4.attr === "appendChild" && calledFn4.params[0] ===
                FV_RENDER_MOVES_PARAMS.liDomId(1));
        _calledFnInfo.length = 0;
    }; // _unitTestAdd

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestClear = () => {
        console.info("UnitTestFVRenderMoves _unitTestClear");
        _calledFnInfo.length = 0;
        _FV_RENDER_MOVES.clear();
        const [calledFn0, calledFn1, calledFn2] = _calledFnInfo;
        SHOW_UNIT_TEST_MSG("_calledFnInfo", JSON.stringify(_calledFnInfo),
                JSON.stringify([
                    {
                        fn: "setProp",
                        domId: "moves",
                        attr: "innerHTML",
                        params: ""
                    },
                    {
                        fn: "setProp",
                        domId: FV_RENDER_MOVES_PARAMS.btnDomId(0),
                        attr: "disabled",
                        params: true
                    },
                    {
                        fn: "setProp",
                        domId: FV_RENDER_MOVES_PARAMS.btnDomId(0),
                        attr: "innerHTML",
                        params: FV_RENDER_MOVES_PARAMS.boldTxt(
                                FV_RENDER_MOVES_PARAMS.startMoveTxt())
                    }
                ]), _calledFnInfo.length === 3 && calledFn0.fn === "setProp" &&
                calledFn0.domId === "moves" && calledFn0.attr ===
                "innerHTML" && calledFn0.params === "" && calledFn1.fn ===
                "setProp" && calledFn1.domId === FV_RENDER_MOVES_PARAMS.
                btnDomId(0) && calledFn1.attr === "disabled" && calledFn1.
                params && calledFn2.fn === "setProp" && calledFn2.domId ===
                FV_RENDER_MOVES_PARAMS.btnDomId(0) && calledFn2.attr ===
                "innerHTML" && calledFn2.params === FV_RENDER_MOVES_PARAMS.
                boldTxt(FV_RENDER_MOVES_PARAMS.startMoveTxt()));
        _calledFnInfo.length = 0;
    }; // _unitTestClear

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestDelFutures = () => {
        console.info("UnitTestFVRenderMoves _unitTestDelFutures");
        _calledFnInfo.length = 0;
        _FV_RENDER_MOVES.delFutures(1);
        SHOW_UNIT_TEST_MSG("_calledFnInfo", JSON.stringify(_calledFnInfo),
                JSON.stringify([]), _calledFnInfo.length === 0);
        _calledFnInfo.length = 0;
    }; // _unitTestDelFutures

    const _FV_RENDER_DOMS_STUB = FVRenderDomsStub(_callback);
    const _FV_RENDER_MOVES = FVRenderMoves(MOVES, _FV_RENDER_DOMS_STUB,
            FV_RENDER_MOVES_PARAMS, ON_GO_TO_MOVE_STUB);

    console.info("UnitTestFVRenderMoves Pre");
    // Duplicate the whole process to prove that the whole function's idempotent
    _unitTestAll();
    _unitTestAll();
    //
    console.info("UnitTestFVRenderMoves Post");

}; // UnitTestFVRenderMoves
