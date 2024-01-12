import React from "react";
import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const defaultLayoutPluginInstance = defaultLayoutPlugin();

const PdfViewer = () => {
  return (
    <div>
      <Viewer
        fileUrl="/assets/pdf-open-parameters.pdf"
        plugins={[
          // Register plugins
          defaultLayoutPluginInstance,
        ]}
      />
    </div>
  );
};

export default PdfViewer;
