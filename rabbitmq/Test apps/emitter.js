const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', (err, con) => {
    if (err) {throw console.log(err)}
    con.createChannel((err, channel) => {
        if (err) {console.log(err)}
        const exchange = 'new'
        var msg = 'Hello World!';

        channel.assertExchange(exchange, 'direct', {
            durable: false
        })

        if (process.argv[2] === 'a'){
            channel.publish(exchange, 'first', Buffer.from(msg));
            console.log(" [x] Sent %s", msg);
        }
        else if (process.argv[2] === 'b'){
            channel.publish(exchange, 'second', Buffer.from(msg));
            console.log(" [x] Sent %s", msg);
        }
    })
})