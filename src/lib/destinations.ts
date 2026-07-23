export type Region = {
  id: string;
  name: string;
  area: string;
  cardImg: string;
  detailImg: string;
  note: string;
  blurbTitle: string;
  blurb: string;
  credit?: string;
  detailCredit?: string;
  detailPos?: string;
  cardPos?: string;
};

export type ItineraryDay = {
  n: string;
  title: string;
  sub: string;
  where: string;
};

export type Itinerary = {
  name: string;
  soft?: string;
  duration: string;
  intro: string;
  days: ItineraryDay[];
};

export type Country = {
  id: string;
  n: string;
  name: string;
  accent: string;
  regions: Region[];
  itinerary: Itinerary;
};

export const DESTINATIONS: Country[] = [
  {
    id: 'ireland',
    n: '01',
    name: 'Ireland',
    accent: 'Towering dunes, wild coastlines, and the warmest of welcomes.',
    regions: [
      {
        id: 'southwest', name: 'Southwest', area: 'The Great Atlantic Links',
        cardImg: '/assets/dest-ireland-southwest-card-opt.webp',
        detailImg: '/assets/dest-ireland-southwest-detail-v2.webp',
        note: 'Ballybunion (Old), Waterville, Tralee, Lahinch, Old Head, Adare Manor, Killarney Golf & Fishing Club, Dooks, Doonbeg, Dingle.',
        blurbTitle: 'Tumbling Dunes, Trad Sessions & the Wild Atlantic Way',
        blurb: "Ireland's southwest is magical — a coastline of vast, tumbling dunes running from Clare into Kerry. Ballybunion, Tralee and Lahinch sit within an easy drive of one another, with the cliff-top drama of Old Head jutting out into the Atlantic down south in Cork, and the immaculately manicured fairways of Adare Manor — host of the 2027 Ryder Cup — easily accessible inland. Hidden gems such as Dooks and Dingle can be found along roads that hug the coast, making this the richest run of world-class golf anywhere. The towns and villages along the way are as charming and fun as anywhere in the world.",
      },
      {
        id: 'northwest', name: 'Northwest', area: 'Towering Dunes & Rugged Coast',
        cardImg: '/assets/dest-ireland-northwest-card-sm.webp',
        detailImg: '/assets/dest-ireland-northwest-detail-opt.webp',
        note: "Rosapenna (St. Patrick's, Old Tom, Sandy Hills), Donegal, Ballyliffin, Enniscrone, Co. Sligo, Carne, Narin & Portnoo, Strandhill, Portsalon, Cruit Island.",
        blurbTitle: 'Quieter, Wilder & Worth the Drive',
        blurb: "Quieter and wilder than the south, the northwest rewards those willing to make the drive. County Sligo at Rosses Point plays out beneath the brooding shadow of Ben Bulben, with the rolling hills of Enniscrone close by. From there the run stretches west to adventure golf amongst the huge dunes of Carne on the Belmullet peninsula, then up north to the world-class links of Rosapenna (St. Patrick's), with the magic of Narin & Portnoo, Cruit Island and the other remote Donegal courses dotted along the coast. This is links golf stripped right back to its essentials — wild, honest and unforgettable.",
      },
      {
        id: 'ni', name: 'Northern Ireland', area: 'World Renowned on the Causeway Coast',
        cardImg: '/assets/dest-ireland-ni-card-v2.webp',
        detailImg: '/assets/dest-ireland-ni-detail-sm.webp',
        detailCredit: 'Photo · Royal County Down',
        note: 'Royal Portrush, Royal County Down, Portstewart (Strand), Castlerock, Ardglass, Lough Erne.',
        blurbTitle: 'Two Royals & the Causeway Coast',
        blurb: "Home to two of the finest courses on earth — Royal Portrush and Royal County Down — Northern Ireland packs championship links into a short, scenic stretch. Portstewart's Strand course rolls through some of the most spectacular dunes anywhere, while Ardglass plays from a clubhouse set in a centuries-old castle. The Causeway coast road connects them, past the Giant's Causeway, clifftop distilleries and harbour towns. Compact, dramatic and unforgettable.",
      },
      {
        id: 'east', name: 'East Coast', area: 'Dublin City',
        cardImg: '/assets/dest-ireland-east-card-g-opt.webp',
        detailImg: '/assets/dest-ireland-east-detail-opt-sm.webp',
        detailCredit: 'Photo · Adam Toth',
        note: 'Portmarnock, Royal Dublin, Jameson Golf Links, Co. Louth (Baltray), The Island, Brittas Bay (formerly The European Club), The K Club.',
        blurbTitle: 'Championship Links on the Capital’s Doorstep',
        blurb: "The east coast pairs world-class links with the buzz of Dublin just minutes away. Storied Portmarnock has hosted Irish Opens and Amateur Championships across more than a century and remains one of the great championship links, while the underrated pair of Baltray (Co. Louth) and The Island reward anyone who seeks them out with classic, dune-framed golf. Just down the coast, the soon-to-reopen Brittas Bay (formerly The European Club) adds another world-class name to the list. With the capital on the doorstep, it is golf and city life without compromise.",
      },
    ],
    itinerary: {
      name: 'The Wild Atlantic Arrangement',
      soft: 'Atlantic',
      duration: '7 days · 6 nights',
      intro: "A week along Ireland's rugged northwest — Donegal to Sligo and Mayo. Top-100 links, headland drives, hidden gems and a Benbulben backdrop on the way home.",
      days: [
        { n: 'Day 01', title: 'Arrive & wander north', sub: 'Land in Dublin and drive into the wild northwest. A late afternoon stop at Glenveagh or Fanad Head, then a long unwind at Rosapenna.', where: 'Dublin → Donegal' },
        { n: 'Day 02', title: 'Rosapenna · Round one', sub: 'A warm-up on hallowed ground — the Old Tom Morris Links or Sandy Hills, among the finest links properties in the world.', where: 'Downings' },
        { n: 'Day 03', title: "St Patrick's Links, then south", sub: 'The headline act — a Tom Doak design carved into towering dunes, already a world top-100 links and widely hailed as one of the finest new courses anywhere. Drive on to Sligo afterwards for a night in the city centre.', where: 'Downings → Sligo' },
        { n: 'Day 04', title: 'Carne, at the edge of the map', sub: 'Remote, dramatic, unforgettable. Some of the largest dunes you will ever play — worth every mile of the road in.', where: 'Belmullet' },
        { n: 'Day 05', title: 'Enniscrone', sub: 'Towering dunes and old-school links charm. The dark horse of the week — seriously underrated.', where: 'Enniscrone' },
        { n: 'Day 06', title: 'Rosses Point, then back to the city', sub: 'A morning round at County Sligo with Benbulben on the skyline, then an easy drive back towards Dublin for a final night in the capital.', where: 'Rosses Point → Dublin' },
        { n: 'Day 07', title: 'Last morning & home', sub: 'A relaxed breakfast and a little time in the city before the transfer to Dublin for the flight out.', where: 'Dublin → Home' },
      ],
    },
  },
  {
    id: 'scotland',
    n: '02',
    name: 'Scotland',
    accent: 'The home of golf.',
    regions: [
      {
        id: 'standrews', name: 'St. Andrews', area: 'The Home of Golf',
        cardImg: '/assets/dest-scotland-standrews-card-v2.webp',
        detailImg: '/assets/dest-scotland-standrews-detail-v3.webp',
        note: 'The Old Course, Carnoustie, Panmure, Kingsbarns, St. Andrews New, St. Andrews Castle, The Golf House Club Elie, Crail Golfing Society, Dumbarnie, Lundin Links, Leven Links.',
        blurbTitle: 'Where the Game Began',
        blurb: "There is nowhere quite like St. Andrews — the home of the game, with six centuries of golf woven through the town. The Swilcan Bridge has been crossed by every great in history and the influence of Old Tom Morris still runs right through the town. Beyond the famous old streets lies a Kingdom rich in golf — the brutal championship test of Carnoustie, the clifftop beauty of Kingsbarns, and the hidden charms of the East Neuk at Crail, Elie and Lundin. It is a pilgrimage every golfer makes at least once, and most spend the rest of their lives wanting to return.",
      },
      {
        id: 'lothian', name: 'East Lothian', area: "Scotland's Golf Coast",
        cardImg: '/assets/dest-scotland-eastlothian-card.webp',
        detailImg: '/assets/dest-scotland-eastlothian-detail-v2.webp',
        detailPos: '50% 72%',
        detailCredit: 'Photo · Will Scott',
        note: 'Muirfield, North Berwick (West Links), Gullane, Dunbar, Kilspindie, Luffness, Archerfield, Longniddry, Craigielaw.',
        blurbTitle: 'Historic Links Along One Coast',
        blurb: "Few corners of Scotland pack in this much great golf. East Lothian's coast carries a remarkable run of historic links — from Muirfield's distinctive layout and championship pedigree to North Berwick's much-imitated closing holes — on links that have shaped the game for generations. Gullane's three courses and hidden gems like Kilspindie sit against sweeping coastal views, the Firth of Forth on one side, Edinburgh a short distance away on the other.",
      },
      {
        id: 'ayrshire', name: 'Ayrshire', area: 'Open Championship Country',
        cardImg: '/assets/dest-scotland-ayrshire-card-opt-sm.webp',
        credit: 'Photo · Mark Alexander',
        detailImg: '/assets/dest-scotland-ayrshire-detail-opt-sm.webp',
        note: 'Turnberry (The Ailsa), Prestwick, Royal Troon, Western Gailes, Dundonald Links, West Kilbride, Kilmarnock (Barassie), Glasgow Gailes, Irvine.',
        blurbTitle: 'The Ailsa Craig, Championship Links & the Birthplace of the Open',
        blurb: "Ayrshire is Open Championship country in its purest form. Prestwick staged the very first Open in 1860, and the region has been crowning champions ever since — Turnberry's Ailsa, scene of the famous 1977 Duel in the Sun between Watson and Nicklaus, sits along the same coast as Royal Troon, where Arnold Palmer, Tom Watson and Henrik Stenson have all lifted the Claret Jug. Add the underrated links of Western Gailes, Dundonald and Prestwick itself, and you have one of the finest stretches of championship golf anywhere, the Ailsa Craig looming offshore and great golf country rolling inland.",
      },
      {
        id: 'westcoast', name: 'West Coast & Islands', area: 'Remote & Wild',
        cardImg: '/assets/dest-scotland-westcoast-card-sm.webp',
        detailImg: '/assets/dest-scotland-westcoast-detail-v2.webp',
        note: 'Machrihanish, Machrihanish Dunes, The Machrie, Ardfin, Dunaverty, Shiskine Golf and Tennis Club.',
        blurbTitle: "Ferries, Single Malts & Scotland's Most Remote Links",
        blurb: "For the adventurous, the west coast and islands offer some of the most remote links in Scotland. Machrihanish (and its iconic opening tee shot played out over the beach), the Machrie on Islay and Ardfin reward the ferries and the long roads with single malts and scenery that stops you mid-swing. And then there is the magic of Shiskine on Arran — a quirky, much-loved twelve-hole links unlike anywhere else in the game. Golf as escape.",
      },
      {
        id: 'highlands', name: 'The Highlands', area: 'The Untamed North',
        cardImg: '/assets/dest-scotland-highlands-card-opt-sm.webp',
        detailImg: '/assets/dest-scotland-highlands-detail-sm.webp',
        detailPos: '50% 88%',
        note: 'Royal Dornoch, Cabot Highlands (Castle Stuart & Old Petty), Nairn, Fortrose & Rosemarkie, Brora, Boat of Garten, Golspie.',
        blurbTitle: 'Big Skies, Wild Country & the Spirit of Exploration',
        blurb: "The Highlands hold some of golf's most cherished links, set deep in Scotland's wild and beautiful north. Royal Dornoch — the timeless masterpiece that shaped a young Donald Ross — anchors a run that now includes the modern thrill of Cabot Highlands at Castle Stuart and Old Petty. Further afield lie Nairn's classical test and the wonderful eccentricity of Brora, where sheep still graze the fairways. From the shores of Loch Ness, to the Moray Firth and the Cairngorms — this is a region made for exploring.",
      },
      {
        id: 'aberdeenshire', name: 'Aberdeenshire', area: 'The Granite Coast',
        cardImg: '/assets/dest-scotland-aberdeenshire-card-v2.webp',
        detailImg: '/assets/dest-scotland-aberdeenshire-detail-v2.webp',
        detailPos: '50% 82%',
        detailCredit: 'Photo · R Reglade',
        note: 'Royal Aberdeen, Cruden Bay, Trump International (Old & New), Murcar Links.',
        blurbTitle: 'Old-World Classics & Modern Giants',
        blurb: "Aberdeenshire's granite coast pairs old-world classics like Royal Aberdeen and Cruden Bay with sweeping modern giants. Among the towering dunes at Trump International sit two world-class links, both routed through some of the most dramatic duneland in the country. North Sea wind and a city built of silver stone make this Scotland's underrated corner — raw, exposed and thrilling.",
      },
    ],
    itinerary: {
      name: 'The Full Scottish',
      soft: 'Full',
      duration: '9 days · 8 nights',
      intro: "A grand tour from the Highlands to the capital — Inverness to Aberdeen to Edinburgh. World top-ten links, a modern marvel, hidden gems and Loch Ness along the way.",
      days: [
        { n: 'Day 01', title: 'Arrive in the Highlands', sub: 'Fly into Edinburgh and travel north through the Highlands to Inverness, your base for the days ahead — with Loch Ness and the glens to take in along the way.', where: 'Edinburgh → Inverness' },
        { n: 'Day 02', title: 'Cabot Highlands', sub: 'A spectacular opening round minutes from the city — Castle Stuart or the new Old Petty, laid out above the Moray Firth. A distillery visit to follow, perhaps Glen Ord or Tomatin.', where: 'Inverness' },
        { n: 'Day 03', title: 'Royal Dornoch', sub: 'The pilgrimage. One of the greatest links on earth, an hour north through wild Highland country.', where: 'Dornoch' },
        { n: 'Day 04', title: 'Brora, then the road east', sub: 'A morning at quirky, much-loved Brora — where sheep still graze the fairways — then the scenic drive down to the granite city.', where: 'Brora → Aberdeen' },
        { n: 'Day 05', title: 'Cruden Bay', sub: 'A roller-coaster links through some of the finest dunes in the country, with a night in Aberdeen to follow.', where: 'Cruden Bay → Aberdeen' },
        { n: 'Day 06', title: 'Royal Aberdeen, then south', sub: 'Towering dunes and a classic out-and-back on the silver coast, then the drive south to Edinburgh.', where: 'Aberdeen → Edinburgh' },
        { n: 'Day 07', title: 'North Berwick', sub: "Onto Scotland's Golf Coast for the famous West Links — blind shots, stone walls and the Bass Rock offshore.", where: 'East Lothian' },
        { n: 'Day 08', title: 'Gullane, then the capital', sub: 'A final round at Gullane, then into Edinburgh for a last night in the city.', where: 'East Lothian → Edinburgh' },
        { n: 'Day 09', title: 'Home', sub: 'A relaxed morning in Edinburgh before the flight out.', where: 'Edinburgh → Home' },
      ],
    },
  },
  {
    id: 'england',
    n: '03',
    name: 'England',
    accent: "England's golf, quietly world-class — heathland and links both.",
    regions: [
      {
        id: 'london', name: 'London', area: 'The Heathland Belt',
        cardImg: '/assets/dest-england-london-card-opt-sm.webp',
        detailImg: '/assets/dest-england-london-detail.webp',
        note: "Sunningdale (Old & New), St. George's Hill, Swinley Forest, Walton Heath, The Berkshire (Red & Blue), The Addington, Hankley Common.",
        blurbTitle: 'Purple Heather, Pine Forests & the Genius of Harry Colt',
        blurb: "Just beyond the capital lies Europe's finest concentration of heathland golf — firm, fast fairways framed by pine, silver birch and purple heather, in play all year round. Within the same leafy stretch of Surrey and Berkshire sit Sunningdale, Swinley Forest, Walton Heath and The Berkshire, many of them shaped by the great Harry Colt and his contemporaries during a golden age of design. It is a world away from the city, yet close enough to pair championship golf with everything London has to offer — a refined, unhurried side of the game at its very best.",
      },
      {
        id: 'kent', name: 'The South East', area: 'Kent',
        cardImg: '/assets/dest-england-kent-card-opt.webp',
        detailImg: '/assets/dest-england-kent-detail-opt-sm.webp',
        note: "Royal St. George's, Royal Cinque Ports (Deal), Prince's, Littlestone.",
        blurbTitle: 'White Cliffs, Sea Air & Classic Links',
        blurb: "Kent's open coast is true links country, anchored by Royal St. George's — England's regular Open venue, where champions from Darren Clarke to Collin Morikawa have lifted the Claret Jug. Alongside it sit Royal Cinque Ports (Deal) and Prince's, a tight-knit trio of historic links set against big skies, white cliffs and the Sandwich shore. With the Channel ports close at hand, it is classic seaside golf with real championship pedigree, all within easy reach of London.",
      },
      {
        id: 'liverpool', name: 'The North West', area: 'Liverpool & the Golf Coast',
        cardImg: '/assets/dest-england-liverpool-card-v2.webp',
        detailImg: '/assets/dest-england-liverpool-detail-opt-sm.webp',
        detailCredit: 'Photo · Royal Lytham & St. Annes',
        note: 'Royal Liverpool (Hoylake), Royal Birkdale, Royal Lytham & St. Annes, Formby, Hillside, Southport & Ainsdale, West Lancashire.',
        blurbTitle: 'Three Open Venues in a Row & a City That Sings',
        blurb: "England's golf coast runs north from Liverpool through a remarkable cluster of championship links. Royal Liverpool (Hoylake), Royal Birkdale and Royal Lytham & St. Annes are three Open venues almost in a row — Hoylake the stage for Tiger Woods' masterclass in 2006 and Rory McIlroy's triumph in 2014 — with Formby, Hillside and Southport & Ainsdale filling the gaps with firm, fast, dune-framed golf. At the end of the day waits Liverpool itself: a sport-mad, music-loving city with the Beatles in its bones and a warm welcome guaranteed. A destination that delivers long after the round is done.",
      },
    ],
    itinerary: {
      name: 'Heather to the Sea',
      soft: 'Sea',
      duration: '8 days · 7 nights',
      intro: "Europe's finest heathland and the Open links of the Kent coast, all within easy reach of the capital — pine, purple heather and the salt air of the Sandwich shore.",
      days: [
        { n: 'Day 01', title: 'Arrive in the heathland belt', sub: 'Fly into London and settle into the leafy calm of Surrey and Berkshire, where the great heathland courses sit within a few miles of one another.', where: 'London → the heathland belt' },
        { n: 'Day 02', title: 'The Berkshire', sub: 'Two contrasting heathland courses, the Red and the Blue — a relaxed first round into the trip.', where: 'Berkshire' },
        { n: 'Day 03', title: 'Sunningdale', sub: 'A 36-hole day on the heathland benchmark — the Old and the New, firm and fast through pine and heather.', where: 'Berkshire' },
        { n: 'Day 04', title: 'Swinley Forest', sub: "Harry Colt's intimate masterpiece, tucked into the pines. A quiet, private kind of perfect.", where: 'Berkshire' },
        { n: 'Day 05', title: "Prince's, then the coast", sub: 'Drive east to the Kent shore for a links at Prince’s, three loops of nine along the Sandwich coast.', where: 'Berkshire → Sandwich' },
        { n: 'Day 06', title: 'Royal Cinque Ports', sub: 'Classic seaside golf at Deal, hard by the Channel.', where: 'Deal' },
        { n: 'Day 07', title: "Royal St. George's", sub: "England's Open links, big and rumpled on the Sandwich shore. A last night on the coast to follow.", where: 'Sandwich' },
        { n: 'Day 08', title: 'Home', sub: 'A relaxed morning before the journey back and the flight out of London.', where: 'Sandwich → Home' },
      ],
    },
  },
];

export function findRegion(countryId: string, regionId: string) {
  const country = DESTINATIONS.find((c) => c.id === countryId);
  const region = country?.regions.find((r) => r.id === regionId);
  return country && region ? { country, region } : null;
}
