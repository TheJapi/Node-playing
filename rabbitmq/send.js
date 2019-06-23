const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', (err, con) => {
    if (err) { throw err;}
    con.createChannel((err ,ch) => {
        if (err) {throw err}
        const queue = 'hello'
        const msg = 'Hello World'

        ch.assertQueue(queue, { //suscribir
            durable: false
        });

        ch.sendToQueue(queue, Buffer.from(msg));
        console.log("[x] Sent %s", msg)
    });
});