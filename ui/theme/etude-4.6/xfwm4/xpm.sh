#!/bin/bash
echo "function xpm_template() {" > xpm.js
echo "/*" >> xpm.js
cat themerc  | sed -e 's/^#.*$//' | egrep "\w+" | awk '{print "this." $0 ";"}' >> xpm.js
echo "*/" >> xpm.js
cat *.xpm | grep -v "* XPM *"|  sed 's\static char [*] \this.\' | sed 's\[[]]\\' | sed 's\{\[\' |  sed 's\}\]\' | sed 's/_xpm//' >> xpm.js
echo "}" >> xpm.js
/home/e/downloads/node-v8.12.0-linux-x64/bin/node xpm.js
echo
echo
echo xpm.js will need editing due to lack of string literals in themerc
echo see commented block.
echo

