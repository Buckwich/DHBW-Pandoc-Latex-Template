const watch = require('node-watch');
const child_process = require('child_process');
const notifier = require('node-notifier');
const readline = require('readline');

//enable cli input
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'c') {
    process.exit();
  } else {
    startBuild();
  }
});

//enable file watcher
watch('./chapters', {
  recursive: true
}, startBuild);

//trigger first build
startBuild();

//converts Date object to time string
function timeNow(date) {
  var hours = (date.getHours() < 10 ? '0' : '') + date.getHours();
  var minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
  var seconds = (date.getSeconds() < 10 ? '0' : '') + date.getSeconds();
  return hours + ':' + minutes + ':' + seconds;
}

//triggers a pandoc build
function startBuild() {
  var startTime;
  var endTime;
  notifier.notify('Build starting');
  startTime = new Date();
  console.log(timeNow(startTime) + ": build started");
  child_process.exec('buildPDF.bat', function (error, stdout, stderr) {
    endTime = new Date();
    var seconds = (endTime - startTime) / 1000;

    if (error) {
      console.error("ERROR: " + error);
      console.error(timeNow(endTime) + ": build FAILED after " + seconds + " seconds");
      notifier.notify({
        title: 'Build failed',
        message: 'Took ' + seconds + ' seconds'
      });
    }
    if (stderr) {
      console.error("STDERR: " + stderr);
      console.error(timeNow(endTime) + ": build FAILED after " + seconds + " seconds");
      notifier.notify({
        title: 'Build failed',
        message: 'Took ' + seconds + ' seconds'
      });
    } else { //success
      console.log(timeNow(endTime) + ": build complete after " + seconds + " seconds");
      notifier.notify({
        title: 'Build complete',
        message: 'Took ' + seconds + ' seconds'
      });
    }

    deleteTempFiles();
  });
}

function deleteTempFiles() {
  child_process.exec('del -r tex2pdf*', function (error, stdout, stderr) {});
}