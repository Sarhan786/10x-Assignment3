const { myFileWriter, myFileUpdater, myFileReader, myFileDeleter}= require("./index")

myFileWriter("file1.txt","Hi i am SAM")
myFileReader("file1.txt")
myFileUpdater("file1.txt", ". it means Sarhan A Malek")
myFileDeleter("file1.txt")