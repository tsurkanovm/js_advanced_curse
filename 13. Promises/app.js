const button = document.querySelector('button');
const output = document.querySelector('p');

const LocationPromise = new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(
      posData => {
        resolve(posData);
      },
      errorMsgObj => {
        reject(errorMsgObj);
      }
  );
});

function trackUserHandlerPromiseBy() {
  LocationPromise.then(successData => {
    console.dir(successData);
  }).catch(errorObj => {
    console.dir(errorObj);
    alert(errorObj.message);
  }).then(what => {
    console.dir(what); // undefined, because previous than returned default promise, we can return our promise to continue the chain
  })
}

trackUserHandlerPromiseBy();
console.log('Run directly');

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(
      posData => {
        console.log('Please wait a few seconds ...');
        setTimeout(() => {
          console.log(posData);
        }, 2000);
      },
      error => {
        console.log(error);
      }
  );
  setTimeout(() => {
    console.log('Timer done!');
  }, 0);
  console.log('Getting position...');
}

//button.addEventListener('click', trackUserHandler);
