import {Observable} from "rxjs";
import {load, loadWithFetch} from "./loader";


let button = document.getElementById("button");
let output = document.getElementById("output");

const click = Observable.fromEvent(button, 'click');

function renderMovies(movies) {
  movies.forEach(m => {
    let div = document.createElement("div");
    div.innerText = m.title;
    output.appendChild(div);
  });
}

click.flatMap(e => loadWithFetch("moviess.json"))
    .subscribe(
        renderMovies,
        e => console.log(`error: ${e}`),
        () => console.log("complete")
    );
