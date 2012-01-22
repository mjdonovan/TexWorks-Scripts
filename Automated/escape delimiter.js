// TeXworksScript
// Title:  escape delimiter
// Description: move cursor to end of next delimiter
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Esc

function CharFlagSkip(portion,doChar)
{
	var DistToChar = 1000000;
	var DistToSkip = portion.search(/\u25BA/); 
	if (DistToSkip<0) {DistToSkip=1000000}

	var DistToFlag  = portion.search(/[\u03E2\u25CF\u00BF\u25D9\u06F7\u06F8\u0416\u1F40\u1F41\u1F42\u1F43\u1F44\u1F45\u1F46\u1F47\u1F48\u1F49\u1F4A\u1F4B\u1F4C\u1F4D\u1F80\u1F81\u1F82\u1F83\u1F84\u1F85\u1F86\u1F87\u1F88\u1F89\u1F8A\u1F8B\u1F8C\u1F8D\u1F8E\u1F8F\u1FAE\u1FAF\u00A9]/);
	if (DistToFlag<0) {DistToFlag=1000000}

	if (doChar>0 || DistToSkip>=DistToFlag)
	{
		var endgp = portion.search(/\}/);
		var curly = portion.search(/\\\}/);
		var round = portion.search(/\)/);
		var squar = portion.search(/\]/);
		var endmA = portion.search(/\\\]/);
		var endmB = portion.search(/\$/);
		var rangl = portion.search(/\\rangle/);
		var verti = portion.search(/\|/);
		var VERTI = portion.search(/\\\|/);
		var newln = portion.search(/\n/);
		var amper = portion.search(/&/);
		var icoms = portion.search(/''/);
		var icomm = portion.search(/'/);
		
		if (endgp>-1) {endgp+=1;} else {endgp=1000000;}
		if (curly>-1) {curly+=2;} else {curly=1000000;}
		if (round>-1) {round+=1;} else {round=1000000;}
		if (squar>-1) {squar+=1;} else {squar=1000000;}
		if (endmA>-1) {endmA+=2;} else {endmA=1000000;}
		if (endmB>-1) {endmB+=1;} else {endmB=1000000;}
		if (rangl>-1) {rangl+=7;} else {rangl=1000000;}
		if (verti>-1) {verti+=1;} else {verti=1000000;}
		if (VERTI>-1) {VERTI+=2;} else {VERTI=1000000;}
		if (amper>-1) {amper+=1;} else {amper=1000000;}
// pauses at end of line
		if (newln==0) {newln+=1;}
		if (newln==-1){newln=1000000;}
// doesn't confuse ' and ''
		if (icoms == icomm) {icomm=-1}
		if (icomm>-1) {icomm+=1;} else {icomm=1000000;}
		if (icoms>-1) {icoms+=2;} else {icoms=1000000;}
	
		DistToChar = Math.min(endgp,curly,round,squar,endmA,
			endmB,rangl,verti,VERTI,newln,
			amper,icomm,icoms);
//		if (DistToChar<0 || DistToChar>1000000) {DistToChar=1000000}
	}

	return Array(
		DistToChar,
		DistToFlag,
		DistToSkip);
}

/*
SKIPPER: 						25BA

FLAGS:
 characters which get destroyed when highlighted alone:	00BF 25D9

 characters * which destroy --*s-, where s is a
	potential skipper, and if s is there, skip	06F7 06F8

 characters * which destroy ---*s-, where s is a
	potential skipper, and if s is there, skip	0416

 DESTROY whatever's highlighted and continue				//not yet

 DESTROY -* and stop      				03E2		

 DESTROY next 0<n<=14 characters and skip to next flag	1F40-1F4D

 DESTROY next 0<n<=16 characters and stop		1F80-1F8F	//not yet

 Destroy next 24 characters and continue		1FAE
 Destroy previous 15 and next 3 and continue		1FAF

 SWAP for \DASH and continue				25CF

 Alignat copy out flag					00A9

Should be:
continue = as if nothin happened
skip     = to next flag
stop     = stop


MAYBE NOW THAT I HAVE SKIPPERS, THERE'S NEVER A NEED TO HAVE FLAGS BE SEEN EARLIEST
IDEA - DO THIS, and include skippers in the FIRSTFLAG definition.

Other scripts using this machine:
Hom, Tor, Ext, tensor
Pi
(co)homology
frac
pushout, pullback
cases
thin
SES
Adjunction
alignat
oplus, prod, coprod, sum, Wedge, Smash
F buttons use all the flags.
*/


