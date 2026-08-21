export const SITE_URL = "https://restory-chillelectronicsrepairs.wiki";
export const SITE_NAME = "ReStory Repair Desk";
export const UPDATED = "Aug 21, 2026";

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
  label: "Comfy Cozy Gaming ReStory tips video",
  url: "https://www.youtube.com/watch?v=Cf1k_EBKwws",
  kind: "community"
};

const steamTechIssues: Source = {
  label: "Steam Community technical issues",
  url: "https://steamcommunity.com/app/3812600/discussions/1/",
  kind: "community"
};

const steamNews: Source = {
  label: "Official ReStory announcements and patch notes",
  url: "https://steamcommunity.com/app/3812600/allnews/",
  kind: "official"
};

export const guideLinks: RelatedLink[] = [
  { href: "/updates/", title: "Latest updates", description: "Read the current patch changes and dated roadmap notes." },
  { href: "/guides/beginners/", title: "Beginner's guide", description: "Learn the repair and shop-management loop." },
  { href: "/guides/cleaning-and-reassembly/", title: "Cleaning & reassembly", description: "Find dirt, track parts and rebuild devices." },
  { href: "/guides/how-to-sell-devices/", title: "How to sell devices", description: "Use the marketplace without erasing your margin." },
  { href: "/guides/firmware-and-customization/", title: "Firmware & customization", description: "Unlock reprogramming, paint and stickers." },
  { href: "/guides/legend-of-akiba/", title: "Legend of Akiba", description: "Track all 29 competition devices." },
  { href: "/guides/troubleshooting/", title: "Troubleshooting", description: "Fix cleaning, progress, save and performance problems." }
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
  { href: "/faq/", title: "FAQ", description: "Get quick answers to common questions." }
];

