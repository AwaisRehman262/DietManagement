import mongoose,{model} from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({
    title: String,
    done:String
});

export const blogModel = model('blog',blogSchema)