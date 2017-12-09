/**
 * No-op
 * @author DoubleX @interface @since v1.0 @version v1.0
 * @param {Number} BOARD_W - The board width
 * @param {Number} BOARD_H - The board height
 * @param {Number} SQS_NO - The number of squares
 * @param {Array[Object[Number, Number]]} TOMEKS - The list of tomeks
 * @param {Array[Object[Number, Number]]} BLOCKS - The list of blocks
 * @param {Function(String, , , Boolean)} SHOW_UNIT_TEST_MSG - Shows the unit
 *                                                             test results
 * @param {Function(String, , Boolean)} SHOW_UNIT_TEST_BOOL_MSG - Shows the unit
 *                                                                test results
 */
const UnitTestFV = (BOARD_W, BOARD_H, SQS_NO, TOMEKS, BLOCKS,
        SHOW_UNIT_TEST_MSG, SHOW_UNIT_TEST_BOOL_MSG) => {

    "use strict";

    const _FV_RENDER_MOVES_PARAMS = FVRenderMovesParams(BOARD_W, BOARD_H);
    const _MOVES = document.getElementById("moves");

    /**
     * Hotspot/No-op/Stub
     * @author DoubleX @interface @since v1.0 @version v1.0
     * @param {Function(String, String, Function, Array)} CALLBACK -
     *         The function checking the API calls
     * @returns {Object[Function]} The requested API mapping
     */
    const FVRenderDomsStub = CALLBACK => {

        /**
         * Potential Hotspot
         * @author DoubleX @interface @since v1.0 @version v1.0
         * @param {Object} dom - The dom to be rendered
         * @param {Function} fn - The function for rendering the dom
         * @param {Array} args - The list of arguments for rendering the dom
         */
        const callFn = (dom, fn, args) => {
            // Just checking against the dom id's enough for dom arguments
            CALLBACK("callFn", dom.id, fn, args.map(arg => arg.id || arg));
            //
        }; // callFn

        /**
         * Potential Hotspot/Idempotent
         * @author DoubleX @interface @since v1.0 @version v1.0
         * @param {Object} dom - The dom to be rendered
         * @param {String} prop - The property of the dom to be rendered
         * @param {String} val - The value of the property to be rendered
         */
        const setProp = (dom, prop, val) => {
            CALLBACK("setProp", dom.id, prop, val);
        }; // setProp

        return { callFn, setProp };

    }; // FVRenderDomsStub
    //

    /**
     * No-op/Placeholder
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Number} i - The 1D index of the square of the moves
     * @param {Number} moveNo - The move number
     */
    const _onGoToMoveStub = (i, moveNo) => {};

    /**
     * No-op
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _unitTestAll = () => {
        console.info("UnitTestFV _unitTestAll");
        UnitTestFVRenderBoard(SQS_NO, SHOW_UNIT_TEST_MSG);
        UnitTestFVRenderInfo(SHOW_UNIT_TEST_MSG, _MOVES, _onGoToMoveStub,
                FVRenderDomsStub, _FV_RENDER_MOVES_PARAMS);
        UnitTestFVRenderMoves(SHOW_UNIT_TEST_MSG, _MOVES, _onGoToMoveStub,
                FVRenderDomsStub, _FV_RENDER_MOVES_PARAMS);
        UnitTestFVRenderSq(TOMEKS, BLOCKS, SHOW_UNIT_TEST_MSG,
                SHOW_UNIT_TEST_BOOL_MSG, FVRenderDomsStub);
    }; // _unitTestAll

    console.info("UnitTestFV Pre");
    // Duplicate the tests to prove that those functions are indeed pure
    _unitTestAll();
    _unitTestAll();
    //
    console.info("UnitTestFV Post");

}; // UnitTestFM
