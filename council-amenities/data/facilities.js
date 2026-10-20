// SAMPLE DATA. Locations are real places in the City of Sydney area.
// Every cost, date, decision and operator detail below is illustrative only
// and must be replaced with figures from the council's asset register.

window.COUNCIL = {
  name: "City of Sydney area",
  population: 230000,
  dataUpdated: "October 2026",
  source: "Illustrative sample data for a prototype. Not official council figures."
};

window.CATEGORIES = {
  pool:      { label: "Pools",              singular: "Pool" },
  library:   { label: "Libraries",          singular: "Library" },
  park:      { label: "Parks",              singular: "Park" },
  community: { label: "Community centres",  singular: "Community centre" },
  sport:     { label: "Sports grounds",     singular: "Sports ground" },
  toilet:    { label: "Public toilets",     singular: "Public toilet" }
};

window.FACILITIES = [
  {
    id: "prince-alfred-park-pool",
    name: "Prince Alfred Park Pool",
    category: "pool",
    suburb: "Surry Hills",
    address: "Chalmers St, Surry Hills NSW 2010",
    coords: [-33.8889, 151.2034],
    opened: 1958,
    lastUpgrade: 2013,
    capitalCost: 18500000,
    capitalNote: "Rebuild completed in 2013",
    annualCost: 1900000,
    breakdown: [
      { label: "Lifeguards and staff", amount: 1100000 },
      { label: "Water heating and energy", amount: 420000 },
      { label: "Cleaning and repairs", amount: 380000 }
    ],
    visitsPerYear: 380000,
    maintainedBy: {
      name: "Contracted aquatic operator",
      type: "Contractor",
      detail: "Runs the pool day to day. Council's Aquatics team checks performance every quarter.",
      contractEnds: 2028
    },
    whyHere: "Surry Hills and Redfern have some of the highest housing density in Australia and very few backyards. This is the only outdoor 50 metre pool on the eastern side of the city, and it sits on a direct train line from Central.",
    decision: {
      year: 2010,
      by: "Council meeting",
      ref: "Resolution 2010/112 (sample)",
      summary: "The original 1958 pool was leaking and failing safety standards. Council chose a full rebuild over repairs because repairs would have cost about 70% of a rebuild and only lasted 15 years. 1,200 residents gave feedback, and asked for heating and more shade.",
      consultation: 1200
    },
    condition: { rating: "Good", lastInspected: 2026 },
    upcoming: [
      { year: 2027, what: "Replace shade sails over the grandstand", cost: 250000 }
    ],
    features: ["Heated 50 m pool", "Toddler pool", "Solar heating", "Green roof"],
    access: ["Pool hoist", "Accessible change room", "Step-free entry"]
  },
  {
    id: "victoria-park-pool",
    name: "Victoria Park Pool",
    category: "pool",
    suburb: "Camperdown",
    address: "City Rd, Camperdown NSW 2050",
    coords: [-33.8863, 151.1921],
    opened: 1953,
    lastUpgrade: 2020,
    capitalCost: 4200000,
    capitalNote: "Heritage refurbishment in 2020",
    annualCost: 1400000,
    breakdown: [
      { label: "Lifeguards and staff", amount: 820000 },
      { label: "Water heating and energy", amount: 330000 },
      { label: "Cleaning and repairs", amount: 250000 }
    ],
    visitsPerYear: 290000,
    maintainedBy: {
      name: "Contracted aquatic operator",
      type: "Contractor",
      detail: "Same operator contract as Prince Alfred Park Pool, so staff and equipment are shared.",
      contractEnds: 2028
    },
    whyHere: "Built after World War II for the inner west's working families. Today it mainly serves university students, Glebe and Camperdown. The pool and its art deco entrance are heritage listed, so it has to be kept, not replaced.",
    decision: {
      year: 2018,
      by: "Council meeting",
      ref: "Resolution 2018/204 (sample)",
      summary: "A heritage listing means the pool cannot be demolished. Council funded a refurbishment that kept the 1950s look but replaced the filters and pipes, which cut water loss by about 40%.",
      consultation: 640
    },
    condition: { rating: "Fair", lastInspected: 2025 },
    upcoming: [
      { year: 2028, what: "Replace pool plant room (pumps and filters)", cost: 1600000 }
    ],
    features: ["Heated 50 m pool", "Children's pool", "Gym", "Cafe"],
    access: ["Pool hoist", "Accessible toilet"]
  },
  {
    id: "ian-thorpe-aquatic-centre",
    name: "Ian Thorpe Aquatic Centre",
    category: "pool",
    suburb: "Ultimo",
    address: "458 Harris St, Ultimo NSW 2007",
    coords: [-33.8781, 151.1957],
    opened: 2007,
    lastUpgrade: 2007,
    capitalCost: 40000000,
    capitalNote: "Original build",
    annualCost: 3200000,
    breakdown: [
      { label: "Lifeguards, coaches and staff", amount: 1700000 },
      { label: "Heating, ventilation and energy", amount: 900000 },
      { label: "Cleaning and repairs", amount: 600000 }
    ],
    visitsPerYear: 650000,
    maintainedBy: {
      name: "Contracted aquatic operator",
      type: "Contractor",
      detail: "Building structure and roof are maintained by Council's Property team.",
      contractEnds: 2029
    },
    whyHere: "Ultimo and Pyrmont grew from an industrial area into one of Sydney's fastest growing neighbourhoods in the 1990s, with no indoor pool. The site was a former council depot, so no land had to be bought.",
    decision: {
      year: 2003,
      by: "Council meeting",
      ref: "Resolution 2003/077 (sample)",
      summary: "Council ran a design competition and chose a curved roof design that lets in daylight and reduces lighting costs. Building on its own depot land saved an estimated $12 million.",
      consultation: 900
    },
    condition: { rating: "Good", lastInspected: 2026 },
    upcoming: [
      { year: 2027, what: "Replace roof waterproofing membrane", cost: 900000 }
    ],
    features: ["Indoor 50 m pool", "Leisure pool", "Gym", "Swim school"],
    access: ["Pool ramp", "Pool hoist", "Accessible change rooms", "Lift"]
  },
  {
    id: "customs-house-library",
    name: "Customs House Library",
    category: "library",
    suburb: "Sydney",
    address: "31 Alfred St, Sydney NSW 2000",
    coords: [-33.8615, 151.2107],
    opened: 2005,
    builtOriginally: 1845,
    lastUpgrade: 2005,
    capitalCost: 8000000,
    capitalNote: "Library fit-out inside the heritage building",
    annualCost: 1100000,
    breakdown: [
      { label: "Library staff", amount: 720000 },
      { label: "Books, e-books and newspapers", amount: 210000 },
      { label: "Building upkeep", amount: 170000 }
    ],
    visitsPerYear: 420000,
    maintainedBy: {
      name: "City Libraries team",
      type: "Council team",
      detail: "Council staff run the library. Heritage repairs to the building use specialist trades."
    },
    whyHere: "Over 600,000 people work in or visit the CBD each day, but the CBD had no lending library. Customs House, built in 1845, was empty after customs moved out, and reusing it kept a heritage landmark open to the public.",
    decision: {
      year: 2003,
      by: "Council meeting",
      ref: "Resolution 2003/151 (sample)",
      summary: "Council compared leasing a new CBD office floor with fitting out Customs House. Customs House cost more up front but avoided rent of around $900,000 a year.",
      consultation: null
    },
    condition: { rating: "Good", lastInspected: 2025 },
    upcoming: [
      { year: 2027, what: "Sandstone facade repairs", cost: 450000 }
    ],
    features: ["Newspapers in 40+ languages", "Study spaces", "Model of the city under a glass floor"],
    access: ["Lift", "Accessible toilet", "Hearing loop"]
  },
  {
    id: "green-square-library",
    name: "Green Square Library",
    category: "library",
    suburb: "Zetland",
    address: "355 Botany Rd, Zetland NSW 2017",
    coords: [-33.9060, 151.2036],
    opened: 2018,
    lastUpgrade: 2018,
    capitalCost: 38600000,
    capitalNote: "Original build, mostly underground",
    annualCost: 1800000,
    breakdown: [
      { label: "Library staff", amount: 1050000 },
      { label: "Books, games and technology", amount: 380000 },
      { label: "Building upkeep and energy", amount: 370000 }
    ],
    visitsPerYear: 510000,
    maintainedBy: {
      name: "City Libraries team",
      type: "Council team",
      detail: "Council staff run the library. Lifts and air conditioning are serviced under contract."
    },
    whyHere: "Green Square is one of the largest urban renewal areas in Australia, expected to house more than 60,000 people. The library was built early so services were ready as new residents arrived, and it sits in the new town square next to the train station.",
    decision: {
      year: 2012,
      by: "International design competition, approved by Council",
      ref: "Resolution 2012/089 (sample)",
      summary: "The library was placed mostly underground so the plaza above stays open for public events. The winning design was chosen from 170 entries by a jury including residents.",
      consultation: 2100
    },
    condition: { rating: "Good", lastInspected: 2026 },
    upcoming: [],
    features: ["Music rooms", "Creative studio", "Outdoor reading garden", "Toy library"],
    access: ["Lift", "Accessible toilets", "Hearing loop", "Quiet room"]
  },
  {
    id: "surry-hills-library",
    name: "Surry Hills Library and Community Centre",
    category: "library",
    suburb: "Surry Hills",
    address: "405 Crown St, Surry Hills NSW 2010",
    coords: [-33.8857, 151.2117],
    opened: 2009,
    lastUpgrade: 2009,
    capitalCost: 13000000,
    capitalNote: "Original build",
    annualCost: 950000,
    breakdown: [
      { label: "Library and centre staff", amount: 610000 },
      { label: "Books and programs", amount: 160000 },
      { label: "Building upkeep and energy", amount: 180000 }
    ],
    visitsPerYear: 300000,
    maintainedBy: {
      name: "City Libraries team",
      type: "Council team",
      detail: "Shares a building with a childcare centre and community rooms."
    },
    whyHere: "Combining a library, childcare and meeting rooms in one building on a small site meant Council only had to buy one block of land on busy Crown Street, which is easy to reach on foot and by bus.",
    decision: {
      year: 2006,
      by: "Council meeting",
      ref: "Resolution 2006/033 (sample)",
      summary: "Council chose a design with a glass facade that opens and closes automatically to cool the building, aiming to use about half the energy of a standard library.",
      consultation: 750
    },
    condition: { rating: "Good", lastInspected: 2025 },
    upcoming: [
      { year: 2026, what: "Replace automated facade motors", cost: 180000 }
    ],
    features: ["Library", "Childcare", "Community rooms", "Small park"],
    access: ["Lift", "Accessible toilet"]
  },
  {
    id: "glebe-library",
    name: "Glebe Library",
    category: "library",
    suburb: "Glebe",
    address: "186 Glebe Point Rd, Glebe NSW 2037",
    coords: [-33.8790, 151.1855],
    opened: 1994,
    lastUpgrade: 2016,
    capitalCost: 2400000,
    capitalNote: "Refurbishment in 2016",
    annualCost: 620000,
    breakdown: [
      { label: "Library staff", amount: 430000 },
      { label: "Books and programs", amount: 110000 },
      { label: "Building upkeep", amount: 80000 }
    ],
    visitsPerYear: 160000,
    maintainedBy: {
      name: "City Libraries team",
      type: "Council team",
      detail: "Council staff run the library."
    },
    whyHere: "Glebe Point Road is the local main street, and the library sits halfway along it, close to the bus route, schools and public housing.",
    decision: {
      year: 2015,
      by: "Council meeting",
      ref: "Resolution 2015/140 (sample)",
      summary: "Instead of building a new library, Council refurbished the existing one and added more study space after surveys showed students needed quiet places to work.",
      consultation: 380
    },
    condition: { rating: "Fair", lastInspected: 2025 },
    upcoming: [
      { year: 2028, what: "Replace air conditioning", cost: 340000 }
    ],
    features: ["Study spaces", "Local history collection", "Garden"],
    access: ["Step-free entry", "Accessible toilet"]
  },
  {
    id: "sydney-park",
    name: "Sydney Park",
    category: "park",
    suburb: "St Peters",
    address: "Sydney Park Rd, St Peters NSW 2044",
    coords: [-33.9105, 151.1845],
    opened: 1991,
    lastUpgrade: 2015,
    capitalCost: 11000000,
    capitalNote: "Wetlands and water recycling project, 2015",
    annualCost: 2600000,
    breakdown: [
      { label: "Grounds and gardening crews", amount: 1500000 },
      { label: "Wetland and water recycling", amount: 520000 },
      { label: "Cleaning and bins", amount: 380000 },
      { label: "Lighting and repairs", amount: 200000 }
    ],
    visitsPerYear: 1800000,
    maintainedBy: {
      name: "Parks and Open Space team",
      type: "Council team",
      detail: "Council gardeners care for the park. Wetland water quality is tested every month by a specialist contractor."
    },
    whyHere: "This was a brickworks and then a rubbish tip. Turning it into a 44 hectare park gave the southern suburbs their biggest open space. The wetlands now clean stormwater that used to run straight into Alexandra Canal.",
    decision: {
      year: 2012,
      by: "Council meeting",
      ref: "Resolution 2012/201 (sample)",
      summary: "Council built wetlands that capture and clean around 850 million litres of stormwater a year. This water is reused for irrigation, which saves drinking water and lowers water bills.",
      consultation: 1600
    },
    condition: { rating: "Good", lastInspected: 2026 },
    upcoming: [
      { year: 2027, what: "New accessible playground near the brick kilns", cost: 1200000 }
    ],
    features: ["Wetlands", "Off-leash dog area", "Bike track", "Heritage brick kilns", "Cafe"],
    access: ["Accessible paths", "Accessible toilets", "Accessible parking"]
  },
  {
    id: "redfern-park",
    name: "Redfern Park and Oval",
    category: "park",
    suburb: "Redfern",
    address: "Redfern St, Redfern NSW 2016",
    coords: [-33.8926, 151.2048],
    opened: 1885,
    lastUpgrade: 2009,
    capitalCost: 14000000,
    capitalNote: "Park and oval upgrade, 2009",
    annualCost: 780000,
    breakdown: [
      { label: "Grounds and turf care", amount: 460000 },
      { label: "Cleaning and bins", amount: 190000 },
      { label: "Lighting and repairs", amount: 130000 }
    ],
    visitsPerYear: 600000,
    maintainedBy: {
      name: "Parks and Open Space team",
      type: "Council team",
      detail: "Oval turf is managed with a specialist sports turf contractor."
    },
    whyHere: "One of Sydney's oldest parks and a place of national significance. Prime Minister Paul Keating gave the Redfern Speech here in 1992. It is a gathering place for the local Aboriginal community and the historic home ground of the South Sydney Rabbitohs.",
    decision: {
      year: 2007,
      by: "Council meeting, with Aboriginal community advisory panel",
      ref: "Resolution 2007/066 (sample)",
      summary: "The upgrade kept the oval and added a stage and memorial marking the Redfern Speech. Local Aboriginal elders advised on the design.",
      consultation: 980
    },
    condition: { rating: "Good", lastInspected: 2026 },
    upcoming: [
      { year: 2026, what: "Resurface oval and renew irrigation", cost: 650000 }
    ],
    features: ["Oval", "Playground", "Memorial", "Stage"],
    access: ["Accessible paths", "Accessible toilet"]
  },
  {
    id: "harmony-park",
    name: "Harmony Park",
    category: "park",
    suburb: "Surry Hills",
    address: "Goulburn St, Surry Hills NSW 2010",
    coords: [-33.8790, 151.2098],
    opened: 2011,
    lastUpgrade: 2011,
    capitalCost: 5200000,
    capitalNote: "Converted from a car park",
    annualCost: 210000,
    breakdown: [
      { label: "Gardening", amount: 120000 },
      { label: "Cleaning and bins", amount: 60000 },
      { label: "Lighting and repairs", amount: 30000 }
    ],
    visitsPerYear: 250000,
    maintainedBy: {
      name: "Parks and Open Space team",
      type: "Council team",
      detail: "Council gardeners visit three times a week."
    },
    whyHere: "Surry Hills had very little green space for the number of people living there. A council car park on this block was turned into a park because it was the only large piece of land Council already owned nearby.",
    decision: {
      year: 2009,
      by: "Council meeting",
      ref: "Resolution 2009/158 (sample)",
      summary: "Council gave up the car park income (about $300,000 a year) to create open space. Residents chose a lawn and big trees over more paving.",
      consultation: 520
    },
    condition: { rating: "Good", lastInspected: 2025 },
    upcoming: [],
    features: ["Lawn", "Shade trees", "Seating", "Drinking fountain"],
    access: ["Step-free paths"]
  },
  {
    id: "pyrmont-community-centre",
    name: "Pyrmont Community Centre",
    category: "community",
    suburb: "Pyrmont",
    address: "John St, Pyrmont NSW 2009",
    coords: [-33.8702, 151.1927],
    opened: 2001,
    lastUpgrade: 2019,
    capitalCost: 1900000,
    capitalNote: "Refurbishment in 2019",
    annualCost: 420000,
    breakdown: [
      { label: "Centre staff and programs", amount: 290000 },
      { label: "Building upkeep and energy", amount: 130000 }
    ],
    visitsPerYear: 95000,
    maintainedBy: {
      name: "Community Services team",
      type: "Council team",
      detail: "Council runs programs. Community groups can hire rooms at subsidised rates."
    },
    whyHere: "Pyrmont is full of apartments with no shared rooms big enough for community groups, classes or family events. The centre gives residents a place to meet close to home.",
    decision: {
      year: 2018,
      by: "Council meeting",
      ref: "Resolution 2018/092 (sample)",
      summary: "Council refurbished the centre and added a gym and seniors' lounge after residents over 65 said they had nowhere to go during the day.",
      consultation: 310
    },
    condition: { rating: "Good", lastInspected: 2025 },
    upcoming: [],
    features: ["Hall for hire", "Gym", "Seniors' programs", "Kids' activities"],
    access: ["Lift", "Accessible toilet", "Hearing loop"]
  },
  {
    id: "alexandria-park",
    name: "Alexandria Park",
    category: "sport",
    suburb: "Alexandria",
    address: "Buckland St, Alexandria NSW 2015",
    coords: [-33.9032, 151.1972],
    opened: 1890,
    lastUpgrade: 2019,
    capitalCost: 3500000,
    capitalNote: "Synthetic field and lighting, 2019",
    annualCost: 360000,
    breakdown: [
      { label: "Field and grounds care", amount: 210000 },
      { label: "Lighting and energy", amount: 90000 },
      { label: "Cleaning and bins", amount: 60000 }
    ],
    visitsPerYear: 220000,
    maintainedBy: {
      name: "Parks and Open Space team",
      type: "Council team",
      detail: "Field bookings are managed by Council's Sport and Recreation team."
    },
    whyHere: "Local sports clubs had more teams than fields. A synthetic surface can be used every night of the week without wearing out, so one field now does the job of about three grass fields.",
    decision: {
      year: 2017,
      by: "Council meeting",
      ref: "Resolution 2017/175 (sample)",
      summary: "Council chose a synthetic field with LED lights. It costs more to build than grass but is cheaper to run and can host around 60 hours of games and training a week.",
      consultation: 430
    },
    condition: { rating: "Good", lastInspected: 2026 },
    upcoming: [],
    features: ["Synthetic football field", "Tennis courts", "Playground", "Off-leash dog area"],
    access: ["Accessible paths", "Accessible toilet"]
  },
  {
    id: "taylor-square-toilet",
    name: "Taylor Square Public Toilet",
    category: "toilet",
    suburb: "Darlinghurst",
    address: "Oxford St, Darlinghurst NSW 2010",
    coords: [-33.8806, 151.2160],
    opened: 2014,
    lastUpgrade: 2014,
    capitalCost: 320000,
    capitalNote: "Automated toilet unit",
    annualCost: 48000,
    breakdown: [
      { label: "Cleaning and supplies", amount: 30000 },
      { label: "Servicing and repairs", amount: 18000 }
    ],
    visitsPerYear: 70000,
    maintainedBy: {
      name: "Contracted cleaning provider",
      type: "Contractor",
      detail: "Cleaned at least twice a day, more on weekends.",
      contractEnds: 2027
    },
    whyHere: "Oxford Street is busy late at night and during events like Mardi Gras. Businesses and residents asked for a 24 hour toilet to reduce public urination in laneways.",
    decision: {
      year: 2013,
      by: "Council meeting",
      ref: "Resolution 2013/210 (sample)",
      summary: "An automated, self-cleaning toilet was chosen because it can stay open 24 hours without staff and is designed to discourage misuse.",
      consultation: null
    },
    condition: { rating: "Fair", lastInspected: 2026 },
    upcoming: [
      { year: 2026, what: "Replace door mechanism and lighting", cost: 35000 }
    ],
    features: ["Open 24 hours", "Self-cleaning"],
    access: ["Wheelchair accessible", "Baby change table"]
  }
];
