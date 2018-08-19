var qualificationString = "";
var languageString = "";
function formValidted(){
    var name = document.registration.name;
    var id = document.registration.id;
    var gender = document.registration.gender;
    var qualification = document.getElementsByName("tech");
    var language = document.getElementsByName("lan");
    if(nameCheck(name,10,1)){
        if(idCheck(id,5)){
            if(gender.value != "Default"){
                if(qualificationCheck(qualification)){
                    if(languageCheck(language)){
                        return true;
                    }
                    else{
                        alert("Fill the requirement properly (L) !");
                        language.focous();
                        return false;
                    }
                }
                else{
                    alert("Fill the requirement properly (Q) !");
                    qualification.focous();
                    return false;
                }
            }
            else{
                alert("Fill the requirement properly !");
                gender.focous();
                return false;
            }
        }
    }
}
function nameCheck(name,max,min){
    var nameLen =name.value.length;
    if(nameLen>=min && nameLen <= max){
        return true;
    }
    alert("Fill the requirement properly !");
    name.focous();
    return false;
}
function idCheck(id,len){
    var idLen = id.value.length;
    if(idLen === len){
        return true;
    }
    alert("Id is not proper !");
    id.focous();
    return false;
}
function qualificationCheck(qualification){
    for(var i = 0;i<qualification.length ; i++){
        if(qualification[i].checked){
            qualificationString = qualification.value;
            return true; 
        }
    }
    return false;
}
function languageCheck(language){
    for(var i = 0;i<language.length ; i++){
        if(language[i].checked){
            languageString = language.value;
            return true; 
        }
    }
    return false;
}