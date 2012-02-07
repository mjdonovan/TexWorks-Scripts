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
var toPaste;

if (PAR>-1)
{
	toPaste="\\paragraph{\u25BA}\n\u2590\u258C";
} else
{
	toPaste="\\paragraph*{\u25BA}\n\u2590\u258C";
}
if (TW.target.selectionStart!=0 && TW.target.text[TW.target.selectionStart-1]!="\n")
{
	toPaste="\n"+toPaste;
}
TW.target.insertText(toPaste);
TW.target.selectRange(TW.target.selectionStart-5, 0)

/*
Type %%%USINGxNUMBERS to use numbers for type x and all supertypes.
*/