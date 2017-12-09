/**
 * Potential Hotspot/Involutory
 * @author DoubleX @interface @since v1.0 @version v1.0
 * @param {Dom} MOVES - The container for the list of moves made
 * @param {FVRenderDoms} FV_RENDER_DOMS - The seam for actually rendering doms
 * @param {FVRenderMovesParams} FV_RENDER_MOVES_PARAMS - The seam for returning
 *                                                        display contents
 * @param {Function(Number, Number)} ON_GO_TO_MOVE - Dispatches the go to move
 *                                                    event
 * @returns {Object[Function]} The requested API mapping
 */
const FVRenderMoves = (
        MOVES, FV_RENDER_DOMS, FV_RENDER_MOVES_PARAMS, ON_GO_TO_MOVE) => {

    "use strict";

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @interface @since v1.0 @version v1.0
     * @param {Object[Number, Number]} info - The rendering command
     */
    const add = info => {
        const { i, moveNo } = info;
        _enableAllOther(moveNo);
        _hasMoveDom(moveNo) ? _edit(i, moveNo) : _add(_newLiDom(i, moveNo));
    }; // add

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @interface @since v1.0 @version v1.0
     */
    const clear = () => {
        _editDomInnerHTML(MOVES, "");
        add({ i: -1, moveNo: 0 }); // Uses an invalid i to indicate a fake move
    }; // clear

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @interface @since v1.0 @version v1.0
     * @param {Number} moveNo - The current move number
     */
    const delFutures = moveNo => { _futureLiDoms(moveNo).forEach(_delFuture); };

    /**
     * Potential Hotspot/Involutory
     * @author DoubleX @interface @since v1.0 @version v1.0
     */
    const toggleOrd = () => { _reversedLiDoms().forEach(_addLiDom); };

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Number} moveNo - The current move number
     */
    const _enableAllOther = moveNo => {
        Array(MOVES.childElementCount).fill("").forEach(
                _enable.bind(FVRenderMoves, moveNo));
    }; // _enableAllOther

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Number} moveNo - The move number
     * @param {} element - The placeholder argument
     * @param {Number} i - The move number of the move made
     */
    const _enable = (moveNo, element, i) => {
        const btnDom = _btnDom(i);
        if (_isOther(moveNo, btnDom)) _editOther(btnDom);
    }; // _enable

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Number} moveNo - The move number
     * @param {Dom} btnDom - The button of the move made
     * @returns {Boolean} The check result
     */
    const _isOther = (moveNo, btnDom) => btnDom && !_isCur(moveNo, btnDom.id);

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Dom} btnDom - The button of the move made
     */
    const _editOther = btnDom => {
        FV_RENDER_DOMS.setProp(btnDom, "disabled", false);
        _editDomInnerHTML(btnDom,
                FV_RENDER_MOVES_PARAMS.normBtnInnerHTML(btnDom.innerHTML));
    }; // _editOther

    /**
     * Potential Hotspot/Nullipotent
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Number} moveNo - The move number
     * @returns {Boolean} The check result
     */
    const _hasMoveDom = moveNo => _liDom(moveNo) && _btnDom(moveNo);

    /**
     * Potential Hotspot/Nullipotent
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Number} moveNo - The move number
     * @returns {Dom} The requested li dom
     */
    const _liDom = moveNo => _dom(FV_RENDER_MOVES_PARAMS.liDomId(moveNo));

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Number} i - The 1D index of the square corresponding to the move
     * @param {Number} moveNo - The move number
     */
    const _edit = (i, moveNo) => {
        const btnDom = _btnDom(moveNo);
        if (_isCur(moveNo, btnDom.id)) return _editCur(i, moveNo, btnDom);
        _editDomInnerHTML(btnDom, _normMoveTxt(i, moveNo));
    }; // _edit

    /**
     * Potential Hotspot/Nullipotent
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Number} moveNo - The move number
     * @returns {Dom} The requested btn dom
     */
    const _btnDom = moveNo => _dom(FV_RENDER_MOVES_PARAMS.btnDomId(moveNo));

    /**
     * Potential Hotspot/Nullipotent
     * @author DoubleX @since v1.0 @version v1.0
     * @param {String} domId - The id of the dom
     * @returns {Dom} The requested dom
     */
    const _dom = domId => document.getElementById(domId);

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Number} i - The 1D index of the square corresponding to the move
     * @param {Number} moveNo - The move number
     * @returns {Dom} The requested new li dom
     */
    const _newLiDom = (i, moveNo) => {
        // They need not use FVRenderDoms when no doms are rendered immediately
        const liDom = document.createElement("li");
        liDom.id = FV_RENDER_MOVES_PARAMS.liDomId(moveNo);
        liDom.appendChild(_newBtnDom(i, moveNo));
        return liDom;
        //
    }; // _newLiDom

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Number} i - The 1D index of the square corresponding to the move
     * @param {Number} moveNo - The move number
     * @returns {Dom} The requested new btn dom
     */
    const _newBtnDom = (i, moveNo) => {
        // They need not use FVRenderDoms when no doms are rendered immediately
        const btnDom = document.createElement("button");
        btnDom.id = FV_RENDER_MOVES_PARAMS.btnDomId(moveNo);
        btnDom.onclick = _onclick.bind(FVRenderMoves, i, moveNo);
        _editCur(i, moveNo, btnDom);
        return btnDom;
        //
    }; // _newBtnDom

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Number} i - The 1D index of the square corresponding to the move
     * @param {Number} moveNo - The move number
     */
    const _onclick = (i, moveNo) => {
        // Binding ON_GO_TO_MOVE directly would miss its context
        ON_GO_TO_MOVE(i, moveNo);
        //
    }; // _onclick

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Number} i - The 1D index of the square corresponding to the move
     * @param {Number} moveNo - The move number
     * @param {Dom} btnDom - The button of the move made
     */
    const _editCur = (i, moveNo, btnDom) => {
        FV_RENDER_DOMS.setProp(btnDom, "disabled", true);
        _editDomInnerHTML(btnDom, _boldMoveTxt(i, moveNo));
    }; // _editCur

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Number} i - The 1D index of the square corresponding to the move
     * @param {Number} moveNo - The move number
     * @returns {String} The requested text
     */
    const _boldMoveTxt = (i, moveNo) => {
        return FV_RENDER_MOVES_PARAMS.boldTxt(_normMoveTxt(i, moveNo));
    }; // _boldMoveTxt

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Number} i - The 1D index of the square corresponding to the move
     * @param {Number} moveNo - The move number
     * @returns {String} The requested text
     */
    const _normMoveTxt = (i, moveNo) => {
        return moveNo > 0 ? FV_RENDER_MOVES_PARAMS.otherMoveTxt(i, moveNo) :
                FV_RENDER_MOVES_PARAMS.startMoveTxt();
    }; // _normMoveTxt

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Dom} dom - The dom to have its inner html edited
     * @param {String} innerHTML - The new inner html
     */
    const _editDomInnerHTML = (dom, innerHTML) => {
        FV_RENDER_DOMS.setProp(dom, "innerHTML", innerHTML);
    }; // _editDomInnerHTML

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Dom} liDom - The dom representing the move made
     */
    const _add = liDom => {
        if (!_isReversed()) {
            return FV_RENDER_DOMS.callFn(MOVES, "appendChild", [liDom]);
        }
        FV_RENDER_DOMS.callFn(MOVES, "insertBefore", [liDom, MOVES.firstChild]);
    }; // _add

    /**
     * Potential Hotspot/Nullipotent
     * @author DoubleX @since v1.0 @version v1.0
     * @returns {Boolean} The check result
     */
    const _isReversed = () => {
        const firstLiDom = MOVES.firstChild;
        return firstLiDom && !_isCur(0, firstLiDom.id);
    }; // _isReversed

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Number} moveNo - The move number
     * @param {String} domId - The id of the dom to be checked
     * @returns {Boolean} The check result
     */
    const _isCur = (moveNo, domId) => domId.includes(moveNo.toString());

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Dom} liDom - The dom representing the move made
     * @param {Function} fn - The function editing the dom
     */
    const _editLiDom = (liDom, fn) => {
        FV_RENDER_DOMS.callFn(MOVES, fn, [liDom]);
    }; // _editLiDom

    /**
     * Potential Hotspot/Nullipotent
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Number} moveNo - The move number
     * @returns {Array[Dom]} The requested list of li doms
     */
    const _futureLiDoms = moveNo => {
        return _liDoms().filter(_isFuture.bind(FVRenderMoves, moveNo));
    }; // _futureLiDoms

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Number} moveNo - The move number
     * @param {Dom} liDom - The dom representing the move made
     * @returns {Boolean} The check result
     */
    const _isFuture = (moveNo, liDom) => {
        return FV_RENDER_MOVES_PARAMS.liDomNo(liDom.id) > moveNo;
    }; // _isFuture

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Dom} liDom - The dom representing the move made
     */
    const _delFuture = liDom => { _editLiDom(liDom, "removeChild"); };

    /**
     * Potential Hotspot/Nullipotent
     * @author DoubleX @since v1.0 @version v1.0
     * @returns {Array[Dom]} The requested reversed list of li doms
     */
    const _reversedLiDoms = () => _liDoms().reverse();

    /**
     * Potential Hotspot/Nullipotent
     * @author DoubleX @since v1.0 @version v1.0
     * @returns {Array[Dom]} The requested list of li doms
     */
    const _liDoms = () => [].slice.call(MOVES.children);

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Dom} liDom - The dom representing the move made
     */
    const _addLiDom = liDom => { _editLiDom(liDom, "appendChild"); };

    return { add, clear, delFutures, toggleOrd };

}; // FVRenderMoves