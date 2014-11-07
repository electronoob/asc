fs = require('fs');
http = require('http');

/* spit the dummy */
function spit (loc,coc,desc) {
    console.log("\n--- - ---- --------  -------- --- -  -");
    console.log("Great Scott! You've torn a hole in the fabric of time!");
    console.log("-  -- ----------------------------------- --- -  -");

    if (loc != -1) {
        console.log(
           "["
           +filename+
           "@"
           +loc+
           ":"
           +coc+
           "]"
        );
        console.log(asc[loc]);
        padding = '';
        for(i=0;i<coc;i++) padding += ' ';
        console.log(padding + "^");
    }
    console.log(" "+desc);
    process.exit(1);
}

function ast_node() {
	this.cmd = 0;
	this.param = Array();
	this.loc = 0;
	this.coc = 0;
	this.id = 0;
	this.children = Array();
	this.hasChildren = function () {
		if(this.children.length > 0) return 1;
		return 0;
	};
        this.block = 0;
};
function ast_top() {
	this.id = 0;
	this.children = Array();
	this.hasChildren = function () {
		if(this.children.length > 0) return 1;
		return 0;		
	};
	this.childIterator = 0;
	this.childNext = function () {
		if(this.childIterator < this.children.length) {
			return this.children[this.childIterator++];
		} else {
			return null;
		}
	}
}
/* object literal */
var optbl = {
    inc:  { id: 0x01, ac: 0, at: null },
    dec:  { id: 0x02, ac: 0, at: null },
    ret:  { id: 0x03, ac: 0, at: null },
    jmp:  { id: 0x04, ac: 1, at: {0: 'label'} },
    call: { id: 0x05, ac: 1, at: {0: 'label'} },

    push: { id: 0x06, ac: 1, at: {0: 'dec|hex|register'} },

    pop:  { id: 0x07, ac: 1, at: {0: 'register'} },
    mov:  { id: 0x08, ac: 2, at: {0: 'register', 1: 'dec|hex|register'} },
    div:  { id: 0x09, ac: 2, at: {0: 'register', 1: 'dec|hex|register'} },
    mul:  { id: 0x0A, ac: 2, at: {0: 'register', 1: 'dec|hex|register'} }
};
var regtbl = {
    a: {reg:'a'},
    b: {reg:'b'},
    c: {reg:'c'},
    d: {reg:'d'},
    z: {reg:'z'}
};
filename = 'source.asc';
data = fs.readFileSync(filename);
asc  = data.toString().split("\n");
asc_clean = asc.map(function(s){
	if(s) return(s.trim());
	return("!");
});
asc = asc_clean; delete asc_clean; delete data;
ast = new ast_top();

function read_opcode(line) {
    op = undefined;
    if (line.split(' ').length > 0) {
        op = line.split(' ')[0];
    }
    argv = null;
    argc = 0;
    if (line.split(' ').length > 1) {
        argv = line.split(' ');
        argv = argv[1].split(',');
        argc = argv.length;
    }

    if (optbl[op] != undefined) {
        operation = optbl[op];
        operation.av = Array();
        // mul:  { id: 0x0A, ac: 2, at: {0: 'register', 1: 'hex|register'} }
        if(argc != operation.ac){
            operation.error = true;
            operation.reason = 'arg_count';
            return operation;
        }
        if (argc == 0) {
            if(operation.ac == 0) {
                return operation;
            } else {
                operation.error = true;
                operation.reason = 'arg_count';
                return operation;
            }
        }
        for (j=0; j<argc; j++) {
            /* grab each argument, check against expected type.  */
            type = get_argtype(argv[j]);
            template = operation.at[j].split('|');
            operation.adt = Array();
            if (template.indexOf(type) == -1) {
                /* script has an unknown argument type */
                operation.av[j] = null;
                operation.adt[j] = 'type_unknown';
                operation.error = true;
                operation.reason = 'arg_type';
            } else {
                /* this one is valid argument type */
                operation.av[j] = argv[j];
                operation.adt[j] = type;
            }
        }
        return operation;
    } else {
        /* make an empy operation object and set undefined */
        operation = {error: true, reason: 'op_undefined'};
        return operation;
    }
}
function get_argtype(argument) {
    if(regtbl[argument] != undefined) {
        return 'register';
    }
    if(argument.substr(0,2) == '0x') {
        /* could be a hex val */
        // allow up to 8 bytes or 64bits resolution
        // sign unknown. lowercase as always.
        isHex = /^0x[0-9a-f]{1,8}$/i.test(argument);
        if(isHex) {
            return 'hex';
        } else {
            return 'malformed';
        }
    }
    isDec = /^[0-9]{0,30}$/i.test(argument);
    if(isDec) {
        return 'dec';
    }
    isLabel = /^[a-z]{0,30}$/i.test(argument);
    if(isLabel) {
        return 'label';
    }
    return 'unknown';
}

