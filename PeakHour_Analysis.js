[
  {
    $project: {
      formattedHour: {
        $dateToString: { format: "%H:00", date: "$timestamp" }
      },
      sortHour: { $hour: "$timestamp" }
    }
  },
  {
    $group: {
      _id: "$formattedHour",
      count: { $sum: 1 },
      sortOrder: { $first: "$sortHour" }
    }
  },
  { $sort: { sortOrder: 1 } }
]