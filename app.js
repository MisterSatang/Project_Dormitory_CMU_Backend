const express = require('express');
const morgan = require('morgan');
const app = express();

//create a server
app.listen(8000, () => {
console.log('Listening on port 8000');
});

const adminSettingRouter = require('./routes/adminSetting.js')
const studentRouter = require('./routes/student.js')
const domitoryRouter = require('./routes/dormitory.js')


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan('tiny'));

app.use('/adminSettings', adminSettingRouter);
app.use('/students', studentRouter);
app.use('/dormitories', domitoryRouter);

app.get('/', (req,res) => {
    res.sendStatus(204)
});
// app.use('/admin/settings', productRouter);

