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
  ReactDOM.render(
    [
      element,
      <App />,
      <App2 />,
      <App3 />,
      <App4 />,
      <App5 />,
      <App6 />,
      <App7 />,
    ],
    root
  );
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
   element tersebut (didalam useEffect) diklik*/
  /* UseEffect berpengaruh untuk memberikan data update ketika suatu state di klik,
   hal ini jarang digunakan karena biasanya update data hanya terjadi sekali ketika
   dilakukan refresh/reload, oleh karenanya gunakan second argument dengan empty array
   untuk memastikan tidak ada render ketika suatu state di ubah. */

  /* React.useEffect(
    function () {
      console.log("update time");
    },
    [count] //kondisi dalam
  ); */
  /* React.useEffect(
    function () {
      console.log("fetching data");
    },
    [] //untuk memastikan data tidak terender ketika state ter update
  ); */

  React.useEffect(function () {
    console.log("init carousel");
    return function () {
      console.log("destroy carousel");
    };
  });
  /* penggunaan useEffect dalam carousel adalah dengan memastikan,
  data carousel tidak terupdate termenerus ketika state terupdate
  dengan melakukan return sebuah function destroy */
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

function App3() {
  const [login, setLogin] = React.useState(false);

  /*  if (login) {
    return (
      <div className="box2">
        <h1>Conditional Rendering (Login)</h1>
        <h2>Mantap Sudah Login !</h2>
        <button
          onClick={function () {
            setLogin(false);
          }}
        >
          logout
        </button>
      </div>
    );
  } */

  return (
    <div className="box2">
      <h1>Conditional Rendering (Login)</h1>
      {/* <h2>{login ? <b>Welcome, User !</b> : <i>Please, login !</i>}</h2> */}
      <h2>{(login && <b>Welcome, User !</b>) || <i>Please, login !</i>}</h2>
      <button
        onClick={function () {
          if (!login) {
            setLogin(true);
          } else {
            setLogin(false);
          }
        }}
      >
        {!login ? "login" : "logout"}
      </button>
    </div>
  );
}

function App4() {
  const [count, setCount] = React.useState(0);
  const [subscribe, setSubscribe] = React.useState(false);

  React.useEffect(function () {});

  return (
    <div className="box">
      <h1>My Channel</h1>
      <p>subscriber :0</p>
      <button
        onClick={function () {
          if (!subscribe) {
            setSubscribe(true);
          } else {
            setSubscribe(false);
          }
        }}
      >
        {(!subscribe && "Subscribe") || "Subscribed"}
      </button>
    </div>
  );
}

function App5() {
  const judulRef = React.useRef(null);

  React.useEffect(function () {
    setTimeout(function () {
      judulRef.current.textContent =
        "Berhasil di manipulasi (DOM Manipulation)";
    }, 5000);
  });
  return (
    <div className="box2">
      <h1 ref={judulRef}>Belum di manupulasi (DOM Manipulation)</h1>
    </div>
  );
}

function App6() {
  const cars = [
    "Toyota",
    "Honda",
    "Hyundai",
    "Mitsubitsi",
    "Porsche",
    "Ferrari",
    "BMW",
    "Mercedez-Benz",
  ];
  const totalCar = cars.length;
  console.log(
    cars.map(function (car) {
      return <li key={car}>{car}</li>;
    })
  );
  return (
    <div className="box">
      <h1>Mapping List Data and Keys</h1>
      <ul>
        {cars.map(function (car) {
          return <li key={car}>{car}</li>;
        })}
      </ul>
      <p>Total : {totalCar} Car</p>
    </div>
  );
}

function App7() {
  const namaRef = React.useRef(null);
  const [namaNew, setNamaNew] = React.useState("Romdhon");
  function postData(event) {
    const nama = namaRef.current.value;
    event.preventDefault();
    console.log("ini nama kamu kan ?", nama);
    console.log("ini nama baru kamu kan ?", namaNew);
  }
  return (
    <div className="box2">
      <h2>Input Form</h2>
      <form onSubmit={postData}>
        <div>
          <p>Uncontrolled Component</p>
          <label htmlFor="">Nama: </label>
          <input type="text" ref={namaRef} />
        </div>
        <div>
          <p>Controlled Component</p>
          <label htmlFor="">Nama: </label>
          <input
            type="text"
            name="nama"
            value={namaNew}
            onChange={function (event) {
              setNamaNew(event.target.value);
            }}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

tick();

/* To active clock uncomment the function below */
/* setInterval(function () {
  tick();
}); */
