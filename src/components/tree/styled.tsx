import styled from "styled-components";
import tw from "tailwind-styled-components"

export const ShakableTree = styled("div")`
    width: 200px;
    height: 500px;
    background-color: #00dc82;
`

const FlyingItem = tw.div`
    size-[50px]
    rounded-full
    absolute
    text-white
    leading-[50px]
    text-center
    cursor-pointer
    select-none
`

export const OxygenBubble = tw(FlyingItem)`
    bg-[#2eaddc]
`
// export const OxygenBubble = styled("div")`
//     width: 50px;
//     height: 50px;
//     border-radius: 50%;
//     background-color: #2eaddc;
//     position: absolute;
// `

export const Bug = tw(FlyingItem)`
    bg-[#ef4444]
`
// export const Bug = styled("div")`
//     width: 50px;
//     height: 50px;
//     border-radius: 50%;
//     background-color: #ef4444;
//     position: absolute;
// `