var DOTHESEARCH =1;
var SKIPMODE = 0;
var portion = TW.target.text;

if (TW.target.selection=="\u00A9")
{
	DOTHESEARCH=0;
	var SELSTART = TW.target.selectionStart;
	var AATstring = "\\begin{alignat*}"
	var LHSstring = "% Left hand side\n"
	var RELstring = "% Relation\n"
	var RHSstring = "% Right hand side\n"
	var COMstring = "% Comment\n"

	var AATstart=portion.lastIndexOf(AATstring,SELSTART)
	var LHSstart=portion.lastIndexOf(LHSstring,SELSTART)
	var RELstart=portion.lastIndexOf(RELstring,SELSTART)
	var RHSstart=portion.lastIndexOf(RHSstring,SELSTART)
	var COMstart=portion.lastIndexOf(COMstring,SELSTART)

	if (AATstart < LHSstart && LHSstart < RELstart && RELstart < RHSstart && RHSstart < COMstart)
	{
		var LHS = portion.substring(LHSstart,RELstart);
		var REL = portion.substring(RELstart,RHSstart);
		var RHS = portion.substring(RHSstart,COMstart);
		var COM = portion.substring(COMstart,SELSTART);
		LHS=LHS.substring(LHSstring.length);
		REL=REL.substring(RELstring.length);
		RHS=RHS.substring(RHSstring.length);
		COM=COM.substring(COMstring.length);

	} else {null;}
	
	TW.target.selectRange(LHSstart,SELSTART-LHSstart);
	TW.target.insertText(LHS+REL+RHS+COM+"\\\\\n"+LHSstring+LHS+RELstring+REL+
				RHSstring+RHS+COMstring+"&\\qquad&\\text{(\u1FAE)}");
	TW.target.selectRange(LHSstart+LHS.length+REL.length+RHS.length+COM.length+3+LHSstring.length,0);

/*think of more descriptive comment line flags*/
}

if (TW.target.selection=="\u25CF")
{
	TW.target.insertText("\\DASH ");
}

if (TW.target.selection=="\u03E2")
{
	TW.target.selectRange(Math.max(TW.target.selectionStart-1,0),Math.min(2,TW.target.text.length-TW.target.selectionStart));
	TW.target.insertText("");
//	SKIPMODE=1; I don't think I want this here.
}


if (TW.target.selection=="\u1FAF")
{
	TW.target.selectRange(TW.target.selectionStart,Math.min(32,TW.target.text.length-TW.target.selectionStart));
	TW.target.insertText("");
}
if (TW.target.selection=="\u1FAE")
{
	TW.target.selectRange(Math.max(0,TW.target.selectionStart-15), 18);
	TW.target.insertText("");
}

if (TW.target.selection=="\u1F40")
{
	TW.target.selectRange(TW.target.selectionStart,Math.min(2,TW.target.text.length-TW.target.selectionStart));
	TW.target.insertText("");
	SKIPMODE=1;
}
if (TW.target.selection=="\u1F41")
{
	TW.target.selectRange(TW.target.selectionStart,Math.min(3,TW.target.text.length-TW.target.selectionStart));
	TW.target.insertText("");
	SKIPMODE=1;
}
if (TW.target.selection=="\u1F42")
{
	TW.target.selectRange(TW.target.selectionStart,Math.min(4,TW.target.text.length-TW.target.selectionStart));
	TW.target.insertText("");
	SKIPMODE=1;
}
if (TW.target.selection=="\u1F43")
{
	TW.target.selectRange(TW.target.selectionStart,Math.min(5,TW.target.text.length-TW.target.selectionStart));
	TW.target.insertText("");
	SKIPMODE=1;
}
if (TW.target.selection=="\u1F44")
{
	TW.target.selectRange(TW.target.selectionStart,Math.min(6,TW.target.text.length-TW.target.selectionStart));
	TW.target.insertText("");
	SKIPMODE=1;
}
if (TW.target.selection=="\u1F45")
{
	TW.target.selectRange(TW.target.selectionStart,Math.min(7,TW.target.text.length-TW.target.selectionStart));
	TW.target.insertText("");
	SKIPMODE=1;
}
if (TW.target.selection=="\u1F46")
{
	TW.target.selectRange(TW.target.selectionStart,Math.min(8,TW.target.text.length-TW.target.selectionStart));
	TW.target.insertText("");
	SKIPMODE=1;
}
if (TW.target.selection=="\u1F47")
{
	TW.target.selectRange(TW.target.selectionStart,Math.min(9,TW.target.text.length-TW.target.selectionStart));
	TW.target.insertText("");
	SKIPMODE=1;
}
if (TW.target.selection=="\u1F48")
{
	TW.target.selectRange(TW.target.selectionStart,Math.min(10,TW.target.text.length-TW.target.selectionStart));
	TW.target.insertText("");
	SKIPMODE=1;
}
if (TW.target.selection=="\u1F49")
{
	TW.target.selectRange(TW.target.selectionStart,Math.min(11,TW.target.text.length-TW.target.selectionStart));
	TW.target.insertText("");
	SKIPMODE=1;
}
if (TW.target.selection=="\u1F4A")
{
	TW.target.selectRange(TW.target.selectionStart,Math.min(12,TW.target.text.length-TW.target.selectionStart));
	TW.target.insertText("");
	SKIPMODE=1;
}
if (TW.target.selection=="\u1F4B")
{
	TW.target.selectRange(TW.target.selectionStart,Math.min(13,TW.target.text.length-TW.target.selectionStart));
	TW.target.insertText("");
	SKIPMODE=1;
}
if (TW.target.selection=="\u1F4C")
{
	TW.target.selectRange(TW.target.selectionStart,Math.min(14,TW.target.text.length-TW.target.selectionStart));
	TW.target.insertText("");
	SKIPMODE=1;
}
if (TW.target.selection=="\u1F4D")
{
	TW.target.selectRange(TW.target.selectionStart,Math.min(15,TW.target.text.length-TW.target.selectionStart));
	TW.target.insertText("");
	SKIPMODE=1;
}


