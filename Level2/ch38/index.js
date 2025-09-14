function runMiddleware(middlewares, req, res) {
  let i = 0;
  function next() {
    const fn = middlewares[i++];
    if (fn) fn(req, res, next);
  }
  next();
}

const mws = [
  (req, res, next) => { console.log('m1'); next(); },
  (req, res, next) => { console.log('m2'); next(); },
  (req, res) => { console.log("end"); }
];
runMiddleware(mws, {}, {});
