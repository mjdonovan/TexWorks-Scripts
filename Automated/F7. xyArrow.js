// TeXworksScript
// Title:  xyarrow builder
// Description:  Builds an arrow
// Author:  Michael Donovan
// Version: 
// Date: 
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: F7

var textBlock =  TW.target.selection;
var startingposition = TW.target.selectionStart;
var portion = TW.target.text;
var BuildStart=portion.search("\n\n@@@ Arrow Builder START");

var StartingText="\n\n@@@ Arrow Builder START\nStartStartStartStartStartStart\nA: Direction    @@A@@ r\nB: Superscript  @@B@@ \nC: Subscript    @@C@@ \nD: Arrow type   @@D@@ \nE: Supscr pos   @@E@@ \nF: Subscr pos   @@F@@ \nG: Bend         @@G@@ eg ^1em\nH: Slide        @@H@@ eg +1ex\nI: Break Middle @@I@@ eg \\hole or x_1\nJ: Pass Under   @@J@@ eg [r][rr]\nW: 2-cell direc @@W@@ eg rr\nX: 2-arr label  @@X@@ eg a\nY: omit curves? @@Y@@ \nZ: Extra curve  @@Z@@ eg 5-9\nEndEndEndEndEndEndEndEndEndEnd\n 1     2      3    4    5    6   7   8  9    0\n->>  ^{(}->  >->  |->  -->  ..>  ~>  =  =>  none\n@@@ Arrow Builder END\n\n"

