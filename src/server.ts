import * as express from 'express'
import * as bodyParser from 'body-parser'

const app: express.Application = express()
const address: string = "0.0.0.0:5000"

app.use(bodyParser.json())

app.get('/', function (req: express.Request, res: express.Response) {
    res.send('Hello World!')
})

app.listen(5000, function () {
    console.log(`starting app on: ${address}`)
})