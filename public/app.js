const root = document.querySelector("#root");
console.log("ini berjalan dengan baik");
/* Rendering Dengan ReactJS */

function tick() {
  function clickAlert(msg) {
    alert(msg);
  }

  const element = /*#__PURE__*/React.createElement("div", {
    className: "box"
  }, /*#__PURE__*/React.createElement("h1", null, "Jam Sekarang"), "/* /* Dibawah ini element yang otomatis di render oleh React */ /* Karena Function yang terdeteksi (time) memungkinkan untuk di render setiap saat */ */", /*#__PURE__*/React.createElement("h2", null, new Date().toLocaleTimeString()), /*#__PURE__*/React.createElement("button", {
    className: "button",
    onClick: clickAlert.bind(this, "Hello, ini pesan dari alert")
  }, "Alert"));
  ReactDOM.render([element, /*#__PURE__*/React.createElement(App, null), /*#__PURE__*/React.createElement(App2, null), /*#__PURE__*/React.createElement(App3, null), /*#__PURE__*/React.createElement(App4, null), /*#__PURE__*/React.createElement(App5, null), /*#__PURE__*/React.createElement(App6, null), /*#__PURE__*/React.createElement(App7, null)], root);
}

function App() {
  /* const state = React.useState(1); */

  /* useState(kondisiAwal,kondisiSetelahUpdate) berguna untuk membuat fitur yang dapat mengupdate data secara dinamis */

  /* const count = state[0];
  const updateCount = state[1]; */
  const [count, setCount] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", {
    className: "box2"
  }, /*#__PURE__*/React.createElement("h1", null, "Counter"), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setCount(count - 1);
    }
  }, "-"), /*#__PURE__*/React.createElement("span", null, count), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setCount(count + 1);
    }
  }, "+"));
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

  return /*#__PURE__*/React.createElement("div", {
    className: "box"
  }, /*#__PURE__*/React.createElement("h1", {
    id: "judul"
  }, "UseEffect"), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setClick("true");
    }
  }, click), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setCount(count + 1);
    }
  }, "Tambah Nilai"), " ", "Nilai : ", count);
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

  return /*#__PURE__*/React.createElement("div", {
    className: "box2"
  }, /*#__PURE__*/React.createElement("h1", null, "Conditional Rendering (Login)"), /*#__PURE__*/React.createElement("h2", null, login && /*#__PURE__*/React.createElement("b", null, "Welcome, User !") || /*#__PURE__*/React.createElement("i", null, "Please, login !")), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      if (!login) {
        setLogin(true);
      } else {
        setLogin(false);
      }
    }
  }, !login ? "login" : "logout"));
}

function App4() {
  const [count, setCount] = React.useState(0);
  const [subscribe, setSubscribe] = React.useState(false);
  React.useEffect(function () {});
  return /*#__PURE__*/React.createElement("div", {
    className: "box"
  }, /*#__PURE__*/React.createElement("h1", null, "My Channel"), /*#__PURE__*/React.createElement("p", null, "subscriber :0"), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      if (!subscribe) {
        setSubscribe(true);
      } else {
        setSubscribe(false);
      }
    }
  }, !subscribe && "Subscribe" || "Subscribed"));
}

function App5() {
  const judulRef = React.useRef(null);
  React.useEffect(function () {
    setTimeout(function () {
      judulRef.current.textContent = "Berhasil di manipulasi (DOM Manipulation)";
    }, 5000);
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "box2"
  }, /*#__PURE__*/React.createElement("h1", {
    ref: judulRef
  }, "Belum di manupulasi (DOM Manipulation)"));
}

function App6() {
  const cars = ["Toyota", "Honda", "Hyundai", "Mitsubitsi", "Porsche", "Ferrari", "BMW", "Mercedez-Benz"];
  const totalCar = cars.length;
  console.log(cars.map(function (car) {
    return /*#__PURE__*/React.createElement("li", {
      key: car
    }, car);
  }));
  return /*#__PURE__*/React.createElement("div", {
    className: "box"
  }, /*#__PURE__*/React.createElement("h1", null, "Mapping List Data and Keys"), /*#__PURE__*/React.createElement("ul", null, cars.map(function (car) {
    return /*#__PURE__*/React.createElement("li", {
      key: car
    }, car);
  })), /*#__PURE__*/React.createElement("p", null, "Total : ", totalCar, " Car"));
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

  return /*#__PURE__*/React.createElement("div", {
    className: "box2"
  }, /*#__PURE__*/React.createElement("h2", null, "Input Form"), /*#__PURE__*/React.createElement("form", {
    onSubmit: postData
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Uncontrolled Component"), /*#__PURE__*/React.createElement("label", {
    htmlFor: ""
  }, "Nama: "), /*#__PURE__*/React.createElement("input", {
    type: "text",
    ref: namaRef
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Controlled Component"), /*#__PURE__*/React.createElement("label", {
    htmlFor: ""
  }, "Nama: "), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "nama",
    value: namaNew,
    onChange: function (event) {
      setNamaNew(event.target.value);
    }
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Submit")));
}

tick();
/* To active clock uncomment the function below */

/* setInterval(function () {
  tick();
}); */