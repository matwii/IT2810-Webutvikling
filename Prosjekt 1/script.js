var FFVIIText = "A corrupt company, by the name of ShinRa is draining the energy out of the (nameless) planet and" +
    " conducting expiriments on living things. Enviromental and social callamities, such as the pollution of the air " +
    "and seas, overpopulation, high drug rate and treating women like objects. A mercenary and a rough and tough organization" +
    " by the name of Avalanche must put an end to ShinRa, but a couple of ShinRa victims might be causing a bigger threat. " +
    "One of the ShinRa victims is an alien that crash-landed on the planet and killed an ancient race. The other ShinRa victim " +
    "is a man in a trench coat that wants to rule the world and summon the doomsday meteorite."

var FFVIText = "Final Fantasy VI was the sixth installment to the Final Fantasy series and proved to be a landmark game for" +
    "the entire RPG genre. It was released as Final Fantasy III in the U.S. to stay" +
    "sequential to the previous release (FFIV). The game has 14 playable characters, which was the biggest cast yet in any Final Fantasy. Much like Final " +
    "Fantsay IV, the character's classes were unchangeable, however, you can equip a new magic/skill system called " +
    "Espers and learn new abilities. The game was a huge hit and helped lift the series into the public eye, to this " +
    "day many RPG and FF fans alike consider this one of the best in the series."

var FFXVText = "Final Fantasy XV takes place on the Earth-like world of Eos, which is divided into three " +
    "continents: Lucis, Accordo, and Niflheim. Lucis, located in the northeastern part of Eos, is a kingdom in possession " +
    "of a magical artifact known as the Crystal, gifted to the reigning Caelum dynasty by the world's deities in antiquity" +
    " and accessed through the hereditary Ring of the Lucii. Accordo, located in the southern part of Eos, is an island " +
    "nation formed through a union of free trading cities. The western continent is home to the technologically-advanced " +
    "empire of Niflheim and the nation of Tenebrae, which is ruled by the Oracle—a priestess with the ability to commune " +
    "with the world's deities and halt the Starscourge, a plague that absorbs all natural light and allows nocturnal " +
    "monsters known as Daemons to roam the world. Central to the lore of Eos are the Astrals, six divine beings who serve " +
    "as the guardians of the natural world and are divorced from human affairs, and the True King, a legendary figure " +
    "prophesied to appear when darkness threatens the world."

$(document).ready(function () {
    $("#FFVI").click(function () {
        $('#image').animate({opacity: 0}, 'slow', function() {
            $('#image')
                .css('background-image', 'url(img/ffvi.jpg)')
                .animate({opacity: 1});
        });
        $('#description').animate({'opacity': 0}, 'slow', function () {
            $(this).text(FFVIText);
        }).animate({'opacity': 1});
        $('#youtube').animate({'opacity': 0}, 'slow', function () {
            document.getElementById('youtube').src ="https://www.youtube.com/embed/a6t_uyg_pF8";
        }).animate({'opacity': 1});
    });

    $("#FFVII").click(function () {
        $('#image').animate({opacity: 0}, 'slow', function() {
            $('#image')
                .css('background-image', 'url(img/ffvii.jpg)')
                .animate({opacity: 1});
        });
        $('#description').animate({'opacity': 0}, 'slow', function () {
            $(this).text(FFVIIText);
        }).animate({'opacity': 1});
        $('#youtube').animate({'opacity': 0}, 'slow', function () {
            document.getElementById('youtube').src ="https://www.youtube.com/embed/Kznek1uNVsg";
        }).animate({'opacity': 1});
    });

    $("#FFXV").click(function () {
        $('#image').animate({opacity: 0}, 'slow', function() {
            $('#image')
                .css('background-image', 'url(img/ffxv.png )')
                .animate({opacity: 1});
        });
        $('#description').animate({'opacity': 0}, 'slow', function () {
            $(this).text(FFXVText);
        }).animate({'opacity': 1});
        $('#youtube').animate({'opacity': 0}, 'slow', function () {
            document.getElementById('youtube').src ="https://www.youtube.com/embed/8ivTFP7Qa-Y";
        }).animate({'opacity': 1});
    })
});