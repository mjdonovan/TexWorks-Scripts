// TeXworksScript
// Title:  \Arrow Builder
// Description:  Builds an arrow
// Author:  Michael Donovan
// Version: 
// Date: 
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+Ctrl+A

var textBlock =  TW.target.selection;
var startingposition = TW.target.selectionStart;
var portion = TW.target.text;
var newlnoutside = portion.search("\n");
 if (portion.substring(newlnoutside,newlnoutside+20)!="\n\\InArrowEditingMode")
{
TW.target.selectRange(newlnoutside, 0);
TW.target.insertText("\n\\InArrowEditingMode");
TW.target.selectRange(startingposition+20, textBlock.length);

TW.target.insertText("\n\n@@@ Arrow Builder START\nStartStartStartStartStartStart\nZ: source entry @@Z@@ here\nA: direction    @@A@@ r\nB: Subscript    @@B@@ \nC: Superscript  @@C@@ \nD: Arrow type   @@D@@ \nE: Subscr pos   @@E@@ \nF: Supscr pos   @@F@@ \nG: Bend         @@G@@ eg ^1em\nH: Slide        @@H@@ eg +1ex\nI: Break Middle @@I@@ eg \\hole or x_1\nEndEndEndEndEndEndEndEndEndEnd\n 1     2      3    4    5    6   7   8  9    0\n->>  ^{(}->  >->  |->  -->  ..>  ~>  =  =>  { }\n@@@ Arrow Builder END\n\n");
TW.target.selectRange(TW.target.selectionStart-364, 1);
}
else
{
	//remove the flag
	TW.target.selectRange(newlnoutside,20);
	TW.target.insertText("");
	portion = TW.target.text;
	//find the start of the builder

	var BuildStart=portion.search("\n\n@@@ Arrow Builder START");
	var BuildEnd=portion.search("@@@ Arrow Builder END\n\n")+23;
	var BuilderContents = portion.substring(BuildStart,BuildEnd);
	TW.target.selectRange(BuildStart, BuildEnd-BuildStart);
	
	var ZPos=BuilderContents.search("\nZ: source entry @@Z@@ ");
	var APos=BuilderContents.search("\nA: direction    @@A@@ ");
	var BPos=BuilderContents.search("\nB: Subscript    @@B@@ ");
	var CPos=BuilderContents.search("\nC: Superscript  @@C@@ ");
	var DPos=BuilderContents.search("\nD: Arrow type   @@D@@ ");
	var EPos=BuilderContents.search("\nE: Subscr pos   @@E@@ ");
	var FPos=BuilderContents.search("\nF: Supscr pos   @@F@@ ");
	var GPos=BuilderContents.search("\nG: Bend         @@G@@ ");
	var HPos=BuilderContents.search("\nH: Slide        @@H@@ ");
	var IPos=BuilderContents.search("\nI: Break Middle @@I@@ ");
	var ENDS=BuilderContents.search("\nEndEndEndEndEndEndEndEndEndEnd");
	ZPos=BuilderContents.substring(ZPos+23,APos);
	APos=BuilderContents.substring(APos+23,BPos);
	BPos=BuilderContents.substring(BPos+23,CPos);
	CPos=BuilderContents.substring(CPos+23,DPos);
	DPos=BuilderContents.substring(DPos+23,EPos);
	EPos=BuilderContents.substring(EPos+23,FPos);
	FPos=BuilderContents.substring(FPos+23,GPos);
	GPos=BuilderContents.substring(GPos+23,HPos);
	HPos=BuilderContents.substring(HPos+23,IPos);
	IPos=BuilderContents.substring(IPos+23,ENDS);

	if (ZPos.substring(0,2)=="eg") { ZPos=""}
	if (APos.substring(0,2)=="eg") { APos=""}
	if (BPos.substring(0,2)=="eg") { BPos=""}
	if (CPos.substring(0,2)=="eg") { CPos=""}
	if (DPos.substring(0,2)=="eg") { DPos=""}
	if (EPos.substring(0,2)=="eg") { EPos=""}
	if (FPos.substring(0,2)=="eg") { FPos=""}
	if (GPos.substring(0,2)=="eg") { GPos=""}
	if (HPos.substring(0,2)=="eg") { HPos=""}
	if (IPos.substring(0,2)=="eg") { IPos=""}

	if (DPos=="1") {DPos="->>"}
	if (DPos=="2") {DPos="^{(}->"}
	if (DPos=="3") {DPos=">->"}
	if (DPos=="4") {DPos="|->"}
	if (DPos=="5") {DPos="-->"}
	if (DPos=="6") {DPos="..>"}
	if (DPos=="7") {DPos="~>"}
	if (DPos=="8") {DPos="="}
	if (DPos=="9") {DPos="=>"}
	if (DPos=="0") {DPos="{ }"}


	var ARROWTEXT = "\\ar"
	if (DPos.length>0) {ARROWTEXT = ARROWTEXT + "@{"+ DPos + "}";}
	if (GPos.length>0) {ARROWTEXT = ARROWTEXT + "@/"+ GPos + "/";}
	if (HPos.length>0) {ARROWTEXT = ARROWTEXT + "@<"+ HPos + ">";}
	                   {ARROWTEXT = ARROWTEXT + "["+ APos + "]";}
	if (BPos.length>0 || EPos.length>0)
	{
		ARROWTEXT = ARROWTEXT + "_-";
		if (EPos.length>0) {ARROWTEXT = ARROWTEXT + "("+ EPos + ")";}
		ARROWTEXT = ARROWTEXT + "{"+ BPos + "}";
	}
	if (CPos.length>0 || FPos.length>0)
	{
		ARROWTEXT = ARROWTEXT + "^-";
		if (FPos.length>0) {ARROWTEXT = ARROWTEXT + "("+ FPos + ")";}
		ARROWTEXT = ARROWTEXT + "{"+ CPos + "}";
	}
	if (IPos.length>0) {ARROWTEXT = ARROWTEXT + "|{"+ IPos + "}";}
	TW.target.insertText(ARROWTEXT);
}