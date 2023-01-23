export type PlayerEntity = {
    id: number,
    name: string,
    points: number,
    rank: string,
  };
  export type Player = Omit<PlayerEntity, "id">;