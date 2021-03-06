import {Observable} from "rxjs";


export function load(url) {
  return Observable.create(observer => {
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", () => {
      if (xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        observer.next(data);
        observer.complete();
      } else {
        observer.error(xhr.statusText);
      }
    });

    xhr.open("GET", url);
    xhr.send();
  }).retryWhen(retryStrategy({attempts: 3, delay: 1500}));
}

export function loadWithFetch(url) {
  return Observable.defer(() => {
    return Observable.fromPromise(
        fetch(url).then(r => r.statusCode === 200) ? r.json() : Promise.reject(r))
  }).retryWhen(retryStrategy());
}

function retryStrategy({attempts = 4, delay = 1000} = {}) {
  return function (errors) {
    return errors.scan((acc, value) => {
      acc++;
      if (acc < attempts) {
        return acc;
      } else {
        throw new Error(value);
      }
    }, 0)
        .delay(delay);
  }
}