'use strict';
/*jshint -W084 */
var fs = require('fs');
var filename = 'AST.JSON';
var ASTJSON = fs.readFileSync(filename);
var AST = JSON.parse(ASTJSON);

var optbl = {
    inc: {
        id: 0x01,
        ac: 0,
        at: null
    },
    dec: {
        id: 0x02,
        ac: 0,
        at: null
    },
    ret: {
        id: 0x03,
        ac: 0,
        at: null
    },
    jmp: {
        id: 0x04,
        ac: 1,
        at: {
            0: 'label'
        }
    },
    call: {
        id: 0x05,
        ac: 1,
        at: {
            0: 'label'
        }
    },
    push: {
        id: 0x06,
        ac: 1,
        at: {
            0: 'dec|hex|register'
        }
    },
    pop: {
        id: 0x07,
        ac: 1,
        at: {
            0: 'register'
        }
    },
    mov: {
        id: 0x08,
        ac: 2,
        at: {
            0: 'register',
            1: 'dec|hex|register'
        }
    },
    div: {
        id: 0x09,
        ac: 2,
        at: {
            0: 'register',
            1: 'dec|hex|register'
        }
    },
    mul: {
        id: 0x0A,
        ac: 2,
        at: {
            0: 'register',
            1: 'dec|hex|register'
        }
    }
};
var regtbl = {
    a: {
        reg: 'a'
    },
    b: {
        reg: 'b'
    },
    c: {
        reg: 'c'
    },
    d: {
        reg: 'd'
    },
    z: {
        reg: 'z'
    }
};


var index = 0;
for (index in AST.children) 
{
  var child = AST.children[index];
  //console.log(child.cmd);
  if (child.cmd === 'label') {
    console.log(':'+child.param[0]);
  }
  if(child.cmd === 0x01) {
    console.log('    inc '+child.param[0]);
  }
  if(child.cmd === 0x02) {
    console.log('    dec '+child.param[0]);
  }
  if(child.cmd === 0x03) {
    console.log('    ret');
  }
  if(child.cmd === 0x04) {
    console.log('    jmp '+child.param[0]);
  }
  if(child.cmd === 0x05) {
    console.log('    call '+child.param[0]);
  }
  if(child.cmd === 0x06) {
    console.log('    push '+child.param[0]);
  }
  if(child.cmd === 0x07) {
    console.log('    pop '+child.param[0]);
  }
  if(child.cmd === 0x08) {
    console.log('    mov '+child.param[0]+','+child.param[1]);
  }
  if(child.cmd === 0x09) {
    console.log('    div '+child.param[0]+','+child.param[1]);
  }
  if(child.cmd === 0x0A) {
    console.log('    mul '+child.param[0]+','+child.param[1]);
  }

}
//console.log(AST);
