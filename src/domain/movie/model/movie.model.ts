/* eslint-disable @typescript-eslint/no-namespace */
import { MovieDTO } from "../dto/movie.dto";

export type Movie = {
  id: number;
  title: string;
  price: number;
  imageURL: string;
};

export namespace Movie {
  export function fromDTO(dto: MovieDTO): Movie {
    return {
      id: dto.id,
      title: dto.title,
      price: dto.price,
      imageURL: dto.image,
    };
  }
}
