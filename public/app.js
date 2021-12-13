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
  ReactDOM.render([element, /*#__PURE__*/React.createElement(App, null), /*#__PURE__*/React.createElement(App2, null)], root);
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

tick();
/* To active clock uncomment the function below */

/* setInterval(function () {
  tick();
}); */