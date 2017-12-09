Type UnitTest(); in the console to run the whole unit test suite, which only tests against the following configuration values:
{ boardW: 3, boardH: 3, players: ["X", "O"], tomeks: [], blocks: [] }
OMStates, which is idempotent, are tested to ensure the same initial states and input sequences always give the same expected output 
sequences as rendering commands issued to a render callback stub.
Please run the unit test only when the game's in its initial state(i.e., with no history).
Note that the mini version of the app doesn't have any unit test.