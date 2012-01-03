// TeXworksScript
// Title:  Ladder
// Description: inserts a ladder
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+L, Alt+A, Alt+D, Alt+D
    
TW.target.insertText("\n\\[\\xymatrix{\\cdots\\ar[r]&\nA\\ar[r]\\ar[d]&\nB\\ar[r]\\ar[d]&\nC\\ar[r]\\ar[d]&\nD\\ar[r]\\ar[d]&\\cdots\\\\\\cdots\\ar[r]&\nA\\ar[r]&\nB\\ar[r]&\nC\\ar[r]&\nD\\ar[r]&\n\\cdots\\\\}\\]\n");
TW.target.selectRange(TW.target.selectionStart-129, 1)
