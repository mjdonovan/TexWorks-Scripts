// TeXworksScript
// Title:  overset{}{\to}
// Description: \overset{}{\to}
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+T,Alt+O
    

var startingposition = TW.target.selectionStart;
var portion = TW.target.text;

if (portion.substr(startingposition,7)=="\u25BA}{\\to}")
{
	TW.target.selectRange(startingposition, 7);
	TW.target.insertText("\u25BA}{\\mapsto}");
	TW.target.selectRange(startingposition, 0);
}
else if (portion.substr(startingposition,11)=="\u25BA}{\\mapsto}")
{
	TW.target.selectRange(startingposition, 11);
	TW.target.insertText("\u25BA}{\\nt}");
	TW.target.selectRange(startingposition, 0);
}
else if (portion.substr(startingposition,7)=="\u25BA}{\\nt}")
{
	TW.target.selectRange(startingposition, 7);
	TW.target.insertText("\u25BA}{\\from}");
	TW.target.selectRange(startingposition, 0);
}
else if (portion.substr(startingposition,9)=="\u25BA}{\\from}")
{
	TW.target.selectRange(startingposition, 9);
	TW.target.insertText("\u25BA}{\\mapsfrom}");
	TW.target.selectRange(startingposition, 0);
}
else if (portion.substr(startingposition,13)=="\u25BA}{\\mapsfrom}")
{
	TW.target.selectRange(startingposition, 13);
	TW.target.insertText("\u25BA}{\\Longrightarrow}");
	TW.target.selectRange(startingposition, 0);
}
else if (portion.substr(startingposition,19)=="\u25BA}{\\Longrightarrow}")
{
	TW.target.selectRange(startingposition, 19);
	TW.target.insertText("\u25BA}{\\to}");
	TW.target.selectRange(startingposition, 0);
}
else
{
	TW.target.insertText("\\overset{\u25BA}{\\to}\u2590\u258C");
	TW.target.selectRange(TW.target.selectionStart-9, 0)
}

