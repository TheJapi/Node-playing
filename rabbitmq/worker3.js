const amqp = require('amqplib/callback_api')

amqp.connect('amqp://localhost', (err, con) => {
    if (err) {throw err}
    con.createChannel((err, ch) => {
        if (err) {throw err}
        var queue = 'task_queue';

        ch.consume(queue, (msg) => {
   
            const secs = msg.content.toString().split('.').length - 1;

            console.log(" [x] Received %s", msg.content.toString());
            console.log(" [x] Done");
            ch.ack(msg)
        }, {
                noAck: false
            });
    })
})