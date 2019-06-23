const request = require('request');

//simplest message
const newMessage = () =>{
    request.post({
        url :'https://hooks.slack.com/services/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',
        body: {"text":"Hello, World!"},
        json: true
        }, function(err, res, body){
            console.log(body);
        }
    )
}

//using message features (can be tested in message builder)
const fancy = () =>{
    request.post({
        url :'https://hooks.slack.com/services/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',
        body: {"text":"Hello, World!",
        "attachments": [
            {
                "fallback": "Plan a vacation",
                "author_name": "Owner: rdesoto",
                "title": "Plan a vacation",
                "text": "I've been working too hard, it's time for a break.",
                "actions": [
                    {
                        "name": "action",
                        "type": "button",
                        "text": "Complete this task",
                        "style": "",
                        "value": "complete"
                    },
                    {
                        "name": "tags_list",
                        "type": "select",
                        "text": "Add a tag...",
                        "data_source": "static",
                        "options": [
                            {
                                "text": "Launch Blocking",
                                "value": "launch-blocking"
                            },
                            {
                                "text": "Enhancement",
                                "value": "enhancement"
                            },
                            {
                                "text": "Bug",
                                "value": "bug"
                            }
                        ]
                    }
                ]
            }
        ]
        },
        json: true
        }, function(err, res, body){
            console.log(body);
        }
    )
}

module.exports = {
    fancy: fancy,
    newly: newMessage
}