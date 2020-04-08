import { Guid } from 'guid-typescript';

export interface GamesDto {
  id?: Guid;
  name?: string;
  description?: string;
  creationUserId?: Guid;
  authors?: AuthorDto[];
  gameplay?: string;
  purpose?: PurposeDto;
  scope?: Scope;
  platform?: Platform;
  category?: CategoryDto;
  audience?: Audience;
}

export interface PurposeDto {
  DataExchange?: string;
  Training?: string;
  MessageBroadcasting?: string;
}

export interface CategoryDto {
  actionGames?: ActionGames;
  actionAdventure?: ActionAdventure;
  adventure?: Adventure;
  rolePlaying?: RolePlaying;
  simulation?: Simulation;
  strategy?: Strategy;
  sports?: Sports;
  puzzle?: Puzzle;
  idle?: Idle;
}

export interface AuthorDto {
  id?: Guid;
  gameId?: Guid;
  firstname?: string;
  lastname?: string;
}

export enum ActionAdventure {
  SurvivalHorror,
  Metroidvania,
}

export enum ActionGames {
  Platformer,
  Shooter,
  Fighting,
  BeatEmUp,
  Stealth,
  Survival,
  Rhythm,
}

export enum Adventure {
  TextAdventures,
  GraphicAdventures,
  VisualNovels,
  InteractiveMovie,
  RealTime3D,
}

export enum Audience {
  Band1, // 0 to 3  years old
  Band2, // 3 to 7 years old
  Band3, // 8 to 11 years old
  Band4, // 12 to 16 years old
  Band5, // 17 to 25 years old
  Band6, // 25 to 35 years old
  Band7, // 35 to 60 years old
  Band8, // below 60 years old
  GeneralPublic,
  Professionals,
  Students,
}

export enum Idle {
  Idle,
  Casual,
  Party,
  Programming,
  Board,
  MassiveMultiplayerOnline,
  Advergame,
  Art,
  Educational,
  Exergame,
}

export enum Platform {
  Physical,
  Virtual,
}

export enum Puzzle {
  Logic,
  Trivia,
}

export enum RolePlaying {
  ActionRPG,
  MMORPG,
  Rouguelikes,
  TacticalRPG,
  SandboxRPG,
  FirstPersonPartyBasedRPG,
}

export enum Scope {
  StateGovernment,
  MilitaryDefense,
  Healthcare,
  Education,
  Corporate,
  Religious,
  CultureArt,
  Ecology,
  Politics,
  Humanitarian,
  Advertising,
  ScientificResearch,
}

export enum Simulation {
  ConstructionManagementSimulation,
  LifeSimulation,
  VehicleSimulation,
}

export enum Sports {
  Racing,
  TeamSports,
  Competitive,
  SportsBasedFighting,
}

export enum Strategy {
  FourX,
  Artillery,
  RealTimeStrategy,
  MultiplayerOnlineBattleArena,
  TowerDefense,
  TurnBasedStrategy,
  TurnBasedTactics,
  Wargame,
  GrandStrategyWargame,
}
