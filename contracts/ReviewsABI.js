var abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
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
          {
            internalType: "uint256",
            name: "reviewID",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "reviewer",
            type: "address",
          },
          {
            internalType: "address",
            name: "reviewee",
            type: "address",
          },
          {
            internalType: "string",
            name: "comments",
            type: "string",
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
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "__receivedReviews",
    outputs: [
      {
        internalType: "uint256",
        name: "reviewID",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "reviewer",
        type: "address",
      },
      {
        internalType: "address",
        name: "reviewee",
        type: "address",
      },
      {
        internalType: "string",
        name: "comments",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "__writtenReviews",
    outputs: [
      {
        internalType: "uint256",
        name: "reviewID",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "reviewer",
        type: "address",
      },
      {
        internalType: "address",
        name: "reviewee",
        type: "address",
      },
      {
        internalType: "string",
        name: "comments",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "reviewID",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "reviewer",
            type: "address",
          },
          {
            internalType: "address",
            name: "reviewee",
            type: "address",
          },
          {
            internalType: "string",
            name: "comments",
            type: "string",
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
    inputs: [
      {
        internalType: "address",
        name: "reviewOwner",
        type: "address",
      },
    ],
    name: "getAllReceivedReviews",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "reviewID",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "reviewer",
            type: "address",
          },
          {
            internalType: "address",
            name: "reviewee",
            type: "address",
          },
          {
            internalType: "string",
            name: "comments",
            type: "string",
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
    inputs: [
      {
        internalType: "address",
        name: "reviewOwner",
        type: "address",
      },
    ],
    name: "getAllWrittenReviews",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "reviewID",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "reviewer",
            type: "address",
          },
          {
            internalType: "address",
            name: "reviewee",
            type: "address",
          },
          {
            internalType: "string",
            name: "comments",
            type: "string",
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
    inputs: [
      {
        internalType: "address",
        name: "reviewOwner",
        type: "address",
      },
    ],
    name: "getNoOfReceivedReviews",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "reviewOwner",
        type: "address",
      },
    ],
    name: "getNoOfWrittenReviews",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalReviewsCounter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
