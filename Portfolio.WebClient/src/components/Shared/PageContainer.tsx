import { Container } from "@mui/material";
import { ReactNode } from "react";

interface PageContainerProps {
    id: string,
    children: ReactNode[] | ReactNode,
};

export default function PageContainer({ id, children }: PageContainerProps) {
    return (
        <Container id={id} className="PageContainer" maxWidth="lg">
            {children}
        </Container>
    );
}