import { ImageSourcePropType } from "react-native";


export type CategoryImage = {
  slug: string;
  imageUrl: ImageSourcePropType;
};

export type MuscleCategoryImage = {
  title: string;
  slug:string;
  imageUrl:ImageSourcePropType;
}
