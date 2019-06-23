const amqp = require('amqplib/callback_api')

amqp.connect('amqp://localhost', (err, con) => {
    con.createChannel((err, channel) => {
        const exchange = 'log'

        channel.assertExchange(exchange, 'direct',{
            durable: false
        })
        let i = 1
        setInterval(() => {
            
            channel.publish(exchange, process.argv[2] , Buffer.from(`Hello, ${i}`))
            i++
        }, 2000)
        
        
        
    })
})