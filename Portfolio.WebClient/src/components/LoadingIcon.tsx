import { Autorenew, ErrorOutline } from "@mui/icons-material";
import { motion } from "framer-motion";
import { Tooltip } from "@mui/material"
import { errorIconVariants, loadingIconVariants } from "../data/constants/FramerVariants";
import { ApiResponseType, ApiValidResponseType } from "../services/BaseService";
import { MouseEventHandler } from "react";

interface LoadingIconProps {
  source: ApiResponseType<ApiValidResponseType>,
  callback: MouseEventHandler<SVGSVGElement>
};

export default function LoadingIcon({ source, callback }: LoadingIconProps) {
  return source === null ? (
    <Tooltip title="Couldn't retrieve data. Click to retry.">
      <ErrorOutline
        color="error"
        fontSize="large"
        onClick={callback}
        sx={{ ":hover": { cursor: "pointer" } }}
        component={motion.svg}
        variants={errorIconVariants}
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
        initial="hidden"
        whileInView={["scaleUp", "rotate"]}
        exit="exit"
      />
    </Tooltip>
  );
}
