import { SlideData } from './types';

export const slides: SlideData[] = [
  {
    id: 1,
    type: 'intro',
    title: "Наш год вместе",
    subtitle: "365 дней счастья",
    content: "Давай вспомнем как это было",
    buttonText: "Лесго"
  },
  {
    id: 2,
    type: 'stat-big',
    title: "Времени вместе",
    statValue: 365,
    statLabel: "Дней",
    statIcon: "calendar", 
    content: "Дата начала: 7 декабря 2:11"
  },
  {
    id: 3,
    type: 'stat-big',
    title: "На связи",
    statValue: 3800,
    statLabel: "Часов разговоров",
    statIcon: "clock", 
    content: "Мы живем в чатах друг с другом. Это почти 158 суток 'Да, любовь моя'"
  },
  {
    id: 4,
    type: 'stat-big',
    title: "Переписки",
    statValue: 312350, 
    statLabel: "Сообщений",
    statIcon: "message",
    content: "С тобой я хочу говорить вечно"
  },
  {
    id: 5,
    type: 'chart',
    title: "Наши Эмоции",
    chartData: [
      { label: "💜", value: 1000 },
      { label: "😭", value: 200 },
      { label: "👅", value: 120 }, 
    ]
  },
  {
    id: 6,
    type: 'stat-grid',
    title: "Важные цифры",
    gridData: [
      { label: "Литров максичая", value: "280", icon: "coffee" },
      { label: "Доставок еды", value: "1", icon: "star" },
      { label: "Ждем лето", value: "6", icon: "film" }, 
    ]
  },
  {
    id: 7,
    type: 'stat-grid', 
    title: "География любви",
    gridData: [
      { label: "Км пройдено", value: "240", icon: "map" },
      { label: "Город встречи", value: "Алматы", icon: "map" },
      { label: "Локация", value: "Наши сердца", icon: "star" },
    ]
  },
  {
    id: 8,
    type: 'music',
    title: "Наш Гимн",
    subtitle: "Наша песня",
    musicData: {
      song: "Me and Your Mama",
      artist: "Childish Gambino",
      albumArt: "https://upload.wikimedia.org/wikipedia/en/1/10/Childish_Gambino_-_Awaken%2C_My_Love%21.png",
      audioUrl: "music.mp3"
    }
  },
  {
    id: 9,
    type: 'awards',
    title: "Церемония 2025",
    subtitle: "И победителями становятся...",
    awardsData: [
      { title: "Лучшая во всем", winner: "Пухнастя Батырова", description: "Моя королева", icon: "star" },
      { title: "Лучший муж", winner: "Катлет Батыров", description: "Твой", icon: "heart" },
      { title: "Пара всех времен", winner: "МЫ", description: "Пофаку", icon: "award" },
    ]
  },
  {
    id: 10,
    type: 'gallery',
    title: "Наши моменты",
    images: [
      "katletbulochka (1).jpeg", 
      "katletbulochka (2).jpeg",
      "katletbulochka (3).jpeg",
      "katletbulochka (4).jpeg",
      "katletbulochka (5).jpeg"
    ]
  },
  {
    id: 11,
    type: 'outro',
    title: "Это только начало",
    content: "Я люблю тебя больше, чем максичай. С нашей первой годовщиной, булочка!",
    buttonText: "Начать сначала"
  }
];
  export const stickers = [
  { text: "Я люблю тебя", rotate: -5, color: "#fff", bg: "#B888A1" },
  { text: "I love you", rotate: 10, color: "#2A2025", bg: "#fff" },
  { text: "Je t'aime", rotate: -15, color: "#fff", bg: "#B497AB" },
  { text: "사랑해요", rotate: 5, color: "#fff", bg: "#2A2025" },
  { text: "Мен сені жақсы көремін", rotate: 2, color: "#2A2025", bg: "#fff" },
  { text: "Ti amo", rotate: 12, color: "#fff", bg: "#B888A1" },
  { text: "Te amo", rotate: -3, color: "#fff", bg: "#B497AB" },
  { text: "Ich liebe dich", rotate: 8, color: "#2A2025", bg: "#fff" },
  { text: "Мен сени сүйөм", rotate: -5, color: "#fff", bg: "#2A2025" },
];

export const manifesto = [
  { text: "Я люблю тебя бесконечность", highlight: "бесконечностей" },
  { text: "С тобой время так", highlight: "летит" },
  { text: "С каждым годом мы все ближе к нашей", highlight: "свадьбе" },
  { text: "Ты делаешь меня таким", highlight: "счастливым" },
];

export const heartQuotes = [
  "Ты мое солнышко",
  "Спасибо что ты есть",
  "Блее",
  "Обожаю когда ты существувуешь",
  "Даятебявсювылижу",
  "Ты моя принцесса",
  "Я ТЕБЯ ОБОЖАЮ",
  "А я люблю тебя",
  "С тобой уютнее чем где либо",
  "Моя булочка",
  "Твой смех так успокаивает",
  "Съем тебя всю",
  "Мы лучшие",
  "Я так хочу одеть кольцо на твую руку",
  "Муаамуамуа",
  "Я скучаю",
  "Засосу тебя",
  "Моя гөржес вайф",
  "Мы всех взорвем"
];