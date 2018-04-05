var rr1 = document.getElementById("rrange1"),
    rr2 = document.getElementById("rrange2"),
    rr3 = document.getElementById("rrange3"),
    rr4 = document.getElementById("rrange4"),
    rhair = document.getElementById("hair"),
    reyes = document.getElementById("eyes"),
    rnose = document.getElementById("nose"),
    rmouth = document.getElementById("mouth"),
    rrb = document.getElementById("rrangebutton"),
    disp = document.getElementById("display"),
    rprev = document.getElementById("preview"),
    rrandom = document.getElementById("rrandombutton");


var curElement = rprev;

document.getElementById("rcolor").addEventListener("change", function(){
    document.getElementById("preview").style.backgroundColor = this.value;
});

document.getElementById("rnumberbutton").addEventListener("click", function(){
    document.getElementById("rrange1").type = "number",
    document.getElementById("rrange2").type = "number",
    document.getElementById("rrange3").type = "number",
    document.getElementById("rrange4").type = "number";
        
});

document.getElementById("rrangebutton").addEventListener("click", function(){
    document.getElementById("rrange1").type = "range",
    document.getElementById("rrange2").type = "range",
    document.getElementById("rrange3").type = "range",
    document.getElementById("rrange4").type = "range";
});
                                                              

/*document.getElementById("rnumberbutton").addEventListener("click", function(){
    document.getElementById("rrange1").type = "number",
    document.getElementById("rrange2").type = "number",
    document.getElementById("rrange3").type = "number",
    document.getElementById("rrange4").type = "number";
});

document.getElementById("rrangebutton").addEventListener("click", function(){
    document.getElementById("rrange1").type = "range",
    document.getElementById("rrange2").type = "range",
    document.getElementById("rrange3").type = "range",
    document.getElementById("rrange4").type = "range";
});*/

rr1.addEventListener("change", function(){
    hair.style.width = 
    rr1.value+"%";
});

rr2.addEventListener("change", function(){
    eyes.style.width = 
    rr2.value+"%";
});

rr3.addEventListener("change", function(){
    nose.style.width = 
    rr3.value+"%";
});

rr4.addEventListener("change", function(){
    mouth.style.width = 
    rr4.value+"%";
});
var num = 1;
rhair.addEventListener("click", function(){
   rhair.src = "img/hair"+num+".png";
    if(num >= 3){
        num = 0;
    }
    num++;
});
var num = 1;
reyes.addEventListener("click", function(){
   reyes.src = "img/eyes"+num+".png";
    if(num >= 3){
        num = 0;
    }
    num++;
});
var num = 1;
rnose.addEventListener("click", function(){
   rnose.src = "img/nose"+num+".png";
    if(num >= 3){
        num = 0;
    }
    num++;
});

rmouth.addEventListener("click", function(){
   rmouth.src = "img/mouth"+num+".png";
    if(num >= 3){
        num = 0;
    }
    num++;
});

function createFace(){
var newdiv = document.createElement("div");
newdiv.style.width = "100px";
newdiv.style.height = "100px";
document.getElementById("display").appendChild(newdiv);
    
var img1 = document.createElement("img");
img.src = "img/hair1.png";
img1.style.width = "60%"; 
img1.style.top = "0%";
img1.appendChild(newdiv)

var img2 = document.createElement("img");
img.src = "img/hair2.png";
img2.style.width = "60%"; 
img2.style.top = "0%";
img2.appendChild(newdiv)

var img3 = document.createElement("img");
img.src = "img/hair3.png";
img3.style.width = "60%"; 
img3.style.top = "0%";
img3.appendChild(newdiv)

var img11 = document.createElement("img");
img.src = "img/eyes1.png";   
img11.style.width = "20%";
img11.style.top = "40%";
img11.appendChild(newdiv)

var img12 = document.createElement("img");
img.src = "img/eyes2.png"; 
img12.style.width = "20%";
img12.style.top = "40%";
img12.appendChild(newdiv)

var img13 = document.createElement("img");
img.src = "img/eyes3.png";
img13.style.width = "20%";
img13.style.top = "40%";
img13.appendChild(newdiv)

var img21 = document.createElement("img");
img.src = "img/nose1.png";  
img21.style.width = "20%";
img21.style.top = "55%";
img21.appendChild(newdiv)


var img22 = document.createElement("img");
img.src = "img/nose2.png";   
img22.style.width = "20%";
img22.style.top = "55%";
img22.appendChild(newdiv)

var img23 = document.createElement("img");
img.src = "img/nose3.png";  
img23.style.width = "20%";
img23.style.top = "55%";
img23.appendChild(newdiv)

var img31 = document.createElement("img");
img.src = "img/mouth1.png"; 
img31.style.width = "20%";
img31.style.top = "75%";
img31.appendChild(newdiv)

var img32 = document.createElement("img");
img.src = "img/mouth2.png";
img32.style.width = "20%";
img32.style.top = "75%";
img32.appendChild(newdiv)

var img33 = document.createElement("img");
img.src = "img/mouth3.png"; 
img33.style.width = "20%";
img33.style.top = "75%";
img33.appendChild(newdiv)
    
}

document.getElementById("rplusbutton").addEventListener("click", function(){
    createFace();
});
    

var hairrandom = ["img/hair1.png", "img/hair2.png", "img/hair3.png"]; 

var eyesrandom = [ "img/eyes1.png", "img/eyes2.png", "img/eyes3.png"];

var noserandom = ["img/nose1.png", "img/nose2.png", "img/nose3.png"];

var mouthrandom = ["img/mouth1.png", "img/mouth2.png", "img/mouth3.png"];

function makehairrandom(){
    this.src = hairrandom[Math.floor(Math.random() * hairrandom.length)];
    rhair.src = this.src;
    rr1.value = this.src
}

function makeeyesrandom(){
    this.src = eyesrandom[Math.floor(Math.random() * eyesrandom.length)];
    reyes.src = this.src;
}

function makenoserandom(){
    this.src = noserandom[Math.floor(Math.random() * noserandom.length)];
    rnose.src = this.src;
}

function makemouthrandom(){
    this.src = mouthrandom[Math.floor(Math.random() * mouthrandom.length)];
    rmouth.src = this.src;
}
    function makebgrandom(){
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

for (var i = 0; i < 10; i++) {
    console.log(makebgrandom());
}

function randomFace(){
    makehairrandom();
    makeeyesrandom();
    makenoserandom();
    makemouthrandom();
    rprev.style.backgroundColor = makebgrandom();
}

rrandom.addEventListener("click", function(){
   randomFace();
});

/*
    neweyes.src = eyesrandom[Math.floor(Math.random() * eyesrandom.length)];
    newnose.src = noserandom[Math.floor(Math.random() * noserandom.length)];
    newmouth.src = mouthrandom[Math.floor(Math.random() * mouthrandom.length)];
    rhair.src = this.src;
    reyes.src = this.src;
    rnose.src = this.src;
    rmouth.src = this.src;
});*/

/*document.getElementById("rautorandomcreate").addEventListener("click", function(){
    
}*/
