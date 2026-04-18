export type MemberRole = "adult" | "teen" | "kid";

export type Member = {
  id: string;
  name: string;
  role: MemberRole;
  avatar: string;
  monthlyBudget: number;
  used: number;
  color: string;
};

export type DeviceCategory =
  | "home"
  | "mobility"
  | "work"
  | "entertainment"
  | "wearable"
  | "kids";

export type Device = {
  id: string;
  name: string;
  category: DeviceCategory;
  emoji: string;
  owner: string;
  dailyBudget: number;
  usedToday: number;
  status: "ok" | "warning" | "alert";
  trend: number;
};

export type AlertItem = {
  id: string;
  icon: string;
  title: string;
  message: string;
  level: "info" | "warn" | "danger" | "success";
  time: string;
};

export const members: Member[] = [
  {
    id: "m1",
    name: "Ksenia",
    role: "adult",
    avatar: "👩",
    monthlyBudget: 4_500_000,
    used: 2_180_000,
    color: "#7c5cff",
  },
  {
    id: "m2",
    name: "Alex",
    role: "adult",
    avatar: "👨",
    monthlyBudget: 3_000_000,
    used: 2_720_000,
    color: "#22d3ee",
  },
  {
    id: "m3",
    name: "Mia (14)",
    role: "teen",
    avatar: "🧑",
    monthlyBudget: 1_500_000,
    used: 1_420_000,
    color: "#fbbf24",
  },
  {
    id: "m4",
    name: "Leo (8)",
    role: "kid",
    avatar: "🧒",
    monthlyBudget: 600_000,
    used: 180_000,
    color: "#34d399",
  },
];

export const devices: Device[] = [
  {
    id: "d1",
    name: "Smart Speaker Küche",
    category: "home",
    emoji: "🔊",
    owner: "Familie",
    dailyBudget: 20_000,
    usedToday: 14_320,
    status: "ok",
    trend: -4,
  },
  {
    id: "d2",
    name: "AI-Kühlschrank",
    category: "home",
    emoji: "🧊",
    owner: "Familie",
    dailyBudget: 10_000,
    usedToday: 3_200,
    status: "ok",
    trend: -12,
  },
  {
    id: "d3",
    name: "Robo-Staubsauger",
    category: "home",
    emoji: "🤖",
    owner: "Familie",
    dailyBudget: 5_000,
    usedToday: 4_890,
    status: "warning",
    trend: 18,
  },
  {
    id: "d4",
    name: "E-Auto Assistent",
    category: "mobility",
    emoji: "🚗",
    owner: "Alex",
    dailyBudget: 50_000,
    usedToday: 38_410,
    status: "ok",
    trend: 6,
  },
  {
    id: "d5",
    name: "AR-Brille",
    category: "wearable",
    emoji: "🕶️",
    owner: "Ksenia",
    dailyBudget: 80_000,
    usedToday: 79_220,
    status: "alert",
    trend: 42,
  },
  {
    id: "d6",
    name: "Arbeits-Laptop",
    category: "work",
    emoji: "💻",
    owner: "Ksenia",
    dailyBudget: 120_000,
    usedToday: 61_200,
    status: "ok",
    trend: 3,
  },
  {
    id: "d7",
    name: "Kinder-Tablet",
    category: "kids",
    emoji: "📱",
    owner: "Leo (8)",
    dailyBudget: 15_000,
    usedToday: 6_100,
    status: "ok",
    trend: -8,
  },
  {
    id: "d8",
    name: "Gaming-Konsole",
    category: "entertainment",
    emoji: "🎮",
    owner: "Mia (14)",
    dailyBudget: 35_000,
    usedToday: 33_800,
    status: "warning",
    trend: 22,
  },
  {
    id: "d9",
    name: "Fitness-Watch",
    category: "wearable",
    emoji: "⌚",
    owner: "Alex",
    dailyBudget: 8_000,
    usedToday: 4_600,
    status: "ok",
    trend: 1,
  },
];

export const alerts: AlertItem[] = [
  {
    id: "a1",
    icon: "⚠️",
    title: "AR-Brille fast am Tageslimit",
    message: "99% verbraucht — schaltet gleich auf Low-Quality-Modus.",
    level: "warn",
    time: "vor 3 Min.",
  },
  {
    id: "a2",
    icon: "🚨",
    title: "Mia nähert sich Monatsbudget",
    message:
      "95% aufgebraucht. Nach Überschreitung greift Auto-Throttling auf kleineres Modell.",
    level: "danger",
    time: "vor 18 Min.",
  },
  {
    id: "a3",
    icon: "💧",
    title: "Token-Leck erkannt: Robo-Staubsauger",
    message: "Ungewöhnlich hoher Idle-Verbrauch. Neustart empfohlen.",
    level: "warn",
    time: "vor 42 Min.",
  },
  {
    id: "a4",
    icon: "🎉",
    title: "Leo spart 70% seines Budgets",
    message: "Bonus-Tokens fürs nächste Monatsende freigeschaltet.",
    level: "success",
    time: "vor 2 Std.",
  },
];

export const hourlyUsage: { hour: string; verbrauch: number; prognose: number }[] = [
  { hour: "00", verbrauch: 12000, prognose: 14000 },
  { hour: "02", verbrauch: 4500, prognose: 8000 },
  { hour: "04", verbrauch: 2100, prognose: 4000 },
  { hour: "06", verbrauch: 18500, prognose: 16000 },
  { hour: "08", verbrauch: 42800, prognose: 38000 },
  { hour: "10", verbrauch: 61200, prognose: 54000 },
  { hour: "12", verbrauch: 48900, prognose: 52000 },
  { hour: "14", verbrauch: 55300, prognose: 58000 },
  { hour: "16", verbrauch: 72100, prognose: 66000 },
  { hour: "18", verbrauch: 91400, prognose: 82000 },
  { hour: "20", verbrauch: 68700, prognose: 74000 },
  { hour: "22", verbrauch: 34200, prognose: 42000 },
];

export const weeklyTrend: { day: string; haushalt: number }[] = [
  { day: "Mo", haushalt: 412000 },
  { day: "Di", haushalt: 398000 },
  { day: "Mi", haushalt: 451000 },
  { day: "Do", haushalt: 389000 },
  { day: "Fr", haushalt: 521000 },
  { day: "Sa", haushalt: 612000 },
  { day: "So", haushalt: 489000 },
];

export const CONSTANTS = {
  // Realistische Annahmen (Mix aus aktuellen Provider-Preisen, gerundet)
  eurosPerMillionTokens: 3.2,
  gramsCO2PerThousandTokens: 0.42,
  householdMonthlyBudget: 9_600_000,
};

export function formatTokens(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(2) + " Mio";
  if (n >= 1_000) return (n / 1_000).toFixed(1) + "k";
  return n.toString();
}

export function formatEuro(n: number): string {
  return n.toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 2,
  });
}

export function tokensToEuro(tokens: number): number {
  return (tokens / 1_000_000) * CONSTANTS.eurosPerMillionTokens;
}

export function tokensToCO2g(tokens: number): number {
  return (tokens / 1_000) * CONSTANTS.gramsCO2PerThousandTokens;
}
