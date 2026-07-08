export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  size: "normal" | "wide" | "large";
}

export interface GalleryEvent {
  id: string;
  name: string;
  location: string;
  images: GalleryItem[];
}