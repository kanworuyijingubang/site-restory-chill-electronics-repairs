export const SITE_URL = "https://restory-chillelectronicsrepairs.wiki";
export const SITE_NAME = "ReStory Repair Desk";
export const UPDATED = "Aug 13, 2026";

export type Source = {
  label: string;
  url: string;
  kind: "official" | "community";
};

export type RelatedLink = {
  href: string;
  title: string;
  description: string;
};

export type ContentSection = {
  title: string;
  intro?: string;
  paragraphs?: string[];
  bullets?: string[];
  steps?: { title: string; body: string }[];
  table?: { headers: string[]; rows: string[][] };
  note?: string;
  tone?: "default" | "warning" | "success";
};

export type FaqItem = { question: string; answer: string };

export type PageRecord = {
  path: string;
  title: string;
  description: string;
  eyebrow: string;
  answer: string;
  evidence: "Official facts" | "Official + community" | "Community-tested" | "Site information";
  index: boolean;
  sections: ContentSection[];
  sources?: Source[];
  related?: RelatedLink[];
  faq?: FaqItem[];
  spoiler?: boolean;
};

const steamStore: Source = {
  label: "Official Steam store",
  url: "https://store.steampowered.com/app/3812600/ReStory_Chill_Electronics_Repairs/",
  kind: "official"
};

const steamAchievements: Source = {
  label: "Official Steam Global Achievements",
  url: "https://steamcommunity.com/stats/3812600/achievements",
  kind: "official"
};

const steamGuides: Source = {
  label: "Steam Community guides index",
  url: "https://steamcommunity.com/app/3812600/guides/",
  kind: "community"
};

const achievementGuide: Source = {
  label: "Kleynce's 100% achievement guide (updated Aug 12)",
  url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3778809808",
  kind: "community"
};

const akibaGuide: Source = {
  label: "Dexter's Legend of Akiba guide (posted Aug 12)",
  url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3782095380",
  kind: "community"
};

const videoGuide: Source = {
  label: "Comfy Cozy Gaming tips video (full-release week)",
  url: "https://www.youtube.com/watch?v=Cf1k_EBKwws",
  kind: "community"
};

export const guideLinks: RelatedLink[] = [
  { href: "/guides/beginners/", title: "Beginner's guide", description: "Learn the repair and shop-management loop." },
  { href: "/guides/cleaning-and-reassembly/", title: "Cleaning & reassembly", description: "Find dirt, track parts and rebuild devices." },
  { href: "/guides/how-to-sell-devices/", title: "How to sell devices", description: "Use the marketplace without erasing your margin." },
  { href: "/guides/firmware-and-customization/", title: "Firmware & customization", description: "Unlock reprogramming, paint and stickers." },
  { href: "/guides/legend-of-akiba/", title: "Legend of Akiba", description: "Track all 29 competition devices." }
];

