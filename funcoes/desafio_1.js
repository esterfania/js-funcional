// somar(3)(4)(5)

function somar(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(somar(3)(4)(5));

// calcular
// fn -> 3 * 7
// fn -> 3 + 7
// fn -> 3 - 7
//calcular(3)(7)(fn)

function calcular(a) {
  return function (b) {
    return function (fn) {
      return fn(a, b);
    };
  };
}

const multiplicar = (a, b) => {
  return a * b;
};

const somar = (a, b) => {
  return a + b;
};

const subtrair = (a, b) => {
  return a - b;
};

console.log(calcular(2)(14)(multiplicar));
console.log(calcular(2)(9)(somar));
console.log(calcular(2)(9)(subtrair));
