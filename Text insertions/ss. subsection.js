// TeXworksScript
// Title:  subsection
// Description: Starts a subsection
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+S, Alt+S
    
var portion = TW.target.text;
var SS=portion.search("%%%USINGsubsectionNUMBERS");
var SSS=portion.search("%%%USINGsubsubsectionNUMBERS");
var PAR=portion.search("%%%USINGparagraphNUMBERS");

if (SSS>-1 || PAR>-1 || SS>-1)
{
	TW.target.insertText("\\subsection{}\n");
} else
{
	TW.target.insertText("\\subsection*{}\n");
}
TW.target.selectRange(TW.target.selectionStart-2, 0)


/*
Type %%%USINGxNUMBERS to use numbers for type x and all supertypes.
*/