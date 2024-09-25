import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import AnimatedMain from "../components/Layouts/AnimatedMain";
import { Button, Container, Typography } from '@mui/material';
import { useState } from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import { saveAs } from 'file-saver';

const url = "https://portfoliowebsite.blob.core.windows.net/public-files/Alexander%20Rozsa%20-%20Resume.pdf";

export default function Resume() {
    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        'pdfjs-dist/build/pdf.worker.min.mjs',
        import.meta.url,
    ).toString();

    const [numPages, setNumPages] = useState<number>(0);

    const onDocumentLoad = (({ numPages }: { numPages: number }): void => {
        setNumPages(numPages);
    });

    const downloadPDF = async () => {
        saveAs(url, "Alexander Rozsa - Resume.pdf");
    }

    return (
        <AnimatedMain>
            <Container className="PageContainer" sx={{ minHeight: "calc(100dvh - 96px)" }}>
                <Typography
                    variant='h2'
                    textTransform="uppercase"
                    gutterBottom>
                    My latest resume
                </Typography>
                <Document
                    className="ResumeViewer"
                    file={url}
                    onLoadSuccess={onDocumentLoad}>
                    <Page pageNumber={numPages} scale={window.outerWidth > 786 ? 1.5 : 0.6} />
                </Document>
                <Button
                    variant='outlined'
                    color='secondary'
                    onClick={downloadPDF}
                    sx={{ m: 2 }}>
                    Download
                </Button>
            </Container>
        </AnimatedMain>
    );
}