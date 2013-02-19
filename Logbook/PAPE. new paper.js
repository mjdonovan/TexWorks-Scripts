// TeXworksScript
// Title:  log a paper
// Description: add a paper to the log
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+P,Alt+A,Alt+P,Alt+E

var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()

var strrr="% entered " + day + "/" + month + "/" + year+"\n";
var StartingText=strrr+
"\\paper{filename\u25BA}%\n{\u2590author\u258C\u25BA}%\n{\u2590title\u258C\u25BA}%\n{\u2590\u258C}% (overview)\n{}% (files)\n\n"
	
TW.target.insertText(StartingText);
TW.target.selectRange(TW.target.selectionStart-1, 1);
TW.target.selectRange(TW.target.selectionStart-StartingText.length+1+7+strrr.length, 8);
