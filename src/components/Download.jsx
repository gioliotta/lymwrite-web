import donwloadIcon from "../assets/download-icon.svg";

function Download() {
  function downloadFile() {
    const filePath = "./LymWrite-setup.exe",
      link = document.createElement("a");
    link.href = filePath;
    link.download = "LymWrite-setup.exe";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="container-download">
      <p className="download-text">
        <span onClick={downloadFile} style={{ cursor: "pointer" }}>
          Descargar para Windows
        </span>
        Versión: 1.0.0 &nbsp;&nbsp;&nbsp;Tamaño: 11.45 MB
      </p>

      <img
        onClick={downloadFile}
        style={{ cursor: "pointer" }}
        src={donwloadIcon}
        title="Descargar exe"
        alt="Descargar Icono"
      />
    </div>
  );
}

export default Download;
