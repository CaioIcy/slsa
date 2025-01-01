type SlippiCode = string;
type CountryCode = 'br' | 'cl' | 'ar' | 'uy' | 'co' | 've' | 'ec' | 'pe' | 'us' | 'bo' | 'gt';
type Subregion = 'br' | 'cl';

export const findPlayerBySlug = (slug: string): Player | undefined => {
  return players.find((p) => p.slug === slug);
};

export const findPlayerByCode = (code: string): Player | undefined => {
  return players.find((p) => p.slippiConnectCodes?.includes(code));
};

export interface Player {
  slug: string;
  tag?: string;
  countryCode?: CountryCode;
  subregion?: Subregion;
  slippiConnectCodes: Array<SlippiCode>;
  sgg?: Array<string>; // start.gg's user.discriminator
}

export const players: Array<Player> = [
  {
    slug: 'miguel',
    tag: 'Miguel',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['MIGUEL#0']
  },
  {
    slug: 'ilde',
    tag: 'Ilde',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['ILDE#538']
  },
  {
    slug: 'zen',
    tag: 'Zen',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['E#9', 'MUMA#810', 'ENZG#570'],
    sgg: ['5a1d4c2b'],
  },
  {
    slug: 'anoni',
    tag: 'Anonimon',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['ANON#329']
  },
  {
    slug: 'mcs',
    tag: 'McS33',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['MCS#356'],
    sgg: ['1a802a84']
  },
  {
    slug: 'nagito',
    tag: 'Nagito',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['NAGI#875']
  },
  {
    slug: 'mcc',
    tag: 'MCC',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['MCC#823']
  },
  {
    slug: 'drop',
    tag: 'Drop',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['DRP#684']
  },
  {
    slug: 'sigma',
    tag: 'SigMa',
    slippiConnectCodes: ['SIGMA#0', 'ESE#901', 'PHUT#556'],
    countryCode: 'cl',
    subregion: 'cl'
  },
  {
    slug: 'drgs',
    tag: 'DRGS',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['DRGS#149']
  },
  {
    slug: 'ph',
    tag: 'PH',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['PH#857']
  },
  {
    slug: 'stonks',
    tag: 'St0nks',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['SEES#784']
  },
  {
    slug: 'besodea',
    tag: 'Besodea3',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['TITO#657']
  },
  {
    slug: 'papyrus',
    tag: 'Papyrus',
    countryCode: 'ar',
    slippiConnectCodes: ['PPRS#512']
  },
  {
    slug: 'bobesco',
    tag: 'Bobesco',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['BOB#520'],
    sgg: ['8b5e8211']
  },
  {
    slug: 'kdj',
    tag: 'Korean Jesus',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['KJ#102', 'KUSA#164']
  },
  {
    slug: 'skyy',
    tag: 'Skyy',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['SKYY#519']
  },
  {
    slug: 'oni',
    tag: 'Oni',
    countryCode: 've',
    subregion: 'cl',
    slippiConnectCodes: ['NEOM#753']
  },
  {
    slug: 'josha',
    tag: 'Jo$ha',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['JOXA#420']
  },
  {
    slug: 'crono',
    tag: 'Crono',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['MYCO#237']
  },
  {
    slug: 'link',
    tag: 'Linksolidus',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['LINK#641']
  },
  {
    slug: 'lopino',
    tag: 'Lopino',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['LOPI#111']
  },
  {
    slug: 'leso',
    tag: 'Leso',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['LESO#826'],
    sgg: ['fbbb5e30']
  },
  {
    slug: 'blackay',
    tag: 'Blackayboard',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['BLAC#569']
  },
  {
    slug: 'tewa',
    tag: 'Tewa',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['TEWA#266']
  },
  {
    slug: 'ndj',
    tag: 'NDJ',
    countryCode: 've',
    subregion: 'cl',
    slippiConnectCodes: ['NDJ#132']
  },
  {
    slug: 'bira',
    tag: 'BIRA',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['BIRA#683']
  },
  {
    slug: 'roche',
    tag: 'Roche',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['ROCH#304']
  },
  {
    slug: 'lincho',
    tag: 'Lincho',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['LINCHO#9']
  },
  {
    slug: 'zera',
    tag: 'Zera',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['ZERA#938']
  },
  {
    slug: 'kodo',
    tag: 'kodo',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['KODO#649']
  },
  {
    slug: 'hunk',
    tag: 'meHunk3',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['HUNK#582']
  },
  {
    slug: 'guas',
    tag: 'Guasausky',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['GUAS#734']
  },
  {
    slug: 'rocket',
    tag: 'Rocket',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['ROCK#422']
  },
  {
    slug: 'nyx',
    tag: 'NyxTheShield',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['MUZA#281'],
    sgg: ['e6d9fe87']
  },
  {
    slug: 'pipo',
    tag: 'Pipo',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['PIPO#914']
  },
  {
    slug: 'caioicy',
    tag: 'caioicy',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['DRMARI#0', 'CAIO#157'],
    sgg: ['c6f7ef37']
  },
  {
    slug: 'aisen',
    tag: 'Aisengobay',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['AISE#145'],
    sgg: ['8a0d3733']
  },
  {
    slug: 'dark',
    tag: 'Dark',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['DARK#719']
  },
  {
    slug: 'mave',
    tag: 'Mave',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['MAVE#409']
  },
  {
    slug: 'hp',
    tag: 'HP',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['JENS#613']
  },
  {
    slug: 'raikin',
    tag: 'Raikin',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['RAIK#405']
  },
  {
    slug: 'chape',
    tag: 'Chape',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['HOMER#0', 'WOOP#700']
  },
  {
    slug: 'poket',
    tag: 'Poket',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['POKE#481']
  },
  {
    slug: 'earthquake',
    tag: 'Earthquake',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['PPQL#176']
  },
  {
    slug: 'kancer',
    tag: 'Kancervero',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['KNCR#731']
  },
  {
    slug: 'bansy',
    tag: 'Bansy',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: []
  },
  {
    slug: 'supernachoman',
    tag: 'SuperNachoMan',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: []
  },
  {
    slug: 'vlory',
    tag: 'Vlory',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['VLOR#403'],
    sgg: ['226754a1']
  },
  {
    slug: 'laj',
    tag: 'Laj',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['LAJ#525']
  },
  {
    slug: 'guto',
    tag: 'Weaselss',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['GUTO#927']
  },
  {
    slug: 'godz',
    tag: 'Godzrage',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: []
  },
  {
    slug: 'mendy',
    tag: 'Menddyy',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['EVA#485', 'EVA#755']
  },
  {
    slug: 'not',
    tag: 'Not',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['NOT#393'],
    sgg: ['98f123e8']
  },
  {
    slug: 'izzi',
    tag: 'IzZI127',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['IZZI#399'],
    sgg: ['c4a637a7']
  },
  {
    slug: 'trz',
    tag: 'TRZ',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['TRZ#166'],
    sgg: ['e81d933a']
  },
  {
    slug: 'liar',
    tag: 'LI4R',
    countryCode: 'gt',
    subregion: 'br',
    slippiConnectCodes: ['LIAR#4'],
    sgg: ['ae067bb9']
  },
  {
    slug: 'lude',
    tag: 'ludecoli',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['LUDE#803']
  },
  {
    slug: 'walk',
    tag: 'Walk',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['WALK#593']
  },
  {
    slug: 'zim',
    tag: 'Zim',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['ZIM#353'],
    sgg: ['5c51bc52']
  },
  {
    slug: 'canhaocarlos',
    tag: 'Canhãocarlos',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['CANH#641']
  },
  {
    slug: 'yufu',
    tag: 'YUFU',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['YUFU#762']
  },
  {
    slug: 'aleixo',
    tag: 'Aleixo',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['NINT#411'],
    sgg: ['d9632d80']
  },
  {
    slug: 'wario',
    tag: 'W4rio',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['WARI#512'],
    sgg: ['e100347c']
  },
  {
    slug: 'kinu',
    tag: 'kinu',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['KINU#658']
  },
  {
    slug: 'dybloons',
    tag: 'Dybloons',
    countryCode: 'us',
    subregion: 'br',
    slippiConnectCodes: ['DYBL#403']
  },
  {
    slug: 'muro',
    tag: 'murotriste',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['MURO#881']
  },
  {
    slug: 'limon',
    tag: 'Limon',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['LEMN#124']
  },
  {
    slug: 'mist',
    tag: 'Mistgun',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['MIST#508']
  },
  {
    slug: 'amante',
    tag: 'Amante Bandido',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['CUCO#509']
  },
  {
    slug: 'verce',
    tag: 'Vercetty',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['VECE#171']
  },
  {
    slug: 'henriquebulcao',
    tag: 'henriquebulcao',
    countryCode: 'br',
    slippiConnectCodes: ['ACAB#640'],
    subregion: 'br'
  },
  {
    slug: 'alditto',
    slippiConnectCodes: ['ADTT#185'],
    countryCode: 'bo'
  },
  {
    slug: 'aknoid',
    tag: 'Aknoid',
    countryCode: 'cl',
    slippiConnectCodes: ['AKNO#691'],
    subregion: 'cl'
  },
  {
    slug: 'amida',
    tag: 'Amida',
    slippiConnectCodes: ['AMID#505'],
    countryCode: 'us'
  },
  {
    slug: 'arsene',
    tag: 'Arsene',
    countryCode: 'br',
    slippiConnectCodes: ['ARSN#291'],
    subregion: 'br'
  },
  {
    slug: 'bluemagic',
    tag: 'BlueMagic',
    slippiConnectCodes: ['BLUE#824'],
    countryCode: 'ar'
  },
  {
    slug: 'bratu',
    tag: 'Bratu',
    countryCode: 'cl',
    slippiConnectCodes: ['BRAT#840'],
    subregion: 'cl'
  },
  {
    slug: 'encoder',
    tag: 'encoder',
    countryCode: 'cl',
    slippiConnectCodes: ['BYXN#310'],
    subregion: 'cl'
  },
  {
    slug: 'pyro',
    tag: 'Pyro',
    countryCode: 'br',
    slippiConnectCodes: ['CAIO#966'],
    subregion: 'br'
  },
  {
    slug: 'eu',
    tag: 'EU?!',
    countryCode: 'br',
    slippiConnectCodes: ['CLWN#583'],
    subregion: 'br',
    sgg: ['17c48ecf']
  },
  {
    slug: 'cockdog',
    tag: 'cockdog2k',
    countryCode: 'br',
    slippiConnectCodes: ['COCK#563'],
    subregion: 'br'
  },
  {
    slug: 'deimos',
    tag: 'Deimos',
    countryCode: 'cl',
    slippiConnectCodes: ['DEIM#907'],
    subregion: 'cl'
  },
  {
    slug: 'darkside',
    tag: 'DarkSide',
    countryCode: 'cl',
    slippiConnectCodes: ['DSID#627'],
    subregion: 'cl'
  },
  {
    slug: 'gino',
    tag: 'Gino',
    countryCode: 'cl',
    slippiConnectCodes: ['ELYI#462'],
    subregion: 'cl'
  },
  {
    slug: 'escarcha',
    countryCode: 'cl',
    slippiConnectCodes: ['ESCR#315'],
    subregion: 'cl'
  },
  {
    slug: 'chuli',
    slippiConnectCodes: ['FRAN#434'],
    countryCode: 've'
  },
  {
    slug: 'gablito',
    countryCode: 'cl',
    slippiConnectCodes: ['GAB#894'],
    subregion: 'cl'
  },
  {
    slug: 'gunz',
    slippiConnectCodes: ['GNZ#143'],
    countryCode: 'ar'
  },
  {
    slug: 'godusopp',
    tag: 'GodUsopp',
    countryCode: 'br',
    slippiConnectCodes: ['GODU#315'],
    subregion: 'br'
  },
  {
    slug: 'blassy',
    tag: 'Blassy',
    countryCode: 'cl',
    slippiConnectCodes: ['HANS#348'],
    subregion: 'cl'
  },
  {
    slug: 'hendrix',
    tag: 'Hendrix BR',
    countryCode: 'br',
    slippiConnectCodes: ['HEND#168'],
    subregion: 'br'
  },
  {
    slug: 'hork',
    countryCode: 'br',
    slippiConnectCodes: ['HIGH#103'],
    subregion: 'br'
  },
  {
    slug: 'hork',
    countryCode: 'br',
    slippiConnectCodes: ['HORK#699'],
    subregion: 'br'
  },
  {
    slug: 'iguana',
    slippiConnectCodes: ['IGUANA#0'],
    countryCode: 'uy'
  },
  {
    slug: 'juan',
    countryCode: 'br',
    slippiConnectCodes: ['JUAN#576'],
    subregion: 'br'
  },
  {
    slug: 'judite',
    tag: 'Judite',
    countryCode: 'br',
    slippiConnectCodes: ['JUDI#499'],
    subregion: 'br',
    sgg: ['34c5c34c']
  },
  {
    slug: 'etulf',
    countryCode: 'cl',
    slippiConnectCodes: ['KLAO#360'],
    subregion: 'cl'
  },
  {
    slug: 'laina',
    countryCode: 'cl',
    slippiConnectCodes: ['LAIN#465'],
    subregion: 'cl'
  },
  {
    slug: 'fracoassado',
    countryCode: 'br',
    slippiConnectCodes: ['LIXO#815'],
    subregion: 'br'
  },
  {
    slug: 'lpde',
    tag: 'LP De Dados',
    countryCode: 'br',
    slippiConnectCodes: ['LPDE#396'],
    subregion: 'br',
    sgg: ['3922b2ff']
  },
  {
    slug: 'lucasmalb',
    tag: 'LucasMalb',
    countryCode: 'br',
    slippiConnectCodes: ['LUCA#807'],
    subregion: 'br'
  },
  {
    slug: 'mazu',
    slippiConnectCodes: ['MAZU#655'],
    countryCode: 'ar'
  },
  {
    slug: 'mickyor',
    slippiConnectCodes: ['MICI#573'],
    countryCode: 'bo'
  },
  {
    slug: 'mitsu',
    tag: 'Mitsu',
    countryCode: 'br',
    slippiConnectCodes: ['MITS#384'],
    subregion: 'br',
    sgg: ['22f7681f']
  },
  {
    slug: 'mokun',
    slippiConnectCodes: ['MKUN#863'],
    countryCode: 'co'
  },
  {
    slug: 'themonkeymartin',
    countryCode: 'cl',
    slippiConnectCodes: ['MONK#499'],
    subregion: 'cl'
  },
  {
    slug: 'nazo',
    tag: 'Nazo',
    countryCode: 'br',
    slippiConnectCodes: ['NAZO#168'],
    subregion: 'br'
  },
  {
    slug: 'neko',
    countryCode: 'cl',
    slippiConnectCodes: ['NEKO#690'],
    subregion: 'cl'
  },
  {
    slug: 'noiva',
    countryCode: 'cl',
    slippiConnectCodes: ['NIVA#511'],
    subregion: 'cl'
  },
  {
    slug: 'oldnova',
    tag: 'OldNova',
    slippiConnectCodes: ['OLDN#984'],
    countryCode: 'pe'
  },
  {
    slug: 'phonix',
    tag: 'Phonix Wrong',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['PHON#387'],
    sgg: ['d80c9b49']
  },
  {
    slug: '',
    countryCode: 'cl',
    slippiConnectCodes: ['PITS#872'],
    subregion: 'cl'
  },
  {
    slug: '',
    slippiConnectCodes: ['POMF#250'],
    countryCode: 'ar'
  },
  {
    slug: '',
    countryCode: 'cl',
    slippiConnectCodes: ['POXO#303'],
    subregion: 'cl'
  },
  {
    slug: '',
    countryCode: 'cl',
    slippiConnectCodes: ['PT#208'],
    subregion: 'cl'
  },
  {
    slug: '',
    countryCode: 'br',
    slippiConnectCodes: ['QUAK#657'],
    subregion: 'br'
  },
  {
    slug: '',
    countryCode: 'cl',
    slippiConnectCodes: ['RACK#607'],
    subregion: 'cl'
  },
  {
    slug: '',
    countryCode: 'cl',
    slippiConnectCodes: ['RAND#649'],
    subregion: 'cl'
  },
  {
    slug: '',
    countryCode: 'cl',
    slippiConnectCodes: ['REKT#716'],
    subregion: 'cl'
  },
  {
    slug: '',
    countryCode: 'cl',
    slippiConnectCodes: ['REM#666'],
    subregion: 'cl'
  },
  {
    slug: '',
    countryCode: 'cl',
    slippiConnectCodes: ['RULO#553'],
    subregion: 'cl'
  },
  {
    slug: '',
    countryCode: 'br',
    slippiConnectCodes: ['SASU#263'],
    subregion: 'br'
  },
  {
    slug: '',
    countryCode: 'cl',
    slippiConnectCodes: ['SENK#1'],
    subregion: 'cl'
  },
  {
    slug: '',
    countryCode: 'cl',
    slippiConnectCodes: ['SIFO#757'],
    subregion: 'cl'
  },
  {
    slug: 'kipp',
    tag: 'Kipp',
    countryCode: 'br',
    slippiConnectCodes: ['SUCK#618'],
    subregion: 'br',
    sgg: ['7bca15b4']
  },
  {
    slug: 'takkar',
    tag: 'Takkar',
    countryCode: 'br',
    slippiConnectCodes: ['TKR#747'],
    subregion: 'br',
    sgg: ['59093dae']
  },
  {
    slug: 'camaron',
    tag: 'Cam4ron',
    countryCode: 'cl',
    slippiConnectCodes: ['TOBA#232'],
    subregion: 'cl'
  },
  {
    slug: 'toxcic',
    tag: 'Toxcic',
    countryCode: 'br',
    slippiConnectCodes: ['TOXC#638'],
    subregion: 'br'
  },
  {
    slug: 'tpoz',
    tag: 'TPOZ',
    countryCode: 'cl',
    slippiConnectCodes: ['TPOZ#69'],
    subregion: 'cl'
  },
  {
    slug: 'txr',
    tag: 'TXR',
    countryCode: 'br',
    slippiConnectCodes: ['TXR#205'],
    subregion: 'br',
    sgg: ['162fd7e5']
  },
  {
    slug: 'vinsfeld',
    tag: 'Vinsfeld',
    slippiConnectCodes: ['VINS#130'],
    countryCode: 'ar'
  },
  {
    slug: 'vito638',
    countryCode: 'br',
    slippiConnectCodes: ['VITO#638'],
    subregion: 'br'
  },
  {
    slug: 'wesai',
    tag: 'Wesai',
    countryCode: 'br',
    slippiConnectCodes: ['WESI#889'],
    subregion: 'br'
  },
  {
    slug: 'zag',
    tag: 'Zag',
    countryCode: 'cl',
    slippiConnectCodes: ['ZAG#814'],
    subregion: 'cl'
  },
  {
    slug: 'kort',
    tag: 'Kort',
    countryCode: 'br',
    slippiConnectCodes: ['PAI#235', 'PAI#345'],
    subregion: 'br',
    sgg: ['b0358e51'],
  },
  {
    slug: 'drutar',
    tag: 'Drutar',
    countryCode: 'br',
    slippiConnectCodes: ['DRUT#373'],
    subregion: 'br'
  },
  {
    slug: 'consi',
    tag: 'Considera',
    countryCode: 'br',
    slippiConnectCodes: ['TRAP#195'],
    subregion: 'br',
    sgg: ['c227bc45']
  },
  {
    slug: 'dewrion',
    tag: 'Dewrion',
    countryCode: 'br',
    slippiConnectCodes: ['DEW#118'],
    subregion: 'br',
    sgg: ['f13da7f8']
  },
  {
    slug: 'fatt',
    tag: 'Fatt Williams',
    countryCode: 'br',
    slippiConnectCodes: ['FAUX#488'],
    subregion: 'br',
    sgg: ['4b914e88'],
  },
  {
    slug: 'werneck',
    tag: 'Werneck',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['WRNK#877', 'RCB#495'],
    sgg: ['b9fd55f7', 'ed042ec4']
  },
  {
    slug: 'bigmac',
    tag: 'BigMac',
    countryCode: 'br',
    slippiConnectCodes: ['BMC#363'],
    subregion: 'br',
    sgg: ['8937f481']
  },
  {
    slug: 'solid',
    tag: 'Sol!d',
    countryCode: 'uy',
    slippiConnectCodes: ['FBRO#960']
  },
  {
    slug: 'nidiox',
    tag: 'nidiox',
    countryCode: 'cl',
    slippiConnectCodes: ['CHPA#675'],
    subregion: 'cl'
  },
  {
    slug: 'zeeka',
    tag: 'Zeeka',
    countryCode: 'uy',
    slippiConnectCodes: ['ZEKA#232']
  },
  {
    slug: 'capy',
    tag: 'Capyvarado',
    countryCode: 'br',
    slippiConnectCodes: ['CANT#698'],
    subregion: 'br',
    sgg: ['27346b54']
  },
  {
    slug: 'duals',
    tag: 'Dualscars',
    countryCode: 'cl',
    slippiConnectCodes: ['DUAL#322'],
    subregion: 'cl'
  },
  {
    slug: 'tau',
    tag: 'TAU',
    countryCode: 'cl',
    slippiConnectCodes: ['TAU#542'],
    subregion: 'cl'
  },
  {
    slug: 'nullus',
    tag: 'Nullus',
    countryCode: 'cl',
    slippiConnectCodes: ['FELI#609'],
    subregion: 'cl'
  },
  {
    slug: 'jab',
    tag: 'Jab',
    countryCode: 'cl',
    slippiConnectCodes: ['JAB#203', 'HERO#563'],
    subregion: 'br'
  },
  {
    slug: 'high',
    tag: 'High',
    countryCode: 'br',
    slippiConnectCodes: ['OPAA#181'],
    subregion: 'br'
  },
  {
    slug: 'levis',
    tag: 'Levis',
    countryCode: 'br',
    slippiConnectCodes: ['LEV#794'],
    subregion: 'br'
  },
  {
    slug: 'silvalfo',
    tag: 'Silvalfo',
    countryCode: 'br',
    slippiConnectCodes: ['SILV#375'],
    subregion: 'br'
  },
  {
    slug: 'pttt',
    tag: 'Patatatax',
    countryCode: 'cl',
    slippiConnectCodes: ['PTTT#603'],
    subregion: 'cl'
  },
  {
    slug: 'wanka',
    tag: 'Wanka',
    countryCode: 'br',
    slippiConnectCodes: ['WK#243', 'BBB#730'],
    subregion: 'br',
    sgg: ['34771820']
  },
  {
    slug: 'dalsu',
    tag: 'DALSU',
    countryCode: 'br',
    slippiConnectCodes: ['BARR#737'],
    subregion: 'br',
    sgg: ['bc8fff89']
  },
  {
    slug: 'ntq',
    tag: 'NTQ',
    countryCode: 'cl',
    slippiConnectCodes: ['NTQ#10'],
    subregion: 'cl'
  },
  {
    slug: 'elhell',
    tag: 'el hell',
    countryCode: 'cl',
    slippiConnectCodes: ['HELL#898'],
    subregion: 'cl'
  },
  {
    slug: 'hell-peru',
    tag: 'Hell',
    countryCode: 'pe',
    slippiConnectCodes: ['HELL#735']
  },
  {
    slug: 'dalar',
    tag: 'Dalar',
    countryCode: 'ar',
    slippiConnectCodes: ['DALA#476']
  },
  {
    slug: 'nipan',
    tag: 'Nipannn',
    countryCode: 'cl',
    slippiConnectCodes: ['RASH#781'],
    subregion: 'cl'
  },
  {
    slug: 'osaka',
    tag: 'OsakaRain',
    countryCode: 'co',
    slippiConnectCodes: ['OSAK#469']
  },
  {
    slug: 'shamo',
    tag: 'Shamo',
    countryCode: 'cl',
    slippiConnectCodes: ['CHAM#306'],
    subregion: 'cl'
  },
  {
    slug: 'am3',
    tag: 'am3',
    countryCode: 'cl',
    slippiConnectCodes: ['AME#464'],
    subregion: 'cl'
  },
  {
    slug: 'anthony1',
    tag: 'Anthony1',
    countryCode: 'cl',
    slippiConnectCodes: ['ANTH#483'],
    subregion: 'cl'
  },
  {
    slug: 'bysnow',
    tag: 'By.SnOw1',
    countryCode: 'cl',
    slippiConnectCodes: ['BISU#603'],
    subregion: 'cl'
  },
  {
    slug: 'mingu',
    tag: 'Mingu',
    countryCode: 'uy',
    slippiConnectCodes: ['MING#899']
  },
  {
    slug: 'pastheo',
    tag: 'Pastheo',
    countryCode: 'br',
    slippiConnectCodes: ['PAST#274'],
    subregion: 'br',
    sgg: ['42368772']
  },
  {
    slug: 'omega',
    tag: 'Omega',
    countryCode: 'br',
    slippiConnectCodes: ['OMEG#293'],
    subregion: 'br'
  },
  {
    slug: 'francokiwi',
    tag: 'FrancoKiwi',
    countryCode: 'uy',
    slippiConnectCodes: ['KIWI#361']
  },
  {
    slug: 'jota',
    tag: 'Jotesy',
    countryCode: 'br',
    slippiConnectCodes: ['JOTA#451'],
    subregion: 'br',
    sgg: ['bc23af58']
  },
  {
    slug: 'zekiki',
    tag: 'Zekiki',
    countryCode: 'br',
    slippiConnectCodes: ['KIKI#546'],
    subregion: 'br',
    sgg: ['c1ccf421']
  },
  {
    slug: 'ashen',
    tag: 'Ashen1',
    countryCode: 'cl',
    slippiConnectCodes: ['ASHE#169'],
    subregion: 'cl'
  },
  {
    slug: 'dnk',
    tag: 'DNK',
    countryCode: 'br',
    slippiConnectCodes: ['DNK#422'],
    subregion: 'br',
    sgg: ['b36ce01e']
  },
  {
    slug: 'ouro',
    tag: 'ourodetolo',
    countryCode: 'br',
    slippiConnectCodes: ['OURO#275'],
    subregion: 'br'
  },
  {
    slug: 'hmen',
    tag: 'HMEN',
    countryCode: 'br',
    slippiConnectCodes: ['HMEN#728'],
    subregion: 'br'
  },
  {
    slug: 'aggro',
    tag: 'aGGro',
    countryCode: 'br',
    slippiConnectCodes: ['GGR#779'],
    subregion: 'br'
  },
  {
    slug: 'nite',
    tag: 'nitegabro',
    countryCode: 'br',
    slippiConnectCodes: ['NITE#917'],
    subregion: 'br',
    sgg: ['ed907650']
  },
  {
    slug: 'bean',
    tag: 'amndrkwe',
    countryCode: 'br',
    slippiConnectCodes: ['BEAN#532'],
    subregion: 'br'
  },
  {
    slug: 'piglet',
    tag: 'pigletrng',
    countryCode: 'pe',
    slippiConnectCodes: ['PIGL#517']
  },
  {
    slug: 'poppables',
    tag: 'Poppables',
    countryCode: 'br',
    slippiConnectCodes: ['POP#0'],
    subregion: 'br'
  },
  {
    slug: 'batou',
    tag: 'batou',
    countryCode: 'cl',
    slippiConnectCodes: ['BATO#651'],
    subregion: 'cl'
  },
  {
    slug: 'klap',
    tag: 'Klap!',
    countryCode: 'cl',
    slippiConnectCodes: ['KLAP#298'],
    subregion: 'cl'
  },
  {
    slug: 'quenteb',
    tag: 'Quenteb',
    countryCode: 'br',
    slippiConnectCodes: ['QUEN#744'],
    subregion: 'br'
  },
  {
    slug: 'caranelo',
    tag: 'Gen',
    countryCode: 'br',
    slippiConnectCodes: ['GEN#134'],
    subregion: 'br'
  },
  {
    slug: 'kenj',
    countryCode: 'co',
    slippiConnectCodes: ['KENJ#707']
  },
  {
    slug: 'amalgama',
    tag: 'Amalgama',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['SANS#828']
  },
  {
    slug: 'wiseman',
    countryCode: 'co',
    slippiConnectCodes: ['WISE#903']
  },
  {
    slug: 'kidcarri',
    countryCode: 'ar',
    slippiConnectCodes: ['SLMX#739']
  },
  {
    slug: 'pfq',
    countryCode: 'ar',
    slippiConnectCodes: ['PFQ#749']
  },
  {
    slug: 'cartezsoul',
    tag: 'CartezSoul',
    countryCode: 've',
    slippiConnectCodes: ['CS#361']
  },
  {
    slug: 'cax',
    tag: 'Cax',
    countryCode: 've',
    slippiConnectCodes: ['CAX#692']
  },
  {
    slug: 'risotto',
    tag: 'Risotto',
    countryCode: 've',
    slippiConnectCodes: ['ROZO#840']
  },
  {
    slug: 'blitzkrieg',
    tag: 'Blitzkrieg',
    countryCode: 've',
    slippiConnectCodes: ['BLTZ#973']
  },
  {
    slug: 'rin',
    tag: 'Rin$',
    countryCode: 've',
    slippiConnectCodes: ['RIN#754']
  },
  {
    slug: 'yuky',
    tag: 'Yuky-Pak',
    countryCode: 've',
    slippiConnectCodes: ['YUKY#168']
  },
  {
    slug: 'neo',
    tag: 'NEO!',
    countryCode: 've',
    slippiConnectCodes: ['NEO#396']
  },
  {
    slug: 'luichox',
    tag: 'LuichoX',
    countryCode: 've',
    slippiConnectCodes: ['LX#386']
  },
  {
    slug: 'watermelown',
    tag: 'Watermelown',
    countryCode: 've',
    slippiConnectCodes: ['WATE#276']
  },
  {
    slug: 'apselito',
    tag: 'apselito',
    countryCode: 've',
    slippiConnectCodes: ['APSE#888']
  },
  {
    slug: 'bbc',
    tag: 'BBC',
    countryCode: 've',
    slippiConnectCodes: ['BRIC#920']
  },
  {
    slug: 'darkaro',
    tag: 'DarKaRo',
    countryCode: 've',
    slippiConnectCodes: ['DARKAR#0', 'DRKA#359', 'DUZY#685']
  },
  {
    slug: 'marciano',
    tag: 'Marciano',
    countryCode: 've',
    slippiConnectCodes: []
  },
  {
    slug: 'palo',
    tag: 'Palo',
    countryCode: 've',
    slippiConnectCodes: ['PALO#142']
  },
  {
    slug: 'valgarite',
    tag: 'Valgarite',
    countryCode: 've',
    slippiConnectCodes: ['VALG#554']
  },
  {
    slug: '911',
    tag: '911',
    countryCode: 've',
    slippiConnectCodes: ['9#11']
  },
  {
    slug: 'puzka',
    tag: 'Puzka',
    countryCode: 've',
    slippiConnectCodes: ['PUZK#614']
  },
  {
    slug: 'xpelox',
    tag: 'X-Pelox',
    countryCode: 've',
    slippiConnectCodes: []
  },
  {
    slug: 'dareot',
    tag: 'Dareot',
    countryCode: 've',
    slippiConnectCodes: []
  },
  {
    slug: 'kariark',
    tag: 'Kariark',
    countryCode: 've',
    slippiConnectCodes: ['INIT#947']
  },
  {
    slug: 'jerich',
    tag: 'Jerich',
    countryCode: 've',
    slippiConnectCodes: []
  },
  {
    slug: 'johnconnor',
    tag: 'JohnConnor',
    countryCode: 've',
    slippiConnectCodes: []
  },
  {
    slug: 'pancakes',
    tag: 'Pancakes',
    countryCode: 've',
    slippiConnectCodes: []
  },
  {
    slug: 'vacon',
    tag: 'Vacon',
    countryCode: 've',
    slippiConnectCodes: []
  },
  {
    slug: 'bongofono',
    tag: 'Bongofono',
    countryCode: 've',
    slippiConnectCodes: []
  },
  {
    slug: 'foquito',
    tag: 'Foquito',
    countryCode: 've',
    slippiConnectCodes: []
  },
  {
    slug: 'kike',
    tag: 'KIKE!',
    countryCode: 've',
    slippiConnectCodes: []
  },
  {
    slug: 'dimenz',
    tag: 'DiMenZ',
    countryCode: 've',
    slippiConnectCodes: []
  },
  {
    slug: 'ssaunter',
    tag: 'Ssaunter',
    countryCode: 've',
    slippiConnectCodes: []
  },
  {
    slug: 'toxucroc',
    tag: 'Toxucroc',
    countryCode: 've',
    slippiConnectCodes: ['TOXU#520']
  },
  {
    slug: 'shantaeld',
    tag: 'ShantaeLD',
    countryCode: 've',
    slippiConnectCodes: []
  },
  {
    slug: 'h4te',
    tag: 'H4te',
    countryCode: 've',
    slippiConnectCodes: []
  },
  {
    slug: 'farmahorro',
    tag: 'farmahorro',
    countryCode: 've',
    slippiConnectCodes: ['RAFA#568']
  },
  {
    slug: 'elec',
    tag: 'Elec',
    countryCode: 've',
    slippiConnectCodes: []
  },
  {
    slug: 'kimo',
    tag: 'Kimo',
    countryCode: 've',
    slippiConnectCodes: ['KIMO#438']
  },
  {
    slug: 'rojas',
    tag: 'Rojas',
    countryCode: 've',
    slippiConnectCodes: []
  },
  {
    slug: 'garu',
    tag: 'GARU',
    countryCode: 've',
    slippiConnectCodes: []
  },
  {
    slug: 'spade',
    tag: 'Spade',
    countryCode: 've',
    slippiConnectCodes: []
  },
  {
    slug: 'masturbin',
    tag: 'Masturbín',
    countryCode: 've',
    slippiConnectCodes: []
  },
  {
    slug: 'lum1',
    tag: 'Lum1',
    countryCode: 've',
    slippiConnectCodes: []
  },
  {
    slug: 'flye',
    tag: 'Flye',
    countryCode: 've',
    slippiConnectCodes: ['FLYE#167']
  },
  {
    slug: 'heavy',
    tag: 'Heavy',
    countryCode: 've',
    slippiConnectCodes: []
  },
  {
    slug: 'poe',
    tag: 'Poe',
    countryCode: 've',
    slippiConnectCodes: []
  },
  {
    slug: 'bmob',
    tag: 'Bmob',
    countryCode: 've',
    slippiConnectCodes: []
  },
  {
    slug: 'tashi',
    tag: 'Tashi',
    countryCode: 've',
    slippiConnectCodes: []
  },
  {
    slug: 'velvet',
    tag: 'Velvet',
    countryCode: 've',
    slippiConnectCodes: []
  },
  {
    slug: 'supervagon420',
    tag: 'SuperVagon420',
    countryCode: 've',
    slippiConnectCodes: []
  },
  {
    slug: 'axaghor',
    tag: 'Axaghor',
    countryCode: 've',
    slippiConnectCodes: ['AXA#481']
  },

  {
    slug: 'smeag',
    tag: 'Smeag',
    countryCode: 'uy',
    slippiConnectCodes: ['SMG#385']
  },
  {
    slug: 'sak',
    tag: 'Sak',
    countryCode: 'ar',
    slippiConnectCodes: ['SAK#721']
  },
  {
    slug: 'arturo',
    tag: 'Arturo',
    countryCode: 've',
    slippiConnectCodes: ['AXEL#784']
  },
  {
    slug: 'brownwarp',
    tag: 'Brown Warp',
    countryCode: 've',
    slippiConnectCodes: ['PLOK#448']
  },
  {
    slug: 'morales',
    tag: 'Morales',
    countryCode: 'ec',
    slippiConnectCodes: ['POLO#324']
  },
  {
    slug: 'blackstar',
    tag: 'Blackstar',
    countryCode: 'ec',
    slippiConnectCodes: ['BLAC#850']
  },
  {
    slug: 'fofo',
    tag: 'Fofo',
    countryCode: 'br',
    slippiConnectCodes: ['FOFO#907'],
    subregion: 'br',
    sgg: ['3e1e7cad']
  },
  {
    slug: 'trajefino',
    tag: 'trajefino',
    countryCode: 'br',
    slippiConnectCodes: ['TRJF#247'],
    subregion: 'br',
    sgg: ['961d6eae']
  },
  {
    slug: 'shojam',
    tag: 'shojam',
    countryCode: 'co',
    slippiConnectCodes: ['SHOJAM#0', 'SHO#520']
  },
  {
    slug: 'ked',
    tag: 'K3D',
    countryCode: 'cl',
    slippiConnectCodes: ['KED#787'],
    subregion: 'cl'
  },
  {
    slug: 'arth',
    tag: 'Arth14',
    countryCode: 'br',
    slippiConnectCodes: ['ARTH#411'],
    subregion: 'br',
    sgg: ['d7571ac2']
  },
  {
    slug: 'daft',
    tag: 'dAFT',
    countryCode: 've',
    slippiConnectCodes: ['DAFT#809']
  },
  {
    slug: 'sopapus',
    tag: 'Sopapus',
    countryCode: 'cl',
    slippiConnectCodes: ['SPPS#476'],
    subregion: 'cl'
  },
  {
    slug: 'bansy',
    tag: 'Bansy',
    countryCode: 'cl',
    slippiConnectCodes: ['WOF#331'],
    subregion: 'cl'
  },
  {
    slug: 'fortune',
    tag: 'Fortune777',
    countryCode: 'br',
    slippiConnectCodes: ['FORT#168'],
    subregion: 'br'
  },
  {
    slug: 'corazza',
    tag: 'Corazza',
    countryCode: 'br',
    slippiConnectCodes: ['CORZ#923'],
    subregion: 'br',
    sgg: ['b68ffd5c']
  },
  {
    slug: 'donviton',
    tag: 'Don Viton',
    countryCode: 'br',
    slippiConnectCodes: ['DON#305'],
    subregion: 'br'
  },
  {
    slug: 'rix',
    tag: 'Rix',
    countryCode: 'br',
    slippiConnectCodes: ['RIX#617'],
    subregion: 'br'
  },
  {
    slug: 'yuri',
    tag: 'yuri',
    countryCode: 'br',
    slippiConnectCodes: ['YURI#265'],
    subregion: 'br'
  },
  {
    slug: 'haseki',
    tag: 'HasekiX',
    countryCode: 'uy',
    slippiConnectCodes: ['HASE#160']
  },
  {
    slug: 'panda',
    tag: 'ChileanPanda',
    countryCode: 'cl',
    slippiConnectCodes: ['PNDA#140'],
    subregion: 'cl'
  },
  {
    slug: 'guaripolo',
    tag: 'Guaripolo',
    countryCode: 'cl',
    slippiConnectCodes: ['WARI#784'],
    subregion: 'cl'
  },
  {
    slug: 'fauro',
    tag: 'Fauro',
    countryCode: 'br',
    slippiConnectCodes: ['FAUR#738'],
    subregion: 'br',
    sgg: ['9f793d65']
  },
  {
    slug: 'cann',
    tag: 'cannon',
    countryCode: 'br',
    slippiConnectCodes: ['CANN#206'],
    subregion: 'br'
  },
  {
    slug: 'zsaber',
    tag: 'zsabermaverick',
    countryCode: 'br',
    slippiConnectCodes: ['ZSAB#649'],
    subregion: 'br'
  },
  {
    slug: 'zart',
    tag: 'zart',
    countryCode: 'co',
    slippiConnectCodes: ['ZART#545']
  },
  {
    slug: 'tgj',
    tag: 'TheGreatJerk',
    countryCode: 'ar',
    slippiConnectCodes: ['TGJ#635', 'TGJ#484']
  },
  {
    slug: 'miguelito',
    tag: 'Miguelito',
    countryCode: 'br',
    slippiConnectCodes: ['MIG#237'],
    subregion: 'br',
    sgg: ['1e51071d']
  },
  {
    slug: 'pedrodevdd',
    tag: 'Pedro de Verdade',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['PDR#908', 'VDD#200'],
    sgg: ['4f55fb42']
  },
  {
    slug: 'nucofold',
    countryCode: 'cl',
    slippiConnectCodes: ['NUCO#544'],
    subregion: 'cl'
  },
  {
    slug: 'dezanig',
    tag: 'Dezanig',
    countryCode: 'br',
    slippiConnectCodes: ['DEZA#140'],
    subregion: 'br'
  },
  {
    slug: 'rush',
    tag: 'rush',
    countryCode: 'ar',
    slippiConnectCodes: ['RUSH#859']
  },
  {
    slug: 'srpaz',
    tag: 'SrPaz',
    countryCode: 'uy',
    slippiConnectCodes: ['SRPZ#254']
  },
  {
    slug: 'mogartio',
    tag: 'Mogartio',
    countryCode: 'ar',
    slippiConnectCodes: ['MOGA#895']
  },
  {
    slug: 'foxfire',
    tag: 'FoxFire22',
    countryCode: 'ar',
    slippiConnectCodes: ['FOX#637']
  },
  {
    slug: 'dentar',
    tag: 'DentaR',
    countryCode: 'cl',
    slippiConnectCodes: ['DENT#988'],
    subregion: 'cl'
  },
  {
    slug: 'inbano',
    tag: 'Inbano',
    countryCode: 'cl',
    slippiConnectCodes: ['BANO#778'],
    subregion: 'cl'
  },
  {
    slug: 'cochiof',
    tag: 'Cochiof',
    countryCode: 'cl',
    slippiConnectCodes: ['COCH#245'],
    subregion: 'cl'
  },
  {
    slug: 'stonks-co',
    countryCode: 'co',
    slippiConnectCodes: ['ACET#967']
  },
  {
    slug: 'mute',
    countryCode: 'pe',
    slippiConnectCodes: ['MTCZ#289']
  },
  {
    slug: 'matrix',
    countryCode: 've',
    slippiConnectCodes: ['MATR#856']
  },
  {
    slug: 'minichief',
    countryCode: 'pe',
    slippiConnectCodes: ['MNCH#464']
  },
  {
    slug: 'die',
    countryCode: 'pe',
    slippiConnectCodes: ['DIE#222']
  },
  {
    slug: 'chapy',
    countryCode: 'ec',
    slippiConnectCodes: ['CHAP#370']
  },
  {
    slug: 'afbauer',
    countryCode: 'pe',
    slippiConnectCodes: ['AFBA#702']
  },
  {
    slug: 'dobby',
    countryCode: 'pe',
    slippiConnectCodes: ['DOBZ#870']
  },
  {
    slug: 'karmour',
    countryCode: 'us',
    slippiConnectCodes: ['AOI#260']
  },
  {
    slug: 'iblast',
    countryCode: 'pe',
    slippiConnectCodes: ['BLST#849']
  },
  {
    slug: 'lupini',
    tag: 'Lupini',
    countryCode: 'us',
    subregion: 'br',
    slippiConnectCodes: ['LUPI#915'],
    sgg: ['f55023d8']
  },
  {
    slug: 'neon',
    countryCode: 'pe',
    slippiConnectCodes: ['NEON#519']
  },
  {
    slug: 'coji',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['COJI#593']
  },
  {
    slug: 'wachimingo',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['WACH#163']
  },
  {
    slug: 'andro',
    countryCode: 'ec',
    slippiConnectCodes: ['ANDR#473']
  },
  {
    slug: 'tiwok',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['TWK#630']
  },
  {
    slug: 'xbruno',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['BRU#729']
  },
  {
    slug: 'coit',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['COIT#112']
  },
  {
    slug: 'noto',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['SSBM#603']
  },
  {
    slug: 'dertolo',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['DERT#316']
  },
  {
    slug: 'mamuro',
    countryCode: 'pe',
    slippiConnectCodes: ['MAMR#867']
  },
  {
    slug: 'snf',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['SNF#790']
  },
  {
    slug: 'dante',
    tag: 'DanT3',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['DAN#630'],
    sgg: ['3abd82af']
  },
  {
    slug: 'kane',
    tag: 'Kane',
    countryCode: 'co',
    slippiConnectCodes: ['KANE#661'],
  },
  {
    slug: 'birdie',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['USER#706']
  },
  {
    slug: 'gnes',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['GNES#105'],
    sgg: ['48756749']
  },
  {
    slug: 'maca',
    tag: 'Macachita',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['MACA#167'],
    sgg: ['18963e5d']
  },
  {
    slug: 'buttelli',
    tag: 'Buttelli',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['BUTT#771'],
    sgg: ['229262a3']
  },
  {
    slug: 'gio',
    tag: 'Gio',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['GIO#420'],
    sgg: ['2d16bc33']
  },
  {
    slug: 'kiw',
    tag: 'Kiw',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['KIW#230'],
    sgg: ['a338d50f']
  },
  {
    slug: 'kds',
    countryCode: 'co',
    slippiConnectCodes: ['KDS#155']
  },
  {
    slug: 'guiler',
    tag: 'Guiler',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['GUIL#506'],
    sgg: ['82a10d6e']
  },
  {
    slug: 'pomini',
    tag: 'Pomini',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['POMI#963'],
    sgg: ['714cea55']
  },
  {
    slug: 'saraiva',
    tag: 'Aceblind',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['ACEB#213'],
    sgg: ['0e9048bd', '33f19991']
  },
  {
    slug: 'tiasilvia',
    tag: 'Tia Silvia',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['TIA#322'],
    sgg: ['a83cf36f']
  },
  {
    slug: 'paulo',
    tag: ':Paulo',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['FIT#965'],
    sgg: ['bbf1d61d']
  },
  {
    slug: 'dede',
    tag: 'dede',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['DEDE#443'],
    sgg: ['c46045b8']
  },
  {
    slug: 'drunk',
    tag: 'Drunk',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['DRNK#430'],
    sgg: ['6da45a19']
  },
  {
    slug: 'ibdr',
    tag: 'IBDR',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['RACC#948'],
    sgg: ['56ef33af']
  },
  {
    slug: 'zico',
    tag: 'Z1C0',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['ZICO#309'],
    sgg: ['fae9a3fe']
  },
  {
    slug: 'xandros',
    tag: 'Xandros',
    countryCode: 'us',
    subregion: 'br',
    slippiConnectCodes: ['XND#426']
  },
  {
    slug: 'kuromi',
    tag: 'kuromi',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['MEL#683']
  },
  {
    slug: 'rica',
    tag: 'Rica',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['HORI#353']
  },
  {
    slug: 'ghosty',
    tag: 'gh0sty',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['GHOS#533']
  },
  {
    slug: 'lrvloob',
    tag: 'lrvloob',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['LRVL#549']
  },
  {
    slug: 'eduzin',
    tag: 'Eduzin_Aa',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['EDU#661']
  },
  {
    slug: 'venter',
    tag: 'Venter',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['VENT#337']
  },
  {
    slug: 'bloxydoom',
    tag: 'bloxydoom',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['DOOM#494']
  },
  {
    slug: 'kanera',
    tag: 'Kanera',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['KZH#460']
  },
  {
    slug: 'pasta',
    tag: 'PastaDestroyer',
    countryCode: 'ar',
    slippiConnectCodes: ['ALFA#502']
  },
  {
    slug: 'fransen',
    tag: 'Fran',
    countryCode: 'ar',
    slippiConnectCodes: ['FRAN#599']
  },
  {
    slug: 'domz',
    tag: 'DooM',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['DOMZ#361']
  },
  {
    slug: 'patopassoca',
    tag: 'Titi',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['PATO#292']
  },
  {
    slug: 'yomepiru',
    tag: 'Yome',
    countryCode: 'pe',
    slippiConnectCodes: ['YOME#483']
  },
  {
    slug: 'kiki',
    tag: 'Kiki',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: []
  },
  {
    slug: 'edu',
    tag: 'Edu',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['EDUT#808']
  },
  {
    slug: 'pie',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['PIE#167']
  },
  {
    slug: 'louis',
    tag: 'Louis_SH',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['LVIS#562']
  },
  {
    slug: 'hell',
    tag: 'Hell',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['HELL#141']
  },
  {
    slug: 'melonnii',
    tag: 'MeLonnii',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['BEEG#830']
  },
  {
    slug: 'chif',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['CHIF#296']
  },
  {
    slug: 'zinok',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['ZNK#778', 'ZINO#196']
  },
  {
    slug: 'smurf-zoio',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['ZOIO#377']
  },
  {
    slug: 'animalespacial',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['FUR#643']
  },
  {
    slug: 'tiosunga',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['TSGA#485']
  },
  {
    slug: 'kydb',
    tag: 'KYDB',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['KYDB#804'],
    sgg: ['09ef8d1f']
  },
  {
    slug: 'karu',
    tag: 'Karu',
    countryCode: 'pe',
    slippiConnectCodes: ['KARU#0']
  },
  {
    slug: 'ehro',
    tag: 'Ehro',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['EHRO#617'],
    sgg: ['08ad0783']
  },
  {
    slug: 'arix',
    tag: 'soyarix',
    countryCode: 'ar',
    slippiConnectCodes: ['ARIX#813']
  },
  {
    slug: 'liuk',
    tag: 'LiuK',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['LIUK#283']
  },
  {
    slug: 'elfun',
    tag: 'ElFun',
    countryCode: 'ar',
    slippiConnectCodes: ['FUNM#864']
  },
  {
    slug: 'mik',
    tag: 'mik',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['MIKN#731'],
    sgg: ['ff6096ef']
  },
  {
    slug: 'kowot',
    tag: 'KOWOT',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['KOWO#775'],
    sgg: ['d0de2fe4']
  },
  {
    slug: 'phoca',
    tag: 'Phoca',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['PHOC#???'],
    sgg: ['10417ffa']
  },
  {
    slug: 'mafe',
    tag: 'Mafe2233',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['MAFE#663'],
    sgg: ['8af878fd']
  },
  {
    slug: 'joker',
    tag: 'Jokerinno',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['JOKR#???'],
    sgg: ['b359efe3']
  },
  {
    slug: 'guilleroa',
    tag: 'GuilleRoA',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['GROA#706']
  },
  {
    slug: 'indio',
    tag: 'Indiomutis',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['INDI#334']
  },
  {
    slug: 'notfede',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['NOTF#452']
  },
  {
    slug: 'clowder',
    tag: 'Clowder',
    countryCode: 'ar',
    slippiConnectCodes: ['TUPI#140', 'LOVE#323'],
  },
  {
    slug: 'pumm',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['BLIP#762'],
  },
  {
    slug: 'dannyssb',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['DSSB#658'],
  },
  {
    slug: 'palfmito',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['PALF#606'],
  },
  {
    slug: 'ccj',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['CCJ#802'],
  },
  {
    slug: 'goginha',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['GOGI#728'],
  },
  {
    slug: 'kungfukenny',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['JCAL#928'],
  },
  {
    slug: 'julian',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['NOA#597'],
  },
  {
    slug: 'gramamolhada',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['GRMA#749'],
  },
  {
    slug: 'icaro',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['ICAR#547'],
  },
  {
    slug: 'mapitaboi',
    countryCode: 'cl',
    subregion: 'cl',
    slippiConnectCodes: ['ZZ#737'],
  },
  {
    slug: 'foggy',
    tag: 'FoggyBR',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['JGHF#489'],
  },
  {
    slug: 'noir',
    countryCode: 'co',
    slippiConnectCodes: ['NOIR#214'],
  },
  {
    slug: 'genocyber',
    countryCode: 'ar',
    slippiConnectCodes: ['KOFP#486'],
  },
  {
    slug: 'guisante',
    countryCode: 'ar',
    slippiConnectCodes: ['GUIS#541'],
  },
  {
    slug: 'cucayo',
    countryCode: 'co',
    slippiConnectCodes: ['CAYO#420'],
  },
  {
    slug: 'bmo',
    countryCode: 'ar',
    slippiConnectCodes: ['BRUF#547'],
  },
  {
    slug: 'levedura',
    tag: 'Levedura',
    countryCode: 'br',
    subregion: 'br',
    slippiConnectCodes: ['LEVE#954']
  },
];
