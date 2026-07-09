export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  width: number;
  height: number;
}

export interface GalleryEvent {
  id: string;
  name: string;
  location: string;
  images: GalleryItem[];
}