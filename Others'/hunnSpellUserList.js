// TeXworksScript
// Title:  Add to Hunn Spell User List
// Description: Adds highlighted word to user list (work arround) 
// Author:  Paul Norman
// Version: 0.1
// Date: 2011-02-13
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+H, Alt+S

// This is a temporary EXPERIMENTAL workaround in scripting for saving accepted words from spell checking marks.

// Use at Your Own Risk!

//  MAKE a BACKUP of your current dictionary first!!!
  
// Installation: put in any directory under your script folder. 


/* Usage: Selected text (User selects/double clicks - first) 
 is added to the user's current dictionary, if no text is selected in 
 editor, the current dictionary is opened for editing - look at the end of 
 it.
 
 Additions do not take effect until TeXworks is started again - meanwhile tell spell checker to ignore word after adding it.
*/


//  var  myDictionaryName = "en_NZ.dic";
  

const twConst = {
                             SystemAccess_OK : 0,

                         SystemAccess_Failed : 1,

        SystemAccess_PermissionDenied : 2
              }; // end twConst


const msgBox = {
Ok               : 0x00000400, // An "OK" button defined with the AcceptRole.
Open             : 0x00002000, // A "Open" button defined with the AcceptRole.
Save             : 0x00000800, // A "Save" button defined with the AcceptRole.
Cancel           : 0x00400000, // A "Cancel" button defined with the RejectRole.
Close            : 0x00200000, // A "Close" button defined with the RejectRole.
Discard          : 0x00800000, // A "Discard" or "Don't Save" button, depending on the platform, defined with the DestructiveRole.
Apply            : 0x02000000, // An "Apply" button defined with the ApplyRole.
Reset            : 0x04000000, // A "Reset" button defined with the ResetRole.
RestoreDefaults  : 0x08000000, // A "Restore Defaults" button defined with the ResetRole.
Help             : 0x01000000, // A "Help" button defined with the HelpRole.
SaveAll          : 0x00001000, // A "Save All" button defined with the AcceptRole.
Yes              : 0x00004000, // A "Yes" button defined with the YesRole.
YesToAll         : 0x00008000, // A "Yes to All" button defined with the YesRole.
No               : 0x00010000, // A "No" button defined with the NoRole.
NoToAll          : 0x00020000, // A "No to All" button defined with the NoRole.
Abort            : 0x00040000, // An "Abort" button defined with the RejectRole.
Retry            : 0x00080000, // A "Retry" button defined with the AcceptRole.
Ignore           : 0x00100000, // An "Ignore" button defined with the AcceptRole.
NoButton         : 0x00000000  // An invalid button.
   };



 function checkForWord(text) // do long hand
      {
        for (word in userList)
           {
             if (userList[word] == text)
               {
                return false;
                 }
            }
            return true;
        }


//  eval(TW.app.getGlobal("helper_twPan")); //  Comment if NOT Needed - This includes PhpJs ($P), twConst, msgBox, twPan ($tw), string.toTitleCase() 

 var addWord = TW.target.selection;
 var hunnSpellUserFilePath = "";
 var   writeResult;
 
var hunnSpellUserFile = __FILE__;
   
       buildPath = hunnSpellUserFile.split("/");
       
       for (var dir = 0; dir < buildPath.length -3; dir++)
          {
           hunnSpellUserFilePath += buildPath[dir] + "/";
           }
   
   // if it is in where Tw looks for its dictionaries then it is here
   
         storedDictionaryName = __FILE__.substr(0, __FILE__.lastIndexOf("/") +1) + "storedDictionaryName.txt";
         
        readResponse =  TW.readFile(storedDictionaryName);
         
         if (readResponse.status == twConst.SystemAccess_Failed)
           {
               TW.warning(null,"Tw Message", "Make Sure You have Backed Up Your Dictionary .dic file\n\nAnd Answer Yes to Overwriting it When asked.")
               
             myDictionaryName  =  TW.app.getSaveFileName( hunnSpellUserFilePath + "dictionaries/Did You Make A Back Up?.dic");
             
             TW.writeFile(storedDictionaryName, myDictionaryName );
            }
           
            if (readResponse.status == twConst.SystemAccess_OK)
            {
              myDictionaryName =  readResponse.result;
            }
   
   
      hunnSpellUserFile = myDictionaryName  ;
       
       // other options:- 
  
    //  hunnSpellUserFile = hunnSpellUserFilePath + "dictionaries/hunspell_default.cdic";
   
   // Qt does not seem to expand environment variables so ...
    
  /*  hunnSpellUserFile = TW.system("cmd /c echo %HOMEDRIVE%%HOMEPATH%\\dictionaries\\.hunspell_default", true).output;
  
    hunnSpellUserFile = hunnSpellUserFile.replace(/\\/g,"/");
     hunnSpellUserFile = hunnSpellUserFile.replace(/\r\n/g,""); // remove new line created by echo

 // TW.information(null, "Tw Message", ">" + hunnSpellUserFile + "<");
 
 */
 
   if(addWord != undefined && addWord != "")
    {
     
      readResult =  TW.readFile(hunnSpellUserFile);
   
      if (readResult.status == twConst.SystemAccess_Failed)	
        {
         // First usage
        
         var   writeResult =  TW.writeFile(hunnSpellUserFile,addWord);
          
          writeStatus  =   writeResult.status;
          
         }
       else
       {
       
            userList = readResult.result;
            userList = userList.replace(/\r/g,"");
            userList = userList.split("\n");
        
        if (checkForWord(addWord) == true)
         {
          userList.push(addWord);
      
          //  userList.sort(); // make any later manual editing easier
        
        //sorting turned off to make sure that added words are at the end of the dictionary.
        
          userList = userList.join("\n");
          writeResult =  TW.writeFile(hunnSpellUserFile, userList);
          writeStatus  =   writeResult.status;
          }
        else
          {
            writeStatus  = 0;
            
           } // End. if (checkForWord(addWord) == true)

       
         }  // End. if (readResult.status == twConst.SystemAccess_Failed)	          

    
    } // End.  if(addWord != undefined && addWord != "")
    else
    {
          writeStatus  = -1;
    }
    
       switch (writeStatus)
    {
      case twConst.SystemAccess_OK:
        TW.target.statusTip = addWord + " Added to User List";
           break;

     case  twConst.SystemAccess_Failed:
       TW.target.statusTip = addWord + " Not Added to User List";
           break;

      case twConst.SystemAccess_PermissionDenied:
           TW.information(null, "Tw Message", "Please Check Edit/Permissions Scripting for Write");
           break;
      
        case -1: 
        
     ans =   TW.warning(null, "Tw Message", "No Word was Selected, So Do You want the Dictionary opened for editing? \n\nIf \"Yes\" You Must Save and Close After Editing\nBefore trying to add any more words to the Dictionary\n Using this Script.\n\n\nMost Dictionaries Are Long so this will take a while to open.\n\nAny Additions You have Made are at the end of the file.", msgBox.Yes | msgBox.No, msgBox.No);
      
      if (ans == msgBox.Yes)    
        { whatHappened = TW.app.openFileFromScript(hunnSpellUserFile, TW, -1, true);
        
        if (whatHappened.status == twConst.SystemAccess_Failed)
          {
            TW.information(null, "Tw Message", "Please Save at least one word First\n\n" +
                                               "(Highlight a word and then ALt+H & Alt+S)");
             }  
        } // End. if (ans == msgBox.Yes) 
       break;
    
      } 
null;