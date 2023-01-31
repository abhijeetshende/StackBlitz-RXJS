import { ajax } from 'rxjs/ajax';
import { defer, interval, fromEvent, of, take } from 'rxjs';

const o$ = defer(() =>
  Math.random() > 0.5 ? interval(1000).pipe(take(5)) : of('hello', 'world')
);

o$.subscribe(console.log, console.log);