//THE BIG IF STATEMENT -  
if (BuildStart<0)
{
	
	TW.target.insertText(StartingText);
	TW.target.selectRange(TW.target.selectionStart-1, 1);
	TW.target.selectRange(TW.target.selectionStart-StartingText.length+1+79, 1);
}
else
{
	var BuildEnd=portion.search("@@@ Arrow Builder END\n\n")+23;
	var BuilderContents = portion.substring(BuildStart,BuildEnd);
	TW.target.selectRange(BuildStart, BuildEnd-BuildStart);
	
	var APos=BuilderContents.search("\nA: Direction    @@A@@ ");
	var BPos=BuilderContents.search("\nB: Superscript  @@B@@ ");
	var CPos=BuilderContents.search("\nC: Subscript    @@C@@ ");
	var DPos=BuilderContents.search("\nD: Arrow type   @@D@@ ");
	var EPos=BuilderContents.search("\nE: Supscr pos   @@E@@ ");
	var FPos=BuilderContents.search("\nF: Subscr pos   @@F@@ ");
	var GPos=BuilderContents.search("\nG: Bend         @@G@@ ");
	var HPos=BuilderContents.search("\nH: Slide        @@H@@ ");
	var IPos=BuilderContents.search("\nI: Break Middle @@I@@ ");
	var JPos=BuilderContents.search("\nJ: Pass Under   @@J@@ ");
	var WPos=BuilderContents.search("\nW: 2-cell direc @@W@@ ");
	var XPos=BuilderContents.search("@@X@@ ")-17;
	var YPos=BuilderContents.search("@@Y@@ ")-17;
	var ZPos=BuilderContents.search("\nZ: Extra curve  @@Z@@ ");
	var ENDS=BuilderContents.search("\nEndEndEndEndEndEndEndEndEndEnd");
	APos=BuilderContents.substring(APos+23,BPos);
	BPos=BuilderContents.substring(BPos+23,CPos);
	CPos=BuilderContents.substring(CPos+23,DPos);
	DPos=BuilderContents.substring(DPos+23,EPos);
	EPos=BuilderContents.substring(EPos+23,FPos);
	FPos=BuilderContents.substring(FPos+23,GPos);
	GPos=BuilderContents.substring(GPos+23,HPos);
	HPos=BuilderContents.substring(HPos+23,IPos);
	IPos=BuilderContents.substring(IPos+23,JPos);
	JPos=BuilderContents.substring(JPos+23,WPos);
	WPos=BuilderContents.substring(WPos+23,XPos);
	XPos=BuilderContents.substring(XPos+23,YPos);
	YPos=BuilderContents.substring(YPos+23,ZPos);
	ZPos=BuilderContents.substring(ZPos+23,ENDS);

	if (APos.substring(0,2)=="eg") { APos=""}
	if (BPos.substring(0,2)=="eg") { BPos=""}
	if (CPos.substring(0,2)=="eg") { CPos=""}
	if (DPos.substring(0,2)=="eg") { DPos=""}
	if (EPos.substring(0,2)=="eg") { EPos=""}
	if (FPos.substring(0,2)=="eg") { FPos=""}
	if (GPos.substring(0,2)=="eg") { GPos=""}
	if (HPos.substring(0,2)=="eg") { HPos=""}
	if (IPos.substring(0,2)=="eg") { IPos=""}
	if (JPos.substring(0,2)=="eg") { JPos=""}
	if (WPos.substring(0,2)=="eg") { WPos=""}
	if (XPos.substring(0,2)=="eg") { XPos=""}
	if (YPos.substring(0,2)=="eg") { YPos=""}
	if (ZPos.substring(0,2)=="eg") { ZPos=""}

	if (DPos=="1") {DPos="->>"}
	if (DPos=="2") {DPos="^{(}->"}
	if (DPos=="3") {DPos=">->"}
	if (DPos=="4") {DPos="|->"}
	if (DPos=="5") {DPos="-->"}
	if (DPos=="6") {DPos="..>"}
	if (DPos=="7") {DPos="~>"}
	if (DPos=="8") {DPos="="}
	if (DPos=="9") {DPos="=>"}
	if (DPos=="0") {DPos="BLANKME"}


	var ARROWTEXT = "\\ar"
if(WPos.length>0){
	ARROWTEXT = "%\\usepackage[all,2cell]{xy}\n%\\UseAllTwocells\n\\xtwocell"
	ARROWTEXT = ARROWTEXT + "["+ WPos + "]{}";
	if (YPos=="y") 
	{
		BPos=""; CPos=""; ARROWTEXT = ARROWTEXT + "\\omit";
	}
	else if (ZPos.length>0)
	{
		ARROWTEXT = ARROWTEXT + "<"+ ZPos + ">";
	}
	if (BPos.length>0) {ARROWTEXT = ARROWTEXT + "^{"+ BPos + "}";}
	if (CPos.length>0) {ARROWTEXT = ARROWTEXT + "_{"+ CPos + "}";}
	if (XPos.length>0) {ARROWTEXT = ARROWTEXT + "{{"+ XPos + "}}";}
}
else
{
	if (DPos.length>0)
	{
		if (DPos=="BLANKME") {DPos=""}
		ARROWTEXT = ARROWTEXT + "@{"+ DPos + "}";
	}
	if (GPos.length>0) {ARROWTEXT = ARROWTEXT + "@/"+ GPos + "/";}
	if (HPos.length>0) {ARROWTEXT = ARROWTEXT + "@<"+ HPos + ">";}
	if (JPos.length>0) {ARROWTEXT = ARROWTEXT + "'"+ JPos;}
	ARROWTEXT = ARROWTEXT + "["+ APos + "]";
	if (BPos.length>0 || EPos.length>0)
	{
		ARROWTEXT = ARROWTEXT + "^-";
		if (EPos.length>0) {ARROWTEXT = ARROWTEXT + "("+ EPos + ")";}
		ARROWTEXT = ARROWTEXT + "{"+ BPos + "}";
	}
	if (CPos.length>0 || FPos.length>0)
	{
		ARROWTEXT = ARROWTEXT + "_-";
		if (FPos.length>0) {ARROWTEXT = ARROWTEXT + "("+ FPos + ")";}
		ARROWTEXT = ARROWTEXT + "{"+ CPos + "}";
	}
	if (IPos.length>0) {ARROWTEXT = ARROWTEXT + "|{"+ IPos + "}";}
}
	TW.target.insertText(ARROWTEXT);
}