// TeXworksScript
// Title:  Triangular Prism
// Description: inserts a triangular prism
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut:
    
TW.target.insertText("\n%% Start - four triangular prisms\n\\[ \\xymatrix@R=.4cm@C=.6cm{\nA  \\ar[dd]\\ar[rrd]\\ar[rrr]&&&\nC  \\ar[dd]\\\\&&\nB  \\ar[ru]\\ar[dd]\\\\\nA' \\ar[rrd]\\ar'[rr][rrr]&&&\nC' \\\\&&\nB' \\ar[ru]\n}\\]\n\\[ \\xymatrix@R=.4cm@C=.6cm{&&\nB  \\ar[rd]\\ar'[d][dd]\\\\\nA  \\ar[dd]\\ar[rru]\\ar[rrr]&&&\nC  \\ar[dd]\\\\&&\nB' \\ar[rd]\\\\\nA' \\ar[rru]\\ar[rrr]&&&\nC' \n}\\]\n\\[ \\xymatrix@R=.4cm@C=.6cm{\nA  \\ar[dd]\\ar[rd]\\ar[rrr]&&&\nC  \\ar[dd]\\\\&\nB  \\ar[rru]\\ar[dd]&\\\\\nA' \\ar[rd]\\ar'[r][rrr]&&&\nC' \\\\&\nB' \\ar[rru]&\n}\\]\n\\[ \\xymatrix@R=.4cm@C=.6cm{&\nB  \\ar[rrd]\\ar'[d][dd]&\\\\\nA  \\ar[dd]\\ar[ru]\\ar[rrr]&&&\nC  \\ar[dd]\\\\&\nB' \\ar[rrd]&\\\\\nA' \\ar[ru]\\ar[rrr]&&&\nC' \n}\\]\n%% End - four triangular prisms\n");

