// TeXworksScript
// Title: roof composition
// Description: inserts a roof composition diagram
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut:
    
TW.target.insertText("\\[\n\\raisebox{-6mm}{$\\xymatrix@R=1.5pc@C=1.5pc{\n&    S_1\\ar[dr]\\ar[dl]\n&&   S_2\\ar[dr]\\ar[dl]\\\\\nU && V && W}$}\n\\qquad\\raisebox{-12mm}{$\\mapsto$}\\qquad\n\\xymatrix@R=1.5pc@C=1.5pc@!=1pc{\n&& S_1\\times_V S_2\\ar[dr]\\ar[dl]\\\\\n&    S_1\\ar[dr]\\ar[dl]\n&&   S_2\\ar[dr]\\ar[dl]\\\\\nU && V && W}\n\\]");

