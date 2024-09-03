type Props = {
  movieName: string;
  imageURL: string;
  height: number;
};

export function MovieImage({ movieName, imageURL, height }: Props) {
  return <img src={imageURL} alt={movieName} style={{ height }} />;
}
