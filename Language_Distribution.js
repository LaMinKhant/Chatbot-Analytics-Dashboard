[
  {
    $addFields: {
      language: {
        $switch: {
          branches: [
            {
              case: {
                $regexMatch: {
                  input: "$message",
                  regex: "[က-႟]"
                }
              },
              then: "Myanmar"
            },
            {
              case: {
                $regexMatch: {
                  input: "$message",
                  regex: "[ก-๙]"
                }
              },
              then: "Thai"
            }
          ],
          default: "English"
        }
      }
    }
  }
]