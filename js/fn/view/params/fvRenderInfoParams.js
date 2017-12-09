/**
 * Potential Hotspot/Pure function
 * @author DoubleX @interface @since v1.0 @version v1.0
 * @returns {Object[Function]} The requested API mapping
 */
const FVRenderInfoParams = () => {

    "use strict";

    const _TXT_DRAW_GAME = "Draw game", _TXT_NEXT_PLAYER_PRE = "Next player: ";
    const _TXT_WINNER_PRE = "Winner: ";

    /**
     * Potential Hotspot/Pure function
     * @author DoubleX @interface @since v1.0 @version v1.0
     * @returns {String} The requested text
     */
    const drawGameTxt = () => _TXT_DRAW_GAME;

    /**
     * Potential Hotspot/Pure function
     * @author DoubleX @interface @since v1.0 @version v1.0
     * @param {String} player - The player to be displayed
     * @returns {String} The requested text
     */
    const nextPlayerTxt = player => _TXT_NEXT_PLAYER_PRE + player;

    /**
     * Potential Hotspot/Pure function
     * @author DoubleX @interface @since v1.0 @version v1.0
     * @param {String} winner - The winner to be displayed
     * @returns {String} The requested text
     */
    const winnerTxt = winner => _TXT_WINNER_PRE + winner;

    return { drawGameTxt, nextPlayerTxt, winnerTxt };

}; // FVRenderInfoParams