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
    name: "Include live albums?",
    key: "live",
    tooltip: "Check these to include live albums. Only recommended for hardcore fans.",
    checked: true,
    sub: [ { name: "Paintin' the Town Brown", key: "pttb" }, { name: "Live in Toronto Canada", key: "toronto" }, { name: "Live at Stubb's", key: "stubbs" }, { name: "All Request Live", key: "arl" }, { name: "Live in Chicago", key: "chicago" }, { name: "At the Cat's Cradle", key: "cradle" }, { name: "GodWeenSatan: Live", key: "gwslive" }
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
    img: "1.png",
    opts: {
      album: [ "gws" ],
      live: []
    }
  },
  {
    name: "Tick",
    img: "1.png",
    opts: {
      album: [ "gws" ],
      live: []
    }
  },
  {
    name: "I'm in the Mood to Move",
    img: "1.png",
    opts: {
      album: ["book", "EoSD", "StB", "HM"],
      live: []
    }
  },
  {
    name: "I Gots a Weasel",
    img: "1.png",
    opts: {
      album: ["gws"],
      live: []
    }
  },
  {
    name: "Fat Lenny",
    img: "1.png",
    opts: {
      album: ["gws"],
      live: []
    }
  },
  {
    name: "Cold and Wet",
    img: "1.png",
    opts: {
      album: ["gws"],
      live: []
    }
  },
  {
    name: "Bumblebee",
    img: "1.png",
    opts: {
      album: ["gws"],
      live: []
    }
  },
  {
    name: "Bumblebee, Pt. 2",
    img: "P4JZ2it.png",
    opts: {
      album: ["gws"],
      stage: [],
      bonus: true 
    }
  },
  {
    name: "Don't Laugh (I Love You)",
    img: "1.png",
    opts: {
      album: ["gws"],
      live: []
    }
  }
];
