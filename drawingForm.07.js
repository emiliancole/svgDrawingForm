var svgNS = svg.namespaceURI;

function xmlToString(xmlData) { 
	var xmlString;
	//IE
	if (window.ActiveXObject){
	xmlString = xmlData.xml;
	}
	// code for Mozilla, Firefox, Opera, etc.
	else{
	xmlString = (new XMLSerializer()).serializeToString(xmlData);
	}
	return xmlString;
}

function showSource() {
		var myxml= document.getElementById("svg");
	//	alert(xmlToString(myxml));
		document.getElementById("ta").value=xmlToString(myxml);       	
    }   
	

// *** addElement() to svg ***

function addA() {
	var el = document.createElementNS(svgNS,'a');
	var par = document.getElementById("svg");
	var id = document.getElementById("idA").value;
	var href = document.getElementById("hrefA").value;	
    el.setAttribute('id',id);
    el.setAttribute('href',href);
    par.appendChild(el);
	alert("a added!");
    }

function addEllipse() {
    var el = document.createElementNS(svgNS,'ellipse');
	var par = document.getElementById("parEllipse").value;
	var par = document.getElementById(par);
	var cx = document.getElementById("cxEllipse").value;
	var cy = document.getElementById("cyEllipse").value;
	var rx = document.getElementById("rxEllipse").value;
	var ry = document.getElementById("ryEllipse").value;
	var style = document.getElementById("styleEllipse").value;
    el.setAttribute('cx',cx);
    el.setAttribute('cy',cy);
    el.setAttribute('rx',rx);
	el.setAttribute('ry',ry);
    el.setAttribute('style',style);
    par.appendChild(el);
	alert("ellipse added!");
	}
	
function addG() {
	var el = document.createElementNS(svgNS,'g');
	var par = document.getElementById("svg");
	var id = document.getElementById("idG").value;
	var style = document.getElementById("styleG").value;
	var transform = document.getElementById("transformG").value;	
    el.setAttribute('id',id);
	el.setAttribute('style',style);
    el.setAttribute('transform',transform);
    par.appendChild(el);
	alert("g added!");
    }
	
function addImage() {
    var el = document.createElementNS(svgNS,'image');
	var par = document.getElementById("parImage").value;
	var par = document.getElementById(par);
	var x = document.getElementById("xImage").value;
	var y = document.getElementById("yImage").value;
	var width = document.getElementById("widthImage").value;
	var height = document.getElementById("heightImage").value;
	var href = document.getElementById("hrefImage").value;
	var style = document.getElementById("styleImage").value;
    el.setAttribute('x',x);
    el.setAttribute('y',y);
    el.setAttribute('width',width);
	el.setAttribute('height',height);
	el.setAttribute('href',href);
    el.setAttribute('style',style);
    par.appendChild(el);
	alert("image added!");
	}
	
function addLine() {
    var el = document.createElementNS(svgNS,'line');
	var par = document.getElementById("parLine").value;
	var par = document.getElementById(par);
	var x1 = document.getElementById("x1").value;
	var y1 = document.getElementById("y1").value;
	var x2 = document.getElementById("x2").value;
	var y2 = document.getElementById("y2").value;
	var style = document.getElementById("styleLine").value;
    el.setAttribute('x1',x1);
    el.setAttribute('y1',y1);
    el.setAttribute('x2',x2);
	el.setAttribute('y2',y2);
    el.setAttribute('style',style);
    par.appendChild(el);
	alert("line added!");
	}
	
function addPath() {
	var el = document.createElementNS(svgNS,'path');
	var par = document.getElementById("parPath").value;
	var par = document.getElementById(par);
	var d = document.getElementById("d").value;
	var style = document.getElementById("stylePath").value;	
    el.setAttribute('d',d);
    el.setAttribute('style',style);
    par.appendChild(el);
	alert("path added!");
    }

function addPolygon() {
	var el = document.createElementNS(svgNS,'polygon');
	var par = document.getElementById("parPolygon").value;
	var par = document.getElementById(par);
	var points = document.getElementById("pointsPolygon").value;
	var style = document.getElementById("stylePolygon").value;	
    el.setAttribute('points',points);
    el.setAttribute('style',style);
    par.appendChild(el);
	alert("polygon added!");
    }
	
function addPolyline() {
	var el = document.createElementNS(svgNS,'polyline');
	var par = document.getElementById("parPolyline").value;
	var par = document.getElementById(par);
	var points = document.getElementById("pointsPolyline").value;
	var style = document.getElementById("stylePolyline").value;	
    el.setAttribute('points',points);
    el.setAttribute('style',style);
    par.appendChild(el);
	alert("polyline added!");
    }
	
