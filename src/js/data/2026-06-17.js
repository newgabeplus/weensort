// dataSetVersion = "2026-06-17"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSetVersion = "2026-06-17";
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Album",
    key: "album",
    tooltip: "Check this to restrict to certain albums.",
    checked: false,
    sub: [
      { name: "GodWeenSatan: The Oneness", key: "gws", checked: true },
      { name: "The Pod", key: "pod", checked: true },
      { name: "Pure Guava", key: "guava", checked: true },
      { name: "Chocolate and Cheese", key: "candc", checked: true },
      { name: "12 Golden Country Greats", key: "12gcg", checked: true },
      { name: "The Mollusk", key: "mollusk", checked: true },
      { name: "White Pepper", key: "pepper", checked: true },
      { name: "Quebec", key: "quebec", checked: true },
      { name: "Shinola, Vol. 1", key: "shinola", checked: true },
      { name: "The Friends EP", key: "friends", checked: true },
      { name: "La Cucaracha", key: "lacuc", checked: true }
    ]
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "You Fucked Up",
    img: "C3TvKQYr/gws.png",
    opts: {
      album: [ "gws" ],
      demo: []
    }
  },
  {
    name: "Tick",
    img: "C3TvKQYr/gws.png",
    opts: {
      album: [ "pod" ],
      demo: []
    }
  },
  {
    name: "I'm in the Mood to Move",
    img: "C3TvKQYr/gws.png",
    opts: {
      album: ["guava"],
      demo: []
    }
  }
];
