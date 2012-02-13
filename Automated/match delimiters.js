// TeXworksScript
// Title:  check delimiter matching
// Description: check delimiter matching
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: F9

/*
current problem - not good at detecting wierd things with $'s in math mode
need something to remember when you're currently in $, or $$ mode maybe...
does nothing if there are extra opening parentheses...
*/

var txt = TW.target.text;
var stk = new Array();	//the stack of all interesting strings
var Sstk = new Array();	//the stack recording the starting positions of the things in stk
var Estk = new Array();	//the stack recording the  ending  positions of the things in the stack
var chnum=0;		//character you're about to read.
var chrem=txt.length;	//number of characters remaining, including that to be read.
var bailout=0;		//zero unless error found.
var errS;
var errF;		//start and end of error string.
var popped;		//the most recent thing taken off the stack.
var Spopped;		//its start
var Epopped;		//its end
var found;		//the thing you found this character
var moveon;		//how many characters were looked at this round

stk.push("STARTOFSTACK");
Sstk.push("0");
Estk.push("0");

while (chrem>0 && bailout==0)
{
	found="";
	moveon=1;
	if (txt[chnum]=="$")
	{
		if (chrem>0)
		{
			if (txt[chnum+1]=="$")
			{
				found="$$"; moveon=2;
			}
			else
			{
				found="$";
			}
		}
	}
	else if (txt[chnum]=="{" || txt[chnum]=="}")
	{
		found=txt[chnum];
	}
	else if (txt[chnum]=="\\" && chrem>0)
	{
		moveon=2;
		if (txt[chnum+1]=="[" ||txt[chnum+1]=="]" ||txt[chnum+1]=="(" || txt[chnum+1]==")")
		{
			found="\\"+txt[chnum+1];
		}
		if (txt.substr(chnum+1,5)=="begin" && txt.substr(chnum+6,1).search(/[A-Za-z]/) == -1)
		{
			if (txt.substr(chnum+6,1)!="{")
			{
				bailout=1;
				errS=chnum;
				errF=chnum+6;
			}
			else
			{
				var tempo = txt.substr(chnum+7);
				var endbr = tempo.search("}");
				var endln = tempo.search("\n");
				if (endln<0) {endln=1000000}
				if (endbr<0 || endln<endbr)
				{
					bailout=1;
					errS=chnum;
					errF=chnum+6;
				}
				else
				{
					moveon=endbr+8;
					found=txt.substr(chnum,moveon);
				}
			}
		}
		if (txt.substr(chnum+1,3)=="end" && txt.substr(chnum+4,1).search(/[A-Za-z]/) == -1)
		{
			if (txt.substr(chnum+4,1)!="{")
			{
				bailout=1;
				errS=chnum;
				errF=chnum+4;
			}
			else
			{
				var tempo = txt.substr(chnum+5);
				var endbr = tempo.search("}");
				var endln = tempo.search("\n");
				if (endln<0) {endln=1000000}
				if (endbr<0 || endln<endbr)
				{
					bailout=1;
					errS=chnum;
					errF=chnum+4;
				}
				else
				{
					moveon=endbr+6;
					found=txt.substr(chnum,moveon);
				}
			}
		}		
		
	}


	if (bailout == 0 && found.length>0)
	{
		if (found.substr(1,5)=="begin")
		{
			stk.push(found);
			Sstk.push(chnum);
			Estk.push(chnum+moveon);
		}
		if (found.substr(1,3)=="end")
		{
			popped=stk.pop();
			Spopped=Sstk.pop();
			Epopped=Estk.pop();
			if (popped != "\\begin"+found.substr(4))
			{
				bailout=1;
				errS=Spopped;
				errF=chnum+moveon;
			}
		}




		if (found=="\\[" || found=="\\(" || found=="{")
		{
			stk.push(found);
			Sstk.push(chnum);
			Estk.push(chnum+moveon);
		}
		if (found=="\\]")
		{
			popped=stk.pop();
			Spopped=Sstk.pop();
			Epopped=Estk.pop();
			if (popped != "\\[")
			{
				bailout=1;
				errS=Spopped;
				errF=chnum+moveon;
			}
		}
		if (found=="\\)")
		{
			popped=stk.pop();
			Spopped=Sstk.pop();
			Epopped=Estk.pop();
			if (popped != "\\(")
			{
				bailout=1;
				errS=Spopped;
				errF=chnum+moveon;
			}
		}
		if (found=="}")
		{
			popped=stk.pop();
			Spopped=Sstk.pop();
			Epopped=Estk.pop();
			if (popped != "{")
			{
				bailout=1;
				errS=Spopped;
				errF=chnum+moveon;
			}
		}
		if (found=="$"){
			var testonedol=stk.pop();
			stk.push(testonedol);
			if (testonedol=="$"){
				stk.pop(); Sstk.pop(); Estk.pop();
			}
			else
			{
				stk.push(found);
				Sstk.push(chnum);
				Estk.push(chnum+moveon);
			}
		}
		if (found=="$$"){
			var testtwodol=stk.pop();
			stk.push(testtwodol);
			if (testtwodol=="$$"){
				stk.pop(); Sstk.pop(); Estk.pop();
			}
			else
			{
				stk.push(found);
				Sstk.push(chnum);
				Estk.push(chnum+moveon);
			}
		}
	}
	chnum+=moveon; chrem-=moveon;
}


	TW.target.selectRange(txt.length);

while (stk.length>1)
{
	TW.target.insertText("\n"+stk.pop()+" "+Sstk.pop()+" "+Estk.pop());
}

if (bailout == 1)
{
	TW.target.selectRange(errS,errF-errS);
}

/*

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
	TW.target.insertText(LHS+REL+RHS+COM+"\\\\\n"+LHSstring+LHS+"\u25BA"+RELstring+REL+
				RHSstring+"\u2590"+RHS+"\u258C\u25BA"
                               +COMstring+"&\\qquad&\\text{(\u1FAE)}");
	TW.target.selectRange(LHSstart+LHS.length+REL.length+RHS.length+COM.length+3+LHSstring.length,LHS.length);


}

if (TW.target.selection=="\u25CF")
{
	TW.target.insertText("\\DASH ");
}

if (TW.target.selection=="\u03E2")
{
	TW.target.selectRange(Math.max(TW.target.selectionStart-1,0),Math.min(2,TW.target.text.length-TW.target.selectionStart));
	TW.target.insertText("");

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


if (TW.target.selection == "\u2590")
{
	selst = TW.target.selectionStart;
	portion = TW.target.text.substr(selst);
	var DD = portion.search(/\u258C/);
	if (DD!=-1)
	{
		TW.target.selectRange(selst,DD+1);
TW.target.insertText(TW.target.selection.substr(1,TW.target.selection.length-2));
		TW.target.selectRange(selst,DD-1);
	}
}


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


if (TW.target.selection == "\u2590")
{
	selst = TW.target.selectionStart;
	portion = TW.target.text.substr(selst);
	var DD = portion.search(/\u258C/);
	if (DD!=-1)
	{
		TW.target.selectRange(selst,DD+1);
TW.target.insertText(TW.target.selection.substr(1,TW.target.selection.length-2));
		TW.target.selectRange(selst,DD-1);
	}
}


	}
	else
	{
		null;
	}
}

*/


















