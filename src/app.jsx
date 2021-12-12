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
  ReactDOM.render([element, <App />, <App2 />], root);
}

function App() {
  /* const state = React.useState(1); */
  /* useState(kondisiAwal,kondisiSetelahUpdate) berguna untuk membuat fitur yang dapat mengupdate data secara dinamis */

  /* const count = state[0];
  const updateCount = state[1]; */
  const [count, setCount] = React.useState(0);
  return (
    <div className="box2">
      <h1>Counter</h1>
      <button
        onClick={function () {
          setCount(count - 1);
        }}
      >
        -
      </button>
      <span>{count}</span>
      <button
        onClick={function () {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
}

function App2() {
  const [click, setClick] = React.useState("false");
  const [count, setCount] = React.useState(0);

  /* Use Effect berguna untuk memberikan hasil rendering yg maksimal,
  dan dapat dikondisikan pada saat action apa (didalam useState)
   element tersebut (didalam useEffect) dirender*/

  React.useEffect(
    function () {
      console.log(document.getElementById("judul"));
    },
    [count] //kondisi dalam
  );
  return (
    <div className="box">
      <h1 id="judul">UseEffect</h1>
      <button
        onClick={function () {
          setClick("true");
        }}
      >
        {click}
      </button>
      <button
        onClick={function () {
          setCount(count + 1);
        }}
      >
        Tambah Nilai
      </button>{" "}
      Nilai : {count}
    </div>
  );
}

tick();

/* To active clock uncomment the function below */
/* setInterval(function () {
  tick();
}); */
