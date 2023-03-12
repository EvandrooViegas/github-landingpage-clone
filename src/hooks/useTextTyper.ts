import { useEffect, useRef, useState } from "react";

interface IProps {
    string: string,
    time: number,
    isType?: boolean
}
type IReturn = [string, () => void, boolean]
export default function useTextTyper({ string = "This is a test", time = 1000, isType = false }:IProps):IReturn {

    const [text, setText] = useState("")
    const [isFinished, setIsFinished] = useState<boolean>(false)
    const currentStringIndex = useRef(0)
    const timoutId = useRef<number | null>(null)
    let decorator = "|"
    //start the typing from the begginning 
    const resetTyping = () => {
        onReset()
        addNewLetter()
    }
    //set the is finished to true when its finished
    const onFinished = () => {
        setIsFinished(true)
    }
    const removeTimout = () => {
        if(timoutId.current) clearTimeout(timoutId.current)
        timoutId.current = null
    }
    //reset all of the states
    const onReset = () => {
        currentStringIndex.current = 0
        setIsFinished(false)
        removeTimout()
    }


    const addNewLetter = () => {
        timoutId.current = setTimeout(() => {
            currentStringIndex.current+=1
            //check if currentString.curent is bigger or equal string.length
            // if it is call onFinished 
            // if not continue the looop
            if(currentStringIndex.current >= string.length) {
               onFinished()
            } else {
                addNewLetter()
            }
            const newText = string.slice(0, currentStringIndex.current) + decorator
            setText(newText)
        }, time)

    }

    useEffect(() => {
        addNewLetter()
        return onReset
    }, [string])
    return [ text, resetTyping, isFinished ]
}