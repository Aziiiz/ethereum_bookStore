
/// upload files without refereshing  the  page----->
//for uploading book cover
//for uploading book preview
// for uploading e-book
$('.upload-btn1').on('click', function() {
  $('#upload-preview').click();
  $('.progress-preview').text('0%');
  $('.progress-preview').width('0%');
});

$('.upload-btn2').on('click', function() {
  $('#upload-book').click();
  $('.progress-book').text('0%');
  $('.progress-book').width('0%');
});

$('.upload-btn').on('click', function(){
  $('#upload-input').click();
  $('.progress-bar').text('0%');
  $('.progress-bar').width('0%');
});


$('#upload-preview').on('change', function(){
  var files = $(this).get(0).files;

  var formData = new FormData();
  //lop thhrough all the selected files
  for(var i=0; i<files.length; i++) {
    var file = files[i];

    formData.append('upload', file, file.name);
  }
  $.ajax({
    url: '/api/post',
    type: 'POST',
    data: formData,
    processData: false,
    contentType: false,
    success: function(response){
      console.log(response);
      console.log("--------------------------"+response);
    //  console.log("file uploaded successfully");
      $("#prevHash").val(response);
    },
    xhr: function() {

      var xhr = new XMLHttpRequest();

      xhr.upload.addEventListener('progress2', function(evt) {
          if (evt.lengthComputable){

            var percentComplete = evt.loaded / evet.total;
            percentComplete = perseInt(percentComplete * 100);

            $('.progress-preview').text(percentComplete+ '%');
            $('.progress-preview').width(percentComplete + '%');

            if(percentComplete === 100) {
              $('.progress-preview').html('Done');
            }
          }
        }, false);
        return xhr;
    }
  });
});




$('#upload-book').on('change', function(){
  var files = $(this).get(0).files;

  var formData = new FormData();
  //lop thhrough all the selected files
  for(var i=0; i<files.length; i++) {
    var file = files[i];

    formData.append('upload1', file, file.name);
  }
  $.ajax({
    url: '/api/post',
    type: 'POST',
    data: formData,
    processData: false,
    contentType: false,
    success: function(response){
      console.log(response);
      console.log("--------------------------"+response);
  //    console.log("file uploaded successfully");
      $("#dataHash").val(response);
    },
    xhr: function() {

      var xhr = new XMLHttpRequest();

      xhr.upload.addEventListener('progress1', function(evt) {
          if (evt.lengthComputable){

            var percentComplete = evt.loaded / evet.total;
            percentComplete = perseInt(percentComplete * 100);

            $('.progress-book').text(percentComplete+ '%');
            $('.progress-book').width(percentComplete + '%');

            if(percentComplete === 100) {
              $('.progress-book').html('Done');
            }
          }
        }, false);
        return xhr;
    }
  });
});





$('#upload-input').on('change', function(){
  var files = $(this).get(0).files;
//  if (files.length > 0){
    // One or more files selected, process the file upload
    // create a FormData object which will be sent as the data payload in the
    // AJAX request
    var formData = new FormData();
    // loop through all the selected files
    for (var i = 0; i < files.length; i++) {
      var file = files[i];
      // add the files to formData object for the data payload
      formData.append('uploads', file, file.name);
     }
    $.ajax({
      url: '/api/post',
      type: 'POST',
      data: formData,
      processData: false,
      contentType: false,
      success: function(response){
        console.log(response);
        console.log("---------------" +response);
    //      console.log('upload successful!');
          $("#ipfsHash").val(response);
      },
      xhr: function () {
        // create an XMLHttpRequest
        var xhr = new XMLHttpRequest();
        // listen to the 'progress' event
        xhr.upload.addEventListener('progress', function(evt) {
          if (evt.lengthComputable) {
            // calculate the percentage of upload completed
            var percentComplete = evt.loaded / evt.total;
            percentComplete = parseInt(percentComplete * 100);
            // update the Bootstrap progress bar with the new percentage
            $('.progress-bar').text(percentComplete + '%');
            $('.progress-bar').width(percentComplete + '%');
            // once the upload reaches 100%, set the progress bar text to done
            if (percentComplete === 100) {
              $('.progress-bar').html('Done');
            }
          } // important not refresh page
        }, false);
        return xhr;
      }
    });

//  }
});
