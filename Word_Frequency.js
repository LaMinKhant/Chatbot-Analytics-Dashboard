[
  { "$project": { "words": { "$split": ["$message", " "] } } },

  { "$unwind": "$words" },
  
  {
    "$group": {
      "_id": { "$toLower": "$words" },
      "count": { "$sum": 1 }
    }
  },

  { "$match": { "count": { "$gt": 1 } } } 
]