var abi = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "reviewerAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "revieweeAddress",
        type: "address",
      },
      {
        components: [
          { internalType: "uint256", name: "reviewID", type: "uint256" },
          { internalType: "address", name: "reviewer", type: "address" },
          { internalType: "address", name: "reviewee", type: "address" },
          {
            components: [
              {
                internalType: "enum ReviewsContract.Score",
                name: "overallRating",
                type: "uint8",
              },
              {
                internalType: "enum ReviewsContract.Score",
                name: "jobDescription",
                type: "uint8",
              },
              {
                internalType: "enum ReviewsContract.Score",
                name: "communication",
                type: "uint8",
              },
              {
                internalType: "enum ReviewsContract.Score",
                name: "workQuality",
                type: "uint8",
              },
              {
                internalType: "enum ReviewsContract.Score",
                name: "timeliness",
                type: "uint8",
              },
            ],
            internalType: "struct ReviewsContract.Rating",
            name: "ratings",
            type: "tuple",
          },
          { internalType: "string", name: "comments", type: "string" },
          {
            components: [
              { internalType: "string", name: "jobID", type: "string" },
              { internalType: "uint256", name: "budget", type: "uint256" },
              { internalType: "string", name: "title", type: "string" },
              { internalType: "string", name: "description", type: "string" },
              { internalType: "string[]", name: "skills", type: "string[]" },
              { internalType: "string", name: "location", type: "string" },
            ],
            internalType: "struct ReviewsContract.Job",
            name: "job",
            type: "tuple",
          },
        ],
        indexed: false,
        internalType: "struct ReviewsContract.Review",
        name: "review",
        type: "tuple",
      },
    ],
    name: "Add",
    type: "event",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    name: "__receivedReviews",
    outputs: [
      { internalType: "uint256", name: "reviewID", type: "uint256" },
      { internalType: "address", name: "reviewer", type: "address" },
      { internalType: "address", name: "reviewee", type: "address" },
      {
        components: [
          {
            internalType: "enum ReviewsContract.Score",
            name: "overallRating",
            type: "uint8",
          },
          {
            internalType: "enum ReviewsContract.Score",
            name: "jobDescription",
            type: "uint8",
          },
          {
            internalType: "enum ReviewsContract.Score",
            name: "communication",
            type: "uint8",
          },
          {
            internalType: "enum ReviewsContract.Score",
            name: "workQuality",
            type: "uint8",
          },
          {
            internalType: "enum ReviewsContract.Score",
            name: "timeliness",
            type: "uint8",
          },
        ],
        internalType: "struct ReviewsContract.Rating",
        name: "ratings",
        type: "tuple",
      },
      { internalType: "string", name: "comments", type: "string" },
      {
        components: [
          { internalType: "string", name: "jobID", type: "string" },
          { internalType: "uint256", name: "budget", type: "uint256" },
          { internalType: "string", name: "title", type: "string" },
          { internalType: "string", name: "description", type: "string" },
          { internalType: "string[]", name: "skills", type: "string[]" },
          { internalType: "string", name: "location", type: "string" },
        ],
        internalType: "struct ReviewsContract.Job",
        name: "job",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    name: "__writtenReviews",
    outputs: [
      { internalType: "uint256", name: "reviewID", type: "uint256" },
      { internalType: "address", name: "reviewer", type: "address" },
      { internalType: "address", name: "reviewee", type: "address" },
      {
        components: [
          {
            internalType: "enum ReviewsContract.Score",
            name: "overallRating",
            type: "uint8",
          },
          {
            internalType: "enum ReviewsContract.Score",
            name: "jobDescription",
            type: "uint8",
          },
          {
            internalType: "enum ReviewsContract.Score",
            name: "communication",
            type: "uint8",
          },
          {
            internalType: "enum ReviewsContract.Score",
            name: "workQuality",
            type: "uint8",
          },
          {
            internalType: "enum ReviewsContract.Score",
            name: "timeliness",
            type: "uint8",
          },
        ],
        internalType: "struct ReviewsContract.Rating",
        name: "ratings",
        type: "tuple",
      },
      { internalType: "string", name: "comments", type: "string" },
      {
        components: [
          { internalType: "string", name: "jobID", type: "string" },
          { internalType: "uint256", name: "budget", type: "uint256" },
          { internalType: "string", name: "title", type: "string" },
          { internalType: "string", name: "description", type: "string" },
          { internalType: "string[]", name: "skills", type: "string[]" },
          { internalType: "string", name: "location", type: "string" },
        ],
        internalType: "struct ReviewsContract.Job",
        name: "job",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          { internalType: "uint256", name: "reviewID", type: "uint256" },
          { internalType: "address", name: "reviewer", type: "address" },
          { internalType: "address", name: "reviewee", type: "address" },
          {
            components: [
              {
                internalType: "enum ReviewsContract.Score",
                name: "overallRating",
                type: "uint8",
              },
              {
                internalType: "enum ReviewsContract.Score",
                name: "jobDescription",
                type: "uint8",
              },
              {
                internalType: "enum ReviewsContract.Score",
                name: "communication",
                type: "uint8",
              },
              {
                internalType: "enum ReviewsContract.Score",
                name: "workQuality",
                type: "uint8",
              },
              {
                internalType: "enum ReviewsContract.Score",
                name: "timeliness",
                type: "uint8",
              },
            ],
            internalType: "struct ReviewsContract.Rating",
            name: "ratings",
            type: "tuple",
          },
          { internalType: "string", name: "comments", type: "string" },
          {
            components: [
              { internalType: "string", name: "jobID", type: "string" },
              { internalType: "uint256", name: "budget", type: "uint256" },
              { internalType: "string", name: "title", type: "string" },
              { internalType: "string", name: "description", type: "string" },
              { internalType: "string[]", name: "skills", type: "string[]" },
              { internalType: "string", name: "location", type: "string" },
            ],
            internalType: "struct ReviewsContract.Job",
            name: "job",
            type: "tuple",
          },
        ],
        internalType: "struct ReviewsContract.Review",
        name: "review",
        type: "tuple",
      },
    ],
    name: "addReview",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "reviewOwner", type: "address" }],
    name: "getAllReceivedReviews",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "reviewID", type: "uint256" },
          { internalType: "address", name: "reviewer", type: "address" },
          { internalType: "address", name: "reviewee", type: "address" },
          {
            components: [
              {
                internalType: "enum ReviewsContract.Score",
                name: "overallRating",
                type: "uint8",
              },
              {
                internalType: "enum ReviewsContract.Score",
                name: "jobDescription",
                type: "uint8",
              },
              {
                internalType: "enum ReviewsContract.Score",
                name: "communication",
                type: "uint8",
              },
              {
                internalType: "enum ReviewsContract.Score",
                name: "workQuality",
                type: "uint8",
              },
              {
                internalType: "enum ReviewsContract.Score",
                name: "timeliness",
                type: "uint8",
              },
            ],
            internalType: "struct ReviewsContract.Rating",
            name: "ratings",
            type: "tuple",
          },
          { internalType: "string", name: "comments", type: "string" },
          {
            components: [
              { internalType: "string", name: "jobID", type: "string" },
              { internalType: "uint256", name: "budget", type: "uint256" },
              { internalType: "string", name: "title", type: "string" },
              { internalType: "string", name: "description", type: "string" },
              { internalType: "string[]", name: "skills", type: "string[]" },
              { internalType: "string", name: "location", type: "string" },
            ],
            internalType: "struct ReviewsContract.Job",
            name: "job",
            type: "tuple",
          },
        ],
        internalType: "struct ReviewsContract.Review[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "reviewOwner", type: "address" }],
    name: "getAllWrittenReviews",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "reviewID", type: "uint256" },
          { internalType: "address", name: "reviewer", type: "address" },
          { internalType: "address", name: "reviewee", type: "address" },
          {
            components: [
              {
                internalType: "enum ReviewsContract.Score",
                name: "overallRating",
                type: "uint8",
              },
              {
                internalType: "enum ReviewsContract.Score",
                name: "jobDescription",
                type: "uint8",
              },
              {
                internalType: "enum ReviewsContract.Score",
                name: "communication",
                type: "uint8",
              },
              {
                internalType: "enum ReviewsContract.Score",
                name: "workQuality",
                type: "uint8",
              },
              {
                internalType: "enum ReviewsContract.Score",
                name: "timeliness",
                type: "uint8",
              },
            ],
            internalType: "struct ReviewsContract.Rating",
            name: "ratings",
            type: "tuple",
          },
          { internalType: "string", name: "comments", type: "string" },
          {
            components: [
              { internalType: "string", name: "jobID", type: "string" },
              { internalType: "uint256", name: "budget", type: "uint256" },
              { internalType: "string", name: "title", type: "string" },
              { internalType: "string", name: "description", type: "string" },
              { internalType: "string[]", name: "skills", type: "string[]" },
              { internalType: "string", name: "location", type: "string" },
            ],
            internalType: "struct ReviewsContract.Job",
            name: "job",
            type: "tuple",
          },
        ],
        internalType: "struct ReviewsContract.Review[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "reviewOwner", type: "address" }],
    name: "getNoOfReceivedReviews",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "reviewOwner", type: "address" }],
    name: "getNoOfWrittenReviews",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalReviewsCounter",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
];
