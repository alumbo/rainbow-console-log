export default () => {
  const originalConsoleLog = console.log;
  const colors = [
    "#40a4d8",
    "#33beb8",
    "#b2c225",
    "#fecc2f",
    "#f9a228",
    "#f6621f",
    "#db3838",
    "#ee657a",
    "#a363d9",
  ];
  let colorIndex = Math.floor(colors.length * Math.random());
  // rewrite
  console.log = function () {
    for (let i = 0; i < arguments.length; i++) {
      const arg = arguments[i];
      if (typeof arg === "string") {
        originalConsoleLog.apply(console, [
          `%c${arg}`,
          `color:${colors[colorIndex]};`,
        ]);
        colorIndex++;
        if (colorIndex === colors.length) colorIndex = 0;
      } else {
        originalConsoleLog.apply(console, [arg]);
      }
    }
  };
};
