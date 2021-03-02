import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3000/data/data.json",
});

//"https://itunes.apple.com/us/rss/topalbums/limit=100/json"
