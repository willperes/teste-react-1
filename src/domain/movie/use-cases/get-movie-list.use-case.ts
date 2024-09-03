import { baseURL, HttpClient, httpClientFactory, HttpRequest } from "@/infra";
import { Movie } from "../model";
import { MovieListResponseDTO } from "../dto";

export interface GetMovieListUseCase {
  execute: () => Promise<Movie[]>;
}

export class GetMovieListUseCaseImpl implements GetMovieListUseCase {
  constructor(private readonly httpClient: HttpClient = httpClientFactory()) {}

  public execute = async () => {
    const request: HttpRequest = {
      url: baseURL.movies,
      method: "get",
    };
    const _movieListResponse = await this.httpClient
      .request<MovieListResponseDTO>(request)
      .then((res) => res.data);

    // Simulate request latency
    await new Promise((resolve) => setTimeout(() => resolve(null), 750));

    return _movieListResponse.products.map(Movie.fromDTO);
  };
}
