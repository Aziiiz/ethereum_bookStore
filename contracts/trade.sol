pragma solidity >=0.4.22 <0.7.0;

contract FactoryContract {
    address[] public contracts;
    address public lastContractAddresses;


    event newPurchaseContract
    (
        address contractAddress
    );

    constructor() public
    {

    }

    function getContractcount()
    public
    constant
    returns(uint ContracCount)
    {
        return contracts.length;
    }

    function newPurchase(uint value, string  bookName, string  description, string  imageHash, string  privHash, string  dataHash)
    public
    returns(address NewContract)
    {
        Purchase c = new Purchase(address(msg.sender), value, bookName, description, imageHash, privHash, dataHash);
        contracts.push(c);
        lastContractAddresses = address(c);
        emit newPurchaseContract(c);
        return c;

    }

    function seePurchase(uint pos)
    public
    constant
    returns(address contractAddress)
    {
        return address(contracts[pos]);
    }
}
// child contract purchase
contract Purchase
{
    uint public price;
    uint public income;
    address public seller;
    address[] public buyerAddress;
    address public buyer;
    string public ipfsHash;
    string public preview;
    string public cover;
    string public name;
    string public text;


    // constructor for child contract
    constructor(address contractSeller, uint value, string memory bookName, string memory description, string memory imageHash, string memory privHash, string memory dataHash) public payable
    {
      seller = contractSeller;
      name = bookName;
      text = description;
      cover = imageHash;
      preview = privHash;
      ipfsHash = dataHash;
      price = value * 1000000000000000000;
    }
    // check condition
    modifier condition(bool _condition)
    {
      require(_condition);
      _;
    }
    // check condition
    modifier onlyBuyer()
    {
        (msg.sender == buyer);
        _;
    }
    // check condition
    modifier onlySeller()
    {
        (msg.sender == seller);
        _;
    }

    event ItemReceived();


    function confrimReceived() public
    //check condition whether buyer pays right amount
     condition(msg.value == price)
     payable
    {
        // emit event ItemReceived
        emit ItemReceived();
        // get buyer address
        buyer==msg.sender;
        // push buyer address to array list
        buyerAddress.push(buyer);
        // add price to income to calculate
        income += price;
        // transfer ether right away when  confirm function is called
        seller.transfer(address(this).balance);

    }
    // get count of buyer addresses
    function getBuyerCount() public constant returns(uint buyerList)
    {
        return buyerAddress.length;
    }

    // get earned ether amount
    function getIncome() public constant returns(uint etherEarned)
    {
        return income;
    }
}
