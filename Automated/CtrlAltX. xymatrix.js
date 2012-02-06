// TeXworksScript
// Title:  xymatrix builder
// Description:  Builds an xymatrix environment
// Author:  Michael Donovan
// Version: 
// Date: 
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Ctrl+Alt+Shift+X

var textBlock =  TW.target.selection;
var startingposition = TW.target.selectionStart;
var portion = TW.target.text;
var MatBuildStart=portion.search("\n\n@@@ xymatrix Builder START");

var StartingText=
"\n\n@@@ xymatrix Builder START\nStartStartStartStartStartStart\nA: (Height, Width)  @@A@@ 22\u25BA\nB: Delimiters       @@B@@ \u2590\\[\u258C\u25BA\nC: Row and Column   @@C@@ \u2590\u258C\u25BA\nD: Row height       @@D@@ \u2590\u258C\u25BA\nE: Column width     @@E@@ \u2590\u258C\u25BA\nF: Uniform spacing  @@F@@ \u2590eg 1-4\u258C\u25BA\nG: Inline?          @@G@@ \u2590\u258C\u25BA\nH: vcenter?         @@H@@ \u2590\u258C\u25BA\nI: Rotate           @@I@@ \u2590eg ur\u258C\u25BA\nJ: Small objects?   @@J@@ \u2590\u258C\u25BA\nK: Small labels?    @@K@@ \u2590\u258C\u25BA\nL: Settings only?   @@L@@ \u2590\u258C\nEndEndEndEndEndEndEndEndEndEnd\nF=1 spaces equal   F=2 ignore entry sizes\nF=3 rows equal     F=4 columns equal\n@@@ xymatrix Builder END\n\n"

var StartingTextIfSettingsOnly=
"\n\n@@@ xymatrix Builder START\nStartStartStartStartStartStart\nA: (Height, Width)  @@A@@ % SETTINGS ONLY %\nB: Delimiters       @@B@@ \nC: Row and Column   @@C@@ \u25BA\nD: Row height       @@D@@ \u2590\u258C\u25BA\nE: Column width     @@E@@ \u2590\u258C\u25BA\nF: Uniform spacing  @@F@@ \u2590eg 1-4\u258C\u25BA\nG: Inline?          @@G@@ \u2590\u258C\u25BA\nH: vcenter?         @@H@@ \u2590\u258C\u25BA\nI: Rotate           @@I@@ \u2590eg ur\u258C\u25BA\nJ: Small objects?   @@J@@ \u2590\u258C\u25BA\nK: Small labels?    @@K@@ \u2590\u258C\nL: Settings only?   @@L@@ y\nEndEndEndEndEndEndEndEndEndEnd\nF=1 spaces equal   F=2 ignore entry sizes\nF=3 rows equal     F=4 columns equal\n@@@ xymatrix Builder END\n\n"

if (MatBuildStart<0)
{
	var tester = portion.substr(0,startingposition);
	if (startingposition>8)
	{
		tester = tester.substr(startingposition-9);
	}
	if (tester == "\\xymatrix")
	{
		StartingText=StartingTextIfSettingsOnly;
		TW.target.insertText(StartingText);
		TW.target.selectRange(TW.target.selectionStart-1, 1);
		TW.target.selectRange(TW.target.selectionStart-StartingText.length+1+157, 0);
	}
	else
	{
		TW.target.insertText(StartingText);
		TW.target.selectRange(TW.target.selectionStart-1, 1);
		TW.target.selectRange(TW.target.selectionStart-StartingText.length+1+86, 2);
	}
}
else
{
	null; //(moved to arrow builder!)
}