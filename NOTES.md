# Notes

## Start with one "Repls"

    * Using the "Elm template"
    * > elm init
    * > elm repl

        * Work in elm-repl

    * > elm reactor
    * Create Luca.elm

        * Work on Luca.elm (Hello, world!)

    * Limitations of "elm reactor"

        * Cannot control index.html (no ports)
        * Cannot use --debug mode
        
## Move to multiple "Repls"

    * Using the repo https://github.com/lucamug/elm-bootstrap
    * yarn install
    * Be sure that cmd/review works, otherwise: 

        * cd review
        * elm make src/ReviewConfig.elm

    * Based on elm-go (JS tool that watch folders and run "elm make")
    * Has several commands (in cmd folder)
    * Can review/test/build/deploy etc. Works with these out of the box

        * https://surge.sh/
        * https://netlify.com/

    * Deployed examples:

        * https://elm-boot.surge.sh/
        * https://elm-boot.netlify.app/
        
    * Pushstate routing:
        * https://surge.sh/help/adding-a-200-page-for-client-side-routing
        
        
To discard changes

git reset –hard
