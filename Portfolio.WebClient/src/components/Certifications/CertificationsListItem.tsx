import { Box, Button, ClickAwayListener, Link, styled, Tooltip, tooltipClasses, TooltipProps, Typography } from "@mui/material";
import CertificationsService, { CertificationDTO } from "../../services/CertificationsService";
import StyledSkill from "../Skills/StyledSkill";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { fadeUpChild, skillsListContainer } from "../../data/constants/FramerVariants";
import { ApiResponseType } from "../../services/BaseService";
import LoadingIcon from "../LoadingIcon";
import { Info } from "@mui/icons-material";

interface CertificationsListItemProps {
    certification: CertificationDTO;
}

const MaxWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))({
    [`& .${tooltipClasses.tooltip}`]: {
        maxWidth: '600px',
    },
});

const CertificationsListItem = ({ certification }: CertificationsListItemProps) => {
    const [open, setOpen] = useState(false);
    const [parentCert, setParentCert] = useState<ApiResponseType<CertificationDTO>>();

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
        if (!parentCert && certification.parentId) {
            getParentCert(certification.parentId);
        }
    };

    const getParentCert = (id: number) => {
        if (parentCert === null) {
            setParentCert(undefined);
        }

        void CertificationsService.getCertification(id)
            .then(response => {
                setParentCert(response);
            });
    }

    return (
        <ClickAwayListener onClickAway={handleTooltipClose}>
            <Box display="inline-block">
                <MaxWidthTooltip
                    onClose={handleTooltipClose}
                    open={open}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    title={
                        <Box
                            p={2}
                            component={motion.div}
                            variants={skillsListContainer}
                            initial="hidden"
                            animate="show">
                            <Typography variant="h4" paragraph>{certification.name}</Typography>
                            <Typography gutterBottom>{`Issue date: ${certification.issueDate}`}</Typography>
                            {
                                certification.expiryDate &&
                                <Typography gutterBottom>{`Expiry date: ${certification.expiryDate}`}</Typography>
                            }
                            <Typography gutterBottom>{`Issued by: ${certification.issuer}`}</Typography>
                            <Typography gutterBottom>{`Credential ID: ${certification.credentialId}`}</Typography>
                            {
                                certification.parentId &&
                                <Box>
                                    <Typography gutterBottom>{`Parent certification:`}</Typography>
                                    <AnimatePresence mode="wait">
                                        {
                                            parentCert
                                                ? <CertificationsListItem certification={parentCert} />
                                                : <LoadingIcon
                                                    key={certification.id}
                                                    source={parentCert}
                                                    callback={() => { getParentCert(certification.parentId ?? 0) }} />
                                        }
                                    </AnimatePresence>
                                </ Box>
                            }
                            {
                                certification.url &&
                                <Typography>
                                    <Link color="primary" href={certification.url}>View Online</Link>
                                </Typography>
                            }
                        </Box>
                    }
                    slotProps={{
                        popper: {
                            disablePortal: true,
                        },
                    }}>
                    <Button
                        variant="text"
                        color="info"
                        onClick={handleTooltipOpen}
                        startIcon={<Info />}
                        sx={{
                            p: 0,
                            borderRadius: 8,
                        }}
                        component={motion.button}
                        variants={fadeUpChild}
                    >
                        <StyledSkill
                            key={certification.id}
                            name={certification.name}
                        />
                    </Button>
                </MaxWidthTooltip>
            </Box>
        </ClickAwayListener>
    );
}

export default CertificationsListItem;