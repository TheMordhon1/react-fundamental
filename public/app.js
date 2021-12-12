const root = document.querySelector("#root");
/* Rendering Dengan ReactJS */

function tick() {
  const element = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Jam Sekarang"), "/* /* Dibawah ini element yang otomatis di render oleh React */ /* Karena Function yang terdeteksi (time) memungkinkan untuk di render setiap saat */ */", /*#__PURE__*/React.createElement("h2", null, new Date().toLocaleTimeString()));
  ReactDOM.render(element, root);
}

tick();
setInterval(function () {
  tick();
});