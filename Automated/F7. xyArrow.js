// TeXworksScript
// Title:  xyarrow builder
// Description:  Builds an arrow
// Author:  Michael Donovan
// Version: 
// Date: 
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Insert

function test3(str) {return /^\d{1,2}$/.test(str);} //test str is a 1-2 digit integer

var textBlock =  TW.target.selection;
var startingposition = TW.target.selectionStart;
var portion = TW.target.text;
var MatBuildStart=portion.search("\n\n@@@ xymatrix Builder START");
var ArBuildStart=portion.search("\n\n@@@ Arrow Builder START");

var StartingText=
"\n\n@@@ Arrow Builder START\nStartStartStartStartStartStart\n\nA: Direction    @@A@@ r\u25BA\nN: Tail pos     @@N@@ \u263C\"1\"\nO: Head pos     @@O@@ \u263C[l]\n\nB: Superscript  @@B@@ \u2590\u258C\u25BA\nE: Supscr pos   @@E@@ \nK: Supscr label @@K@@ \n\nC: Subscript    @@C@@ \u2590\u258C\u25BA\nF: Subscr pos   @@F@@ \nL: Subscr label @@L@@ \n\nI: Middle       @@I@@ \u2590\u258C\u25BA\nP: Middle pos   @@P@@ \nM: Middle label @@M@@ \n\nD: Arrow type   @@D@@ \u2590\u258C\u25BA\nG: Bend         @@G@@ \u2590\u263C\u258C^1em\u25BA\nH: Slide        @@H@@ \u2590\u263C\u258C.5ex\u25BA\nQ: Colour       @@Q@@ \u2590\u263C\u258Cred\u25BA\n\nJ: Via (list)   @@J@@ \u263C[r][rr]\nR: Cross arrow  @@R@@ [\u2590\u258C\u25BA];[\u2590\u258C\u25BA]\nS: Cross arrow  @@S@@ \nT: Cross arrow  @@T@@ \n\nW: 2-cell direc @@W@@ \u2590\u258C\u25BA\nX: 2-arr label  @@X@@ \u2590\u263Ca\u258C\u25BA\nY: omit curves? @@Y@@ \u2590\u258C\u25BA\nZ: Extra curve  @@Z@@ \u2590\u263C5-9\u258C\n\nEndEndEndEndEndEndEndEndEndEnd\n 1 \u2551  2   \u2551 3 \u2551 4 \u2551 5 \u2551 6 \u25517 \u25518\u25519 \u2551 0\n->>\u2551^{(}->\u2551>->\u2551|->\u2551-->\u2551..>\u2551~>\u2551=\u2551=>\u2551none\n@@@ Arrow Builder END\n\n"

