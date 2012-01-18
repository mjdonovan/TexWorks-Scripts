// TeXworksScript
// Title:  Escape delimiter
// Description: move cursor to end of next delimiter
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Esc

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
 Destroy previous 15 and next 3, \n and continue	1FAF

 SWAP for \DASH and continue				25CF

Should be:
continue = as if nothin happened
skip     = to next flag
stop     = stop


MAYBE NOW THAT I HAVE SKIPPERS, THERE'S NEVER A NEED TO HAVE FLAGS BE SEEN EARLIEST


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

F buttons use all the flags.
*/


var DOTHESEARCH =1;
var SKIPMODE = 0;
var portion = TW.target.text;

if (TW.target.selection=="\u25CF")
{
	TW.target.insertText("\\DASH ");
}

if (TW.target.selection=="\u03E2")
{
	TW.target.selectRange(Math.max(TW.target.selectionStart-1,0),Math.min(2,TW.target.text.length-TW.target.selectionStart));
	TW.target.insertText("");
	SKIPMODE=1;
}


if (TW.target.selection=="\u1FAF")
{
	TW.target.selectRange(TW.target.selectionStart,Math.min(29,TW.target.text.length-TW.target.selectionStart));
	TW.target.insertText("");
}
if (TW.target.selection=="\u1FAE")
{
	TW.target.selectRange(Math.max(0,TW.target.selectionStart-15), 19);
	TW.target.insertText("\n");
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
	var portion = TW.target.text.substr(TW.target.selectionStart)
	
	var SKIPPER = portion.search(/\u25BA/); 
		//A flag to say ''skip to next flag''

	var commaFLAG = portion.search(/\u03E2/);
		//deletes previous character and itself
	var dashFLAG = portion.search(/\u25CF/);
		//replaces itself with \DASH
	var qFLAG  = portion.search(/[\u00BF\u25D9]/);  
		//One character data entry flag
	var sFLAG = portion.search(/[\u06F7\u06F8\u0416]/); 
		//A flag for cancellable sub and superscripts living in _{} or _-{}
	var dskipFLAG= portion.search(/[\u1F40\u1F41\u1F42\u1F43\u1F44\u1F45\u1F46\u1F47\u1F48\u1F49\u1F4A\u1F4B\u1F4C\u1F4D]/); 
		//A flag for delete next n then skip
	var dstopFLAG= portion.search(/[\u1F80\u1F81\u1F82\u1F83\u1F84\u1F85\u1F86\u1F87\u1F88\u1F89\u1F8A\u1F8B\u1F8C\u1F8D\u1F8E\u1F8F]/); 
		//A flag for delete next n then stop
	var bombFLAG=portion.search(/[\u1FAE\u1FAF]/);
	
	if (qFLAG<0)	 	{qFLAG=10000}
	if (sFLAG<0) 		{sFLAG=10000}
	if (dashFLAG<0) 	{dashFLAG=10000}
	if (dskipFLAG<0) 	{dskipFLAG=10000}
	if (dstopFLAG<0) 	{dstopFLAG=10000}
	if (commaFLAG<0)	{commaFLAG=10000}
	if (bombFLAG<0)		{bombFLAG=10000}
	if (SKIPPER<0) 		{SKIPPER=10000}

	var FIRSTFLAG = Math.min(qFLAG,sFLAG);
	    FIRSTFLAG = Math.min(FIRSTFLAG,commaFLAG);
	    FIRSTFLAG = Math.min(FIRSTFLAG,dashFLAG);
	    FIRSTFLAG = Math.min(FIRSTFLAG,dskipFLAG);
	    FIRSTFLAG = Math.min(FIRSTFLAG,dstopFLAG);
	    FIRSTFLAG = Math.min(FIRSTFLAG,bombFLAG);

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
	
	if (endgp<0) {endgp=10000}
	if (curly<0) {curly=10000}
	if (round<0) {round=10000}
	if (squar<0) {squar=10000}
	if (endmA<0) {endmA=10000}
	if (endmB<0) {endmB=10000}
	if (rangl<0) {rangl=10000}
	if (verti<0) {verti=10000}
	if (VERTI<0) {VERTI=10000}
	if (newln<0) {newln=10000}
	if (amper<0) {amper=10000}
	
	if (icoms == icomm) {icomm=-1}
	if (icoms<0) {icoms=10000}
	if (icomm<0) {icomm=10000}
	
	endgp+=1;
	curly+=2;
	round+=1;
	squar+=1;
	endmA+=2;
	endmB+=1;
	rangl+=7;
	verti+=1;
	VERTI+=2;
	newln+=1;
	amper+=1;
	
	icomm+=1;
	icoms+=2;
	var UnimportantDIST=Math.min(endmA,
	              newln,
	              amper,icomm,icoms);
	
	var DIST=Math.min(endgp,curly,round,squar,endmA,
	              endmB,rangl,verti,VERTI,newln,
	              amper,icomm,icoms);
	var selst = TW.target.selectionStart;

// INTENDED BEHAVIOR: If the next thing you see is one of: an endline, inverted commas, an ampersand,  a $, then skip directly to the next flag character.
	var skippersdeleted=0;
	if (SKIPPER<DIST && SKIPPER<FIRSTFLAG && SKIPPER!=10000)
	{
		TW.target.selectRange(selst+SKIPPER, 1);
		TW.target.insertText("");
		SKIPMODE=1;
		skippersdeleted=1;
	}
	if ((SKIPMODE == 1 || UnimportantDIST==DIST ||FIRSTFLAG<DIST) && FIRSTFLAG!=10000)
	{
		if (SKIPMODE == 1)
		{
			 TW.target.selectRange(selst+FIRSTFLAG-skippersdeleted, 1);
		}
		else
		{
			 TW.target.selectRange(selst+FIRSTFLAG, 1);
		}
	}
	else if (SKIPMODE == 0)
	{
		if (DIST>10000) {DIST=0;}
		TW.target.selectRange(TW.target.selectionStart+DIST, 0);
	}
	if (SKIPMODE == 1 && FIRSTFLAG==10000)
	{ null; }
}
 