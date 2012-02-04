// TeXworksScript
// Title:  noindent
// Description: \noindent
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Ctrl+Alt+Shift+LEFT

var startingposition = TW.target.selectionStart;
var portion = TW.target.text;
var lastNewLn = (portion.substr(0,startingposition)).lastIndexOf("\n")+1;
if (portion.substring(lastNewLn,lastNewLn+10)!="\\noindent ")
{
	TW.target.selectRange(lastNewLn,0);
	TW.target.insertText("\\noindent ");
	TW.target.selectRange(startingposition+10,0);
}
else { null; }
