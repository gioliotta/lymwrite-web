import Download from "./Download.jsx";

function Main() {
  return (
    <main className="main">
      <div className="main-text">
        <h1>
          LymWrite<span>: Organiza tus pensamientos</span>
        </h1>

        <p>
          <b>¿</b>Te cuesta organizar tus pensamientos<b>?</b>&nbsp;&nbsp;
          <b>¿</b>Te olvidas de las cosas importantes<b>?</b>
          <br />
          <br />
          Si quieres organizar tus ideas y pensamientos LymWrite es la
          aplicación perfecta para ti. Te ayuda a poner en órden tu mente.
          <br />
          <br />
          ¡Descarga <b style={{ color: "inherit" }}>LymWrite</b> y comienza a
          escribir!
        </p>
        <Download />
      </div>
    </main>
  );
}

export default Main;
