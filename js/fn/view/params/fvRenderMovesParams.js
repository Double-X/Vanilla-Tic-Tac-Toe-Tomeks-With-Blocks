/**
 * Potential Hotspot/Pure function
 * @author DoubleX @interface @since v1.0 @version v1.0
 * @param {Number} BOARD_W - The board width
 * @param {Number} BOARD_H - The board height
 * @returns {Object[Function]} The requested API mapping
 */
const FVRenderMovesParams = (BOARD_W, BOARD_H) => {

    "use strict";

    const _BTN_DOM_ID_PRE = "btn", _LI_DOM_ID_PRE = "li";
    const _MOVE_DESC_PRE = "Go to move ", _START_MOVE_DESC = "Go to game start";
    const liDomId = moveNo => _LI_DOM_ID_PRE + moveNo;
    const btnDomId = moveNo => _BTN_DOM_ID_PRE + moveNo;

    /**
     * Potential Hotspot/Pure function
     * @author DoubleX @interface @since v1.0 @version v1.0
     * @param {String} innerHTML - The original inner HTML
     * @returns {String} The requested inner html
     */
    const normBtnInnerHTML = innerHTML => {
        return innerHTML.replace(/<b>/gi, "").replace(/<\/b>/gi, "");
    }; // notmBtnInnerHTML

    /**
     * Potential Hotspot/Pure function
     * @author DoubleX @interface @since v1.0 @version v1.0
     * @param {String} txt - The original text
     * @returns {String} The requested text
     */
    const boldTxt = txt => "<b>" + txt + "</b>";

    /**
     * Potential Hotspot/Pure function
     * @author DoubleX @interface @since v1.0 @version v1.0
     * @param {Number} i - The 1D index of the square of the move
     * @param {Number} moveNo - The number of the move
     * @returns {String} The requested text
     */
    const otherMoveTxt = (i, moveNo) => _MOVE_DESC_PRE + moveNo + _moveCoor(i);

    /**
     * Potential Hotspot/Pure function
     * @author DoubleX @interface @since v1.0 @version v1.0
     * @returns {String} The requested text
     */
    const startMoveTxt = () => _START_MOVE_DESC;

    /**
     * Potential Hotspot/Pure function
     * @author DoubleX @interface @since v1.0 @version v1.0
     * @param {String} liDomId - The id of the li dom
     * @returns {String} The requested li dom number
     */
    const liDomNo = liDomId => +liDomId.replace(_LI_DOM_ID_PRE, "");

    /**
     * Potential Hotspot/Pure function
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Number} i - The 1D index of the square of the move
     * @returns {String} The requested move coordinates
     */
    const _moveCoor = i => "(" + _moveXCoor(i) + ", " + _moveYCoor(i) + ")";

    /**
     * Potential Hotspot/Pure function
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Number} i - The 1D index of the square of the move
     * @returns {String} The requested move x coordinate
     */
    const _moveXCoor = i => i % BOARD_W + 1;

    /**
     * Potential Hotspot/Pure function
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Number} i - The 1D index of the square of the move
     * @returns {String} The requested move y coordinate
     */
    const _moveYCoor = i => Math.floor(i / BOARD_H) + 1;

    return {
        liDomId,
        btnDomId,
        normBtnInnerHTML,
        boldTxt,
        otherMoveTxt,
        startMoveTxt,
        liDomNo
    };

}; // FVRenderMovesParams