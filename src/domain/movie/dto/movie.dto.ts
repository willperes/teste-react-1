export type MovieDTO = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export type MovieListResponseDTO = {
  products: MovieDTO[];
};
