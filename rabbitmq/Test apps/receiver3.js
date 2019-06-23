const amqp = require('amqplib/callback_api')

amqp.connect('amqp://localhost', (err, con) => {
    if (err) {throw err}
    con.createChannel((err, channel) => {
        if (err) {throw err}
        const exchange = 'new'
        channel.assertExchange(exchange, 'direct', {
            durable: false
          });
        process.argv.forEach((element, index) => {
            if (index != 0 && index != 1){
                channel.assertQueue('q1', {
                    durable: false
                })
                channel.bindQueue('q1', exchange, element)
                channel.consume('q1', (msg) => {
                    if(msg.content) {
                        console.log(" [x] %s", msg.content.toString());
                      }
                  }, {
                    noAck: false
                  });
            }
        })
    })
})