function addRect() {
    var el = document.createElementNS(svgNS,'rect');
	var par = document.getElementById("parRect").value;
	var par = document.getElementById(par);
	var x = document.getElementById("xRect").value;
	var y = document.getElementById("yRect").value;
	var width = document.getElementById("widthRect").value;
	var height = document.getElementById("heightRect").value;
	var rx = document.getElementById("rxRect").value;
	var ry = document.getElementById("ryRect").value;
	var style = document.getElementById("styleRect").value;
    el.setAttribute('x',x);
    el.setAttribute('y',y);
    el.setAttribute('width',width);
	el.setAttribute('height',height);
	el.setAttribute('rx',rx);
    el.setAttribute('ry',ry);
    el.setAttribute('style',style);
    par.appendChild(el);
	alert("rect added!");
	}
	
function addSym() {
	var el = document.createElementNS(svgNS,'symbol');
	var par = document.getElementById("svg");
	var id = document.getElementById("idSym").value;
	var style = document.getElementById("styleSym").value;
	//var transform = document.getElementById("transformG").value;	
    el.setAttribute('id',id);
	el.setAttribute('style',style);
    //el.setAttribute('transform',transform);
    par.appendChild(el);
	alert("symbol added!");
    }
	
function addText() {
    var el = document.createElementNS(svgNS,'text');
	var par = document.getElementById("parText").value;
	var par = document.getElementById(par);
	var data = document.createTextNode(data);
	var t = document.getElementById("data").value;
	data.textContent=t;
	var x = document.getElementById("xText").value;
	var y = document.getElementById("yText").value;
	var dx = document.getElementById("dxText").value;
	var dy = document.getElementById("dyText").value;
	var style = document.getElementById("styleText").value;
    el.setAttribute('x',x);
    el.setAttribute('y',y);
    el.setAttribute('dx',dx);
	el.setAttribute('dy',dy);
    el.setAttribute('style',style);
	el.appendChild(data);
    par.appendChild(el);
	alert("text added!");
	}
	
function addUse() {
    var el = document.createElementNS(svgNS,'use');
	var par = document.getElementById("parUse").value;
	var par = document.getElementById(par);
	var x = document.getElementById("xUse").value;
	var y = document.getElementById("yUse").value;
	//var width = document.getElementById("widthUse").value;
	//var height = document.getElementById("heightUse").value;
	var href = document.getElementById("hrefUse").value;
	var style = document.getElementById("styleUse").value;
    el.setAttribute('x',x);
    el.setAttribute('y',y);
    //el.setAttribute('width',width);
	//el.setAttribute('height',height);
	el.setAttribute('href',href);
    el.setAttribute('style',style);
    par.appendChild(el);
	alert("use added!");
	}
	
