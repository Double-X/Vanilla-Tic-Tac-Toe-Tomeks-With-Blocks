/**
 * Potential Hotspot/Idempotent
 * @author DoubleX @interface @since v1.0 @version v1.0
 * @param {FVRenderDoms} FV_RENDER_DOMS - The seam for actually rendering doms
 * @param {FVRenderSqParams} FV_RENDER_SQ_PARAMS - The seam for returning
 *                                                  display contents
 * @param {Dom} ROW - The square placeholder for displaying a 2D board
 * @param {Function()} ONCLICK - Dispatches the square click event
 * @param {Number} I - The 1D index of the square
 * @param {String} CONTENT - The intial square content to be displayed
 * @returns {Object[Function]} The requested API mapping
 */
const FVRenderSq = (
        FV_RENDER_DOMS, FV_RENDER_SQ_PARAMS, ROW, ONCLICK, I, CONTENT) => {

    "use strict";

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @interface @since v1.0 @version v1.0
     */
    const clear = () => { render(CONTENT); };

    /**
     * Potential Hotspot/Nullipotent
     * @author DoubleX @interface @since v1.0 @version v1.0
     * @returns {Boolean} The check result
     */
    const isFilled = () => {
        // A player must be a nonempty string and only they might be marked
        return _DOM.innerHTML.length > 0;
        //
    }; // isFilled

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @interface @since v1.0 @version v1.0
     */
    const mark = () => {
        _editInnerHTML(FV_RENDER_SQ_PARAMS.markedInnerHTML(_DOM.innerHTML));
    }; // mark

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @interface @since v1.0 @version v1.0
     * @param {String} player - The player as the content to be rendered
     */
    const render = player => {
        // A marked square shouldn't be able to be rendered again
        _editInnerHTML(
                FV_RENDER_SQ_PARAMS.isPlayerSq(CONTENT) ? player : CONTENT);
        //
    }; // render

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @since v1.0 @version v1.0
     * @param {String} innerHTML - The original inner html
     */
    const _editInnerHTML = innerHTML => {
        FV_RENDER_DOMS.setProp(_DOM, "innerHTML", innerHTML);
    }; // _editInnerHTML

    /**
     * Potential Hotspot/Nullipotent
     * @author DoubleX @since v1.0 @version v1.0
     * @returns {Dom} The requested dom representing the square
     */
    const _dom = () => _oldDom() || _newDom();

    /**
     * Potential Hotspot/Nullipotent
     * @author DoubleX @since v1.0 @version v1.0
     * @returns {Dom} The requested old dom representing the square
     */
    const _oldDom = () => document.getElementById(FV_RENDER_SQ_PARAMS.domId(I));

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @since v1.0 @version v1.0
     * @returns {Dom} The requested new dom representing the square
     */
    const _newDom = () => {
        const dom = document.createElement("button");
        dom.classList.add("square");
        dom.id = FV_RENDER_SQ_PARAMS.domId(I), dom.innerHTML = CONTENT;
        dom.onclick = _onclick;
        FV_RENDER_DOMS.callFn(ROW, "appendChild", [dom]);
        return dom;
    }; // _newDom

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @since v1.0 @version v1.0
     */
    const _onclick = () => { if (!isFilled()) ONCLICK(); };

    // It'll create a new dom upon game start unless it already has one
    const _DOM = _dom();
    //

    return { clear, isFilled, mark, render };

}; // FVRenderSq