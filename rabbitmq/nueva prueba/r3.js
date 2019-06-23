const amqp = require('amqplib/callback_api')

amqp.connect('amqp://localhost', (err, con) => {
    
    con.createChannel((err, channel) => {
        const exchange = 'log'
        const queue = 'c'
        channel.assertExchange(exchange, 'direct', {
            durable: false
        })
        channel.assertQueue(queue)
        process.argv.forEach((element, index) => {
            if (index != 0 && index != 1){
                channel.bindQueue(queue, exchange, element)
                channel.consume(queue, (msg) => {
                    if(msg.content) {
                        console.log(" [x] %s", msg.content.toString());
                        channel.ack(msg)
                      }
                  }, {
                    noAck: false
                  });
            }
        })
    })
})