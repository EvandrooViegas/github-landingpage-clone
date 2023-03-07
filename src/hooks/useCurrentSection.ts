import { useContext } from "react";
import { currentSectionCtx, ICurrentSectionCtx } from "../context/CurrentSection";

export default function useCurrentSection():ICurrentSectionCtx {
    return useContext(currentSectionCtx)
}