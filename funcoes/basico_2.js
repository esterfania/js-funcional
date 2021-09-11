function bomDia() {
  console.log("bom dia");
}
const boaTarde = function () {
  console.log("boa tarde");
};

// 1) Passar uma função como parametro para outra
function callAnyThing(fn) {
  if (typeof fn === "function") {
    fn();
  }
}

callAnyThing(bomDia);
callAnyThing(boaTarde);

// 2) Passar uma função a partir de uma outra função

function potencia(base, exp) {
  return Math.pow(base, exp);
}

const bits128 = potencia(2, 128);

console.log(bits128);
