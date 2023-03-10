const amqp = require('amqplib/callback_api');
const message = process.argv[2] || 'No message';

amqp.connect('amqp://guest:guest@localhost:5672', (error0, connection) => {
  if (error0) {
    throw error0;
  }

  connection.createChannel((error1, channel) => {
    if (error1) {
      throw error1;
    }
    const queue = 'first_queue';
    const msg = message;

    channel.assertQueue(queue, {
      durable: false
    });

    channel.sendToQueue(queue, Buffer.from(msg));
    console.log('[x] Sent %s', msg);
  });
  setTimeout(() => {
    connection.close();
    process.exit(0);
  }, 500);
  
});
