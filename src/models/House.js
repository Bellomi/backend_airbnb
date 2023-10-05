import { Schema, model } from "mongoose";

const HouseSchema = new Schema({
  thumbnail: String, //string pq o que vai ficar armazenado no banco é o caminho e nao a imagem.
  description: String,
  price: Number,
  location: String,
  status: Boolean,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
}, {
    toJSON: {
      virtuals: true
    }
  });

  HouseSchema.virtual('thumbnail_url').get(function(){
    return `http://localhost:3333/files/${this.thumbnail}`;
  })

  export default model('House', HouseSchema);