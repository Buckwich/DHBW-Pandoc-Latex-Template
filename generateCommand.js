const fs = require("fs");
const folder = "./chapters/";

var baseCommand = "pandoc -o output.pdf --template template/main.template --filter pandoc-citeproc --bibliography bibliographie.bib --top-level-division chapter --listings -s"
fs.readdir(folder, (err, files) => {
  files.forEach(file => {
    baseCommand = baseCommand + " " + folder + file;
  });
  baseCommand = baseCommand + "\nstart \"\" output.pdf";
  console.log(baseCommand);
  fs.writeFileSync("./buildPDF.bat", baseCommand);
})