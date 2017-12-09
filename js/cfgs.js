// These are the configurations values to be edited bt end users
const CFGS = {
    boardW: 3,
    boardH: 3,
    // T and B shouldn't be used here as they represent tomeks and blocks
    players: ["X", "O"],
    //
    // No tomek nor block should have the same coordinates with each other
    tomeks: [
        { rowNo: 1, colNo: 1 },
        { rowNo: 1, colNo: 2 },
        { rowNo: 1, colNo: 3 }
    ],
    blocks: []
    //
};
//