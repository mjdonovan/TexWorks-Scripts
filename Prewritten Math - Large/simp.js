// TeXworksScript
// Title:  simplicial object
// Description: Inserts a simplicial object
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+S, Alt+I, Alt+M, Alt+P

TW.target.insertText(
"\\[\\vcenter{\n\\def\\labelstyle{\\scriptstyle}\n\\xymatrix@C=1.5cm@1{\n\\scrC_0\n\\ar[r]|(.65){s_0}\n&\n\\scrC_1\n\\ar@<-1ex>[l]|(.65){d_0}\n\\ar@<+1ex>[l]|(.65){d_1}\n\\ar@<+1ex>[r]|(.65){s_0}\n\\ar@<-1ex>[r]|(.65){s_1}\n&\n\\scrC_2\n\\ar[l]|(.65){d_1}\n\\ar@<-2ex>[l]|(.65){d_0}\n\\ar@<+2ex>[l]|(.65){d_2}\n\\ar[r]|(.65){s_1}\n\\ar@<+2ex>[r]|(.65){s_0}\n\\ar@<-2ex>[r]|(.65){s_2}\n&\n\\scrC_3\\makebox[0cm][l]{\\,$\\cdots $}\n\\ar@<-3ex>[l]|(.65){d_0}\n\\ar@<-1ex>[l]|(.65){d_1}\n\\ar@<+1ex>[l]|(.65){d_2}\n\\ar@<+3ex>[l]|(.65){d_3}\n}}\\]\n"
);
