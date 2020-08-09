var i = 0; /* Set Global Variable i */
function increment(){
    i += 1; /* Function for automatic increment of field's "Name" attribute. */
}

/* Function to Remove Form Elements Dynamically */
function removeElement(parentDiv, childDiv){
    if (childDiv == parentDiv){
        alert("The parent div cannot be removed.");
    }
    else if (document.getElementById(childDiv)){
        var child = document.getElementById(childDiv);
        var parent = document.getElementById(parentDiv);
        parent.removeChild(child);
    }
    else{
        alert("Child div has already been removed or does not exist.");
        return false;
    }
}

/* User click on the text field. */
function nameFunction(){
    var r = document.createElement('div');
    var t = document.createElement("img");
    t.setAttribute("class", "add-icon popup");
    t.setAttribute("src", "images/plus-icon.png");
    t.setAttribute("title", "Add Element");
    t.setAttribute("onclick", "myFunction()");
    r.appendChild(t);
    
    var d = document.createElement("div");
    d.setAttribute("class", "line");
    
    var y = document.createElement("INPUT");
    y.setAttribute("type", "text");
    y.setAttribute("placeholder", "Start");
	
	var g = document.createElement("IMG");
	g.setAttribute("src", "images/trash-icon.png");
	g.setAttribute("class", "trash");
	
    r.setAttribute("class", "margin");
    r.appendChild(d);
    
    var s = document.createElement("div");
    s.setAttribute("class", "lines");
    
    y.setAttribute("Name", "textelement_" + i);
    r.appendChild(y);
    g.setAttribute("onclick", "removeElement('myForm','id_" + i + "')");
    r.appendChild(g);
	r.appendChild(s);
    r.setAttribute("id", "id_" + i);
    document.getElementById("myForm").appendChild(r);
}

/* Use for Conformation field. */
function elementFunction(){
    var r = document.createElement('div');
    var d = document.createElement("div");
    d.setAttribute("class", "line");
    
    var y = document.createElement("INPUT");
    y.setAttribute("type", "text");
    y.setAttribute("placeholder", "Conformation");
    r.setAttribute("class", "margin");
    r.appendChild(d);
	
	var g = document.createElement("IMG");
	g.setAttribute("src", "images/trash-icon.png");
	g.setAttribute("class", "trash");
    
    var s = document.createElement("div");
    s.setAttribute("class", "lines");
    var sv = document.createElement("div");
    sv.setAttribute("class", "hlines");
    var sl = document.createElement("div");
    sl.setAttribute("class", "llines");
    var sr = document.createElement("div");
    sr.setAttribute("class", "rlines");
    
    var tli = document.createElement("span");
    tli.setAttribute("class", "like-iconl popup");
    tli.setAttribute("onclick", "likeFunction(this)");
    sl.appendChild(tli);
    
    var tri = document.createElement("span");
    tri.setAttribute("class", "dislike-iconr popup");
    tri.setAttribute("onclick", "dislikeFunction(this)");
    sr.appendChild(tri);
    
    var tl = document.createElement("img");
    tl.setAttribute("class", "add-iconl popup");
    tl.setAttribute("src", "images/plus-icon.png");
    //tl.setAttribute("title", "Add Element");
    //tl.setAttribute("onclick", "elementFunction()");
    
    var tr = document.createElement("img");
    tr.setAttribute("class", "add-iconr popup");
    tr.setAttribute("src", "images/plus-icon.png");
    //tr.setAttribute("title", "Add Element");
    //tr.setAttribute("onclick", "elementFunction()");
    
    increment();
    
    y.setAttribute("Name", "textelement_" + i);
    r.appendChild(y);
    g.setAttribute("onclick", "removeElement('elementForm','id_" + i + "'), enable()");
	r.appendChild(g);
    r.appendChild(s);
    r.appendChild(sv);
    r.appendChild(sl);
    r.appendChild(sr);
    sl.appendChild(tl);
    sr.appendChild(tr);
    
    r.setAttribute("id", "id_" + i);
    document.getElementById("elementForm").appendChild(r);
}