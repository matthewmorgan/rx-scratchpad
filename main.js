import {Observable} from "rxjs";


let circle = document.getElementById("circle");
const source = Observable.fromEvent(document, 'mousemove')
.map(e => ({x: e.clientX, y: e.clientY}))
.filter(value => value.x < 500)
.delay(100);


function onNext(value) {
  circle.style.left = value.x;
  circle.style.top = value.y;
}

source.subscribe(
  onNext,
  e => console.log(`error: ${e}`),
  () => console.log("complete")
);
