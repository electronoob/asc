#!/bin/bash
for file in *.xpm
do
	FILENAME=${file%%.*//-/_}
	cat $file| grep -v "* XPM *" |  sed -r "s/static char [*] \w+[[]]/this.${FILENAME%%.*}/"| sed 's\{\[\' | sed 's\}\]\'
	#static char * bottom_active_xpm[] = {
	#cat *.xpm | grep -v "* XPM *"|  sed 's\static char [*] \this.xpm.\' | sed 's\[[]]\\' | sed 's\{\[\' |  sed 's\}\]\' | sed 's/_xpm//' >> xpm.js
done

