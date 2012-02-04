// TeXworksScript
// Title:  subsubsection
// Description: Starts a subsubsection
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+Shift+S, Alt+Shift+S

var portion = TW.target.text;
var SS=portion.search("%%%USINGsubsectionNUMBERS");
var SSS=portion.search("%%%USINGsubsubsectionNUMBERS");
var PAR=portion.search("%%%USINGparagraphNUMBERS");

if (SSS>-1 || PAR>-1)
{
	TW.target.insertText("\\subsubsection{}\n");
} else
{
	TW.target.insertText("\\subsubsection*{}\n");
}
TW.target.selectRange(TW.target.selectionStart-2, 0)


/*
Type %%%USINGxNUMBERS to use numbers for type x and all supertypes.
*/