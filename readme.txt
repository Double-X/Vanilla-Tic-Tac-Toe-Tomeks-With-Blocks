In addition to the standard Tic Tac Toe Tomek, this app also has blocks - lines having them can't be the winning ones.
Typing EditCfgs({ boardW: w, boardH: h, players:[players], tomeks: [coordinates], blocks: [coordinates] });, where w, h, players, tomeks 
and blocks are the board width, height, player, tomek and block coordinate list respectively, on the console will immediately use these 
new configuration values on the game.
For instance, typing EditCfgs({ boardW: 3, boardH: 3, players:["X", "O"], tomeks: [{ rowNo: 2, colNo: 2 }], blocks: [] }); on the console 
will immediately change the board width, height, player, tomek and block list as 3, 3, "X" followed by "O", 1 tomek on the 2nd row and 
column, and no block respectively.
Note that EditCfgs doesn't work on the pico version.