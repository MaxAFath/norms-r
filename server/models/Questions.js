const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const qSchema = new Schema(
    {
        qIndex: {
            type: integer,
            require: true,
            unique: true
        },
        qPrompt: {
            type: String,
            require: true,
            unique: true
        },
        qAnswer: {
            type: String,
            require: true,
            unique: true
        },

    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

qSchema.methods.isCorrect = async function (qAnswer){
    return bcrypt.compare(qAnswer, this.qAnswer);
};

const Questions = model('Questions', qSchema);

module.exports = Questions;