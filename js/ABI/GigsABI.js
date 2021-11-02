var GigsAddress = "0x9383fB4D8302a17044D34ffbA924a15d9C6Db292";

var GigsABI = [
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
        internalType: "string",
        name: "gigID",
        type: "string",
      },
      {
        components: [
          {
            internalType: "address",
            name: "hirer",
            type: "address",
          },
          {
            internalType: "address",
            name: "freelancer",
            type: "address",
          },
          {
            components: [
              {
                internalType: "string",
                name: "jobID",
                type: "string",
              },
              {
                internalType: "uint256",
                name: "budget",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "title",
                type: "string",
              },
              {
                internalType: "string",
                name: "description",
                type: "string",
              },
              {
                internalType: "string[]",
                name: "skills",
                type: "string[]",
              },
              {
                internalType: "string",
                name: "location",
                type: "string",
              },
            ],
            internalType: "struct ReviewsContract.Job",
            name: "jobDetails",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "amountDeposited",
            type: "uint256",
          },
          {
            internalType: "enum GigsContract.Status",
            name: "status",
            type: "uint8",
          },
        ],
        indexed: false,
        internalType: "struct GigsContract.Gig",
        name: "gig",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "string",
        name: "msg",
        type: "string",
      },
    ],
    name: "CompleteGig",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "gigID",
        type: "string",
      },
      {
        components: [
          {
            internalType: "address",
            name: "hirer",
            type: "address",
          },
          {
            internalType: "address",
            name: "freelancer",
            type: "address",
          },
          {
            components: [
              {
                internalType: "string",
                name: "jobID",
                type: "string",
              },
              {
                internalType: "uint256",
                name: "budget",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "title",
                type: "string",
              },
              {
                internalType: "string",
                name: "description",
                type: "string",
              },
              {
                internalType: "string[]",
                name: "skills",
                type: "string[]",
              },
              {
                internalType: "string",
                name: "location",
                type: "string",
              },
            ],
            internalType: "struct ReviewsContract.Job",
            name: "jobDetails",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "amountDeposited",
            type: "uint256",
          },
          {
            internalType: "enum GigsContract.Status",
            name: "status",
            type: "uint8",
          },
        ],
        indexed: false,
        internalType: "struct GigsContract.Gig",
        name: "gig",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "string",
        name: "msg",
        type: "string",
      },
    ],
    name: "CreateGig",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "gigID",
        type: "string",
      },
      {
        components: [
          {
            internalType: "address",
            name: "hirer",
            type: "address",
          },
          {
            internalType: "address",
            name: "freelancer",
            type: "address",
          },
          {
            components: [
              {
                internalType: "string",
                name: "jobID",
                type: "string",
              },
              {
                internalType: "uint256",
                name: "budget",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "title",
                type: "string",
              },
              {
                internalType: "string",
                name: "description",
                type: "string",
              },
              {
                internalType: "string[]",
                name: "skills",
                type: "string[]",
              },
              {
                internalType: "string",
                name: "location",
                type: "string",
              },
            ],
            internalType: "struct ReviewsContract.Job",
            name: "jobDetails",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "amountDeposited",
            type: "uint256",
          },
          {
            internalType: "enum GigsContract.Status",
            name: "status",
            type: "uint8",
          },
        ],
        indexed: false,
        internalType: "struct GigsContract.Gig",
        name: "gig",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "string",
        name: "msg",
        type: "string",
      },
    ],
    name: "ResolveGig",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "gigID",
        type: "string",
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
            components: [
              {
                internalType: "enum ReviewsContract.Grade",
                name: "grading",
                type: "uint8",
              },
              {
                internalType: "enum ReviewsContract.Score",
                name: "overall",
                type: "uint8",
              },
              {
                internalType: "enum ReviewsContract.Score",
                name: "quality",
                type: "uint8",
              },
              {
                internalType: "enum ReviewsContract.Score",
                name: "communication",
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
          {
            internalType: "string",
            name: "comments",
            type: "string",
          },
          {
            components: [
              {
                internalType: "string",
                name: "jobID",
                type: "string",
              },
              {
                internalType: "uint256",
                name: "budget",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "title",
                type: "string",
              },
              {
                internalType: "string",
                name: "description",
                type: "string",
              },
              {
                internalType: "string[]",
                name: "skills",
                type: "string[]",
              },
              {
                internalType: "string",
                name: "location",
                type: "string",
              },
            ],
            internalType: "struct ReviewsContract.Job",
            name: "job",
            type: "tuple",
          },
        ],
        internalType: "struct ReviewsContract.Review",
        name: "reviewFromFL",
        type: "tuple",
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
            components: [
              {
                internalType: "enum ReviewsContract.Grade",
                name: "grading",
                type: "uint8",
              },
              {
                internalType: "enum ReviewsContract.Score",
                name: "overall",
                type: "uint8",
              },
              {
                internalType: "enum ReviewsContract.Score",
                name: "quality",
                type: "uint8",
              },
              {
                internalType: "enum ReviewsContract.Score",
                name: "communication",
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
          {
            internalType: "string",
            name: "comments",
            type: "string",
          },
          {
            components: [
              {
                internalType: "string",
                name: "jobID",
                type: "string",
              },
              {
                internalType: "uint256",
                name: "budget",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "title",
                type: "string",
              },
              {
                internalType: "string",
                name: "description",
                type: "string",
              },
              {
                internalType: "string[]",
                name: "skills",
                type: "string[]",
              },
              {
                internalType: "string",
                name: "location",
                type: "string",
              },
            ],
            internalType: "struct ReviewsContract.Job",
            name: "job",
            type: "tuple",
          },
        ],
        internalType: "struct ReviewsContract.Review",
        name: "reviewFromHR",
        type: "tuple",
      },
    ],
    name: "confirmGigDelivery",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "hirer",
            type: "address",
          },
          {
            internalType: "address",
            name: "freelancer",
            type: "address",
          },
          {
            components: [
              {
                internalType: "string",
                name: "jobID",
                type: "string",
              },
              {
                internalType: "uint256",
                name: "budget",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "title",
                type: "string",
              },
              {
                internalType: "string",
                name: "description",
                type: "string",
              },
              {
                internalType: "string[]",
                name: "skills",
                type: "string[]",
              },
              {
                internalType: "string",
                name: "location",
                type: "string",
              },
            ],
            internalType: "struct ReviewsContract.Job",
            name: "jobDetails",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "amountDeposited",
            type: "uint256",
          },
          {
            internalType: "enum GigsContract.Status",
            name: "status",
            type: "uint8",
          },
        ],
        internalType: "struct GigsContract.Gig",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "gigID",
        type: "string",
      },
      {
        components: [
          {
            internalType: "address",
            name: "hirer",
            type: "address",
          },
          {
            internalType: "address",
            name: "freelancer",
            type: "address",
          },
          {
            components: [
              {
                internalType: "string",
                name: "jobID",
                type: "string",
              },
              {
                internalType: "uint256",
                name: "budget",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "title",
                type: "string",
              },
              {
                internalType: "string",
                name: "description",
                type: "string",
              },
              {
                internalType: "string[]",
                name: "skills",
                type: "string[]",
              },
              {
                internalType: "string",
                name: "location",
                type: "string",
              },
            ],
            internalType: "struct ReviewsContract.Job",
            name: "jobDetails",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "amountDeposited",
            type: "uint256",
          },
          {
            internalType: "enum GigsContract.Status",
            name: "status",
            type: "uint8",
          },
        ],
        internalType: "struct GigsContract.Gig",
        name: "gigDetails",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "createGigContract",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "hirer",
            type: "address",
          },
          {
            internalType: "address",
            name: "freelancer",
            type: "address",
          },
          {
            components: [
              {
                internalType: "string",
                name: "jobID",
                type: "string",
              },
              {
                internalType: "uint256",
                name: "budget",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "title",
                type: "string",
              },
              {
                internalType: "string",
                name: "description",
                type: "string",
              },
              {
                internalType: "string[]",
                name: "skills",
                type: "string[]",
              },
              {
                internalType: "string",
                name: "location",
                type: "string",
              },
            ],
            internalType: "struct ReviewsContract.Job",
            name: "jobDetails",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "amountDeposited",
            type: "uint256",
          },
          {
            internalType: "enum GigsContract.Status",
            name: "status",
            type: "uint8",
          },
        ],
        internalType: "struct GigsContract.Gig",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amt",
        type: "uint256",
      },
    ],
    name: "depositWhiz",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
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
    name: "flGigIDs",
    outputs: [
      {
        internalType: "string",
        name: "",
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
        name: "fl",
        type: "address",
      },
    ],
    name: "getAllFreelancerGigs",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "hirer",
            type: "address",
          },
          {
            internalType: "address",
            name: "freelancer",
            type: "address",
          },
          {
            components: [
              {
                internalType: "string",
                name: "jobID",
                type: "string",
              },
              {
                internalType: "uint256",
                name: "budget",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "title",
                type: "string",
              },
              {
                internalType: "string",
                name: "description",
                type: "string",
              },
              {
                internalType: "string[]",
                name: "skills",
                type: "string[]",
              },
              {
                internalType: "string",
                name: "location",
                type: "string",
              },
            ],
            internalType: "struct ReviewsContract.Job",
            name: "jobDetails",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "amountDeposited",
            type: "uint256",
          },
          {
            internalType: "enum GigsContract.Status",
            name: "status",
            type: "uint8",
          },
        ],
        internalType: "struct GigsContract.Gig[]",
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
        name: "hr",
        type: "address",
      },
    ],
    name: "getAllHirerGigs",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "hirer",
            type: "address",
          },
          {
            internalType: "address",
            name: "freelancer",
            type: "address",
          },
          {
            components: [
              {
                internalType: "string",
                name: "jobID",
                type: "string",
              },
              {
                internalType: "uint256",
                name: "budget",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "title",
                type: "string",
              },
              {
                internalType: "string",
                name: "description",
                type: "string",
              },
              {
                internalType: "string[]",
                name: "skills",
                type: "string[]",
              },
              {
                internalType: "string",
                name: "location",
                type: "string",
              },
            ],
            internalType: "struct ReviewsContract.Job",
            name: "jobDetails",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "amountDeposited",
            type: "uint256",
          },
          {
            internalType: "enum GigsContract.Status",
            name: "status",
            type: "uint8",
          },
        ],
        internalType: "struct GigsContract.Gig[]",
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
        internalType: "string",
        name: "gigID",
        type: "string",
      },
    ],
    name: "getGigDetails",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "hirer",
            type: "address",
          },
          {
            internalType: "address",
            name: "freelancer",
            type: "address",
          },
          {
            components: [
              {
                internalType: "string",
                name: "jobID",
                type: "string",
              },
              {
                internalType: "uint256",
                name: "budget",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "title",
                type: "string",
              },
              {
                internalType: "string",
                name: "description",
                type: "string",
              },
              {
                internalType: "string[]",
                name: "skills",
                type: "string[]",
              },
              {
                internalType: "string",
                name: "location",
                type: "string",
              },
            ],
            internalType: "struct ReviewsContract.Job",
            name: "jobDetails",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "amountDeposited",
            type: "uint256",
          },
          {
            internalType: "enum GigsContract.Status",
            name: "status",
            type: "uint8",
          },
        ],
        internalType: "struct GigsContract.Gig",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "gig",
    outputs: [
      {
        internalType: "address",
        name: "hirer",
        type: "address",
      },
      {
        internalType: "address",
        name: "freelancer",
        type: "address",
      },
      {
        components: [
          {
            internalType: "string",
            name: "jobID",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "budget",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "title",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "string[]",
            name: "skills",
            type: "string[]",
          },
          {
            internalType: "string",
            name: "location",
            type: "string",
          },
        ],
        internalType: "struct ReviewsContract.Job",
        name: "jobDetails",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "amountDeposited",
        type: "uint256",
      },
      {
        internalType: "enum GigsContract.Status",
        name: "status",
        type: "uint8",
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
    name: "hrGigIDs",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "gigID",
        type: "string",
      },
    ],
    name: "resolveFundsToFrelancer",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "hirer",
            type: "address",
          },
          {
            internalType: "address",
            name: "freelancer",
            type: "address",
          },
          {
            components: [
              {
                internalType: "string",
                name: "jobID",
                type: "string",
              },
              {
                internalType: "uint256",
                name: "budget",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "title",
                type: "string",
              },
              {
                internalType: "string",
                name: "description",
                type: "string",
              },
              {
                internalType: "string[]",
                name: "skills",
                type: "string[]",
              },
              {
                internalType: "string",
                name: "location",
                type: "string",
              },
            ],
            internalType: "struct ReviewsContract.Job",
            name: "jobDetails",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "amountDeposited",
            type: "uint256",
          },
          {
            internalType: "enum GigsContract.Status",
            name: "status",
            type: "uint8",
          },
        ],
        internalType: "struct GigsContract.Gig",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "gigID",
        type: "string",
      },
    ],
    name: "resolveFundsToHirer",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "hirer",
            type: "address",
          },
          {
            internalType: "address",
            name: "freelancer",
            type: "address",
          },
          {
            components: [
              {
                internalType: "string",
                name: "jobID",
                type: "string",
              },
              {
                internalType: "uint256",
                name: "budget",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "title",
                type: "string",
              },
              {
                internalType: "string",
                name: "description",
                type: "string",
              },
              {
                internalType: "string[]",
                name: "skills",
                type: "string[]",
              },
              {
                internalType: "string",
                name: "location",
                type: "string",
              },
            ],
            internalType: "struct ReviewsContract.Job",
            name: "jobDetails",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "amountDeposited",
            type: "uint256",
          },
          {
            internalType: "enum GigsContract.Status",
            name: "status",
            type: "uint8",
          },
        ],
        internalType: "struct GigsContract.Gig",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "a",
        type: "address",
      },
    ],
    name: "setREVIEWSaddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "a",
        type: "address",
      },
    ],
    name: "setUSDCaddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "a",
        type: "address",
      },
    ],
    name: "setWHIZaddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amt",
        type: "uint256",
      },
    ],
    name: "setWHIZrewards",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalValueLocked",
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
    name: "whizRewards",
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
        internalType: "uint256",
        name: "amt",
        type: "uint256",
      },
    ],
    name: "withdrawWhiz",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];
