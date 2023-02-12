const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const qSchema = new Schema(
    {
        qIndex:{
            type: integer,
            
        }
    }
)