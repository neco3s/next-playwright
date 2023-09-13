"use client";
import Header from "./Header";
import { useRecoilState } from "recoil";
import { baseFontSizeState } from "@/app/_states/themes";

function HeaderContainer() {
  const [baseFontSize, setBaseFontSize] = useRecoilState(baseFontSizeState);
  const changeFontSize = () => {
    switch (baseFontSize) {
      case 16:
        setBaseFontSize(18);
        break;
      case 18:
        setBaseFontSize(20);
        break;
      case 20:
        setBaseFontSize(22);
        break;
      case 22:
        setBaseFontSize(24);
        break;
      case 24:
        setBaseFontSize(16);
        break;
    }
  };
  return <Header changeFontSize={changeFontSize} />;
}

export default HeaderContainer;
