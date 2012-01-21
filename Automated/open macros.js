// TeXworksScript
// Title:  open macros.tex
// Description: opens macros.tex
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+Shift+M
    
//TW.target.insertText("currentFileName");
//TW.target.insertText(TW.target.fileName);
// var openFileName = TW.target.selection;

var openedFile=TW.app.open("C:/Users/Michael/Desktop/notes/macros.tex");
//		 openedFile.show();
//  TW.app.openFile("C:/Users/Michael/Desktop/notes/macros.tex");
/*
   if ((openFileName != '') & (openFileName != null))
           {

                // couldn't find a property for current directory - work around
    var currentFileName =  TW.target.fileName;

           TW.target.insertText(currentFileName);
           }



                 if (currentFileName.indexOf("/") > -1) 
                     {
                                   pathSlash = "/";
                                         }
                                else
                                 {
                                   pathSlash = "\\";
                                    }

   var currentDirectoryLastDelim =  currentFileName.lastIndexOf(pathSlash);

           var  currentDirectory =
 currentFileName.substr(0,currentDirectoryLastDelim +1)

                  TW.app.openFile(currentDirectory + openFileName);

                  } // end if currentFileName
            }

*/