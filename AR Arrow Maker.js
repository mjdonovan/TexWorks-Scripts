// TeXworksScript
// Title:  arrow builder
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

var StartingText="\n\n@@@ Arrow Builder START\nStartStartStartStartStartStart\nA: Direction    @@A@@ r\nB: Superscript  @@B@@ \nC: Subscript    @@C@@ \nD: Arrow type   @@D@@ \nE: Supscr pos   @@E@@ \nF: Subscr pos   @@F@@ \nG: Bend         @@G@@ eg ^1em\nH: Slide        @@H@@ eg +1ex\nI: Break Middle @@I@@ eg \\hole or x_1\nJ: Pass Under   @@J@@ eg [r][rr]\nK: 2-cell direc @@K@@ eg rr\nL: 2-arr label  @@L@@ eg a\nM: omit curves? @@M@@ \nN: Extra curve  @@N@@ eg 5-9\nEndEndEndEndEndEndEndEndEndEnd\n 1     2      3    4    5    6   7   8  9    0\n->>  ^{(}->  >->  |->  -->  ..>  ~>  =  =>  { }\n@@@ Arrow Builder END\n\n"

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
	var KPos=BuilderContents.search("\nK: 2-cell direc @@K@@ ");
	var LPos=BuilderContents.search("@@L@@ ")-17;
	var MPos=BuilderContents.search("@@M@@ ")-17;
	var NPos=BuilderContents.search("\nN: Extra curve  @@N@@ ");
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
	JPos=BuilderContents.substring(JPos+23,KPos);
	KPos=BuilderContents.substring(KPos+23,LPos);
	LPos=BuilderContents.substring(LPos+23,MPos);
	MPos=BuilderContents.substring(MPos+23,NPos);
	NPos=BuilderContents.substring(NPos+23,ENDS);

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
	if (KPos.substring(0,2)=="eg") { KPos=""}
	if (LPos.substring(0,2)=="eg") { LPos=""}
	if (MPos.substring(0,2)=="eg") { MPos=""}
	if (NPos.substring(0,2)=="eg") { NPos=""}

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
if(KPos.length>0){
	ARROWTEXT = "%\\usepackage[all,2cell]{xy}\n%\\UseAllTwocells\n\\xtwocell"
	ARROWTEXT = ARROWTEXT + "["+ KPos + "]{}";
	if (MPos=="y") 
	{
		BPos=""; CPos=""; ARROWTEXT = ARROWTEXT + "\\omit";
	}
	else if (NPos.length>0)
	{
		ARROWTEXT = ARROWTEXT + "<"+ NPos + ">";
	}
	if (BPos.length>0) {ARROWTEXT = ARROWTEXT + "^{"+ BPos + "}";}
	if (CPos.length>0) {ARROWTEXT = ARROWTEXT + "_{"+ CPos + "}";}
	if (LPos.length>0) {ARROWTEXT = ARROWTEXT + "{{"+ LPos + "}}";}
}
else
{
	if (DPos.length>0) {ARROWTEXT = ARROWTEXT + "@{"+ DPos + "}";}
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