//THE BIG IF STATEMENT -  
if (MatBuildStart>-1)
{
	var BuildEnd=portion.search("@@@ xymatrix Builder END\n\n")+26;
	var BuilderContents = portion.substring(MatBuildStart,BuildEnd);
	TW.target.selectRange(MatBuildStart, BuildEnd-MatBuildStart);

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

	APos = APos.replace(/[\u2590\u258C\u25BA]/g,'');
	BPos = BPos.replace(/[\u2590\u258C\u25BA]/g,'');
	CPos = CPos.replace(/[\u2590\u258C\u25BA]/g,'');
	DPos = DPos.replace(/[\u2590\u258C\u25BA]/g,'');
	EPos = EPos.replace(/[\u2590\u258C\u25BA]/g,'');
	FPos = FPos.replace(/[\u2590\u258C\u25BA]/g,'');
	GPos = GPos.replace(/[\u2590\u258C\u25BA]/g,'');
	HPos = HPos.replace(/[\u2590\u258C\u25BA]/g,'');
	IPos = IPos.replace(/[\u2590\u258C\u25BA]/g,'');
	JPos = JPos.replace(/[\u2590\u258C\u25BA]/g,'');
	KPos = KPos.replace(/[\u2590\u258C\u25BA]/g,'');
	LPos = LPos.replace(/[\u2590\u258C\u25BA]/g,'');

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

	if (MatBuildStart>0 && portion[MatBuildStart-1]!="\n")
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
	
	var sRes = APos.split(" ");
	var numR = 0;
	var numC = 0;
	var NumsGood=0;
	if (sRes.length!=1 && sRes.length!=2)
		{NumsGood=-1}
	else if (sRes.length==1 && APos.length==2 && APos.match(/[1-9][1-9]/)!=null)
	{
		NumsGood=1;
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
	}
	if (NumsGood==0 && sRes.length==2 && test3(sRes[0])&& test3(sRes[1]))
	{
		NumsGood=1;
		numR= parseInt(sRes[0] ,10);
		numC= parseInt(sRes[1] ,10);
	}
	if (NumsGood==1)
	{
		for (R=1;R<=numR;R++)
		{
			for (C=1;C<=numC;C++)
			{
				if (C!=1 || R!=1)
				{
					THELINES=THELINES+"\u2590\u258C";
				}
				if (C!=numC || R!=numR)
				{
					THELINES=THELINES+"\u25BA";
				}
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
		TW.target.selectRange(TW.target.selectionStart-SETTINGS.length, 0);
	}
}
else if (ArBuildStart<0)
{
	TW.target.insertText(StartingText);
	TW.target.selectRange(TW.target.selectionStart-1, 1);
	TW.target.selectRange(TW.target.selectionStart-StartingText.length+1+80, 1);
}
else
{
	var BuildEnd=portion.search("@@@ Arrow Builder END\n\n")+23;
	var BuilderContents = portion.substring(ArBuildStart,BuildEnd);
	TW.target.selectRange(ArBuildStart, BuildEnd-ArBuildStart);
	
	

	var APos=BuilderContents.search("@@A@@ ")-17;
	var BPos=BuilderContents.search("@@B@@ ")-17;
	var CPos=BuilderContents.search("@@C@@ ")-17;
	var DPos=BuilderContents.search("@@D@@ ")-17;
	var EPos=BuilderContents.search("@@E@@ ")-17;
	var FPos=BuilderContents.search("@@F@@ ")-17;
	var GPos=BuilderContents.search("@@G@@ ")-17;
	var HPos=BuilderContents.search("@@H@@ ")-17;
	var IPos=BuilderContents.search("@@I@@ ")-17;
	var JPos=BuilderContents.search("@@J@@ ")-17;
	var KPos=BuilderContents.search("@@K@@ ")-17;
	var LPos=BuilderContents.search("@@L@@ ")-17;
	var MPos=BuilderContents.search("@@M@@ ")-17;
	var NPos=BuilderContents.search("@@N@@ ")-17;
	var OPos=BuilderContents.search("@@O@@ ")-17;
	var PPos=BuilderContents.search("@@P@@ ")-17;
	var QPos=BuilderContents.search("@@Q@@ ")-17;
	var RPos=BuilderContents.search("@@R@@ ")-17;
	var SPos=BuilderContents.search("@@S@@ ")-17;
	var TPos=BuilderContents.search("@@T@@ ")-17;
	var WPos=BuilderContents.search("@@W@@ ")-17;
	var XPos=BuilderContents.search("@@X@@ ")-17;
	var YPos=BuilderContents.search("@@Y@@ ")-17;
	var ZPos=BuilderContents.search("@@Z@@ ")-17;

	var ENDS=BuilderContents.search("\nEndEndEndEndEndEndEndEndEndEnd");


	APos=BuilderContents.substring(APos+23,NPos);
	NPos=BuilderContents.substring(NPos+23,OPos);
	OPos=BuilderContents.substring(OPos+23,BPos-1);

	BPos=BuilderContents.substring(BPos+23,EPos);
	EPos=BuilderContents.substring(EPos+23,KPos);
	KPos=BuilderContents.substring(KPos+23,CPos-1);

	CPos=BuilderContents.substring(CPos+23,FPos);
	FPos=BuilderContents.substring(FPos+23,LPos);
	LPos=BuilderContents.substring(LPos+23,IPos-1);

	IPos=BuilderContents.substring(IPos+23,PPos);
	PPos=BuilderContents.substring(PPos+23,MPos);
	MPos=BuilderContents.substring(MPos+23,DPos-1);

	DPos=BuilderContents.substring(DPos+23,GPos);
	GPos=BuilderContents.substring(GPos+23,HPos);
	HPos=BuilderContents.substring(HPos+23,QPos);
	QPos=BuilderContents.substring(QPos+23,JPos-1);

	JPos=BuilderContents.substring(JPos+23,RPos);
	RPos=BuilderContents.substring(RPos+23,SPos);
	SPos=BuilderContents.substring(SPos+23,TPos);
	TPos=BuilderContents.substring(TPos+23,WPos-1);

	WPos=BuilderContents.substring(WPos+23,XPos);
	XPos=BuilderContents.substring(XPos+23,YPos);
	YPos=BuilderContents.substring(YPos+23,ZPos);
	ZPos=BuilderContents.substring(ZPos+23,ENDS-1);

	/*TW.target.insertText("Aa "+APos+"\n");
	TW.target.insertText("Nn "+NPos+"\n");
	TW.target.insertText("Oo "+OPos+"\n\n");
	TW.target.insertText("Bb "+BPos+"\n");
	TW.target.insertText("Ee "+EPos+"\n");
	TW.target.insertText("Kk "+KPos+"\n\n");
	TW.target.insertText("Cc "+CPos+"\n");
	TW.target.insertText("Ff "+FPos+"\n");
	TW.target.insertText("Ll "+LPos+"\n\n");
	TW.target.insertText("Ii "+IPos+"\n");
	TW.target.insertText("Pp "+PPos+"\n");
	TW.target.insertText("Mm "+MPos+"\n\n");
	TW.target.insertText("Dd "+DPos+"\n");
	TW.target.insertText("Gg "+GPos+"\n");
	TW.target.insertText("Hh "+HPos+"\n");
	TW.target.insertText("Qq "+QPos+"\n");
	TW.target.insertText("Jj "+JPos+"\n\n");
	TW.target.insertText("Ww "+WPos+"\n");
	TW.target.insertText("Xx "+XPos+"\n");
	TW.target.insertText("Yy "+YPos+"\n");
	TW.target.insertText("Zz "+ZPos+"\n");*/


	APos = APos.replace(/[\u2590\u258C\u25BA]/g,'');
	BPos = BPos.replace(/[\u2590\u258C\u25BA]/g,'');
	CPos = CPos.replace(/[\u2590\u258C\u25BA]/g,'');
	DPos = DPos.replace(/[\u2590\u258C\u25BA]/g,'');
	EPos = EPos.replace(/[\u2590\u258C\u25BA]/g,'');
	FPos = FPos.replace(/[\u2590\u258C\u25BA]/g,'');
	GPos = GPos.replace(/[\u2590\u258C\u25BA]/g,'');
	HPos = HPos.replace(/[\u2590\u258C\u25BA]/g,'');
	IPos = IPos.replace(/[\u2590\u258C\u25BA]/g,'');
	JPos = JPos.replace(/[\u2590\u258C\u25BA]/g,'');
	KPos = KPos.replace(/[\u2590\u258C\u25BA]/g,'');
	LPos = LPos.replace(/[\u2590\u258C\u25BA]/g,'');
	MPos = MPos.replace(/[\u2590\u258C\u25BA]/g,'');
	NPos = NPos.replace(/[\u2590\u258C\u25BA]/g,'');
	OPos = OPos.replace(/[\u2590\u258C\u25BA]/g,'');
	PPos = PPos.replace(/[\u2590\u258C\u25BA]/g,'');
	QPos = QPos.replace(/[\u2590\u258C\u25BA]/g,'');
	RPos = RPos.replace(/[\u2590\u258C\u25BA]/g,'');
	SPos = SPos.replace(/[\u2590\u258C\u25BA]/g,'');
	TPos = TPos.replace(/[\u2590\u258C\u25BA]/g,'');
	WPos = WPos.replace(/[\u2590\u258C\u25BA]/g,'');
	XPos = XPos.replace(/[\u2590\u258C\u25BA]/g,'');
	YPos = YPos.replace(/[\u2590\u258C\u25BA]/g,'');
	ZPos = ZPos.replace(/[\u2590\u258C\u25BA]/g,'');

	if (APos.substring(0,1)=="\u263C") { APos=""}
	if (BPos.substring(0,1)=="\u263C") { BPos=""}
	if (CPos.substring(0,1)=="\u263C") { CPos=""}
	if (DPos.substring(0,1)=="\u263C") { DPos=""}
	if (EPos.substring(0,1)=="\u263C") { EPos=""}
	if (FPos.substring(0,1)=="\u263C") { FPos=""}
	if (GPos.substring(0,1)=="\u263C") { GPos=""}
	if (HPos.substring(0,1)=="\u263C") { HPos=""}
	if (IPos.substring(0,1)=="\u263C") { IPos=""}
	if (JPos.substring(0,1)=="\u263C") { JPos=""}
	if (KPos.substring(0,1)=="\u263C") { KPos=""}
	if (LPos.substring(0,1)=="\u263C") { LPos=""}
	if (MPos.substring(0,1)=="\u263C") { MPos=""}
	if (NPos.substring(0,1)=="\u263C") { NPos=""}
	if (OPos.substring(0,1)=="\u263C") { OPos=""}
	if (PPos.substring(0,1)=="\u263C") { PPos=""}
	if (QPos.substring(0,1)=="\u263C") { QPos=""}
	if (RPos.substring(0,1)=="\u263C") { RPos=""}
	if (SPos.substring(0,1)=="\u263C") { SPos=""}
	if (TPos.substring(0,1)=="\u263C") { TPos=""}
	if (WPos.substring(0,1)=="\u263C") { WPos=""}
	if (XPos.substring(0,1)=="\u263C") { XPos=""}
	if (YPos.substring(0,1)=="\u263C") { YPos=""}
	if (ZPos.substring(0,1)=="\u263C") { ZPos=""}

	if (DPos=="1" || DPos.substr(0,3)=="epi" || DPos.substr(0,3)=="fib" || DPos.substr(0,3)=="sur")
	        {DPos="->>"}
	if (DPos=="2" || DPos.substr(0,3)=="mon" || DPos.substr(0,3)=="cof" || DPos.substr(0,3)=="inj")
		{DPos="^{(}->"}
	if (DPos=="3")
		{DPos=" >->"} 
	if (DPos=="4" || DPos.substr(0,3)=="map")
		{DPos="|->"}
	if (DPos=="5" || DPos.substr(0,3)=="das")
		{DPos="-->"}
	if (DPos=="6" || DPos.substr(0,3)=="dot")
		{DPos="..>"}
	if (DPos=="7" || DPos.substr(0,3)=="wav")
		{DPos="~>"}
	if (DPos=="8" || DPos.substr(0,3)=="equ" || DPos.substr(0,2)=="id")
		{DPos="="}
	if (DPos=="9" || DPos.substr(0,3)=="nat" || DPos=="nt")
		{DPos="=>"}
	if (DPos=="0" || DPos.substr(0,3)=="non" || DPos.substr(0,3)=="emp" || DPos.substr(0,3)=="bla")
		{DPos="BLANKME"}//this is a flag for later

	if (QPos=="r" || QPos=="R")
	        {QPos="red"}
	if (QPos=="b" || QPos=="B")
	        {QPos="blue"}
	if (QPos=="y" || QPos=="Y")
	        {QPos="yellow"}
	if (QPos=="g" || QPos=="G")
	        {QPos="green"}
	if (QPos=="o" || QPos=="O")
	        {QPos="orange"}
	if (QPos=="m" || QPos=="M")
	        {QPos="magenta"}

	if (RPos=="[];[]") {RPos=""};
	if (SPos=="[];[]") {SPos=""};
	if (TPos=="[];[]") {TPos=""};

	var ARROWTEXT = "\\ar"
if(WPos.length>0){
	//ARROWTEXT = "%\\usepackage[all,2cell]{xy}\n%\\UseAllTwocells\n"
	ARROWTEXT = "";
	ARROWTEXT = ARROWTEXT + "\\xtwocell";
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
	if (QPos.length>0) {ARROWTEXT = ARROWTEXT + "@["+ QPos + "]";}
	if (GPos.length>0) {ARROWTEXT = ARROWTEXT + "@/"+ GPos + "/";}
	if (HPos.length>0) {ARROWTEXT = ARROWTEXT + "@<"+ HPos + ">";}
	if (JPos.length>0) {ARROWTEXT = ARROWTEXT + "'"+ JPos;}
	if (NPos.length==0 && OPos.length==0)
	{
		ARROWTEXT = ARROWTEXT + "["+ APos + "]";
	} else {
		ARROWTEXT = ARROWTEXT + NPos + ";" + OPos;
	}
	if (BPos.length>0 || EPos.length>0 || KPos.length>0)
	{
		ARROWTEXT = ARROWTEXT + "^";
		if (KPos.length==0) {ARROWTEXT = ARROWTEXT + "-";}
		if (EPos.length>0) {ARROWTEXT = ARROWTEXT + "("+ EPos + ")";}
		ARROWTEXT = ARROWTEXT + "{"+ BPos + "}";
		if (KPos.length>0)
			{ARROWTEXT = ARROWTEXT + "=\""+ KPos + "\"";}
	}
	if (CPos.length>0 || FPos.length>0 || LPos.length>0)
	{
		ARROWTEXT = ARROWTEXT + "_";
		if (LPos.length==0) {ARROWTEXT = ARROWTEXT + "-";}
		if (FPos.length>0) {ARROWTEXT = ARROWTEXT + "("+ FPos + ")";}
		ARROWTEXT = ARROWTEXT + "{"+ CPos + "}";
		if (LPos.length>0)
			{ARROWTEXT = ARROWTEXT + "=\""+ LPos + "\"";}
	}
	if (RPos.length>0) {ARROWTEXT = ARROWTEXT +"|!{"+RPos+"}{\\hole}";}
	if (SPos.length>0) {ARROWTEXT = ARROWTEXT +"|!{"+SPos+"}{\\hole}";}
	if (TPos.length>0) {ARROWTEXT = ARROWTEXT +"|!{"+TPos+"}{\\hole}";}
	if (IPos.length>0 || PPos.length>0 || MPos.length>0)
	{
		ARROWTEXT = ARROWTEXT + "|";
		if (MPos.length==0) {ARROWTEXT = ARROWTEXT + "-";}
		if (PPos.length>0) {ARROWTEXT = ARROWTEXT + "("+ PPos + ")";}
		ARROWTEXT = ARROWTEXT + "{"+ IPos + "}";
		if (MPos.length>0)
			{ARROWTEXT = ARROWTEXT + "=\""+ MPos + "\"";}
	}
}
// If you only change the first entry, then it'll be taken as an object, not an arrow!
	if(BPos+CPos+DPos+EPos+FPos+GPos+HPos+
	   IPos+JPos+KPos+LPos+MPos+NPos+OPos+
	   WPos+XPos+YPos+ZPos == "" 
	   && APos.replace(/[udlr]/g,'')!=""
          )
	{
		ARROWTEXT = APos;
	}
	TW.target.insertText(ARROWTEXT+"\n"+PPos);
}