/*
this js file has abi codes of both deployed contracts including
child contracts ABIs
what is more FactoryContract deployed addreess also.
*/


// paperback-book FactoryContract address and ABIs
const  escrowAbi = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "value",
        "type": "uint256"
      },
      {
        "name": "bookName",
        "type": "string"
      },
      {
        "name": "description",
        "type": "string"
      },
      {
        "name": "imgHash",
        "type": "string"
      },
      {
        "name": "dataHash",
        "type": "string"
      }
    ],
    "name": "newPurchase",
    "outputs": [
      {
        "name": "newContract",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "contractAddress",
        "type": "address"
      }
    ],
    "name": "newPurchaseContract",
    "type": "event"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "contracts",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getContractCount",
    "outputs": [
      {
        "name": "contractCount",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "lastContractAddress",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "pos",
        "type": "uint256"
      }
    ],
    "name": "seePurchase",
    "outputs": [
      {
        "name": "contractAddress",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];

const escrowPurchase = [
          {
          "constant": true,
          "inputs": [],
          "name": "name",
          "outputs": [
          {
            "name": "",
            "type": "string"
          }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
          },
          {
          "constant": true,
          "inputs": [],
          "name": "seller",
          "outputs": [
          {
            "name": "",
            "type": "address"
          }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
          },
          {
          "constant": true,
          "inputs": [],
          "name": "text",
          "outputs": [
          {
            "name": "",
            "type": "string"
          }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
          },
          {
          "constant": false,
          "inputs": [],
          "name": "abort",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
          },
          {
          "constant": true,
          "inputs": [],
          "name": "buyer",
          "outputs": [
          {
            "name": "",
            "type": "address"
          }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
          },
          {
          "constant": false,
          "inputs": [],
          "name": "confirmReceived",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
          },
          {
          "constant": true,
          "inputs": [],
          "name": "price",
          "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
          },
          {
          "constant": true,
          "inputs": [],
          "name": "state",
          "outputs": [
          {
            "name": "",
            "type": "uint8"
          }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
          },
          {
          "constant": true,
          "inputs": [],
          "name": "ipfsHash",
          "outputs": [
          {
            "name": "",
            "type": "string"
          }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
          },
          {
          "constant": false,
          "inputs": [],
          "name": "confirmPurchase",
          "outputs": [],
          "payable": true,
          "stateMutability": "payable",
          "type": "function"
          },
          {
          "constant": false,
          "inputs": [],
          "name": "cancel",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
          },
          {
          "constant": true,
          "inputs": [],
          "name": "image",
          "outputs": [
          {
            "name": "",
            "type": "string"
          }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
          },
          {
          "inputs": [
          {
            "name": "contractSeller",
            "type": "address"
          },
          {
            "name": "value",
            "type": "uint256"
          },
          {
            "name": "bookName",
            "type": "string"
          },
          {
            "name": "description",
            "type": "string"
          },
          {
            "name": "imgHash",
            "type": "string"
          },
          {
            "name": "dataHash",
            "type": "string"
          }
          ],
          "payable": true,
          "stateMutability": "payable",
          "type": "constructor"
          },
          {
          "anonymous": false,
          "inputs": [],
          "name": "Aborted",
          "type": "event"
          },
          {
          "anonymous": false,
          "inputs": [],
          "name": "PurchaseConfirmed",
          "type": "event"
          },
          {
          "anonymous": false,
          "inputs": [],
          "name": "ItemReceived",
          "type": "event"
          }
          ];


const escrow = '0xE9E1Bf8D4C132670DE0B7fC8764a7faa6828121C';

// e-book FactoryContract abis and cotract address





const tradeAbi = [
              	{
              		"constant": false,
              		"inputs": [
              			{
              				"name": "value",
              				"type": "uint256"
              			},
              			{
              				"name": "bookName",
              				"type": "string"
              			},
              			{
              				"name": "description",
              				"type": "string"
              			},
              			{
              				"name": "imageHash",
              				"type": "string"
              			},
              			{
              				"name": "privHash",
              				"type": "string"
              			},
              			{
              				"name": "dataHash",
              				"type": "string"
              			}
              		],
              		"name": "newPurchase",
              		"outputs": [
              			{
              				"name": "NewContract",
              				"type": "address"
              			}
              		],
              		"payable": false,
              		"stateMutability": "nonpayable",
              		"type": "function"
              	},
              	{
              		"inputs": [],
              		"payable": false,
              		"stateMutability": "nonpayable",
              		"type": "constructor"
              	},
              	{
              		"anonymous": false,
              		"inputs": [
              			{
              				"indexed": false,
              				"name": "contractAddress",
              				"type": "address"
              			}
              		],
              		"name": "newPurchaseContract",
              		"type": "event"
              	},
              	{
              		"constant": true,
              		"inputs": [
              			{
              				"name": "",
              				"type": "uint256"
              			}
              		],
              		"name": "contracts",
              		"outputs": [
              			{
              				"name": "",
              				"type": "address"
              			}
              		],
              		"payable": false,
              		"stateMutability": "view",
              		"type": "function"
              	},
              	{
              		"constant": true,
              		"inputs": [],
              		"name": "getContractcount",
              		"outputs": [
              			{
              				"name": "ContracCount",
              				"type": "uint256"
              			}
              		],
              		"payable": false,
              		"stateMutability": "view",
              		"type": "function"
              	},
              	{
              		"constant": true,
              		"inputs": [],
              		"name": "lastContractAddresses",
              		"outputs": [
              			{
              				"name": "",
              				"type": "address"
              			}
              		],
              		"payable": false,
              		"stateMutability": "view",
              		"type": "function"
              	},
              	{
              		"constant": true,
              		"inputs": [
              			{
              				"name": "pos",
              				"type": "uint256"
              			}
              		],
              		"name": "seePurchase",
              		"outputs": [
              			{
              				"name": "contractAddress",
              				"type": "address"
              			}
              		],
              		"payable": false,
              		"stateMutability": "view",
              		"type": "function"
              	}
              ];


const tradePurchase = [
        {
          "constant": true,
          "inputs": [],
          "name": "name",
          "outputs": [
            {
              "name": "",
              "type": "string"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "seller",
          "outputs": [
            {
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "text",
          "outputs": [
            {
              "name": "",
              "type": "string"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "buyer",
          "outputs": [
            {
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "income",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [],
          "name": "confrimReceived",
          "outputs": [],
          "payable": true,
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "getBuyerCount",
          "outputs": [
            {
              "name": "buyerList",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "price",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "buyerAddress",
          "outputs": [
            {
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "ipfsHash",
          "outputs": [
            {
              "name": "",
              "type": "string"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "cover",
          "outputs": [
            {
              "name": "",
              "type": "string"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "preview",
          "outputs": [
            {
              "name": "",
              "type": "string"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "getIncome",
          "outputs": [
            {
              "name": "etherEarned",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "name": "contractSeller",
              "type": "address"
            },
            {
              "name": "value",
              "type": "uint256"
            },
            {
              "name": "bookName",
              "type": "string"
            },
            {
              "name": "description",
              "type": "string"
            },
            {
              "name": "imageHash",
              "type": "string"
            },
            {
              "name": "privHash",
              "type": "string"
            },
            {
              "name": "dataHash",
              "type": "string"
            }
          ],
          "payable": true,
          "stateMutability": "payable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [],
          "name": "ItemReceived",
          "type": "event"
        }
      ];

const trade = '0x604b6ba0D6AFbc7dEc8213132b032874de44b741';
