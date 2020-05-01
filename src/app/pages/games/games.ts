export interface GamesDto {
  id?: number;
  name?: string;
  description?: string;
  authors?: AuthorDto[];
  gameplay?: Gameplay;
  purpose?: Purpose[];
  scope?: Scope;
  platform?: AllPlatform[];
  category?: CategoryDto;
  audience?: Audience[];
  img?: string;
  pegi?: Pegi;
  pegiDescriptors?: PegiDescriptor[];
}

export enum Purpose {
  DataExchange = 'Data Exchange',
  Training = 'Training',
  MessageBroadcasting = 'Educative Message Broadcasting'
}

export interface CategoryDto {
  actionAdventure?: ActionAdventure[];
  actionGames?: ActionGames[];
  adventure?: Adventure[];
  idle?: Idle[];
  puzzle?: Puzzle[];
  rolePlaying?: RolePlaying[];
  simulation?: Simulation[];
  sports?: Sports[];
  strategy?: Strategy[];
}

export interface AuthorDto {
  id?: number;
  gameId?: number;
  fullName?: string;
}

export enum PegiDescriptor {
  Violence = 'Violence',
  BadLanguage = 'Bad Language',
  Fear = 'Fear',
  Gambling = 'Gambling',
  Sex = 'Sex',
  Drugs = 'Drugs',
  Discrimination = 'Discrimination',
  Online = 'Online',
  InGamePurchases = 'In Game Purchases'
}

export enum Pegi {
  PEGi3,
  PEGi7,
  PEGi12,
  PEGi16,
  PEGi18,
}

export enum Gameplay {
  GameBased = 'Game Based',
  PlayBased = 'Play Based'
}

export enum ActionAdventure {
  SurvivalHorror = 'SurvivalHorror',
  Metroidvania = 'Metroidvania'
}

export enum ActionGames {
  Platformer = 'Platformer',
  Shooter = 'Shooter',
  Fighting = 'Fighting',
  BeatEmUp = 'Beat Em Up',
  Stealth = 'Stealth',
  Survival = 'Survival',
  Rhythm = 'Rhythm'
}

export enum Adventure {
  TextAdventures = 'Text Adventures',
  GraphicAdventures = 'Graphic Adventures',
  VisualNovels = 'Visual Novels',
  InteractiveMovie = 'Interactive Movie',
  RealTime3D = 'Real Time 3D',
}

export enum Audience {
  Band1 = '0 to 3  years old',
  Band2 = '3 to 7 years old',
  Band3 = '8 to 11 years old',
  Band4 = '12 to 16 years old',
  Band5 = '17 to 25 years old',
  Band6 = '25 to 35 years old',
  Band7 = '35 to 60 years old',
  Band8 = 'below 60 years old',
  GeneralPublic = 'General Public',
  Professionals = 'Professionals',
  Students = 'Students'
}

export enum Idle {
  Idle = 'Idle',
  Casual = 'Casual',
  Party = 'Party',
  Programming = 'Programming',
  Board = 'Board',
  MassiveMultiplayerOnline = 'Massive Multiplayer Online',
  Advergame = 'Advergame',
  Art = 'Art',
  Educational = 'Educational',
  Exergame = 'Exergame'
}

export enum Platform {
  Physical = 'Physical',
  Virtual = 'Virtual'
}

export enum Puzzle {
  Logic = 'Logic',
  Trivia = 'Trivia'
}

export enum RolePlaying {
  ActionRPG = 'Action RPG',
  MMORPG = 'MMORPG',
  Rouguelikes = 'Rouguelikes',
  TacticalRPG = 'Tactical RPG',
  SandboxRPG = 'Sandbox RPG',
  FirstPersonPartyBasedRPG = 'First Person Party Based RPG'
}

export enum Scope {
  StateGovernment = 'State Government',
  MilitaryDefense = 'Military Defense',
  Healthcare = 'Healthcare',
  Education = 'Education',
  Corporate = 'Corporate',
  Religious = 'Religious',
  CultureArt = 'Culture Art',
  Ecology = 'Ecology',
  Politics = 'Politics',
  Humanitarian = 'Humanitarian',
  Advertising = 'Advertising',
  ScientificResearch = 'Scientific Research'
}

export enum Simulation {
  ConstructionManagementSimulation = 'Construction Management Simulation',
  LifeSimulation = 'Life Simulation',
  VehicleSimulation = 'Vehicle Simulation',
}

export enum Sports {
  Racing = 'Racing',
  TeamSports = 'Team Sports',
  Competitive = 'Competitive',
  SportsBasedFighting = 'Sports Based Fighting'
}

