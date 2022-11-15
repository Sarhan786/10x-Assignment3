const fs = require("fs/promises");

const myFileWriter = async (fileName, fileContent) => {
  // write code here
  // dont chnage function name
  try {
    await fs.writeFile(fileName, fileContent);
    console.log(`${fileName} is created`);
  } catch (error) {
    console.error(`Got an error trying to create the file: ${error.message}`);
  }
  // fs.writeFile(fileName, fileContent, (err) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log(fileName);
  //   }
  // });
};

const myFileReader = async (fileName) => {
  // write code here
  // dont chnage function name
  try {
    const data = await fs.readFile(fileName);
    console.log(data.toString());
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`);
  }
};

const myFileUpdater = async (fileName, fileContent) => {
  // write code here
  // dont chnage function name

  try {
    await fs.appendFile(fileName, fileContent);
    console.log(`${fileName} is Updated`);
  } catch (error) {
    console.error(`Got an error trying to Upadate the file: ${error.message}`);
  }

  // fs.appendFile(fileName, fileContent, (err, data) => {
  //   console.log(data);
  // });
  // console.log("File updated!");
};

const myFileDeleter = async (fileName) => {
  // write code here
  // dont chnage function name
  try {
    await fs.unlink(fileName);
    console.log(`${fileName} is Deleted`);
  } catch (error) {
    console.error(`Got an error trying to delete the file: ${error.message}`);
  }
};

// myFileWriter("file1.txt","Hi i am SAM")
// myFileReader("file1.txt")
// myFileUpdater("file1.txt", ". it means Sarhan A Malek")
// myFileDeleter("file1.txt");

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter };
