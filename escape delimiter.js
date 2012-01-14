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
 DESTROY  *      00BF 25D9
 DESTROY --*-    06F7 06F8
 SKIPPER         25BA

 MAYBE NOW THAT I HAVE SKIPPERS, THERE'S NEVER A NEED TO HAVE FLAGS BE SEEN EARLIEST
*/


var DOTHESEARCH =1;
var portion = TW.target.text;
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
if (DOTHESEARCH==1)
{
	var portion = TW.target.text.substr(TW.target.selectionStart)
	
	var qFLAG  = portion.search(/[\u00BF\u25D9]/);  
		//One character data entry flag
	var sFLAG = portion.search(/[\u06F7\u06F8]/); 
		//A flag for cancellable sub and superscripts living in in _{}
	var SKIPPER = portion.search(/\u25BA/); 
		//A flag to say ''skip to next flag''
	
	if (qFLAG<0) {qFLAG=10000}
	if (sFLAG<0) {sFLAG=10000}
	if (SKIPPER<0) {SKIPPER=10000}
	var FIRSTFLAG = Math.min(qFLAG,sFLAG);
	
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
	var SKIPMODE = 0;
	if (SKIPPER<DIST && SKIPPER<FIRSTFLAG && SKIPPER!=10000)
	{
		TW.target.selectRange(selst+SKIPPER, 1);
		TW.target.insertText("");
		SKIPMODE=1;
	}
	if ((SKIPMODE == 1 || UnimportantDIST==DIST ||FIRSTFLAG<DIST) && FIRSTFLAG!=10000)
	{
		if (SKIPMODE == 1)
		{
			 TW.target.selectRange(selst+FIRSTFLAG-1, 1);
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
}
 