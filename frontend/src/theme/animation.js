import {keyframes} from '@chakra-ui/react'
const animationSwing = keyframes`
    0%{transform: rotate(-3deg)}
    50%{transform:rotate(3deg)}
    100%{transform: rotate(-3deg)}
    `;
const animationFlyIn = keyframes`
    0%{transform:translateY(-2000px)}
      `;
const animationFly = keyframes`
    100%{transform: translateY(-2000px)}
`;
export const animationflyin = `${animationFlyIn} 1s ease-in`;
export const animationfly = `${animationFly} 1s ease-out`;
export const animation = `${animationSwing} 2s ease-in-out infinite`;