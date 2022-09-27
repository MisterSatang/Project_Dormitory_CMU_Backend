const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

//create a server
app.listen(8000, () => {
console.log('Listening on port 8000');
});

const adminSettingRouter = require('./routes/adminSetting.js')
const studentRouter = require('./routes/student.js')
const domitoryRouter = require('./routes/dormitory.js')
const roomsRouter = require('./routes/rooms.js')

app.use(morgan('tiny'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.use('/adminSettings', adminSettingRouter);
app.use('/students', studentRouter);
app.use('/dormitories', domitoryRouter);
app.use('/rooms', roomsRouter);

app.get('/', (req,res) => {
    res.sendStatus(204)
});
// app.use('/admin/settings', productRouter);

