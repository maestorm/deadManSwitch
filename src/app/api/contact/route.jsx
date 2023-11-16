const dotenv = require('dotenv');
dotenv.config({path:'./config/config.env'}); 

export async function POST(req) {
    const formData = await req.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    //Creating an app from express
    const app = express();
    
    //Using express.json to get request of json data
    app.use(express.json());

    const mailjet = require('node-mailjet').apiConnect(
        process.env.MAILJET_API_KEY,
        process.env.MAILJET_API_SECRET
    )
    const request = mailjet.post('send', { version: 'v3.1' }).request({
        Messages: [{
            From: {
                Email: process.env.MAILJET_API_EMAIL,
                Name: name,
            },
            To: [{
                Email: email,
                Name: 'dear customer'
            }],
            Subject: 'Your legacy of dead man switch',
            TextPart: 'Email content (message).',
            HtmlPart: '<h3>Dear passenger, welcome to <a href="https://www.mailjet.com/">Mailjet</a>!<br />May the delivery force be with you!'
        }]
    })
    request.then(result => {
        console.log(result.body);
    }).catch(err => {
        console.log(err);
    })
}
