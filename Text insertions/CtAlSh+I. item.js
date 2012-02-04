// TeXworksScript
// Title:  item
// Description:  inserts \item
// Author:  Michael Donovan
// Version: 
// Date: 
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Ctrl+Alt+Shift+I

var putAtStart = "\\item ";
if (TW.target.selectionStart!=0 && TW.target.text[TW.target.selectionStart-1]!="\n")
{
	putAtStart="\n"+putAtStart;
}
TW.target.insertText(putAtStart);
