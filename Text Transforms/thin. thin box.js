// TeXworksScript
// Title:  \makebox[0cm][l]{\,...}
// Description: inserts \makebox[0cm][l]{\,...}
// Author:  Michael Donovan
// Version: 
// Date: 
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+T,Alt+H,Alt+I,Alt+N

if (TW.target.selection.length==0)
{
	TW.target.insertText("\\makebox[0cm][l\u25BA]{\u00BF}");
	TW.target.selectRange(TW.target.selectionStart-6, 1)
}
else
{
	var textBlock =  TW.target.selection;
	var putAtStart = "\\makebox[0cm][l]{\\,";
	var putAtEnd = "}";
	var INSERTME = putAtStart + textBlock + putAtEnd;
	
	TW.target.insertText(INSERTME);
	TW.target.selectRange(
		TW.target.selectionStart-putAtEnd.length-textBlock.length,
		textBlock.length
	)
}

