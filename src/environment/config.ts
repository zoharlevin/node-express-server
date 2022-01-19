import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
    path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`)
});

console.log(path.resolve(__dirname, `${process.env.NODE_ENV}.env`))

export default {
    nodeEnv : process.env.NODE_ENV || 'development',
    host : process.env.HOST || 'localhost',
    port : process.env.PORT || 3000
}