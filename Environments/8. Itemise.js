// TeXworksScript
// Title:  8. Itemise
// Description: Starts an itemise
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+8

var putAtStart="\\begin{itemise}\n\\setlength{\\parindent}{.25in}\n\\item \n\\end{itemise}"
var startingplace = 52;

if (TW.target.text[TW.target.selectionStart-1]!="\n")
{
	putAtStart="\n"+putAtStart;
	startingplace=startingplace+1;
}

TW.target.insertText(putAtStart);
TW.target.selectRange(TW.target.selectionStart-1, 1)
TW.target.selectRange(TW.target.selectionStart-putAtStart.length+startingplace+1, 0)

