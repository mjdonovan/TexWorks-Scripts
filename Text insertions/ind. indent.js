// TeXworksScript
// Title:  INDENT
// Description: INDENT
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+I,Alt+N,Alt+D
    
var startingposition = TW.target.selectionStart;
var portion = TW.target.text;
var lastNewLn = (portion.substr(0,startingposition)).lastIndexOf("\n")+1;
if (portion.substring(lastNewLn,lastNewLn+8)!="\\INDENT ")
{
	TW.target.selectRange(lastNewLn,0);
	TW.target.insertText("\\INDENT ");
	TW.target.selectRange(startingposition+8,0);
}
else { null; }
