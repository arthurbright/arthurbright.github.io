class Folder{
    constructor(name){
        this.name = name;
        this.subfolders = [];
        this.files = [];
        this.path = name;
        this.parent = undefined;
    }

    addFolder(folder){
        this.subfolders.push(folder);
        folder.path = this.path + "/" + folder.name;
        folder.parent = this;
    }

    addFile(file){
        this.files.add(file);
    }

    toString(){
        var all = [];
        for(let file of this.files){
            all.push(file);
        }
        for(let subfolder of this.subfolders){
            all.push(subfolder);
        }

        all.sort((a, b) => {
            return a.name.localeCompare(b.name);
        })

        var res = ""
        if(this.parent) res += "<span class='blue'>" + "../".padStart(10) + "<\span>";
        for(let f of all){
            if(f instanceof Folder){
                res += "<span class='blue'>" + (f.name + "/").padStart(10) + "<\span>";
            }
            else{
                res += "<span class='red'>" + f.name.padStart(10) + "<\span>";
            }
        }
        return res;
    }
}

class File{
    constructor(name, content){
        this.name = name;
        this.content = content;
    }
}



const cons = document.getElementById("console")
const fixed = document.getElementById("fixedtext")
const consbox = document.getElementById("consolebox")
const prefix = document.getElementById("prefix")
const ENTER = 13

var ready = false;
var curFolder = new Folder("~");
var root = curFolder;

var about = new Folder("about");
root.addFolder(about);

curFolder = about;


function append(str){
    fixed.innerHTML = fixed.innerHTML + str;
    consbox.scrollTop = consbox.scrollHeight;
}

function getPrefix(){
    return '<span class=green>a2bright@my-website</span>:<span class="blue">' + curFolder.path + '</span>$&nbsp;'
}

function startup(){
    append("TODO: STARTUP<br>")

    ready = true;
    prefix.innerHTML = getPrefix();
}
startup()

function processCommand(str){
    let arr = str.split(" ").filter((x) => {return x != ""});
    append(getPrefix() + str + "<br>");
    if(arr.length == 0){
        console.log("blank");
    }
    else if(arr[0] == "ls"){
        console.log("ls");
        if(arr.length == 1){
            append(curFolder.toString() + "<br>");
        }
        else if(arr.length == 2){

        }
    }
    else{
        append("<span class='red'>" + str + ": Unrecognized command! Check yo spelling<\span><br>");
    }

}

cons.onkeydown = e => {
    if(!ready){
        e.preventDefault();
        return;
    }


    if ((e.keyCode && e.keyCode == ENTER) || (e.charCode && e.charCode == ENTER)){
        processCommand(cons.value);
        cons.value = "";
        e.preventDefault();
    }
};

