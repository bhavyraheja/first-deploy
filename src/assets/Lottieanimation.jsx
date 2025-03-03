import {useLottie, useLottieInteractivity} from 'lottie-react';
import animationData from '../assets/Artboard_1.json';
 
export default function LottieAnimation() {
    const options = {
        animationData: animationData,
        // loop: false,
        autoplay: false,
    }
 
    const style = {
        width: '100%',
        height: '30%',
    }
 
    const lottieObj = useLottie(options, style);
 
    return useLottieInteractivity({
        lottieObj,
        mode: 'scroll',
        actions: [
            {
                visibility: [0.5, 0.8],
                type: 'seek',
                frames: [0, 500],
            }
        ]
    });
}