export const achievementGroups = [
  {
    title: "Repair & cleaning",
    items: [
      ["How did I do this?", "Repair a part using a soldering iron"],
      ["First fix!", "Repair a device for the first time"],
      ["Big cleaning!", "Remove dirt and dust from 100 parts"],
      ["Clean Job", "Clean the workshop"],
      ["Hands Free", "Buy an automatic ultrasonic bath for cleaning"],
      ["Shredder", "Buy a shredder for broken parts"],
      ["Galactic cleaning!", "Remove dirt and dust from 1,000 parts"]
    ]
  },
  {
    title: "Orders, shop & money",
    items: [
      ["All bills paid!", "Pay 2 bills"],
      ["Master of the Internet", "Accept an order by email for the first time"],
      ["First reviews!", "Get 5 reviews for your work"],
      ["Official Partner", "Buy any license"],
      ["Twist and turn", "Buy a professional screwdriver"],
      ["Flipper", "Buy 5 devices at the marketplace"],
      ["WWW", "Complete 25 email orders"],
      ["Lootbox", "Buy a box of parts"],
      ["Getting popular!", "Get 25 reviews for your work"],
      ["Golden Partner", "Acquire 5 licenses"],
      ["Frugal", "Do not buy any new parts for 10 days in a row"],
      ["Business Shark", "Earn more than ¥100,000 in a single day"],
      ["Millionaire!", "Earn ¥1,000,000"],
      ["Best shop in Akiba!", "Get 50 reviews for your work"],
      ["Garage sale!", "Buy 25 devices at the marketplace"],
      ["Making money!", "Sell 5 devices in total"],
      ["Internet Business", "Complete 100 email orders"],
      ["Bankrupt", "Get an overdue bill warning"],
      ["Gambler", "Buy 50 boxes of parts"],
      ["Are you serious? This is absurd!", "Buy the most expensive license"],
      ["Platinum Partner", "Acquire all licenses"]
    ]
  },
  {
    title: "Customization & workshop",
    items: [
      ["Custom orders available!", "Paint a device for a client's order for the first time"],
      ["A Place Of Zen", "Accumulate more than 100 Zen points"],
      ["Cozy!", "Buy something to make the workshop more cozy"],
      ["Hacking 101", "Reprogram a device for the first time"],
      ["Instant Cool", "Apply a sticker to a device"],
      ["Jack of all trades", "Complete an order involving painting, cleaning, repair and hacking"],
      ["Instant Cool-er", "Apply 25 stickers"],
      ["Sticker Bombing", "Apply 100 stickers"],
      ["11001", "Reprogram 25 devices"]
    ]
  },
  {
    title: "Akiba competitions & time",
    items: [
      ["Promise of Akiba", "Win a device assembly competition"],
      ["Star of Akiba", "Win 3 different device assembly competitions"],
      ["Employee of the Month", "Play through 30 days"],
      ["Akiba never sleeps!", "Do not end the day for 7 days in a row"],
      ["Quarterly Report", "Play through 90 days"],
      ["Legend of Akiba", "Win at least 1 assembly competition for each device"],
      ["Akiba Feels Like Home", "Play through 365 days"]
    ]
  },
  {
    title: "Story & hidden achievements",
    items: [
      ["Origami", "Help a child out for free"],
      ["Rock for the ages!", "Hidden description"],
      ["Ghost in the frame", "Eye in the sky looking at you..."],
      ["Melancholy", "I don't need no normal people!"],
      ["Ronin", "It is possible to perfectly fulfill one's calling as a warrior"],
      ["Globalization", "Hidden description"]
    ]
  }
] as const;

export const deviceGroups = [
  { title: "Gaming (12)", items: ["Nony PMP", "Atari 2600", "Atari CX40", "Nony PlayMachine", "Eggotchi", "Patento BS", "Atari Lynx", "Brick Game", "Game Duck", "BreadBox Joystick", "XI-Box Controller", "XI-Box"] },
  { title: "Phones (6)", items: ["Pokia 3310", "Autorolla Razor", "Pokia Njoy", "Simsons M65", "Blueberry Curl", "Wertu Signature"] },
  { title: "Other equipment (7)", items: ["Unicorp 99L", "Unicorp Kettle", "Autorolla WT2000", "Unicorp Vision", "Robby", "Nerdio W-91F", "Guitar Legend"] },
  { title: "Music (2)", items: ["Nony Goman", "Mapple Mypod"] },
  { title: "Camera (1)", items: ["Palaloid"] },
  { title: "Notebook (1)", items: ["IDM ThinkerDad"] }
] as const;

const commonRelated = [
  { href: "/guides/", title: "All guides", description: "Choose your next task." },
  { href: "/achievements/", title: "50 achievements", description: "Use the official checklist." },
  { href: "/faq/", title: "FAQ", description: "Check short answers and boundaries." }
];

