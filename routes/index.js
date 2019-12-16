const express = require('express');
const  router = express.Router();
const formidable = require('formidable');
const multer = require('multer');
const path = require('path');
const ipfsClient = require('ipfs-http-client');
const fs = require('fs');


// setting up ipfs client to local localhost
const ipfs = ipfsClient('localhost', '5001', {protocol: 'http'});

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Homepage' });
});

/* render sell page */
router.get('/sell', (req, res, next) => {

  res.render('selltemp', {title: 'Sellpage'});
});


/* render history page */
router.get('/history', (req, res, next) => {
  res.render('history', {title: 'History page'});
});


//post files
// get files via ajax.post
router.post('/api/post',  (req, res) => {

var hash;
  // create an incoming form object
  var form = new formidable.IncomingForm();
  // store all uploads in the /uploads directory
  form.uploadDir = path.join(__dirname, '/uploads');
  // every time a file has been uploaded successfully,
  form.on('file', async(field, file) => {
    fs.rename(file.path, path.join(form.uploadDir), async(req, res, err)=>{
      if(err)
      {
        console.log('error',err);
      }
      else {
        const filePath = file.path;
        console.log(filePath);
        const fileName = file.name;
        console.log(fileName);
         const fileHash =  await addFile(fileName, filePath);
         hash = fileHash;
        console.log(hash);
      }
    });
  });
  // log any errors that occur
  form.on('error', function(err) {
    console.log('An error has occured: \n' + err);
  });
  // once all the files have been uploaded, send a response to the client
(form.on('end', () => {
  var promise1 = new Promise(function(resolve, reject){
    setTimeout(function() {
      console.log("-------------");
      res.end(hash);
      console.log(hash);
    }, 300);
  });
  })
);
// parse the incoming request containing the form data
  form.parse(req);
  });
//add file to ipfs and return hash
const addFile = async (fileName,filePath) => {
  const file = fs.readFileSync(filePath);
  const fileAdded = await ipfs.add({path: fileName, content: file});
  const fileHash = fileAdded[0].hash;
  return fileHash;
  //console.log(fileHash);
    };



module.exports = router;
