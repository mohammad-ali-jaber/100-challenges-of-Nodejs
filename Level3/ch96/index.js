const { z } = require('zod');
const dotenv = require('dotenv');

dotenv.config();

const envSchema = z.object({
  PORT: z.string().default('3000')
});

const env = envSchema.parse(process.env);

console.log(env.PORT);
