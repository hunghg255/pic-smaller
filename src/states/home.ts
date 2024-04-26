import { gstate } from "@/global";
import { CompressOption, ImageInfo } from "@/uitls/ImageInfo";
import { observable } from "mobx";

export interface HomeState {
  list: ImageInfo[];
  showOption: boolean;
  option: CompressOption;
  langKey: string;
}

export const homeState = observable.object<HomeState>({
  list: [],
  showOption: false,
  option: {
    scale: "unChanged",
    quality: 70,
    toWidth: undefined,
    toHeight: undefined,
  },
  langKey: gstate.lang,
});
