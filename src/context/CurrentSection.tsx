import { createContext, useState } from "react";

interface IProps {
    children: JSX.Element
}

export type ICurrentSectionCtx = {
    currentSection: ISections,
    updateCurrentSection: (newCurrentSection:ISections) => void
} | null

export type ISections = 
"productivity" |
"home" | 
"collaboration" |
"security"
export const currentSectionCtx = createContext<ICurrentSectionCtx>(null)

export default function CurrentSectionProvider({ children }:IProps) {
    const [currentSection, setCurrentSection] = useState<ISections>("home")
    const updateCurrentSection = (newCurrentSection:ISections) => {
        setCurrentSection(newCurrentSection)
    }
    return (
        <currentSectionCtx.Provider value={{ currentSection, updateCurrentSection }}>
            {children}
        </currentSectionCtx.Provider>
    )
}