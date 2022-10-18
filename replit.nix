{ pkgs }: {
    deps = [
        pkgs.elmPackages.elm
        pkgs.elmPackages.elm-json
        pkgs.elmPackages.elm-format
        pkgs.elmPackages.elm-review
        pkgs.elmPackages.elm-test
        pkgs.elmPackages.elm-language-server
        pkgs.nodejs-16_x
        pkgs.yarn
    ];
}