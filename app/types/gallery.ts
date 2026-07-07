export interface GalleryItem {
  id: number;
  image: string;
  title: string;
  category: string;
  size: "normal" | "wide" | "large";
}