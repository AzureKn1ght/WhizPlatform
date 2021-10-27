//GigsAddress = 0xefe959e84b1a4b7dd4bf6962a25ffb3e1191be4d;

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
        name: "hirer",
        type: "address",
      },
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
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "myGigs",
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
        name: "hirer",
        type: "address",
      },
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
        internalType: "address",
        name: "hirer",
        type: "address",
      },
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
