/**
 * Hotspot/No-op
 * @author DoubleX @interface @since v1.0 @version v1.0
 */
const IntegrationTest = () => {

    "use strict";

    // Each integration test will change CFG so _CFGS will be the original one
    const _CFGS = Object.assign({}, CFGS), _INTEGRATION_TEST_DELAY = 250;
    //
    const _BTN_CLEAR_HIST = document.getElementById("clearHist");
    const _BTN_TOGGLE_MOVE_SORT_ORD =
            document.getElementById("toggleMoveSortOrd");
    const _TXT_CUR_STAT = document.getElementById("curStat");
    const _FV_RENDER_MOVES_PARAMS =
            FVRenderMovesParams(CFGS.boardW, CFGS.boardH);
    const _FV_RENDER_INFO_PARAMS = FVRenderInfoParams();
    const _FV_RENDER_SQ_PARAMS = FVRenderSqParams();

    /**
     * Hotspot/No-op
     * @author DoubleX @since v1.0 @version v1.0
     * @param {String} tag - The test case identifier
     * @param {} result - The actual test result
     * @param {} expected - The expected test result
     * @param {Boolean} isExpected - The check result
     */
    const _showIntegrationTestMsg = (tag, result, expected, isExpected) => {
        _showIntegrationTestBoolMsg(tag, result, isExpected);
        console.info("expected: " + expected);
    }; // _showIntegrationTestMsg

    /**
     * Hotspot/No-op
     * @author DoubleX @since v1.0 @version v1.0
     * @param {String} tag - The test case identifier
     * @param {} result - The actual test result
     * @param {Boolean} isExpected - The check result
     */
    const _showIntegrationTestBoolMsg = (tag, result, isExpected) => {
        console.info(tag + ": " + result);
        console.info((isExpected ? "Passed" : "Failed") + " " + tag + "!");
        if (isExpected) return;
        console.warn("The stacktrace leading to this failed test:");
        console.trace();
    }; // _showIntegrationTestBoolMsg

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _integrationTestNextCfgs = () => {
        if (_INTEGRATION_TEST_CFGS.length <= 0) {
            console.info("IntegrationTest Post");
            return EditCfgs(_CFGS); // Restores the original configurations
        };
        setTimeout(_INTEGRATION_TEST_CFGS.shift(), _INTEGRATION_TEST_DELAY);
    }; // _integrationTestNextCfgs

    const _INTEGRATION_TEST_CFG_BOARD_W_3_BOARD_H_3_PLAYERS_X_O =
            IntegrationTestCfgBoardW3BoardH3PlayersXO.bind(
            IntegrationTestCfgBoardW3BoardH3PlayersXO, _BTN_CLEAR_HIST,
            _BTN_TOGGLE_MOVE_SORT_ORD, _TXT_CUR_STAT, _FV_RENDER_MOVES_PARAMS,
            _FV_RENDER_INFO_PARAMS, _FV_RENDER_SQ_PARAMS,
            _showIntegrationTestMsg, _showIntegrationTestBoolMsg,
            _integrationTestNextCfgs);
    // Duplicate each cfg to prove that the whole app's idempotent for all cfgs
    const _INTEGRATION_TEST_CFGS = [
        _INTEGRATION_TEST_CFG_BOARD_W_3_BOARD_H_3_PLAYERS_X_O,
        _INTEGRATION_TEST_CFG_BOARD_W_3_BOARD_H_3_PLAYERS_X_O
    ];
    //

    console.info("IntegrationTest Pre");
    _integrationTestNextCfgs();

}; // IntegrationTest