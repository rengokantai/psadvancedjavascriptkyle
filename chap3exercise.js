/**
 * Created by Hernan Y.Ke on 4/11/15.
 */
var NotesManager =(function(){
    function addNote(note){
        $("#notes").prepend(
            $("<a href ='#'></a>").addClass("note").text(note)
        );
    }


    function addCurrentNote(){
        var current_note =$("#note").val();

        if(current_note){
            notes.push(current_note);
            addNote(current_note);
        }
    }
})