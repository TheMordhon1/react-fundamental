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
  ReactDOM.render([element, <App />], root);
}

function App() {
  const state = React.useState(1);

  const count = state[0];
  const updateCount = state[1];
  return (
    <div className="box">
      <h1>Counter</h1>
      <button
        onClick={function () {
          updateCount(count - 1);
        }}
      >
        -
      </button>
      <span>{count}</span>
      <button
        onClick={function () {
          updateCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
}

tick();

/* To active clock uncomment the function below */
/* setInterval(function () {
  tick();
}); */
