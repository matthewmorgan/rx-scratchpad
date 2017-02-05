import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";

const numbers = [1,5,10];
const source = Observable.create(observer => {
  let index = 0;
  const produceValue = () => {
    observer.next(numbers[index++]);
    if (index < numbers.length) {
      setTimeout(produceValue, 250);
    } else {
      observer.complete();
    }
  }

  produceValue();

}).map( n => n*2)
  .filter(n => n>=10);

source.subscribe(
  value => console.log(`value is: ${value}`),
  e => console.log(`error: ${e}`),
  () => console.log("complete")
);
