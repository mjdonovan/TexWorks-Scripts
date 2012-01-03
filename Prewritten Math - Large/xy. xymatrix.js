// TeXworksScript
// Title:  xymatrix
// Description: inserts a freestyle commuting diagram
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+X, Alt+Y


TW.target.insertText("\\[\\xymatrix{\n&\\\\\n&\n}\\]\n");
TW.target.selectRange(TW.target.selectionStart-10, 0)