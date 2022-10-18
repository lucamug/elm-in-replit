var storedState = localStorage.getItem('elm-todo-save');
var startingState = storedState ? JSON.parse(storedState) : null;

//
// Normalizing Elm as it could be
//
//   * Elm.Main.init()
//   * Elm.Counter.init()
//   * Elm.Examples.Counter.init()
//


var ElmNormalized;

if (Elm[Object.keys(Elm)[0]].init) {
  ElmNormalized = Elm[Object.keys(Elm)[0]];
} else {
  ElmNormalized = Elm[Object.keys(Elm)[0]][Object.keys(Elm[Object.keys(Elm)[0]])[0]];
}

// Initialize your Elm program
var app = ElmNormalized.init({
  node: document.getElementById('app'),
  flags: {
    env: env,
    locationHref: location.href,
    innerWidth: window.innerWidth,
    startingState: startingState,
    navigationModality: "NavigationByPath"
  },
});

if (app.ports) {
  if (app.ports.setStorage) {
    app.ports.setStorage.subscribe(function (state) {
      localStorage.setItem('elm-todo-save', JSON.stringify(state));
    });
  }

  if (app.ports.onUrlChange) {
    // Inform app of browser navigation (the BACK and FORWARD buttons)
    window.addEventListener('popstate', function () {
      app.ports.onUrlChange.send(location.href);
    });
  }

  if (app.ports.pushUrl) {
    // Change the URL upon request, inform app of the change.
    app.ports.pushUrl.subscribe(function (url) {
      history.pushState({}, '', url);
      app.ports.onUrlChange.send(location.href);
    });
  }

  if (app.ports.changeMeta) {
    // Updates HTML elements
    app.ports.changeMeta.subscribe((args) => {
      var element = document.querySelector(args.querySelector);
      if (element) {
        element[args.fieldName] = args.content;
      }
    });
  }
}
