export type MeleeCharacterKey =
  | 'BOWSER'
  | 'CAPTAIN_FALCON'
  | 'DONKEY_KONG'
  | 'DR_MARIO'
  | 'FALCO'
  | 'FOX'
  | 'GAME_AND_WATCH'
  | 'GANONDORF'
  | 'ICE_CLIMBERS'
  | 'KIRBY'
  | 'LINK'
  | 'LUIGI'
  | 'MARIO'
  | 'MARTH'
  | 'MEWTWO'
  | 'NESS'
  | 'PEACH'
  | 'PICHU'
  | 'PIKACHU'
  | 'JIGGLYPUFF'
  | 'ROY'
  | 'SAMUS'
  | 'SHEIK'
  | 'YOSHI'
  | 'YOUNG_LINK'
  | 'ZELDA';

const BOWSER = 'BOWSER';
const CAPTAIN_FALCON = 'CAPTAIN_FALCON';
const DONKEY_KONG = 'DONKEY_KONG';
const DR_MARIO = 'DR_MARIO';
const FALCO = 'FALCO';
const FOX = 'FOX';
const GAME_AND_WATCH = 'GAME_AND_WATCH';
const GANONDORF = 'GANONDORF';
const ICE_CLIMBERS = 'ICE_CLIMBERS';
const KIRBY = 'KIRBY';
const LINK = 'LINK';
const LUIGI = 'LUIGI';
const MARIO = 'MARIO';
const MARTH = 'MARTH';
const MEWTWO = 'MEWTWO';
const NESS = 'NESS';
const PEACH = 'PEACH';
const PICHU = 'PICHU';
const PIKACHU = 'PIKACHU';
const JIGGLYPUFF = 'JIGGLYPUFF';
const ROY = 'ROY';
const SAMUS = 'SAMUS';
const SHEIK = 'SHEIK';
const YOSHI = 'YOSHI';
const YOUNG_LINK = 'YOUNG_LINK';
const ZELDA = 'ZELDA';

type PowerRankingTag = 'SA' | 'CL' | 'BR' | 'VE' | 'PE' | 'AR' | 'UY';

export interface PowerRankingPlayer {
  rank: number;
  hm?: boolean;
  player: string;
  characters?: Array<MeleeCharacterKey>;
}

interface PowerRanking {
  year: number;
  title: string;
  subtitle?: string;
  tag: PowerRankingTag;
  flag?: string;
  players: Array<PowerRankingPlayer>;
}

interface RankingResult {
  year: number;
  title: string;
  flag: string;
  tag: PowerRankingTag;
  player: string;
  rank: string;
  characters?: MeleeCharacterKey[];
}

