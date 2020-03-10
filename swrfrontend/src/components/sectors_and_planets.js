import React, {
  Component
} from 'react';
import './../CSS/sectors_and_planets.css';

export class SectorsAndPlanets extends Component {

  myFunction = (e) => {
    let a = e.currentTarget.parentNode.parentNode.getAttribute("id");
    console.log("You choose the planet of " + a)
  }

  render() {
    return (
  <div>
    <div id="sector_1" className="sector">
      < div id="mon_calamari" className="planet">
        <button><img width="100" height="100" src="https://vignette.wikia.nocookie.net/starwars/images/0/04/Dac-AORCR.png/revision/latest?cb=20170222012252" alt="mon_calamari" onClick={this.myFunction} /></button>
      </div>
      < div id="yavin" className="planet">
        <button><img width="100" height="100" src="https://vignette.wikia.nocookie.net/starwars/images/d/d6/YavinPrime-AORCR.png/revision/latest/top-crop/width/360/height/450?cb=20170222012413" alt="yavin" onClick={this.myFunction} /></button>
      </div>
      < div id="felucia" className="planet">
        <button><img width="100" height="100" src="https://vignette.wikia.nocookie.net/star-wars-extended-universe/images/a/a8/Felucia.png/revision/latest?cb=20180204191007" alt="felucia" onClick={this.myFunction} /></button>
      </div>
      < div id="saleucami" className="planet">
        <button><img width="100" height="100" src="https://vignette.wikia.nocookie.net/starwars/images/a/a3/Saleucami_MPQ.png/revision/latest?cb=20180501021144" alt="saleucami" onClick={this.myFunction} /></button>
      </div>
    </div>
    <div id="sector_2" className="sector">
      < div id="kessel" className="planet">
        <button><img width="100" height="100" src="https://vignette.wikia.nocookie.net/starwars/images/e/e5/Kessel-SWCT.png/revision/latest?cb=20181015054435" alt="kessel" onClick={this.myFunction} /></button>
      </div>
      < div id="toydaria" className="planet">
        <button><img width="100" height="100" src="https://vignette.wikia.nocookie.net/starwarsofthecaribbean/images/b/ba/Toydaria_LoNH.png/revision/latest/scale-to-width-down/340?cb=20160927233035" alt="toydaria" onClick={this.myFunction} /></button>
      </div>
      < div id="nal_hutta" className="planet">
        <button><img width="100" height="100" src="https://vignette.wikia.nocookie.net/starwars/images/8/8d/Nal-hutta.png/revision/latest?cb=20170222012913" alt="nal_hutta" onClick={this.myFunction} /></button>
      </div>
      < div id="bothawui" className="planet">
        <button><img width="100" height="100" src="https://img3.wikia.nocookie.net/__cb20070921211812/jedipedia/de/images/b/b1/Bothawui_FoC.jpg" alt="bothawui" onClick={this.myFunction} /></button>
      </div>
    </div>
    <div id="sector_3" className="sector">
      < div id="tatooine" className="planet">
        <button><img width="100" height="100" src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Tatooine_%28fictional_desert_planet%29.jpg/220px-Tatooine_%28fictional_desert_planet%29.jpg" alt="tatooine" onClick={this.myFunction} /></button>
      </div>
      < div id="rodia" className="planet">
        <button><img width="100" height="100" src="https://vignette.wikia.nocookie.net/starwars/images/0/07/RodiaNEGAS.jpg/revision/latest?cb=20061122222115" alt="rodia" onClick={this.myFunction} /></button>
      </div>
      < div id="geonosis" className="planet">
        <button><img width="100" height="100" src="https://library.kissclipart.com/20181002/phe/kissclipart-planet-clipart-atmosphere-of-earth-outer-space-ec34c922c84649bf.png" alt="geonosis" onClick={this.myFunction} /></button>
      </div>
      < div id="ryloth" className="planet">
        <button><img width="100" height="100" src="https://vignette.wikia.nocookie.net/starwars/images/d/d3/Ryloth_EotECR.png/revision/latest?cb=20170222013022" alt="ryloth" onClick={this.myFunction} /></button>
      </div>
    </div>
    <div id="sector_4" className="sector">
      < div id="mustafar" className="planet">
        <button><img width="100" height="100" src="https://vignette.wikia.nocookie.net/starwars/images/a/af/Mustafar_DB.png/revision/latest?cb=20160118061913" alt="mustafar" onClick={this.myFunction} /></button>
      </div>
      < div id="bespin" className="planet">
        <button><img width="100" height="100" src="https://vignette.wikia.nocookie.net/starwars/images/2/2c/Bespin_EotECR.png/revision/latest?cb=20170222012550" alt="bespin" onClick={this.myFunction} /></button>
      </div>
      < div id="hoth" className="planet">
        <button><img width="100" height="100" src="https://i.pinimg.com/originals/e0/c9/bd/e0c9bd2e3166c58a9aea8bb85f20e8a9.jpg" alt="hoth" onClick={this.myFunction} /></button>
      </div>
      < div id="endor" className="planet">
        <button><img width="100" height="100" src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/PlanetEndor.jpg/220px-PlanetEndor.jpg" alt="endor" onClick={this.myFunction} /></button>
      </div>
    </div>
    <div id="sector_5" className="sector">
      < div id="alderaan" className="planet">
        <button><img width="100" height="100" src="https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Alderaan250ppx.PNG/220px-Alderaan250ppx.PNG" alt="alderaan" onClick={this.myFunction} /></button>
      </div>
      < div id="cato_neimoidia" className="planet">
        <button><img width="100" height="100" src="https://db4sgowjqfwig.cloudfront.net/campaigns/99849/assets/377895/Cato_Neimoidia.jpg?1412373294" alt="cato_neimoidia" onClick={this.myFunction} /></button>
      </div>
      < div id="corusant" className="planet">
        <button><img width="100" height="100" src="https://vignette.wikia.nocookie.net/starwars/images/1/16/Coruscant-EotE.jpg/revision/latest?cb=20130908205521" alt="corusant" onClick={this.myFunction} /></button>
      </div>
      < div id="corellia" className="planet">
        <button><img width="100" height="100" src="https://vignette.wikia.nocookie.net/starwars/images/7/7f/Corellia_SOF.png/revision/latest?cb=20170222012701" alt="corellia" onClick={this.myFunction} /></button>
      </div>
    </div>
    <div id="sector_6" className="sector">
      < div id="dantooine" className="planet">
        <button><img width="100" height="100" src="https://vignette.wikia.nocookie.net/starwars/images/a/a5/Dantooine_Resistance.jpg/revision/latest?cb=20200120190043" alt="dantooine" onClick={this.myFunction} /></button>
      </div>
      < div id="mygeeto" className="planet">
        <button><img width="100" height="100" src="https://vignette.wikia.nocookie.net/starwars/images/e/eb/MygeetoFromSpace.jpg/revision/latest/scale-to-width-down/350?cb=20051104084715" alt="mygeeto" onClick={this.myFunction} /></button>
      </div>
      < div id="ord_mantell" className="planet">
        <button><img width="100" height="100" src="https://vignette.wikia.nocookie.net/starwars/images/3/36/Ord_Mantell_EotECR.png/revision/latest?cb=20170222012958" alt="ord_mantell" onClick={this.myFunction} /></button>
      </div>
      < div id="ilum" className="planet">
        <button><img width="100" height="100" src="https://vignette.wikia.nocookie.net/starwars/images/5/54/Ilum_FDNP.png/revision/latest?cb=20180501025709" alt="ilum" onClick={this.myFunction} /></button>
      </div>
    </div>
    <div id="sector_7" className="sector">
      < div id="utapau" className="planet">
        <button><img width="100" height="100" src="https://vignette.wikia.nocookie.net/starwars/images/c/ce/UtapauRotS.png/revision/latest?cb=20160118063015" alt="utapau" onClick={this.myFunction} /></button>
      </div>
      < div id="dagobah" className="planet">
        <button><img width="100" height="100" src="https://vignette.wikia.nocookie.net/jedipedia/images/1/1c/Dagobah.jpg/revision/latest?cb=20060806203344&path-prefix=de" alt="dagobah" onClick={this.myFunction} /></button>
      </div>
      < div id="sullust" className="planet">
        <button><img width="100" height="100" src="https://pm1.narvii.com/6335/40389098cb91805f52bb7723a1fe101a101a5857_00.jpg" alt="sullust" onClick={this.myFunction} /></button>
      </div>
      < div id="naboo" className="planet">
        <button><img width="100" height="100" src="https://vignette.wikia.nocookie.net/starwars/images/4/41/Naboo_FFGRebellion.png/revision/latest?cb=20170529051916" alt="naboo" onClick={this.myFunction} /></button>
      </div>
    </div>
    <div id="sector_8" className="sector">
      < div id="dathomir" className="planet">
        <button><img width="100" height="100" src="https://vignette.wikia.nocookie.net/starwars/images/3/34/DathomirJFO.jpg/revision/latest?cb=20200222032237" alt="dathomir" onClick={this.myFunction} /></button>
      </div>
      < div id="mandalore" className="planet">
        <button><img width="100" height="100" src="https://vignette.wikia.nocookie.net/starwars/images/5/5e/Mandalore_SWCT.png/revision/latest?cb=20181015023000" alt="mandalore" onClick={this.myFunction} /></button>
      </div>
      < div id="kashyyk" className="planet">
        <button><img width="100" height="100" src="https://vignette.wikia.nocookie.net/starwars/images/e/ea/Kashyyyk-SW-MTHC.png/revision/latest?cb=20190605010641" alt="kashyyk" onClick={this.myFunction} /></button>
      </div>
      < div id="malastare" className="planet">
        <button><img width="100" height="100" src="https://i.pinimg.com/originals/40/a1/7c/40a17c230f477e803eefaca98040afd1.jpg" alt="malastare" onClick={this.myFunction} /></button>
      </div>
    </div>
  </div>
    );
  }
}
