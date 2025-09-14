function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(1000).then(() => console.log('Done after 1s'));