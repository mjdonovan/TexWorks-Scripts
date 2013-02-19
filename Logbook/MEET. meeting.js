// TeXworksScript
// Title:  log a meeting
// Description: add a meeting to the log
// Author:  Michael Donovan
// Version: 
// Date: 
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+M,Alt+E,Alt+E,Alt+T
    
var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()

var strrr="% entered " + day + "/" + month + "/" + year+"\n";
var StartingText=strrr+
"\\meeting{filename\u25BA}%\n{\u2590"+day+"\u258C/"+month+"/"+year+"\u25BA}%\n{\u2590title\u258C\u25BA}%\n{\u2590overview\u258C}\n\n"
	
TW.target.insertText(StartingText);
TW.target.selectRange(TW.target.selectionStart-1, 1);
TW.target.selectRange(TW.target.selectionStart-StartingText.length+1+9+strrr.length, 8);