if (TW.target.selection=="\u00BF"||TW.target.selection=="\u25D9")
{
	TW.target.insertText("");
	portion = TW.target.text;
	if (portion[TW.target.selectionStart]!="\u25BA")
	{
		DOTHESEARCH=0;
		null;
	}
}
else if (TW.target.selection=="\u06F7" || TW.target.selection=="\u06F8")
{
	if (portion[TW.target.selectionStart+1]!="\u25BA") 
	{
		DOTHESEARCH=0
		TW.target.selectRange(Math.max(0,TW.target.selectionStart-2), 4);
		TW.target.insertText("");
		null;
	}
	else
	{
		TW.target.selectRange(Math.max(0,TW.target.selectionStart-2), 5);
		TW.target.insertText("\u25BA");
		TW.target.selectRange(TW.target.selectionStart-1, 0);
		portion = TW.target.text;
	}
}
else if (TW.target.selection=="\u0416")
{
	if (portion[TW.target.selectionStart+1]!="\u25BA") 
	{
		DOTHESEARCH=0
		TW.target.selectRange(Math.max(0,TW.target.selectionStart-3), 5);
		TW.target.insertText("");
		null;
	}
	else
	{
		TW.target.selectRange(Math.max(0,TW.target.selectionStart-3), 6);
		TW.target.insertText("\u25BA");
		TW.target.selectRange(TW.target.selectionStart-1, 0);
		portion = TW.target.text;
	}
}




if (DOTHESEARCH==1)
{
	var selst = TW.target.selectionStart;
	portion = TW.target.text.substr(selst);
	var CFS = CharFlagSkip(portion,1);
	if (SKIPMODE==1 || CFS[2]<CFS[0] && CFS[2]<CFS[1])
	{
		var DONTLOOP = 0;
		while (CFS[2]!=1000000 && CFS[2]<CFS[1] && DONTLOOP<100)
		{
			selst=selst+CFS[2];
			TW.target.selectRange(selst,1);
			TW.target.insertText("");

			portion = TW.target.text.substr(selst);
			CFS = CharFlagSkip(portion,0);
			DONTLOOP++;
		}
		if (DONTLOOP>99) {TW.target.insertText("LOOPED FOR AGES");}
		if (CFS[1]<1000000)
		{
			selst=selst+CFS[1];
			TW.target.selectRange(selst,1);
		}
		else
		{
			null;
		}
	}
	else if (CFS[0]<1000000 && CFS[0]<CFS[1])
	{
		selst=selst+CFS[0];
		TW.target.selectRange(selst,0);	
	}
	else if (CFS[1]<1000000 && CFS[1]<=CFS[0])
	{
		selst=selst+CFS[1];
		TW.target.selectRange(selst,1);	
	}
	else
	{
		null;
	}
}




















