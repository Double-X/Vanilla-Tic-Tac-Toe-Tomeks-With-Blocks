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
const UnitTestFVRenderInfo = (SHOW_UNIT_TEST_MSG, MOVES, ON_GO_TO_MOVE_STUB,
        FVRenderDomsStub, FV_RENDER_MOVES_PARAMS) => {

    "use strict";

    const _BTN_CLEAR_HIST = document.getElementById("clearHist");
    const _BTN_TOGGLE_MOVE_SORT_ORD =
            document.getElementById("toggleMoveSortOrd");
    const _TXT_CUR_STAT = document.getElementById("curStat");
    const _FV_RENDER_INFO_PARAMS = FVRenderInfoParams();

    const _calledFnInfo = [];

    /**
     * No-op/Placeholder
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _onClearHistStub = () => {};

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
        console.info("UnitTestFVRenderInfo _unitTestAll");
        // Duplicate each API call to prove that they're all idempotent
        _unitTestDelFutures();
        _unitTestDelFutures();
        _unitTestIsClear();
        _unitTestIsClear();
        _unitTestIsDraw();
        _unitTestIsDraw();
        _unitTestMoveInfo();
        _unitTestMoveInfo();
        _unitTestPlayer();
        _unitTestPlayer();
        _unitTestWinner();
        _unitTestWinner();
        //
    }; // _unitTestAll

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestDelFutures = () => {
        console.info("UnitTestFVRenderInfo _unitTestDelFutures");
        _calledFnInfo.length = 0;
        _FV_RENDER_INFO({ delFutures: 1 });
        SHOW_UNIT_TEST_MSG("_calledFnInfo", JSON.stringify(_calledFnInfo),
                JSON.stringify([]), _calledFnInfo.length === 0);
        _calledFnInfo.length = 0;
    }; // _unitTestDelFutures

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestIsClear = () => {
        console.info("UnitTestFVRenderInfo _unitTestIsClear");
        _calledFnInfo.length = 0;
        _FV_RENDER_INFO({ isClear: true });
        const [calledFn0, calledFn1, calledFn2, calledFn3, calledFn4] =
                _calledFnInfo;
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
                    },
                    {
                        fn: "setProp",
                        domId: "clearHist",
                        attr: "disabled",
                        params: true
                    },
                    {
                        fn: "setProp",
                        domId: "toggleMoveSortOrd",
                        attr: "disabled",
                        params: true
                    }
                ]), _calledFnInfo.length === 5 && calledFn0.fn === "setProp" &&
                calledFn0.domId === "moves" && calledFn0.attr ===
                "innerHTML" && calledFn0.params === "" && calledFn1.fn ===
                "setProp" && calledFn1.domId === FV_RENDER_MOVES_PARAMS.
                btnDomId(0) && calledFn1.attr === "disabled" && calledFn1.
                params && calledFn2.fn === "setProp" && calledFn2.domId ===
                FV_RENDER_MOVES_PARAMS.btnDomId(0) && calledFn2.attr ===
                "innerHTML" && calledFn2.params === FV_RENDER_MOVES_PARAMS.
                boldTxt(FV_RENDER_MOVES_PARAMS.startMoveTxt()) && calledFn3.
                fn === "setProp" && calledFn3.domId === "clearHist" &&
                calledFn3.attr === "disabled" && calledFn3.params && calledFn4.
                fn === "setProp" && calledFn4.domId === "toggleMoveSortOrd" &&
                calledFn4.attr === "disabled" && calledFn4.params);
        _calledFnInfo.length = 0;
    }; // _unitTestIsClear

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestIsDraw = () => {
        console.info("UnitTestFVRenderInfo _unitTestIsDraw");
        _calledFnInfo.length = 0;
        _FV_RENDER_INFO({ isDraw: true });
        const calledFn = _calledFnInfo[0];
        SHOW_UNIT_TEST_MSG("_calledFnInfo", JSON.stringify(_calledFnInfo),
                JSON.stringify([{
                    fn: "setProp",
                    domId: "curStat",
                    attr: "innerHTML",
                    params: _FV_RENDER_INFO_PARAMS.drawGameTxt()
                }]), _calledFnInfo.length === 1 && calledFn.fn === "setProp" &&
                calledFn.domId === "curStat" &&
                calledFn.attr === "innerHTML" &&
                calledFn.params === _FV_RENDER_INFO_PARAMS.drawGameTxt());
        _calledFnInfo.length = 0;
    }; // _unitTestIsDraw

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestMoveInfo = () => {
        console.info("UnitTestFVRenderInfo _unitTestMoveInfo");
        _calledFnInfo.length = 0;
        _FV_RENDER_INFO({ moveInfo: { i: 4, moveNo: 1 } });
        const calledFn0 = _calledFnInfo[0], calledFn1 = _calledFnInfo[1];
        const calledFn2 = _calledFnInfo[2], calledFn3 = _calledFnInfo[3];
        const calledFn4 = _calledFnInfo[4], calledFn5 = _calledFnInfo[5];
        const calledFn6 = _calledFnInfo[6];
        SHOW_UNIT_TEST_MSG("_calledFnInfo", JSON.stringify(_calledFnInfo),
                JSON.stringify([
                    {
                        fn: "setProp",
                        domId: "clearHist",
                        attr: "disabled",
                        params: false
                    },
                    {
                        fn: "setProp",
                        domId: "toggleMoveSortOrd",
                        attr: "disabled",
                        params: false
                    },
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
                ]), _calledFnInfo.length === 7 && calledFn0.fn === "setProp" &&
                calledFn0.domId === "clearHist" && calledFn0.attr ===
                "disabled" && !calledFn0.params && calledFn1.fn ===
                "setProp" && calledFn1.domId === "toggleMoveSortOrd" &&
                calledFn1.attr === "disabled" && !calledFn1.params && calledFn2.
                fn === "setProp" && calledFn2.domId === FV_RENDER_MOVES_PARAMS.
                btnDomId(0) && calledFn2.attr === "disabled" && !calledFn2.
                params && calledFn3.fn === "setProp" && calledFn3.domId ===
                FV_RENDER_MOVES_PARAMS.btnDomId(0) && calledFn3.attr ===
                "innerHTML" && calledFn3.params === FV_RENDER_MOVES_PARAMS.
                startMoveTxt() && calledFn4.fn === "setProp" && calledFn4.
                domId === FV_RENDER_MOVES_PARAMS.btnDomId(1) && calledFn4.
                attr === "disabled" && calledFn4.params && calledFn5.fn ===
                "setProp" && calledFn5.domId === FV_RENDER_MOVES_PARAMS.
                btnDomId(1) && calledFn5.attr === "innerHTML" && calledFn5.
                params === FV_RENDER_MOVES_PARAMS.
                boldTxt(FV_RENDER_MOVES_PARAMS.otherMoveTxt(4, 1)) && calledFn6.
                fn === "callFn" && calledFn6.domId === "moves" && calledFn6.
                attr === "appendChild" && calledFn6.params[0] ===
                FV_RENDER_MOVES_PARAMS.liDomId(1));
        _calledFnInfo.length = 0;
    }; // _unitTestMoveInfo

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestPlayer = () => {
        console.info("UnitTestFVRenderInfo _unitTestPlayer");
        _calledFnInfo.length = 0;
        _FV_RENDER_INFO({ player: "X" });
        const calledFn = _calledFnInfo[0];
        SHOW_UNIT_TEST_MSG("_calledFnInfo", JSON.stringify(_calledFnInfo),
                JSON.stringify([{
                    fn: "setProp",
                    domId: "curStat",
                    attr: "innerHTML",
                    params: _FV_RENDER_INFO_PARAMS.nextPlayerTxt("O")
                }]), _calledFnInfo.length === 1 && calledFn.fn === "setProp" &&
                calledFn.domId === "curStat", calledFn.attr === "innerHTML" &&
                calledFn.params === _FV_RENDER_INFO_PARAMS.nextPlayerTxt("O"));
        _calledFnInfo.length = 0;
    }; // _unitTestPlayer

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestWinner = () => {
        console.info("UnitTestFVRenderInfo _unitTestWinner");
        _calledFnInfo.length = 0;
        _FV_RENDER_INFO({ winner: "X" });
        const calledFn = _calledFnInfo[0];
        SHOW_UNIT_TEST_MSG("_calledFnInfo", JSON.stringify(_calledFnInfo),
                JSON.stringify([{
                    fn: "setProp",
                    domId: "curStat",
                    attr: "innerHTML",
                    params: _FV_RENDER_INFO_PARAMS.winnerTxt("X")
                }]), _calledFnInfo.length === 1 && calledFn.fn === "setProp" &&
                calledFn.domId === "curStat", calledFn.attr === "innerHTML" &&
                calledFn.params === _FV_RENDER_INFO_PARAMS.winnerTxt("X"));
        _calledFnInfo.length = 0;
    }; // _unitTestWinner

    const _FV_RENDER_DOMS_STUB = FVRenderDomsStub(_callback);
    const _FVRenderMoves = FVRenderMoves.bind(FVRenderMoves, MOVES,
            _FV_RENDER_DOMS_STUB, FV_RENDER_MOVES_PARAMS);
    const _FV_RENDER_INFO = FVRenderInfo(_BTN_CLEAR_HIST,
            _BTN_TOGGLE_MOVE_SORT_ORD, _TXT_CUR_STAT, _FV_RENDER_DOMS_STUB,
            _FVRenderMoves, _FV_RENDER_INFO_PARAMS, ON_GO_TO_MOVE_STUB,
            _onClearHistStub);

    console.info("UnitTestFVRenderInfo Pre");
    // Duplicate the whole process to prove that the whole function's idempotent
    _unitTestAll();
    _unitTestAll();
    //
    console.info("UnitTestFVRenderInfo Post");

}; // UnitTestFVRenderInfo
