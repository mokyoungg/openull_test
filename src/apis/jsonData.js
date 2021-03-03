import axios from "axios";

export default axios.create({
  baseURL: "https://itunes.apple.com/us/rss/topalbums/limit=100/json",
});

//"https://itunes.apple.com/us/rss/topalbums/limit=100/json"
