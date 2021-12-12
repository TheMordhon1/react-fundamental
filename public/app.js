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
  ReactDOM.render([element, /*#__PURE__*/React.createElement(App, null)], root);
}

function App() {
  /* const state = React.useState(1); */

  /* const count = state[0];
  const updateCount = state[1]; */
  const [count, setCount] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", {
    className: "box"
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

tick();
/* To active clock uncomment the function below */

/* setInterval(function () {
  tick();
}); */