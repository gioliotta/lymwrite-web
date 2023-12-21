function Download() {
  return (
    <div className="container-download">
      <p className="download-text">
        <a
          onClick={() =>
            alert("LymWrite todavía no está disponible, muy pronto lo estará")
          }
        >
          Descargar para Windows
        </a>
        Versión: 1.0.0 &nbsp;&nbsp;&nbsp;Tamaño: 11.45 MB
      </p>
    </div>
  );
}

export default Download;

/* 
<a
download
href="https://drive.google.com/file/d/13LxIzKvQXfckMr1yNJFFeMN2NEfFdpUF"
target="_blank"
rel="noreferrer"
>
Descargar para Windows
</a> 
*/
