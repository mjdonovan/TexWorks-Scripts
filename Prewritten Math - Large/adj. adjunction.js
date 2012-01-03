// TeXworksScript
// Title:  adjunction
// Description: insert adjunction
// Author:  Michael Donovan
// Version: 
// Date: 
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+A,Alt+D,Alt+J
    
TW.target.insertText("\\[\\xymatrix@R=.3cm@C=2cm{\n\\calA  \\ar@<.6ex>[r]^{F}&\n\\calB  \\ar@<.4ex>[l]^{G}\\\\\n\%X \\ar@{|->}[r] & FX\\\\\n\%GY             & Y \\ar@{|->}[l]\n}\\]\n");
TW.target.selectRange(TW.target.selectionStart-113, 5)
