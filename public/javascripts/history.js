

/// histroy js

if(typeof web3 !== 'undefined')
{
  web3 = new Web3(web3.currentProvider);
  console.log("you are connected to metamask");
}
else {
  web3 = new Web3(new Web3.provider.HttpProvider("http://localhost:8545"));
  console.log("please install metamask");
}

web3.eth.defaultAccount = web3.eth.accounts[0];
var myAccount = web3.eth.defaultAccount;

console.log(myAccount);



var TradePurchase =  web3.eth.contract(tradePurchase);
var TradeContract = web3.eth.contract(tradeAbi);
var EscrowPurchase = web3.eth.contract(escrowPurchase);
var EscrowContract = web3.eth.contract(escrowAbi);

var StartTrade = TradeContract.at(trade);
console.log(StartTrade);
var StartEscrow = EscrowContract.at(escrow);
console.log(StartEscrow);



//// retrive buyer address if buyer address is equal to defaultAccount show to user


 StartEscrow.getContractCount( function(error, result) {
   if(!error)
   {
     var log = result;

     const loopFor = async (log) => {

       $("#block1").empty();

       for(var book = 0; book<log; book++)
       {
         const i = book;
         console.log(i+"********************");

         await StartEscrow.contracts(i, async function(error, result) {
           if(!error)
           {
             console.log(result);






             var Purchase = EscrowPurchase.at(result);
             await Purchase.buyer(function(error, result) {
               if(!error) {
                 if(result == myAccount)
                 {

                   $('<div>',{"class": 'product-card', "id": 'product-card'+i}).appendTo($("#block1"));
                   $('<div>', {"class": 'badge',"id": 'badge'+i}).appendTo($("#product-card"+i));
                   $('<div>',{"class": 'product-tumb', "id": 'product-tumb'+i}).appendTo($("#product-card"+i));
                   $('<div>', {"class": 'product-details', "id": 'product-details'+i}).appendTo($("#product-card"+i));


                     Purchase.image(function(error, result) {
                           if(!error) {
                         //    console.log(JSON.stringify(result));

                             $("#product-tumb"+i).html("<img src=http://localhost:8080/ipfs/" + result+  ">");
                                     }
                         })

                          $('<div>', {"class": 'product-catagory', "id": 'table'+i}).appendTo($("#product-details"+i));
                          $('<span>', {"class": 'product-catagory', "id": 'tablefor'+i}).appendTo($("#product-details"+i));
                          $("#tablefor"+i).html("PAPERBACK BOOK");
                          $('<h4>', {"id": 'bookName'+i}).appendTo("#product-details"+i);




                         Purchase.name(function(error, result) {
                           if(!error){
                         //    console.log(JSON.stringify(result));

                             $("#bookName"+i).html(result);
                               }
                               else {
                             console.log(error);
                             }
                         })


                    Purchase.text(function(error, result){
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
                      Purchase.price(function(error, result) {
                           if(!error){
                           //  console.log(JSON.stringify(result));

                             $('<div>', {"class":'product-price', "id": 'price'+i}).appendTo($("#product-bottom-details"+i));
                              $('<div>', {"class" : 'product-links', "id": 'product-links'+i}).appendTo($("#product-bottom-details"+i));
                             $('#price'+i).html("You paid eth: "+result/1000000000000000000);
                                   }
                                   else {
                             console.log(error);
                                       }
                         })
                      Purchase.seller(function(error, result) {
                        if(!error) {
                          $('<p>', {"id": "seller-addrr"+i}).appendTo($("#product-links"+i));
                          $("#seller-addrr"+i).html("Seller : " +result);
                        }
                        else {
                          console.log(error);
                        }
                      })

                 }
                 else {

                   console.log("you did not made purchase!!");
                 }
               }
               else {
                 console.log(error);
               }
             })


             await Purchase.seller(function(error, result) {
               if(!error) {
                 if(result == myAccount)
                 {

                   $('<div>',{"class": 'product-card', "id": 'product-card1'+i}).appendTo($("#sold1"));
                   $('<div>', {"class": 'badge',"id": 'badge1'+i}).appendTo($("#product-card1"+i));
                   $('<div>',{"class": 'product-tumb', "id": 'product-tumb1'+i}).appendTo($("#product-card1"+i));
                   $('<div>', {"class": 'product-details', "id": 'product-details1'+i}).appendTo($("#product-card1"+i));


                     Purchase.image(function(error, result) {
                           if(!error) {
                         //    console.log(JSON.stringify(result));

                             $("#product-tumb1"+i).html("<img src=http://localhost:8080/ipfs/" + result+  ">");
                                     }
                         })

                          $('<div>', {"class": 'product-catagory', "id": 'table1'+i}).appendTo($("#product-details1"+i));
                          $('<span>', {"class": 'product-catagory', "id": 'tablefor1'+i}).appendTo($("#product-details1"+i));
                          $("#tablefor1"+i).html("PAPERBACK BOOK");
                          $('<h4>', {"id": 'bookName1'+i}).appendTo("#product-details1"+i);




                         Purchase.name(function(error, result) {
                           if(!error){
                         //    console.log(JSON.stringify(result));

                             $("#bookName1"+i).html(result);
                               }
                               else {
                             console.log(error);
                             }
                         })


                    Purchase.text(function(error, result){
                           if(!error){
                           //  console.log(JSON.stringify(result));
                             $('<p>', {"id": 'description1'+i}).appendTo($("#product-details1"+i));
                              $('<div>', {"class": 'product-bottom-details', "id": 'product-bottom-details1'+i}).appendTo($("#product-details1"+i));
                             $('#description1'+i).html(result)
                                   }
                                   else {
                                     console.log(error);
                                         }
                         })
                      Purchase.price(function(error, result) {
                           if(!error){
                           //  console.log(JSON.stringify(result));

                             $('<div>', {"class":'product-price', "id": 'price1'+i}).appendTo($("#product-bottom-details1"+i));
                              $('<div>', {"class" : 'product-links', "id": 'product-links1'+i}).appendTo($("#product-bottom-details1"+i));
                             $('#price1'+i).html("You earned eth: "+result/1000000000000000000);
                                   }
                                   else {
                             console.log(error);
                                       }
                         })
                      Purchase.buyer(function(error, result) {
                        if(!error) {
                          $('<p>', {"id": "seller-addrr1"+i}).appendTo($("#product-links1"+i));
                          $("#seller-addrr1"+i).html("Buyer : " +result);
                        }
                        else {
                          console.log(error);
                        }
                      })

                 }
                 else {

                   console.log("you did not made purchase!!");
                 }
               }
               else {
                 console.log("error");
               }
             })
           }
         })
       }
     }
     loopFor(log);
   }
   else {
     console.log(error);
   }
 })


/* for e-book purchase history and sold booklist

///////////////////////////////?


*/

StartTrade.getContractcount( function(error, result) {
  if(!error)
  {
    var num =  result;
    console.log(num+"=========");

    const forLoop = async (num) => {

      $("#block2").empty();

      for(var book = 0; book<num; book++)
      {
        const i = book;

        await StartTrade.contracts(i, async function(error, result){

          if(!error)
          {
            console.log(result+"++++++++++++++++++");


            var Purchase = TradePurchase.at(result);

            await Purchase.getBuyerCount( function(error, result) {
              if(!error)
              {
                var adr = result;
                console.log(adr+"buyeeee");

                const buyerLoop = async(adr) => {
                $("block2").empty();
              console.log(adr+"555");
                for(var j= 0; j<adr; j++)
                  {
                    await Purchase.buyerAddress(j, async function(error, result){
                      console.log(j+"fdfsdfsfsfdfds");
                      console.log(result+"=============");
                      if(result == myAccount)
                      {
                        $('<div>',{"class": 'product-card', "id": 'product-card4'+i}).appendTo($("#block1"));
                        $('<div>', {"class": 'badge',"id": 'badge4'+i}).appendTo($("#product-card4"+i));
                        $('<div>',{"class": 'product-tumb', "id": 'product-tumb4'+i}).appendTo($("#product-card4"+i));
                        $('<div>', {"class": 'product-details', "id": 'product-details4'+i}).appendTo($("#product-card4"+i));


                      await  Purchase.cover(function(error, result) {
                                if(!error) {
                              //    console.log(JSON.stringify(result));

                                  $("#product-tumb4"+i).html("<img src=http://localhost:8080/ipfs/" + result+  ">");
                                          }
                              })

                               $('<div>', {"class": 'product-catagory', "id": 'table4'+i}).appendTo($("#product-details4"+i));
                               $('<span>', {"class": 'product-catagory', "id": 'tablefor4'+i}).appendTo($("#product-details4"+i));
                               //$("#tablefor"+i).html(result);
                               $('<h4>', {"id": 'bookName4'+i}).appendTo("#product-details4"+i);




                            await  Purchase.name(function(error, result) {
                                if(!error){
                              //    console.log(JSON.stringify(result));

                                  $("#bookName4"+i).html(result);
                                  console.log("namee"+result);
                                    }
                                    else {
                                  console.log(error);
                                  }
                              })


                        await Purchase.text(function(error, result){
                                if(!error){
                                //  console.log(JSON.stringify(result));
                                  $('<p>', {"id": 'description4'+i}).appendTo($("#product-details4"+i));
                                   $('<div>', {"class": 'product-bottom-details', "id": 'product-bottom-details4'+i}).appendTo($("#product-details4"+i));
                                  $('#description4'+i).html(result)
                                  console.log("3333"+result);
                                        }
                                        else {
                                          console.log(error);
                                              }
                              })
                        await   Purchase.price(function(error, result) {
                                if(!error){
                                //  console.log(JSON.stringify(result));

                                  $('<div>', {"class":'product-price', "id": 'price4'+i}).appendTo($("#product-bottom-details4"+i));
                                   $('<div>', {"class" : 'product-links', "id": 'product-links4'+i}).appendTo($("#product-bottom-details4"+i));
                                  $('#price4'+i).html("You paid eth: "+result/1000000000000000000);
                                        }
                                        else {
                                  console.log(error);
                                            }
                              })
                        await   Purchase.seller(function(error, result) {
                             if(!error) {
                               $('<p>', {"id": "seller-addrr4"+i}).appendTo($("#product-links4"+i));
                               $("#seller-addrr4"+i).html("Seller: " +result);
                             }
                             else {
                               console.log(error);
                             }
                           })
                      }
                      else {
                        console.log("you did not bought");
                      }
                    })
                  }
                }
                buyerLoop(adr);
              }
              else {
                console.log(error);
              }
            })

          }
          else {
            console.log(error);
          }
        })
      }
    }
    forLoop(num);
  }
  else {
    console.log(error);
  }
})




StartTrade.getContractcount( function(error, result) {
  if(!error) {
    var log = result;
    console.log(result+"---------------------------");
    const looping = async(log) => {

      $("#sold2").empty();

      for(j=0; j<log; j++)

      {
        const i = j;

        await StartTrade.contracts(i, async function(error, result) {
          if(!error)
          {
            console.log(result+"ggfgfgfgfgfgfgfgf");






            var Purchase = TradePurchase.at(result);
            await Purchase.seller(async function (error, result) {
              console.log(result+"ttttttdgffgdfdgdgfdgfdgdfgdfgdfttttt");
              if(!error) {
                if(result == myAccount)
                {

                  $('<div>',{"class": 'product-card', "id": 'product-card61'+i}).appendTo($("#sold1"));
                  $('<div>', {"class": 'badge',"id": 'badge61'+i}).appendTo($("#product-card61"+i));
                  $('<div>',{"class": 'product-tumb', "id": 'product-tumb61'+i}).appendTo($("#product-card61"+i));
                  $('<div>', {"class": 'product-details', "id": 'product-details61'+i}).appendTo($("#product-card61"+i));


                await  Purchase.cover(function(error, result) {
                          if(!error) {
                        //    console.log(JSON.stringify(result));

                            $("#product-tumb61"+i).html("<img src=http://localhost:8080/ipfs/" + result+  ">");
                                    }
                        })

                         $('<div>', {"class": 'product-catagory', "id": 'table61'+i}).appendTo($("#product-details61"+i));
                         $('<span>', {"class": 'product-catagory', "id": 'tablefor61'+i}).appendTo($("#product-details61"+i));
                        $('#tablefor61'+i).html("E-BOOk")
                         $('<h4>', {"id": 'bookName61'+i}).appendTo("#product-details61"+i);




                      await  Purchase.name(function(error, result) {
                          if(!error){
                        //    console.log(JSON.stringify(result));

                            $("#bookName61"+i).html(result);
                              }
                              else {
                            console.log(error);
                            }
                        })


                   await Purchase.text(function(error, result){
                          if(!error){
                          //  console.log(JSON.stringify(result));
                            $('<p>', {"id": 'description61'+i}).appendTo($("#product-details61"+i));
                             $('<div>', {"class": 'product-bottom-details', "id": 'product-bottom-details61'+i}).appendTo($("#product-details61"+i));
                            $('#description61'+i).html(result)
                                  }
                                  else {
                                    console.log(error);
                                        }
                        })

                    await Purchase.getIncome(function(error, result) {
                       if(!error) {
                         $('<div>', {"class":'product-price', "id": 'price61'+i}).appendTo($("#product-bottom-details61"+i));
                          $('<div>', {"class" : 'product-links', "id": 'product-links61'+i}).appendTo($("#product-bottom-details61"+i));
                         $('#price61'+i).html("You earned eth: "+result/1000000000000000000);

                       }
                       else {
                         console.log(error);
                       }
                     })

                    await Purchase.getBuyerCount(function(error, result) {

                      if(!error) {
                       var list = result;

                       const listOfBuyer = async(list) => {

                         $("#product-links61"+i).empty();
                         for (var k = 0; k < list; k++) {

                           var m = k;
                           console.log(m+"====");


                        await  Purchase.buyerAddress(m,   function(error, result){
                        //    console.log(m);
                            if(!error)
                            {
                              $('<p>',{"id": 'buyerAd6'+m}).appendTo($("#product-links61"+i))
                              $("#buyerAd6"+m).html(result);
                            }
                            else {
                              console.log("hi");
                            }
                          })
                         }
                       }
                       listOfBuyer(list);
                     }
                     console.log(error+"you re ditvh");
                     })
                }
                else {

                  console.log("you did not made purchase!!");
                }
              }
              else {
                console.log(" ");
              }
            })
          }
        })

      }
    }
    looping(log);
  }
  else {
    console.log(error);
  }
})
