// TeXworksScript
// Title:  8. Itemize
// Description: Starts an itemize
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Ctrl+8

var textBlock =  TW.target.selection;
var putAtStart = "\\begin{itemize}\\squishlist\n\\setlength{\\parindent}{.25in}\n\\item ";
var putAtEnd = "\n\\end{itemize}";

if (TW.target.selectionStart!=0 && TW.target.text[TW.target.selectionStart-1]!="\n")
{
	putAtStart="\n"+putAtStart;
}
if (TW.target.selectionStart+textBlock.length!=TW.target.text.length && TW.target.text[TW.target.selectionStart+textBlock.length]!="\n")
{
	putAtEnd=putAtEnd+"\n";
}

TW.target.insertText(putAtStart + textBlock + putAtEnd);
TW.target.selectRange(TW.target.selectionStart-putAtEnd.length, 0);

