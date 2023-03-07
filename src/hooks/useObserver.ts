import { MutableRefObject, useEffect, useLayoutEffect } from "react"

interface IProps {
    target:string | HTMLElement | null,
    onObserve?: () => void,
    onUnObserve?: () => void,
    options?: IntersectionObserverInit 
}
export default function useObserver({ target, options = {}, onObserve, onUnObserve }:IProps) {
    const oberver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(!entry.isIntersecting)  {
                onUnObserve?.()
                return
            } 
            onObserve?.()
        })
    }, options)

    useEffect(() => {
        const element = (() => {
            if(typeof target === "string") {
                return document.getElementById(target)
            } else {
                return target
            }
        })()
        element && oberver.observe(element!)
        return () => {
            element && oberver.unobserve(element)
            onUnObserve?.()
        }
    }, [target])

}