// TeXworksScript
// Title:  0. Alignat
// Description: Starts an alignat*
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Shift+Alt+0
    
var putAtStart="\\begin{alignat*}{2}\n\u25BA&=\n\u00BF\u25BA%\n&\\qquad&\\text{(\u1FAE)}\u1FAF\\\\\n\u00BF\u25BA&=\n\u00BF\u25BA%\n&\\qquad&\\text{(\u1FAE)} \u1FAF\\\\\n\u00BF\u25BA&=\n\u00BF\u25BA%\n&\\qquad&\\text{(\u1FAE)} \u1FAF\\\\\n\u00BF\u25BA&=\n\u00BF\u25BA%\n&\\qquad&\\text{(\u1FAE)} \u1FAF\\\\\n\u00BF\u25BA&=\n\u00BF\u25BA%\n&\\qquad&\\text{(\u1FAE)} \u1FAF\\\\\n\u00BF\u25BA&=\n\u00BF\u25BA%\n&\\qquad&\\text{(\u1FAE)}\n\\end{alignat*}\n"
var startingplace = 20;

if (TW.target.text[TW.target.selectionStart-1]!="\n")
{
	putAtStart="\n"+putAtStart;
	startingplace=startingplace+1;
}

TW.target.insertText(putAtStart);
TW.target.selectRange(TW.target.selectionStart-1, 1)
TW.target.selectRange(TW.target.selectionStart-putAtStart.length+startingplace+1, 0)
