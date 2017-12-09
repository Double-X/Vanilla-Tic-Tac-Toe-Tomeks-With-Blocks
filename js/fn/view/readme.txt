FVRenderBoard is responsible for rendering the board section of the game.
FVRenderDoms is responsible for actually rendering the doms according to the rendering commands issued by higher-level view modules that 
converts the "what to render" commands to the "how to render" commands using the current dom states, thus facilitating unit testing the 
views without actually altering the dom tree.
FVRenderInfo is responsible for rendering the information section of the game.
FVRenderMoves is responsible for rendering the list of moves that are made.
FVRenderSq is responsible for rendering a square.
FVRenderSqs is responsible for returning a 1D list of squares that can be rendered.
The params modules are responsible for returning the rendering content details using the raw render data inputs, thus facilitating 
integration testing which checks some dom states.