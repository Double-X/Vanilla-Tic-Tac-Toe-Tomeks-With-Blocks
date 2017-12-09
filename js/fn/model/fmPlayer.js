/**
 * Potential Hotspot/Pure Function
 * @author DoubleX @interface @since v1.0 @version v1.0
 * @param {Array[String]} PLAYERS - The list of players
 * @param {Number} PLAYER_NO - The number of players
 * @param {Number} MOVE_NO - The number of the move to be checked
 * @returns {String} The requested player
 */
const FMPlayer = (PLAYERS, PLAYER_NO, MOVE_NO) => {

    "use strict";

    return PLAYERS[MOVE_NO % PLAYER_NO];

}; // FMPlayer