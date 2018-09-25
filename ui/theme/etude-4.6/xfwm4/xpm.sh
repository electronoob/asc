#!/bin/bash
echo "function xpm_template() {" > xpm.js
cat *.xpm | grep -v "* XPM *"|  sed 's\static char [*] \this.\' | sed 's\[[]]\\' | sed 's\{\[\' |  sed 's\}\]\' >> xpm.js
echo "}" >> xpm.js
/home/e/downloads/node-v8.12.0-linux-x64/bin/node xpm.js
