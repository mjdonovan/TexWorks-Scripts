// TeXworksScript
// Title:  log a seminar
// Description: add a seminar to the log
// Author:  Michael Donovan
// Version: 
// Date: 
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+S,Alt+E,Alt+M,Alt+I
    
var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()

var strrr="% entered " + day + "/" + month + "/" + year+"\n";
var StartingText=strrr+
"\\seminar{speaker\u25BA}%\n{\u2590filename\u258C\u25BA}%\n{\u2590"+day+"\u258C/"+month+"/"+year+"\u25BA}%\n{\u2590series\u258C\u25BA}%\n{\u2590title\u258C\u25BA}%\n{\u2590abstract\u258C\u25BA}%\n{\u2590\u258C}%overview\n\n"

TW.target.insertText(StartingText);
TW.target.selectRange(TW.target.selectionStart-1, 1);
TW.target.selectRange(TW.target.selectionStart-StartingText.length+1+9+strrr.length, 7);
