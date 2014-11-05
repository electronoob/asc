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
    jmp:  { id: 0x04, ac: 1, at: {1: 'label'} },
    call: { id: 0x05, ac: 1, at: {1: 'label'} },
    push: { id: 0x06, ac: 1, at: {1: 'hex|register'} },
    pop:  { id: 0x07, ac: 1, at: {1: 'register'} },
    mov:  { id: 0x08, ac: 2, at: {1: 'register', 2: 'hex|register'} },
    div:  { id: 0x09, ac: 2, at: {1: 'register', 2: 'hex|register'} },
    mul:  { id: 0x0A, ac: 2, at: {1: 'register', 2: 'hex|register'} }
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

function has_opcode(line) {
    
    return -1;
}
/* process labels */
for (i in asc) {
	/* fch: first character of line */
	fch = asc[i][0];
        $opcode = has_opcode(asc[i]);
	/* :label line */
	if (fch == ':') {
		node = new ast_node();
		node.cmd = 'label';
		node.loc = i;
		node.coc = 0;
		node.param.push(asc[i].substr(1));
		ast.children.push(node);
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
