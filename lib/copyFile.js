const {
  readFile,
  writeFile
} = require('fs');

readFile('./1_callbacks.md', { encoding: 'utf8' }, (err, data) => {
  if(err) throw err;
  console.log(data);
  writeFile('copy.txt', data, err => {
    if(err) throw err;
    console.log('please work');
  });
});
