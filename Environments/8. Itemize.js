// TeXworksScript
// Title:  8. Itemize
// Description: Starts an itemize
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Ctrl+8

var putAtStart="\\begin{itemize}\\squishlist\n\\setlength{\\parindent}{.25in}\n\\item \n\\end{itemize}"
var startingplace = 63;

if (TW.target.text[TW.target.selectionStart-1]!="\n")
{
	putAtStart="\n"+putAtStart;
	startingplace=startingplace+1;
}

TW.target.insertText(putAtStart);
TW.target.selectRange(TW.target.selectionStart-1, 1)
TW.target.selectRange(TW.target.selectionStart-putAtStart.length+startingplace+1, 0)

