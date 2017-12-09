/**
 * Potential Hotspot/Pure Function
 * @author DoubleX @interface @since v1.0 @version v1.0
 * @param {Function(Number) -> String} FM_PLAYER - Returns the player of the
 *                                                 passed move number
 * @returns {Object[Function]} The requested API mapping
 */
const FMSqs = FM_PLAYER => {

    "use strict";

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @interface @since v1.0 @version v1.0
     * @param {Number} i - The 1D index of the square to be rendered
     * @param {Number} moveNo - The move number during the rendering
     * @param {Array[Array[String]]} hist - The list of list of 1D square states
     * @returns {Array[String]} The requested list of updated 1D square states
     */
    const cur = (i, moveNo, hist) => {
        const updatedSqs = last(moveNo, hist);
        updatedSqs[i] = FM_PLAYER(moveNo - 1);
        return updatedSqs;
    }; // cur

    /**
     * Potential Hotspot/Pure Function
     * @author DoubleX @interface @since v1.0 @version v1.0
     * @param {Number} moveNo - The move number during the rendering
     * @param {Array[Array[String]]} hist - The list of list of 1D square states
     * @returns {Array[String]} The requested list of last 1D square states
     */
    const last = (moveNo, hist) => hist[moveNo - 1].slice();

    return { cur, last };

}; // FMSqs