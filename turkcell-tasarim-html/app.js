/* Turkcell Hız Testi · tasarım örneği etkileşimleri
   - GO: sahte animasyonlu test → sonuç paneli + varyanta göre dinamik öneri
   - Yüzen varyant seçici: body[data-variant], localStorage, #v=a|b|c|d hash
*/
(function(){
  'use strict';

  /* ---------- Varyant yönetimi ---------- */
  var VALID = ['a','b','c','d'];
  function curVariant(){
    var h = (location.hash.match(/v=([abcd])/)||[])[1];
    return h || localStorage.getItem('tc_variant') || 'a';
  }
  function setVariant(v){
    if(VALID.indexOf(v)<0) v='a';
    document.body.setAttribute('data-variant', v);
    localStorage.setItem('tc_variant', v);
    try{ history.replaceState(null,'','#v='+v); }catch(e){}
    document.querySelectorAll('.vbtn').forEach(function(b){
      b.classList.toggle('active', b.getAttribute('data-v')===v);
    });
    // sonuç gösterildiyse, varyant değişince değerleri tazele
    if(document.getElementById('resultPanel').classList.contains('show')) paintResult();
  }
  document.querySelectorAll('.vbtn').forEach(function(b){
    b.addEventListener('click', function(){ setVariant(b.getAttribute('data-v')); });
  });
  window.addEventListener('hashchange', function(){ setVariant(curVariant()); });

  /* ---------- Test sonucu durumu ---------- */
  var lastResult = { down: 48, up: 12, ping: 24 };

  function recoFor(down){
    // ölçülen hıza göre bağlamsal öneri (sonuç-tetikli akıllı öneri çekirdeği)
    if(down < 50){
      return {
        msg: '4K yayın ve online oyun için <b>Turkcell Fiber 100</b> seni rahatlatır.',
        sub: 'Mevcut hızın yoğun saatlerde kalabalık bir evde zorlanabilir. Daha yüksek ve kararlı hız için aşağıdaki paket öneriliyor.'
      };
    } else if(down < 250){
      return {
        msg: 'Hızın iyi. Eşit upload ve oyuncu performansı için <b>Turkcell Fiber 1000</b> seni bir üst seviyeye taşır.',
        sub: 'Mevcut hızın çoğu kullanım için yeterli; yayıncılık, büyük indirme ve kalabalık ev için fiber 1000 ideal.'
      };
    }
    return {
      msg: 'Harika hız! Aynı performansı mobilde de istersen <b>Turkcell 5G</b> ile her yerde yanında.',
      sub: 'Bağlantın çok güçlü. Mobilde de fiber hızı için 5G ve Superbox 5G seçeneklerini değerlendirebilirsin.'
    };
  }

  function setText(id,val){ var el=document.getElementById(id); if(el) el.textContent=val; }
  function setHTML(id,val){ var el=document.getElementById(id); if(el) el.innerHTML=val; }

  function paintResult(){
    var d = lastResult.down;
    var r = recoFor(d);
    setText('rSpeed', d); setText('rPing', lastResult.ping);
    // A
    setText('recoSpeed', d); setHTML('recoMsg', r.msg); setText('recoSub', r.sub);
    // B
    setText('recoSpeedB', d);
    // C
    setText('cNow', d);
    var x = Math.max(1, Math.round(1000/d));
    setHTML('cMsg', 'Turkcell ile ~'+x+' kat daha hızlı internet mümkün.');
    // D
    setText('recoSpeedD', d);
  }

  /* ---------- GO: animasyonlu sahte test ---------- */
  var go = document.getElementById('goBtn');
  var gauge = document.getElementById('gauge');
  var testing = false;

  function runTest(){
    if(testing) return;
    testing = true;
    go.classList.add('testing');
    go.textContent = '...';
    document.getElementById('resultPanel').classList.remove('show');
    var pre = document.getElementById('preHint'); if(pre) pre.style.display='none';

    // hedef değerler (her testte hafif değişsin)
    var targetDown = Math.round(20 + Math.random()*180);   // 20-200
    var targetUp = Math.round(targetDown*0.2 + Math.random()*10);
    var targetPing = Math.round(8 + Math.random()*40);

    var t0 = Date.now(), DUR = 2600;
    var phase = 'down';
    var timer = setInterval(function(){
      var p = Math.min(1,(Date.now()-t0)/DUR);
      // gauge sweep
      var deg = (p* (phase==='down'?1:1)) * 360;
      gauge.style.setProperty('--deg', deg+'deg');
      if(phase==='down'){
        var cur = Math.round(targetDown*p);
        setText('mDown', cur);
        go.textContent = 'İndirme';
        if(p>=1){ phase='up'; t0=Date.now(); }
      } else if(phase==='up'){
        var pu = Math.min(1,(Date.now()-t0)/1400);
        setText('mUp', Math.round(targetUp*pu));
        setText('mPing', Math.round(targetPing*pu) || targetPing);
        go.textContent = 'Yükleme';
        if(pu>=1){
          clearInterval(timer);
          finish(targetDown,targetUp,targetPing);
        }
      }
    }, 60);
  }

  function finish(d,u,p){
    testing = false;
    lastResult = { down:d, up:u, ping:p };
    go.classList.remove('testing');
    go.textContent = 'TEKRAR';
    setText('mDown', d); setText('mUp', u); setText('mPing', p);
    paintResult();
    var rp = document.getElementById('resultPanel');
    rp.classList.add('show');
    rp.scrollIntoView({behavior:'smooth', block:'center'});
  }

  if(go) go.addEventListener('click', runTest);

  /* ---------- başlangıç ---------- */
  setVariant(curVariant());
})();
