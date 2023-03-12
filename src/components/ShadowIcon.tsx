import { motion } from "framer-motion";
import { useState } from "react";
import { useObserver } from "../hooks";
import AnimateOnView from "./AnimateOnView";
interface IProps {
  children: JSX.Element;
  color: string;
}
export default function ShadowIcon({ children, color }: IProps) {
  return (
    <AnimateOnView
      animate={{
        opacity: 1,
      }}
    >
      <div className="relative flex-center text-2xl">
        {children}
        <button
          className="absolute posicion-center w-10 h-10 rounded-full"
          style={{
            boxShadow: `0px 0px 40px ${color}`,
          }}
        ></button>
      </div>
    </AnimateOnView>
  );
}
