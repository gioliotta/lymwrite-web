// import donwloadIcon from "../assets/download-icon.svg";

function Download() {
  // function downloadFile() {
  //   const link = document.createElement("a");
  //   link.href = "../../LymWrite-setup.exe";
  //   link.download = "LymWrite-setup.exe";
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // }

  return (
    <div className="container-download">
      <p className="download-text">
        <a download href="../../LymWrite-setup.exe">
          Descargar para Windows
        </a>
        Versión: 1.0.0 &nbsp;&nbsp;&nbsp;Tamaño: 11.45 MB
      </p>

      {/* <img
        onClick={downloadFile}
        style={{ cursor: "pointer" }}
        src={donwloadIcon}
        title="Descargar exe"
        alt="Descargar Icono"
      /> */}
    </div>
  );
}

export default Download;
