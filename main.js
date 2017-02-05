import {Observable} from "rxjs";


const source = Observable.fromEvent(document, 'mousemove');
// .map( n => n*2)
  // .filter(n => n>=10);

source.subscribe(
  value => console.log(value),
  e => console.log(`error: ${e}`),
  () => console.log("complete")
);
