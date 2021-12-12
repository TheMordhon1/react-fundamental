const root = document.querySelector("#root");
console.log("ini berjalan dengan baik");

/* Rendering Dengan ReactJS */
function tick() {
  function clickAlert(msg) {
    alert(msg);
  }
  const element = (
    <div className="box">
      <h1>Jam Sekarang</h1>
      /* /* Dibawah ini element yang otomatis di render oleh React */ /* Karena
      Function yang terdeteksi (time) memungkinkan untuk di render setiap saat
      */ */
      <h2>{new Date().toLocaleTimeString()}</h2>
      <button
        className="button"
        onClick={clickAlert.bind(this, "Hello, ini pesan dari alert")}
      >
        Alert
      </button>
    </div>
  );
  ReactDOM.render(element, root);
}

tick();

setInterval(function () {
  tick();
});
