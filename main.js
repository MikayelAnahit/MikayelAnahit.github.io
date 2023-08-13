const out = document.getElementById('out');

const am = ['Սիրելի', 'Հյուրեր', 'Մենք հրավիրում ենք ձեզ մեր հարսանիքին որը տեղի կունենա', '16:00-<span>Պսակադրություն</span>', '17:30-<span>Հարսանեկան խնջույք</span>', 'Պսակադրություն', 'Սաղմոսավանք', 'How to get link', 'Հարսանեկան խնջույք', 'Վիլլա Հիլս', 'Մենք գնահատում ենք ձեր ներկայությունը Սիրով', 'Միքայել', 'Անահիտ'];
const en = ['Dear', 'Guest', 'We invite you to our wedding<br>which will take place', '16:00-<span>Church ceremony</span>', '17:30-<span>Celebration party</span>', 'Church ceremony', 'Saghmosavank', 'How to get link', 'Celebration Party', 'Villa Hills', 'We appreciate your presence With Love', 'Mikayel', 'Anahit'];


if(window.location.href.split('?').length > 1){
    content(window.location.href.split('?')[1].split('=')[1]);
}

function content(leng){
    var __out = ``;
    __out += `
<div class="dear">
    <p ${leng == 'en' ? style="" :'style="font-family: Arm"'}}>${leng == 'en' ? en[0] : am[0]}</p>
    <p id="name" ${leng == 'en' ? style="" :'style="font-family: Arm"'}}>${leng == 'en' ? en[1] : am[1]}</p>
</div>
<p class="text" ${leng == 'en' ? style="" :'style="font-family: Arm"'}}>
    ${leng == 'en' ? en[2] : am[2]}
</p>
<div class="times">
    <div class="date">
        <p class="day">1<span>7</span></p>
        <p class="month">09</p>
        <p class="year">23</p>
    </div>
    <div class="line">
        <div class="boll"></div>
        <div class="l"></div>
        <div class="boll"></div>
    </div>
    <div class="time">
        <p class="f" ${leng == 'en' ? style="" :'style="font-family: Arm"'}}>${leng == 'en' ? en[3] : am[3]}</p>
        <p class="s" ${leng == 'en' ? style="" :'style="font-family: Arm"'}}>${leng == 'en' ? en[4] : am[4]}</p>
    </div>
</div>
<div class="title">
    <p ${leng == 'en' ? style="" :'style="font-family: Arm"'}}>${leng == 'en' ? en[5] : am[5]}</p>
    <p ${leng == 'en' ? style="" :'style="font-family: Arm"'}}>${leng == 'en' ? en[6] : am[6]}</p>
</div>
<div class="images">
    <div class="_1"></div>
    <div class="_2"></div>
</div>
<div class="howToGetLink">
    <a href="https://maps.app.goo.gl/tAnyjWukBp3NSTqP9"><div></div> ${leng == 'en' ? en[7] : am[7]}</a>
</div>

<div class="horline">
    <div></div>
    <div class="horlines"></div>
    <div></div>
</div>

<div class="title">
    <p ${leng == 'en' ? style="" :'style="font-family: Arm"'}}>${leng == 'en' ? en[8] : am[8]}</p>
    <p ${leng == 'en' ? style="" :'style="font-family: Arm"'}}>${leng == 'en' ? en[9] : am[9]}</p>
</div>
<div class="images">
    <div class="_1_"></div>
    <div class="_2_"></div>
</div>
<div class="howToGetLink">
    <a href="https://maps.app.goo.gl/vbPo8DuDUzG3JTJK7"><div></div> ${leng == 'en' ? en[7] : am[7]}</a>
</div>

<div class="t1" ${leng == 'en' ? style="" : 'stile="font-family: Arm; font-size: 40px;"'}}>
    ${leng == 'en' ? en[10] : am[10]}
</div>

<div class="m_a">
    <p class="m" ${leng == 'en' ? style="" : 'style="font-family: Arm; left: -20%"'}}>${leng == 'en' ? en[11] : am[11]}</p>
    
    <p class="a" ${leng == 'en' ? style="" : 'style="font-family: Arm; left: 20%"'}}>${leng == 'en' ? en[12] : am[12]}</p>
    <p class="and" ${leng == 'en' ? style="" : 'style="left: 50px; top: 20px;"'}>&</p>
</div>
</div>`;
    out.innerHTML = __out;
}