export const pages: PageRecord[] = [
  {
    path: "/",
    title: "ReStory: Chill Electronics Repairs Wiki & Guides",
    description: "Evidence-labeled ReStory guides for cleaning, selling, firmware, achievements, Legend of Akiba, endings, devices and release facts.",
    eyebrow: "Full-release field manual",
    answer: "Pick the task blocking your shop. Every guide separates official Steam facts from release-week community tips.",
    evidence: "Official + community",
    index: true,
    sections: [
      { title: "Start with the task, not a giant wiki", intro: "The fastest route is the guide that matches the current bottleneck.", bullets: ["New shop: learn the inspect → repair → deliver → reinvest loop.", "Repair stuck: clean every side, track parts, then reassemble in reverse order.", "Progression stuck: check licenses, internet tools, client orders and day progression.", "Completion run: use the official achievement list and the 29-device Akiba checklist."] },
      { title: "Current official facts", table: { headers: ["Fact", "Confirmed value"], rows: [["Release", "Aug 6, 2026"], ["Platforms", "Windows and macOS on Steam"], ["Achievements", "50"], ["Developer / publisher", "Mandragora / tinyBuild"], ["Setting", "Mid-2000s Tokyo repair shop"]] }, note: "Regional price and review totals change. Follow the Steam link instead of relying on a copied number." },
      { title: "What this site will not guess", bullets: ["No claim of a Switch, PlayStation, Xbox or mobile release without an official announcement.", "No fabricated codes, cheats, cracks, trainers or downloads.", "No total ending count while current sources conflict.", "No device assembly order unless it has reproducible evidence."] }
    ],
    sources: [steamStore, steamAchievements, steamGuides],
    related: guideLinks
  },
  {
    path: "/guides/",
    title: "ReStory Guides: Repair, Sell, Customize & Progress",
    description: "Choose the ReStory guide that matches your current repair, marketplace, firmware, achievement, competition or story task.",
    eyebrow: "Guide router",
    answer: "Start with Beginner's Guide if the shop loop is new; otherwise jump directly to cleaning, selling, firmware/customization or Legend of Akiba.",
    evidence: "Official + community",
    index: true,
    sections: [
      { title: "Repair tasks", bullets: ["Cleaning & reassembly: locate every dirty, broken or missing part.", "Selling: decide whether a marketplace device is a repair, flip or parts donor.", "Firmware & customization: separate reprogramming, painting and sticker unlocks."] },
      { title: "Completion tasks", bullets: ["Achievements: all 50 official names and descriptions, grouped by task.", "Legend of Akiba: a 29-device competition checklist.", "Endings: spoiler-marked, achievement-linked choices only."] },
      { title: "Evidence labels", table: { headers: ["Label", "Meaning"], rows: [["Official", "Steam store, app data or Global Achievements"], ["Community-tested", "Current player guide/video, checked during release week"], ["Watch", "Demand exists but facts are not firm enough for a claim"]] } }
    ],
    sources: [steamStore, steamGuides],
    related: guideLinks
  },
  {
    path: "/guides/beginners/",
    title: "ReStory Beginner's Guide: Your First Repair-Shop Loop",
    description: "A source-labeled beginner's checklist for inspecting, cleaning, repairing, reassembling and growing your ReStory shop.",
    eyebrow: "Beginner workflow",
    answer: "Treat every job as the same controlled loop: read the request, inspect, disassemble in order, clean and replace, reassemble, verify, deliver, then reinvest.",
    evidence: "Official + community",
    index: true,
    sections: [
      { title: "First-day checklist", steps: [
        { title: "Read the job", body: "Confirm what the customer or online order actually requires before buying parts." },
        { title: "Inspect before buying", body: "Open the device and identify dirty, damaged and missing components. Keep viable parts separate." },
        { title: "Disassemble deliberately", body: "Notice which pieces cover other pieces. Reassembly follows the reverse dependency order." },
        { title: "Clean and replace", body: "Clean required parts, repair what the job permits and order only the missing parts you need." },
        { title: "Reassemble and verify", body: "Use the task/notepad cues, confirm nothing remains on the bench, then finish the order." },
        { title: "Reinvest with a purpose", body: "Licenses expand accepted device types; tools reduce friction. Keep enough cash for bills." }
      ] },
      { title: "Spend for the bottleneck", bullets: ["More job types needed? Buy the relevant license.", "Cleaning is slow? Improve the cleaning workflow before taking high-volume orders.", "Parts are expensive? Compare a new part with a marketplace donor device.", "Cash is tight? Prefer predictable cleaning/repair jobs before speculative flips."] },
      { title: "When the story seems stuck", bullets: ["Finish active customer and online-order steps.", "Check the shop computer, inbox and available applications.", "Ending the day can be a progression trigger; do not work forever if no new visitor arrives.", "Check current Steam discussions if a sequence still fails after a patch."], note: "The final point is community-tested, not an official progression guarantee." }
    ],
    sources: [steamStore, videoGuide],
    related: [guideLinks[1], guideLinks[2], { href: "/game-info/", title: "Game info", description: "Platforms and requirements." }]
  },
  {
    path: "/guides/cleaning-and-reassembly/",
    title: "How to Clean & Reassemble Devices in ReStory",
    description: "Find the last dirty part, keep track of layers and reassemble ReStory devices without missing a component.",
    eyebrow: "Repair checklist",
    answer: "Inspect every side, use the notepad/status cues, clean loose parts manually when an achievement requires it, then rebuild in reverse disassembly order.",
    evidence: "Community-tested",
    index: true,
    sections: [
      { title: "Find the part you missed", steps: [
        { title: "Change the view", body: "Check the center, left and right areas of the workspace; small items can sit outside the first view." },
        { title: "Use the task cues", body: "The notepad can identify the remaining category and highlight relevant pieces during normal jobs." },
        { title: "Inspect loose components", body: "Select pieces individually and look for dirty, damaged or missing-state indicators." },
        { title: "Check what is still on the bench", body: "A loose screw, cover, battery or bracket often means the device is not fully assembled." }
      ] },
      { title: "Manual cleaning vs ultrasonic bath", paragraphs: ["The automatic bath is useful for throughput. However, current achievement-guide evidence says its cleaning may not advance the manual part-cleaning counters used by Big cleaning! and Galactic cleaning!. If you are farming those achievements, clean parts manually and keep the work in one save."], note: "Community-tested during release week; recheck after patches." },
      { title: "Reassembly rule", bullets: ["Start with the deepest component that was removed last.", "Seat cables, boards and shields before outer shells.", "Install batteries/removable covers after the internal stack is complete.", "If a part will not place, another lower layer or fastener is probably missing."] }
    ],
    sources: [steamAchievements, achievementGuide, videoGuide],
    related: [{ href: "/guides/beginners/", title: "Beginner's guide", description: "Review the full job loop." }, { href: "/achievements/", title: "Cleaning achievements", description: "Track official thresholds." }, { href: "/guides/legend-of-akiba/", title: "Akiba checklist", description: "Prepare for no-hint assembly." }]
  },
  {
    path: "/guides/how-to-sell-devices/",
    title: "How to Sell Devices in ReStory Without Losing Money",
    description: "A practical ReStory marketplace, repair-versus-parts and selling checklist with official achievement anchors.",
    eyebrow: "Marketplace workflow",
    answer: "Buy only after comparing the device's condition, seller signal, missing parts and likely resale path; otherwise use it as a parts donor instead of forcing a loss-making repair.",
    evidence: "Official + community",
    index: true,
    sections: [
      { title: "The buy → decide → sell loop", steps: [
        { title: "Unlock and open the marketplace", body: "The in-game browser becomes a major source of devices and parts as the shop progresses." },
        { title: "Read the listing", body: "Prefer a clear condition and a credible seller signal while learning the economy." },
        { title: "Inspect total cost", body: "Add purchase price, missing components and repair time before committing to a flip." },
        { title: "Choose repair or donor", body: "If a complete repair is uneconomic, dismantle the item for parts you will actually use." },
        { title: "Finish before listing", body: "Clean, repair and reassemble the sellable device; avoid assuming a dirty or incomplete item will produce the intended margin." }
      ] },
      { title: "Achievement anchors", table: { headers: ["Achievement", "Official requirement"], rows: [["Flipper", "Buy 5 marketplace devices"], ["Garage sale!", "Buy 25 marketplace devices"], ["Making money!", "Sell 5 devices"], ["Business Shark", "Earn more than ¥100,000 in a day"], ["Millionaire!", "Earn ¥1,000,000"]] } },
      { title: "Avoid the common trap", paragraphs: ["A rare or broken item is not automatically profitable. If required parts cost more than the likely finished value, keep the useful components and move on. Maintain a bill reserve before buying speculative inventory."], note: "Exact prices and margins are deliberately not hard-coded because balance can change." }
    ],
    sources: [steamStore, steamAchievements, achievementGuide, videoGuide],
    related: [{ href: "/guides/beginners/", title: "Beginner's guide", description: "Build a stable cash loop." }, { href: "/achievements/", title: "Business achievements", description: "See official requirements." }, { href: "/game-info/", title: "Game info", description: "Check current official release facts." }]
  },
  {
    path: "/guides/firmware-and-customization/",
    title: "ReStory Firmware, Reprogramming & Customization Guide",
    description: "Understand ReStory firmware/reprogramming, airbrush painting and sticker unlocks without mixing the three systems.",
    eyebrow: "Unlock matrix",
    answer: "In ReStory, firmware search intent maps to device reprogramming: buy the Unlock-ToolKit and install its CD. Painting needs the airbrush plus palettes; stickers are purchased separately.",
    evidence: "Community-tested",
    index: true,
    sections: [
      { title: "Three separate systems", table: { headers: ["Task", "What unlocks it", "Official achievement"], rows: [["Reprogram / firmware", "Unlock-ToolKit and its computer application", "Hacking 101 / 11001"], ["Paint", "Airbrush plus palette sets", "Custom orders available!"], ["Stickers", "Sticker sheets from the in-game shop", "Instant Cool / Instant Cool-er / Sticker Bombing"]] } },
      { title: "Reprogramming workflow", steps: [
        { title: "Buy the tool", body: "Current community guides place the Unlock-ToolKit in the tool shop area of the in-game browser." },
        { title: "Install the application", body: "Use the delivered installation CD at the shop computer to add the reprogramming app." },
        { title: "Accept the right job", body: "A device/order must require or support reprogramming; the tool does not replace physical repair." },
        { title: "Verify completion", body: "Use the job requirements and official achievements as confirmation, not a real-world firmware procedure." }
      ] },
      { title: "If you cannot update firmware", bullets: ["Confirm the Unlock-ToolKit was purchased and its CD installed.", "Check that the current device/order actually calls for reprogramming.", "Do not confuse painting or sticker customization with firmware.", "If the app is installed but the job will not progress, check current patch notes/discussions before repeating purchases."], note: "This guide is about the in-game system, not updating Windows, Steam Controller or real device firmware." }
    ],
    sources: [steamAchievements, achievementGuide, videoGuide],
    related: [{ href: "/achievements/", title: "Customization achievements", description: "Check all official requirements." }, { href: "/guides/beginners/", title: "Beginner's guide", description: "Return to the core job loop." }, { href: "/faq/", title: "FAQ", description: "Check platform and progression boundaries." }]
  },
  {
    path: "/achievements/",
    title: "All 50 ReStory Achievements: Official Checklist",
    description: "All 50 official ReStory: Chill Electronics Repairs achievement names and descriptions, grouped by repair, business, customization, Akiba and story.",
    eyebrow: "Official achievement reference",
    answer: "Steam lists 50 achievements. Use the grouped checklist below; hidden story routes are clearly separated from official descriptions and community tips.",
    evidence: "Official + community",
    index: true,
    sections: [
      { title: "Before a completion run", bullets: ["Use one save for long counters unless a current source confirms cross-save progress.", "Treat hidden story achievements as missable until proven otherwise.", "Manual cleaning may be required for the 100/1,000-part counters.", "Legend of Akiba requires at least one competition win for each device."] },
      { title: "Checklist source boundary", intro: "Names and descriptions below come from Steam Global Achievements. Strategy notes are current community evidence and may change after patches.", note: "Global unlock percentages are intentionally omitted because they change continuously." }
    ],
    sources: [steamAchievements, achievementGuide],
    related: [{ href: "/guides/cleaning-and-reassembly/", title: "Cleaning achievements", description: "Manual cleaning and reassembly tips." }, { href: "/guides/legend-of-akiba/", title: "Legend of Akiba", description: "Track every competition device." }, { href: "/story/endings/", title: "Ending achievements", description: "Spoiler-marked choice guide." }]
  },
  {
    path: "/guides/legend-of-akiba/",
    title: "Legend of Akiba Guide: 29-Device Checklist",
    description: "Track all 29 ReStory devices currently documented for the Legend of Akiba assembly competition achievement.",
    eyebrow: "Competition checklist",
    answer: "Win at least one assembly competition for each of the 29 currently documented devices. Practice the dependency order and use the category checklist to track coverage.",
    evidence: "Official + community",
    index: true,
    sections: [
      { title: "What Steam confirms", table: { headers: ["Achievement", "Requirement"], rows: [["Promise of Akiba", "Win one device assembly competition"], ["Star of Akiba", "Win three different device assembly competitions"], ["Legend of Akiba", "Win at least one assembly competition for each device"]] } },
      { title: "Prepare before entering", bullets: ["Practice normal repairs until the layer order is familiar.", "Upgrade the screwdriver/tools to reduce input friction.", "Remember covers, shields, boards, cables and batteries as dependencies, not isolated parts.", "Community evidence reports that Alt+Tab pauses the competition, but treat that as patch-sensitive."] },
      { title: "Evidence boundary", paragraphs: ["The official achievement establishes the goal. The 29-device list and category breakdown come from current Steam Community guides posted during release week. This site does not reproduce those guides' images or claim an assembly order that it has not independently validated."] }
    ],
    sources: [steamAchievements, akibaGuide, achievementGuide],
    related: [{ href: "/devices/", title: "Device index", description: "Browse the same 29 devices by category." }, { href: "/guides/cleaning-and-reassembly/", title: "Reassembly guide", description: "Use the reverse-order rule." }, { href: "/achievements/", title: "All achievements", description: "Track the full 50." }]
  },
  {
    path: "/story/endings/",
    title: "ReStory Endings Guide: Achievement-Linked Choices",
    description: "Spoiler guide to the ReStory final choices linked by current community evidence to Rock for the ages! and Globalization.",
    eyebrow: "Major spoilers",
    answer: "At the late Hashimoto choice, current community evidence links selling the shop to Takumi and donating the proceeds with Rock for the ages!, while accepting redevelopment links to Globalization.",
    evidence: "Community-tested",
    index: true,
    spoiler: true,
    sections: [
      { title: "The decision point", paragraphs: ["After Yamato explains that the concert is going to be canceled, Hashimoto presents the late-game choice. Make a backup or plan separate playthroughs before committing if you are hunting both achievement-linked routes."], tone: "warning" },
      { title: "Rock for the ages! route", paragraphs: ["Current Steam Community achievement evidence describes the first option as selling the shop to Takumi and donating the profits to the concert organizers."], note: "Steam hides the achievement description; the route detail is community evidence." },
      { title: "Globalization route", paragraphs: ["Current community evidence describes the alternate option as accepting Hashimoto's fate/redevelopment and allowing the shopping center to be built."], note: "Steam hides the achievement description; the route detail is community evidence." },
      { title: "Why there is no ending count here", paragraphs: ["Current search results disagree about how many endings or epilogues exist. This page therefore documents only the two achievement-linked final routes supported by the selected current guide, rather than turning an uncertain count into a fact."] }
    ],
    sources: [steamAchievements, achievementGuide],
    related: [{ href: "/achievements/", title: "All achievements", description: "Check other missable story tasks." }, { href: "/guides/", title: "Spoiler-free guides", description: "Return to repair and shop tasks." }, { href: "/faq/", title: "FAQ", description: "Check current source boundaries." }]
  },
  {
    path: "/devices/",
    title: "ReStory Devices: Current 29-Device Reference",
    description: "A categorized reference to the 29 ReStory devices currently documented for Legend of Akiba competitions.",
    eyebrow: "Device index",
    answer: "The current competition reference covers 29 devices: 12 gaming, 6 phones, 7 other equipment, 2 music devices, 1 camera and 1 notebook.",
    evidence: "Community-tested",
    index: true,
    sections: [
      { title: "How to use this list", bullets: ["Track devices for Legend of Akiba rather than assuming every story object is a competition entry.", "Practice normal repairs before entering a no-hint assembly run.", "Use official Atari names where Steam licenses them; other names are in-game fictionalized device names."] },
      { title: "Detail-page boundary", paragraphs: ["This launch does not create 29 thin device pages. A device gets its own page only after its parts, assembly dependencies and screenshots can be validated reproducibly."] }
    ],
    sources: [steamStore, akibaGuide],
    related: [{ href: "/guides/legend-of-akiba/", title: "Legend of Akiba", description: "Turn the list into a competition plan." }, { href: "/guides/cleaning-and-reassembly/", title: "Reassembly guide", description: "Review dependency order." }, { href: "/achievements/", title: "All achievements", description: "Track the official checklist." }]
  },
  {
    path: "/game-info/",
    title: "ReStory Release Date, Platforms, Price & Requirements",
    description: "Official ReStory release, Windows/macOS platform support, minimum requirements and live regional price link.",
    eyebrow: "Official game facts",
    answer: "ReStory launched on Aug 6, 2026. Steam currently confirms Windows and macOS; use the store page for the live regional price and any future platform announcements.",
    evidence: "Official facts",
    index: true,
    sections: [
      { title: "Release and platforms", table: { headers: ["Fact", "Official value"], rows: [["Release date", "Aug 6, 2026"], ["Developer", "Mandragora"], ["Publisher", "tinyBuild"], ["Windows", "Supported"], ["macOS", "Supported"], ["Linux", "Not listed as supported in the current Steam app data"], ["Switch / PlayStation / Xbox / mobile", "No official launch listing found in the current source set"]] } },
      { title: "Minimum requirements", table: { headers: ["Platform", "Minimum"], rows: [["Windows", "Win10 x64; 2-core/4-thread CPU; 4 GB RAM; GTX 750 Ti; DirectX 11; 1 GB storage"], ["macOS", "macOS 14+; Apple M1; 8 GB RAM; 1 GB storage"]] } },
      { title: "Price and controller boundary", paragraphs: ["Steam prices are regional and the launch discount is time-limited, so this page links to the store instead of copying a price that will expire. The current Steam app data lists partial controller support and specific PlayStation controller support; check the live store before buying for a particular setup."] }
    ],
    sources: [steamStore],
    related: [{ href: "/guides/beginners/", title: "Beginner's guide", description: "Start the first repair loop." }, { href: "/faq/", title: "FAQ", description: "Check console, demo and progression questions." }, { href: "/", title: "Guide home", description: "Browse all verified tasks." }]
  },
  {
    path: "/faq/",
    title: "ReStory FAQ: Platforms, Cleaning, Firmware & Progression",
    description: "Short, source-labeled answers to common ReStory questions about platforms, cleaning, selling, firmware, achievements and story progress.",
    eyebrow: "Quick answers",
    answer: "Steam confirms Windows and macOS. Most gameplay blockers map to cleaning/reassembly, marketplace economics, reprogramming unlocks, day progression or achievement-specific conditions.",
    evidence: "Official + community",
    index: true,
    sections: [
      { title: "Answer boundaries", bullets: ["Platform and achievement facts come from official Steam surfaces.", "Mechanics steps from community guides/videos are labeled and tied to release week.", "Unknowns remain unknown: no unsupported port, ending-count or demo-save promise is invented."] }
    ],
    faq: [
      { question: "Is ReStory on Switch, PS5, Xbox or mobile?", answer: "The current official Steam source set confirms Windows and macOS. We found no official launch listing for Switch, PlayStation, Xbox, Android or iOS as of Aug 13, 2026." },
      { question: "How do I clean the last dirty part?", answer: "Change the workspace view, inspect every loose part and use the job/notepad cues. Also check whether a tiny component remains outside the center view." },
      { question: "How do I sell a device?", answer: "Use the marketplace/shop flow after it unlocks, repair and fully assemble a viable device, then compare the finished return with purchase and parts costs." },
      { question: "How do I update firmware?", answer: "In ReStory, firmware search intent maps to reprogramming. Current community evidence points to the Unlock-ToolKit and its installation CD/app; painting and stickers are separate systems." },
      { question: "Why is the story not progressing?", answer: "Finish active jobs, check the computer/inbox and try ending the day when no new in-person customer appears. If that fails, check current patch discussions for a bug." },
      { question: "How many achievements are there?", answer: "Steam Global Achievements lists 50." },
      { question: "How many devices count for Legend of Akiba?", answer: "Current Steam Community guides document 29 competition devices. The official achievement requires at least one competition win for each device." },
      { question: "Does the demo save transfer?", answer: "We did not find an official transfer guarantee in the selected source set. Treat community reports as version-specific and check the current Steam discussion/store before relying on transfer." },
      { question: "How many endings are there?", answer: "Current search results conflict, so this site does not assert a total. The endings page covers only the two final choices linked by current evidence to hidden Steam achievements." }
    ],
    sources: [steamStore, steamAchievements, achievementGuide, videoGuide],
    related: commonRelated
  },
  {
    path: "/about/",
    title: "About ReStory Repair Desk",
    description: "How ReStory Repair Desk researches, labels, updates and corrects its game guides.",
    eyebrow: "Editorial policy",
    answer: "ReStory Repair Desk is an independent, unofficial guide site built around evidence labels, current source dates and narrow task pages.",
    evidence: "Site information",
    index: true,
    sections: [
      { title: "How pages are built", bullets: ["Search demand identifies the player task.", "Steam confirms entity, platform and achievement facts.", "Current community sources can support mechanics only when clearly labeled.", "Unsupported or conflicting claims are excluded or marked as watch items."] },
      { title: "Independence", paragraphs: ["This site is not affiliated with Mandragora, tinyBuild, Valve or Steam. Game names and trademarks belong to their respective owners."] },
      { title: "Corrections", paragraphs: ["Use the public repository's Issues area to report a source conflict, patch change, broken link or accessibility problem. Include the page URL and a current source."] }
    ],
    related: [{ href: "/contact/", title: "Contact & corrections", description: "Open a sourced issue." }, { href: "/disclaimer/", title: "Disclaimer", description: "Read the independence and accuracy boundary." }, { href: "/", title: "Guide home", description: "Return to ReStory tasks." }]
  },
  {
    path: "/contact/",
    title: "Contact & Corrections",
    description: "Report a ReStory guide correction, source conflict, broken link or accessibility issue.",
    eyebrow: "Corrections desk",
    answer: "Report corrections through the public GitHub Issues page and include the affected URL, current game version and a source.",
    evidence: "Site information",
    index: true,
    sections: [
      { title: "What to include", bullets: ["The exact page and section.", "What changed or is wrong.", "A current official or reproducible source.", "The game version/date you observed."] },
      { title: "Open an issue", paragraphs: ["Repository: https://github.com/kanworuyijingubang/site-restory-chill-electronics-repairs/issues"], note: "Do not post account credentials, purchase receipts or personal data." }
    ],
    related: [{ href: "/about/", title: "Editorial policy", description: "See how evidence is handled." }, { href: "/privacy/", title: "Privacy", description: "See the data boundary." }, { href: "/", title: "Guide home", description: "Return to the site." }]
  },
  {
    path: "/privacy/",
    title: "Privacy Policy",
    description: "Privacy policy for ReStory Repair Desk.",
    eyebrow: "Legal",
    answer: "The site does not require an account. Hosting may process standard request data; optional analytics load only after consent when configured.",
    evidence: "Site information",
    index: false,
    sections: [
      { title: "Data processed", bullets: ["Standard hosting logs may include IP address, user agent, requested URL and timestamp.", "The site does not ask for game, Steam or payment credentials.", "Optional analytics are disabled unless configured and accepted through the consent control."] },
      { title: "Local storage", paragraphs: ["The consent preference may be stored locally in your browser so the site can remember the choice."] },
      { title: "Third-party links", paragraphs: ["Steam, YouTube, Reddit and GitHub have their own privacy practices. Following those links sends a request to the third party."] }
    ],
    related: [{ href: "/cookies/", title: "Cookie policy", description: "See optional storage behavior." }, { href: "/terms/", title: "Terms", description: "Read use conditions." }]
  },
  {
    path: "/terms/",
    title: "Terms of Use",
    description: "Terms of use for ReStory Repair Desk.",
    eyebrow: "Legal",
    answer: "Use the guides as informational help; verify current game behavior and official purchase/platform details before relying on volatile information.",
    evidence: "Site information",
    index: false,
    sections: [
      { title: "Permitted use", paragraphs: ["You may read and link to the site for personal informational use. Do not use it to distribute pirated files, cheats, malware or deceptive offers."] },
      { title: "Accuracy boundary", paragraphs: ["Game balance, mechanics, prices and availability can change. Official sources take priority; community-tested guidance is labeled and may become outdated after patches."] },
      { title: "Ownership", paragraphs: ["Original site text, layout and graphics belong to the site operator. Third-party game names and trademarks belong to their owners."] }
    ],
    related: [{ href: "/disclaimer/", title: "Disclaimer", description: "Read the game and source boundary." }, { href: "/privacy/", title: "Privacy", description: "Read the data policy." }]
  },
  {
    path: "/cookies/",
    title: "Cookie Policy",
    description: "Cookie and local-storage policy for ReStory Repair Desk.",
    eyebrow: "Legal",
    answer: "Essential site delivery does not require an account. Optional analytics, if enabled, are loaded only after consent.",
    evidence: "Site information",
    index: false,
    sections: [
      { title: "Essential storage", paragraphs: ["A local consent preference may be stored to remember whether optional analytics were accepted or rejected."] },
      { title: "Optional analytics", paragraphs: ["When an analytics measurement ID is configured, the analytics script is not loaded until the visitor chooses Accept. Reject keeps it disabled."] },
      { title: "Change your choice", paragraphs: ["Clear this site's local storage in your browser to reset the saved preference."] }
    ],
    related: [{ href: "/privacy/", title: "Privacy policy", description: "See data processing details." }, { href: "/contact/", title: "Contact", description: "Report a privacy issue." }]
  },
  {
    path: "/disclaimer/",
    title: "Disclaimer",
    description: "Unofficial-site, source and accuracy disclaimer for ReStory Repair Desk.",
    eyebrow: "Legal",
    answer: "This independent site is not affiliated with the game's developer, publisher or Steam, and community-tested mechanics can change after patches.",
    evidence: "Site information",
    index: false,
    sections: [
      { title: "Unofficial resource", paragraphs: ["ReStory Repair Desk is not affiliated with Mandragora, tinyBuild, Valve or Steam. Trademarks and game names belong to their owners."] },
      { title: "Source labels", paragraphs: ["Official labels point to Steam or developer-controlled facts. Community labels indicate player-authored guides, videos or discussions and include a date/version boundary."] },
      { title: "No download service", paragraphs: ["The site does not distribute game files, cracks, trainers, cheats, keys or APKs. Purchase and download the game through authorized stores."] }
    ],
    related: [{ href: "/about/", title: "About", description: "Read the editorial policy." }, { href: "/game-info/", title: "Official game info", description: "Check current Steam facts." }]
  }
];

export const pageByPath = new Map(pages.map((page) => [page.path, page]));

export function normalizePath(slug?: string[]) {
  if (!slug?.length) return "/";
  return `/${slug.join("/")}/`;
}

export function absoluteUrl(path: string) {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}
