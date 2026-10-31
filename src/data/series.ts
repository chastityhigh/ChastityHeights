export type Character = {
  name: string;
  role: string;
  description: string;
  secret: string;
  accent: string;
};

export const characters: Character[] = [
  { name: "Amara Brooks", role: "The Observer · Protagonist", description: "A scholarship student and student-paper reporter who notices the gap between what people post and how they actually live.", secret: "Her late mother's notebook contains references to the Undercroft.", accent: "Scholarship" },
  { name: "Julian Cross", role: "The Golden Boy · Legacy Student", description: "Charming, socially fluent, and trapped inside the future his powerful donor family designed for him.", secret: "His anonymous advice account has become a channel for blackmail and rumor.", accent: "Legacy" },
  { name: "Imani Vale", role: "The Strategist · Debate Captain", description: "A sharp social architect who treats the academy's hierarchy like a chessboard.", secret: "She trades information with student council to protect her family's precarious finances.", accent: "Influence" },
  { name: "Celeste Park", role: "The Perfectionist · Student Council", description: "Immaculate, disciplined, and quietly questioning the future selected for her.", secret: "Her after-hours meetings in the old astronomy wing connect to the anonymous account.", accent: "Control" },
  { name: "Remy Flores", role: "The Chaos Magnet · Theatre Society", description: "Flamboyant, funny, and an amateur occultist with a talent for making trouble theatrical.", secret: "A spell copied from a damaged manuscript reveals things they never meant to know.", accent: "Occult" },
  { name: "Sloane Mercer", role: "The Influencer · Musician", description: "A polished online persona with a real life that refuses to stay on-brand.", secret: "Her most successful content is partly staged—and someone knows who helps.", accent: "Visibility" },
  { name: "Nadia Reyes", role: "The Athlete · Overachiever", description: "A star athlete balancing training, exams, family obligations, and a part-time job.", secret: "Her performance-enhancing training device is powered by an artifact she doesn't understand.", accent: "Ambition" },
  { name: "Micah Bell", role: "The Everyman · Accidental Investigator", description: "An electronics repair-shop worker who understands hardware better than social politics.", secret: "A broken device contains recordings from a supposedly abandoned school section.", accent: "Signal" },
  { name: "Yuna Cho", role: "The Archivist · Pattern Hunter", description: "An academic prodigy who catalogs artifacts and quietly corrects the school's official history.", secret: "The archive holds two versions of the same history—and someone altered the newer one.", accent: "Records" },
  { name: "Dr. Adrian Voss", role: "Faculty Insider · Ethics Instructor", description: "A mentor who teaches digital permanence and power while knowing far too much about old legends.", secret: "He investigated the Undercroft as a student; one member of that group disappeared.", accent: "Authority" },
  { name: "Kit Bellamy", role: "The Meme Queen · Digital Sleuth", description: "A razor-sharp gossip satirist whose parody account is loved by students and despised by administrators.", secret: "She knows more about the original gossip network than she admits.", accent: "Satire" },
  { name: "Vivienne Ashcroft", role: "The Heiress · Occult Traditionalist", description: "An elegant heir to one of the academy's oldest families, raised to guard what others must not find.", secret: "Her family has guarded the school's pact for generations.", accent: "Inheritance" }
];

export const episodes = [
  { number: "01", title: "Orientation", summary: "Amara arrives determined to protect her scholarship. Sloane livestreams the opening ceremony, Julian charms the incoming class, and that night the anonymous account publishes its first post.", clue: "A message from @THEHEIGHTSREMEMBERS", status: "PILOT" },
  { number: "02", title: "Receipts", summary: "A leaked private conversation fractures a friendship group. Micah discovers a corrupted memory file on a device brought into his repair shop.", clue: "A memory file that should not exist", status: "COMING NEXT" },
  { number: "03", title: "Extra Credit", summary: "Yuna finds discrepancies in the archives. A spell reveals concealed writing and a map to the Undercroft.", clue: "The first map beneath the official map", status: "IN DEVELOPMENT" },
  { number: "04", title: "Show and Tell", summary: "A supposedly extinct creature escapes its enclosure, and a mechanical hound leads Micah to a sealed door.", clue: "Something moves inside the wiring", status: "IN DEVELOPMENT" },
  { number: "05", title: "Dress Code", summary: "A formal gala exposes the divide between legacy families and scholarship students. Vivienne discovers who funds the secret archive.", clue: "The price of being invited", status: "IN DEVELOPMENT" },
  { number: "06", title: "Clocked Out", summary: "Work shifts, exams, and family emergencies push the group to breaking point.", clue: "Not every crisis can be posted", status: "IN DEVELOPMENT" },
  { number: "07", title: "Terms and Conditions", summary: "A spell book describes the original pact. Kit discovers the anonymous account is older than anyone suspected.", clue: "Every signature has a cost", status: "IN DEVELOPMENT" },
  { number: "08", title: "The Unperson", summary: "A former student appears in an old recording despite having no official enrollment history.", clue: "An absence with a face", status: "IN DEVELOPMENT" },
  { number: "09", title: "Senior Privilege", summary: "Julian's involvement with the anonymous account comes to light, and the group fractures.", clue: "Who gets to keep a secret?", status: "IN DEVELOPMENT" },
  { number: "10", title: "The Last Bell", summary: "The Engine awakens beneath the school. The students must decide whether to destroy it, expose it, or risk using it.", clue: "The pact was never the original agreement", status: "SEASON FINALE" }
];

export const campusPlaces = [
  ["01", "Main Hall", "The academy's public face. Every tradition begins here."],
  ["02", "The Quad", "A perfect circle of paths around a fountain—and a symbol that keeps appearing elsewhere."],
  ["03", "West Dorms", "Legacy housing. Quiet corridors, old money, older rules."],
  ["04", "East Dorms", "Scholarship housing. Everyone knows what it costs to stay."],
  ["05", "Athletics & Field", "Performance is celebrated. The price of it is rarely discussed."],
  ["06", "Library", "Official history above ground. A different archive below."],
  ["07", "Arts Center", "Theatre, music, and identities that don't fit the prospectus."],
  ["08", "Student Center", "The social feed made physical."],
  ["09", "Science Center", "Where experimentation and institutional ambition overlap."],
  ["10", "Faculty Housing", "A private world with its own locked doors."],
  ["11", "Main Gate", "The line between the Heights and the City Below."],
  ["12", "Service Buildings", "Unremarkable on the map. Useful for getting unnoticed."],
  ["13", "The Undercroft", "Restricted access. The old map does not show every entrance."]
] as const;
