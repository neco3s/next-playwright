import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

/** reference https://tailwindcss.com/docs/font-size */
type BaseFontSizeType = 16 | 18 | 20 | 22 | 24;

export const baseFontSizeState = atom<BaseFontSizeType>({
  key: "baseFontSizeState",
  default: 16,
  effects_UNSTABLE: [persistAtom],
});

/** reference https://tailwindcss.com/docs/font-size */
export const baseLineHeightState = selector({
  key: "baseLineHeightState",
  get: ({ get }) => {
    const fontSize = get(baseFontSizeState);

    switch (fontSize) {
      case 16:
        return 24;
      case 18:
        return 28;
      case 20:
        return 28;
      case 22:
        return 30;
      case 24:
        return 32;
      default:
        return 24;
    }
  },
});
