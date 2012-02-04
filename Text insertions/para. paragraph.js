// TeXworksScript
// Title:  paragraph
// Description: Starts a paragraph
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+P,Alt+A,Alt+R,Alt+A
    
var portion = TW.target.text;
var SS=portion.search("%%%USINGsubsectionNUMBERS");
var SSS=portion.search("%%%USINGsubsubsectionNUMBERS");
var PAR=portion.search("%%%USINGparagraphNUMBERS");

if (PAR>-1)
{
	TW.target.insertText("\\paragraph{}\n");
} else
{
	TW.target.insertText("\\paragraph*{}\n");
}
TW.target.selectRange(TW.target.selectionStart-2, 0)


/*
Type %%%USINGxNUMBERS to use numbers for type x and all supertypes.
*/