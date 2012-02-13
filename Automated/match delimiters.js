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
	if (txt[chnum]=="%")
	{
		moveon = Math.min(chrem,txt.substr(chnum).search("\n")+1);
	}
	else if (txt[chnum]=="$")
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

if (bailout == 0 && stk.length>1)
{
	bailout = 1;
	errS=Sstk.pop();
	errF=Estk.pop();
}

if (bailout == 1)
{
	TW.target.selectRange(errS,errF-errS);
}
else
{
	null;
}













