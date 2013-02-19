// TeXworksScript
// Title:  log a note
// Description: add a note to the log
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+N,Alt+O,Alt+T,Alt+E

var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()

var strrr="% entered " + day + "/" + month + "/" + year+"\n";
var StartingText=strrr+
"\\notes{filename\u25BA}%\n{\u2590title\u258C\u25BA}%\n{\u2590\u258C}%overview\n\n"
	
TW.target.insertText(StartingText);
TW.target.selectRange(TW.target.selectionStart-1, 1);
TW.target.selectRange(TW.target.selectionStart-StartingText.length+1+7+strrr.length, 8);
