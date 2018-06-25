const fs = require("fs");
const folder = "./chapters/";

var index = parseInt(process.argv[2]);
var chapter = process.argv[3];
var files
fs.readdir(folder, (err, inputFiles) => {
  files = inputFiles;
  files.some(file => {
    var fileIndex = parseInt(file.split('-')[0]);
    console.log(fileIndex);
    console.log(index)
    if (fileIndex < index) {
      console.log("nothing to do")
    }
    if (fileIndex == index) {
      console.log("insert duplicate file")
      fs.writeFileSync(folder + pad(index, 2) + "-#-" + chapter, "# " + chapter);
      return true;
    }
    if (fileIndex > index) {
      console.log("no conflict")
      fs.writeFileSync(folder + pad(index, 2) + "-" + chapter, "# " + chapter);
      return true;
    }
  });
  finished = false;
  while (!finished) {
    console.log("next run")
    checkDuplicates();
  }
})



function checkDuplicates() {
  var inputFiles = fs.readdirSync(folder);
  files = inputFiles;
  finished = true;
  console.log(files)
  for (var i = 0; i < files.length; i++) {
    if (files[i].split("-")[1] == '#') {
      console.log("unfinished File: " + files[i]);
      finished = false;
      unfinishedFile = files[i]
      increasingFile = files[i + 1]
      if (i + 1 >= files.length) {
        //Todo
        console.log("TODO");
      }

      if (parseInt(increasingFile.split("-")[0]) + 1 == parseInt(files[i + 2].split("-")[0])) {
        console.log("duplicate File")
        fs.renameSync(folder + increasingFile, folder + pad(parseInt(increasingFile.split("-")[0]) + 1, 2) + "-#-" + increasingFile.split("-")[1]);
      } else {
        console.log("just paste")
        console.log(increasingFile)
        console.log(files[i + 2])
        fs.renameSync(folder + increasingFile, folder + pad(parseInt(increasingFile.split("-")[0]) + 1, 2) + "-" + increasingFile.split("-")[1]);
      }

      //move unfinished file
      fs.renameSync(folder + unfinishedFile, folder + unfinishedFile.split("-")[0] + "-" + unfinishedFile.split("-")[2])
    }
  }
}

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}