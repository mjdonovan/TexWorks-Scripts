// TeXworksScript
// Title:  adjunction reversed
// Description: insert adjunction (reversed)
// Author:  Michael Donovan
// Version: 
// Date: 
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+Ctrl+A,Alt+Ctrl+D,Alt+Ctrl+J
    
TW.target.insertText("\\[\\xymatrix@R=.3cm@C=2cm{\n\\calA  \\ar@<-.4ex>[r]_{F}&\n\\calB  \\ar@<-.6ex>[l]_{G}\\\\\n%X \\ar@{|->}[r] & FX\\\\\n%GY             & Y \\ar@{|->}[l]\n}\\]\n");
TW.target.selectRange(TW.target.selectionStart-115, 5)
