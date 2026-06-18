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
      { name: "GodWeenSatan: The Oneness", key: "gws" },
      { name: "The Pod", key: "pod" },
      { name: "Pure Guava", key: "guava" },
      { name: "Chocolate and Cheese", key: "candc" },
      { name: "12 Golden Country Greats", key: "12gcg" },
      { name: "The Mollusk", key: "mollusk" },
      { name: "White Pepper", key: "wp" },
      { name: "Quebec", key: "quebec" },
      { name: "Shinola, Vol. 1", key: "shinola" },
      { name: "The Friends EP", key: "friends" },
      { name: "La Cucaracha", key: "lacuc" }
    ]
  },
  {
    name: "Remove bonus tracks",
    key: "bonus",
    tooltip: "Check this to remove all bonus tracks from album rereleases.",
    checked: false
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "You Fucked Up",
    img: "fin.png",
    opts: {
      album: [ "gws" ]
    }
  },
  {
    name: "The Stallion, Pt. 2",
    img: "fin.png",
    opts: {
      album: ["pod"]
    }
  }
];