export enum Strategy {
  FourX = 'FourX',
  Artillery = 'Artillery',
  RealTimeStrategy = 'Real Time Strategy',
  MultiplayerOnlineBattleArena = 'Multiplayer Online Battle Arena',
  TowerDefense = 'Tower Defense',
  TurnBasedStrategy = 'Turn Based Strategy',
  TurnBasedTactics = 'Turn Based Tactics',
  Wargame = 'Wargame',
  GrandStrategyWargame = 'Grand Strategy Wargame'
}

export enum AllPlatform {
  _3DO = '3DO',
  AcornElectron = 'Acorn Electron',
  AdvisionHomeArcade = 'Advision Home Arcade',
  Alice = 'Alice',
  Amiga = 'Amiga',
  AmigaCD32 = 'Amiga CD32',
  AmstradCPC = 'Amstrad CPC',
  AmstradGX4000 = 'Amstrad GX4000',
  AppleII = 'Apple II',
  Arcade = 'Arcade',
  ArmorAttackTank = 'Armor Attack / Tank',
  ArmorBattle = 'Armor Battle',
  Atari2600 = 'Atari 2600',
  Atari400 = 'Atari 400',
  Atari5200 = 'Atari 5200',
  Atari7800 = 'Atari 7800',
  Atari800 = 'Atari 800',
  AtariCosmos = 'Atari Cosmos',
  AtariJaguar = 'Atari Jaguar',
  AtariST = 'Atari ST',
  AtariXL = 'Atari XL',
  AutoRace = 'Auto Race',
  Autre = 'Autre',
  Baseball = 'Baseball',
  Basketball = 'Basketball',
  Basketball2 = 'Basketball 2',
  BBCMicro = 'BBC Micro',
  BigTrak = 'Big Trak',
  BrickGame9999in1 = 'Brick Game 9999 in 1',
  Browser = 'Browser',
  BrowserFlash = 'Browser (Flash)',
  BrowserHTML5 = 'Browser (HTML5)',
  BrowserJava = 'Browser (Java)',
  BrowserUnity = 'Browser (Unity)',
  CDi = 'CD-i',
  CDTV = 'CDTV',
  ChannelF = 'Channel F',
  ColecoTelstarArcadeGameSystem = 'Coleco Telstar Arcade Game System',
  ColecoVision = 'ColecoVision',
  Commodore128 = 'Commodore 128',
  Commodore16 = 'Commodore 16',
  Commodore64 = 'Commodore 64',
  CommodorePET = 'Commodore PET',
  CommodoreVic20 = 'Commodore Vic 20',
  ComputerBackgammon = 'Computer Backgammon',
  DECGT40 = 'DEC GT40',
  DingooA320 = 'Dingoo A320',
  Dragon3264 = 'Dragon 32/64',
  Dreamcast = 'Dreamcast',
  EDSACElectronicDelayStorageAutomaticCalculator = 'EDSAC (Electronic Delay Storage Automatic Calculator)',
  FMTowns = 'FM Towns',
  FMTownsMarty = 'FM Towns Marty',
  FM7 = 'FM-7',
  GameWatch = 'Game & Watch',
  GameBoyMicro = 'Game Boy Micro',
  GamePark32GP32 = 'Game Park 32 (GP32)',
  GameWaveFamilyEntertainmentSystem = 'Game Wave Family Entertainment System',
  Gamecom = 'Game.com',
  GameboyGB = 'Gameboy (GB)',
  GameBoyAdvanceGBA = 'GameBoy Advance (GBA)',
  GameBoyColorGBC = 'GameBoy Color (GBC)',
  GameCubeNGC = 'GameCube (NGC)',
  GameGearGG = 'GameGear (GG)',
  GEDAGoodyearElectronicDifferentialAnalyzer = 'GEDA (Goodyear Electronic Differential Analyzer)',
  GenesisMegadrive = 'Genesis (Megadrive)',
  Gizmondo = 'Gizmondo',
  GP2XWiz = 'GP2XWiz',
  Intellivision = 'Intellivision',
  iPad = 'iPad',
  iPhoneiPodTouch = 'iPhone / iPod Touch',
  iPodClassic = 'iPod Classic',
  Leapster = 'Leapster',
  LeapsterTV = 'LeapsterTV',
  Lynx = 'Lynx',
  Macintosh = 'Macintosh',
  MagnavoxOdyssey = 'Magnavox Odyssey',
  MagnavoxOdyssey2Videopac = 'Magnavox Odyssey² (Videopac)',
  Mega10000 = 'Mega 10000',
  MegaCDSegaCD = 'Mega-CD / Sega CD',
  MegaBoy = 'MegaBoy',
  Microvision = 'Microvision',
  MissileAttack = 'Missile Attack',
  MO5MO6 = 'MO5 / MO6',
  Mobile = 'Mobile',
  MobileAndroid = 'Mobile (Android)',
  MobileBlackBerry = 'Mobile (BlackBerry)',
  MobileBREW = 'Mobile (BREW)',
  MobileeXeN = 'Mobile (eXeN)',
  MobileFlashLite = 'Mobile (Flash Lite)',
  MobileJavaME = 'Mobile (Java ME)',
  MobileMophun = 'Mobile (Mophun)',
  MobileSymbianOS = 'Mobile (Symbian OS)',
  MobileWindowsMobile = 'Mobile (Windows Mobile)',
  MobileWindowsPhone = 'Mobile (Windows Phone)',
  MSX = 'MSX',
  MTX = 'MTX',
  NGage = 'N-Gage',
  NECPC8801 = 'NEC PC-8801',
  NECPC9801 = 'NEC PC-9801',
  NeoGeoPocket = 'Neo Geo Pocket',
  NeoGeo = 'Neo-Geo',
  NESFamicom = 'NES (Famicom)',
  Nimrod = 'Nimrod',
  Nintendo3DS = 'Nintendo 3DS',
  Nintendo64N64 = 'Nintendo 64 (N64)',
  NintendoDS = 'Nintendo DS',
  NVDIAShield = 'NVDIA Shield',
  OculusRift = 'Oculus Rift',
  Odyssey200 = 'Odyssey 200',
  Ordiexpert = 'Ordi expert',
  Oric1 = 'Oric 1',
  OricAtmos = 'Oric Atmos',
  Ouya = 'Ouya',
  PalmOS = 'Palm (OS)',
  PCDos = 'PC (Dos)',
  PCLinux = 'PC (Linux)',
  PCWindows = 'PC (Windows)',
  PCEngineTurboGrafx16 = 'PC-Engine / TurboGrafx-16',
  PCFX = 'PC-FX',
  PDP1 = 'PDP-1',
  PDP10 = 'PDP-10',
  PDP8 = 'PDP-8',
  Pippin = 'Pippin',
  PlaystationPSX = 'Playstation (PSX)',
  PlayStation2PS2 = 'PlayStation 2 (PS2)',
  Playstation3PS3 = 'Playstation 3 (PS3)',
  Playstation4PS4 = 'Playstation 4 (PS4)',
  PlayStationPortablePSP = 'PlayStation Portable (PSP)',
  PlaystationVita = 'Playstation Vita',
  Retron5 = 'Retron 5',
  SebTelescore750751752 = 'Seb Telescore 750 / 751 / 752',
  Sega32X = 'Sega 32X',
  SegaMasterSystem = 'Sega Master System',
  SegaPico = 'Sega Pico',
  SegaSaturn = 'Sega Saturn',
  SG1000 = 'SG-1000',
  SharpX68000 = 'Sharp X68000',
  Spectravideo = 'Spectravideo',
  Steam = 'Steam',
  SteamMachine = 'Steam Machine',
  SuperAcan = 'Super A\'can',
  SuperNintendoSNES = 'Super Nintendo (SNES)',
  TabletAndroid = 'Tablet (Android)',
  TabletWindows = 'Tablet (Windows)',
  Tamagotchi = 'Tamagotchi',
  TheLogoTurtle = 'The Logo Turtle',
  TI994A = 'TI-99/4A',
  TO7TO8TO9 = 'TO7 / TO8 / TO9',
  TRS80 = 'TRS-80',
  TRS80ColorComputer = 'TRS-80 Color Computer',
  TurboGrafxCDTurboCD = 'TurboGrafx CD (Turbo CD)',
  TX0 = 'TX-0',
  UNIVACIUNIVersalAutomaticComputerI = 'UNIVAC I (UNIVersal Automatic Computer I)',
  VSmile = 'V.Smile',
  VSmilePocketCyberPocket = 'V.Smile Pocket / Cyber Pocket',
  Vectrex = 'Vectrex',
  VG5000 = 'VG 5000',
  VideoSpielTG621 = 'Video Spiel TG-621',
  VirtualBoy = 'Virtual Boy',
  Wii = 'Wii',
  WiiU = 'Wii U',
  WonderSwanWS = 'WonderSwan (WS)',
  WonderSwanColor = 'WonderSwan Color',
  Xbox = 'Xbox',
  Xbox360X360 = 'Xbox 360 (X360)',
  XboxOne = 'Xbox One',
  XerosAlto = 'Xeros Alto',
  Zeebo = 'Zeebo',
  Zodiac = 'Zodiac',
  ZXSpectrum = 'ZX Spectrum',
  ZX81 = 'ZX81',

}
