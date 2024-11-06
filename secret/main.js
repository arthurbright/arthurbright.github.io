const button = document.getElementById("butt")
const error_text = document.getElementById("error")
const text_box = document.getElementById("textbox")

function set_error_text(str){
    error_text.innerHTML = str;
}

function formatString(input) {
    return input.replace(/\s+/g, '').toLowerCase();
}
thefun = function(){
    let raw_str = text_box.value;
    let str = formatString(raw_str)
    
    // 2
    if(raw_str.length < 15){
        set_error_text("Password must be at least 15 characters."); return;
    }

    // 3
    if(!(/[A-Z]/.test(raw_str))){
        set_error_text("Password must contain an uppercase letter."); return;
    }
    // 4
    if(!(/[0-9]/.test(raw_str))) {
        set_error_text("Password must contain a digit."); return;
    }
    // 5, 6, 7
    const specialSymbols = str.match(/[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~]/g);
    let num_symbols = specialSymbols ? specialSymbols.length : 0;
    if(num_symbols < 1) {
        set_error_text("Password must contain an special symbol."); return;
    }
    if(num_symbols < 3) {
        set_error_text("Password must contain an 3 special symbols for extra strength."); return;
    }
    if(num_symbols < 7) {
        set_error_text("I changed my mind. It's gotta have at least 7 symbols."); return;
    }
    // 8
    if(!/[\u4e00-\u9fff]/.test(str)){
        set_error_text("Password must contain a Chinese character."); return;
    }
    // 9
    if(!str.includes("sumanan")){
        set_error_text("Password must contain your maiden name."); return;
    }
    // 10
    if(!str.includes("midas")){
        set_error_text("Password must contain the name of your pet."); return;
    }
    // 11
    if(!str.includes("vanatu") && !str.includes("vietnam") && !str.includes("vatican") && !str.includes("venezuela")){
        set_error_text("Password must contain the name of a country that starts with V."); return;
    }
    // 12
    if(!str.includes("32132111112222321")){
        set_error_text("Password must contain the melody of Hot Cross Buns in scale degrees."); return;
    }
    // 13
    if(!str.includes("lavanya")){
        set_error_text("Password must contain your female alter ego."); return;
    }
    // 14
    if(!str.includes("black")){
        set_error_text("Password must contain the highest tape colour you can climb at GRR."); return;
    }
    // 15
    if(raw_str.includes("l")){
        set_error_text("All 'L's must be in upper case."); return;
    }
    // 16
    if(raw_str.includes("S")){
        set_error_text("All 'S's must be in lower case."); return;
    }
    // 17
    if(!str.includes("kachow")){
        set_error_text("Password must contain a certain vehicular catch phrase."); return;
    }
    // 18
    if(!str.includes("onepiece")){
        set_error_text("Password must contain something that is real!"); return;
    }
    // 19
    const boness = str.match(/🦴/g);
    let bones = boness ? boness.length : 0;
    if(bones < 1){
        set_error_text("Midas 🐕 is hungry. Password must contain a bone for midas."); return;
    }
    // 20
    if(!str.includes("💀")){
        set_error_text("Password must contain a bone for Frank."); return;
    }
    // 21
    if(!str.includes("vxix")){
        set_error_text("Password must contain the Roman numeral for 69."); return;
    }
    // 22
    if(!str.includes("nomorethanfivevowels")){
        set_error_text("Password must contain <i>no more than five vowels<i>."); return;
    }
    // 23
    if(!str.startsWith("🍞") || !str.endsWith("🍞")){
        set_error_text("Make the password a sandwich: 🍞🍞"); return;
    }
    // 24
    if(!str.includes("shellfish")){
        set_error_text("I’m tucked in my home, deep under the blue,<br>Though tasty to some, I’m trouble for you.<br>One bite of me might bring you a fright,<br>With swelling and itching through day and night.<br>What am I?"); return;
    }
    // 25
    if(!str.includes("eadgbe")){
        set_error_text("Password must contain the strings of a guitar."); return;
    }
    // 26
    if(!str.includes("logan")){
        set_error_text("Password must contain what the cashier might call you."); return;
    }
    // 27
    if(!str.includes("laos")){
        set_error_text("Password must contain the name of the four letter country."); return;
    }
    // 28
    if(!str.includes("midnightmemories")){
        set_error_text("Boldly bedecked, I borrow attire,<br>As I serenade souls with singing and choir.<br>With style and grace, I stand on display,<br>Guess the tune I belt out this way."); return;
    }
    // 29
    if(!str.includes("buldak")){
        set_error_text("Password must contain something considered a full, nutrituous dinner."); return;
    }
    // 30
    if(!str.includes("felix")){
        set_error_text("Password must contain Liggy's real name."); return;
    }
    // 31
    const waters = str.match(/💧/g);
    let waterrs = waters ? waters.length : 0;
    if (waterrs < 5) {
        set_error_text("Add water (💧) to your password until it is sufficiently hydrated."); return;
    } else if(waterrs < 15) {
        set_error_text("Add water 💧 to your password until it is sufficiently hydrated. " + waterrs.toString() + "/15"); return;
    }
    // 32
    if(!str.includes("fein")){
        set_error_text("I hope they play it."); return;
    }
    // 33
    if(!str.includes("🥏")){
        set_error_text("Password must contain the only 🔨 you want thrown at you (in emoji form)."); return;
    }
    // 34
    if(!str.includes("deasenuts")){
        set_error_text("Have you met my friend Dease?"); return;
    }
    // 35
    if(!str.includes("joemama")){
        set_error_text("Haha good one, let me tell my friend Joe."); return;
    }
    // 36
    if(!str.includes("sock")){
        set_error_text("Password must contain what was on the handle."); return;
    }
    // 37
    if(!str.includes("butterchicken")){
        set_error_text("Golden and creamy, I’m rich and I’m warm,<br>Spices and veggies transform my form.<br>A favorite companion for naan by your side,<br>In any dish, I’m a point of pride.<br>What am I?"); return;
    }
    // 38
    if(!str.includes("happy")){
        set_error_text("? ーで埋め尽くして "); return;
    }
    // 39
    if(!str.includes("77")){
        set_error_text("Password must contain x where 4x - 105 = 203."); return;
    }
    // 40
    if(!str.includes("jennifer")){
        set_error_text("Password must contain the person's house under which HOSA Bowl's secret Minecraft hideout is located."); return;
    }
    // 41
    if(!str.includes("feel")){
        set_error_text("Password must contain what comes before element 29."); return;
    }
    // 42
    if(!str.includes("wearealwaystryingtodoourverybest")){
        set_error_text("You are welcome here at DCPS 🎶"); return;
    }
    // 43
    if(!str.includes("🍊")){
        set_error_text("🍒🍓_"); return;
    }
    // 44
    if(!str.includes("6969")){
        set_error_text("Password must contain your age times 332 minus 3."); return;
    }
    // 45
    if(!str.includes("hinata")){
        set_error_text("Password must contain your discord profile picture."); return;
    }
    // 46
    if(bones < 2){
        set_error_text("Midas is hungry again. Password must contain another bone."); return;
    }
    // 47
    if(!str.includes("kingkghoul") && !str.includes("kingk.ghoul") ){
        set_error_text("I’m pale as snow, with scales so bright,<br>In murky waters, I’m a sight!<br>Not quite a lizard, not quite a snake,<br>A beast from myths you can’t mistake.<br>What am I?"); return;
    }
    // 48
    if(!str.includes("otorhinolaryngology")){
        set_error_text("Password must contain the medical term for the study of the ears, nose, and throat."); return;
    }
    // 49
    if(!str.includes("singer")){
        set_error_text("Password must contain the reason you are working late."); return;
    }




    set_error_text("You passed.")
}

button.onclick = thefun