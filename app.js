/**
 * Author: Isaac Streight
 * Start Date: October 27th, 2018
 * Project inspired by:
 *  an ex-girlfriend, Rise Against, and a coffee cup
 *   2 years, 7 months, 24 days later
 *  a girl, blackbear, and an unprecidented fallout
 *   2 months, 29 days better
 *  a number in the phone, Clairo, and an opportunity, missed
 *   4 months, 15 days wondering
 */


const credit = {
    "idofuckingcare": "http://beartrap.la",
    "thecurveapproached": "http://www.riseagainst.com/music/endgame-appeal-reason-siren-song-counter-culture-sufferer-witness/approaching-curve",
    "wouldyouaskme": "https://www.clairo.com"
};

const gutterLines = {
    "idofuckingcare": "inspired by a girl, blackbear, and an unprecidented fallout",
    "thecurveapproached": "inspired by an ex-girlfriend, rise against, and a coffee cup",
    "wouldyouaskme": "inspired by a number in the phone, Clairo, and an opportunity, missed"
};

const lyrics = {
    "idofuckingcare": `
cause i have hella feelings for you
i act like i dont fucking care
cause im so fucking scared
im only a fool for you
    `,
    "thecurveapproached": `
the cadence again overtook the air
up ahead there was a curve approaching
she made no indications of slowing
    `,
    "wouldyouaskme": `
ice cold, baby, i'm ice cold
you're the only one who could make me fold
i wouldn't ask you to take care of me
    `
};

const tabs = document.getElementsByTagName('td');
const creditObject = document.getElementsByClassName('credit')[0];
const gutterObject = document.getElementsByClassName('gutter')[0];

function loadText(title) {
    let l, line, r;
    let lyric = lyrics[title].trim();
    let lyricContainer = document.getElementById('lyricContainer');
    let s = window.getComputedStyle(lyricContainer, null).getPropertyValue('font-size');

    lyricContainer.innerHTML = "";
    r = lyricContainer.clientHeight / parseInt(s, 10);

    for (let c = 0, h = 1.25; c < lyric.length; c += l, h += 3) {
        line = document.createElement('div');
        l = Math.floor(Math.pow((8 * r * h) - 4 * Math.pow(h, 2), 1 / 2));

        line.innerHTML = lyric.slice(c, c + l);

        lyricContainer.appendChild(line);
    }

    gutterObject.innerHTML = gutterLines[title];
    creditObject.setAttribute('href', credit[title]);
}

function loadStyleSheet(target) {
    let activeSheet = target.dataset.theme + '.css';
    let styleSheets = document.querySelectorAll('[rel="stylesheet"]');

    for (let sheetIndex = 0; sheetIndex < styleSheets.length; sheetIndex++) {
        let sheet = styleSheets[sheetIndex];
        let styleSheet = sheet.sheet || sheet.styleSheet;

        if (styleSheet.href.includes(activeSheet) || styleSheet.href.includes('style.css')) {
            styleSheet.disabled = false;
        } else {
            styleSheet.disabled = true;
        }
    }
}

function load(target) {
    let selectedTitle = target.innerHTML.replace(/\s/g, '');

    loadStyleSheet(target);
    loadText(selectedTitle);

    for (let tabIndex = 0; tabIndex < tabs.length - 1; tabIndex++) {
        let tab = tabs[tabIndex];

        if (tab.classList.contains('selected')) {
            tab.classList.add('filled');
            tab.classList.remove('selected');
        }
    }

    target.classList.add('selected');
    target.classList.remove('filled');

    gutterObject.innerHTML = gutterLines[selectedTitle];
    creditObject.setAttribute('href', credit[selectedTitle]);
}


load(document.getElementsByClassName('selected')[0]);
