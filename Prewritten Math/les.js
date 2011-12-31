// TeXworksScript
// Title:  Long exact sequence
// Description: inserts a long exact sequence
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+L, Alt+E, Alt+S
    
TW.target.insertText("\n\\[\\xymatrix{\\cdots\\ar[r]&\nH^{n-1}\\ar[r]&\nH^n\\ar[r]&\nH^n\\ar[r]&\nH^n\\ar[r]&\nH^{n+1}\\ar[r]&\n\\cdots}\\]\n");
TW.target.selectRange(TW.target.selectionStart-73, 7)