/* process labels */
current_code_block = null;
for (i in asc) {
        operation = read_opcode(asc[i]);
        if((operation.error) && (operation.reason != 'op_undefined')) {
            /* we have some kind of error which we need to decode */
            //console.log (i+":error: "+operation.reason);
            //console.log(operation);
            //console.log(asc[i]);
            if (operation.reason == 'arg_type') {
                node = new ast_node();
                node.cmd = 'error_oparg_type';
                node.loc = i;
                node.coc = 0;
                ast.children.push(node);
            }
            if (operation.reason == 'arg_count') {
                node = new ast_node();
                node.cmd = 'error_oparg_count';
                node.loc = i;
                node.coc = 0;
                ast.children.push(node);
            }

            continue;
        }
        if (!operation.error) {
            /*
              if the opcode and argument are valid then we need
              to know the subsection we are in. :label block
            */
            if(current_code_block != null) {
                node = new ast_node();
                node.cmd = operation.id;
                node.loc = i;
                node.coc = 0;
                if(operation.ac > 0) {
                    node.param = operation.av;
                }
                node.block = current_code_block;
                ast.children.push(node);
                continue;
            } else {
                node = new ast_node();
                node.cmd = 'error_opfound_nomain';
                node.loc = i;
                node.coc = 0;
                ast.children.push(node);
                continue;
            }
            //mul:  { id: 0x0A, ac: 2, at: {0: 'register', 1: 'dec|hex|register'} }
            continue;
        }
        /* here we assume reply was op_undefined and proceed as normal*/
	/* fch: first character of line */
	fch = asc[i][0];
	/* :label line */
	if (fch == ':') {
		node = new ast_node();
		node.cmd = 'label';
		node.loc = i;
		node.coc = 0;
		node.param.push(asc[i].substr(1));
		ast.children.push(node);
                /* let ast generator know where to hang opcodes */
                current_code_block = asc[i].substr(1);
		continue;
	}
	/* ! comment line */
	if (fch == '!') {
		continue;
	}
        
	/* if we reach here we assume that the line
	makes no sense to us */
	node = new ast_node();
	node.cmd = 'error_nonsense';
	node.loc = i;
	node.coc = 0;
	node.param.push(asc[i].substr(1));
	ast.children.push(node);
};

/* check syntax and build ast */
labels = Array(); // list labels for dupe check

while (child = ast.childNext()) {
    param = child.param;
    if(child.cmd == 'error_nonsense') {
	desc = "Parser expects valid OP code, label or something."
        spit(child.loc,child.coc,desc);
    }
    if(child.cmd == 'error_opfound_nomain') {
        desc = "Parser discovered a valid opcode but expecting :main."
        spit(child.loc,child.coc,desc);
    }
    if(child.cmd == 'error_oparg_count') {
        desc = "Parser found argument count mismatch."
        spit(child.loc,child.coc,desc);
    }
    if(child.cmd == 'error_oparg_type') {
        desc = "Parser found argument type mismatch."
        spit(child.loc,child.coc,desc);
    }
    if (child.cmd == 'label') {
        if (param[0] != 'main') {
            if (labels[0] != 'main') {
                desc = "Parser expects :main to be first label.";
                spit(child.loc, child.coc, desc);
            }
        }
        if (labels.indexOf(param[0]) != -1) {
            /* we seem to have found a dupe label */
            desc = "Parser discovered duplicate :" + param[0] + " label";
            spit(child.loc, child.coc, desc);
        } else {
            labels.push(param[0]);
        }
    }
}

/* without main we can't really do a lot */
if (labels.indexOf('main') == -1) {
    spit(-1,-1,":main is missing!");
}