export const pages: PageRecord[] = [
  {
    path: "/",
    title: "ReStory Wiki: Firmware, Selling & Repair Guides",
    description: "Solve ReStory firmware, selling, cleaning and repair problems with current, sourced guides plus patch notes, achievement checklists and shop-progression fixes.",
    eyebrow: "Your repair-shop companion",
    answer: "Pick the task blocking your shop and get a direct path back to repairing devices, serving customers and growing the business.",
    evidence: "Official + community",
    index: true,
    sections: [
      { title: "Start with what you are trying to do", intro: "Choose the guide that matches the problem on your workbench right now.", bullets: ["New shop: learn the inspect → repair → deliver → reinvest loop.", "Repair stuck: clean every side, track loose parts and rebuild in reverse order.", "Progression stuck: check licenses, computer apps, active orders and the end-of-day trigger.", "Completion run: use the achievement list and the 29-device Legend of Akiba checklist."] },
      { title: "ReStory at a glance", table: { headers: ["What players ask", "Current answer"], rows: [["Release date", "Aug 6, 2026"], ["Where to play", "Windows and macOS on Steam"], ["Achievements", "50"], ["Developer / publisher", "Mandragora / tinyBuild"], ["Setting", "A mid-2000s Tokyo electronics repair shop"]] }, note: "For today's regional price, controller details and future platform announcements, open the official Steam page." },
      { title: "Four good places to begin", bullets: ["Open the beginner guide before buying tools or licenses at random.", "Use cleaning and reassembly help when a device will not complete.", "Use the marketplace guide before spending your bill reserve on a broken device.", "Open troubleshooting when restarting the same task is not solving the problem."] }
    ],
    sources: [steamStore, steamAchievements, steamGuides, steamNews],
    related: guideLinks
  },
  {
    path: "/updates/",
    title: "ReStory Update 1.0.011r: Patch Notes & Roadmap",
    description: "ReStory 1.0.011r patch notes summarized: sonic-bath achievements, gadget inventory, paint UI and progression fixes, plus the dated September content plan.",
    eyebrow: "Official update desk",
    answer: "The latest official patch found on Aug 21 is 1.0.011r, released Aug 19. It makes sonic-bath cleaning count toward cleaning achievements, adds a button to place all gadget items into inventory and fixes paint, store, quest, achievement and performance issues. A free content update is announced for Sep 14; it is planned, not yet released.",
    evidence: "Official facts",
    index: true,
    sections: [
      { title: "What changed in 1.0.011r", bullets: ["Sonic-bath cleaning now counts toward the cleaning achievements.", "A new button places all gadget items into inventory at once.", "The paint interface and several uncleanable-part states were fixed.", "Fixes cover Brick Game quest items, minor-item store availability, Jack of all trades and Atari Lynx competition behavior.", "The patch also includes performance and audio fixes."] },
      { title: "What this changes in the guides", table: { headers: ["Player task", "Current guidance"], rows: [["Cleaning achievements", "Automatic sonic-bath cleaning now counts as of 1.0.011r; manual cleaning remains useful for diagnosing a stuck part."], ["Gadget intake", "Use the new place-all button when moving gadget items into inventory."], ["Painting", "Recheck the palette UI on 1.0.011r before following an older workaround."], ["Legend of Akiba", "The Atari Lynx competition fix may resolve an older completion blocker."]] } },
      { title: "September 14 content update", paragraphs: ["The Aug 20 official announcement schedules the first free content update for Sep 14 with more story, a new character and a new gadget. These are roadmap items, not features in the current build."], note: "Check the official announcement again on or after Sep 14 before changing this page to say the content shipped." }
    ],
    sources: [steamNews],
    related: [{ href: "/guides/cleaning-and-reassembly/", title: "Cleaning guide", description: "Use the corrected sonic-bath guidance." }, { href: "/guides/firmware-and-customization/", title: "Firmware & paint", description: "Separate reprogramming from paint fixes." }, { href: "/guides/how-to-sell-devices/", title: "Selling guide", description: "Use the updated inventory workflow." }]
  },
  {
    path: "/guides/",
    title: "ReStory Guides: Repair, Sell, Customize & Progress",
    description: "Choose a ReStory guide for repairs, cleaning, selling, firmware, achievements, competition, story choices or common technical problems in one place.",
    eyebrow: "Choose your next task",
    answer: "Start with Beginner's Guide if the shop loop is new; otherwise jump directly to cleaning, selling, firmware/customization or Legend of Akiba.",
    evidence: "Official + community",
    index: true,
    sections: [
      { title: "Repair tasks", bullets: ["Cleaning & reassembly: locate every dirty, broken or missing part.", "Selling: decide whether a marketplace device is a repair, flip or parts donor.", "Firmware & customization: separate reprogramming, painting and sticker unlocks."] },
      { title: "Completion tasks", bullets: ["Achievements: all 50 official names and descriptions, grouped by task.", "Legend of Akiba: a 29-device competition checklist.", "Endings: spoiler-marked, achievement-linked choices only."] },
      { title: "When something does not work", bullets: ["Cleaning problem: check the cleaning container, the active part and the workspace view.", "Missing part: inspect shelves, boxes and every loose item before buying a replacement.", "Progress problem: finish active jobs, check the computer and try ending the day.", "Performance or controls: use the troubleshooting checklist before changing save files or reinstalling."] }
    ],
    sources: [steamStore, steamGuides],
    related: guideLinks
  },
  {
    path: "/guides/beginners/",
    title: "ReStory Beginner's Guide: Your First Repair-Shop Loop",
    description: "Learn ReStory's first repair-shop loop: inspect jobs, disassemble safely, clean parts, control spending, finish orders and grow without wasting money.",
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
      { title: "When the story seems stuck", bullets: ["Finish active customer and online-order steps.", "Check the shop computer, inbox and available applications.", "Ending the day can be a progression trigger; do not work forever if no new visitor arrives.", "If the same sequence still fails after a restart, compare it with current Steam technical reports."], note: "A repeated problem may be a game issue rather than a missed step. Avoid deleting save data while diagnosing it." },
      { title: "Set up every repair before removing the first screw", paragraphs: ["Read the full request and identify the actual success condition before you buy anything. A customer may need cleaning, a physical repair, reprogramming or a combination of tasks, and those are not interchangeable. Starting with the requirement protects your cash and stops you from doing optional work while overlooking the one condition that completes the order.", "Once the device is open, treat the bench as a temporary map. Keep removed pieces visible, notice which part covered the next layer and avoid moving unrelated objects just to make the space look tidy. ReStory normally guides placement, but a deliberate disassembly order makes it much easier to recognize a missing screw, shield, battery or cover during reassembly."] },
      { title: "Manage cash like a repair shop, not a collection game", paragraphs: ["Licenses open categories of work, while tools make repeated actions faster or add a new capability. Neither purchase is automatically good on the day it appears. Buy the upgrade that removes the bottleneck you are actually facing, then keep enough money for bills, required replacement parts and one or two predictable jobs before experimenting with marketplace flips.", "Broken marketplace devices can be inventory, repair projects or parts donors. Decide which role the item will serve before you pay. If the missing parts and repair time are likely to consume the resale value, keep the useful components for future orders instead of forcing every purchase into a completed sale. The selling guide provides a fuller decision checklist."] },
      { title: "A reliable end-of-job check", steps: [
        { title: "Review the requirement", body: "Return to the order text and confirm that every required task—not every optional task—has been completed." },
        { title: "Scan the entire bench", body: "Look at the center, side areas, shelves and parts boxes for a component that still belongs to the device." },
        { title: "Check the layer order", body: "If an outer part will not fit, inspect the lower layer for a missing board, cable, shield or fastener." },
        { title: "Confirm the device state", body: "Use the game's task feedback before handing the item back or listing it for sale." },
        { title: "Record the next bottleneck", body: "Spend the reward on the license, tool or bill reserve that will make the next group of jobs safer." }
      ] },
      { title: "Plan the next day before you end this one", paragraphs: ["Before ending the day, look at the jobs you can already accept, the parts you currently own and the expense that is most likely to stop tomorrow's work. Finish a nearly complete order when possible, but do not start a large speculative repair simply to keep the bench busy. A clear next job makes it easier to tell whether the following day is waiting for a customer, an inbox action, a license or a story trigger.", "When new options appear, change one part of the shop at a time. Buy a license because you have the cash and want its device category; buy a tool because the current workflow is slow or a required action is unavailable. This makes every purchase testable. If progress changes after the purchase, you know what unlocked it; if it does not, you still have enough reserve to continue diagnosing the real blocker."], note: "There is no single mandatory upgrade order for every playthrough. Use your available jobs, costs and current bottleneck to choose the next purchase." }
    ],
    sources: [steamStore, videoGuide],
    related: [guideLinks[2], guideLinks[3], { href: "/game-info/", title: "Game info", description: "Platforms and requirements." }]
  },
  {
    path: "/guides/cleaning-and-reassembly/",
    title: "ReStory: Clean Every Part & Reassemble Devices",
    description: "Find the last dirty or missing part in ReStory, choose the right cleaning method and rebuild devices in the correct dependency order without wasting parts.",
    eyebrow: "Repair checklist",
    answer: "Inspect every side, use the notepad/status cues, separate dirt from damage or absence, then rebuild in reverse disassembly order. Since patch 1.0.011r, sonic-bath cleaning counts toward the cleaning achievements.",
    evidence: "Official + community",
    index: true,
    sections: [
      { title: "Find the part you missed", steps: [
        { title: "Change the view", body: "Check the center, left and right areas of the workspace; small items can sit outside the first view." },
        { title: "Use the task cues", body: "The notepad can identify the remaining category and highlight relevant pieces during normal jobs." },
        { title: "Inspect loose components", body: "Select pieces individually and look for dirty, damaged or missing-state indicators." },
        { title: "Check what is still on the bench", body: "A loose screw, cover, battery or bracket often means the device is not fully assembled." }
      ] },
      { title: "Manual cleaning vs sonic bath", paragraphs: ["Patch 1.0.011r changed the old behavior: items cleaned in the sonic bath now count toward Big cleaning! and Galactic cleaning!. Use the bath for throughput on the current build; use manual cleaning when you need to isolate one part or diagnose a job that is not advancing."], note: "Older guides saying sonic-bath cleaning never counts are obsolete for 1.0.011r. If a counter still fails, record the current version and compare the latest official reports." },
      { title: "Reassembly rule", bullets: ["Start with the deepest component that was removed last.", "Seat cables, boards and shields before outer shells.", "Install batteries or removable covers after the internal stack is complete.", "If a part will not place, another lower layer or fastener is probably missing."] },
      { title: "Separate dirt, damage and absence", paragraphs: ["A device can fail a job for three different reasons: a part is dirty, a part is broken or a required part is not present. Cleaning a damaged component does not repair it, and buying a replacement does not help if the original part is simply sitting elsewhere on the bench. Read the task cue, select each loose component and decide which of the three states you are solving before taking another action.", "This distinction is also useful when a progress percentage appears stuck. If cleaning no longer changes the task, stop brushing the same surface and inspect the remaining components, the other workspace views and the parts inventory. The missing action may be replacement or reassembly rather than more cleaning. Repeating the wrong tool can make a simple state problem feel like a bug."] },
      { title: "Use the bench as a dependency map", paragraphs: ["During disassembly, the object you remove now usually exposes the object you will need to install earlier during reassembly. Mentally group the device into outer shell, fasteners, shields, boards and removable components. You do not need to memorize a universal order for all 29 devices; you need to preserve the order of the device currently in front of you.", "When you return to assembly, begin with anything that another part must cover. A board cannot be installed after its shield or shell is already in place, and an outer cover cannot close while a cable, battery or screw remains unseated. If the game refuses placement, treat that refusal as a dependency clue rather than trying the same part from many angles."] },
      { title: "If the first cleaning job will not respond", steps: [
        { title: "Confirm the part is removed", body: "Community reports for the first Pokia job describe moving the dirty part to the cleaning container before choosing the brush action." },
        { title: "Check the active tool and target", body: "Make sure the cleaning sound is attached to the selected loose component rather than an assembled device or empty space." },
        { title: "Change workspace view", body: "A small piece or cleaning target can sit outside the centered view, especially after several parts have been moved." },
        { title: "Restart without deleting data", body: "If the correct action produces sound but no progress, return to the menu or restart the game before considering a reinstall." },
        { title: "Compare current reports", body: "Check the Steam technical-issues page for the same device and current version; repeated reports may indicate a patch issue." }
      ], note: "The cleaning-container workflow comes from repeated community reports. Menus and interaction details can change after updates." },
      { title: "Finish with a two-pass inspection", paragraphs: ["First, inspect the assembled model and use the task feedback to find an incomplete category. Second, scan every bench area for anything still loose. A device can look finished while a tiny fastener or bracket remains outside it, and a clean device can still be incomplete because the wrong replacement part was used.", "Do not buy another component until both passes are complete. Extra parts reduce your bill reserve and can create more clutter without solving the job. If everything is installed and the requirement still does not advance, move to the troubleshooting guide and diagnose the sequence as a possible progress or save-state problem."] }
    ],
    sources: [steamAchievements, steamNews, achievementGuide, videoGuide],
    related: [{ href: "/guides/beginners/", title: "Beginner's guide", description: "Review the full job loop." }, { href: "/achievements/", title: "Cleaning achievements", description: "Track official thresholds." }, { href: "/guides/legend-of-akiba/", title: "Akiba checklist", description: "Prepare for no-hint assembly." }]
  },
  {
    path: "/guides/how-to-sell-devices/",
    title: "How to Sell Items in ReStory (Marketplace Guide)",
    description: "Use ReStory's marketplace without draining your bill reserve: compare total repair cost, choose a flip or donor, finish the device and sell safely.",
    eyebrow: "Marketplace workflow",
    answer: "Buy only after comparing the device's condition, seller signal, missing parts and likely resale path; otherwise use it as a parts donor instead of forcing a loss-making repair.",
    evidence: "Official + community",
    index: true,
    sections: [
      { title: "1.0.011r inventory and store changes", paragraphs: ["The Aug 19 patch added a button that places all gadget items into inventory and fixed a problem with minor items being available in the store. The new button speeds intake, but it does not replace the profit check below or guarantee that every repaired item can be sold immediately."], note: "Treat older UI screenshots as version-specific when the place-all button is missing." },
      { title: "The buy → decide → sell loop", steps: [
        { title: "Unlock and open the marketplace", body: "The in-game browser becomes a major source of devices and parts as the shop progresses." },
        { title: "Read the listing", body: "Prefer a clear condition and a credible seller signal while learning the economy." },
        { title: "Inspect total cost", body: "Add purchase price, missing components and repair time before committing to a flip." },
        { title: "Choose repair or donor", body: "If a complete repair is uneconomic, dismantle the item for parts you will actually use." },
        { title: "Finish before listing", body: "Clean, repair and reassemble the sellable device; avoid assuming a dirty or incomplete item will produce the intended margin." }
      ] },
      { title: "Achievement anchors", table: { headers: ["Achievement", "Official requirement"], rows: [["Flipper", "Buy 5 marketplace devices"], ["Garage sale!", "Buy 25 marketplace devices"], ["Making money!", "Sell 5 devices"], ["Business Shark", "Earn more than ¥100,000 in a day"], ["Millionaire!", "Earn ¥1,000,000"]] } },
      { title: "Avoid the common trap", paragraphs: ["A rare or broken item is not automatically profitable. If required parts cost more than the likely finished value, keep the useful components and move on. Maintain a bill reserve before buying speculative inventory."], note: "Prices and balance can change. Judge each listing with the values shown in your current game instead of copying an old margin." },
      { title: "Calculate the real cost before you buy", paragraphs: ["The listing price is only the first cost. Add the replacement parts you can already identify, the possibility of a missing component that is not visible from the listing and the time required to clean, repair and reassemble the device. A cheap shell with several unavailable internals can tie up more money than a cleaner, more complete listing.", "Then compare the project with your alternatives. The same cash might buy a license that opens dependable customer work, a tool that speeds every future repair or the parts needed to finish an existing order. Marketplace buying is strongest when it supports the shop's current plan, not when it competes with bills and guaranteed jobs for the last money in the account."] },
      { title: "Choose one role for the device", table: { headers: ["Role", "When it makes sense", "What to avoid"], rows: [["Repair and sell", "Condition is understandable and the full repair cost leaves room for a return", "Buying before checking missing parts"], ["Parts donor", "Several components solve current or likely orders", "Repairing the empty shell just because you own it"], ["Practice project", "You want familiarity with a device before an Akiba competition", "Using the bill reserve for optional practice"], ["Hold", "A required part or license is not available yet", "Adding more unfinished inventory without a plan"]] } },
      { title: "Prepare a device for sale", steps: [
        { title: "Complete the intended repairs", body: "Replace or repair the components that prevent the device from reaching a finished state." },
        { title: "Clean every required part", body: "A working but dirty item may not produce the outcome you expected, so use the same inspection routine as a customer job." },
        { title: "Reassemble completely", body: "Check that no screw, cover, battery or bracket remains on the bench before you list the item." },
        { title: "Review total spending", body: "Count the purchase and replacement costs so the sale is measured against the whole project rather than the final part." },
        { title: "Keep the next bill covered", body: "A successful sale should improve the shop's position; do not immediately recycle all proceeds into another uncertain device." }
      ] },
      { title: "What to do with stripped or unwanted devices", paragraphs: ["Current Steam discussions include repeated questions from players who removed useful parts and were left with a device body they did not want. Do not assume there is a universal discard action if your current interface does not show one. First check whether the remaining object can be completed, sold later or stored without blocking an active order.", "Before creating another stripped shell, decide exactly which components you need and whether buying them directly is available. A donor is useful when its parts solve more value than the donor consumes. If the game does not provide the disposal option you expect, check the latest discussion and patch notes rather than buying additional inventory to work around it."] }
      ,{ title: "Use a simple purchase limit", paragraphs: ["Choose a cash floor that stays untouched for bills and required customer parts, then treat only the amount above that floor as marketplace money. The exact number will change with your shop, but the rule prevents one attractive listing from turning a profitable day into a stalled repair queue. If a purchase would cross the floor, wait for a completed order or choose a cheaper project.", "For uncertain listings, set a second limit for replacement parts before disassembly begins. Stop and reclassify the device as a donor or hold when the actual damage exceeds that limit. Sunk cost is not a reason to keep buying components. A controlled loss of one listing is usually safer than using the next several customer rewards to rescue a flip whose finished value is still uncertain."], note: "Use the live prices in your game. Updates can change purchase costs, part availability and resale balance." }
    ],
    sources: [steamStore, steamNews, steamAchievements, achievementGuide, videoGuide],
    related: [{ href: "/guides/beginners/", title: "Beginner's guide", description: "Build a stable cash loop." }, { href: "/achievements/", title: "Business achievements", description: "See official requirements." }, { href: "/game-info/", title: "Game info", description: "Check current official release facts." }]
  },
  {
    path: "/guides/firmware-and-customization/",
    title: "How to Update Firmware in ReStory (Unlock-ToolKit)",
    description: "Unlock ReStory reprogramming, diagnose firmware jobs and use airbrush paint or stickers without confusing three separate customization systems.",
    eyebrow: "Unlock matrix",
    answer: "In ReStory, firmware search intent maps to device reprogramming: buy the Unlock-ToolKit and install its CD. Painting needs the airbrush plus palettes; stickers are purchased separately.",
    evidence: "Community-tested",
    index: true,
    sections: [
      { title: "What 1.0.011r fixed", paragraphs: ["The Aug 19 patch fixed the paint palette interface and several progression issues, but the official notes do not claim a universal fix for every firmware job. Recheck the paint UI on the current build; for reprogramming failures, continue with the Unlock-ToolKit checks below."], note: "Painting and firmware are separate systems even when the same customer order asks for both." },
      { title: "Three separate systems", table: { headers: ["Task", "What unlocks it", "Official achievement"], rows: [["Reprogram / firmware", "Unlock-ToolKit and its computer application", "Hacking 101 / 11001"], ["Paint", "Airbrush plus palette sets", "Custom orders available!"], ["Stickers", "Sticker sheets from the in-game shop", "Instant Cool / Instant Cool-er / Sticker Bombing"]] } },
      { title: "Reprogramming workflow", steps: [
        { title: "Buy the tool", body: "Current community guides place the Unlock-ToolKit in the tool shop area of the in-game browser." },
        { title: "Install the application", body: "Use the delivered installation CD at the shop computer to add the reprogramming app." },
        { title: "Accept the right job", body: "A device/order must require or support reprogramming; the tool does not replace physical repair." },
        { title: "Verify completion", body: "Use the job requirements and official achievements as confirmation, not a real-world firmware procedure." }
      ] },
      { title: "If you cannot update firmware", bullets: ["Confirm the Unlock-ToolKit was purchased and its CD installed.", "Check that the current device or order actually calls for reprogramming.", "Do not confuse painting or sticker customization with firmware.", "If the app is installed but the job will not progress, check current patch notes and discussions before repeating purchases."], note: "This guide covers the ReStory mechanic, not Windows, Steam Controller or real-device firmware." },
      { title: "Identify the job before buying another tool", paragraphs: ["Reprogramming, paint and stickers can all change a finished device, but they solve different order requirements. Read the job wording and identify the requested result before opening the in-game shop. A firmware or hacking task needs the reprogramming workflow; a color request needs the airbrush and an available palette; a sticker request uses purchased sticker sheets.", "Buying the wrong system does not move the order forward and can consume money needed for bills or replacement parts. If the device is also dirty or physically damaged, finish those requirements as separate steps. The Unlock-ToolKit does not repair a board, and a painted shell does not satisfy a reprogramming condition."] },
      { title: "A complete reprogramming check", steps: [
        { title: "Confirm ownership", body: "Open the tool area of the shop computer and verify that the Unlock-ToolKit purchase was completed." },
        { title: "Install the delivered software", body: "Use the installation CD at the computer; owning the box alone may not make the app available." },
        { title: "Open the correct application", body: "Return to the computer and look for the installed reprogramming tool rather than the paint or sticker menus." },
        { title: "Use a compatible order", body: "The current customer or online request must support or require the reprogramming action." },
        { title: "Check the order result", body: "Use the visible task requirement and, for milestones, the official Hacking 101 or 11001 achievement." }
      ] },
      { title: "Paint and stickers have their own progression", paragraphs: ["The official demo announcement describes buying the Airbrush tool and color palettes on the computer. That means the airbrush is the capability and the palette is the available color set; owning one does not imply that every color or customization option is unlocked. Start with the order requirement, then choose a design that fits the available palette.", "Sticker progression is tracked separately by the official Instant Cool, Instant Cool-er and Sticker Bombing achievements. Applying a sticker can satisfy those counters, but it is not a substitute for reprogramming or paint. For a combined order, complete each visible requirement and verify the device only after all physical and cosmetic tasks are finished."] },
      { title: "When a specific device will not reprogram", paragraphs: ["First test whether the issue follows the device or the whole shop. If another compatible order can use the installed app, the tool is working and the original device may have a missing prerequisite or a version-specific problem. If no compatible order can use it, return to purchase and installation checks before spending more money.", "Players have asked about Guitar Legend firmware, but there is not yet a universal fix that can be confirmed. Do not repeat purchases or change unrelated system files on the assumption that every firmware failure has the same cause. Check the current technical-issues board for the device name and include the game version when reporting a reproducible failure."] }
      ,{ title: "Diagnose the mechanic without risking your save", steps: [
        { title: "Capture the requirement", body: "Write down the exact order text, device name and action that fails before changing anything." },
        { title: "Restart the smallest layer", body: "Close the in-game app or return to the menu first; restart the whole game only if the state still does not refresh." },
        { title: "Test another valid order", body: "Use a different compatible job to separate a device-specific problem from an installation or progression problem." },
        { title: "Preserve save data", body: "Do not delete, rename or replace save files as a first troubleshooting step, and let Steam Cloud finish syncing before moving between computers." },
        { title: "Report a reproducible sequence", body: "Include the game version, device, installed tool and exact steps on the Steam technical-issues board so the report can be compared with current fixes." }
      ], note: "ReStory reprogramming is an in-game task. It never requires downloading third-party firmware or changing real device drivers." }
    ],
    sources: [steamNews, steamAchievements, achievementGuide, videoGuide],
    related: [{ href: "/achievements/", title: "Customization achievements", description: "Check all official requirements." }, { href: "/guides/beginners/", title: "Beginner's guide", description: "Return to the core job loop." }, { href: "/faq/", title: "FAQ", description: "Check platform and progression boundaries." }]
  },
  {
    path: "/guides/troubleshooting/",
    title: "ReStory Not Working? Cleaning, Save & Progress Fixes",
    description: "Fix common ReStory problems with cleaning, missing parts, stalled story progress, Steam Cloud, controller setup, Steam Deck and low performance.",
    eyebrow: "Get the shop moving again",
    answer: "Start with the task state, restart safely, then separate a missed interaction from a save, control or performance problem before changing files or reinstalling.",
    evidence: "Official + community",
    index: true,
    sections: [
      { title: "Use this three-minute triage first", steps: [
        { title: "Read the active requirement", body: "Confirm the current job asks for cleaning, repair, replacement, reprogramming or story progress; each has a different completion trigger." },
        { title: "Scan every workspace area", body: "Look at the center, side views, shelves and parts boxes for a loose component or a boxed device that moved away from the main bench." },
        { title: "Return to the menu", body: "Save if the game allows it, return to the title screen and reload before repeating purchases or changing system settings." },
        { title: "Restart the game", body: "A clean restart has resolved some community-reported first-day state problems and is safer than deleting local data." },
        { title: "Compare the exact device and version", body: "Open the Steam technical-issues board and search for the device, action and current game version rather than a generic error." }
      ] },
      { title: "Cleaning makes a sound but nothing changes", paragraphs: ["Repeated Steam Community reports describe the first Pokia cleaning job playing a cleaning sound without removing dirt. Before treating it as a broken save, confirm that the dirty component has been removed from the device and moved to the cleaning container on the workbench. Select the part itself, choose the available brush or cleaning action and watch the active task rather than relying only on the sound.", "If the percentage or requirement still does not change, switch workspace views and inspect every loose component. The remaining target may be a smaller part outside the centered view, or the job may now require replacement or reassembly instead of more brushing. Do not keep applying the same action to the same surface when the task cue points to a different state."], note: "The first-item interaction comes from repeated community reports and may look different after an update." },
      { title: "A part or device appears to be missing", paragraphs: ["Community reports for the early Atari joystick job show that a device can move to a shelf or appear as a box after it has been opened. Check both shelf areas, the right side of the table and any parts container before buying a replacement or assuming the object was deleted. The current interface may place an untouched device differently from one that has already had a screw removed.", "If the object is absent from every visible storage area, return to the menu and reload. A restart fixed the state for some players who could not continue the first day. Preserve the save and avoid starting a new game until you have checked Steam Cloud status and current reports; a state bug and a missing local save are different problems and require different evidence."] },
      { title: "The story or day will not progress", paragraphs: ["Finish every active in-person and online order, check the shop computer and inbox, then review whether a newly installed app or purchased license is waiting for an action. When no customer or task is active, ending the day can be the next progression trigger. Working indefinitely inside the same day will not necessarily cause another event to appear.", "If the plot still does not move, write down the current day, active customer, unfinished orders and the last story conversation. Search the technical board for those exact details. A report such as ‘stuck’ is hard to compare, while the day, character and last completed action make it possible to tell a missed prerequisite from a reproducible sequence problem."] },
      { title: "A save is missing or different on another computer", paragraphs: ["Steam lists Steam Cloud support for ReStory, but that feature does not guarantee that every interrupted session has already uploaded. Before opening the game on a second computer, let Steam finish synchronization and confirm that both devices use the same Steam account. If Steam shows a cloud conflict, read the timestamps carefully instead of automatically choosing the newest-looking option.", "Do not delete a local save, configuration folder or Steam userdata while diagnosing a missing save. First close the game, restart Steam and check whether synchronization completes. If one computer still shows the expected shop, preserve that working copy and contact the official support channel before experimenting. This page does not publish an unverified save-folder path because the location and format can change by platform and build."] },
      { title: "Low FPS, stutter or unusual GPU load", paragraphs: ["An official playtest patch added VSync and target-framerate options and advised players with GPU performance problems to try disabling VSync and selecting a 30 or 60 FPS target. That advice came from an earlier build, so use it only when the same options exist in the current release. Change one setting at a time, return to the same scene and compare the result before changing resolution or driver controls.", "Close unnecessary background applications, confirm the game is fully updated and test the minimum supported settings before reinstalling. The official Steam data lists Windows and macOS support with modest minimum requirements, but meeting a minimum does not guarantee identical performance in every repair scene. If the problem began after a patch, include the patch date, hardware, resolution and the scene that reproduces it in the report."] },
      { title: "Controller and Steam Deck checks", paragraphs: ["Steam currently lists partial controller support together with DualShock and DualSense support. Partial support can mean that some menus, text entry or fine pointer actions still work better with a mouse or trackpad. Confirm the controller is detected by Steam before launching, test the default layout and remove a custom layout temporarily when an action is missing.", "The current community board contains Steam Deck compatibility questions, but this page does not label the game Verified or Unsupported without a current official compatibility result. On Deck, test the official or default community layout, use the trackpad for pointer-heavy cleaning and compare the live Steam compatibility panel before buying specifically for handheld play."] },
      { title: "When to report the problem", paragraphs: ["Report a problem after the correct task, a menu reload and a full restart all fail. Include the game version, operating system, input method, device or customer name, exact reproduction steps and what the task panel shows. A screenshot of the workbench and active requirement is more useful than a general description, but remove account names or personal information before posting.", "Use the official Steam technical-issues board or tinyBuild support for reproducible bugs. If a community workaround requires deleting files, installing third-party software or changing an unknown configuration value, wait for an official answer or make a recoverable backup first. The goal is to restore the shop without turning a small state problem into lost progress."] }
    ],
    faq: [
      { question: "Why does cleaning make a sound but not remove dirt?", answer: "Confirm the part is removed and placed at the cleaning container, select the loose component and use its brush action. If progress still does not change, reload before changing files." },
      { question: "Where did my Atari joystick or device go?", answer: "Check both shelves, the right side of the table and boxed parts. Opened devices can move away from the central bench; restart if every storage area is empty." },
      { question: "Why is the ReStory story not progressing?", answer: "Finish active orders, check the computer and inbox, install any required app and try ending the day. Record the day and last story event if it remains stuck." },
      { question: "Does ReStory support Steam Cloud?", answer: "Steam currently lists Steam Cloud support. Let synchronization finish on one device before opening the game on another, and do not delete local data during a cloud conflict." },
      { question: "How can I reduce ReStory stutter?", answer: "Update the game, test one setting at a time and, when the options exist, try the developer's earlier advice of disabling VSync with a 30 or 60 FPS target." },
      { question: "Is ReStory Steam Deck Verified?", answer: "Check the current Steam compatibility panel. Community reports exist, but this guide does not assign an official Verified or Unsupported label without a current Steam result." }
    ],
    sources: [steamStore, steamNews, steamTechIssues],
    related: [{ href: "/guides/cleaning-and-reassembly/", title: "Cleaning & reassembly", description: "Check parts, views and dependency order." }, { href: "/guides/beginners/", title: "Beginner's guide", description: "Review the complete shop loop." }, { href: "/guides/firmware-and-customization/", title: "Firmware help", description: "Check Unlock-ToolKit and app setup." }, { href: "/game-info/", title: "Game info", description: "See current platforms and requirements." }]
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
      { title: "Before a completion run", bullets: ["Use one save for long counters unless the game or a current guide confirms cross-save progress.", "Treat hidden story achievements as missable until proven otherwise.", "Manual cleaning may be required for the 100/1,000-part counters.", "Legend of Akiba requires at least one competition win for each device."] },
      { title: "Before you start", intro: "The names and descriptions below match Steam Global Achievements. Tips linked from the checklist can change after a game update.", note: "Unlock percentages change continuously, so the checklist focuses on requirements rather than a temporary rarity number." }
    ],
    sources: [steamAchievements, achievementGuide],
    related: [{ href: "/guides/cleaning-and-reassembly/", title: "Cleaning achievements", description: "Manual cleaning and reassembly tips." }, { href: "/guides/legend-of-akiba/", title: "Legend of Akiba", description: "Track every competition device." }, { href: "/story/endings/", title: "Ending achievements", description: "Spoiler-marked choice guide." }]
  },
  {
    path: "/guides/legend-of-akiba/",
    title: "Legend of Akiba Guide: 29-Device Checklist",
    description: "Use this ReStory Legend of Akiba checklist to track all 29 competition devices, prepare your layer order and plan every assembly win for the Steam achievement.",
    eyebrow: "Competition checklist",
    answer: "Win at least one assembly competition for each of the 29 currently documented devices. Practice the dependency order and use the category checklist to track coverage.",
    evidence: "Official + community",
    index: true,
    sections: [
      { title: "What Steam confirms", table: { headers: ["Achievement", "Requirement"], rows: [["Promise of Akiba", "Win one device assembly competition"], ["Star of Akiba", "Win three different device assembly competitions"], ["Legend of Akiba", "Win at least one assembly competition for each device"]] } },
      { title: "Prepare before entering", bullets: ["Practice normal repairs until the layer order is familiar.", "Upgrade the screwdriver/tools to reduce input friction.", "Remember covers, shields, boards, cables and batteries as dependencies, not isolated parts.", "Players report that Alt+Tab can pause the competition, but test it before relying on that behavior."] },
      { title: "What the checklist covers", paragraphs: ["Steam defines the Legend of Akiba goal, while current Steam Community guides identify the 29 competition devices shown below. Use the list to track wins by device; practice the actual assembly order during normal repairs because each model has its own dependency stack."] }
    ],
    sources: [steamAchievements, akibaGuide, achievementGuide],
    related: [{ href: "/devices/", title: "Device index", description: "Browse the same 29 devices by category." }, { href: "/guides/cleaning-and-reassembly/", title: "Reassembly guide", description: "Use the reverse-order rule." }, { href: "/achievements/", title: "All achievements", description: "Track the full 50." }]
  },
  {
    path: "/story/endings/",
    title: "ReStory Endings Guide: Achievement-Linked Choices",
    description: "Follow the spoiler-marked ReStory endings guide for the achievement-linked Hashimoto choices tied to Rock for the ages! and Globalization routes.",
    eyebrow: "Major spoilers",
    answer: "At the late Hashimoto choice, current player guides link selling the shop to Takumi and donating the proceeds with Rock for the ages!, while accepting redevelopment links to Globalization.",
    evidence: "Community-tested",
    index: true,
    spoiler: true,
    sections: [
      { title: "The decision point", paragraphs: ["After Yamato explains that the concert is going to be canceled, Hashimoto presents the late-game choice. Make a backup or plan separate playthroughs before committing if you are hunting both achievement-linked routes."], tone: "warning" },
      { title: "Rock for the ages! route", paragraphs: ["Current Steam Community achievement guides describe the first option as selling the shop to Takumi and donating the profits to the concert organizers."], note: "Steam hides the achievement description, so check the linked guide if a patch changes the route." },
      { title: "Globalization route", paragraphs: ["Current player achievement guides describe the alternate option as accepting Hashimoto's redevelopment plan and allowing the shopping center to be built."], note: "Steam hides the achievement description, so check the linked guide if a patch changes the route." },
      { title: "Why there is no ending count here", paragraphs: ["Current search results disagree about how many endings or epilogues exist. This page therefore documents only the two achievement-linked final routes supported by the selected current guide, rather than turning an uncertain count into a fact."] }
    ],
    sources: [steamAchievements, achievementGuide],
    related: [{ href: "/achievements/", title: "All achievements", description: "Check other missable story tasks." }, { href: "/guides/", title: "Spoiler-free guides", description: "Return to repair and shop tasks." }, { href: "/faq/", title: "FAQ", description: "Read short ending and demo answers." }]
  },
  {
    path: "/devices/",
    title: "ReStory Devices: Current 29-Device Reference",
    description: "Browse 29 ReStory competition devices by gaming, phones, music, camera, notebook and other equipment while tracking every Legend of Akiba win.",
    eyebrow: "Device index",
    answer: "The current competition reference covers 29 devices: 12 gaming, 6 phones, 7 other equipment, 2 music devices, 1 camera and 1 notebook.",
    evidence: "Community-tested",
    index: true,
    sections: [
      { title: "How to use this list", bullets: ["Track devices for Legend of Akiba rather than assuming every story object is a competition entry.", "Practice normal repairs before entering a no-hint assembly run.", "Use official Atari names where Steam licenses them; other names are in-game fictionalized device names."] },
      { title: "How to use the device index", paragraphs: ["Keep this page open while working toward Legend of Akiba and mark each model after a successful competition. Select a device category below, then use the reassembly guide to practice layer order during ordinary repairs before attempting the timed version."] }
    ],
    sources: [steamStore, akibaGuide],
    related: [{ href: "/guides/legend-of-akiba/", title: "Legend of Akiba", description: "Turn the list into a competition plan." }, { href: "/guides/cleaning-and-reassembly/", title: "Reassembly guide", description: "Review dependency order." }, { href: "/achievements/", title: "All achievements", description: "Track the official checklist." }]
  },
  {
    path: "/game-info/",
    title: "ReStory Release Date, Platforms, Price & Requirements",
    description: "Check ReStory's Aug 6, 2026 release date, Windows and macOS support, minimum requirements, controller features and live regional Steam price now.",
    eyebrow: "Official game facts",
    answer: "ReStory launched on Aug 6, 2026. Steam currently confirms Windows and macOS; use the store page for the live regional price and any future platform announcements.",
    evidence: "Official facts",
    index: true,
    sections: [
      { title: "Release and platforms", table: { headers: ["Fact", "Official value"], rows: [["Release date", "Aug 6, 2026"], ["Developer", "Mandragora"], ["Publisher", "tinyBuild"], ["Windows", "Supported"], ["macOS", "Supported"], ["Linux", "Not listed as supported in the current Steam app data"], ["Switch / PlayStation / Xbox / mobile", "No official launch listing found as of Aug 13, 2026"]] } },
      { title: "Minimum requirements", table: { headers: ["Platform", "Minimum"], rows: [["Windows", "Win10 x64; 2-core/4-thread CPU; 4 GB RAM; GTX 750 Ti; DirectX 11; 1 GB storage"], ["macOS", "macOS 14+; Apple M1; 8 GB RAM; 1 GB storage"]] } },
      { title: "Price and controller support", paragraphs: ["Steam prices are regional, so use the store link for the amount in your account and country. Steam currently lists partial controller support plus specific PlayStation controller support; check the live feature list before buying for a particular setup."] }
    ],
    sources: [steamStore],
    related: [{ href: "/guides/beginners/", title: "Beginner's guide", description: "Start the first repair loop." }, { href: "/faq/", title: "FAQ", description: "Check console, demo and progression questions." }, { href: "/", title: "Guide home", description: "Browse all ReStory tasks." }]
  },
  {
    path: "/faq/",
    title: "ReStory FAQ: Platforms, Cleaning, Firmware & Progression",
    description: "Get direct answers to common ReStory questions about platforms, cleaning, selling, firmware, achievements, demo saves, endings and story progress.",
    eyebrow: "Quick answers",
    answer: "Steam confirms Windows and macOS. Most gameplay blockers map to cleaning/reassembly, marketplace economics, reprogramming unlocks, day progression or achievement-specific conditions.",
    evidence: "Official + community",
    index: true,
    sections: [
      { title: "Quick answers before you open a longer guide", bullets: ["Use Game Info for current platforms, requirements and the official store link.", "Use Cleaning & Reassembly when a part, layer or progress cue is missing.", "Use Firmware & Customization for Unlock-ToolKit, airbrush and sticker questions.", "Use Troubleshooting when the correct task still does not respond after a restart."] }
    ],
    faq: [
      { question: "Is ReStory on Switch, PS5, Xbox or mobile?", answer: "Steam currently confirms Windows and macOS. No official launch listing for Switch, PlayStation, Xbox, Android or iOS was available as of Aug 13, 2026." },
      { question: "How do I clean the last dirty part?", answer: "Change the workspace view, inspect every loose part and use the job/notepad cues. Also check whether a tiny component remains outside the center view." },
      { question: "How do I sell a device?", answer: "Use the marketplace/shop flow after it unlocks, repair and fully assemble a viable device, then compare the finished return with purchase and parts costs." },
      { question: "How do I update firmware?", answer: "In ReStory, the in-game firmware action is reprogramming. Current player guides point to the Unlock-ToolKit and its installation CD/app; painting and stickers are separate systems." },
      { question: "Why is the story not progressing?", answer: "Finish active jobs, check the computer/inbox and try ending the day when no new in-person customer appears. If that fails, check current patch discussions for a bug." },
      { question: "How many achievements are there?", answer: "Steam Global Achievements lists 50." },
      { question: "How many devices count for Legend of Akiba?", answer: "Current Steam Community guides document 29 competition devices. The official achievement requires at least one competition win for each device." },
      { question: "Does the demo save transfer?", answer: "The official Steam pages checked on Aug 13 did not guarantee a demo-save transfer. Treat player reports as version-specific and check the current Steam discussion before relying on transfer." },
      { question: "How many endings are there?", answer: "A reliable total is not available yet because current guides disagree. The endings page covers the two final choices linked by current player guides to hidden Steam achievements." }
    ],
    sources: [steamStore, steamAchievements, achievementGuide, videoGuide],
    related: commonRelated
  },
  {
    path: "/about/",
    title: "About ReStory Repair Desk",
    description: "How ReStory Repair Desk researches, labels, updates and corrects its game guides.",
    eyebrow: "About this guide",
    answer: "ReStory Repair Desk is an independent, unofficial guide site that helps players finish repairs, grow the shop and solve common progression problems.",
    evidence: "Site information",
    index: false,
    sections: [
      { title: "What you will find here", bullets: ["Direct guides for common repair, shop and progression tasks.", "Current Steam links for platforms, achievements and game announcements.", "Player-tested tips clearly separated from official facts.", "Corrections when an update changes a mechanic or route."] },
      { title: "Independence", paragraphs: ["This site is not affiliated with Mandragora, tinyBuild, Valve or Steam. Game names and trademarks belong to their respective owners."] },
      { title: "Corrections", paragraphs: ["Use the public repository's Issues area to report a source conflict, patch change, broken link or accessibility problem. Include the page URL and a current source."] }
    ],
    related: [{ href: "/contact/", title: "Contact & corrections", description: "Report a problem with a page." }, { href: "/disclaimer/", title: "Disclaimer", description: "Read the unofficial-site notice." }, { href: "/", title: "Guide home", description: "Return to ReStory tasks." }]
  },
  {
    path: "/contact/",
    title: "Contact & Corrections",
    description: "Report a ReStory guide correction, source conflict, broken link or accessibility issue.",
    eyebrow: "Corrections desk",
    answer: "Report corrections through the public GitHub Issues page and include the affected URL, current game version and a source.",
    evidence: "Site information",
    index: false,
    sections: [
      { title: "What to include", bullets: ["The exact page and section.", "What changed or is wrong.", "A current official or reproducible source.", "The game version/date you observed."] },
      { title: "Open an issue", paragraphs: ["Repository: https://github.com/kanworuyijingubang/site-restory-chill-electronics-repairs/issues"], note: "Do not post account credentials, purchase receipts or personal data." }
    ],
    related: [{ href: "/about/", title: "About the site", description: "Learn what the guide covers." }, { href: "/privacy/", title: "Privacy", description: "See how site data is handled." }, { href: "/", title: "Guide home", description: "Return to the site." }]
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
      { title: "Changing information", paragraphs: ["Game balance, mechanics, prices and availability can change. Check the linked official pages when a purchase, platform or recently patched mechanic affects your decision."] },
      { title: "Ownership", paragraphs: ["Original site text, layout and graphics belong to the site operator. Third-party game names and trademarks belong to their owners."] }
    ],
    related: [{ href: "/disclaimer/", title: "Disclaimer", description: "Read the unofficial-site notice." }, { href: "/privacy/", title: "Privacy", description: "Read the data policy." }]
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
      { title: "Linked sources", paragraphs: ["Official links point to Steam or developer-controlled pages. Community links point to player-authored guides, videos or discussions and may describe an earlier version of the game."] },
      { title: "No download service", paragraphs: ["The site does not distribute game files, cracks, trainers, cheats, keys or APKs. Purchase and download the game through authorized stores."] }
    ],
    related: [{ href: "/about/", title: "About", description: "Learn what the site covers." }, { href: "/game-info/", title: "Official game info", description: "Check current Steam facts." }]
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
