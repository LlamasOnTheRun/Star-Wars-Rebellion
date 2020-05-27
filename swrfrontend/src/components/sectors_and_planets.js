import React, {
  Component
} from 'react';
import './../CSS/sectors_and_planets.css';

export class SectorsAndPlanets extends Component {

  myFunction = (e) => {
    let a = e.currentTarget.parentNode.parentNode.getAttribute("id");
    console.log("You choose the planet of " + a)
  }

  adjustLine (from, to, line) {
    console.log("Hello you are in my adjust line")

  var fT = from.offsetTop  + from.offsetHeight/2;
  var tT = to.offsetTop    + to.offsetHeight/2;
  var fL = from.offsetLeft + from.offsetWidth/2;
  var tL = to.offsetLeft   + to.offsetWidth/2;

  var CA   = Math.abs(tT - fT);
  var CO   = Math.abs(tL - fL);
  var H    = Math.sqrt(CA*CA + CO*CO);
  var ANG  = 180 / Math.PI * Math.acos( CA/H );

  if(tT > fT){
      var top  = (tT-fT)/2 + fT;
  }else{
      var top  = (fT-tT)/2 + tT;
  }
  if(tL > fL){
      var left = (tL-fL)/2 + fL;
  }else{
      var left = (fL-tL)/2 + tL;
  }

  if(( fT < tT && fL < tL) || ( tT < fT && tL < fL) || (fT > tT && fL > tL) || (tT > fT && tL > fL)){
    ANG *= -1;
  }
  top-= H/2;

  line.style["-webkit-transform"] = 'rotate('+ ANG +'deg)';
  line.style["-moz-transform"] = 'rotate('+ ANG +'deg)';
  line.style["-ms-transform"] = 'rotate('+ ANG +'deg)';
  line.style["-o-transform"] = 'rotate('+ ANG +'deg)';
  line.style["-transform"] = 'rotate('+ ANG +'deg)';
  line.style.top    = top+'px';
  line.style.left   = left+'px';
  line.style.height = H + 'px';
};

componentDidMount()
{
  console.log("Hello")
  //sector 1 lines internal
  this.adjustLine(document.getElementById('mon_calamari'), document.getElementById('felucia'), document.getElementById('mon_calamari_to_felucia'));
  this.adjustLine(document.getElementById('mon_calamari'), document.getElementById('saleucami'), document.getElementById('mon_calamari_to_saleucami'));
  this.adjustLine(document.getElementById('mon_calamari'), document.getElementById('saleucami'), document.getElementById('mon_calamari_to_saleucami'));
  this.adjustLine(document.getElementById('felucia'), document.getElementById('saleucami'), document.getElementById('felucia_to_saleucami'));
  this.adjustLine(document.getElementById('felucia'), document.getElementById('yavin'), document.getElementById('felucia_to_yavin'));

  //sector 2 lines internal
  this.adjustLine(document.getElementById('kessel'), document.getElementById('toydaria'), document.getElementById('kessel_to_toydaria'));
  this.adjustLine(document.getElementById('kessel'), document.getElementById('nal_hutta'), document.getElementById('kessel_to_nal_hutta'));
  this.adjustLine(document.getElementById('toydaria'), document.getElementById('nal_hutta'), document.getElementById('toydaria_to_nal_hutta'));
  this.adjustLine(document.getElementById('toydaria'), document.getElementById('bothawui'), document.getElementById('toydaria_to_bothawui'));
  this.adjustLine(document.getElementById('nal_hutta'), document.getElementById('bothawui'), document.getElementById('nal_hutta_to_bothawui'));

  //sector 3 line internal
  this.adjustLine(document.getElementById('tatooine'), document.getElementById('rodia'), document.getElementById('tatooine_to_rodia'));
  this.adjustLine(document.getElementById('tatooine'), document.getElementById('ryloth'), document.getElementById('tatooine_to_ryloth'));
  this.adjustLine(document.getElementById('tatooine'), document.getElementById('geonosis'), document.getElementById('tatooine_to_geonosis'));
  this.adjustLine(document.getElementById('rodia'), document.getElementById('geonosis'), document.getElementById('rodia_to_geonosis'));
  this.adjustLine(document.getElementById('geonosis'), document.getElementById('ryloth'), document.getElementById('geonosis_to_ryloth'));

  //sector 4 line internal
  this.adjustLine(document.getElementById('bespin'), document.getElementById('mustafar'), document.getElementById('bespin_to_mustafar'));
  this.adjustLine(document.getElementById('bespin'), document.getElementById('hoth'), document.getElementById('bespin_to_hoth'));
  this.adjustLine(document.getElementById('bespin'), document.getElementById('endor'), document.getElementById('bespin_to_endor'));
  this.adjustLine(document.getElementById('hoth'), document.getElementById('endor'), document.getElementById('hoth_to_endor'));
  this.adjustLine(document.getElementById('mustafar'), document.getElementById('hoth'), document.getElementById('mustafar_to_hoth'));

  //sector 8 line internal
  this.adjustLine(document.getElementById('dathomir'), document.getElementById('mandalore'), document.getElementById('dathomir_to_mandalore'));
  this.adjustLine(document.getElementById('mandalore'), document.getElementById('kashyyk'), document.getElementById('mandalore_to_kashyyk'));
  this.adjustLine(document.getElementById('kashyyk'), document.getElementById('malastare'), document.getElementById('kashyyk_to_malastare'));

  //sector 7 line internal
  this.adjustLine(document.getElementById('naboo'), document.getElementById('sullust'), document.getElementById('naboo_to_sullust'));
  this.adjustLine(document.getElementById('naboo'), document.getElementById('dagobah'), document.getElementById('naboo_to_dagobah'));
  this.adjustLine(document.getElementById('naboo'), document.getElementById('utapau'), document.getElementById('naboo_to_utapah'));
  this.adjustLine(document.getElementById('sullust'), document.getElementById('dagobah'), document.getElementById('sullust_to_dagobah'));
  this.adjustLine(document.getElementById('utapau'), document.getElementById('dagobah'), document.getElementById('utapau_to_dagobah'));
}
/*adjustLine(
  document.getElementById('mon_calamari'),
  document.getElementById('felucia'),
  document.getElementById('line')
);*/

