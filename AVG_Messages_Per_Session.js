[
  {
    "$group": {
      "_id": "$sessionId",
      "messageCount": { "$sum": 1 }
    }
  },
  {
    "$group": {
      "_id": null,
      "avgMessagesPerSession": { "$avg": "$messageCount" }
    }
  }
]