import getReply from "./util/getReply";

export default function handler(req, res) {
    const response = getReply(false)
    res.setHeader('Content-Type', 'application/json');
    res.json(response);
  }