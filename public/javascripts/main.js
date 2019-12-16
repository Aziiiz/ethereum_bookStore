
if(typeof web3 !== 'undefined')
{
  web3 = new Web3(web3.currentProvider);
  console.log('you are connected to matamask');
}else
{
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  console.log('please install metamask');
}

web3.eth.defaultAccount = web3.eth.accounts[0];
var myAccount = web3.eth.defaultAccount;



// Trade contract
var PurchaseContract = web3.eth.contract(tradePurchase);
var TradeContract = web3.eth.contract(tradeAbi);

var EscrowPurchase = web3.eth.contract(escrowPurchase);
var EscrowContract = web3.eth.contract(escrowAbi);
var StartEscrow = EscrowContract.at(escrow);
console.log(StartEscrow);
var StartTrade = TradeContract.at(trade);
console.log(StartTrade);





            //render contracts by its type:
            document.addEventListener('DOMContentLoaded', () => {
              var checkbox = document.querySelector('input[type="checkbox"]').checked;
            console.log(checkbox);
               checkbox = document.querySelector('input[type="checkbox"]');

              checkbox.addEventListener('change', () => {
                if(checkbox.checked) {


                //  console.log('Checked');
                  StartEscrow.getContractCount(function(error, result){
                    if(!error){


                        var  log = result;
                          const loopFor = async (log) => {

                        $("#block").empty();
                        for (var books = 0; books<log; books++){
                          const i = books
                          await  StartEscrow.contracts (i, async function(error, result){
                          //  console.log(i);
                          if(!error){
                          //  console.log("cont addr ["+[result]+"]");
                             console.log(result);
                             $('<div>',{"class": 'product-card', "id": 'product-card'+i}).appendTo($(".block"));
                             $('<div>', {"class": 'badge',"id": 'badge'+i}).appendTo($("#product-card"+i));
                             $('<div>',{"class": 'product-tumb', "id": 'product-tumb'+i}).appendTo($("#product-card"+i));
                             $('<div>', {"class": 'product-details', "id": 'product-details'+i}).appendTo($("#product-card"+i));


                              var Purchase = EscrowPurchase.at(result);
                        await  Purchase.image(function(error, result) {
                                if(!error) {
                              //    console.log(JSON.stringify(result));
                                  $("#badge"+i).html("HOT");
                                  $("#product-tumb"+i).html("<img src=http://localhost:8080/ipfs/" + result+  ">");
                                          }
                              })

                               $('<div>', {"class": 'product-catagory', "id": 'table'+i}).appendTo($("#product-details"+i));
                               $('<span>', {"class": 'product-catagory', "id": 'booktype'+i}).appendTo($("#product-details"+i));
                               $("#booktype"+i).html("PAPERBACK");
                               $('<h4>', {"id": 'bookName'+i}).appendTo("#product-details"+i);




                            await  Purchase.name(function(error, result) {
                                if(!error){
                              //    console.log(JSON.stringify(result));

                                  $("#bookName"+i).html(result);
                                    }
                                    else {
                                  console.log(error);
                                  }
                              })


                        await Purchase.text(function(error, result){
                                if(!error){
                                //  console.log(JSON.stringify(result));
                                  $('<p>', {"id": 'description'+i}).appendTo($("#product-details"+i));
                                  $('<div>', {"class": 'product-bottom-details', "id": 'product-bottom-details'+i}).appendTo($("#product-details"+i));
                                  $('#description'+i).html(result)
                                        }
                                        else {
                                          console.log(error);
                                              }
                              })
                          await Purchase.price(function(error, result) {
                                if(!error){
                                //  console.log(JSON.stringify(result));
                                  $('<div>', {"class":'product-price', "id": 'price'+i}).appendTo($("#product-bottom-details"+i));
                                  $('<div>', {"class": 'product-links', "id": 'product-links'+i}).appendTo($("#product-bottom-details"+i))
                                  $('#price'+i).html("price eth: "+result/1000000000000000000);
                                  $('<span>', {"class": 'product-catagory', "id": 'tablefor'+i}).appendTo($("#product-links"+i));

                                        }
                                        else {
                                  console.log(error);
                                            }
                              })
                              $('<span>', {"class": 'product-catagory', "id": 'tablefor'+i}).appendTo($("#product-details"+i));
                              $("#tablefor"+i).html(result);

                          }
                            else{
                                console.error(error);
                                }
                            });

                          }
                        }
                        loopFor(log);
                        }
                    else{
                      console.error(error);
                      }
                  });


                }else {
              ;
                //  console.log('not checked');

                  //retrieve all the contracts from the blockchain first
                    StartTrade.getContractcount( function(error, result){
                      if(!error){
                          var log = result;
                          const forLoop = async (log) => {
                        //  console.log(log+"*****************");
                        //  console.log(result);
                          var count =  JSON.stringify(result);
                        // console.log(contracCount+"-------------");
                          $("#block").empty();

                       for (var books = 0; books<log; books++){
                            const i = books;
                          //  console.log(books);
                            await  StartTrade.contracts (i, async function(error, result){
                              //console.log(i);
                            if(!error){
                            //  console.log("cont addr ["+[result]+"]");
                               console.log(result);
                               $('<div>',{"class": 'product-card', "id": 'product-card'+i}).appendTo($(".block"));
                               $('<div>', {"class": 'badge',"id": 'badge'+i}).appendTo($("#product-card"+i));
                               $('<div>',{"class": 'product-tumb', "id": 'product-tumb'+i}).appendTo($("#product-card"+i));
                               $('<div>', {"class": 'product-details', "id": 'product-details'+i}).appendTo($("#product-card"+i));


                                var Purchase = PurchaseContract.at(result);

                          await Purchase.cover(function(error, result) {
                                  if(!error) {
                                //    console.log(JSON.stringify(result));
                                    $("#badge"+i).html("HOT");
                                    $("#product-tumb"+i).html("<img src=http://localhost:8080/ipfs/" + result+  ">");
                                            }
                                })

                                $('<span>', {"class": 'product-catagory', "id": 'booktype'+i}).appendTo($("#product-details"+i));
                                $("#booktype"+i).html("e-book");
                                 $('<h4>', {"id": 'bookName'+i, "class": 'bookName'}).appendTo("#product-details"+i);


                              await  Purchase.name(function(error, result) {
                                  if(!error){
                                //    console.log(JSON.stringify(result));
                                  //  $('<h4>', {"id": 'bookName', "class": 'bookName'}).appendTo($(".product-details"));
                                    $("#bookName"+i).html(result);
                                      }
                                      else {
                                    console.log(error);
                                    }
                                })
                          await Purchase.text(function(error, result){
                                  if(!error){
                                  //  console.log(JSON.stringify(result));
                                    $('<p>', {"id": 'description'+i}).appendTo($("#product-details"+i));
                                    $('<div>', {"class": 'product-bottom-details', "id": 'product-bottom-details'+i}).appendTo($("#product-details"+i));
                                    $('#description'+i).html(result)
                                          }
                                          else {
                                            console.log(error);
                                                }

                                })
                            await Purchase.price(function(error, result) {
                                  if(!error){
                                //    console.log(JSON.stringify(result));
                                    $('<div>', {"class":'product-price', "id": 'price'+i}).appendTo($("#product-bottom-details"+i));
                                    $('<div>', {"class": 'product-links', "id": 'product-links'+i}).appendTo($("#product-bottom-details"+i))
                                    $('#price'+i).html("price eth: "+result/1000000000000000000);


                                          }
                                          else {
                                    console.log(error);
                                              }
                                })
                                  $('<span>', {"class": 'product-catagory', "id": 'tablefor'+i}).appendTo($("#product-details"+i));
                                  $("#tablefor"+i).html(result);


                            }
                              else{
                                  console.error(error);
                                  }
                              });
                            //  $("product-card"+book)
                            // })

                            }
                          }
                            forLoop(log);

                          }
                          else{
                            console.error(error);
                          }

                    });


                }
              });
            });
