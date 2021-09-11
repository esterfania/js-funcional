const { interval, timer } = require("rxjs");
const { delay, takeUntil } = require("rxjs/operators");

// esperar 3000
// gerar números em um intervalo de 500

// depois de 10000 unsubscribe

interval(500)
  .pipe(delay(3000), takeUntil(timer(10000)))
  .subscribe(console.log);
