import React from "react";
declare const KKSliderUnlock: React.FC<IKKSliderUnlockProps>;
export interface IKKSliderUnlockProps {
    sliderWidth?: number;
    sliderSuccess?: (() => void | undefined) | undefined;
    backColor?: string;
}
export default KKSliderUnlock;
