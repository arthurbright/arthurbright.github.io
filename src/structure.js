// Helper functions and classes for defining the directory/files
function pad(str, len){
    // for(let i = str.length; i < len; i ++){
    //     str = str + "&nbsp;"
    // }
    for(let i = 0; i < len; i ++){
        str = str + "&nbsp;";
    }
    return str;
}

export class Folder{
    constructor(name, parent){
        this.name = name;
        this.subfolders = [];
        this.files = [];
        this.path = name;
        if(!(parent === undefined)){
            this.path = parent.path + "/" + name
        }
        this.parent = parent
    }

    addFolder(folder){
        this.subfolders.push(folder);
        folder.parent = this;
    }

    addFile(file){
        this.files.push(file);
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
        var width = 3;
        if(this.parent) res += "<span class='blue'>" + pad("../", width) + "<\span>";
        for(let f of all){
            if(f instanceof Folder){
                res += "<span class='blue'>" + pad(f.name + "/", width) + "<\span>";
            }
            else{
                res += "<span class='aqua'>" + pad(f.name, width) + "<\span>";
            }
        }
        return res;
    }
}

export class File{
    constructor(name, content, is_text){
        this.name = name;
        this.content = content;
        this.is_text = is_text
    }

    getContent(){
        if(!this.is_text){
            window.open(this.content, '_blank');
            return undefined;
        }
        else{
            return this.content;
        }
    }
}