  render() {
    return (
  <div>
    <div id="sector_1" className="sector">
      <div id="mon_calamari" className="planet">
        <button className="planetImageButton"><img width="45.0" height="45.0" src="https://vignette.wikia.nocookie.net/starwars/images/0/04/Dac-AORCR.png/revision/latest?cb=20170222012252" alt="mon_calamari" onClick={this.myFunction} /></button>
        <div className="planetName">
          Mon Calamari
        </div>
      </div>
      <div id="yavin" className="planet">
        <button className="planetImageButton"><img width="45.0" height="45.0" src="https://vignette.wikia.nocookie.net/starwars/images/d/d6/YavinPrime-AORCR.png/revision/latest/top-crop/width/360/height/450?cb=20170222012413" alt="yavin" onClick={this.myFunction} /></button>
        <div className="planetName">
          Yavin
        </div>
      </div>
      <div id="felucia" className="planet">
        <button className="planetImageButton"><img width="45.0" height="45.0" src="https://vignette.wikia.nocookie.net/star-wars-extended-universe/images/a/a8/Felucia.png/revision/latest?cb=2018020419757" alt="felucia" onClick={this.myFunction} /></button>
        <div className="planetName">
          Felucia
        </div>
      </div>
      <div id="saleucami" className="planet">
        <button className="planetImageButton"><img width="45.0" height="45.0" src="https://vignette.wikia.nocookie.net/starwars/images/a/a3/Saleucami_MPQ.png/revision/latest?cb=20180501021144" alt="saleucami" onClick={this.myFunction} /></button>
        <div className="planetName">
          Saleucami
        </div>
      </div>
    <div id="mon_calamari_to_felucia" className="line"></div>
    <div id="mon_calamari_to_saleucami" className="line"></div>
    <div id="felucia_to_saleucami" className="line"></div>
    <div id="felucia_to_yavin" className="line"></div>
    </div>
    <div id="sector_2" className="sector">
      < div id="kessel" className="planet">
        <button className="planetImageButton"><img width="45.0" height="45.0" src="https://vignette.wikia.nocookie.net/starwars/images/e/e5/Kessel-SWCT.png/revision/latest?cb=20181015054435" alt="kessel" onClick={this.myFunction} /></button>
        <div className="planetName">
          Kessel
        </div>
      </div>
      < div id="toydaria" className="planet">
        <button className="planetImageButton"><img width="45.0" height="45.0" src="https://vignette.wikia.nocookie.net/starwarsofthecaribbean/images/b/ba/Toydaria_LoNH.png/revision/latest/scale-to-width-down/340?cb=20160927233035" alt="toydaria" onClick={this.myFunction} /></button>
        <div className="planetName">
          Toydaria
        </div>
      </div>
      < div id="nal_hutta" className="planet">
        <button className="planetImageButton"><img width="45.0" height="45.0" src="https://vignette.wikia.nocookie.net/starwars/images/8/8d/Nal-hutta.png/revision/latest?cb=20170222012913" alt="nal_hutta" onClick={this.myFunction} /></button>
        <div className="planetName">
          Nal Hutta
        </div>
      </div>
      <div id="bothawui" className="planet">
        <button className="planetImageButton"><img width="45.0" height="45.0" src="https://img3.wikia.nocookie.net/__cb20070921211812/jedipedia/de/images/b/b1/Bothawui_FoC.jpg" alt="bothawui" onClick={this.myFunction} /></button>
        <div className="planetName">
          Bothawui
        </div>
      </div>
      <div id="kessel_to_toydaria" className="line"></div>
      <div id="kessel_to_nal_hutta" className="line"></div>
      <div id="toydaria_to_nal_hutta" className="line"></div>
      <div id="toydaria_to_bothawui" className="line"></div>
      <div id="nal_hutta_to_bothawui" className="line"></div>
    </div>
    <div id="sector_3" className="sector">
      <div id="tatooine" className="planet">
        <button className="planetImageButton"><img width="45.0" height="45.0" src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Tatooine_%28fictional_desert_planet%29.jpg/220px-Tatooine_%28fictional_desert_planet%29.jpg" alt="tatooine" onClick={this.myFunction} /></button>
        <div className="planetName">
          Tatooine
        </div>
      </div>
      < div id="rodia" className="planet">
        <button className="planetImageButton"><img width="45.0" height="45.0" src="https://vignette.wikia.nocookie.net/starwars/images/0/07/RodiaNEGAS.jpg/revision/latest?cb=20061122222115" alt="rodia" onClick={this.myFunction} /></button>
        <div className="planetName">
          Rodia
        </div>
      </div>
      < div id="geonosis" className="planet">
        <button className="planetImageButton"><img width="45.0" height="45.0" src="https://library.kissclipart.com/20181002/phe/kissclipart-planet-clipart-atmosphere-of-earth-outer-space-ec34c922c84649bf.png" alt="geonosis" onClick={this.myFunction} /></button>
        <div className="planetName">
          Geonosis
        </div>
      </div>
      <div id="ryloth" className="planet">
        <button className="planetImageButton"><img width="45.0" height="45.0" src="https://vignette.wikia.nocookie.net/starwars/images/d/d3/Ryloth_EotECR.png/revision/latest?cb=20170222013022" alt="ryloth" onClick={this.myFunction} /></button>
        <div className="planetName">
          Ryloth
        </div>
      </div>
      <div id="tatooine_to_rodia" className="line"></div>
      <div id="tatooine_to_ryloth" className="line"></div>
      <div id="tatooine_to_geonosis" className="line"></div>
      <div id="rodia_to_geonosis" className="line"></div>
      <div id="geonosis_to_ryloth" className="line"></div>
    </div>
    <div id="sector_4" className="sector">
      <div id="mustafar" className="planet">
        <button className="planetImageButton"><img width="45.0" height="45.0" src="https://vignette.wikia.nocookie.net/starwars/images/a/af/Mustafar_DB.png/revision/latest?cb=20160118061913" alt="mustafar" onClick={this.myFunction} /></button>
        <div className="planetName">
          Mustafar
        </div>
      </div>
      <div id="bespin" className="planet">
        <button className="planetImageButton"><img width="45.0" height="45.0" src="https://vignette.wikia.nocookie.net/starwars/images/2/2c/Bespin_EotECR.png/revision/latest?cb=20170222012550" alt="bespin" onClick={this.myFunction} /></button>
        <div className="planetName">
          Bespin
        </div>
      </div>
      <div id="hoth" className="planet">
        <button className="planetImageButton"><img width="45.0" height="45.0" src="https://i.pinimg.com/originals/e0/c9/bd/e0c9bd2e3166c58a9aea8bb85f20e8a9.jpg" alt="hoth" onClick={this.myFunction} /></button>
        <div className="planetName">
          Hoth
        </div>
      </div>
      <div id="endor" className="planet">
        <button className="planetImageButton"><img width="45.0" height="45.0" src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/PlanetEndor.jpg/220px-PlanetEndor.jpg" alt="endor" onClick={this.myFunction} /></button>
        <div className="planetName">
          Endor
        </div>
      </div>
      <div id="bespin_to_mustafar" className="line"></div>
      <div id="bespin_to_hoth" className="line"></div>
      <div id="bespin_to_endor" className="line"></div>
      <div id="hoth_to_endor" className="line"></div>
      <div id="mustafar_to_hoth" className="line"></div>
    </div>
    <div id="sector_5" className="sector">
      <div id="alderaan" className="planet">
        <button className="planetImageButton"><img width="45.0" height="45.0" src="https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Alderaan250ppx.PNG/220px-Alderaan250ppx.PNG" alt="alderaan" onClick={this.myFunction} /></button>
        <div className="planetName">
          Alderann
        </div>
      </div>
      < div id="cato_neimoidia" className="planet">
        <button className="planetImageButton"><img width="45.0" height="45.0" src="https://db4sgowjqfwig.cloudfront.net/campaigns/99849/assets/377895/Cato_Neimoidia.jpg?1412373294" alt="cato_neimoidia" onClick={this.myFunction} /></button>
        <div className="planetName">
          Cato Neimoidia
        </div>
      </div>
      < div id="corusant" className="planet">
        <button className="planetImageButton"><img width="45.0" height="45.0" src="https://vignette.wikia.nocookie.net/starwars/images/1/16/Coruscant-EotE.jpg/revision/latest?cb=20130908205521" alt="corusant" onClick={this.myFunction} /></button>
        <div className="planetName">
          Corusant
        </div>
      </div>
      <div id="corellia" className="planet">
        <button className="planetImageButton"><img width="45.0" height="45.0" src="https://vignette.wikia.nocookie.net/starwars/images/7/7f/Corellia_SOF.png/revision/latest?cb=20170222012701" alt="corellia" onClick={this.myFunction} /></button>
        <div className="planetName">
          Corellia
        </div>
      </div>
    </div>
    <div id="sector_6" className="sector">
      <div id="dantooine" className="planet">
        <button className="planetImageButton"><img width="45.0" height="45.0" src="https://vignette.wikia.nocookie.net/starwars/images/a/a5/Dantooine_Resistance.jpg/revision/latest?cb=20200120190043" alt="dantooine" onClick={this.myFunction} /></button>
        <div className="planetName">
          Dantooine
        </div>
      </div>
      <div id="mygeeto" className="planet">
        <button className="planetImageButton"><img width="45.0" height="45.0" src="https://vignette.wikia.nocookie.net/starwars/images/e/eb/MygeetoFromSpace.jpg/revision/latest/scale-to-width-down/350?cb=20051104084715" alt="mygeeto" onClick={this.myFunction} /></button>
        <div className="planetName">
          Mygeeto
        </div>
      </div>
      <div id="ord_mantell" className="planet">
        <button className="planetImageButton"><img width="45.0" height="45.0" src="https://vignette.wikia.nocookie.net/starwars/images/3/36/Ord_Mantell_EotECR.png/revision/latest?cb=20170222012958" alt="ord_mantell" onClick={this.myFunction} /></button>
        <div className="planetName">
          Ord Mantell
        </div>
      </div>
      <div id="ilum" className="planet">
        <button className="planetImageButton"><img width="45.0" height="45.0" src="https://vignette.wikia.nocookie.net/starwars/images/5/54/Ilum_FDNP.png/revision/latest?cb=20180501025709" alt="ilum" onClick={this.myFunction} /></button>
        <div className="planetName">
          Ilum
        </div>
      </div>
    </div>
    <div id="sector_7" className="sector"> {/*TODO put lines in sector 7*/}
      <div id="utapau" className="planet">
        <button className="planetImageButton"><img width="45.0" height="45.0" src="https://vignette.wikia.nocookie.net/starwars/images/c/ce/UtapauRotS.png/revision/latest?cb=20160118063015" alt="utapau" onClick={this.myFunction} /></button>
        <div className="planetName">
          Utapau
        </div>
      </div>
      <div id="dagobah" className="planet">
        <button className="planetImageButton"><img width="45.0" height="45.0" src="https://vignette.wikia.nocookie.net/jedipedia/images/1/1c/Dagobah.jpg/revision/latest?cb=20060806203344&path-prefix=de" alt="dagobah" onClick={this.myFunction} /></button>
        <div className="planetName">
          Dagobah
        </div>
      </div>
      <div id="sullust" className="planet">
        <button className="planetImageButton"><img width="45.0" height="45.0" src="https://pm1.narvii.com/6335/40389098cb91805f52bb7723a1fe101a101a5857_00.jpg" alt="sullust" onClick={this.myFunction} /></button>
        <div className="planetName">
          Sullust
        </div>
      </div>
      < div id="naboo" className="planet">
        <button className="planetImageButton"><img width="45.0" height="45.0" src="https://vignette.wikia.nocookie.net/starwars/images/4/41/Naboo_FFGRebellion.png/revision/latest?cb=20170529051916" alt="naboo" onClick={this.myFunction} /></button>
        <div className="planetName">
          Naboo
        </div>
      </div>
      <div id="naboo_to_sullust" className="line"></div>
      <div id="naboo_to_dagobah" className="line"></div>
      <div id="naboo_to_utapah" className="line"></div>
      <div id="sullust_to_dagobah" className="line"></div>
      <div id="utapau_to_dagobah" className="line"></div>
    </div>
    <div id="sector_8" className="sector">
      < div id="dathomir" className="planet">
        <button className="planetImageButton"><img width="45.0" height="45.0" src="https://vignette.wikia.nocookie.net/starwars/images/3/34/DathomirJFO.jpg/revision/latest?cb=20200222032237" alt="dathomir" onClick={this.myFunction} /></button>
        <div className="planetName">
          Dathomir
        </div>
      </div>
      <div id="mandalore" className="planet">
        <button className="planetImageButton"><img width="45.0" height="45.0" src="https://vignette.wikia.nocookie.net/starwars/images/5/5e/Mandalore_SWCT.png/revision/latest?cb=20181015023000" alt="mandalore" onClick={this.myFunction} /></button>
        <div className="planetName">
          Mandalore
        </div>
      </div>
      <div id="kashyyk" className="planet">
        <button className="planetImageButton"><img width="45.0" height="45.0" src="https://vignette.wikia.nocookie.net/starwars/images/e/ea/Kashyyyk-SW-MTHC.png/revision/latest?cb=20190605010641" alt="kashyyk" onClick={this.myFunction} /></button>
        <div className="planetName">
          kashyyk
        </div>
      </div>
      < div id="malastare" className="planet">
        <button className="planetImageButton"><img width="45.0" height="45.0" src="https://i.pinimg.com/originals/40/a1/7c/40a17c230f477e803eefaca98040afd1.jpg" alt="malastare" onClick={this.myFunction} /></button>
        <div className="planetName">
          Malastare
        </div>
      </div>
      <div id="dathomir_to_mandalore" className="line"></div>
      <div id="mandalore_to_kashyyk" className="line"></div>
      <div id="kashyyk_to_malastare" className="line"></div>
    </div>r
  </div>
    );
  }
}
