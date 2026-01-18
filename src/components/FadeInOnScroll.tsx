import { motion, useAnimation, useInView } from "motion/react";
import { useEffect, useRef, type ReactNode } from "react"

type FadeInOnScrollProps = {
    children: ReactNode;
    delay?: number;
    index?: number;
}

const FadeInOnScroll = ({children, delay, index}: FadeInOnScrollProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();

    const calculateDelay = delay !== undefined ? delay : (index !== undefined ? 0.1 * index : 0)

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView])

  return (
    <div ref={ref}>
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ type: "spring", stiffness: 300, damping: 15, duration: 0.5, delay: calculateDelay }}
        >
            {children}
        </motion.div>
    </div>
  )
}

export default FadeInOnScroll