export const RANKINGS: Readonly<Array<PowerRanking>> = [
  {
    year: 2020,
    title: 'Uruguay',
    subtitle: 'ELO',
    tag: 'UY',
    players: [
      {
        rank: 1,
        player: 'sagat',
        characters: [CAPTAIN_FALCON],
      },
      {
        rank: 2,
        player: 'srpaz',
        characters: [FALCO],
      },
      {
        rank: 3,
        player: 'iguana',
        characters: [PEACH],
      },
      {
        rank: 4,
        player: 'solid',
        characters: [CAPTAIN_FALCON],
      },
      {
        rank: 5,
        player: 'francokiwi',
        characters: [ZELDA],
      },
      {
        rank: 6,
        player: 'aalz',
        characters: [YOSHI],
      },
      {
        rank: 7,
        player: 'dio',
        characters: [SHEIK],
      },
      {
        rank: 8,
        player: 'smeag',
        characters: [GAME_AND_WATCH],
      },
      {
        rank: 9,
        player: 'pladson',
        characters: [LINK],
      },
      {
        rank: 10,
        player: 'bugsmasher',
        characters: [MARTH],
      },
      {
        rank: 11,
        player: 'kapito',
        characters: [FOX],
      },
      {
        rank: 12,
        player: 'transformacion',
        characters: [FOX],
      },
      {
        rank: 13,
        player: 'blazam',
        characters: [MARIO],
      },
      {
        rank: 14,
        player: 'walachia',
        characters: [MARTH],
      },
      {
        rank: 15,
        player: 'sigma-uy',
        characters: [YOUNG_LINK],
      },
    ],
  },
  {
    year: 2020,
    title: 'Chile',
    tag: 'CL',
    players: [
      {
        rank: 1,
        player: 'hp',
        characters: ['YOSHI', 'FOX', 'DR_MARIO', 'LUIGI']
      },
      {
        rank: 2,
        player: 'chape',
        characters: ['FOX', 'PEACH', 'JIGGLYPUFF']
      },
      {
        rank: 3,
        player: 'raikin',
        characters: ['SHEIK', 'DONKEY_KONG', 'MARTH']
      },
      {
        rank: 4,
        player: 'mave',
        characters: ['MARTH', 'FOX']
      },
      {
        rank: 5,
        player: 'rocket',
        characters: ['YOUNG_LINK']
      },
      {
        rank: 6,
        player: 'hunk',
        characters: ['SHEIK']
      },
      {
        rank: 7,
        player: 'pipo',
        characters: ['FALCO', 'FOX', 'CAPTAIN_FALCON']
      },
      {
        rank: 8,
        player: 'zera',
        characters: ['MARTH']
      },
      {
        rank: 9,
        player: 'nyx',
        characters: ['CAPTAIN_FALCON', 'FALCO', 'GAME_AND_WATCH', 'NESS']
      },
      {
        rank: 10,
        player: 'guas',
        characters: ['MEWTWO']
      },
      {
        rank: 11,
        player: 'ndj',
        characters: ['PIKACHU', 'GANONDORF']
      },
      {
        rank: 12,
        player: 'tewa',
        characters: ['MARTH']
      },
      {
        rank: 13,
        player: 'miguel',
        characters: ['FOX']
      },
      {
        rank: 14,
        player: 'roche',
        characters: ['MARTH', 'SHEIK', 'FOX']
      },
      {
        rank: 15,
        player: 'blackay',
        characters: ['FALCO']
      },
      {
        rank: 16,
        player: 'lincho',
        characters: ['MARTH', 'CAPTAIN_FALCON']
      },
      {
        rank: 17,
        player: 'lopino',
        characters: ['ICE_CLIMBERS', 'JIGGLYPUFF']
      },
      {
        rank: 18,
        player: 'link',
        characters: ['CAPTAIN_FALCON', 'FALCO']
      },
      {
        rank: 19,
        player: 'ph',
        characters: ['LUIGI']
      },
      {
        rank: 20,
        player: 'drgs',
        characters: ['FALCO']
      },
      {
        rank: 21,
        player: 'supernachoman',
        characters: ['FOX', 'MARTH']
      },
      {
        rank: 22,
        player: 'bansy',
        characters: ['PEACH']
      },
      {
        rank: 23,
        player: 'stonks',
        characters: ['CAPTAIN_FALCON']
      },
      {
        rank: 24,
        player: 'anoni',
        characters: ['FOX', 'FALCO']
      },
      {
        rank: 25,
        player: 'kdj',
        characters: ['SHEIK']
      },
      {
        rank: 26,
        player: 'besodea',
        characters: ['FOX']
      },
      {
        rank: 27,
        player: 'josha',
        characters: ['FOX', 'LUIGI']
      },
      {
        rank: 28,
        player: 'kancer',
        characters: ['JIGGLYPUFF', 'CAPTAIN_FALCON']
      },
      {
        rank: 29,
        player: 'earthquake',
        characters: ['GANONDORF']
      },
      {
        rank: 30,
        player: 'poket',
        characters: ['FALCO']
      }
    ]
  },
  {
    year: 2020,
    title: 'Brazil',
    tag: 'BR',
    players: [
      {
        rank: 1,
        player: 'caioicy',
        characters: [SHEIK]
      },
      {
        rank: 2,
        player: 'kodo',
        characters: [MARTH]
      },
      {
        rank: 3,
        player: 'bira',
        characters: [FALCO, FOX]
      },
      {
        rank: 4,
        player: 'vlory',
        characters: [FALCO]
      },
      {
        rank: 5,
        player: 'laj',
        characters: [MARTH, LINK]
      },
      {
        rank: 6,
        player: 'guto',
        characters: [FALCO]
      },
      {
        rank: 7,
        player: 'leso',
        characters: [CAPTAIN_FALCON]
      },
      {
        rank: 8,
        player: 'godz',
        characters: [SAMUS]
      },
      {
        rank: 9,
        player: 'mendy',
        characters: [FOX]
      },
      {
        rank: 10,
        player: 'not',
        characters: [FOX]
      }
    ]
  },
  {
    year: 2021,
    title: 'Chile',
    subtitle: 'half-year',
    tag: 'CL',
    players: [
      {
        rank: 1,
        player: 'chape',
        characters: ['FOX']
      },
      {
        rank: 2,
        player: 'raikin',
        characters: ['SHEIK']
      },
      {
        rank: 3,
        player: 'hp',
        characters: ['YOSHI', 'DR_MARIO']
      },
      {
        rank: 4,
        player: 'mave',
        characters: ['MARTH']
      },
      {
        rank: 5,
        player: 'dark',
        characters: ['FOX']
      },
      {
        rank: 6,
        player: 'pipo',
        characters: ['FALCO']
      },
      {
        rank: 7,
        player: 'nyx',
        characters: ['GAME_AND_WATCH', 'CAPTAIN_FALCON', 'FALCO']
      },
      {
        rank: 8,
        player: 'hunk',
        characters: ['SHEIK']
      },
      {
        rank: 9,
        player: 'rocket',
        characters: ['YOUNG_LINK']
      },
      {
        rank: 10,
        player: 'roche',
        characters: ['MARTH']
      },
      {
        rank: 11,
        player: 'zera'
      },
      {
        rank: 12,
        player: 'guas'
      },
      {
        rank: 13,
        player: 'ndj'
      },
      {
        rank: 14,
        player: 'tewa'
      },
      {
        rank: 15,
        player: 'lincho'
      },
      {
        rank: 16,
        player: 'miguel'
      },
      {
        rank: 17,
        player: 'link'
      },
      {
        rank: 18,
        player: 'blackay'
      },
      {
        rank: 19,
        player: 'crono'
      },
      {
        rank: 20,
        player: 'lopino'
      }
    ]
  },
  {
    year: 2021,
    title: 'Brazil',
    subtitle: 'half-year',
    tag: 'BR',
    players: [
      {
        rank: 1,
        player: 'aisen',
        characters: [FOX, MARTH]
      },
      {
        rank: 2,
        player: 'caioicy',
        characters: [DR_MARIO, SHEIK, CAPTAIN_FALCON, FALCO]
      },
      {
        rank: 3,
        player: 'kodo',
        characters: [MARTH]
      },
      {
        rank: 4,
        player: 'bira',
        characters: [FALCO, FOX]
      },
      {
        rank: 5,
        player: 'izzi',
        characters: [FALCO]
      },
      {
        rank: 6,
        player: 'vlory',
        characters: [FALCO]
      },
      {
        rank: 7,
        player: 'leso',
        characters: [CAPTAIN_FALCON]
      },
      {
        rank: 8,
        player: 'trz',
        characters: [CAPTAIN_FALCON, FALCO]
      },
      {
        rank: 9,
        player: 'laj',
        characters: [MARTH, LINK]
      },
      {
        rank: 10,
        player: 'liar',
        characters: [FALCO]
      },
      {
        rank: 11,
        player: 'lude',
        characters: [PEACH]
      },
      {
        rank: 12,
        player: 'walk',
        characters: [FOX, SHEIK]
      },
      {
        rank: 13,
        player: 'mcs',
        characters: [SHEIK]
      },
      {
        rank: 14,
        player: 'not',
        characters: [FOX]
      },
      {
        rank: 15,
        player: 'zim',
        characters: [PEACH]
      },
      {
        hm: true,
        rank: 101,
        player: 'canhaocarlos',
        characters: [DR_MARIO]
      },
      {
        hm: true,
        rank: 102,
        player: 'yufu',
        characters: [CAPTAIN_FALCON]
      },
      {
        hm: true,
        rank: 103,
        player: 'bobesco',
        characters: [MARTH]
      },
      {
        hm: true,
        rank: 104,
        player: 'zen',
        characters: [JIGGLYPUFF]
      }
    ]
  },
  {
    year: 2021,
    title: 'Uruguay',
    subtitle: 'ELO',
    tag: 'UY',
    players: [
      {
        rank: 1,
        player: 'sagat',
        characters: [CAPTAIN_FALCON],
      },
      {
        rank: 2,
        player: 'iguana',
        characters: [PEACH],
      },
      {
        rank: 3,
        player: 'srpaz',
        characters: [FALCO],
      },
      {
        rank: 4,
        player: 'solid',
        characters: [CAPTAIN_FALCON],
      },
      {
        rank: 5,
        player: 'francokiwi',
        characters: [ZELDA],
      },
      {
        rank: 6,
        player: 'kapito',
        characters: [FOX],
      },
      {
        rank: 7,
        player: 'transformacion',
        characters: [FOX],
      },
      {
        rank: 8,
        player: 'alberti',
        characters: [JIGGLYPUFF],
      },
      {
        rank: 9,
        player: 'titymc',
        characters: [LUIGI],
      },
      {
        rank: 10,
        player: 'kalarse',
        characters: [MARTH],
      },
    ],
  },
  {
    year: 2021,
    title: 'South America',
    tag: 'SA',
    flag: 'un',
    players: [
      {
        rank: 1,
        player: 'chape',
        characters: [FOX]
      },
      {
        rank: 2,
        player: 'raikin',
        characters: [SHEIK]
      },
      {
        rank: 3,
        player: 'hp',
        characters: [YOSHI, DR_MARIO]
      },
      {
        rank: 4,
        player: 'mave',
        characters: [MARTH]
      },
      {
        rank: 5,
        player: 'dark',
        characters: [FOX]
      },
      {
        rank: 6,
        player: 'aisen',
        characters: [FOX, MARTH]
      },
      {
        rank: 7,
        player: 'caioicy',
        characters: [DR_MARIO, SHEIK]
      },
      {
        rank: 8,
        player: 'pipo',
        characters: [FALCO]
      },
      {
        rank: 9,
        player: 'nyx',
        characters: [GAME_AND_WATCH, CAPTAIN_FALCON, FALCO]
      },
      {
        rank: 10,
        player: 'rocket',
        characters: [YOUNG_LINK]
      },
      {
        rank: 11,
        player: 'guas',
        characters: [MEWTWO]
      },
      {
        rank: 12,
        player: 'hunk',
        characters: [SHEIK]
      },
      {
        rank: 13,
        player: 'kodo',
        characters: [MARTH]
      },
      {
        rank: 14,
        player: 'zera',
        characters: [MARTH]
      },
      {
        rank: 15,
        player: 'lincho',
        characters: [MARTH]
      },
      {
        rank: 16,
        player: 'roche',
        characters: [MARTH, FOX]
      },
      {
        rank: 17,
        player: 'bira',
        characters: [FALCO, FOX]
      },
      {
        rank: 18,
        player: 'ndj',
        characters: [PIKACHU, GANONDORF]
      },
      {
        rank: 19,
        player: 'tewa',
        characters: [MARTH]
      },
      {
        rank: 20,
        player: 'blackay',
        characters: [FALCO]
      },
      {
        rank: 21,
        player: 'leso',
        characters: [CAPTAIN_FALCON, DR_MARIO]
      },
      {
        rank: 22,
        player: 'lopino',
        characters: [ICE_CLIMBERS]
      },
      {
        rank: 23,
        player: 'link',
        characters: [CAPTAIN_FALCON]
      },
      {
        rank: 24,
        player: 'crono',
        characters: [FOX, NESS]
      },
      {
        rank: 25,
        player: 'josha',
        characters: [FOX]
      },
      {
        rank: 26,
        player: 'oni',
        characters: [SHEIK, CAPTAIN_FALCON]
      },
      {
        rank: 27,
        player: 'skyy',
        characters: [FALCO]
      },
      {
        rank: 28,
        player: 'kdj',
        characters: [SHEIK]
      },
      {
        rank: 29,
        player: 'bobesco',
        characters: ['MARTH']
      },
      {
        rank: 30,
        player: 'papyrus',
        characters: ['MARTH']
      },
      {
        rank: 31,
        player: 'besodea',
        characters: ['FOX', 'CAPTAIN_FALCON']
      },
      {
        rank: 32,
        player: 'stonks',
        characters: ['CAPTAIN_FALCON', 'PEACH']
      },
      {
        rank: 33,
        player: 'ph',
        characters: ['LUIGI', 'PEACH']
      },
      {
        rank: 34,
        player: 'drgs',
        characters: ['FALCO']
      },
      {
        rank: 35,
        player: 'sigma',
        characters: ['FALCO', 'CAPTAIN_FALCON']
      },
      {
        rank: 36,
        player: 'drop',
        characters: ['FOX']
      },
      {
        rank: 37,
        player: 'mcc',
        characters: ['PEACH', 'JIGGLYPUFF']
      },
      {
        rank: 38,
        player: 'nagito',
        characters: ['CAPTAIN_FALCON', 'FALCO']
      },
      {
        rank: 39,
        player: 'mcs',
        characters: ['SHEIK']
      },
      {
        rank: 40,
        player: 'anoni',
        characters: ['FOX']
      },
      {
        hm: true,
        rank: 101,
        player: 'zen',
        characters: ['JIGGLYPUFF']
      },
      {
        hm: true,
        rank: 102,
        player: 'ilde',
        characters: ['SHEIK']
      },
      {
        hm: true,
        rank: 103,
        player: 'miguel',
        characters: ['FOX']
      }
    ]
  },
  {
    year: 2022,
    title: 'Venezuela',
    subtitle: 'summer',
    tag: 'VE',
    players: [
      {
        rank: 1,
        player: 'cartezsoul',
        characters: [PEACH]
      },
      {
        rank: 2,
        player: 'cax',
        characters: [FALCO, FOX]
      },
      {
        rank: 3,
        player: 'yuky',
        characters: [FALCO]
      },
      {
        rank: 4,
        player: 'blitzkrieg',
        characters: [SHEIK, FALCO]
      },
      {
        rank: 5,
        player: 'valgarite',
        characters: [PEACH]
      },
      {
        rank: 6,
        player: 'luichox',
        characters: [FALCO]
      },
      {
        rank: 7,
        player: 'risotto',
        characters: [MARTH]
      },
      {
        rank: 8,
        player: 'kimo',
        characters: [FALCO]
      },
      {
        rank: 9,
        player: 'bbc',
        characters: [PEACH, YOSHI]
      },
      {
        rank: 10,
        player: 'neo',
        characters: [JIGGLYPUFF]
      },
      {
        rank: 11,
        player: 'xpelox',
        characters: [FALCO, JIGGLYPUFF]
      },
      {
        rank: 12,
        player: 'apselito',
        characters: [ICE_CLIMBERS]
      },
      {
        rank: 13,
        player: 'marciano',
        characters: [CAPTAIN_FALCON]
      },
      {
        rank: 14,
        player: 'dareot',
        characters: [LUIGI, FOX]
      },
      {
        rank: 15,
        player: '911',
        characters: [CAPTAIN_FALCON]
      },
      {
        rank: 16,
        player: 'darkaro',
        characters: [MARTH]
      },
      {
        rank: 17,
        player: 'pancakes',
        characters: [FALCO]
      },
      {
        rank: 18,
        player: 'garu',
        characters: [SHEIK]
      },
      {
        rank: 19,
        player: 'kike',
        characters: [MARTH]
      },
      {
        rank: 20,
        player: 'spade',
        characters: [FOX]
      },
      {
        rank: 21,
        player: 'foquito',
        characters: [KIRBY, SHEIK]
      },
      {
        rank: 22,
        player: 'masturbin',
        characters: [FALCO]
      },
      {
        rank: 23,
        player: 'lum1',
        characters: [CAPTAIN_FALCON]
      },
      {
        rank: 24,
        player: 'kariark',
        characters: [FOX]
      },
      {
        rank: 25,
        player: 'palo',
        characters: [MARTH, LUIGI]
      },
      {
        rank: 26,
        player: 'rin',
        characters: [MARTH]
      },
      {
        rank: 27,
        player: 'flye',
        characters: [JIGGLYPUFF]
      },
      {
        rank: 28,
        player: 'heavy',
        characters: [MARTH, JIGGLYPUFF]
      },
      {
        rank: 29,
        player: 'poe',
        characters: [PEACH, JIGGLYPUFF]
      },
      {
        rank: 30,
        player: 'dimenz',
        characters: [FALCO]
      },
      {
        hm: true,
        rank: 101,
        player: 'puzka',
        characters: [FALCO]
      },
      {
        hm: true,
        rank: 102,
        player: 'bmob',
        characters: [GANONDORF]
      },
      {
        hm: true,
        rank: 103,
        player: 'johnconnor',
        characters: [SHEIK]
      },
      {
        hm: true,
        rank: 104,
        player: 'tashi',
        characters: [YOUNG_LINK]
      },
      {
        hm: true,
        rank: 105,
        player: 'velvet',
        characters: [JIGGLYPUFF]
      },
      {
        hm: true,
        rank: 106,
        player: 'supervagon420',
        characters: [JIGGLYPUFF]
      }
    ]
  },
  {
    year: 2022,
    title: 'Chile',
    tag: 'CL',
    players: [
      {
        rank: 1,
        player: 'chape',
        characters: [FOX, SHEIK]
      },
      {
        rank: 2,
        player: 'raikin',
        characters: [SHEIK]
      },
      {
        rank: 3,
        player: 'mave',
        characters: [MARTH]
      },
      {
        rank: 4,
        player: 'hp',
        characters: [YOSHI, FALCO, PEACH]
      },
      {
        rank: 5,
        player: 'rocket',
        characters: [YOUNG_LINK]
      },
      {
        rank: 6,
        player: 'roche',
        characters: [MARTH]
      },
      {
        rank: 7,
        player: 'lincho',
        characters: [MARTH]
      },
      {
        rank: 8,
        player: 'dark',
        characters: [FOX]
      },
      {
        rank: 9,
        player: 'verce',
        characters: [ICE_CLIMBERS, CAPTAIN_FALCON]
      },
      {
        rank: 10,
        player: 'hunk',
        characters: [SHEIK]
      },
      {
        rank: 11,
        player: 'drop',
        characters: [FOX]
      },
      {
        rank: 12,
        player: 'crono',
        characters: [FOX, NESS]
      },
      {
        rank: 13,
        player: 'guas',
        characters: [MEWTWO]
      },
      {
        rank: 14,
        player: 'pipo',
        characters: [FALCO]
      },
      {
        rank: 15,
        player: 'amalgama',
        characters: [LUIGI]
      },
      {
        rank: 16,
        player: 'josha',
        characters: [FOX]
      },
      {
        rank: 17,
        player: 'limon',
        characters: [FOX]
      },
      {
        rank: 18,
        player: 'stonks',
        characters: [CAPTAIN_FALCON, PEACH]
      },
      {
        rank: 19,
        player: 'ndj',
        characters: [PIKACHU, GANONDORF]
      },
      {
        rank: 20,
        player: 'mist',
        characters: [PEACH]
      },
      {
        rank: 21,
        player: 'amante',
        characters: [SHEIK]
      },
      {
        rank: 22,
        player: 'lopino',
        characters: [ICE_CLIMBERS, JIGGLYPUFF]
      },
      {
        rank: 23,
        player: 'anoni',
        characters: [FOX]
      },
      {
        hm: true,
        rank: 101,
        player: 'nyx',
        characters: [FALCO, GAME_AND_WATCH, DR_MARIO, CAPTAIN_FALCON, ICE_CLIMBERS]
      },
      {
        hm: true,
        rank: 102,
        player: 'zera',
        characters: [MARTH]
      },
      {
        hm: true,
        rank: 103,
        player: 'zag',
        characters: [JIGGLYPUFF]
      }
    ]
  },
  {
    year: 2022,
    title: 'Brazil',
    tag: 'BR',
    players: [
      {
        rank: 1,
        player: 'aisen',
        characters: [FOX, MARTH]
      },
      {
        rank: 2,
        player: 'caioicy',
        characters: [DR_MARIO, LUIGI, SHEIK, YOSHI, FALCO, FOX, CAPTAIN_FALCON]
      },
      {
        rank: 3,
        player: 'trz',
        characters: [CAPTAIN_FALCON]
      },
      {
        rank: 4,
        player: 'mcs',
        characters: [SHEIK]
      },
      {
        rank: 5,
        player: 'aleixo',
        characters: [PEACH]
      },
      {
        rank: 6,
        player: 'wario',
        characters: [CAPTAIN_FALCON]
      },
      {
        rank: 7,
        player: 'bobesco',
        characters: [MARTH]
      },
      {
        rank: 8,
        player: 'leso',
        characters: [CAPTAIN_FALCON]
      },
      {
        rank: 9,
        player: 'liar',
        characters: [FALCO]
      },
      {
        rank: 10,
        player: 'laj',
        characters: [MARTH, LINK]
      },
      {
        rank: 11,
        player: 'kinu',
        characters: [SHEIK]
      },
      {
        rank: 12,
        player: 'zen',
        characters: [FOX, JIGGLYPUFF]
      },
      {
        rank: 13,
        player: 'zim',
        characters: [PEACH]
      },
      {
        rank: 14,
        player: 'walk',
        characters: [FOX, SHEIK]
      },
      {
        hm: true,
        rank: 105,
        player: 'kodo',
        characters: [MARTH]
      },
      {
        hm: true,
        rank: 104,
        player: 'bira',
        characters: [FALCO, FOX]
      },
      {
        hm: true,
        rank: 103,
        player: 'izzi',
        characters: [FALCO]
      },
      {
        hm: true,
        rank: 102,
        player: 'yufu',
        characters: [CAPTAIN_FALCON]
      },
      {
        hm: true,
        rank: 101,
        player: 'dybloons',
        characters: [FOX, FALCO, SHEIK]
      }
    ]
  },
  {
    year: 2023,
    title: 'Uruguay',
    subtitle: 'ELO',
    tag: 'UY',
    players: [
      {
        rank: 1,
        player: 'sagat',
        characters: [CAPTAIN_FALCON],
      },
      {
        rank: 2,
        player: 'iguana',
        characters: [PEACH],
      },
      {
        rank: 3,
        player: 'mingudai',
        characters: [FOX],
      },
      {
        rank: 4,
        player: 'francokiwi',
        characters: [ZELDA],
      },
      {
        rank: 5,
        player: 'srpaz',
        characters: [FALCO],
      },
      {
        rank: 6,
        player: 'transformacion',
        characters: [FOX],
      },
      {
        rank: 7,
        player: 'kapito',
        characters: [FOX],
      },
      {
        rank: 8,
        player: 'solid',
        characters: [CAPTAIN_FALCON],
      },
      {
        rank: 8,
        player: 's1r',
        characters: [SHEIK],
      },
      {
        rank: 10,
        player: 'walachia',
        characters: [MARTH],
      },
      {
        rank: 11,
        player: 'cody',
        characters: [PEACH],
      },
      {
        rank: 12,
        player: 'smeag',
        characters: [GAME_AND_WATCH],
      },
      {
        rank: 13,
        player: 'kalarse',
        characters: [MARTH],
      },
      {
        rank: 14,
        player: 'pencil',
        characters: [PIKACHU],
      },
      {
        rank: 15,
        player: 'zeeka',
        characters: [SHEIK],
      },
    ],
  },
  {
    year: 2023,
    title: 'Venezuela',
    tag: 'VE',
    players: [
      {
        rank: 1,
        player: 'cartezsoul',
        characters: [PEACH]
      },
      {
        rank: 2,
        player: 'cax',
        characters: [FALCO]
      },
      {
        rank: 3,
        player: 'risotto',
        characters: [MARTH]
      },
      {
        rank: 4,
        player: 'blitzkrieg',
        characters: [SHEIK, FOX]
      },
      {
        rank: 5,
        player: 'rin',
        characters: [MARTH, FOX]
      },
      {
        rank: 6,
        player: 'yuky',
        characters: [FALCO]
      },
      {
        rank: 7,
        player: 'neo',
        characters: [JIGGLYPUFF, GAME_AND_WATCH]
      },
      {
        rank: 8,
        player: 'luichox',
        characters: [FALCO, GANONDORF]
      },
      {
        rank: 9,
        player: 'watermelown',
        characters: [CAPTAIN_FALCON]
      },
      {
        rank: 10,
        player: 'apselito',
        characters: [ICE_CLIMBERS]
      },
      {
        rank: 11,
        player: 'bbc',
        characters: [PEACH, YOSHI]
      },
      {
        rank: 12,
        player: 'darkaro',
        characters: [MARTH, ZELDA]
      },
      {
        rank: 13,
        player: 'marciano',
        characters: [CAPTAIN_FALCON]
      },
      {
        rank: 14,
        player: 'palo',
        characters: [MARTH, LUIGI]
      },
      {
        rank: 15,
        player: 'valgarite',
        characters: [PEACH]
      },
      {
        rank: 16,
        player: '911',
        characters: [CAPTAIN_FALCON]
      },
      {
        rank: 17,
        player: 'puzka',
        characters: [FALCO, FOX]
      },
      {
        rank: 18,
        player: 'xpelox',
        characters: [FALCO, JIGGLYPUFF]
      },
      {
        rank: 19,
        player: 'dareot',
        characters: [LUIGI, FOX]
      },
      {
        rank: 20,
        player: 'kariark',
        characters: [FOX]
      },
      {
        rank: 21,
        player: 'jerich',
        characters: [SHEIK]
      },
      {
        rank: 22,
        player: 'johnconnor',
        characters: [SHEIK]
      },
      {
        rank: 23,
        player: 'pancakes',
        characters: [FALCO]
      },
      {
        rank: 24,
        player: 'vacon',
        characters: [FALCO, MARTH]
      },
      {
        rank: 25,
        player: 'bongofono',
        characters: [CAPTAIN_FALCON, FOX]
      },
      {
        rank: 26,
        player: 'foquito',
        characters: [KIRBY, FOX]
      },
      {
        rank: 27,
        player: 'kike',
        characters: [MARTH]
      },
      {
        rank: 28,
        player: 'dimenz',
        characters: [FALCO, FOX]
      },
      {
        rank: 29,
        player: 'ssaunter',
        characters: [FALCO]
      },
      {
        rank: 30,
        player: 'toxucroc',
        characters: [LUIGI]
      },
      {
        hm: true,
        rank: 101,
        player: 'shantaeld',
        characters: [PEACH]
      },
      {
        hm: true,
        rank: 102,
        player: 'h4te',
        characters: [CAPTAIN_FALCON]
      },
      {
        hm: true,
        rank: 103,
        player: 'farmahorro',
        characters: [CAPTAIN_FALCON]
      },
      {
        hm: true,
        rank: 104,
        player: 'elec',
        characters: [LUIGI]
      },
      {
        hm: true,
        rank: 105,
        player: 'kimo',
        characters: [FALCO]
      },
      {
        hm: true,
        rank: 106,
        player: 'rojas',
        characters: [FOX]
      }
    ]
  },
  {
    year: 2023,
    title: 'Brazil',
    tag: 'BR',
    players: [
      {
        rank: 1,
        player: 'muro',
        characters: [PEACH]
      },
      {
        rank: 2,
        player: 'dybloons',
        characters: [FOX, FALCO, SHEIK]
      },
      {
        rank: 3,
        player: 'caioicy',
        characters: [FALCO, DONKEY_KONG, YOSHI, FOX, SHEIK]
      },
      {
        rank: 4,
        player: 'aisen',
        characters: [FOX, MARTH]
      },
      {
        rank: 5,
        player: 'izzi',
        characters: [FALCO]
      },
      {
        rank: 6,
        player: 'bobesco',
        characters: [MARTH]
      },
      {
        rank: 7,
        player: 'wario',
        characters: [CAPTAIN_FALCON]
      },
      {
        rank: 8,
        player: 'bira',
        characters: [FALCO, FOX]
      },
      {
        rank: 9,
        player: 'trz',
        characters: [CAPTAIN_FALCON]
      },
      {
        rank: 10,
        player: 'mcs',
        characters: [SHEIK]
      },
      {
        hm: true,
        rank: 101,
        player: 'drutar',
        characters: [PIKACHU]
      },
      {
        hm: true,
        rank: 102,
        player: 'liar',
        characters: [FALCO]
      },
      {
        hm: true,
        rank: 103,
        player: 'kort',
        characters: [FOX]
      },
      {
        hm: true,
        rank: 104,
        player: 'not',
        characters: [FOX]
      },
      {
        hm: true,
        rank: 105,
        player: 'zen',
        characters: [FOX]
      }
    ]
  },
  {
    year: 2023,
    title: 'Chile',
    tag: 'CL',
    players: [
      {
        rank: 1,
        player: 'chape',
        characters: [FOX, SHEIK]
      },
      {
        rank: 2,
        player: 'mave',
        characters: [MARTH]
      },
      {
        rank: 3,
        player: 'raikin',
        characters: [SHEIK]
      },
      {
        rank: 4,
        player: 'dark',
        characters: [FOX]
      },
      {
        rank: 5,
        player: 'lincho',
        characters: [MARTH]
      },
      {
        rank: 6,
        player: 'rocket',
        characters: [YOUNG_LINK]
      },
      {
        rank: 7,
        player: 'drop',
        characters: [FOX]
      },
      {
        rank: 8,
        player: 'roche',
        characters: [MARTH, FOX, SHEIK]
      },
      {
        rank: 9,
        player: 'amante',
        characters: [SHEIK]
      },
      {
        rank: 10,
        player: 'crono',
        characters: [FOX, NESS]
      },
      {
        rank: 11,
        player: 'drgs',
        characters: [FALCO]
      },
      {
        rank: 12,
        player: 'josha',
        characters: [FOX]
      },
      {
        rank: 13,
        player: 'ndj',
        characters: [PIKACHU, GANONDORF]
      },
      {
        rank: 14,
        player: 'lopino',
        characters: [ICE_CLIMBERS, JIGGLYPUFF]
      },
      {
        rank: 15,
        player: 'amalgama',
        characters: [LUIGI]
      },
      {
        rank: 16,
        player: 'limon',
        characters: [FOX]
      },
      {
        rank: 17,
        player: 'anoni',
        characters: [FOX]
      },
      {
        rank: 18,
        player: 'ilde',
        characters: [SHEIK]
      },
      {
        rank: 19,
        player: 'duals',
        characters: [LUIGI]
      },
      {
        rank: 20,
        player: 'tau',
        characters: [MARTH]
      }
    ]
  },
  {
    year: 2024,
    title: 'Uruguay',
    subtitle: 'ELO',
    tag: 'UY',
    players: [
      {
        rank: 1,
        player: 'sagat',
        characters: [CAPTAIN_FALCON],
      },
      {
        rank: 2,
        player: 'iguana',
        characters: [PEACH],
      },
      {
        rank: 3,
        player: 'solid',
        characters: [CAPTAIN_FALCON],
      },
      {
        rank: 4,
        player: 'srpaz',
        characters: [FALCO],
      },
      {
        rank: 5,
        player: 'transformacion',
        characters: [FOX],
      },
      {
        rank: 6,
        player: 'francokiwi',
        characters: [ZELDA],
      },
      {
        rank: 7,
        player: 'kapito',
        characters: [FOX],
      },
      {
        rank: 8,
        player: 's1r',
        characters: [SHEIK],
      },
      {
        rank: 9,
        player: 'mingudai',
        characters: [FOX],
      },
      {
        rank: 10,
        player: 'cubax',
        characters: [FALCO],
      },
      {
        rank: 11,
        player: 'aalz',
        characters: [YOSHI],
      },
      {
        rank: 12,
        player: 'dio',
        characters: [SHEIK],
      },
      {
        rank: 13,
        player: 'razorblade',
        characters: [FALCO],
      },
      {
        rank: 14,
        player: 'pencil',
        characters: [PIKACHU],
      },
      {
        rank: 15,
        player: 'bugsmasher',
        characters: [MARTH],
      },
    ],
  },
  {
    year: 2024,
    title: 'Peru',
    tag: 'PE',
    players: [
      {
        rank: 1,
        player: 'amida',
        characters: [JIGGLYPUFF],
      },
      {
        rank: 2,
        player: 'mute',
        characters: [CAPTAIN_FALCON],
      },
      {
        rank: 3,
        player: 'die',
        characters: [MARTH],
      },
      {
        rank: 4,
        player: 'oldnova',
        characters: [CAPTAIN_FALCON, SHEIK],
      },
      {
        rank: 5,
        player: 'piglet',
        characters: [FOX, FALCO],
      },
      {
        rank: 6,
        player: 'pooper',
        characters: [MARTH, DONKEY_KONG],
      },
      {
        rank: 7,
        player: 'aju',
        characters: [FOX],
      },
      {
        rank: 8,
        player: 'yome',
        characters: [FALCO],
      },
      {
        rank: 9,
        player: 'josele',
        characters: [FOX],
      },
      {
        rank: 10,
        player: 'paracetakong',
        characters: [FALCO],
      },
      {
        rank: 11,
        player: 'jlp',
        characters: [SHEIK],
      },
      {
        rank: 12,
        player: 'hawlee',
        characters: [FOX],
      },
      {
        rank: 13,
        player: 'habbo',
        characters: [MARIO, PIKACHU],
      },
      {
        rank: 14,
        player: 'dobby',
        characters: [SHEIK],
      },
      {
        rank: 15,
        player: 'xboss',
        characters: [LUIGI],
      },
      {
        rank: 16,
        player: 'dragmire',
        characters: [FALCO, GANONDORF],
      },
      {
        rank: 17,
        player: 'nazgul',
        characters: [FALCO],
      },
      {
        rank: 18,
        player: 'lucio',
        characters: [YOSHI],
      },
      {
        rank: 19,
        player: 'joa',
        characters: [CAPTAIN_FALCON],
      },
      {
        rank: 20,
        player: 'jamil',
        characters: [SHEIK],
      },
      {
        rank: 21,
        player: 'tefo',
        characters: [PEACH, GAME_AND_WATCH],
      },
      {
        rank: 22,
        player: 'marakas',
        characters: [LUIGI],
      },
      {
        rank: 23,
        player: 'sm2k',
        characters: [FALCO],
      },
      {
        rank: 24,
        player: 'drsnapback',
        characters: [LUIGI],
      },
      {
        rank: 25,
        player: 'samir',
        characters: [DR_MARIO, MARIO],
      },
      {
        rank: 26,
        player: 'lor',
        characters: [LINK],
      },
    ],
  },
  {
    year: 2024,
    title: 'Argentina',
    tag: 'AR',
    players: [
      {
        rank: 1,
        player: 'clowder',
        characters: [FOX],
      },
      {
        rank: 2,
        player: 'pomf',
        characters: [FALCO],
      },
      {
        rank: 3,
        player: 'papyrus',
        characters: [MARTH],
      },
      {
        rank: 4,
        player: 'mogartio',
        characters: [MARTH],
      },
      {
        rank: 5,
        player: 'mazu',
        characters: [FOX],
      },
      {
        rank: 6,
        player: 'dalar',
        characters: [FOX],
      },
      {
        rank: 7,
        player: 'kamuri',
        characters: [PEACH],
      },
      {
        rank: 8,
        player: 'tgj',
        characters: [ICE_CLIMBERS],
      },
      {
        rank: 9,
        player: 'orios',
        characters: [FALCO],
      },
      {
        rank: 10,
        player: 'kidcarri',
        characters: [GAME_AND_WATCH],
      },
      {
        rank: 100,
        player: 'gunz',
        characters: [ICE_CLIMBERS],
        hm: true,
      },
    ],
  },
  {
    year: 2024,
    title: 'Brazil',
    tag: 'BR',
    players: [
      {
        rank: 1,
        player: 'caioicy',
        characters: [FOX],
      },
      {
        rank: 2,
        player: 'aleixo',
        characters: [PEACH],
      },
      {
        rank: 3,
        player: 'wario',
        characters: [CAPTAIN_FALCON],
      },
      {
        rank: 4,
        player: 'zen',
        characters: [ICE_CLIMBERS],
      },
      {
        rank: 5,
        player: 'vlory',
        characters: [FALCO],
      },
      {
        rank: 6,
        player: 'mcs',
        characters: [SHEIK],
      },
      {
        rank: 7,
        player: 'not',
        characters: [FOX],
      },
      {
        rank: 8,
        player: 'consi',
        characters: [FOX],
      },
      {
        rank: 9,
        player: 'joker',
        characters: [FALCO, FOX],
      },
      {
        rank: 10,
        player: 'gio',
        characters: [MARTH],
      },
      {
        rank: 200,
        player: 'aisen',
        characters: [FOX, MARTH],
        hm: true,
      },
      {
        rank: 190,
        player: 'leso',
        characters: [CAPTAIN_FALCON],
        hm: true,
      },
      {
        rank: 180,
        player: 'liar',
        characters: [FALCO],
        hm: true,
      },
      {
        rank: 170,
        player: 'phonix',
        characters: [SHEIK, JIGGLYPUFF],
        hm: true,
      },
      {
        rank: 160,
        player: 'trz',
        characters: [CAPTAIN_FALCON],
        hm: true,
      },
    ],
  },
];

