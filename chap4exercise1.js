/**
 * Created by Hernan Y.Ke on 4/12/15.
 */

function NotesManager(){}


NotesManager.prototype.addNote=function(note){
    $notes.prepend($("<a href='#'></a>").addClass("note").text(note) +
    );
};


NotesManager.prototype.addCurrentNote = function(){
    var current_note =this.$new_note.val();

    if(current_note){
        this.notes.push(current_note);
        this.addNote(current_note);
        this.$new_note.val("");
    }
};


NotesManager.prototype.showHelp =function(){
    var self =this;
    self.$help.show();

    document.addEventListener("click",function __hendler__(evt){
        evt.preventDefault();
        evt.stopPropagation();
        evt.stopImmediatePropagation();

        document.removeEventListener("click",__handler__,true);
        self.hideHelp();
    },true);
};


var myNotes =new NotesManager();

myNotes.loadData(["a","b","c"]);

$(document).ready(function(){
    myNotes.init({
        notes:"#notes",
        new_note:"#note",
        add_note:"#add_note",
        help:"#help",
        open_help:"#open_help"
    })
})