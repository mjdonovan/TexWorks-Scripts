// TeXworksScript
// Title:  begin/end
// Description:  Begins and ends an environment
// Author:  Michael Donovan
// Version: 
// Date: 
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: F6

var textBlock =  TW.target.selection;
var startingposition = TW.target.selectionStart;
var portion = TW.target.text;
var BuildStart=portion.search("\n\n@@@ environment Builder START");

var StartingText=
"\n\n@@@ environment Builder START\nStartStartStartStartStartStart\nB: Name             @@B@@ \nEndEndEndEndEndEndEndEndEndEnd\n@@@ environment Builder END\n\n"

if (BuildStart<0)
{
	TW.target.insertText(StartingText);
	TW.target.selectRange(TW.target.selectionStart-1, 1);
	TW.target.selectRange(TW.target.selectionStart-StartingText.length+1+89, 0);
}
else
{
	var BuildEnd=portion.search("@@@ environment Builder END\n\n")+29;
	var BuilderContents = portion.substring(BuildStart,BuildEnd);
	TW.target.selectRange(BuildStart, BuildEnd-BuildStart);

	var BPos=BuilderContents.search("@@B@@ ")+6-27;
	var ENDS=BuilderContents.search("EndEndEndEndEndEndEndEndEndEnd")+1;

	BPos=BuilderContents.substring(BPos+27,ENDS-2);

	var SGAP="";
	if (BuildStart>0 && portion[BuildStart-1]!="\n")
	{
		SGAP="\n"
	}

	TW.target.insertText(SGAP+"\\begin{"+BPos+"}\n\n\\end{"+BPos+"}\n");
	TW.target.selectRange(TW.target.selectionStart-BPos.length-8,0);
}