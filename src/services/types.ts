export type Pokemon = {
  name: string;
  url: string;
};

export type TDataPokemon = {
  count: number;
  next: string;
  previous: null;
  result: Pokemon[];
};
