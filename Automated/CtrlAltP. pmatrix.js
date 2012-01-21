// TeXworksScript
// Title:  \pmatrix Builder
// Description:  Builds a pmatrix environment
// Author:  Michael Donovan
// Version: 
// Date: 
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Ctrl+Alt+Shift+P

var textBlock =  TW.target.selection;
var startingposition = TW.target.selectionStart;
var portion = TW.target.text;
var BuildStart=portion.search("\n\n@@@ matrix Builder START");

var StartingText=
"\n\n@@@ matrix Builder START\nStartStartStartStartStartStart\nK: Rows, Columns    @@K@@ 22\nL: Fill with        @@L@@ \nEndEndEndEndEndEndEndEndEndEnd\n@@@ matrix Builder END\n\n"

if (BuildStart<0)
{
	TW.target.insertText(StartingText);
	TW.target.selectRange(TW.target.selectionStart-1, 1);
	TW.target.selectRange(TW.target.selectionStart-StartingText.length+1+84, 2);
}
else
{
	var BuildEnd=portion.search("@@@ matrix Builder END\n\n")+26;
	var BuilderContents = portion.substring(BuildStart,BuildEnd);
	TW.target.selectRange(BuildStart, BuildEnd-BuildStart);

	var APos=BuilderContents.search("@@K@@ ")+6-27;
	var BPos=BuilderContents.search("@@L@@ ")+6-27;
	var ENDS=BuilderContents.search("EndEndEndEndEndEndEndEndEndEnd")+1;

	APos=BuilderContents.substring(APos+27,BPos);
	BPos=BuilderContents.substring(BPos+27,ENDS-2);

	var THELINES = ""

	if (APos.length==2 && APos.match(/[1-9][1-9]/)!=null)
	{
		var numR = 0;
		var numC = 0;
		var R;
		var C;
		if (APos[0]=="1") {numR =1}
		if (APos[0]=="2") {numR =2}
		if (APos[0]=="3") {numR =3}
		if (APos[0]=="4") {numR =4}
		if (APos[0]=="5") {numR =5}
		if (APos[0]=="6") {numR =6}
		if (APos[0]=="7") {numR =7}
		if (APos[0]=="8") {numR =8}
		if (APos[0]=="9") {numR =9}

		if (APos[1]=="1") {numC =1}
		if (APos[1]=="2") {numC =2}
		if (APos[1]=="3") {numC =3}
		if (APos[1]=="4") {numC =4}
		if (APos[1]=="5") {numC =5}
		if (APos[1]=="6") {numC =6}
		if (APos[1]=="7") {numC =7}
		if (APos[1]=="8") {numC =8}
		if (APos[1]=="9") {numC =9}
		for (R=1;R<=numR;R++)
		{
			for (C=1;C<=numC;C++)
			{
				if (C!=numC)
				{
				THELINES=THELINES+BPos+"&%r"+R+"c"+C+"\n"
				}
				else
				{
					if (R!=numR)
					{
						THELINES=THELINES+BPos+"\\\\%r"+R+"c"+C+"\n"
					}
					else
					{
						THELINES=THELINES+BPos+"%r"+R+"c"+C+"\n"
					}
				}
			}
		}
	}
	TW.target.insertText("\\[\\begin{pmatrix}\n"+THELINES+"\\end{pmatrix}\\]\n");
}