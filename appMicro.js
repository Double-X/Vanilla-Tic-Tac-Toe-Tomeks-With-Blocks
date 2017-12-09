const FVRenderInfoParams = () => {
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
}, CFGS = { boardW: 3, boardH: 3, players: ["X", "O"], tomeks: [
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
    Game(CFGS.boardW, CFGS.boardH, CFGS.players, CFGS.tomeks.slice(),
            CFGS.blocks.slice())();
}, Game = (BOARD_W, BOARD_H, PLAYERS, TOMEKS, BLOCKS) => {
    document.getElementById("players").innerHTML = "Players: " + PLAYERS;
    [TOMEKS, BLOCKS].forEach(specialSqs => {
        specialSqs.slice().forEach(specialSq => {
            if (specialSq.rowNo <= 0 || specialSq.rowNo > BOARD_H &&
                    specialSq.colNo <= 0 || specialSq.colNo > BOARD_W) {
                specialSqs.splice(specialSqs.indexOf(specialSq), 1);
            }
        });
    });
    const _SQS_NO = BOARD_W * BOARD_H, _PLAYER_NO = PLAYERS.length, _MOVES =
            document.getElementById("moves"), _BTN_TOGGLE_MOVE_SORT_ORD =
            document.getElementById("toggleMoveSortOrd"), _BTN_CLEAR_HIST =
            document.getElementById("clearHist"), _TXT_CUR_STAT = document.
            getElementById("curStat"), _FV_RENDER_INFO_PARAMS =
            FVRenderInfoParams(), _FV_RENDER_MOVES_PARAMS = FVRenderMovesParams(
            BOARD_W, BOARD_H), _FV_RENDER_SQ_PARAMS = FVRenderSqParams(
            TOMEKS, BLOCKS), onUpdateSq = (i, moveNo) => {
        const lastSqs = _hist[moveNo - 1].slice();
        if (lastSqs[i].length > 0 || _isDraw(lastSqs)) return;
        if (_winner(lastSqs).winner.length > 0) return;
        const player = PLAYERS[(moveNo - 1) % _PLAYER_NO];
        lastSqs[i] = player, _hist.length = moveNo, _hist[moveNo] = lastSqs;
        const { winningSqs, winner } = _winner(lastSqs), sq = _sq(i);
        if (sq.innerHTML.length <= 0) sq.innerHTML = player;
        [].slice.call(_MOVES.children).filter(liDom => {
            return _FV_RENDER_MOVES_PARAMS.liDomNo(liDom.id) >= moveNo;
        }).forEach(liDom => _MOVES.removeChild(liDom));
        _renderCommon(winner.length > 0, winningSqs, i, moveNo,
                _isDraw(lastSqs), winner, PLAYERS[moveNo % _PLAYER_NO]);
    }, onGoToMove = (i, moveNo) => {
        _hist[moveNo].forEach((sq, i) => {
            const content = _FV_RENDER_SQ_PARAMS.sqContent(
                    Math.floor(i / BOARD_H), i % BOARD_W);
            _sq(i).innerHTML = content.length > 0 ? content : sq;
        });
        const { winningSqs, winner } = _winner(_hist[moveNo]);
        _renderCommon(winner.length > 0, winningSqs, i, moveNo, _isDraw(
                _hist[moveNo]), winner, PLAYERS[moveNo % _PLAYER_NO]);
    }, onClearHist = () => {
        _hist.length = 0, _hist.push(Array(_SQS_NO).fill(""));
        _hist[0].forEach((sq, i) => _sq(i).innerHTML = _FV_RENDER_SQ_PARAMS.
                sqContent(Math.floor(i / BOARD_H), i % BOARD_W));
        _MOVES.innerHTML = "";
        _addMove(0, -1);
        _BTN_CLEAR_HIST.disabled = _BTN_TOGGLE_MOVE_SORT_ORD.disabled = true;
        _TXT_CUR_STAT.innerHTML =
                _isDraw(_hist[0]) ? _FV_RENDER_INFO_PARAMS.drawGameTxt() :
                _FV_RENDER_INFO_PARAMS.nextPlayerTxt(PLAYERS[0]);
    }, _sq = i => document.getElementById(_FV_RENDER_SQ_PARAMS.domId(i));
    const _isDraw = sqs =>
            _WINNING_LS.every(winningL => {
                const filledSq = sqs[winningL.find(i => sqs[i])];
                return filledSq && winningL.some(i => sqs[i] && sqs[i] !==
                        filledSq && !_isSpecialSq(TOMEKS, i));
            }), _winner = sqs => {
        const winningLs = _WINNING_LS.filter(winningL => sqs[winningL.find(
                i => sqs[i])] && winningL.every(i => sqs[winningL.find(
                i => sqs[i])] === sqs[i] || _isSpecialSq(TOMEKS, i)));
        return {
            winningSqs: winningLs.reduce((accumArr, arr) => {
                return accumArr.concat(arr);
            }, []).filter((element, i, self) => self.indexOf(element) === i),
            winner: winningLs.length > 0 ?
                    sqs[winningLs[0].find(i => sqs[i])] : ""
        };
    }, _isSpecialSq = (specialSqs, i) =>
            specialSqs.some(sq => sq.rowNo === Math.floor(i / BOARD_H) + 1 &&
                    sq.colNo === i % BOARD_W + 1), _renderCommon = (
            hasWinner, winningSqs, i, moveNo, isDraw, winner, player) => {
        if (hasWinner) winningSqs.forEach(winningSq => {
            const sqDom = document.getElementById(
                    _FV_RENDER_SQ_PARAMS.domId(winningSq));
            sqDom.innerHTML =
                    _FV_RENDER_SQ_PARAMS.markedInnerHTML(sqDom.innerHTML);
        });
        _TXT_CUR_STAT.innerHTML = isDraw ? _FV_RENDER_INFO_PARAMS.
                drawGameTxt() : hasWinner ? _FV_RENDER_INFO_PARAMS.winnerTxt(
                winner) : _FV_RENDER_INFO_PARAMS.nextPlayerTxt(player);
        Array(_MOVES.childElementCount).fill("").forEach((element, i) => {
            const btnDom = document.getElementById(
                    _FV_RENDER_MOVES_PARAMS.btnDomId(i));
            if (!btnDom || btnDom.id.includes(moveNo)) return;
            btnDom.disabled = false;
            btnDom.innerHTML =
                    _FV_RENDER_MOVES_PARAMS.normBtnInnerHTML(btnDom.innerHTML);
        });
        const btnDom = document.getElementById(
                _FV_RENDER_MOVES_PARAMS.btnDomId(moveNo));
        if (!btnDom) {
            _addMove(moveNo, i);
        } else {
            btnDom.disabled = true;
            btnDom.innerHTML =
                    _FV_RENDER_MOVES_PARAMS.boldTxt(btnDom.innerHTML);
        }
        _BTN_CLEAR_HIST.disabled = _BTN_TOGGLE_MOVE_SORT_ORD.disabled = false;
    }, _addMove = (moveNo, i) => {
        const btnDom = document.createElement("button");
        btnDom.disabled = true;
        btnDom.id = _FV_RENDER_MOVES_PARAMS.btnDomId(moveNo);
        btnDom.onclick = onGoToMove.bind(Game, i, moveNo);
        btnDom.innerHTML = _FV_RENDER_MOVES_PARAMS.boldTxt(moveNo <= 0 ?
                _FV_RENDER_MOVES_PARAMS.startMoveTxt() :
                _FV_RENDER_MOVES_PARAMS.otherMoveTxt(i, moveNo));
        const liDom = document.createElement("li");
        liDom.id = _FV_RENDER_MOVES_PARAMS.liDomId(moveNo);
        liDom.appendChild(btnDom);
        if (_MOVES.firstChild && !_MOVES.firstChild.id.includes("0")) {
            return _MOVES.insertBefore(liDom, _MOVES.firstChild);
        }
        _MOVES.appendChild(liDom);
    }, _WINNING_LS = Array(BOARD_H).fill(-1).map((element, i) => Array(BOARD_W).
            fill(-1).map((e, j) => i * BOARD_W + j)).concat(Array(BOARD_W).fill(
            -1).map((element, i) => Array(BOARD_H).fill(-1).map((e, j) => i +
            BOARD_W * j))).concat(BOARD_W === BOARD_H ? Array(2).fill(-1).map(
            (element, i) => Array(BOARD_W).fill(-1).map((e, j) => (BOARD_W -
            1) * i + j * (1 - 2 * i) + BOARD_W * j)) : []).filter(winningL =>
            !winningL.some(i => _isSpecialSq(BLOCKS, i))).filter(winningL =>
            !winningL.every(i => _isSpecialSq(TOMEKS, i)));
    const _hist = [Array(_SQS_NO).fill("")];
    _BTN_CLEAR_HIST.onclick = onClearHist;
    _BTN_TOGGLE_MOVE_SORT_ORD.onclick = () => [].slice.call(_MOVES.children).
            reverse().forEach(liDom => _MOVES.appendChild(liDom));
    Array(BOARD_H).fill("").forEach((element, rowIndex) => {
        const rowDom = document.createElement("div");
        rowDom.id = "row" + rowIndex;
        Array(BOARD_W).fill("").forEach((element, colIndex) => {
            const i = rowIndex * BOARD_W + colIndex;
            const btnDom = document.createElement("button");
            btnDom.classList.add("square");
            btnDom.id = _FV_RENDER_SQ_PARAMS.domId(i), btnDom.innerHTML =
                    _FV_RENDER_SQ_PARAMS.sqContent(rowIndex, colIndex);
            btnDom.onclick = () => onUpdateSq(i, Array(_SQS_NO).fill("").filter(
                    (element, i) => _sq(i).innerHTML.length > 0).length + 1 -
                    TOMEKS.length - BLOCKS.length);
            rowDom.appendChild(btnDom);
        });
        document.getElementById("board").appendChild(rowDom);
    });
    return onClearHist;
};
window.onload = Game(CFGS.boardW, CFGS.boardH, CFGS.players,
        CFGS.tomeks.slice(), CFGS.blocks.slice());