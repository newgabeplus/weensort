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
    img: "1.png",
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
  },
  {
    name: "Never Squeal",
    img: "1.png",
    opts: {
      album: ["gws"],
      live: []
    }
  },
  {
    name: "Up on the Hill",
    img: "1.png",
    opts: {
      album: ["gws"],
      live: []
    }
  },
  {
    name: "Wayne's Pet Youngin'",
    img: "1.png",
    opts: {
      album: ["gws"],
      live: []
    }
  },
  {
    name: "Nicole",
    img: "1.png",
    opts: {
      album: ["gws"],
      live: []
    }
  },
  {
    name: "Common Bitch",
    img: "1.png",
    opts: {
      album: ["gws"],
      live: []
    }
  },
  {
    name: "El Camino",
    img: "1.png",
    opts: {
      album: ["gws"],
      live: []
    }
  },
  {
    name: "Old Queen Cole",
    img: "1.png",
    opts: {
      album: ["gws"],
      live: []
    }
  },
  {
    name: "Stacey",
    img: "1.png",
    opts: {
      album: ["gws"],
      live: [],
      bonus: true
    }
  },
  {
    name: "Nan",
    img: "1.png",
    opts: {
      album: ["gws"],
      live: []
    }
  },
  {
    name: "Licking the Palm for Guava",
    img: "1.png",
    opts: {
      album: ["gws"],
      live: []
    }
  },
  {
    name: "Mushroom Festival in Hell",
    img: "1.png",
    opts: {
      album: ["gws"],
      live: []
    }
  },
  {
    name: "L.M.L.Y.P.",
    img: "1.png",
    opts: {
      album: ["gws"],
      live: []
    }
  },
  {
    name: "Papa Zit",
    img: "1.png",
    opts: {
      album: ["gws"],
      live: []
    }
  },
  {
    name: "Hippy Smell",
    img: "1.png",
    opts: {
      album: ["gws"],
      live: [],
      bonus: true
    }
  },
  {
    name: "Old Man Thunder",
    img: "1.png",
    opts: {
      album: ["gws"],
      live: []
    }
  },
  {
    name: "Birthday Boy",
    img: "1.png",
    opts: {
      album: ["gws"],
      live: []
    }
  },
  {
    name: "Blackjack",
    img: "1.png",
    opts: {
      album: ["gws"],
      live: []
    }
  },
  {
    name: "Squelch the Weasel",
    img: "1.png",
    opts: {
      album: ["gws"],
      live: []
    }
  },
  {
    name: "Marble Tulip Juicy Tree",
    img: "1.png",
    opts: {
      album: ["gws"],
      live: []
    }
  },
  {
    name: "Puffy Cloud",
    img: "1.png",
    opts: {
      album: ["gws"],
      live: []
    }
  },
  {
    name: "Strap on That Jammy Pac",
    img: "2.png",
    opts: {
      album: ["pod"],
      live: []
    }
  },
  {
    name: "Dr. Rock",
    img: "2.png",
    opts: {
      album: ["pod"],
      live: []
    }
  },
  {
    name: "Frank",
    img: "2.png",
    opts: {
      album: ["pod"],
      live: []
    }
  },
  {
    name: "Sorry Charlie",
    img: "2.png",
    opts: {
      album: ["pod"],
      live: []
    }
  },
  {
    name: "The Stallion, Pt. 1",
    img: "2.png",
    opts: {
      album: ["pod"],
      live: []
    }
  },
  {
    name: "Pollo Asado",
    img: "2.png",
    opts: {
      album: ["pod"],
      live: []
    }
  },
  {
    name: "Right to the Ways and the Rules of the World",
    img: "2.png",
    opts: {
      album: ["pod"],
      live: []
    }
  },
  {
    name: "Captain Fantasy",
    img: "2.png",
    opts: {
      album: ["pod"],
      live: []
    }
  },
  {
    name: "Demon Sweat",
    img: "2.png",
    opts: {
      album: ["pod"],
      live: []
    }
  },
  {
    name: "Molly",
    img: "2.png",
    opts: {
      album: ["pod"],
      live: []
    }
  },
  {
    name: "Can U Taste the Waste?",
    img: "2.png",
    opts: {
      album: ["pod"],
      live: []
    }
  },
  {
    name: "Don't Sweat It",
    img: "2.png",
    opts: {
      album: ["pod"],
      live: []
    }
  },
  {
    name: "Awesome Sound",
    img: "2.png",
    opts: {
      album: ["pod"],
      live: []
    }
  },
  {
    name: "Laura",
    img: "2.png",
    opts: {
      album: ["pod"],
      live: []
    }
  },
  {
    name: "Boing",
    img: "2.png",
    opts: {
      album: ["pod"],
      live: []
    }
  },
  {
    name: "Mononucleosis",
    img: "2.png",
    opts: {
      album: ["pod"],
      live: []
    }
  },
  {
    name: "Oh My Dear (Falling in Love)",
    img: "2.png",
    opts: {
      album: ["pod"],
      live: []
    }
  },
  {
    name: "Sketches of Winkle",
    img: "2.png",
    opts: {
      album: ["pod"],
      live: []
    }
  },
  {
    name: "Alone",
    img: "2.png",
    opts: {
      album: ["pod"],
      live: []
    }
  },
  {
    name: "Moving Away",
    img: "2.png",
    opts: {
      album: ["pod"],
      live: []
    }
  },
  {
    name: "She Fucks Me",
    img: "2.png",
    opts: {
      album: ["pod"],
      live: []
    }
  },
  {
    name: "Pork Roll Egg and Cheese",
    img: "2.png",
    opts: {
      album: ["pod"],
      live: []
    }
  },
  {
    name: "The Stallion, Pt. 2",
    img: "2.png",
    opts: {
      album: ["pod"],
      live: []
    }
  }
];
