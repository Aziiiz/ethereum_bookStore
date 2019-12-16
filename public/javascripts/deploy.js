
// set web3 provider in this case browser try to look up metamask
if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
  console.log("you are connected to metamask");
} else {
  console.log("install web3 provider");
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

// set metamask default account
web3.eth.defaultAccount = web3.eth.accounts[0];
var goo = web3.eth.defaultAccount;
console.log(goo);

// pruchase contract ABI code which is child of FactoryContract
//e-book contract // abi code// FactoryContract ABI code

var PurchaseContract = web3.eth.contract(tradePurchase);

var TradeContract = web3.eth.contract(tradeAbi);

/// both ABIs belongs to paperback book selling Smart contract
  var Purchase = web3.eth.contract(escrowPurchase);

  var EscrowContract = web3.eth.contract(escrowAbi);
        // Trade Contract address for e-book
        var StartTradeContract = TradeContract.at(trade);
        console.log(StartTradeContract);
        // Escrow contract address for paperback book
        var StartEscrowContract = EscrowContract.at(escrow);
        console.log(StartEscrowContract);


        /// listen to checkbox
    document.addEventListener('DOMContentLoaded', ()=> {
      var checkbox = document.querySelector('input[type="checkbox"]');
      // chenge checkbox status
      checkbox.addEventListener('change', () => {
        if(checkbox.checked){
        // if checkbox is checked run Escrow Contract
          console.log("checked");
          // hide book-upload input
          $('#boo').hide();
          // run setvalue function
          setvalue =  function (){
          var value = document.getElementById('price').value;
          console.log(value);
          var preview =  $('#prevHash').val();
          console.log(preview);
          var bookName = document.getElementById('bookName').value;
          console.log(bookName);
          var description = document.getElementById('desc').value;
          console.log(description);
          var image = $('#ipfsHash').val();
          console.log(image);
          // Escrow contract for paperback selling book
          StartEscrowContract.newPurchase(value, bookName, description, image, preview,(error, result) => {
            if(!error) {
              console.log(JSON.stringify(result));
            }
            else{
              console.log(error);
            }
          });

        }


        } else {

          // if checkbox is not checked
          // run Trade Contract for selling e-book

          console.log('not checked');
          // show book-upload input
            $('#boo').show();

                    setvalue =  function (){
                    var value = document.getElementById('price').value;
                    console.log(value);
                    var preview =  $('#prevHash').val();
                    console.log(preview);
                    var bookName = document.getElementById('bookName').value;
                    console.log(bookName);
                    var description = document.getElementById('desc').value;
                    console.log(description);
                    var image = $('#ipfsHash').val();
                    console.log(image);
                    var ipfsHash = $('#dataHash').val();
                    console.log(ipfsHash);
                    // Trade contract for selling e-books
                    StartTradeContract.newPurchase(value, bookName, description, image, preview, ipfsHash, (error, result) => {
                      if(!error) {
                        console.log(JSON.stringify(result));
                      }
                      else{
                        console.log(error);
                      }
                    });

                  }

        }
      })
    })
    var setvalue;
/// deploy.js -----
