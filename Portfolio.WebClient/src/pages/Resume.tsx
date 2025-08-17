import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import AnimatedMain from "../components/Shared/AnimatedMain";
import { Box, Button, Typography } from '@mui/material';
import { useState } from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import { saveAs } from 'file-saver';
import PageContainer from '../components/Shared/PageContainer';

const url = "https://portfoliowebsite.blob.core.windows.net/public-files/Alexander%20Rozsa%20-%20Resume.pdf";

export default function Resume() {
    pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

    const [numPages, setNumPages] = useState<number>(0);

    const onDocumentLoad = (({ numPages }: { numPages: number }): void => {
        setNumPages(numPages);
    });

    const downloadPDF = () => {
        saveAs(url, "Alexander Rozsa - Resume.pdf");
    }

    return (
        <AnimatedMain>
            <PageContainer id="resume">
                <Typography
                    variant='h2'
                    textTransform="uppercase"
                    gutterBottom>
                    Resume
                </Typography>
                <Document
                    className="ResumeViewer"
                    file={url}
                    onLoadSuccess={onDocumentLoad}>
                    {Array(numPages).keys().map((i) => (
                        <Box
                            component={Page}
                            key={i}
                            pageNumber={i + 1}
                            scale={window.outerWidth > 786 ? 1.5 : 0.6}
                            sx={{ mt: i > 0 ? 2 : 0 }}
                        />
                    ))}
                </Document>
                <Button
                    variant='outlined'
                    color='secondary'
                    onClick={downloadPDF}
                    sx={{ m: 2 }}>
                    Download
                </Button>
            </PageContainer>
        </AnimatedMain>
    );
}