import {Observable} from "rxjs";
import {load, loadWithFetch} from "./loader";


let source = Observable.merge(
        Observable.of(1),
        Observable.from([2, 3, 4]),
        Observable.of(5)
);


source.subscribe(
    value => console.log(`value is ${value}`),
    error => console.log(`error: ${error}`),
    () => console.log('complete')
);

// let button = document.getElementById("button");
// let output = document.getElementById("output");
//
// const click = Observable.fromEvent(button, 'click');
//
// function renderMovies(movies) {
//   movies.forEach(m => {
//     let div = document.createElement("div");
//     div.innerText = m.title;
//     output.appendChild(div);
//   });
// }
//
// click.flatMap(e => loadWithFetch("movies.json"))
//     .subscribe(
//         renderMovies,
//         e => console.log(`error: ${e}`),
//         () => console.log("complete")
//     );
