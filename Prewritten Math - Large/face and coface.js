// TeXworksScript
// Title:  face v coface
// Description: Discusses simplicial objects
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: 

TW.target.insertText(
"\\[\\begin{array}{rcl}\n\\textup{simplicial:}\\quad &\n\\vcenter{\n\\def\\labelstyle{\\scriptstyle}\n\\xymatrix@C=1.5cm@1{\n\\scrC_0\n\\ar[r]|(.65){s_0}\n&\n\\scrC_1\n\\ar@<-1ex>[l]|(.65){d_0}\n\\ar@<+1ex>[l]|(.65){d_1}\n\\ar@<+1ex>[r]|(.65){s_0}\n\\ar@<-1ex>[r]|(.65){s_1}\n&\n\\scrC_2\n\\ar[l]|(.65){d_1}\n\\ar@<-2ex>[l]|(.65){d_0}\n\\ar@<+2ex>[l]|(.65){d_2}\n\\ar[r]|(.65){s_1}\n\\ar@<+2ex>[r]|(.65){s_0}\n\\ar@<-2ex>[r]|(.65){s_2}\n&\n\\scrC_3\\makebox[0cm][l]{\\,$\\cdots $}\n\\ar@<-3ex>[l]|(.65){d_0}\n\\ar@<-1ex>[l]|(.65){d_1}\n\\ar@<+1ex>[l]|(.65){d_2}\n\\ar@<+3ex>[l]|(.65){d_3}\n}}\n\\qquad &\n\\begin{cases}\ns_i:&\\textup{degeneracies};\\\\\nd_i:&\\textup{faces};\n\\end{cases}\n\\\\\n\\textup{cosimplicial:}\\quad &\n\\vcenter{\n\\def\\labelstyle{\\scriptstyle}\n\\xymatrix@C=1.5cm@1{\n\\Delta^0\n\\ar[r];[]|(.65){\\sigma_0}\n&\n\\Delta^1\n\\ar@<-1ex>[l];[]|(.65){\\delta_0}\n\\ar@<+1ex>[l];[]|(.65){\\delta_1}\n\\ar@<+1ex>[r];[]|(.65){\\sigma_0}\n\\ar@<-1ex>[r];[]|(.65){\\sigma_1}\n&\n\\Delta^2\n\\ar[l];[]|(.65){\\delta_1}\n\\ar@<-2ex>[l];[]|(.65){\\delta_0}\n\\ar@<+2ex>[l];[]|(.65){\\delta_2}\n\\ar[r];[]|(.65){\\sigma_1}\n\\ar@<+2ex>[r];[]|(.65){\\sigma_0}\n\\ar@<-2ex>[r];[]|(.65){\\sigma_2}\n&\n\\Delta^3\\makebox[0cm][l]{\\,$\\cdots $}\n\\ar@<-3ex>[l];[]|(.65){\\delta_0}\n\\ar@<-1ex>[l];[]|(.65){\\delta_1}\n\\ar@<+1ex>[l];[]|(.65){\\delta_2}\n\\ar@<+3ex>[l];[]|(.65){\\delta_3}\n}}\n\\qquad &\n\\begin{cases}\n\\sigma_i:&\\textup{codegeneracies};\\\\\n\\delta_i:&\\textup{cofaces}.\n\\end{cases}\n\\end{array}\\]\nRestricting along a coface map $\\delta_i$ we obtain a face of a singular simplex. Restricting along a codegeneracy map we obtain a degenerate singular simplex.\n"
);
