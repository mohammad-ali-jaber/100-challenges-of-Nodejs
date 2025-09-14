require('dotenv').config();

const env = process.env.NODE_ENV;
if (!['dev','test','prod'].includes(env)) {
  throw new Error('NODE_ENV must be dev/test/prod');
}
console.log('Loaded config for', env);
