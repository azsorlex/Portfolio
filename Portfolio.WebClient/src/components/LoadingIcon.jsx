import { Autorenew, ErrorOutline } from "@mui/icons-material";
import { motion } from "framer-motion";
import { loadingIconVariants } from "../data/constants/FramerVariants";

export default function LoadingIcon({ source }) {
    return (
        source === null
            ? <ErrorOutline color="error" fontSize="large" component={motion.svg}
                variants={loadingIconVariants}
                initial="hidden"
                animate="show"
                exit="exit" />
            : <Autorenew fontSize="large" component={motion.svg}
                variants={loadingIconVariants}
                initial="show"
                animate={{rotate: 360}}
                transition={{ duration: 1.5, ease: "easeOut", repeat: Infinity }}
                exit="exit" />
    );
}