// *** changeElement() ***
	function changeEllipse() {
		var cx = document.getElementById("a1").value;
		var cy = document.getElementById("a2").value;
		var rx = document.getElementById("a3").value;
		var ry = document.getElementById("a4").value;
		var style = document.getElementById("style").value;
		document.getElementById("ellipse1").setAttribute("cx", cx);
		document.getElementById("ellipse1").setAttribute("cy", cy);
		document.getElementById("ellipse1").setAttribute("rx", rx);	
        document.getElementById("ellipse1").setAttribute("ry", ry);
		document.getElementById("ellipse1").setAttribute("style", style);	
    }
	

	function changeLine() {
		var x1 = document.getElementById("a1").value;
		var y1 = document.getElementById("a2").value;
		var x2 = document.getElementById("a3").value;
		var y2 = document.getElementById("a4").value;
		var style = document.getElementById("style").value;
		document.getElementById("line1").setAttribute("x1", x1);
		document.getElementById("line1").setAttribute("y1", y1);
		document.getElementById("line1").setAttribute("x2", x2);	
        document.getElementById("line1").setAttribute("y2", y2);
		document.getElementById("line1").setAttribute("style", style);	
    }
	
	function changePolygon() {
		var points = document.getElementById("points").value;
		var style = document.getElementById("style").value;	
        document.getElementById("polygon1").setAttribute("points", points);
		document.getElementById("polygon1").setAttribute("style", style);	
    }
	
	function changePolyline() {
		var points = document.getElementById("points").value;
		var style = document.getElementById("style").value;	
        document.getElementById("polyline1").setAttribute("points", points);
		document.getElementById("polyline1").setAttribute("style", style);	
    }
	
	function changeRect() {
		var x = document.getElementById("a1").value;
		var y = document.getElementById("a2").value;
		var width = document.getElementById("a3").value;
		var height = document.getElementById("a4").value;
		var style = document.getElementById("style").value;
		document.getElementById("rect1").setAttribute("x", x);
		document.getElementById("rect1").setAttribute("y", y);
		document.getElementById("rect1").setAttribute("width", width);	
        document.getElementById("rect1").setAttribute("height", height);
		document.getElementById("rect1").setAttribute("style", style);	
    }
	
	function changeSvg() {
		var x = document.getElementById("xSvg").value;
		var y = document.getElementById("ySvg").value;
		var width = document.getElementById("widthSvg").value;
		var height = document.getElementById("heightSvg").value;
		var viewBox = document.getElementById("viewBox").value;
		var el = document.getElementById("draw");
		el.setAttribute("x", x);
		el.setAttribute("y", y);
		el.setAttribute("width", width);	
        el.setAttribute("height", height);
	//	el.setAttribute("style", "fill:white;");	
		document.getElementById("svg").setAttribute("x", x);
		document.getElementById("svg").setAttribute("y", y);
		document.getElementById("svg").setAttribute("width", width);	
        document.getElementById("svg").setAttribute("height", height);
		document.getElementById("svg").setAttribute("viewBox", viewBox);	
		alert("svg viewBox changed!");
    }
	
	function changeText() {
		var el = document.getElementById("text1")
		var data = document.createTextNode(data);
		var t = document.getElementById("data").value;
		data.textContent=t;
		var x = document.getElementById("a1").value;
		var y = document.getElementById("a2").value;
		var dx = document.getElementById("a3").value;
		var dy = document.getElementById("a4").value;
		var style = document.getElementById("style").value;
		document.getElementById("text1").setAttribute("x", x);
		document.getElementById("text1").setAttribute("y", y);
		document.getElementById("text1").setAttribute("dx", dx);	
        document.getElementById("text1").setAttribute("dy", dy);
		document.getElementById("text1").setAttribute("style", style);	
		el.appendChild(data);
    }
		
    function changePosition() {
        document.getElementById("c1").setAttribute("cx", 100);
		document.getElementById("c1").setAttribute("cy", 100);
    }

	function addX() {
		var c1Element = document.getElementById("c1");
		var cx = parseInt(c1Element.getAttribute("cx"));
		//alert(cx+10);
		c1Element.setAttribute("cx", cx+10);	
	}
	
	function subX() {
		var c1Element = document.getElementById("c1");
		var cx = parseInt(c1Element.getAttribute("cx"));
		c1Element.setAttribute("cx", cx-10);	
	}
	
	function addY() {
		var c1Element = document.getElementById("c1");
		var cy = parseInt(c1Element.getAttribute("cy"));
		c1Element.setAttribute("cy", cy+10);	
	}
	
	function subY() {
		var c1Element = document.getElementById("c1");
		var cy = parseInt(c1Element.getAttribute("cy"));
		c1Element.setAttribute("cy", cy-10);	
	}
	
	function pos() {
		var c1Element = document.getElementById("c1");
		var cx = parseInt(c1Element.getAttribute("cx"));
		var cy = parseInt(c1Element.getAttribute("cy"));
		alert(cx+","+cy);	
	}
	
	function clicked(evt){
        var e = evt.target;
        var dim = e.getBoundingClientRect();
        var x = evt.clientX - dim.left;
        var y = evt.clientY - dim.top;
        alert("x: "+x+" y:"+y);
    }        
	
	function setAttr() {
		var idVal = document.getElementById("idAttr").value;
		var name = document.getElementById("nameAttr").value;
		var value = document.getElementById("valueAttr").value;
		var el = document.getElementById(idVal); 		
		el.setAttribute(name, value);
		alert("attribute set!");
	}
	
	function setId() {
		var tagName = document.getElementById("tagName").value;
		//alert(tagName);
		var index = document.getElementById("index").value;
		var idValue = document.getElementById("idValue").value;
		//alert(idValue);
		var el = document.getElementsByTagName(tagName)[index]; 		
		el.setAttribute("id", idValue);
		alert("id attribute set!");
	}
	
	function removeElement() {
		var idVal = document.getElementById("idElement").value;
		var node = document.getElementById(idVal);
		if (node.parentNode) {
		node.parentNode.removeChild(node);
		}
		confirm("CONFIRM ELEMENT REMOVAL?");
	}
	
	