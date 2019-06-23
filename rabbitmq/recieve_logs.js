var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', (err, con) => {
  if (err) {
    throw err;
  }
  con.createChannel((err, channel) => {
    if (err) {
      throw err;
    }
    var exchange = 'logs';

    channel.assertExchange(exchange, 'fanout', {
      durable: false
    });

    channel.assertQueue('', { //al poner vacio, se debe recibir la cola mediante un callback
      exclusive: true
    }, (err, q) => {
      if (err) {
        throw err;
      }
      console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q.queue);
      channel.bindQueue(q.queue, exchange, '');

      channel.consume(q.queue, function(msg) {
        if(msg.content) {
            console.log(" [x] %s", msg.content.toString());
          }
      }, {
        noAck: true
      });
    });
  });
});