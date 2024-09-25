import { Autorenew, ErrorOutline } from "@mui/icons-material";
import { motion } from "framer-motion";
import { Tooltip } from "@mui/material"
import { loadingIconVariants } from "../data/constants/FramerVariants";

interface LoadingIconProps {
  source: object[] | undefined | null,
};

export default function LoadingIcon({ source }: LoadingIconProps) {
  return source === null ? (
    <Tooltip title="Couldn't retrieve data. Please refresh the page.">
      <ErrorOutline
        color="error"
        fontSize="large"
        component={motion.svg}
        variants={loadingIconVariants}
        initial="hidden"
        whileInView="show"
        exit="exit"
      />
    </Tooltip>
  ) : (
    <Tooltip title="Loading. Please wait :)">
      <Autorenew
        fontSize="large"
        component={motion.svg}
        variants={loadingIconVariants}
        initial="show"
        whileInView={{ rotate: 360 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut", repeat: Infinity }}
        exit="exit"
      />
    </Tooltip>
  );
}
