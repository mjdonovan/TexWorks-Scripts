// TeXworksScript
// Title:  log a useful file
// Description: add a useful file to the log
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+U,Alt+S,Alt+E,Alt+F


var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()

var strrr="% entered " + day + "/" + month + "/" + year+"\n";
var StartingText=strrr+
"\\useful{filename\u25BA}%\n{\u2590"+day+"\u258C/"+month+"/"+year+"\u25BA}%\n{\u2590title\u258C\u25BA}%\n{\u2590\u258C}%overview\n\n"

TW.target.insertText(StartingText);
TW.target.selectRange(TW.target.selectionStart-1, 1);
TW.target.selectRange(TW.target.selectionStart-StartingText.length+1+8+strrr.length, 8);
