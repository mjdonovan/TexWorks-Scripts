// TeXworksScript
// Title:  \xymatrix Builder
// Description:  Builds an xymatrix environment
// Author:  Michael Donovan
// Version: 
// Date: 
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Shift+F7

var textBlock =  TW.target.selection;
var startingposition = TW.target.selectionStart;
var portion = TW.target.text;
var BuildStart=portion.search("\n\n@@@ xymatrix Builder START");

var StartingText=
"\n\n@@@ xymatrix Builder START\nStartStartStartStartStartStart\nA: Size (#Row#Col)  @@A@@ 22\nB: Delimiters       @@B@@ \\[\nC: Spacing (all)    @@C@@ \nD: Spacing (row)    @@D@@ \nE: Spacing (col)    @@E@@ \nF: Uniform spacing  @@F@@ eg 1-4\nG: Inline?          @@G@@ \nH: vcenter?         @@H@@ \nI: Rotate           @@I@@ eg ur\nJ: Small objects?   @@J@@ \nK: Small labels?    @@K@@ \nL: Settings only?   @@L@@ \nEndEndEndEndEndEndEndEndEndEnd\nF=1 spaces equal   F=2 ignore entry sizes\nF=3 rows equal     F=4 columns equal\n@@@ xymatrix Builder END\n\n"

if (BuildStart<0)
{
	TW.target.insertText(StartingText);
	TW.target.selectRange(TW.target.selectionStart-1, 1);
	TW.target.selectRange(TW.target.selectionStart-StartingText.length+1+86, 2);
}
else
{
	var BuildEnd=portion.search("@@@ xymatrix Builder END\n\n")+26;
	var BuilderContents = portion.substring(BuildStart,BuildEnd);
	TW.target.selectRange(BuildStart, BuildEnd-BuildStart);

	var APos=BuilderContents.search("@@A@@ ")+6-27;
	var BPos=BuilderContents.search("@@B@@ ")+6-27;
	var CPos=BuilderContents.search("@@C@@ ")+6-27;
	var DPos=BuilderContents.search("@@D@@ ")+6-27;
	var EPos=BuilderContents.search("@@E@@ ")+6-27;
	var FPos=BuilderContents.search("@@F@@ ")+6-27;
	var GPos=BuilderContents.search("@@G@@ ")+6-27;
	var HPos=BuilderContents.search("@@H@@ ")+6-27;
	var IPos=BuilderContents.search("@@I@@ ")+6-27;
	var JPos=BuilderContents.search("@@J@@ ")+6-27;
	var KPos=BuilderContents.search("@@K@@ ")+6-27;
	var LPos=BuilderContents.search("@@L@@ ")+6-27;
	var ENDS=BuilderContents.search("EndEndEndEndEndEndEndEndEndEnd")+1;
	APos=BuilderContents.substring(APos+27,BPos);
	BPos=BuilderContents.substring(BPos+27,CPos);
	CPos=BuilderContents.substring(CPos+27,DPos);
	DPos=BuilderContents.substring(DPos+27,EPos);
	EPos=BuilderContents.substring(EPos+27,FPos);
	FPos=BuilderContents.substring(FPos+27,GPos);
	GPos=BuilderContents.substring(GPos+27,HPos);
	HPos=BuilderContents.substring(HPos+27,IPos);
	IPos=BuilderContents.substring(IPos+27,JPos);
	JPos=BuilderContents.substring(JPos+27,KPos);
	KPos=BuilderContents.substring(KPos+27,LPos);
	LPos=BuilderContents.substring(LPos+27,ENDS-2);

	if (BPos.substring(0,2)=="eg") { BPos=""}
	if (CPos.substring(0,2)=="eg") { CPos=""}
	if (DPos.substring(0,2)=="eg") { DPos=""}
	if (EPos.substring(0,2)=="eg") { EPos=""}
	if (FPos.substring(0,2)=="eg") { FPos=""}
	if (GPos.substring(0,2)=="eg") { GPos=""}
	if (HPos.substring(0,2)=="eg") { HPos=""}
	if (IPos.substring(0,2)=="eg") { IPos=""}
	if (JPos.substring(0,2)=="eg") { JPos=""}
	if (KPos.substring(0,2)=="eg") { KPos=""}
	if (LPos.substring(0,2)=="eg") { LPos=""}

	if (FPos=="1"||FPos=="2"||FPos=="3"||FPos=="4")
	{
		if (FPos=="1") {FPos="@!"}
		if (FPos=="2") {FPos="@!0"}
		if (FPos=="3") {FPos="@!R"}
		if (FPos=="4") {FPos="@!C"}
	}
	else
	{ FPos=""}

	var SDELIM = "";
	var EDELIM = "";
	var DEFS = "";
	var SETTINGS = "";
	var THELINES = ""

	if (BuildStart>0 && portion[BuildStart-1]!="\n")
	{
		SDELIM="\n"
	}
	if (BPos=="\\[")
	{
		SDELIM=SDELIM+"\\["
		EDELIM="\\]"+EDELIM
	}
	if (BPos=="$"||BPos=="$$")
	{
		SDELIM=SDELIM+"$";
		EDELIM="$"+EDELIM
	}
	EDELIM="}"+EDELIM;
	if (JPos=="y" || KPos=="y" || HPos=="y")
	{
		if (HPos=="y")
		{
			SDELIM=SDELIM+"\\vcenter"
		}
		SDELIM=SDELIM+"{"
		if (JPos=="y" || KPos=="y")
		{
			SDELIM=SDELIM+"\n";
		}
		EDELIM="}"+EDELIM
		if (JPos=="y")
		{
			SDELIM=SDELIM+"\\def\\objectstyle{\\scriptstyle}\n"
		}
		if (KPos=="y")
		{
			SDELIM=SDELIM+"\\def\\labelstyle{\\scriptstyle}\n"
		}
	}
	if (CPos.length>0)
	{
		SETTINGS=SETTINGS+"@="+CPos;
	}
	else
	{
		if (DPos.length>0)
		{
			SETTINGS=SETTINGS+"@R="+DPos;
		}
		if (EPos.length>0)
		{
			SETTINGS=SETTINGS+"@C="+EPos;
		}
	}
	SETTINGS=SETTINGS+FPos;
	if (GPos=="y")
	{
		SETTINGS=SETTINGS+"@1";
	}
	if (IPos.length>0)
	{
		SETTINGS=SETTINGS+"@"+IPos;
	}
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
				THELINES=THELINES+"&%r"+R+"c"+C+"\n"
				}
				else
				{
					if (R!=numR)
					{
						THELINES=THELINES+"\\\\%r"+R+"c"+C+"\n"
					}
					else
					{
						THELINES=THELINES+"%r"+R+"c"+C+"\n"
					}
				}
			}
		}
	}
	if (LPos!="y")
	{
		var INSERTMEa = SDELIM+"\\xymatrix"+SETTINGS+"{\n";
		var INSERTMEb = THELINES+EDELIM;
		TW.target.insertText(SDELIM+"\\xymatrix"+SETTINGS+"{\n"+THELINES+EDELIM);	
		TW.target.selectRange(TW.target.selectionStart-1, 1);
		TW.target.selectRange(
			TW.target.selectionStart-INSERTMEa.length-INSERTMEb.length+1, 1);
		TW.target.selectRange(TW.target.selectionStart+INSERTMEa.length, 0);
	}
	else
	{
		TW.target.insertText(SETTINGS);
	}
//	TW.target.insertText(LPos);
}