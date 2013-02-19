// TeXworksScript
// Title:  log a conversation
// Description: add a conversation to the log
// Author:  Michael Donovan
// Version: 
// Date: 
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+C,Alt+O,Alt+N,Alt+V
    

var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()

var strrr="% entered " + day + "/" + month + "/" + year+"\n";
var StartingText=strrr+
"\\conversation{person\u25BA}%\n{\u2590filename\u258C\u25BA}%\n{\u2590"+day+"\u258C/"+month+"/"+year+"\u25BA}%\n{\u2590title\u258C\u25BA}%\n{\u2590\u258C}%overview\n\n"
	
TW.target.insertText(StartingText);
TW.target.selectRange(TW.target.selectionStart-1, 1);
TW.target.selectRange(TW.target.selectionStart-StartingText.length+1+14+strrr.length, 6);
