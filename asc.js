fs = require('fs');

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
        i=0;
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

filename = 'source.asc';
data = fs.readFileSync(filename);
asc  = data.toString().split("\n");
asc_clean = asc.map(function(s){
	if(s) return(s.trim());
	return("!");
});
asc = asc_clean; delete asc_clean; delete data;

ast = new ast_top();

/* process labels */
for (i in asc) {
	fch = asc[i][0];
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
