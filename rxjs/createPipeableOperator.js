const { from, Observable } = require("rxjs");

function createPipeableOperator(operator) {
  return (source) => {
    return new Observable((subscribe) => {
      const operatorObj = operator(subscribe);
      return source.subscribe({
        next: operatorObj.next,
        error: operatorObj.error || ((e) => subscribe.error(e)),
        complete: operatorObj.complete || ((e) => subscribe.complete(e)),
      });
    });
  };
}

function first() {
  return createPipeableOperator((subscribe) => ({
    next: (value) => {
      subscribe.next(value);
      subscribe.complete();
    },
    complete: () => subscribe.complete(),
    error: () => subscribe.error(),
  }));
}

from([1, 2, 3, 4, 5]).pipe(first()).subscribe(console.log);
