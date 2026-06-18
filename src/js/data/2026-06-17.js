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
    img: "1.png",
    opts: {
      album: [ "gws" ]
    }
  },
  {
    name: "Tick",
    img: "1.png",
    opts: {
      album: [ "gws" ]
    }
  },
  {
    name: "I'm in the Mood to Move",
    img: "1.png",
    opts: {
      album: ["book", "EoSD", "StB", "HM"]
    }
  },
  {
    name: "I Gots a Weasel",
    img: "1.png",
    opts: {
      album: ["gws"]
    }
  },
  {
    name: "Fat Lenny",
    img: "1.png",
    opts: {
      album: ["gws"]
    }
  },
  {
    name: "Cold and Wet",
    img: "1.png",
    opts: {
      album: ["gws"]
    }
  },
  {
    name: "Bumblebee",
    img: "1.png",
    opts: {
      album: ["gws"]
    }
  },
  {
    name: "Bumblebee, Pt. 2",
    img: "1.png",
    opts: {
      album: ["gws"],
      bonus: true
    }
  },
  {
    name: "Don't Laugh (I Love You)",
    img: "1.png",
    opts: {
      album: ["gws"]
    }
  },
  {
    name: "Never Squeal",
    img: "1.png",
    opts: {
      album: ["gws"]
    }
  },
  {
    name: "Up on the Hill",
    img: "1.png",
    opts: {
      album: ["gws"]
    }
  },
  {
    name: "Wayne's Pet Youngin'",
    img: "1.png",
    opts: {
      album: ["gws"]
    }
  },
  {
    name: "Nicole",
    img: "1.png",
    opts: {
      album: ["gws"]
    }
  },
  {
    name: "Common Bitch",
    img: "1.png",
    opts: {
      album: ["gws"]
    }
  },
  {
    name: "El Camino",
    img: "1.png",
    opts: {
      album: ["gws"]
    }
  },
  {
    name: "Old Queen Cole",
    img: "1.png",
    opts: {
      album: ["gws"]
    }
  },
  {
    name: "Stacey",
    img: "1.png",
    opts: {
      album: ["gws"],
      bonus: true
    }
  },
  {
    name: "Nan",
    img: "1.png",
    opts: {
      album: ["gws"]
    }
  },
  {
    name: "Licking the Palm for Guava",
    img: "1.png",
    opts: {
      album: ["gws"]
    }
  },
  {
    name: "Mushroom Festival in Hell",
    img: "1.png",
    opts: {
      album: ["gws"]
    }
  },
  {
    name: "L.M.L.Y.P.",
    img: "1.png",
    opts: {
      album: ["gws"]
    }
  },
  {
    name: "Papa Zit",
    img: "1.png",
    opts: {
      album: ["gws"]
    }
  },
  {
    name: "Hippy Smell",
    img: "1.png",
    opts: {
      album: ["gws"],
      bonus: true
    }
  },
  {
    name: "Old Man Thunder",
    img: "1.png",
    opts: {
      album: ["gws"]
    }
  },
  {
    name: "Birthday Boy",
    img: "1.png",
    opts: {
      album: ["gws"]
    }
  },
  {
    name: "Blackjack",
    img: "1.png",
    opts: {
      album: ["gws"]
    }
  },
  {
    name: "Squelch the Weasel",
    img: "1.png",
    opts: {
      album: ["gws"]
    }
  },
  {
    name: "Marble Tulip Juicy Tree",
    img: "1.png",
    opts: {
      album: ["gws"]
    }
  },
  {
    name: "Puffy Cloud",
    img: "1.png",
    opts: {
      album: ["gws"]
    }
  },
  {
    name: "Strap on That Jammy Pac",
    img: "2.png",
    opts: {
      album: ["pod"]
    }
  },
  {
    name: "Dr. Rock",
    img: "2.png",
    opts: {
      album: ["pod"]
    }
  },
  {
    name: "Frank",
    img: "2.png",
    opts: {
      album: ["pod"]
    }
  },
  {
    name: "Sorry Charlie",
    img: "2.png",
    opts: {
      album: ["pod"]
    }
  },
  {
    name: "The Stallion, Pt. 1",
    img: "2.png",
    opts: {
      album: ["pod"]
    }
  },
  {
    name: "Pollo Asado",
    img: "2.png",
    opts: {
      album: ["pod"]
    }
  },
  {
    name: "Right to the Ways and the Rules of the World",
    img: "2.png",
    opts: {
      album: ["pod"]
    }
  },
  {
    name: "Captain Fantasy",
    img: "2.png",
    opts: {
      album: ["pod"]
    }
  },
  {
    name: "Demon Sweat",
    img: "2.png",
    opts: {
      album: ["pod"]
    }
  },
  {
    name: "Molly",
    img: "2.png",
    opts: {
      album: ["pod"]
    }
  },
  {
    name: "Can U Taste the Waste?",
    img: "2.png",
    opts: {
      album: ["pod"]
    }
  },
  {
    name: "Don't Sweat It",
    img: "2.png",
    opts: {
      album: ["pod"]
    }
  },
  {
    name: "Awesome Sound",
    img: "2.png",
    opts: {
      album: ["pod"]
    }
  },
  {
    name: "Laura",
    img: "2.png",
    opts: {
      album: ["pod"]
    }
  },
  {
    name: "Boing",
    img: "2.png",
    opts: {
      album: ["pod"]
    }
  },
  {
    name: "Mononucleosis",
    img: "2.png",
    opts: {
      album: ["pod"]
    }
  },
  {
    name: "Oh My Dear (Falling in Love)",
    img: "2.png",
    opts: {
      album: ["pod"]
    }
  },
  {
    name: "Sketches of Winkle",
    img: "2.png",
    opts: {
      album: ["pod"]
    }
  },
  {
    name: "Alone",
    img: "2.png",
    opts: {
      album: ["pod"]
    }
  },
  {
    name: "Moving Away",
    img: "2.png",
    opts: {
      album: ["pod"]
    }
  },
  {
    name: "She Fucks Me",
    img: "2.png",
    opts: {
      album: ["pod"]
    }
  },
  {
    name: "Pork Roll Egg and Cheese",
    img: "2.png",
    opts: {
      album: ["pod"]
    }
  },
  {
    name: "The Stallion, Pt. 2",
    img: "2.png",
    opts: {
      album: ["pod"]
    }
  }
];
