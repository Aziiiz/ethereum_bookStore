pragma solidity >=0.4.22 <0.7.0;

contract FactoryContract {
	address[] public contracts;
    address public lastContractAddress;

    event newPurchaseContract(
       address contractAddress
    );

	constructor()
		public
	{

	}

	function getContractCount()
		public
		constant
		returns(uint contractCount)
	{
		return contracts.length;
	}

	// deploy a new purchase contract
	// request all data for contract
	function newPurchase(uint value, string bookName, string description, string imgHash, string dataHash)
		public
		returns(address newContract)
	{

		Purchase c = new Purchase(address(msg.sender),value, bookName, description, imgHash, dataHash);
		contracts.push(c);
		lastContractAddress = address(c);
		emit newPurchaseContract(c);
		return c;
	}

	// see contract address by position
	function seePurchase(uint pos)
		public
		constant
		returns(address contractAddress)
	{
		return address(contracts[pos]);
	}
}

contract Purchase {
	uint public price;
	address public seller;
	address public buyer;
	string public ipfsHash;
	string public image;
	string public name;
	string public text;
	enum State { Created, Locked, Inactive }
	State public state;


    // price = value * 1000000000000000000 it means
    // default user value input equals to wei
    // we need to convert from wei to ether
	constructor(address contractSeller, uint value, string bookName, string description, string imgHash, string dataHash) public payable {
		seller = contractSeller;
		name = bookName;
		text = description;
		image = imgHash;
		ipfsHash = dataHash;
		price = value * 1000000000000000000;
	}

	modifier condition(bool _condition) {
		require(_condition);
		_;
	}

	modifier onlyBuyer() {
		require(msg.sender == buyer);
		_;
	}

	modifier onlySeller() {
		require(msg.sender == seller);
		_;
	}

	modifier inState(State _state) {
		require(state == _state);
		_;
	}

	event Aborted();
	event PurchaseConfirmed();
	event ItemReceived();

	/// Abort the purchase and reclaim the ether.
	/// Can only be called by the seller before
	/// the contract is locked.
	function abort()
		public
		onlySeller
		inState(State.Created)
	{
		emit Aborted();
		state = State.Created;
		seller.transfer(address(this).balance);
	}
	// cancel purchase reclaim ether.
	// can only be called by the buyer before
	// confirmReceived called.
	function cancel()
	    public
	    onlyBuyer
	   inState(State.Locked)
	{
	    emit Aborted();
	    state = State.Created;
	    buyer.transfer(price);

	}


    // confirmPurchse see msg.value should be
    // equal to price
    // otherwise transaction will give error
	function confirmPurchase()
		public
		inState(State.Created)
		condition(msg.value == price)
		payable
	{
		emit PurchaseConfirmed();
		buyer = msg.sender;
	   state = State.Locked;
	}

	/// Confirm that you (the buyer) received the item.
	/// This will release the locked ether.
	function confirmReceived()
		public
		onlyBuyer
	//	inState(State.Avaiable)
	{
		emit ItemReceived();
		// It is important to change the state first because
		// otherwise, the contracts called using `send` below
		// can call in again here.
	    state = State.Inactive;


		// block the refund - the withdraw pattern should be used.
		// this function called after buyer receives bookName
		// and seller gets deposited money
		seller.transfer(address(this).balance);
	}
}
