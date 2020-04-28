export interface GamesDto {
  id?: number;
  name?: string;
  description?: string;
  authors?: AuthorDto[];
  gameplay?: Gameplay;
  purpose?: Purpose[];
  scope?: Scope;
  platform?: Platform;
  category?: CategoryDto;
  audience?: Audience;
  img?: string;
  pegi?: Pegi;
  pegiDescriptors?: PegiDescriptor[];
}

export enum Purpose {
  DataExchange = 'Data Exchange',
  Training = 'Training',
  MessageBroadcasting = 'Message Broadcasting'
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
  strategy?: Strategy;
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