export const getSortedRankings = (): Readonly<Array<PowerRanking>> => {
  return [...RANKINGS].sort((a: PowerRanking, b: PowerRanking) => {
    if (a.year !== b.year) {
      return b.year - a.year;
    }
    if (!!a.subtitle && !b.subtitle) {
      return 1;
    }
    if (!a.subtitle && !!b.subtitle) {
      return -1;
    }
    return a.title.localeCompare(b.title);
  });
};

export const getRankingsByCode = (data: any, code: string): Array<RankingResult> => {
  const rankings = getSortedRankings();
  const rankingsByCode: RankingResult[] = [];
  for (const ranking of rankings) {
    const rankingPlayer = ranking.players.find((p) =>
      data.db.fGetPlayerBySlug(p.player)?.slippiConnectCodes?.includes(code)
    );
    if(!rankingPlayer) {
      continue;
    }

    rankingsByCode.push({
      year: ranking.year,
      title: ranking.title,
      flag: ranking.flag || ranking.tag.toLowerCase(),
      tag: ranking.tag,
      player: rankingPlayer.player,
      rank: rankingPlayer.hm ? `HM` : `#${rankingPlayer.rank}`,
      characters: rankingPlayer.characters,
    });
  }
  return rankingsByCode;
};

const _findLatestRankByCode = (data: any, code: string): any /*RankingData */ => {
  const rankings = getSortedRankings();
  for (const ranking of rankings) {
    const rankingPlayer = ranking.players.find((p) =>
      data.db.fGetPlayerBySlug(p.player)?.slippiConnectCodes?.includes(code)
    );
    if (rankingPlayer) {
      const rank = rankingPlayer.hm ? `HM` : `#${rankingPlayer.rank}`;
      return `${ranking.year} ${ranking.tag} ${rank}`;
    }
  }
  return '';
};

import { COMPENDIUM } from '$lib/data/compendium';
export const findLatestRankByCode = (data: any, code: string): any /*RankingData */ => {
  const latestRank = _findLatestRankByCode(data, code);
  if (!!latestRank) {
    return latestRank;
  }

  // for (const tier of COMPENDIUM) {
  //   for (const slug of Object.keys(tier.slugs)) {
  //     const player = data.db.fGetPlayerBySlug(slug);
  //     if (player?.slippiConnectCodes?.includes(code)) {
  //       return `2024 BR ${tier.label}`;
  //     }
  //   }
  // }

  return '';
};
