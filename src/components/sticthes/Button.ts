import { styled } from "@stitches/react"

export const Button = styled("button", {
    color: "White",
    padding: "3px 8px",
    borderRadius: "4px",
    variants: {
        decoration: {
            outline: {
                border: "1px solid white"
            },
            grayBg: {
                background: "#1b2226"
            },
            whiteBg: {
                background: "White",
                color: "Black"
            },
            purpleOutline: {
                border: "1px solid #bc8cff"
            }
        },
        rounded: {
            md: {
                borderRadius: "5px"
            }
        }
    }
})