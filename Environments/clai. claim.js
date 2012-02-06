// TeXworksScript
// Title:  claim
// Description: Starts a claim
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+C,Alt+L,Alt+A,Alt+I

var putAtStart="\\begin{claim}\n\n\\end{claim}"
var startingplace = 14;

if (TW.target.selectionStart!=0 && TW.target.text[TW.target.selectionStart-1]!="\n")
{
	putAtStart="\n"+putAtStart;
	startingplace=startingplace+1;
}
if (TW.target.selectionStart!=TW.target.text.length && TW.target.text[TW.target.selectionStart]!="\n")
{
	putAtStart=putAtStart+"\n";
}

TW.target.insertText(putAtStart);
TW.target.selectRange(TW.target.selectionStart-1, 1)
TW.target.selectRange(TW.target.selectionStart-putAtStart.length+startingplace+1, 0)
