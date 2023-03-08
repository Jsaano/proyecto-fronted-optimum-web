import React, { useState } from "react";
import { Document, Page } from "react-pdf";


export default function PDFViewer() {

    const [url, setUrl] = useState("https://www.example.com/example.pdf");
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }   

    return (
        <div className="pdfViewer">
            <div className="pdfViewer__container">
                <div className="pdfViewer__container__header">
                    <h1>Curso 1</h1>
                </div>
                <div className="pdfViewer__container__body">
                    <div className="pdfViewer__container__body__pdf">
                        <Document
                            file={url}
                            onLoadSuccess={onDocumentLoadSuccess}
                        >
                            <Page pageNumber={pageNumber} />
                        </Document>
                    </div>
                    <div className="pdfViewer__container__body__pagination">
                        <p>Página {pageNumber} de {numPages}</p>
                        <div className="pdfViewer__container__body__pagination__buttons">
                            <button
                                type="button"
                                disabled={pageNumber <= 1}
                                onClick={() => setPageNumber(pageNumber - 1)}
                            >
                                Anterior
                            </button>
                            <button>
                                Siguiente
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}