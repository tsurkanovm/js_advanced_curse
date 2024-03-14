const button = document.querySelector('button');
const output = document.querySelector('p');

const getLocation = () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
      posData => {
          console.dir(posData);
        resolve(posData);
      },
      errorMsgObj => {
        reject(errorMsgObj);
      }
  );
})};

async function trackUserHandlerPromiseAsyncBy() {
    try {
        await getLocation();
        console.log('Finality-fatality!!');
    } catch (error) {
        console.log(error.message);
    }
    // this code invokes after getLocation, with pure Promises (uses then for getLocation this part invokes right away)
    console.log('Not a async part...')
}

trackUserHandlerPromiseAsyncBy();
console.log('Run ... ');

//button.addEventListener('click', trackUserHandlerPromiseAsyncBy);
