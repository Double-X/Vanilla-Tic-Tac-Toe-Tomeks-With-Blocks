/**
 * Hotspot/No-op
 * @author DoubleX @interface @since v1.0 @version v1.0
 * @param {Dom} BTN_CLEAR_HIST - The button for clearing the histories
 * @param {Dom} BTN_TOGGLE_MOVE_SORT_ORD - The button for reversing the moves
 * @param {Dom} TXT_CUR_STAT - The text for displaying the current statuses
 * @param {FVRenderMovesParams} FV_RENDER_MOVES_PARAMS - The seam for returning
 *                                                        display contents
 * @param {FVRenderInfoParams} FV_RENDER_INFO_PARAMS - The seam for returning
 *                                                      display contents
 * @param {FVRenderSqParams} FV_RENDER_SQ_PARAMS - The seam for returning
 *                                                  display contents
 * @param {Function(String, , , Boolean)} SHOW_INTEGRATION_TEST_MSG -
 *        Shows the integration test results
 * @param {Function(String, , Boolean)} SHOW_INTEGRATION_TEST_BOOL_MSG -
 *        Shows the integration test results
 * @param {Function()} CALLBACK - Notifies that this integration test's finished
 */
const IntegrationTestCfgBoardW3BoardH3PlayersXO = (BTN_CLEAR_HIST,
        BTN_TOGGLE_MOVE_SORT_ORD, TXT_CUR_STAT, FV_RENDER_MOVES_PARAMS,
        FV_RENDER_INFO_PARAMS, FV_RENDER_SQ_PARAMS, SHOW_INTEGRATION_TEST_MSG,
        SHOW_INTEGRATION_TEST_BOOL_MSG, CALLBACK) => {

    "use strict";

    const _CHECK_DELAY_MS = 250;

    /**
     * Hotspot/No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _clickNextDom = () => {
        if (_CLICK_IDS.length <= 0) {
            console.info("IntegrationTestCfgBoardW3BoardH3PlayersXO Post");
            return CALLBACK();
        };
        const clickId = _CLICK_IDS.shift();
        const domId = _CLICK_CHECK_FNS[clickId].domId;
        _click(domId);
        setTimeout(_check.bind(IntegrationTestCfgBoardW3BoardH3PlayersXO,
                clickId), _CHECK_DELAY_MS);
    }; // _clickNextDom

    /**
     * Hotspot/No-op
     * @author DoubleX @since v1.0 @version v1.0
     * @param {String} domId - The id of the dom to be clicked
     */
    const _click = domId => {
        const dom = document.getElementById(domId);
        if (!dom.disabled) dom.onclick();
    }; // _click

    /**
     * Hotspot/No-op
     * @author DoubleX @since v1.0 @version v1.0
     * @param {String} clickId - The click event identifier
     */
    const _check = clickId => {
        _CLICK_CHECK_FNS[clickId].fn();
        setTimeout(_clickNextDom, _CHECK_DELAY_MS);
    }; // _check

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _checkClick0 = () => { _checkClearHistClick("_checkClick0", "X"); };

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _checkClick1 = () => {
        const tag = "_checkClick1";
        [0, 1, 2, 3, 5, 6, 7, 8].forEach(i => { _checkSqContent(tag, i, ""); });
        _checkSqCurNormClick(tag, 4, 1, "X", "O");
        [2, 3, 4, 5, 6, 7, 8, 9].forEach(
                moveNo => { _checkNullMove(tag, moveNo); });
    }; // _checkClick1

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _checkClick2 = () => {
        const tag = "_checkClick2";
        [1, 2, 3, 5, 6, 7, 8].forEach(i => { _checkSqContent(tag, i, ""); });
        _checkSqContent(tag, 4, "X");
        _checkSqCurNormClick(tag, 0, 2, "O", "X");
        _checkOtherMove(tag, 4, 1);
        [3, 4, 5, 6, 7, 8, 9].forEach(
                moveNo => { _checkNullMove(tag, moveNo); });
    }; // _checkClick2

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _checkClick3 = () => {
        const tag = "_checkClick3";
        [1, 3, 5, 6, 7, 8].forEach(i => { _checkSqContent(tag, i, ""); });
        _checkSqContent(tag, 4, "X");
        _checkSqContent(tag, 0, "O");
        _checkSqCurNormClick(tag, 2, 3, "X", "O");
        [[4, 1], [0, 2]].forEach(
                args => { _checkOtherMove(tag, args[0], args[1]); });
        [4, 5, 6, 7, 8, 9].forEach(moveNo => { _checkNullMove(tag, moveNo); });
    }; // _checkClick3

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _checkClick4 = () => {
        const tag = "_checkClick4";
        [1, 3, 5, 7, 8].forEach(i => { _checkSqContent(tag, i, ""); });
        [4, 2].forEach(i => { _checkSqContent(tag, i, "X"); });
        _checkSqContent(tag, 0, "O");
        _checkSqCurNormClick(tag, 6, 4, "O", "X");
        [[4, 1], [0, 2], [2, 3]].forEach(
                args => { _checkOtherMove(tag, args[0], args[1]); });
        [5, 6, 7, 8, 9].forEach(moveNo => { _checkNullMove(tag, moveNo); });
    }; // _checkClick4

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _checkClick5 = () => {
        const tag = "_checkClick5";
        [1, 5, 7, 8].forEach(i => { _checkSqContent(tag, i, ""); });
        [4, 2].forEach(i => { _checkSqContent(tag, i, "X"); });
        [0, 6].forEach(i => { _checkSqContent(tag, i, "O"); });
        _checkSqCurNormClick(tag, 3, 5, "X", "O");
        [[4, 1], [0, 2], [2, 3], [6, 4]].forEach(
                args => { _checkOtherMove(tag, args[0], args[1]); });
        [6, 7, 8, 9].forEach(moveNo => { _checkNullMove(tag, moveNo); });
    }; // _checkClick5

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _checkClick6 = () => {
        const tag = "_checkClick6";
        [1, 7, 8].forEach(i => { _checkSqContent(tag, i, ""); });
        [4, 2, 3].forEach(i => { _checkSqContent(tag, i, "X"); });
        [0, 6].forEach(i => { _checkSqContent(tag, i, "O"); });
        _checkSqCurNormClick(tag, 5, 6, "O", "X");
        [[4, 1], [0, 2], [2, 3], [6, 4], [3, 5]].forEach(
                args => { _checkOtherMove(tag, args[0], args[1]); });
        [7, 8, 9].forEach(moveNo => { _checkNullMove(tag, moveNo); });
    }; // _checkClick6

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _checkClick7 = () => {
        const tag = "_checkClick7";
        [1, 8].forEach(i => { _checkSqContent(tag, i, ""); });
        [4, 2, 3].forEach(i => { _checkSqContent(tag, i, "X"); });
        [0, 6, 5].forEach(i => { _checkSqContent(tag, i, "O"); });
        _checkSqCurNormClick(tag, 7, 7, "X", "O");
        [[4, 1], [0, 2], [2, 3], [6, 4], [3, 5], [5, 6]].forEach(
                args => { _checkOtherMove(tag, args[0], args[1]); });
        [8, 9].forEach(moveNo => { _checkNullMove(tag, moveNo); });
    }; // _checkClick7

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _checkClick8 = () => {
        const tag = "_checkClick8";
        _checkSqContent(tag, 8, "");
        [4, 2, 3, 7].forEach(i => { _checkSqContent(tag, i, "X"); });
        [0, 6, 5].forEach(i => { _checkSqContent(tag, i, "O"); });
        _checkSqCurDrawClick(tag, 1, 8, "O");
        [[4, 1], [0, 2], [2, 3], [6, 4], [3, 5], [5, 6], [7, 7]].forEach(
                args => { _checkOtherMove(tag, args[0], args[1]); });
        _checkNullMove(tag, 9);
    }; // _checkClick8

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _checkClick9 = () => {
        const tag = "_checkClick9";
        [0, 1, 2, 3, 5, 6, 7, 8].forEach(i => { _checkSqContent(tag, i, ""); });
        _checkSqCurNormClick(tag, 4, 1, "X", "O");
        _checkNullMove(tag, 9);
    }; // _checkClick9

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _checkClick10 = () => {
        const tag = "_checkClick10";
        [0, 2, 3, 5, 6, 7, 8].forEach(i => { _checkSqContent(tag, i, ""); });
        _checkSqContent(tag, 4, "X");
        _checkSqCurNormClick(tag, 1, 2, "O", "X");
        _checkOtherMove(tag, 4, 1);
        [3, 4, 5, 6, 7, 8, 9].forEach(
                moveNo => { _checkNullMove(tag, moveNo); });
    }; // _checkClick10

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _checkClick11 = () => {
        const tag = "_checkClick11";
        [2, 3, 5, 6, 7, 8].forEach(i => { _checkSqContent(tag, i, ""); });
        _checkSqContent(tag, 4, "X");
        _checkSqContent(tag, 1, "O");
        _checkSqCurNormClick(tag, 0, 3, "X", "O");
        [[4, 1], [1, 2]].forEach(
                args => { _checkOtherMove(tag, args[0], args[1]); });
        [4, 5, 6, 7, 8, 9].forEach(moveNo => { _checkNullMove(tag, moveNo); });
    }; // _checkClick11

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _checkClick12 = () => {
        const tag = "_checkClick12";
        [2, 3, 5, 6, 7].forEach(i => { _checkSqContent(tag, i, ""); });
        [4, 0].forEach(i => { _checkSqContent(tag, i, "X"); });
        _checkSqContent(tag, 1, "O");
        _checkSqCurNormClick(tag, 8, 4, "O", "X");
        [[4, 1], [1, 2], [0, 3]].forEach(
                args => { _checkOtherMove(tag, args[0], args[1]); });
        [5, 6, 7, 8, 9].forEach(moveNo => { _checkNullMove(tag, moveNo); });
    }; // _checkClick12

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _checkClick13 = () => {
        const tag = "_checkClick13";
        [2, 5, 6, 7].forEach(i => { _checkSqContent(tag, i, ""); });
        [4, 0].forEach(i => { _checkSqContent(tag, i, "X"); });
        [1, 8].forEach(i => { _checkSqContent(tag, i, "O"); });
        _checkSqCurNormClick(tag, 3, 5, "X", "O");
        [[4, 1], [1, 2], [0, 3], [8, 4]].forEach(
                args => { _checkOtherMove(tag, args[0], args[1]); });
        [6, 7, 8, 9].forEach(moveNo => { _checkNullMove(tag, moveNo); });
    }; // _checkClick13

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _checkClick14 = () => {
        const tag = "_checkClick14";
        [2, 6, 7].forEach(i => { _checkSqContent(tag, i, ""); });
        [4, 0, 3].forEach(i => { _checkSqContent(tag, i, "X"); });
        [1, 8].forEach(i => { _checkSqContent(tag, i, "O"); });
        _checkSqCurNormClick(tag, 5, 6, "O", "X");
        [[4, 1], [1, 2], [0, 3], [8, 4], [3, 5]].forEach(
                args => { _checkOtherMove(tag, args[0], args[1]); });
        [7, 8, 9].forEach(moveNo => { _checkNullMove(tag, moveNo); });
    }; // _checkClick14

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _checkClick15 = () => {
        const tag = "_checkClick15";
        [2, 7].forEach(i => { _checkSqContent(tag, i, ""); });
        _checkSqContent(tag, 4, "X");
        [1, 8, 5].forEach(i => { _checkSqContent(tag, i, "O"); });
        _checkSqCurWinClick(tag, 6, 7, "X", [0, 3, 6]);
        [[4, 1], [1, 2], [0, 3], [8, 4], [3, 5], [5, 6]].forEach(
                args => { _checkOtherMove(tag, args[0], args[1]); });
        [8, 9].forEach(moveNo => { _checkNullMove(tag, moveNo); });
    }; // _checkClick15

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _checkClick16 = () => {
        // Toggling the move sort order doesn't affect any other functionality
    }; // _checkClick16

    /**
     * Hotspot/No-op
     * @author DoubleX @since v1.0 @version v1.0
     * @param {String} tag - The test case identifier
     * @param {String} curPlayer - The current player to be displayed
     */
    const _checkClearHistClick = (tag, curPlayer) => {
        _checkBtnDisabled(tag, true);
        [0, 1, 2, 3, 4, 5, 6, 7, 8].forEach(
                i => { _checkSqContent(tag, i, ""); });
        _checkCurStartMove(tag);
        _checkNormStatus(tag, curPlayer);
        [1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(
                moveNo => { _checkNullMove(tag, moveNo); });
    }; // _checkClearHistClick

    /**
     * Hotspot/No-op
     * @author DoubleX @since v1.0 @version v1.0
     * @param {String} tag - The test case identifier
     * @param {Number} i - The 1D index of the clicked square
     * @param {Number} moveNo - The move number
     * @param {String} curPlayer - The current player to be displayed
     * @param {String} nextPlayer - The next player to be displayed
     */
    const _checkSqCurNormClick = (tag, i, moveNo, curPlayer, nextPlayer) => {
        _checkSqCurClick(tag, i, moveNo, curPlayer);
        _checkNormStatus(tag, nextPlayer);
    }; // _checkSqCurNormClick

    /**
     * Hotspot/No-op
     * @author DoubleX @since v1.0 @version v1.0
     * @param {String} tag - The test case identifier
     * @param {Number} i - The 1D index of the clicked square
     * @param {Number} moveNo - The move number
     * @param {String} curPlayer - The current player to be displayed
     */
    const _checkSqCurDrawClick = (tag, i, moveNo, curPlayer) => {
        _checkSqCurClick(tag, i, moveNo, curPlayer);
        _checkDrawStatus(tag);
    }; // _checkSqCurDrawClick

    /**
     * Hotspot/No-op
     * @author DoubleX @since v1.0 @version v1.0
     * @param {String} tag - The test case identifier
     * @param {Number} i - The 1D index of the clicked square
     * @param {Number} moveNo - The move number
     * @param {String} curPlayer - The current player to be displayed
     * @param {Array[Number]} winningSqs - The 1D list of winning square indices
     */
    const _checkSqCurWinClick = (tag, i, moveNo, curPlayer, winningSqs) => {
        _checkBtnDisabled(tag, false);
        winningSqs.forEach(winningSq => {
            _checkSqWinContent(tag, winningSq, curPlayer);
        });
        _checkCurMove(tag, i, moveNo);
        _checkOtherStartMove(tag);
        _checkWinStatus(tag, curPlayer);
    }; // _checkSqCurWinClick

    /**
     * Hotspot/No-op
     * @author DoubleX @since v1.0 @version v1.0
     * @param {String} tag - The test case identifier
     * @param {Number} i - The 1D index of the clicked square
     * @param {Number} moveNo - The move number
     * @param {String} curPlayer - The current player to be displayed
     */
    const _checkSqCurClick = (tag, i, moveNo, curPlayer) => {
        _checkBtnDisabled(tag, false);
        _checkSqContent(tag, i, curPlayer);
        _checkCurMove(tag, i, moveNo);
        _checkOtherStartMove(tag);
    }; // _checkSqCurClick

    /**
     * Hotspot/No-op
     * @author DoubleX @since v1.0 @version v1.0
     * @param {String} tag - The test case identifier
     * @param {Boolean} expected - The expected test result
     */
    const _checkBtnDisabled = (tag, expected) => {
        _checkClearHistBtnDisabled(tag, expected);
        _checkToggleMoveSortOrdBtnDisabled(tag, expected);
    }; // _checkBtnDisabled

    /**
     * Hotspot/No-op
     * @author DoubleX @since v1.0 @version v1.0
     * @param {String} tag - The test case identifier
     * @param {Number} i - The 1D index of the clicked square
     * @param {String} curPlayer - The current player to be displayed
     */
    const _checkSqContent = (tag, i, curPlayer) => {
        console.info("IntegrationTestCfgBoardW3BoardH3PlayersXO" +
                " _checkSqContent " + tag);
        const clickedContent =
                document.getElementById(FV_RENDER_SQ_PARAMS.domId(i)).innerHTML;
        SHOW_INTEGRATION_TEST_MSG("clickedContent", clickedContent, curPlayer,
                clickedContent === curPlayer);
    }; // _checkSqContent

    /**
     * Hotspot/No-op
     * @author DoubleX @since v1.0 @version v1.0
     * @param {String} tag - The test case identifier
     * @param {Number} i - The 1D index of the clicked square
     * @param {String} curPlayer - The current player to be displayed
     */
    const _checkSqWinContent = (tag, i, curPlayer) => {
        console.info("IntegrationTestCfgBoardW3BoardH3PlayersXO" +
                " _checkSqWinContent " + tag);
        const clickedContent =
                document.getElementById(FV_RENDER_SQ_PARAMS.domId(i)).innerHTML;
        const expectedContent = FV_RENDER_SQ_PARAMS.markedInnerHTML(curPlayer);
        SHOW_INTEGRATION_TEST_MSG("clickedContent", clickedContent,
                expectedContent, clickedContent === expectedContent);
    }; // _checkSqWinContent

    /**
     * Hotspot/No-op
     * @author DoubleX @since v1.0 @version v1.0
     * @param {String} tag - The test case identifier
     * @param {Boolean} expected - The expected test result
     */
    const _checkClearHistBtnDisabled = (tag, expected) => {
        console.info("IntegrationTestCfgBoardW3BoardH3PlayersXO" +
                " _checkClearHistBtnDisabled " + tag);
        const isClearHistBtnDisabled = BTN_CLEAR_HIST.disabled;
        SHOW_INTEGRATION_TEST_BOOL_MSG("isClearHistBtnDisabled",
                isClearHistBtnDisabled, isClearHistBtnDisabled === expected);
    }; // _checkClearHistBtnDisabled

    /**
     * Hotspot/No-op
     * @author DoubleX @since v1.0 @version v1.0
     * @param {String} tag - The test case identifier
     * @param {Boolean} expected - The expected test result
     */
    const _checkToggleMoveSortOrdBtnDisabled = (tag, expected) => {
        console.info("IntegrationTestCfgBoardW3BoardH3PlayersXO" +
                " _checkToggleMoveSortOrdBtnDisabled " + tag);
        const isToggleMoveSortOrdBtnDisabled =
                BTN_TOGGLE_MOVE_SORT_ORD.disabled;
        SHOW_INTEGRATION_TEST_BOOL_MSG("isToggleMoveSortOrdBtnDisabled",
                isToggleMoveSortOrdBtnDisabled,
                isToggleMoveSortOrdBtnDisabled === expected);
    }; // _checkToggleMoveSortOrdBtnDisabled

    /**
     * Hotspot/No-op
     * @author DoubleX @since v1.0 @version v1.0
     * @param {String} tag - The test case identifier
     * @param {Number} i - The 1D index of the clicked square
     * @param {Number} moveNo - The move number
     */
    const _checkCurMove = (tag, i, moveNo) => {
        console.info("IntegrationTestCfgBoardW3BoardH3PlayersXO" +
                " _checkCurMove " + tag);
        const moveBtn = document.getElementById(
                FV_RENDER_MOVES_PARAMS.btnDomId(moveNo));
        const expectedMoveBtnTxt = FV_RENDER_MOVES_PARAMS.boldTxt(
                FV_RENDER_MOVES_PARAMS.otherMoveTxt(i, moveNo));
        if (!moveBtn) {
            return SHOW_INTEGRATION_TEST_MSG("moveBtnTxt",
                "The move button doesn't exist!", expectedMoveBtnTxt, false);
        };
        const moveBtnTxt = moveBtn.innerHTML;
        SHOW_INTEGRATION_TEST_MSG("moveBtnTxt", moveBtnTxt, expectedMoveBtnTxt,
                moveBtnTxt === expectedMoveBtnTxt);
    }; // _checkCurMove

    /**
     * Hotspot/No-op
     * @author DoubleX @since v1.0 @version v1.0
     * @param {String} tag - The test case identifier
     */
    const _checkCurStartMove = tag => {
        console.info("IntegrationTestCfgBoardW3BoardH3PlayersXO" +
                " _checkCurStartMove " + tag);
        const moveBtn =
                document.getElementById(FV_RENDER_MOVES_PARAMS.btnDomId(0));
        const expectedMoveBtnTxt = FV_RENDER_MOVES_PARAMS.boldTxt(
                FV_RENDER_MOVES_PARAMS.startMoveTxt());
        if (!moveBtn) {
            return SHOW_INTEGRATION_TEST_MSG("moveBtnTxt",
                "The move button doesn't exist!", expectedMoveBtnTxt, false);
        };
        const moveBtnTxt = moveBtn.innerHTML;
        SHOW_INTEGRATION_TEST_MSG("moveBtnTxt", moveBtnTxt, expectedMoveBtnTxt,
                moveBtnTxt === expectedMoveBtnTxt);
    }; // _checkCurStartMove

    /**
     * Hotspot/No-op
     * @author DoubleX @since v1.0 @version v1.0
     * @param {String} tag - The test case identifier
     * @param {Number} i - The 1D index of the clicked square
     * @param {Number} moveNo - The move number
     */
    const _checkOtherMove = (tag, i, moveNo) => {
        console.info("IntegrationTestCfgBoardW3BoardH3PlayersXO" +
                " _checkOtherMove " + tag);
        const moveBtn = document.getElementById(
                FV_RENDER_MOVES_PARAMS.btnDomId(moveNo));
        const expectedMoveBtnTxt =
                FV_RENDER_MOVES_PARAMS.otherMoveTxt(i, moveNo);
        if (!moveBtn) {
            return SHOW_INTEGRATION_TEST_MSG("moveBtnTxt",
                "The move button doesn't exist!", expectedMoveBtnTxt, false);
        };
        const moveBtnTxt = moveBtn.innerHTML;
        SHOW_INTEGRATION_TEST_MSG("moveBtnTxt", moveBtnTxt, expectedMoveBtnTxt,
                moveBtnTxt === expectedMoveBtnTxt);
    }; // _checkCurMove

    /**
     * Hotspot/No-op
     * @author DoubleX @since v1.0 @version v1.0
     * @param {String} tag - The test case identifier
     */
    const _checkOtherStartMove = tag => {
        console.info("IntegrationTestCfgBoardW3BoardH3PlayersXO" +
                " _checkOtherStartMove " + tag);
        const moveBtn =
                document.getElementById(FV_RENDER_MOVES_PARAMS.btnDomId(0));
        const expectedMoveBtnTxt = FV_RENDER_MOVES_PARAMS.startMoveTxt();
        if (!moveBtn) {
            return SHOW_INTEGRATION_TEST_MSG("moveBtnTxt",
                "The move button doesn't exist!", expectedMoveBtnTxt, false);
        };
        const moveBtnTxt = moveBtn.innerHTML;
        SHOW_INTEGRATION_TEST_MSG("moveBtnTxt", moveBtnTxt, expectedMoveBtnTxt,
                moveBtnTxt === expectedMoveBtnTxt);
    }; // _checkOtherStartMove

    /**
     * Hotspot/No-op
     * @author DoubleX @since v1.0 @version v1.0
     * @param {String} tag - The test case identifier
     * @param {Number} moveNo - The move number
     */
    const _checkNullMove = (tag, moveNo) => {
        console.info("IntegrationTestCfgBoardW3BoardH3PlayersXO" +
                " _checkNullMove " + tag);
        const moveLi =
                document.getElementById(FV_RENDER_MOVES_PARAMS.liDomId(moveNo));
        return SHOW_INTEGRATION_TEST_MSG("moveLi", moveLi, null, !moveLi);
    }; // _checkNullMove

    /**
     * Hotspot/No-op
     * @author DoubleX @since v1.0 @version v1.0
     * @param {String} tag - The test case identifier
     * @param {String} nextPlayer - The next player to be displayed
     */
    const _checkNormStatus = (tag, nextPlayer) => {
        console.info("IntegrationTestCfgBoardW3BoardH3PlayersXO" +
                " _checkNormStatus " + tag);
        const curStatTxt = TXT_CUR_STAT.innerHTML;
        const nextPlayerTxt = FV_RENDER_INFO_PARAMS.nextPlayerTxt(nextPlayer);
        SHOW_INTEGRATION_TEST_MSG("curStatTxt", curStatTxt, nextPlayerTxt,
                curStatTxt === nextPlayerTxt);
    }; // _checkNormStatus

    /**
     * Hotspot/No-op
     * @author DoubleX @since v1.0 @version v1.0
     * @param {String} tag - The test case identifier
     */
    const _checkDrawStatus = (tag) => {
        console.info("IntegrationTestCfgBoardW3BoardH3PlayersXO" +
                " _checkDrawStatus " + tag);
        const curStatTxt = TXT_CUR_STAT.innerHTML;
        const drawGameTxt = FV_RENDER_INFO_PARAMS.drawGameTxt();
        SHOW_INTEGRATION_TEST_MSG("curStatTxt", curStatTxt, drawGameTxt,
                curStatTxt === drawGameTxt);
    }; // _checkNormStatus

    /**
     * Hotspot/No-op
     * @author DoubleX @since v1.0 @version v1.0
     * @param {String} tag - The test case identifier
     * @param {String} nextPlayer - The next player to be displayed
     */
    const _checkWinStatus = (tag, nextPlayer) => {
        console.info("IntegrationTestCfgBoardW3BoardH3PlayersXO" +
                " _checkWinStatus " + tag);
        const curStatTxt = TXT_CUR_STAT.innerHTML;
        const winnerTxt = FV_RENDER_INFO_PARAMS.winnerTxt(nextPlayer);
        SHOW_INTEGRATION_TEST_MSG("curStatTxt", curStatTxt, winnerTxt,
                curStatTxt === winnerTxt);
    }; // _checkWinStatus

    const _CLICK_CHECK_FNS = {
        click0: { domId: BTN_CLEAR_HIST.id, fn: _checkClick0 },
        click1: { domId: BTN_CLEAR_HIST.id, fn: _checkClick0 },
        click2: { domId: FV_RENDER_SQ_PARAMS.domId(4), fn: _checkClick1 },
        click3: { domId: FV_RENDER_SQ_PARAMS.domId(4), fn: _checkClick1 },
        click4: { domId: FV_RENDER_SQ_PARAMS.domId(0), fn: _checkClick2 },
        click5: { domId: FV_RENDER_SQ_PARAMS.domId(0), fn: _checkClick2 },
        click6: { domId: FV_RENDER_SQ_PARAMS.domId(2), fn: _checkClick3 },
        click7: { domId: FV_RENDER_SQ_PARAMS.domId(2), fn: _checkClick3 },
        click8: { domId: FV_RENDER_SQ_PARAMS.domId(6), fn: _checkClick4 },
        click9: { domId: FV_RENDER_SQ_PARAMS.domId(6), fn: _checkClick4 },
        click10: { domId: FV_RENDER_SQ_PARAMS.domId(3), fn: _checkClick5 },
        click11: { domId: FV_RENDER_SQ_PARAMS.domId(3), fn: _checkClick5 },
        click12: { domId: FV_RENDER_SQ_PARAMS.domId(5), fn: _checkClick6 },
        click13: { domId: FV_RENDER_SQ_PARAMS.domId(5), fn: _checkClick6 },
        click14: { domId: FV_RENDER_SQ_PARAMS.domId(7), fn: _checkClick7 },
        click15: { domId: FV_RENDER_SQ_PARAMS.domId(7), fn: _checkClick7 },
        click16: { domId: FV_RENDER_SQ_PARAMS.domId(1), fn: _checkClick8 },
        click17: { domId: FV_RENDER_SQ_PARAMS.domId(1), fn: _checkClick8 },
        click18: { domId: BTN_TOGGLE_MOVE_SORT_ORD.id, fn: _checkClick16 },
        click19: { domId: BTN_TOGGLE_MOVE_SORT_ORD.id, fn: _checkClick16 },
        click20: { domId: BTN_TOGGLE_MOVE_SORT_ORD.id, fn: _checkClick16 },
        click21: {
            domId: FV_RENDER_MOVES_PARAMS.btnDomId(1),
            fn: _checkClick9
        },
        click22: {
            domId: FV_RENDER_MOVES_PARAMS.btnDomId(1),
            fn: _checkClick9
        },
        click23: { domId: FV_RENDER_SQ_PARAMS.domId(1), fn: _checkClick10 },
        click24: { domId: FV_RENDER_SQ_PARAMS.domId(1), fn: _checkClick10 },
        click25: { domId: FV_RENDER_SQ_PARAMS.domId(0), fn: _checkClick11 },
        click26: { domId: FV_RENDER_SQ_PARAMS.domId(0), fn: _checkClick11 },
        click27: { domId: FV_RENDER_SQ_PARAMS.domId(8), fn: _checkClick12 },
        click28: { domId: FV_RENDER_SQ_PARAMS.domId(8), fn: _checkClick12 },
        click29: { domId: FV_RENDER_SQ_PARAMS.domId(3), fn: _checkClick13 },
        click30: { domId: FV_RENDER_SQ_PARAMS.domId(3), fn: _checkClick13 },
        click31: { domId: FV_RENDER_SQ_PARAMS.domId(5), fn: _checkClick14 },
        click32: { domId: FV_RENDER_SQ_PARAMS.domId(5), fn: _checkClick14 },
        click33: { domId: FV_RENDER_SQ_PARAMS.domId(6), fn: _checkClick15 },
        click34: { domId: FV_RENDER_SQ_PARAMS.domId(6), fn: _checkClick15 },
        click35: { domId: BTN_TOGGLE_MOVE_SORT_ORD.id, fn: _checkClick16 },
        click36: { domId: BTN_TOGGLE_MOVE_SORT_ORD.id, fn: _checkClick16 },
        click37: { domId: BTN_TOGGLE_MOVE_SORT_ORD.id, fn: _checkClick16 },
        click38: { domId: BTN_CLEAR_HIST.id, fn: _checkClick0 },
        click39: { domId: BTN_CLEAR_HIST.id, fn: _checkClick0 },
        click40: { domId: BTN_TOGGLE_MOVE_SORT_ORD.id, fn: _checkClick16 },
        click41: { domId: BTN_TOGGLE_MOVE_SORT_ORD.id, fn: _checkClick16 }
    };
    const _CLICK_IDS = Object.keys(_CLICK_CHECK_FNS);

    console.info("IntegrationTestCfgBoardW3BoardH3PlayersXO Pre");
    EditCfgs({
        boardW: 3,
        boardH: 3,
        players: ["X", "O"],
        tomeks: [],
        blocks: []
    });
    setTimeout(_clickNextDom, _CHECK_DELAY_MS);

}; // IntegrationTestCfgBoardW3BoardH3PlayersXO