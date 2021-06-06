import React, {
  Component
} from 'react';
import {Sector} from './sector_and_planets_components/sector.js';
import './../CSS/sectors_and_planets.css';

export class SectorsAndPlanets extends Component {

  myFunction = (e) => {
    let a = e.currentTarget.parentNode.parentNode.getAttribute("id");
    console.log("You choose the planet of " + a)
  }

  adjustLine (from, to, line) {

  console.log("Hello you are in my adjust line")
  console.log(from)
  console.log(to)
  console.log(line)

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

makeLines() {
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

  //sector 5 line internal
  this.adjustLine(document.getElementById('alderaan'), document.getElementById('cato_neimoidia'), document.getElementById('alderaan_to_cato_neimoidia'));
  this.adjustLine(document.getElementById('alderaan'), document.getElementById('corusant'), document.getElementById('alderaan_to_corusant'));
  this.adjustLine(document.getElementById('alderaan'), document.getElementById('corellia'), document.getElementById('alderaan_to_corellia'));
  this.adjustLine(document.getElementById('cato_neimoidia'), document.getElementById('corellia'), document.getElementById('cato_neimoidia_to_corellia'));
  this.adjustLine(document.getElementById('corellia'), document.getElementById('corusant'), document.getElementById('corellia_to_corusant'));

  //sector 6 line interval
  this.adjustLine(document.getElementById('dantooine'), document.getElementById('mygeeto'), document.getElementById('dantooine_to_mygeeto'));
  this.adjustLine(document.getElementById('mygeeto'), document.getElementById('ilum'), document.getElementById('mygeeto_to_ilum'));
  this.adjustLine(document.getElementById('mygeeto'), document.getElementById('ord_mantell'), document.getElementById('mygeeto_to_ord_mantell'));
  this.adjustLine(document.getElementById('ord_mantell'), document.getElementById('ilum'), document.getElementById('ord_mantell_to_ilum'));

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

  //this was a test to see if lines connectes sector to secotr. sadly they do not
  console.log("Test here")
  this.adjustLine(document.getElementById('mygeeto'), document.getElementById('mandalore'), document.getElementById('mygeeto_to_mandalore'));
}

componentDidMount()
{
  console.log("Hello")
  //sector 1 lines internal
  this.makeLines()
  window.addEventListener("resize", this.makeLines.bind(this));

}
/*adjustLine(
  document.getElementById('mon_calamari'),
  document.getElementById('felucia'),
  document.getElementById('line')
);*/

  render() {
    return (
    <div>
  <div className="spaceBackground">
    <div id="sector_1" className="sector">
      <Sector id="mon_calamari" planetImageURL="https://vignette.wikia.nocookie.net/starwars/images/0/04/Dac-AORCR.png/revision/latest?cb=20170222012252"/>
      <div id="yavin" className="planet"> {/*Using this as a test template to count num of units and planet info*/}
      <div className="planetNameAndVisual">
        <button className="planetImageButton"><img width="45.0" height="45.0" src="https://vignette.wikia.nocookie.net/starwars/images/d/d6/YavinPrime-AORCR.png/revision/latest/top-crop/width/360/height/450?cb=20170222012413" alt="yavin" onClick={this.myFunction} /></button>
        <div className="planetName">
          Yavin
        </div>
      </div>
      <div className="planetInfo">
        <div className="buttonInfoSelection">
          <button className="infoButtons">Occupation Status</button>
          <button className="infoButtons">Production Yeild</button>
          <button className="infoButtons">Leaders</button>
          <button className="infoButtons">Combat Forces</button>
        </div>
      </div>
      </div>
      <Sector id="felucia" planetImageURL="https://vignette.wikia.nocookie.net/star-wars-extended-universe/images/a/a8/Felucia.png/revision/latest?cb=2018020419757"/>
      <Sector id="saleucami" planetImageURL="https://vignette.wikia.nocookie.net/starwars/images/a/a3/Saleucami_MPQ.png/revision/latest?cb=20180501021144"/>
      <div id="mon_calamari_to_felucia" className="line"></div>
      <div id="mon_calamari_to_saleucami" className="line"></div>
      <div id="felucia_to_saleucami" className="line"></div>
      <div id="felucia_to_yavin" className="line"></div>
    </div>
    <div id="sector_2" className="sector">
      <Sector id="kessel" planetImageURL="https://vignette.wikia.nocookie.net/starwars/images/e/e5/Kessel-SWCT.png/revision/latest?cb=20181015054435"/>
      <Sector id="toydaria" planetImageURL="https://vignette.wikia.nocookie.net/starwarsofthecaribbean/images/b/ba/Toydaria_LoNH.png/revision/latest/scale-to-width-down/340?cb=20160927233035"/>
      <Sector id="nal_hutta" planetImageURL="https://vignette.wikia.nocookie.net/starwars/images/8/8d/Nal-hutta.png/revision/latest?cb=20170222012913"/>
      <Sector id="bothawui" planetImageURL="https://img3.wikia.nocookie.net/__cb20070921211812/jedipedia/de/images/b/b1/Bothawui_FoC.jpg"/>
      <div id="kessel_to_toydaria" className="line"></div>
      <div id="kessel_to_nal_hutta" className="line"></div>
      <div id="toydaria_to_nal_hutta" className="line"></div>
      <div id="toydaria_to_bothawui" className="line"></div>
      <div id="nal_hutta_to_bothawui" className="line"></div>
    </div>
    <div id="sector_3" className="sector">
      <Sector id="tatooine" planetImageURL="https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Tatooine_%28fictional_desert_planet%29.jpg/220px-Tatooine_%28fictional_desert_planet%29.jpg"/>
      <Sector id="rodia" planetImageURL="https://vignette.wikia.nocookie.net/starwars/images/0/07/RodiaNEGAS.jpg/revision/latest?cb=20061122222115"/>
      <Sector id="geonosis" planetImageURL="https://library.kissclipart.com/20181002/phe/kissclipart-planet-clipart-atmosphere-of-earth-outer-space-ec34c922c84649bf.png"/>
      <Sector id="ryloth" planetImageURL="https://vignette.wikia.nocookie.net/starwars/images/d/d3/Ryloth_EotECR.png/revision/latest?cb=20170222013022"/>
      <div id="tatooine_to_rodia" className="line"></div>
      <div id="tatooine_to_ryloth" className="line"></div>
      <div id="tatooine_to_geonosis" className="line"></div>
      <div id="rodia_to_geonosis" className="line"></div>
      <div id="geonosis_to_ryloth" className="line"></div>
    </div>
    <div id="sector_4" className="sector">
      <Sector id="mustafar" planetImageURL="https://vignette.wikia.nocookie.net/starwars/images/a/af/Mustafar_DB.png/revision/latest?cb=20160118061913"/>
      <Sector id="bespin" planetImageURL="https://vignette.wikia.nocookie.net/starwars/images/2/2c/Bespin_EotECR.png/revision/latest?cb=20170222012550"/>
      <Sector id="hoth" planetImageURL="https://i.pinimg.com/originals/e0/c9/bd/e0c9bd2e3166c58a9aea8bb85f20e8a9.jpg"/>
      <Sector id="endor" planetImageURL="https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/PlanetEndor.jpg/220px-PlanetEndor.jpg"/>
      <div id="bespin_to_mustafar" className="line"></div>
      <div id="bespin_to_hoth" className="line"></div>
      <div id="bespin_to_endor" className="line"></div>
      <div id="hoth_to_endor" className="line"></div>
      <div id="mustafar_to_hoth" className="line"></div>
    </div>
    <div id="sector_5" className="sector">
      <Sector id="alderaan" planetImageURL="https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Alderaan250ppx.PNG/220px-Alderaan250ppx.PNG"/>
      <Sector id="cato_neimoidia" planetImageURL="https://db4sgowjqfwig.cloudfront.net/campaigns/99849/assets/377895/Cato_Neimoidia.jpg?1412373294"/>
      <Sector id="corusant" planetImageURL="https://vignette.wikia.nocookie.net/starwars/images/1/16/Coruscant-EotE.jpg/revision/latest?cb=20130908205521"/>
      <Sector id="corellia" planetImageURL="https://vignette.wikia.nocookie.net/starwars/images/7/7f/Corellia_SOF.png/revision/latest?cb=20170222012701"/>
      <div id="alderaan_to_cato_neimoidia" className="line"></div>
      <div id="alderaan_to_corusant" className="line"></div>
      <div id="alderaan_to_corellia" className="line"></div>
      <div id="cato_neimoidia_to_corellia" className="line"></div>
      <div id="corellia_to_corusant" className="line"></div>
    </div>
    <div id="sector_6" className="sector">
      <Sector id="dantooine" planetImageURL="https://vignette.wikia.nocookie.net/starwars/images/a/a5/Dantooine_Resistance.jpg/revision/latest?cb=20200120190043"/>
      <Sector id="mygeeto" planetImageURL="https://vignette.wikia.nocookie.net/starwars/images/e/eb/MygeetoFromSpace.jpg/revision/latest/scale-to-width-down/350?cb=20051104084715"/>
      <Sector id="ord_mantell" planetImageURL="https://vignette.wikia.nocookie.net/starwars/images/3/36/Ord_Mantell_EotECR.png/revision/latest?cb=20170222012958"/>
      <Sector id="ilum" planetImageURL="https://vignette.wikia.nocookie.net/starwars/images/5/54/Ilum_FDNP.png/revision/latest?cb=20180501025709"/>
      <div id="dantooine_to_mygeeto" className="line"></div>
      <div id="mygeeto_to_ilum" className="line"></div>
      <div id="mygeeto_to_ord_mantell" className="line"></div>
      <div id="ord_mantell_to_ilum" className="line"></div>
    </div>
    <div id="sector_7" className="sector">
      <Sector id="utapau" planetImageURL="https://vignette.wikia.nocookie.net/starwars/images/c/ce/UtapauRotS.png/revision/latest?cb=20160118063015"/>
      <Sector id="dagobah" planetImageURL="https://vignette.wikia.nocookie.net/jedipedia/images/1/1c/Dagobah.jpg/revision/latest?cb=20060806203344&path-prefix=de"/>
      <Sector id="sullust" planetImageURL="https://pm1.narvii.com/6335/40389098cb91805f52bb7723a1fe101a101a5857_00.jpg"/>
      <Sector id="naboo" planetImageURL="https://vignette.wikia.nocookie.net/starwars/images/4/41/Naboo_FFGRebellion.png/revision/latest?cb=20170529051916"/>
      <div id="naboo_to_sullust" className="line"></div>
      <div id="naboo_to_dagobah" className="line"></div>
      <div id="naboo_to_utapah" className="line"></div>
      <div id="sullust_to_dagobah" className="line"></div>
      <div id="utapau_to_dagobah" className="line"></div>
    </div>
    <div id="sector_8" className="sector">
      <Sector id="dathomir" planetImageURL="https://vignette.wikia.nocookie.net/starwars/images/3/34/DathomirJFO.jpg/revision/latest?cb=20200222032237"/>
      <Sector id="mandalore" planetImageURL="https://vignette.wikia.nocookie.net/starwars/images/5/5e/Mandalore_SWCT.png/revision/latest?cb=20181015023000"/>
      <Sector id="kashyyk" planetImageURL="https://vignette.wikia.nocookie.net/starwars/images/e/ea/Kashyyyk-SW-MTHC.png/revision/latest?cb=20190605010641"/>
      <Sector id="malastare" planetImageURL="https://i.pinimg.com/originals/40/a1/7c/40a17c230f477e803eefaca98040afd1.jpg"/>
      <div id="dathomir_to_mandalore" className="line"></div>
      <div id="mandalore_to_kashyyk" className="line"></div>
      <div id="kashyyk_to_malastare" className="line"></div>
    </div>
    <div id="mygeeto_to_mandalore" className="line" style={{backgroundColor: "red", zIndex: 100}}></div>{/*TODO make lines connecting sector to sector. either hard code it or figure out the math */}
  </div>
  </div>
    );
  }
}
