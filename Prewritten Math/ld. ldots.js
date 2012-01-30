// TeXworksScript
// Title:  ldots
// Description:  inserts ,\ldots,
// Author:  Michael Donovan
// Version: 
// Date: 
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+L,Alt+D

var portion = TW.target.text;
var SELSTART = TW.target.selectionStart;

if (portion.substr(Math.max(0,SELSTART-1),1)=="," ||
    portion.substr(Math.max(0,SELSTART-2),2)==", " )
{
	TW.target.insertText("\\ldots,");
}
else
{
	TW.target.insertText(",\\ldots,");
}
