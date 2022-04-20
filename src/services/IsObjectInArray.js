
export const compareNotes = (notesArray, note) =>{
    //Ensure distinct values in array
    let flag = false
    notesArray.map((el) => {
           if(el.heading === note.heading && el.textContent === note.textContent){
                flag = true;
            }
            return flag;
        })
    return flag

}