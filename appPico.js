((BOARD_W, BOARD_H, PLAYERS, TOMEKS, BLOCKS) => {
    document.getElementById("players").innerHTML = "Players: " + PLAYERS;
    const _SQS_NO = BOARD_W * BOARD_H, _MOVES = document.getElementById(
            "moves"), onUpdateSq = (i, moveNo) => {
        const lastSqs = _hist[moveNo - 1].slice();
        if (lastSqs[i].length > 0 || _isDraw(lastSqs)) return;
        if (_winner(lastSqs).winner.length > 0) return;
        const player = PLAYERS[(moveNo - 1) % PLAYERS.length];
        lastSqs[i] = player, _hist.length = moveNo, _hist[moveNo] = lastSqs;
        const { winningSqs, winner } = _winner(lastSqs), sq = _sq(i);
        if (sq.innerHTML.length <= 0) sq.innerHTML = player;
        [].slice.call(_MOVES.children).filter(btnDom => {
            return +btnDom.id.replace("btn", "") >= moveNo;
        }).forEach(btnDom => _MOVES.removeChild(btnDom));
        _renderCommon(winner.length > 0, winningSqs, i, moveNo,
                _isDraw(lastSqs), winner, PLAYERS[moveNo % PLAYERS.length]);
    }, onGoToMove = (i, moveNo) => {
        _hist[moveNo].forEach((sq, i) => {
            if (_isSpecialSq(TOMEKS, i)) return _sq(i).innerHTML = "<i>T</i>";
            if (!_isSpecialSq(BLOCKS, i)) _sq(i).innerHTML = sq;
        });
        const { winningSqs, winner } = _winner(_hist[moveNo]);
        _renderCommon(winner.length > 0, winningSqs, i, moveNo, _isDraw(
                _hist[moveNo]), winner, PLAYERS[moveNo % PLAYERS.length]);
    }, _sq = i => document.getElementById("sq" + i), _isDraw = sqs =>
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
            const sqDom = document.getElementById("sq" + winningSq);
            sqDom.innerHTML = "<mark>" + sqDom.innerHTML + "</mark>";
        });
        document.getElementById("curStat").innerHTML = isDraw ? "Draw game" :
                hasWinner ? "Winner: " + winner : "Next player: " + player;
        Array(_MOVES.childElementCount).fill("").forEach((element, i) => {
            const btnDom = document.getElementById("btn" + i);
            if (!btnDom || btnDom.id.includes(moveNo)) return;
            btnDom.innerHTML = btnDom.innerHTML.replace(/<b>/gi, "").replace(
                    /<\/b>/gi, "");
        });
        const btnDom = document.getElementById("btn" + moveNo);
        if (!btnDom) return _addMove(moveNo, i);
        btnDom.innerHTML = "<b>" + btnDom.innerHTML + "</b>";
    }, _addMove = (moveNo, i) => {
        const btnDom = document.createElement("button");
        btnDom.id = "btn" + moveNo, btnDom.onclick = onGoToMove.bind(
                this, i, moveNo), btnDom.innerHTML = "<b>" + (moveNo <= 0 ?
                "Go to game start" : "Go to move " + moveNo + "(" + (Math.floor(
                i / BOARD_H) + 1) + ", " + (i % BOARD_W + 1) + ")") + "</b>";
        const first = _MOVES.firstChild;
        if (!first || first.id.includes("0")) return _MOVES.appendChild(btnDom);
        _MOVES.insertBefore(btnDom, first);
    }, _WINNING_LS = Array(BOARD_H).fill(-1).map((element, i) => Array(BOARD_W).
            fill(-1).map((e, j) => i * BOARD_W + j)).concat(Array(BOARD_W).fill(
            -1).map((element, i) => Array(BOARD_H).fill(-1).map((e, j) => i +
            BOARD_W * j))).concat(BOARD_W === BOARD_H ? Array(2).fill(-1).map(
            (element, i) => Array(BOARD_W).fill(-1).map((e, j) => (BOARD_W -
            1) * i + j * (1 - 2 * i) + BOARD_W * j)) : []).filter(winningL =>
            !winningL.some(i => _isSpecialSq(BLOCKS, i))).filter(winningL =>
            !winningL.every(i => _isSpecialSq(TOMEKS, i)));
    const _hist = [Array(_SQS_NO).fill("")];
    Array(BOARD_H).fill("").forEach((element, rowIndex) => {
        const rowDom = document.createElement("div");
        rowDom.id = "row" + rowIndex;
        Array(BOARD_W).fill("").forEach((element, colIndex) => {
            const i = rowIndex * BOARD_W + colIndex;
            const btnDom = document.createElement("button");
            btnDom.classList.add("square");
            btnDom.id = "sq" + i, btnDom.innerHTML = _isSpecialSq(TOMEKS, i) ?
                    "<i>T</i>" : _isSpecialSq(BLOCKS, i) ? "<u>B</u>" : "";
            btnDom.onclick = () => onUpdateSq(i, Array(_SQS_NO).fill("").filter(
                    (element, i) => _sq(i).innerHTML.length > 0).length + 1 -
                    TOMEKS.length - BLOCKS.length);
            rowDom.appendChild(btnDom);
        });
        document.getElementById("board").appendChild(rowDom);
    });
    _hist[0].forEach((sq, i) => _sq(i).innerHTML = _isSpecialSq(TOMEKS,
            i) ? "<i>T</i>" : _isSpecialSq(BLOCKS, i) ? "<u>B</u>" : "");
    _addMove(0, -1);
    document.getElementById("curStat").innerHTML =
            _isDraw(_hist[0]) ? "Draw game" : "Next player: " + PLAYERS[0];
})(3, 3, ["X", "O"], [], []);