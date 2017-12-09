/**
 * Potential Hotspot/Idempotent
 * @author DoubleX @interface @since v1.0 @version v1.0
 * @param {Object[Number, Number, Array[String], Array[Object[Number, Number]],
 *         Array[Object[Number, Number]]]} cfgs - The new configuration values
 */
const EditCfgs = cfgs => {

    "use strict";

    /**
     * Potential Hotspot/Nullipotent
     * @author DoubleX @since v1.0 @version v1.0
     * @returns {Boolean} The check result
     */
    const _isCfgChanged = () => {
        if (_isBoardWHChanged() || _isPlayersChanged()) return true;
        if (_isSpecialSqsChanged(cfgs.tomeks, CFGS.tomeks)) return true;
        return _isSpecialSqsChanged(cfgs.blocks, CFGS.blocks);
    }; // _isCfgChanged

    /**
     * Potential Hotspot/Nullipotent
     * @author DoubleX @since v1.0 @version v1.0
     * @returns {Boolean} The check result
     */
    const _isBoardWHChanged = () => {
        return cfgs.boardW !== CFGS.boardW || cfgs.boardH !== CFGS.boardH;
    }; // _isBoardWHChanged

    /**
     * Potential Hotspot/Nullipotent
     * @author DoubleX @since v1.0 @version v1.0
     * @returns {Boolean} The check result
     */
    const _isPlayersChanged = () => {
        const newPlayers = cfgs.players, oldPlayers = CFGS.players;
        if (newPlayers.length !== oldPlayers.length) return true;
        // The player ordering matters as it implies their move orders
        return newPlayers.some(_isDiffPlayer.bind(EditCfgs, oldPlayers));
        //
    }; // _isPlayersChanged

    /**
     * Potential Hotspot/Nullipotent
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Array[String]} oldPlayers - The list of players as old values
     * @param {Array[String]} newPlayers - The list of players as new values
     * @param {Number} i - The index in the new player list
     * @returns {Boolean} The check result
     */
    const _isDiffPlayer = (oldPlayers, player, i) => player !== oldPlayers[i];

    /**
     * Potential Hotspot/Nullipotent
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Array[Object[Number, Number]]} newSpecialSqs - The list of new
     *                                                        special squares
     * @param {Array[Object[Number, Number]]} oldSpecialSqs - The list of old
     *                                                        special squares
     * @returns {Boolean} The check result
     */
    const _isSpecialSqsChanged = (newSpecialSqs, oldSpecialSqs) => {
        if (newSpecialSqs.length !== oldSpecialSqs.length) return true;
        // Only the coordinates of the special squares matter
        return newSpecialSqs.every(
                _isOldSpecialSq.bind(EditCfgs, oldSpecialSqs));
        //
    }; // _isSpecialSqsChanged

    /**
     * Potential Hotspot/Nullipotent
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Array[Object[Number, Number]]} oldSpecialSqs - The list of old
     *                                                        special squares
     * @param {Object[Number, Number]} newSpecialSq - The new special square to
     *                                                be checked against
     * @returns {Boolean} The check result
     */
    const _isOldSpecialSq = (oldSpecialSqs, newSpecialSq) => {
        return oldSpecialSqs.some(
                _isDiffSpecialSq.bind(EditCfgs, newSpecialSq));
    }; // _isOldSpecialSq

    /**
     * Potential Hotspot/Nullipotent
     * @author DoubleX @since v1.0 @version v1.0
     * @param {Object[Number, Number]} newSpecialSq - The new special square to
     *                                                be checked against
     * @param {Object[Number, Number]} oldSpecialSq - The old special square to
     *                                                be checked against
     * @returns {Boolean} The check result
     */
    const _isDiffSpecialSq = (newSpecialSq, oldSpecialSq) => {
        // Further extracting functions would make them too trivial
        return newSpecialSq.rowNo === oldSpecialSq.rowNo &&
            newSpecialSq.colNo === oldSpecialSq.colNo;
        //
    }; // _isDiffSpecialSq

    if (!_isCfgChanged()) return;

    /**
     * Potential Hotspot/Idempotent
     * @author DoubleX @since v1.0 @version v1.0
     * @param {} cfg - A new configuration value to be applied
     */
    const _editCfg = cfg => { CFGS[cfg] = cfgs[cfg]; };

    // Not using the whole cfgs lets users edit only parts of the configurations
    Object.keys(cfgs).forEach(_editCfg);
    //

    document.getElementById("board").innerHTML = "";
    CompositionRoot(CFGS)();

}; // EditCfgs