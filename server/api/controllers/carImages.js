var mongoose = require('mongoose');
// var imageSave = mongoose.model('carImages');
var fs = require('fs');
formidable = require('formidable');
var IncomingForm = require('formidable').IncomingForm

var qs = require('querystring');
bodyParser = require("body-parser");
const multer = require('multer');

// var url = require('url');

// module.exports.imageSave = function(req, res) {
//
//     console.log('receive image save request0'+Date.now());
//
//
//     // res.json({name: 'get'});
//
//     //
//     // var form = new formidable.IncomingForm();
//     // form.parse(req, function (err, fields, files) {
//     //     console.log('receive image save request 2');
//     //     var oldpath = files.filetoupload.path;
//     //
//     //     var newpath = 'public/carImage/' + 'car' + Date.now() + files.filetoupload.name;
//     //
//     //     console.log(newpath);
//     //
//     //     fs.rename(oldpath, newpath, function (err) {
//     //         if (err) throw err;
//     //         res.write('File uploaded and moved!');
//     //         res.end();
//     //     });
//     // });
//     new formidable.IncomingForm().parse(req)
//         .on('file', function(name, file) {
//             console.log('Got file:', name);
//         })
//         .on('field', function(name, field) {
//             console.log('Got a field:', name);
//         })
//         .on('error', function(err) {
//             next(err);
//         })
//         .on('end', function() {
//             res.end();
//         });
//
//     console.log('receive image save request 3');
//     // fs.writeFile('/public/carImage/downloaded.jpg', req.body, 'binary', function (err) {});
//
//     // var files = req.files;
//     // console.log(files);
//     // if (!files[0]) {
//     //     res.send('error');
//     // } else {
//     //     res.send('success');
//     // }
//     // console.log(req);
//     console.log('finished');
//     res.json({name:'haha'});
// }

module.exports.imageSave = function(req, res) {
    console.log("sdfsdf");
   // var bodyNew = qs.parse(req.body);
   //  console.log(req.files);
   //  console.log(bodyNew['imageName']);
    console.log('----------------------');

    var form = new IncomingForm()
    form.uploadDir = 'public/carImage/'
    form.parse(req, function(err, fields, files) {
        if (err) {
            console.log('some error', err)
        } else if (!files.file) {
            console.log('no file received')
        } else {
            var file = files.file
            console.log('saved file to', file.path)
            console.log('original name', file.name)
            console.log('type', file.type)
            console.log('size', file.size)

        }
    });
    console.log(form.multiples);
    console.log('----------------------');

    // var imageData = req.params('imageData');

    // var imageName = req.body.params('imageName');
    // console.log('   '+imageName);

    // imageData = imageData.replace(/^data:image\/\w+;base64,/, "");
    // var dataBuffer = new Buffer(imageData, 'base64');

    // client.upload(dataBuffer, {
    //     key: imageName
    // }, function(err, result) {
    //     if (err) {
    //         res.json({
    //             state: false,
    //             imgname: imageName,
    //             imgurl: "",
    //             imghash: ""
    //         });
    //     } else {
    //         res.json({
    //             state: true,
    //             imgname: result.key,
    //             imgurl: result.url,
    //             imghash: result.hash
    //         });
    //     }
    // });
    // fs.writeFile("/public/carImage/"+imageName, dataBuffer,  "binary",function(err) {
    //     if(err) {
    //         console.log(err);
    //     } else {
    //         console.log("The file was saved!");
    //     }
    // });
    console.log('finished');
}



