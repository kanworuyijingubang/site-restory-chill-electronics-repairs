export const SITE_URL = "https://restory-chillelectronicsrepairs.wiki";
export const SITE_NAME = "ReStory Repair Desk";
const DEFAULT_CHECKED_DATE = "2026-08-29";

export function pageUpdatedDate(page: PageRecord): string {
  return page.updated ?? DEFAULT_CHECKED_DATE;
}

export function pageCheckedDate(page: PageRecord): string {
  return page.checked ?? DEFAULT_CHECKED_DATE;
}

export function formatPageDate(date: string): string {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "short", day: "numeric", year: "numeric", timeZone: "UTC",
  });
}

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
  updated?: string;
  checked?: string;
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

const saleGuide: Source = {
  label: "seebs: Quick Guide To Making Money — counter sale instructions",
  url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3786123222",
  kind: "community"
};
const currentAchievementGuide: Source = {
  label: "Kleynce: toolkit, workshop cleaning and Akiba app instructions",
  url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3778809808",
  kind: "community"
};
const firmwareDiscussion: Source = {
  label: "Firmware controls — player answer and successful follow-up, Aug 11–12",
  url: "https://steamcommunity.com/app/3812600/discussions/0/592938395265677665/?l=english",
  kind: "community"
};
const firmwareVideo: Source = {
  label: "Zhain gameplay: ThinkerDad firmware progress and success, 9:32:20–9:32:45",
  url: "https://www.youtube.com/watch?v=x6lq9h_5Xa0&t=34340s",
  kind: "community"
};
const guitarFirmwareFix: Source = {
  label: "Developer: guitars no longer need firmware upgrades — Aug 11, comment 5",
  url: "https://steamcommunity.com/app/3812600/eventcomments/588434705716664547/",
  kind: "official"
};
const storyHotfix: Source = {
  label: "Developer-marked answer: 1.0.015 guitar story hotfix and old-save limitation",
  url: "https://steamcommunity.com/app/3812600/discussions/0/592938395265855858/",
  kind: "official"
};
const storyReports: Source = {
  label: "Story progression: developer checklist and later player reports",
  url: "https://steamcommunity.com/app/3812600/discussions/1/588434705716678198/",
  kind: "community"
};
const saveLocations: Source = {
  label: "Developer bug-report instructions: Windows, Mac and Steam Deck data folders",
  url: "https://steamcommunity.com/app/3812600/discussions/1/588434161796244300/",
  kind: "official"
};
const saveLog: Source = {
  label: "Player game log: Windows Restory/SaveData folder",
  url: "https://steamcommunity.com/app/3812600/discussions/1/588434161796261648/",
  kind: "community"
};
const akibaRecordHelp: Source = {
  label: "Developer: compare original competition times to find missed wins",
  url: "https://steamcommunity.com/app/3812600/discussions/1/588434434320041824/",
  kind: "official"
};
const sonicBathPatch: Source = {
  label: "Official 1.0.011r patch: sonic-bath cleaning counts toward achievements",
  url: "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1841579228663460",
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
    updated: "2026-09-28",
    checked: "2026-09-28",
    title: "ReStory Wiki: Firmware, Selling & Repair Guides",
    description: "Solve ReStory firmware, selling, cleaning and repair problems with current, sourced guides plus patch notes, achievement checklists and shop-progression fixes.",
    eyebrow: "Your repair-shop companion",
    answer: "Pick the task blocking your shop and get a direct path back to repairing devices, serving customers and growing the business.",
    evidence: "Official + community",
    index: true,
    sections: [
      { title: "Free content update delayed", paragraphs: ["The free update previously planned for September 21 has been delayed. The developer's September 18 announcement says the content is ready, but clearing a collaboration took longer than expected. No replacement date or release announcement was found in the official news feed checked on September 28. More story, a new character and a new repairable device remain announced content."] },
      { title: "Start with what you are trying to do", intro: "Choose the guide that matches the problem on your workbench right now.", bullets: ["New shop: learn the inspect → repair → deliver → reinvest loop.", "Repair stuck: clean every side, track loose parts and rebuild in reverse order.", "Progression stuck: check licenses, computer apps, active orders and the end-of-day trigger.", "Completion run: use the achievement list and the 29-device Legend of Akiba checklist."] },
      { title: "ReStory at a glance", table: { headers: ["What players ask", "Current answer"], rows: [["Release date", "Aug 6, 2026"], ["Where to play", "Windows and macOS on Steam"], ["Achievements", "50"], ["Developer / publisher", "Mandragora / tinyBuild"], ["Setting", "A mid-2000s Tokyo electronics repair shop"]] }, note: "For today's regional price, controller details and future platform announcements, open the official Steam page." },
      { title: "Four good places to begin", bullets: ["Open the beginner guide before buying tools or licenses at random.", "Use cleaning and reassembly help when a device will not complete.", "Use the marketplace guide before spending your bill reserve on a broken device.", "Open troubleshooting when restarting the same task is not solving the problem."] }
    ],
    sources: [{ label: "September update delay — September 18 official announcement", url: "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1844115010495350", kind: "official" }, { label: "Free content preview — September 14 official announcement", url: "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1843481262701960", kind: "official" }, steamStore, steamAchievements, steamGuides, steamNews],
    related: [{ href: "/updates/", title: "Free update delay & latest patch", description: "Read the revised update status and the latest published patch notes." }, ...guideLinks]
  },
  {
    path: "/updates/",
    updated: "2026-09-28",
    checked: "2026-09-28",
    title: "ReStory Free Update Delayed: Status & Latest Patch",
    description: "ReStory's September 21 free update was delayed, with no new date announced as of September 28. Read the official delay, 1.0.015 story hotfix and earlier patch notes.",
    eyebrow: "Official update desk",
    answer: "ReStory's free content update was delayed beyond September 21, 2026. The developer announced the delay on September 18 without setting a replacement date. The official news feed checked on September 28 contains no later release announcement; the news feed’s latest full patch post is 1.0.013r, but a separate developer forum answer confirms a later 1.0.015 story hotfix.",
    evidence: "Official facts",
    index: true,
    sections: [
      { title: "Why the September 21 update was delayed", paragraphs: ["The September 18 announcement supersedes the earlier September 21 schedule. The developer says the update itself is ready, but clearing a collaboration for the update took longer than expected. The team plans to share more news in the coming weeks; it did not give a new release date."], note: "Status checked September 28: delayed, with no later release announcement in the official news feed. The old September 21 date does not confirm that new orders or devices are available in your save." },
      { title: "What content has been announced", paragraphs: ["The September 14 preview promises a new character, a new repairable device and more story. Kaito and Haruhi return as an actor and an engineer, helping a game-development star visiting the city.", "The September 18 post includes a device teaser, but its text does not identify the device or explain how to unlock the story. A device name, unlock guide and confirmed release status still need an official announcement."] },
      { title: "The later 1.0.015 story hotfix", paragraphs: ["A developer-marked answer on Steam confirms hotfix 1.0.015 for the story freeze after the rock musician's guitar, often accompanied by a three-star result. The developer warns that saves begun before 1.0.013 and already blocked might not recover from that fix.", "This hotfix is documented in a forum answer rather than the full-patch announcement feed. It does not establish that the delayed free content update has launched, and it is not a guarantee that every story-progression issue is fixed."] },
      { title: "What changed in 1.0.013r", bullets: ["Five save slots were added.", "Story blockers involving purchased licenses and main-quest order were fixed.", "Items should no longer be lost in the sonic bath, and serious memory leaks were fixed.", "Older Intel Macs, Asian fonts, gamepad tooltips, the dialogue selector and firmware controls received fixes.", "The marketplace was rebalanced, and IDB Thinkerdad, XI-Box, Atari Lynx, Blueberry Curl and Nony GoMan issues were addressed."] },
      { title: "What this changes in the guides", table: { headers: ["Player task", "Current guidance"], rows: [["Save management", "Use the five slots to separate a stable story save from experiments; Steam Cloud conflicts still need timestamp checks."], ["Story progression", "Install current updates; 1.0.015 specifically targets the rock-musician guitar freeze, with a limitation for older already-blocked saves."], ["Firmware on gamepad", "Re-test firmware updating on the current build before switching input devices."], ["Marketplace selling", "Old profit thresholds may be stale after the marketplace rebalance; compare the live buy and resale values."], ["Cleaning achievements", "The earlier 1.0.011r change still makes sonic-bath cleaning count toward the cleaning achievements."]] } },
      { title: "Still current from 1.0.011r", paragraphs: ["Sonic-bath cleaning counts toward cleaning achievements, the place-all gadget button remains available, and the paint interface, store items and several competition issues received fixes in the earlier patch. Keep those changes when comparing pre-August 19 guides."] },

    ],
    sources: [storyHotfix, { label: "September Update Timeline — September 18 delay announcement", url: "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1844115010495350", kind: "official" }, { label: "Free content preview — September 14 announcement (date superseded)", url: "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1843481262701960", kind: "official" }, { label: "Official Patch 1.0.013r — August 21", url: "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1841579228668923", kind: "official" }, steamNews],
    related: [{ href: "/guides/cleaning-and-reassembly/", title: "Cleaning guide", description: "Use the corrected sonic-bath guidance." }, { href: "/guides/firmware-and-customization/", title: "Firmware & paint", description: "Use the 1.0.013r gamepad and progression fixes." }, { href: "/guides/how-to-sell-devices/", title: "Selling guide", description: "Recheck values after the marketplace rebalance." }]
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
    updated: "2026-09-28",
    checked: "2026-09-28",
    title: "ReStory: Clean Every Part & Reassemble Devices",
    description: "Find the last dirty or missing part in ReStory, choose the right cleaning method and rebuild devices in the correct dependency order without wasting parts.",
    eyebrow: "Repair checklist",
    answer: "Inspect every side, use the notepad/status cues, separate dirt from damage or absence, then rebuild in reverse disassembly order. Since patch 1.0.011r, sonic-bath cleaning counts toward the cleaning achievements.",
    evidence: "Official + community",
    index: true,
    sections: [
      { title: "Clean Job: clean the workshop itself", steps: [
        { title: "Find the workshop rubbish", body: "For Clean Job, clear the dirty items from the desk. Cleaning device components is a separate task." },
        { title: "Use the trash can below the desk", body: "The Steam achievement guide says to put those workshop items in the bin below." },
        { title: "Check both side views", body: "Switch left and right to find the remaining rubbish outside the center view, then clear it too." }
      ] },
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
    sources: [steamAchievements, sonicBathPatch, currentAchievementGuide, videoGuide],
    related: [{ href: "/guides/beginners/", title: "Beginner's guide", description: "Review the full job loop." }, { href: "/achievements/", title: "Cleaning achievements", description: "Track official thresholds." }, { href: "/guides/legend-of-akiba/", title: "Akiba checklist", description: "Prepare for no-hint assembly." }]
  },
  {
    path: "/guides/how-to-sell-devices/",
    updated: "2026-09-28",
    checked: "2026-09-28",
    title: "How to Sell Items in ReStory: Counter & Courier Steps",
    description: "Sell a repaired device in ReStory by moving it to the shop counter for courier payment, then check the live sale value against your purchase and repair costs.",
    eyebrow: "Marketplace workflow",
    answer: "To sell a device you own, repair and fully assemble it, then drag the finished device to the shop counter. The courier collects it and leaves payment, according to the Steam money-making guide. The marketplace is where you buy stock; the counter completes the sale.",
    evidence: "Official + community",
    index: true,
    sections: [
      { title: "Sell an owned device: the actual handoff", steps: [
        { title: "Choose your own device", body: "Use a device you bought for resale. A customer's repair order has its own requirements; do not treat a customer's device as marketplace stock." },
        { title: "Finish the repair", body: "Clean, repair and reassemble the device. Check for loose screws, covers and components before moving the complete item." },
        { title: "Move it to the counter", body: "Drag the finished device to the shop counter. The Steam guide describes a direct handoff here, rather than creating a sale listing in the computer's marketplace." },
        { title: "Collect the return", body: "The courier takes the device and leaves its value as payment. This is the sale described by the guide; use the payment to compare the return with what you spent." }
      ], note: "This counter-to-courier workflow is community guidance, checked September 28. It does not establish a universal sell action for every loose part or unfinished shell." },
      { title: "What the marketplace sale price means", paragraphs: ["The money-making guide describes the listing's sale price as the expected value of a repaired device. It is not your profit: subtract the purchase price and the parts you needed to finish the repair.", "Patch 1.0.013r rebalanced the marketplace on August 21. Use the values in your current game; pre-patch screenshots, example margins and fixed price thresholds may no longer apply."], note: "Keep money for bills and required customer repairs before buying optional devices." },
      { title: "Repair, donor or hold?", table: { headers: ["Choice", "Use it when", "Next step"], rows: [["Repair and sell", "The finished value can cover the purchase and repair costs", "Finish the device and move it to the counter"], ["Parts donor", "Useful components are worth more to your current jobs than a complete flip", "Keep usable parts; do not keep buying replacements merely because you own the shell"], ["Hold", "A necessary component is unavailable or the repair would consume the bill reserve", "Store the project until its cost is clear"]] } },
      { title: "If you cannot finish the sale", bullets: ["Check that you moved a complete device, rather than one loose component.", "Look over every workspace view for pieces still waiting to be installed.", "Confirm whether you are handling your own stock or fulfilling a customer's order.", "If the completed owned device reaches the counter but nothing happens, record its name, your game version and the exact handoff state for the technical-issues board."], note: "No source checked here establishes a single discard or sell button for all broken parts. Do not buy another device just to work around an unexplained sale failure." },
      { title: "Achievement anchors", table: { headers: ["Achievement", "Official requirement"], rows: [["Flipper", "Buy 5 marketplace devices"], ["Garage sale!", "Buy 25 marketplace devices"], ["Making money!", "Sell 5 devices"], ["Business Shark", "Earn more than ¥100,000 in a day"], ["Millionaire!", "Earn ¥1,000,000"]] } }
    ],
    faq: [
      { question: "Where do I sell a repaired device in ReStory?", answer: "Drag the finished device you own to the shop counter. The courier collects it and leaves payment; you do not need to create a marketplace sale listing for the workflow described by the Steam guide." },
      { question: "Is the marketplace sale price my profit?", answer: "No. It is the expected repaired-device value in the cited guide. Subtract your purchase and parts costs, and check current values because the marketplace was rebalanced in 1.0.013r." }
    ],
    sources: [saleGuide, steamNews, steamAchievements, steamTechIssues],
    related: [{ href: "/guides/beginners/", title: "Beginner's guide", description: "Build a stable cash loop." }, { href: "/achievements/", title: "Business achievements", description: "See official requirements." }, { href: "/game-info/", title: "Game info", description: "Check current official release facts." }]
  },
  {
    path: "/guides/firmware-and-customization/",
    updated: "2026-09-28",
    checked: "2026-09-28",
    title: "How to Update Firmware in ReStory (Unlock-ToolKit)",
    description: "Find Unlock-ToolKit, install its CD and perform ReStory firmware programming on mouse and keyboard. Check the Guitar Legend exception and separate paint unlocks.",
    eyebrow: "Unlock matrix",
    answer: "Buy Unlock-ToolKit, install its delivered CD and use the workbench mouse for a device that needs reprogramming. Press keyboard keys to perform the programming, then check the result: the filmed ThinkerDad example shows green progress, SUCCESS with Finish, and the UPDATE FIRMWARE task crossed out. Guitar Legend has a separate exception below.",
    evidence: "Official + community",
    index: true,
    sections: [
      { title: "Where to buy the hacking program", steps: [
        { title: "Open Gozilla Fairfox", body: "Use the browser on the shop computer. In the tool store, stay on the screwdriver icon, the default category." },
        { title: "Find Unlock-ToolKit", body: "Scroll through that category and buy Unlock-ToolKit. It is the in-game hacking/reprogramming purchase described by the Steam achievement guide." },
        { title: "Install the delivered CD", body: "Put the installation CD you receive into the computer. It installs an application also named Unlock-ToolKit; purchasing the tool and installing its software are separate steps." }
      ], note: "The source does not establish one fixed unlock day or a permanent price. Use the tools available in your current story state." },
      { title: "Perform the firmware task on PC", steps: [
        { title: "Check the device and job", body: "Use a device whose current order calls for reprogramming and make sure the installed Unlock-ToolKit app is available. Finish physical repair requirements separately." },
        { title: "Use the workbench mouse", body: "The confirmed player answer places the next interaction in the table/repair view: click the in-game mouse after the firmware software is installed." },
        { title: "Press keyboard keys", body: "Press keys to carry out the programming interaction. The original questioner confirmed that this worked. The answer does not supply a password to look up or a fixed code to memorize." },
        { title: "Watch the programming feedback", body: "The linked ThinkerDad example shows a green progress bar in UNLOCK-TOOLKIT 2.53.A, followed by SUCCESS and a Finish option." },
        { title: "Check the order as well", body: "In that successful example, UPDATE FIRMWARE is crossed out on the device's order sheet. Confirm the firmware requirement is complete before handing over your device; physical repairs and cleaning remain separate requirements." }
      ], note: "Mouse and keyboard input comes from the confirmed August 11–12 Steam discussion. The success-screen example is IDM ThinkerDad; it does not verify every device, a device-selection dropdown or a controller-button sequence." },
      { title: "Video example: what a completed update looks like", paragraphs: ["In Zhain's linked playthrough, IDM ThinkerDad is on the workbench at 9:32:20. Green programming progress appears around 9:32:30–9:32:40. At 9:32:45, SUCCESS and Finish are visible while the order's UPDATE FIRMWARE line is crossed out.", "Use the source link below to compare that feedback with your screen. The video establishes the visible result for this laptop; the keyboard method is supported separately by the Steam discussion. A Pokia-specific failure or a different device's selection screen still needs its own evidence."], note: "Hacking 101 and 11001 track the first and twenty-fifth reprogrammed devices. They are milestone achievements, so they will not appear after every successful update." },
      { title: "Guitar Legend firmware: check the old requirement", paragraphs: ["Early release orders could ask for a Guitar Legend firmware upgrade that could not be completed. In the First Update discussion on August 11, developer Eugene Kisterev clarified that guitars no longer need that upgrade.", "If an old guitar order still asks for firmware, update the game and compare its requirement with the current version before buying the toolkit again. This is different from the later story freeze after the rock musician's guitar, which has its own 1.0.015 hotfix and old-save limitation in the troubleshooting guide."], tone: "warning" },
      { title: "When the installed app does not solve the job", bullets: ["Owning the toolkit is not enough if its delivered CD has not been installed.", "Check whether the active requirement is firmware, physical repair, paint or a sticker.", "If the interaction works on another compatible job, record the failing device and order instead of reinstalling unrelated software.", "The official 1.0.013r patch reports a gamepad firmware-control fix. Update first; the keyboard steps above are not a verified controller-button map.", "For a persistent failure, record the game version, device, requirement and the exact screen or action that fails."], note: "This is a ReStory mechanic. No real-device firmware downloads, driver changes or save-file edits are part of these steps." },
      { title: "Paint, palettes and stickers", table: { headers: ["Task", "What to obtain", "What it changes"], rows: [["Firmware", "Unlock-ToolKit plus its installed application", "Reprogramming requirement"], ["Paint", "Airbrush and palette sets from Binotaro in the in-game browser", "Device color request"], ["Stickers", "Sticker sheets from the in-game shop", "Sticker customization and its separate achievement counters"]] }, paragraphs: ["The Steam guide places the airbrush in Binotaro's default category and palette sets under the palette icon. Owning an airbrush does not unlock every color. Patch 1.0.011r fixed the palette interface; this device-painting guidance does not establish workshop-wall or display customization controls."] }
    ],
    faq: [
      { question: "How do I buy the hacking program?", answer: "Open Gozilla Fairfox on the shop computer, use the screwdriver/default tool category, scroll to Unlock-ToolKit and buy it. Install the delivered CD to add the application." },
      { question: "What code do I type for firmware?", answer: "The confirmed PC discussion describes clicking the in-game mouse in the repair view and pressing keyboard keys to perform the programming. It does not require a fixed password from a guide." },
      { question: "How do I know the firmware update worked?", answer: "The filmed ThinkerDad example reaches SUCCESS with a Finish option after green progress, and UPDATE FIRMWARE is crossed out on the order sheet. Check both the tool result and your job requirement; the video does not establish identical screens for every device." },
      { question: "How do I update Guitar Legend firmware?", answer: "The developer clarified on August 11 that guitars no longer require a firmware upgrade. Update an old build and check the order; do not repeatedly buy the toolkit to solve that obsolete requirement." }
    ],
    sources: [currentAchievementGuide, firmwareDiscussion, firmwareVideo, guitarFirmwareFix, steamNews, steamAchievements, storyHotfix],
    related: [{ href: "/achievements/", title: "Customization achievements", description: "Check all official requirements." }, { href: "/guides/troubleshooting/", title: "Story and save troubleshooting", description: "Separate the guitar story blocker from a firmware task." }, { href: "/faq/", title: "FAQ", description: "Check platform and progression boundaries." }]
  },
  {
    path: "/guides/troubleshooting/",
    updated: "2026-09-28",
    checked: "2026-09-28",
    title: "ReStory Story Stuck? Known Fixes & Save File Locations",
    description: "Check ReStory story blockers, the 1.0.015 guitar hotfix, Windows save location and developer data folders for Mac and Steam Deck, plus repair troubleshooting.",
    eyebrow: "Get the shop moving again",
    answer: "If the story stops after the rock musician’s guitar with a three-star result, the developer’s 1.0.015 hotfix targets that sequence. Other stalls need To-Do, inbox and shelf checks; saves already blocked before 1.0.013 may not recover from the update. Save locations and backup steps are below.",
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
      { title: "Story not progressing: match the case", table: { headers: ["What you see", "What to check", "Evidence and limit"], rows: [["No new story event, but an unfinished To-Do or boxed device remains", "Review the To-Do list, inbox and both shelves; finish the actual outstanding story task", "Developer FUNTUL notes that overlooked tasks and shelf boxes can look like broken progression"], ["The rock musician's guitar ends with three stars, then the story stops", "Install current updates and retry the save", "Developer hotfix 1.0.015 targets this sequence; older already-blocked saves may remain affected"], ["Stalled after Baketsu's competition-information message, no Robby license, no To-Do", "Record the last message, licenses, game version and save history for support", "A September 19 player report describes this even on 1.0.015r; no verified universal recovery is established"]] }, note: "The guitar firmware requirement and the rock-musician story freeze are separate issues. A firmware tool purchase does not repair a blocked story save." },
      { title: "Before repeating days or buying more licenses", steps: [
        { title: "Check the actual task", body: "Read the To-Do list and inbox. Look for a story device stored as a box on a shelf, and finish any task or competition the current story explicitly requests." },
        { title: "Allow the next event", body: "When current tasks are complete, ending the day is a reasonable progression check. It is not evidence that every stalled save can be fixed by sleeping repeatedly." },
        { title: "Match your version and save history", body: "The developer's 1.0.015 answer warns that a save started before 1.0.013 and already blocked may not recover. Keep that save rather than overwriting it while testing." },
        { title: "Report a reproducible case", body: "Record the last story conversation, current To-Do, license state, version and whether normal orders still work. Use the linked developer support instructions if the same state persists." }
      ], note: "Do not delete profile indexes or save files to force a story trigger. Such forum workarounds are not a verified recovery procedure here." },
      { title: "A save is missing or different on another computer", paragraphs: ["Steam lists Steam Cloud support for ReStory, but that feature does not guarantee that every interrupted session has already uploaded. Before opening the game on a second computer, let Steam finish synchronization and confirm that both devices use the same Steam account. If Steam shows a cloud conflict, read the timestamps carefully instead of automatically choosing the newest-looking option.", "Do not delete a local save, configuration folder or Steam userdata while diagnosing a missing save. First close the game, restart Steam and check whether synchronization completes. If one computer still shows the expected shop, preserve that working copy and contact the official support channel before experimenting. The platform paths below distinguish developer-provided data folders from the Windows save subfolder shown in player logs."] },
      { title: "ReStory save file location and data folders", table: { headers: ["Platform", "Location", "Source scope"], rows: [["Windows save files", "%USERPROFILE%\\AppData\\LocalLow\\Mandragora\\Restory\\SaveData", "SaveData is corroborated by a public game log; the developer gives the Mandragora parent folder"], ["macOS data folder", "~/Library/Application Support/Mandragora/Restory/", "Developer-provided data/support directory"], ["Steam Deck / Proton data parent", "~/.local/share/Steam/steamapps/compatdata/3812600/pfx/drive_c/users/steamuser/AppData/LocalLow/Mandragora/", "Developer's default Steam path; a different Steam library can use a different prefix location"]] }, note: "On Windows, paste the path into File Explorer's address bar. The macOS and Deck entries are data directories, not verified identical save-file layouts. Native Linux support is not implied by the Proton path." },
      { title: "Back up before investigating a save", steps: [
        { title: "Close ReStory", body: "Stop the game before copying files so it is not writing to them during the backup." },
        { title: "Copy the whole Restory folder", body: "Keep a separate dated copy before experimenting. On Windows, start at the developer's Mandragora parent folder and copy its Restory child, including SaveData." },
        { title: "Preserve the original", body: "A backup is a copy, not a rename or deletion. Do not choose an uncertain Steam Cloud replacement or edit a slot to diagnose a story blocker." },
        { title: "Use the developer's report instructions", body: "The pinned support post requests reproduction steps, an image or video and a compressed Restory folder. Review anything you share for personal data and use the developer's listed support channel." }
      ], note: "These backup steps preserve evidence; they do not promise restoration of a corrupted or previously blocked save." },
      { title: "Low FPS, stutter or unusual GPU load", paragraphs: ["An official playtest patch added VSync and target-framerate options and advised players with GPU performance problems to try disabling VSync and selecting a 30 or 60 FPS target. That advice came from an earlier build, so use it only when the same options exist in the current release. Change one setting at a time, return to the same scene and compare the result before changing resolution or driver controls.", "Close unnecessary background applications, confirm the game is fully updated and test the minimum supported settings before reinstalling. The official Steam data lists Windows and macOS support with modest minimum requirements, but meeting a minimum does not guarantee identical performance in every repair scene. If the problem began after a patch, include the patch date, hardware, resolution and the scene that reproduces it in the report."] },
      { title: "Controller and Steam Deck checks", paragraphs: ["Steam currently lists partial controller support together with DualShock and DualSense support. Partial support can mean that some menus, text entry or fine pointer actions still work better with a mouse or trackpad. Confirm the controller is detected by Steam before launching, test the default layout and remove a custom layout temporarily when an action is missing.", "The current community board contains Steam Deck compatibility questions, but this page does not label the game Verified or Unsupported without a current official compatibility result. On Deck, test the official or default community layout, use the trackpad for pointer-heavy cleaning and compare the live Steam compatibility panel before buying specifically for handheld play."] },
      { title: "When to report the problem", paragraphs: ["Report a problem after the correct task, a menu reload and a full restart all fail. Include the game version, operating system, input method, device or customer name, exact reproduction steps and what the task panel shows. A screenshot of the workbench and active requirement is more useful than a general description, but remove account names or personal information before posting.", "Use the official Steam technical-issues board or tinyBuild support for reproducible bugs. If a community workaround requires deleting files, installing third-party software or changing an unknown configuration value, wait for an official answer or make a recoverable backup first. The goal is to restore the shop without turning a small state problem into lost progress."] }
    ],
    faq: [
      { question: "Why does cleaning make a sound but not remove dirt?", answer: "Confirm the part is removed and placed at the cleaning container, select the loose component and use its brush action. If progress still does not change, reload before changing files." },
      { question: "Where did my Atari joystick or device go?", answer: "Check both shelves, the right side of the table and boxed parts. Opened devices can move away from the central bench; restart if every storage area is empty." },
      { question: "Why is the ReStory story not progressing?", answer: "Check the To-Do list, inbox and boxed devices on shelves. The 1.0.015 hotfix targets a freeze after the rock musician’s guitar, but a save already blocked before 1.0.013 might not recover. Match your last event before repeating days or purchases." },
      { question: "Does ReStory support Steam Cloud?", answer: "Steam currently lists Steam Cloud support. Let synchronization finish on one device before opening the game on another, and do not delete local data during a cloud conflict." },
      { question: "How can I reduce ReStory stutter?", answer: "Update the game, test one setting at a time and, when the options exist, try the developer's earlier advice of disabling VSync with a 30 or 60 FPS target." },
      { question: "Is ReStory Steam Deck Verified?", answer: "Check the current Steam compatibility panel. Community reports exist, but this guide does not assign an official Verified or Unsupported label without a current Steam result." }
    ],
    sources: [storyHotfix, storyReports, saveLocations, saveLog, steamStore, steamNews, steamTechIssues],
    related: [{ href: "/guides/cleaning-and-reassembly/", title: "Cleaning & reassembly", description: "Check parts, views and dependency order." }, { href: "/guides/beginners/", title: "Beginner's guide", description: "Review the complete shop loop." }, { href: "/guides/firmware-and-customization/", title: "Firmware help", description: "Check Unlock-ToolKit and app setup." }, { href: "/game-info/", title: "Game info", description: "See current platforms and requirements." }]
  },
  {
    path: "/achievements/",
    updated: "2026-09-28",
    checked: "2026-09-28",
    title: "All 50 ReStory Achievements: Official Checklist",
    description: "All 50 official ReStory: Chill Electronics Repairs achievement names and descriptions, grouped by repair, business, customization, Akiba and story.",
    eyebrow: "Official achievement reference",
    answer: "Steam lists 50 achievements. Use the grouped checklist below; hidden story routes are clearly separated from official descriptions and community tips.",
    evidence: "Official + community",
    index: true,
    sections: [
      { title: "Before a completion run", bullets: ["Use one save for long counters unless the game or a current guide confirms cross-save progress.", "Treat hidden story achievements as missable until proven otherwise.", "Since official patch 1.0.011r, sonic-bath cleaning counts toward the 100/1,000-part cleaning achievements; older manual-only advice is obsolete.", "Legend of Akiba requires at least one competition win for each device.", "Clean Job concerns workshop rubbish: use the trash can below the desk and check the side views."] },
      { title: "Before you start", intro: "The names and descriptions below match Steam Global Achievements. Tips linked from the checklist can change after a game update.", note: "Unlock percentages change continuously, so the checklist focuses on requirements rather than a temporary rarity number." }
    ],
    sources: [steamAchievements, sonicBathPatch, currentAchievementGuide],
    related: [{ href: "/guides/cleaning-and-reassembly/", title: "Cleaning achievements", description: "Workshop rubbish, sonic-bath counters and reassembly tips." }, { href: "/guides/legend-of-akiba/", title: "Legend of Akiba", description: "Track every competition device." }, { href: "/story/endings/", title: "Ending achievements", description: "Spoiler-marked choice guide." }]
  },
  {
    path: "/guides/legend-of-akiba/",
    updated: "2026-09-28",
    checked: "2026-09-28",
    title: "Legend of Akiba Guide: 29-Device Checklist",
    description: "Find the Akiba Championship app, track the 29 documented competition devices and check missed wins for ReStory’s Legend of Akiba achievement.",
    eyebrow: "Competition checklist",
    answer: "Progress the story until your inbox receives the link that installs Akiba Championship, then use the competition app. Legend of Akiba requires a win for every device; the community checklist below covers 29 documented entries.",
    evidence: "Official + community",
    index: true,
    sections: [
      { title: "How to access Akiba competitions", steps: [
        { title: "Progress the story and check your inbox", body: "The Steam achievement guide describes an email link that becomes available through story progression. No fixed day is established by the source." },
        { title: "Install Akiba Championship", body: "Use the inbox link to add the app to the shop computer, then open it for competitions." },
        { title: "Track device wins", body: "Record which device you won with, not just the total number of competitions. Repeating one model does not meet the requirement to win with each device." }
      ], note: "If the message has not arrived, check current story tasks before assuming that buying a license alone installs the app. This page does not claim an exact story-unlock sequence for every save." },
      { title: "What Steam confirms", table: { headers: ["Achievement", "Requirement"], rows: [["Promise of Akiba", "Win one device assembly competition"], ["Star of Akiba", "Win three different device assembly competitions"], ["Legend of Akiba", "Win at least one assembly competition for each device"]] } },
      { title: "Prepare before entering", bullets: ["Practice normal repairs until the layer order is familiar.", "Upgrade the screwdriver/tools to reduce input friction.", "Remember covers, shields, boards, cables and batteries as dependencies, not isolated parts.", "Use normal repairs to learn a model before its competition; the checklist names do not replace a device-specific assembly sequence."] },
      { title: "What the checklist covers", paragraphs: ["Steam defines the Legend of Akiba goal, while current Steam Community guides identify the 29 competition devices shown below. Use the list to track wins by device; practice the actual assembly order during normal repairs because each model has its own dependency stack."] }
      ,{ title: "All devices attempted, but no Legend of Akiba?", paragraphs: ["In the achievement-bug discussion, developer FUNTUL recommends comparing your saved competition times with the original times in the linked table. An unchanged entry can reveal a device you missed; retry those competitions and check the achievement again.", "The developer table uses some internal device labels, so compare it with the game's own entries rather than treating every label as a new device. This page retains the 29-device community reference below; it does not add catalog entries based only on a differently named timing row."], note: "The official achievement defines the goal, while community guides supply the device list. A complete model-by-model assembly walkthrough is not yet verified here." }
    ],
    sources: [steamAchievements, akibaGuide, currentAchievementGuide, akibaRecordHelp],
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
    updated: "2026-09-28",
    checked: "2026-09-28",
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
      { question: "How do I sell a device?", answer: "Repair and assemble a device you own, then drag it to the shop counter. The courier collects it and leaves payment, according to the Steam money-making guide. Compare that return with purchase and parts costs." },
      { question: "How do I update firmware?", answer: "Buy Unlock-ToolKit in the browser’s screwdriver/tool category and install its delivered CD. For a compatible job, the confirmed PC answer describes clicking the workbench mouse and pressing keyboard keys. The filmed ThinkerDad example finishes with SUCCESS and the firmware task crossed out. Guitar Legend no longer requires that upgrade after the developer’s correction." },
      { question: "Why is the story not progressing?", answer: "Check the To-Do list, inbox and shelves for an outstanding story device. Hotfix 1.0.015 targets the rock-musician guitar freeze; saves already blocked before 1.0.013 may not recover. The troubleshooting guide distinguishes these cases." },
      { question: "Where are ReStory save files on Windows?", answer: "The developer lists %USERPROFILE%\\AppData\\LocalLow\\Mandragora\\ as the data parent. Player logs place saves in its Restory\\SaveData child folder. Close the game and copy the whole Restory folder before investigating; see troubleshooting for Mac and Steam Deck paths." },
      { question: "How many achievements are there?", answer: "Steam Global Achievements lists 50." },
      { question: "How many devices count for Legend of Akiba?", answer: "Current Steam Community guides document 29 competition devices. The official achievement requires at least one competition win for each device." },
      { question: "Does the demo save transfer?", answer: "The official Steam pages checked on Aug 13 did not guarantee a demo-save transfer. Treat player reports as version-specific and check the current Steam discussion before relying on transfer." },
      { question: "How many endings are there?", answer: "A reliable total is not available yet because current guides disagree. The endings page covers the two final choices linked by current player guides to hidden Steam achievements." }
    ],
    sources: [saleGuide, currentAchievementGuide, firmwareDiscussion, firmwareVideo, guitarFirmwareFix, storyHotfix, saveLocations, saveLog, steamStore, steamAchievements],
    related: commonRelated
  },
  {
    path: "/about/",
    updated: "2026-09-09",
    title: "About ReStory Repair Desk",
    description: "How ReStory Repair Desk researches, labels, updates and corrects its game guides.",
    eyebrow: "About this guide",
    answer: "ReStory Repair Desk is an independent, unofficial guide site that helps players finish repairs, grow the shop and solve common progression problems.",
    evidence: "Site information",
    index: false,
    sections: [
      { title: "What you will find here", bullets: ["Direct guides for common repair, shop and progression tasks.", "Current Steam links for platforms, achievements and game announcements.", "Player-tested tips clearly separated from official facts.", "Corrections when an update changes a mechanic or route."] },
      { title: "Independence", paragraphs: ["This site is not affiliated with Mandragora, tinyBuild, Valve or Steam. Game names and trademarks belong to their respective owners."] },
      { title: "Corrections", paragraphs: ["Use the public repository's Issues area to report conflicting information, a patch change, broken link or accessibility problem. Include the page URL and a current source."] }
    ],
    related: [{ href: "/contact/", title: "Contact & corrections", description: "Report a problem with a page." }, { href: "/disclaimer/", title: "Disclaimer", description: "Read the unofficial-site notice." }, { href: "/", title: "Guide home", description: "Return to ReStory tasks." }]
  },
  {
    path: "/contact/",
    updated: "2026-09-09",
    title: "Contact & Corrections",
    description: "Report a ReStory guide correction, conflicting information, broken link or accessibility issue.",
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
