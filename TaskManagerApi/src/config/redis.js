// src/config/redis.js

require('dotenv').config();

const { createClient } = require('redis');

const client = createClient({
  username: 'default',
  password: 'ljqDxxDzViUDnwkHtsmZD4tjEoHTzbEG',
  socket: {
    host: 'redis-11896.c52.us-east-1-4.ec2.redns.redis-cloud.com',
    port: 11896,
  },
});

client.on('error', (err) => console.error('Redis Client Error:', err));

async function connectRedis() {
  await client.connect();
  console.log('✅ Redis connected');
}

module.exports = { client, connectRedis };
