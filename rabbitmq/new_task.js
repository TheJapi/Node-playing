const amqp = require('amqplib/callback_api')

amqp.connect('amqp://localhost', (err, con) => {
    if (err) {throw err}
    con.createChannel((err, ch) => {
        if (err) {throw err}
        const queue = 'task_queue';
        const msg = process.argv.slice(2).join(' ') || "Hello World!";
        ch.prefetch(1)
        ch.assertQueue(queue, {
            durable: true
        });
        ch.sendToQueue(queue, new Buffer(msg), {
            persistent: true
        });
        
        console.log(" [x] Sent '%s'", msg);
    })
})

