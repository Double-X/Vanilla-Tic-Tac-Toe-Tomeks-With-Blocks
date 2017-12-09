const FMIsDraw = (WINNING_LS, FM_IS_TOMEK, SQS) => {
    return WINNING_LS.every(winningL => {
        const filledSq = SQS[winningL.find(i => SQS[i])];
        return filledSq && winningL.some(i =>
                SQS[i] && SQS[i] !== filledSq && !FM_IS_TOMEK(i));
    });
}, FMIsSpecialSq = (BOARD_W, BOARD_H, SPECIAL_SQS, I) => {
    return SPECIAL_SQS.some(sq => sq.rowNo === Math.floor(I / BOARD_H) + 1 &&
            sq.colNo === I % BOARD_W + 1);
}, FMPlayer = (PLAYERS, PLAYER_NO, MOVE_NO) => PLAYERS[MOVE_NO % PLAYER_NO];
const FMRenderCmds = FM_PLAYER => {
    const updateSqBoardCmds = (hasWinner, i, moveNo, winningSqs) => {
        if (!hasWinner) return _sqCmd(i, moveNo);
        return Object.assign({}, _sqCmd(i, moveNo), { winningSqs });
    }, updateSqInfoCmds = (i, moveNo, isDraw, hasWinner, winner) => {
        return Object.assign({}, goToMoveInfoCmds(i, moveNo, isDraw, hasWinner,
                winner), { delFutures: moveNo });
    }, goToMoveBoardCmds = (hasWinner, curSqs, winningSqs) => {
        if (!hasWinner) return { sqs: curSqs };
        return Object.assign({}, { sqs: curSqs }, { winningSqs });
    }, goToMoveInfoCmds = (i, moveNo, isDraw, hasWinner, winner) => {
        return Object.assign({}, { moveInfo: { i, moveNo } },
                _goToMoveInfoCmd(isDraw, hasWinner, winner, moveNo));
    }, clearHistBoardCmds = () => { return { isClear: true }; };
    const clearHistInfoCmds = (isDraw) => {
        const cmds = Object.assign({}, clearHistBoardCmds(), _playerCmd(0));
        return isDraw ? Object.assign({}, cmds, { isDraw: true }) : cmds;
    }, _sqCmd = (i, moveNo) => {
        return { sq: Object.assign({}, { i }, _playerCmd(moveNo - 1)) };
    }, _goToMoveInfoCmd = (isDraw, hasWinner, winner, moveNo) => {
        if (isDraw) return { isDraw: true };
        return hasWinner ? { winner } : _playerCmd(moveNo);
    }, _playerCmd = moveNo => { return { player: FM_PLAYER(moveNo) }; };
    return {
        updateSqBoardCmds,
        updateSqInfoCmds,
        goToMoveBoardCmds,
        goToMoveInfoCmds,
        clearHistBoardCmds,
        clearHistInfoCmds
    };
}, FMSqs = FM_PLAYER => {
    const cur = (i, moveNo, hist) => {
        const updatedSqs = last(moveNo, hist);
        updatedSqs[i] = FM_PLAYER(moveNo - 1);
        return updatedSqs;
    }, last = (moveNo, hist) => hist[moveNo - 1].slice();
    return { cur, last };
}, FMWinner = (WINNING_LS, FM_IS_TOMEK, SQS) => {
    const _winningSqs = () => _winningLs().reduce(_flatten, []).filter(_isUniq);
    const _winner = () => {
        const winningLs = _winningLs();
        return winningLs.length > 0 ? _winningSq(winningLs[0]) : "";
    }, _winningLs = () => WINNING_LS.filter(_isWinningL);
    const _isWinningL = winningL => {
        const sq = _winningSq(winningL);
        return sq && winningL.every(i => sq === SQS[i] || FM_IS_TOMEK(i));
    }, _winningSq = winningL => SQS[winningL.find(i => SQS[i])];
    const _flatten = (accumArr, arr) => accumArr.concat(arr);
    const _isUniq = (element, i, self) => self.indexOf(element) === i;
    return { winningSqs: _winningSqs(), winner: _winner() };
}, FMWinningLs = (BOARD_W, BOARD_H, FM_IS_TOMEK, FM_IS_BLOCK) => {
    const _winningRows = () => _winningLs(BOARD_H, _winningRow);
    const _winningRow = (element, i) => _winningL(BOARD_W, _flatRowIndex, i);
    const _flatRowIndex = (index, e, i) => index * BOARD_W + i;
    const _winningCols = () => _winningLs(BOARD_W, _winningCol);
    const _winningCol = (element, i) => _winningL(BOARD_H, _flatColIndex, i);
    const  _flatColIndex = (index, e, i) => index + BOARD_W * i;
    const _winningDiags = () => BOARD_W === BOARD_H ? _twoWinningDiags() : [];
    const _twoWinningDiags = () => _winningLs(2, _winningDiag);
    const _winningDiag = (element, i) => _winningL(BOARD_W, _flatDiagIndex, i);
    const _flatDiagIndex = (index, e, i) => {
        return (BOARD_W - 1) * index + i * (1 - 2 * index) + BOARD_W * i;
    }, _winningL = (lNo, lFn, i) => {
        return Array(lNo).fill(-1).map(lFn.bind(FMWinningLs, i));
    }, _winningLs = (lNo, lFn) => Array(lNo).fill(-1).map(lFn);
    return _winningRows().concat(_winningCols()).concat(_winningDiags()).filter(
            winningL => !winningL.some(FM_IS_BLOCK)).filter(
            winningL => !winningL.every(FM_IS_TOMEK));
}, FVRenderInfoParams = () => {
    const drawGameTxt = () => "Draw game", nextPlayerTxt = player =>
            "Next player: " + player, winnerTxt = winner => "Winner: " + winner;
    return { drawGameTxt, nextPlayerTxt, winnerTxt };
}, FVRenderMovesParams = (BOARD_W, BOARD_H) => {
    const liDomId = moveNo => "li" + moveNo;
    const btnDomId = moveNo => "btn" + moveNo, normBtnInnerHTML = innerHTML => {
        return innerHTML.replace(/<b>/gi, "").replace(/<\/b>/gi, "");
    }, boldTxt = txt => "<b>" + txt + "</b>";
    const otherMoveTxt = (i, moveNo) => "Go to move " + moveNo + _moveCoor(i);
    const startMoveTxt = () => "Go to game start", liDomNo = liDomId =>
            +liDomId.replace("li", ""), _moveCoor = i => "(" + (i % BOARD_W +
                    1) + ", " + (Math.floor(i / BOARD_H) + 1) + ")";
    return {
        liDomId,
        btnDomId,
        normBtnInnerHTML,
        boldTxt,
        otherMoveTxt,
        startMoveTxt,
        liDomNo
    };
}, FVRenderSqParams = (TOMEKS, BLOCKS) => {
    const domId = i => "sq" + i, isBlock = content => content.includes(
            "<u>B</u>"), isPlayerSq = content => !isBlock(content) && !isTomek(
            content), isTomek = content => content.includes("<i>T</i>");
    const sqContent = (rowIndex, colIndex) => {
        if (_isSpecialSqs(rowIndex, colIndex, TOMEKS)) return "<i>T</i>";
        if (_isSpecialSqs(rowIndex, colIndex, BLOCKS)) return "<u>B</u>";
        return "";
    }, markedInnerHTML = innerHTML => "<mark>" + innerHTML + "</mark>";
    const _isSpecialSqs = (rowIndex, colIndex, specialSqs) => {
        return specialSqs.some(
                sq => sq.rowNo === rowIndex + 1 && sq.colNo === colIndex + 1);
    };
    return { domId, isBlock, isPlayerSq, isTomek, sqContent, markedInnerHTML };
}, FVRenderBoard = SQS => {
    const _render = (cmds, cmd) => _CMDS[cmd](cmds[cmd]), _CMDS = {
        isClear: () => SQS.forEach(sq => sq.clear()),
        sq: sqInfo => SQS[sqInfo.i].render(sqInfo.player),
        sqs: sqs => sqs.forEach((player, i) => SQS[i].render(player)),
        winningSqs: winningSqs => SQS.forEach(
                (sq, i) => { if (winningSqs.includes(i)) sq.mark(); })
    };
    return cmds => Object.keys(cmds).forEach(_render.bind(FVRenderBoard, cmds));
}, FVRenderDoms = () => {
    const setProp = (dom, prop, val) => {
        if (dom[prop] !== val) dom[prop] = val;
    }, callFn = (dom, fn, args) => dom[fn].apply(dom, args);
    return { callFn, setProp };
}, FVRenderInfo = (BTN_CLEAR_HIST, BTN_TOGGLE_MOVE_SORT_ORD, TXT_CUR_STAT,
        FV_RENDER_DOMS, FVRenderMoves, FV_RENDER_INFO_PARAMS, ON_GO_TO_MOVE,
        ON_CLEAR_HIST) => {
    const _FV_RENDER_MOVES = FVRenderMoves(ON_GO_TO_MOVE), _CMDS = {
        delFutures: _FV_RENDER_MOVES.delFutures,
        isClear: () => {
            _FV_RENDER_MOVES.clear();
            _setBtnDisabled(true);
        },
        isDraw: () => _renderCurStat(FV_RENDER_INFO_PARAMS.drawGameTxt()),
        moveInfo: info => {
            _setBtnDisabled(false);
            _FV_RENDER_MOVES.add(info);
        },
        player: player =>
                _renderCurStat(FV_RENDER_INFO_PARAMS.nextPlayerTxt(player)),
        winner: winner =>
                _renderCurStat(FV_RENDER_INFO_PARAMS.winnerTxt(winner))
    }, _render = (cmds, cmd) => _CMDS[cmd](cmds[cmd]);
    const _setBtnDisabled = disabled => {
        FV_RENDER_DOMS.setProp(BTN_CLEAR_HIST, "disabled", disabled);
        FV_RENDER_DOMS.setProp(BTN_TOGGLE_MOVE_SORT_ORD, "disabled", disabled);
    }, _renderCurStat = txt =>
            FV_RENDER_DOMS.setProp(TXT_CUR_STAT, "innerHTML", txt);
    BTN_CLEAR_HIST.onclick = ON_CLEAR_HIST;
    BTN_TOGGLE_MOVE_SORT_ORD.onclick = _FV_RENDER_MOVES.toggleOrd;
    return cmds => Object.keys(cmds).forEach(_render.bind(FVRenderInfo, cmds));
}, FVRenderMoves = (
        MOVES, FV_RENDER_DOMS, FV_RENDER_MOVES_PARAMS, ON_GO_TO_MOVE) => {
    const add = info => {
        const { i, moveNo } = info;
        Array(MOVES.childElementCount).fill("").forEach((element, i) => {
            const btnDom = _btnDom(i);
            if (!btnDom || _isCur(moveNo, btnDom.id)) return;
            FV_RENDER_DOMS.setProp(btnDom, "disabled", false);
            FV_RENDER_DOMS.setProp(btnDom, "innerHTML",
                    FV_RENDER_MOVES_PARAMS.normBtnInnerHTML(btnDom.innerHTML));
        });
        if (!_hasMoveDom(moveNo)) return _add(_newLiDom(i, moveNo));
        const btnDom = _btnDom(moveNo);
        if (_isCur(moveNo, btnDom.id)) return _editCur(i, moveNo, btnDom);
        FV_RENDER_DOMS.setProp(btnDom, "innerHTML", _normMoveTxt(i, moveNo));
    }, clear = () => {
        FV_RENDER_DOMS.setProp(MOVES, "innerHTML", "");
        add({ i: -1, moveNo: 0 });
    }, delFutures = moveNo => {
        _liDoms().filter(liDom => {
            return FV_RENDER_MOVES_PARAMS.liDomNo(liDom.id) > moveNo;
        }).forEach(_delFuture);
    }, toggleOrd = () => _liDoms().reverse().forEach(_addLiDom);
    const _hasMoveDom = moveNo => _liDom(moveNo) && _btnDom(moveNo);
    const _btnDom = moveNo => _dom(FV_RENDER_MOVES_PARAMS.btnDomId(moveNo));
    const _liDom = moveNo => _dom(FV_RENDER_MOVES_PARAMS.liDomId(moveNo));
    const _dom = domId => document.getElementById(domId);
    const _newLiDom = (i, moveNo) => {
        const liDom = document.createElement("li");
        liDom.id = FV_RENDER_MOVES_PARAMS.liDomId(moveNo);
        const btnDom = document.createElement("button");
        btnDom.id = FV_RENDER_MOVES_PARAMS.btnDomId(moveNo);
        btnDom.onclick = () => ON_GO_TO_MOVE(i, moveNo);
        _editCur(i, moveNo, btnDom);
        liDom.appendChild(btnDom);
        return liDom;
    }, _add = liDom => {
        const firstLiDom = MOVES.firstChild;
        if (!firstLiDom || _isCur(0, firstLiDom.id)) {
            return FV_RENDER_DOMS.callFn(MOVES, "appendChild", [liDom]);
        }
        FV_RENDER_DOMS.callFn(MOVES, "insertBefore", [liDom, firstLiDom]);
    }, _isCur = (moveNo, domId) => domId.includes(moveNo.toString());
    const _editCur = (i, moveNo, btnDom) => {
        FV_RENDER_DOMS.setProp(btnDom, "disabled", true);
        FV_RENDER_DOMS.setProp(btnDom, "innerHTML",
                FV_RENDER_MOVES_PARAMS.boldTxt(_normMoveTxt(i, moveNo)));
    }, _normMoveTxt = (i, moveNo) => {
        return moveNo > 0 ? FV_RENDER_MOVES_PARAMS.otherMoveTxt(i, moveNo) :
                FV_RENDER_MOVES_PARAMS.startMoveTxt();
    }, _delFuture = liDom => _editLiDom(liDom, "removeChild");
    const _liDoms = () => [].slice.call(MOVES.children);
    const _addLiDom = liDom => _editLiDom(liDom, "appendChild");
    const _editLiDom = (liDom, fn) => FV_RENDER_DOMS.callFn(MOVES, fn, [liDom]);
    return { add, clear, delFutures, toggleOrd };
}, FVRenderSq = (
        FV_RENDER_DOMS, FV_RENDER_SQ_PARAMS, ROW, ONCLICK, I, CONTENT) => {
    const clear = () => render(CONTENT), _newDom = () => {
        const dom = document.createElement("button");
        dom.classList.add("square");
        dom.id = FV_RENDER_SQ_PARAMS.domId(I), dom.innerHTML = CONTENT;
        dom.onclick = () => { if (!isFilled()) ONCLICK(); };
        FV_RENDER_DOMS.callFn(ROW, "appendChild", [dom]);
        return dom;
    }, isFilled = () => _DOM.innerHTML.length > 0, mark = () => {
        _editInnerHTML(FV_RENDER_SQ_PARAMS.markedInnerHTML(_DOM.innerHTML));
    }, render = player => {
        _editInnerHTML(
                FV_RENDER_SQ_PARAMS.isPlayerSq(CONTENT) ? player : CONTENT);
    }, _editInnerHTML = innerHTML => {
        FV_RENDER_DOMS.setProp(_DOM, "innerHTML", innerHTML);
    }, _oldDom = () => document.getElementById(FV_RENDER_SQ_PARAMS.domId(I));
    const _DOM = _oldDom() || _newDom();
    return { clear, isFilled, mark, render };
}, FVRenderSqs = (BOARD, BOARD_W, BOARD_H, TOMEK_NO, BLOCK_NO,
        FV_RENDER_DOMS, FV_RENDER_SQ_PARAMS, FVRenderSq, ONCLICK) => {
    const _accumRow = (sqs, element, rowIndex) => sqs.concat(_row(rowIndex));
    const _row = rowIndex => Array(BOARD_W).fill("").reduce(_accumSq.bind(
            FVRenderSqs, rowIndex, _rowDom(rowIndex)), []);
    const _rowDom = rowIndex => _oldRowDom(rowIndex) || _newRowDom(rowIndex);
    const _oldRowDom = rowIndex => document.getElementById("row" + rowIndex);
    const _newRowDom = rowIndex => {
        const rowDom = document.createElement("div");
        rowDom.id = "row" + rowIndex;
        FV_RENDER_DOMS.callFn(BOARD, "appendChild", [rowDom]);
        return rowDom;
    }, _accumSq = (rowIndex, rowDom, row, element, colIndex) => {
        return row.concat([_sq(rowDom, rowIndex, colIndex)]);
    }, _sq = (rowDom, rowIndex, colIndex) => {
        const i = rowIndex * BOARD_W + colIndex;
        return FVRenderSq(rowDom, () => ONCLICK(i, _SQS.filter(
                sq => sq.isFilled()).length + 1 - TOMEK_NO - BLOCK_NO), i,
                FV_RENDER_SQ_PARAMS.sqContent(rowIndex, colIndex));
    }, _SQS = Array(BOARD_H).fill("").reduce(_accumRow, []);
    return _SQS;
};
class OCGame {
    constructor(
            omStates, FVRenderBoard, FVRenderInfo, FVRenderSqs, FVRenderSq) {
        this._FV_RENDER_BOARD = FVRenderBoard(
                FVRenderSqs(FVRenderSq, this.onUpdateSq.bind(this)));
        this._FV_RENDER_INFO = FVRenderInfo(
                this.onGoToMove.bind(this), this.onClearHist.bind(this));
        this._OM_STATES = omStates, this.render = ((boardCmds, infoCmds) => {
            this._FV_RENDER_BOARD(boardCmds);
            this._FV_RENDER_INFO(infoCmds);
        }).bind(this);
    };
    onUpdateSq(i, moveNo) {
        this._OM_STATES.onUpdateSq(i, moveNo, this.render);
    };
    onGoToMove(i, moveNo) {
        this._OM_STATES.onGoToMove(i, moveNo, this.render);
    };
    onClearHist() { this._OM_STATES.onClearHist(this.render); };
};
class OMStates {
    constructor(sqsNo, FMIsDraw, FMRenderCmds, FMSqs, FMWinner) {
        this._FM_IS_DRAW = FMIsDraw, this._FM_RENDER_CMDS = FMRenderCmds;
        this._FM_SQS = FMSqs, this._FM_WINNER = FMWinner;
        this._hist = [Array(sqsNo).fill("")];
        this._isDraw = false, this._winner = "";
    };
    onUpdateSq(i, moveNo, callback) {
        if(!this._canUpdateSq(i, moveNo)) return;
        const curSqs = this._FM_SQS.cur(i, moveNo, this._hist);
        const { winningSqs, winner } = this._winnerInfo(curSqs);
        if (this._winner.length <= 0) this._isDraw = this._FM_IS_DRAW(curSqs);
        if (!this._isDraw) this._winner = winner;
        this._hist.length = moveNo, this._hist[moveNo] = curSqs;
        const hasWinner = this._winner.length > 0;
        callback(this._FM_RENDER_CMDS.updateSqBoardCmds(
                hasWinner, i, moveNo, winningSqs),
                this._FM_RENDER_CMDS.updateSqInfoCmds(i, moveNo, this._isDraw,
                        hasWinner, this._winner));
    };
    onGoToMove(i, moveNo, callback) {
        const curSqs = this._FM_SQS.last(moveNo + 1, this._hist);
        const { winningSqs, winner } = this._winnerInfo(curSqs);
        if (this._winner.length <= 0) this._isDraw = this._FM_IS_DRAW(curSqs);
        if (!this._isDraw) this._winner = winner;
        const hasWinner = this._winner.length > 0;
        callback(this._FM_RENDER_CMDS.goToMoveBoardCmds(
                hasWinner, curSqs, winningSqs),
                this._FM_RENDER_CMDS.goToMoveInfoCmds(
                        i, moveNo, this._isDraw, hasWinner, this._winner));
    };
    onClearHist(callback) {
        const initSqs = this._hist[0];
        this._hist = [Array(initSqs.length).fill("")];
        this._isDraw = this._FM_IS_DRAW(initSqs), this._winner = "";
        callback(this._FM_RENDER_CMDS.clearHistBoardCmds(),
                this._FM_RENDER_CMDS.clearHistInfoCmds(this._isDraw));
    };
    _canUpdateSq(i, moveNo) {
        return !this._isDraw && this._winner.length <= 0 &&
                this._FM_SQS.last(moveNo, this._hist)[i].length <= 0;
    };
    _winnerInfo(curSqs) {
        if (this._isDraw) return { winningSqs: [], winner: "" };
        return this._FM_WINNER(curSqs);
    };
};
const CFGS = { boardW: 3, boardH: 3, players: ["X", "O"], tomeks: [
    { rowNo: 1, colNo: 1 },
    { rowNo: 1, colNo: 2 },
    { rowNo: 1, colNo: 3 }
], blocks: [] }, EditCfgs = cfgs => {
    const _isCfgChanged = () => {
        if (_isBoardWHChanged() || _isPlayersChanged()) return true;
        if (_isSpecialSqsChanged(cfgs.tomeks, CFGS.tomeks)) return true;
        return _isSpecialSqsChanged(cfgs.blocks, CFGS.blocks);
    }, _isBoardWHChanged = () => {
        return cfgs.boardW !== CFGS.boardW || cfgs.boardH !== CFGS.boardH;
    }, _isPlayersChanged = () => {
        const newPlayers = cfgs.players, oldPlayers = CFGS.players;
        if (newPlayers.length !== oldPlayers.length) return true;
        return newPlayers.some(_isDiffPlayer.bind(EditCfgs, oldPlayers));
    }, _isDiffPlayer = (oldPlayers, player, i) => player !== oldPlayers[i];
    const _isSpecialSqsChanged = (newSpecialSqs, oldSpecialSqs) => {
        if (newSpecialSqs.length !== oldSpecialSqs.length) return true;
        return newSpecialSqs.every(newSpecialSq => {
            return oldSpecialSqs.some(oldSpecialSq => {
                return newSpecialSq.rowNo === oldSpecialSq.rowNo &&
                    newSpecialSq.colNo === oldSpecialSq.colNo;
            });
        });
    };
    if (!_isCfgChanged()) return;
    Object.keys(cfgs).forEach(cfg => CFGS[cfg] = cfgs[cfg]);
    document.getElementById("board").innerHTML = "";
    CompositionRoot(CFGS)();
}, CompositionRoot = cfgs => {
    const _BOARD = document.getElementById("board"), _MOVES = document.
            getElementById("moves"), _BTN_CLEAR_HIST = document.getElementById(
            "clearHist"), _BTN_TOGGLE_MOVE_SORT_ORD = document.getElementById(
            "toggleMoveSortOrd"), _TXT_CUR_STAT = document.getElementById(
            "curStat"), _PLAYERS = cfgs.players;
    const _BOARD_W = cfgs.boardW, _BOARD_H = cfgs.boardH;
    const _TOMEKS = cfgs.tomeks.slice(), _BLOCKS = cfgs.blocks.slice();
    [_TOMEKS, _BLOCKS].forEach(specialSqs => {
        specialSqs.slice().forEach(specialSq => {
            if (specialSq.rowNo <= 0 || specialSq.rowNo > _BOARD_H &&
                    specialSq.colNo <= 0 || specialSq.colNo > _BOARD_W) {
                specialSqs.splice(specialSqs.indexOf(specialSq), 1);
            }
        });
    });
    const _FMIsSpecialSq = FMIsSpecialSq.bind(FMIsSpecialSq, _BOARD_W,
            _BOARD_H), _FM_IS_TOMEK = _FMIsSpecialSq.bind(FMIsSpecialSq,
            _TOMEKS), _FM_IS_BLOCK = _FMIsSpecialSq.bind(FMIsSpecialSq,
            _BLOCKS), _WINNING_LS =
            FMWinningLs(_BOARD_W, _BOARD_H, _FM_IS_TOMEK, _FM_IS_BLOCK);
    const _FM_IS_DRAW = FMIsDraw.bind(FMIsDraw, _WINNING_LS, _FM_IS_TOMEK);
    const _FM_PLAYER = FMPlayer.bind(FMPlayer, _PLAYERS, _PLAYERS.length);
    const _FM_RENDER_CMDS = FMRenderCmds(_FM_PLAYER), _FM_SQS = FMSqs(
            _FM_PLAYER), _FM_WINNER = FMWinner.bind(FMWinner, _WINNING_LS,
            _FM_IS_TOMEK), _FV_RENDER_DOMS = FVRenderDoms();
    const _FV_RENDER_MOVES_PARAMS = FVRenderMovesParams(_BOARD_W, _BOARD_H);
    const _FVRenderMoves = FVRenderMoves.bind(
            FVRenderMoves, _MOVES, _FV_RENDER_DOMS, _FV_RENDER_MOVES_PARAMS);
    const _FVRenderInfo = FVRenderInfo.bind(FVRenderInfo, _BTN_CLEAR_HIST,
            _BTN_TOGGLE_MOVE_SORT_ORD, _TXT_CUR_STAT, _FV_RENDER_DOMS,
            _FVRenderMoves, FVRenderInfoParams()), _FV_RENDER_SQ_PARAMS =
            FVRenderSqParams(_TOMEKS, _BLOCKS), _FVRenderSq =
            FVRenderSq.bind(FVRenderSq, _FV_RENDER_DOMS, _FV_RENDER_SQ_PARAMS);
    const _FVRenderSqs = FVRenderSqs.bind(FVRenderSqs, _BOARD, _BOARD_W,
            _BOARD_H, _TOMEKS.length, _BLOCKS.length, _FV_RENDER_DOMS,
            _FV_RENDER_SQ_PARAMS), _OM_STATES = new OMStates(_BOARD_W *
            _BOARD_H, _FM_IS_DRAW, _FM_RENDER_CMDS, _FM_SQS, _FM_WINNER);
    const _OC_GAME = new OCGame(_OM_STATES, FVRenderBoard, _FVRenderInfo,
            _FVRenderSqs, _FVRenderSq);
    document.getElementById("players").innerHTML = "Players: " + _PLAYERS;
    return _OC_GAME.onClearHist.bind(_OC_GAME);
};
window.onload = CompositionRoot(CFGS);