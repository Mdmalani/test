const express = require('express')
const app = express()
const port = process.env.PORT||5000
const path=require('path')

app.get('/test', (req, res) => res.send(
    {
        "message":'Hello World!'
    }
    ))

    
/* if(process.env.NODE_ENV==="production")
{
    app.use(express.static('client/build'))
    const path=require('path')
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,
            'client','build','index.html'
        ))
    })
} */

// if(process.env.NODE_ENV === 'production'){
//     //set a static folder
//     app.use(express.static('client/build'));
//     app.get('*', (req,res)=>{
//     res.sendFile(path.resolve(__dirname, 'client' , 'build' , 'index.html'));
//     });
// }
app.use(express.static(path.join(__dirname, '../build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build'))
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))