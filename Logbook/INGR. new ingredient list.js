// TeXworksScript
// Title: ingredients
// Description: add a list of ingredients
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+I,Alt+N,Alt+G

var StartingText=
"\\item\\ingstep{\n\\ingred{quantity\u25BA}{\u2590ingredient\u258C\u25BA}\n\\ingred{\u2590quantity\u258C\u25BA}{\u2590ingredient\u258C\u25BA}\n\\ingred{\u2590quantity\u258C\u25BA}{\u2590ingredient\u258C\u25BA}\n\\ingred{\u2590quantity\u258C\u25BA}{\u2590ingredient\u258C\u25BA}\n\\ingred{\u2590quantity\u258C\u25BA}{\u2590ingredient\u258C\u25BA}\n\\ingred{quantity\u25BA}{ingredient\u25BA}\n}%\n{\u2590instructions\u258C}\n"
	
TW.target.insertText(StartingText);
TW.target.selectRange(TW.target.selectionStart-1, 1);
TW.target.selectRange(TW.target.selectionStart-StartingText.length+1+23,8);
