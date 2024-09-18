export interface IResponseAPI {
  volumeInfo: BookVolumeInfo;
  id: number;
}

export type BookVolumeInfo = {
  title: string;
  subtitle: string;
  authors: Array<string>;
  description: string;
  pageCount: number;
  categories: Array<string>;
  imageLinks: ImageLink;
  infoLink: string;
};

type ImageLink = {
  smallThumbnail: string;
  thumbnail: string;
};
