// TeXworksScript
// Title:  strip flags
// Description: strips flags from document
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Ctrl+Alt+Shift+S

function FlagStrip(portion)
{
	return portion.replace(/[\u25BA\u03E2\u25CF\u00BF\u25D9\u06F7\u06F8\u0416\u1F40\u1F41\u1F42\u1F43\u1F44\u1F45\u1F46\u1F47\u1F48\u1F49\u1F4A\u1F4B\u1F4C\u1F4D\u1F80\u1F81\u1F82\u1F83\u1F84\u1F85\u1F86\u1F87\u1F88\u1F89\u1F8A\u1F8B\u1F8C\u1F8D\u1F8E\u1F8F\u1FAE\u1FAF\u00A9\u258C\u2590]/g,'');
}


var portion = TW.target.text;
var SELSTART = TW.target.selectionStart;
var SELEND = TW.target.selectionStart+TW.target.selection.length;
var before = portion.substring(0,SELSTART);
var during = portion.substring(SELSTART,SELEND)
var after  = portion.substring(SELEND);

if (during.length>0)
{
	NEWduring = FlagStrip(during);
	if (NEWduring.length < during.length )
	{
		TW.target.insertText(NEWduring);
		TW.target.selectRange(SELSTART,NEWduring.length);
	}
	else
	{
		null;
	}
}
else
{
	NEWbefore = FlagStrip(before);
	NEWafter  = FlagStrip(after);
	if (NEWbefore.length < before.length && NEWafter.length < after.length )
	{
		TW.target.selectRange(0,TW.target.text.length);
		TW.target.insertText(NEWbefore+NEWafter);
		TW.target.selectRange(NEWbefore.length,0);
	}
	else if (NEWbefore.length < before.length)
	{
		TW.target.selectRange(0,SELSTART);
		TW.target.insertText(NEWbefore);
	}
	else if (NEWafter.length < after.length )
	{
		TW.target.selectRange(SELSTART,TW.target.text.length-SELSTART);
		TW.target.insertText(NEWafter);
		TW.target.selectRange(NEWbefore.length,0);
	}
	else
	{
		null;
	}
}

















