const { performance, PerformanceObserver } = require('perf_hooks');

const obs = new PerformanceObserver((items) => {
  console.log(items.getEntries()[0].duration, 'ms');
});
obs.observe({ entryTypes: ['measure'] });

performance.mark('start');
setTimeout(() => {
  performance.mark('end');
  performance.measure('MyOperation', 'start', 'end');
}, 500);
