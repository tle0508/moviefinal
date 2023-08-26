export class Theater {
    constructor(
      public id: number,
      public name: string,
      public movie: Movie,
      public seatPrice: number,
      public seatData: SeatData
    ) {}
  }

  export class Movie{
    constructor(
        public name: string,
        public genre: string,
        public rate: string,
        public length: number,
        public coverImage: string
      ) {}
  }

  export class SeatData{
    constructor(
        public numRows: number,
        public numSeatsPerRow: number
    ){}
  }
  