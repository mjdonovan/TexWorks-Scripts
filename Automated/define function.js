// TeXworksScript
// Title:  function definition
// Description: Define a function
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+F,Alt+D,Alt+E,Alt+F


var StartingText=
"\\[\\xymatrix@R=0mm{\n\\ar[r]^-{\u25BA}%Name of map\n\u2590\u258C\u25BA&%Source\n\u2590\u258C\u25BA\\\\%Target\n\u2590\u258C\u25BA%x\n\\ar@{|->}[r]&\n\u2590\u258C%f(x)\n%\\ar@{}[ul];[l]|{\\rotatebox{90}{\\tiny$\\in$}} \\ar@{}[u];[]|{\\rotatebox{90}{\\tiny$\\in$}} \n}\\]\n"
	
TW.target.insertText(StartingText);
TW.target.selectRange(TW.target.selectionStart-1, 1);
TW.target.selectRange(TW.target.selectionStart-StartingText.length+1+28, 0);
