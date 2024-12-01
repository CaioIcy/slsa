export interface Character {
  character: string;
  gameCount: number;
}

export interface RankedNetplayProfile {
  ratingOrdinal: number;
  ratingUpdateCount: number;
  wins: number;
  losses: number;
  dailyGlobalPlacement: number;
  dailyRegionalPlacement: number;
  continent: string;
  characters: Readonly<Array<Character>>;
}

export interface ConnectCode {
  code: string;
}

export interface SlippiAccount {
  displayName: string;
  connectCode: ConnectCode;
}
