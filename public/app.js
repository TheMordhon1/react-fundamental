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
  ReactDOM.render(element, root);
}

tick();
setInterval(function () {
  tick();
});