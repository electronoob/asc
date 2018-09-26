#!/bin/bash

: '

/*
List of decoration part names.

| menu-active         | menu-inactive         | menu-prelight     | menu-pressed     |                         |                           |                           |                          |
| shade-active        | shade-inactive        | shade-prelight    | shade-pressed    | shade-toggled-active    | shade-toggled-inactive    | shade-toggled-prelight    | shade-toggled-pressed    |
| stick-active        | stick-inactive        | stick-prelight    | stick-pressed    | stick-toggled-active    | stick-toggled-inactive    | stick-toggled-prelight    | stick-toggled-pressed    |
| hide-active         | hide-inactive         | hide-prelight     | hide-pressed     |                         |                           |                           |                          |
| maximize-active     | maximize-inactive     | maximize-prelight | maximize-pressed | maximize-toggled-active | maximize-toggled-inactive | maximize-toggled-prelight | maximize-toggled-pressed |
| close-active        | close-inactive        | close-prelight    | close-pressed    |                         |                           |                           |                          |
| top-left-active     | top-left-inactive     |                   |                  |                         |                           |                           |                          |
| title-1-active      | title-1-inactive      |                   |                  |                         |                           |                           |                          |
| title-2-active      | title-2-inactive      |                   |                  |                         |                           |                           |                          |
| title-3-active      | title-3-inactive      |                   |                  |                         |                           |                           |                          |
| title-4-active      | title-4-inactive      |                   |                  |                         |                           |                           |                          |
| title-5-active      | title-5-inactive      |                   |                  |                         |                           |                           |                          |
| top-right-active    | top-right-inactive    |                   |                  |                         |                           |                           |                          |
| right-active        | right-inactive        |                   |                  |                         |                           |                           |                          |
| bottom-right-active | bottom-right-inactive |                   |                  |                         |                           |                           |                          |
| bottom-active       | bottom-inactive       |                   |                  |                         |                           |                           |                          |
| bottom-left-active  | bottom-left-inactive  |                   |                  |                         |                           |                           |                          |
| left-active         | left-inactive         |                   |                  |                         |                           |                           |                          |
*/
'
echo '
// G_TYPE_MAKE_FUNDAMENTAL
const G_TYPE_BOOLEAN = 5;
const G_TYPE_INT = 6;
const G_TYPE_INVALID = 0;
const G_TYPE_STRING = 16;
const NULL = null;
const TRUE = true;
const FALSE = false;
' > xpm.js
echo "function xpm_template() {" >> xpm.js
echo "/*" >> xpm.js
cat themerc  | sed -e 's/^#.*$//' | egrep "\w+" | awk '{print "this." $0 ";"}' >> xpm.js
echo "*/" >> xpm.js
awk "/Settings rc\[\] = {/,/};/"  ../../settings.c | sed "s/[[]]//" | sed "s/Settings rc/this.settings_rc/" | sed "s/{/[/" | sed "s/}/]/" >> xpm.js
cat *.xpm | grep -v "* XPM *"|  sed 's\static char [*] \this.\' | sed 's\[[]]\\' | sed 's\{\[\' |  sed 's\}\]\' | sed 's/_xpm//' >> xpm.js
echo "}" >> xpm.js
/home/e/downloads/node-v8.12.0-linux-x64/bin/node xpm.js
echo
echo
echo xpm.js will need editing due to lack of string literals in themerc
echo see commented block.
echo
echo List of Type Information:
cat xpm.js | egrep -o "G_TYPE_\w+" | sort | uniq
