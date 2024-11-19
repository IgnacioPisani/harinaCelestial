
import CapannoliCaracolito from '../../images/capannoli/fideos/caracolitos.png';
import CapannoliCelentano from '../../images/capannoli/fideos/celentano.png';
import CapannoliCodos from '../../images/capannoli/fideos/codos.png';
import CapannoliDedalitos from '../../images/capannoli/fideos/dedalitos.png';
import CapannoliMostachol from '../../images/capannoli/fideos/mostachol.png';
import CapannoliRadiatore from '../../images/capannoli/fideos/radiatore.png';
import CapannoliRigatti from '../../images/capannoli/fideos/rigatti.png';
import CapannoliSpaghetti from '../../images/capannoli/fideos/spaghetti.png';
import CapannoliTallarin from '../../images/capannoli/fideos/tallarin.png';
import CapannoliTirabuzon from '../../images/capannoli/fideos/tirabuzon.png';
import CapannoliH000 from '../../images/capannoli/harinas/h000.png';
import CapannoliH0000 from '../../images/capannoli/harinas/h0000.png';
import CapannoliHleudante from '../../images/capannoli/harinas/hleudante.png';
import CapannoliLogo from '../../images/capannoli.png';

import FidelliCelentano from '../../images/fidelli/fideos/celentano.png';
import FidelliFusilli from '../../images/fidelli/fideos/fusilli.png';
import FidelliGomitiRigati from '../../images/fidelli/fideos/gomiti-rigati.png';
import FidelliMostaccioli from '../../images/fidelli/fideos/mostaccioli.png';
import FidelliPenneRigate from '../../images/fidelli/fideos/penne-rigate.png';
import FidelliRadiatori from '../../images/fidelli/fideos/radiatori.png';
import FidelliSpaghetti from '../../images/fidelli/fideos/spaghetti.png';
import FidelliTagliolini from '../../images/fidelli/fideos/tagliolini.png';
import FidelliLogo from '../../images/fidelli.png';






import CelestialHI000 from '../../images/celestial/harinas-industriales/h000.png';
import CelestialHI0000 from '../../images/celestial/harinas-industriales/h0000.png';
import CelestialHI000plus from '../../images/celestial/harinas-industriales/h000plus.png';
import CelestialHI000premium from '../../images/celestial/harinas-industriales/h000premium.png';
import CelestialHI000preparada from '../../images/celestial/harinas-industriales/h000preparada.png';
import CelestialH000 from '../../images/celestial/harinas/h000.png';
import CelestialH0000 from '../../images/celestial/harinas/h0000.png';
import CelestialHleudante from '../../images/celestial/harinas/hleudante.png';
import CelestialLogo from '../../images/celestial.png';
import CelestialCaracolito from '../../images/celestial/fideos/caracolito.png';
import CelestialCelentano from '../../images/celestial/fideos/celentano.png';
import CelestialCodos from '../../images/celestial/fideos/codos.png';
import CelestialDedalitos from '../../images/celestial/fideos/dedalitos.png';
import CelestialMostachol from '../../images/celestial/fideos/mostachol.png';
import CelestialRadiatore from '../../images/celestial/fideos/radiatore.png';
import CelestialRigatti from '../../images/celestial/fideos/rigatti.png';
import CelestialSpaghetti from '../../images/celestial/fideos/spaghetti.png';
import CelestialTallarin from '../../images/celestial/fideos/tallarin.png';
import CelestialTirabuzon from '../../images/celestial/fideos/tirabuzon.png';
import CelestialGarbanzos from '../../images/celestial/legumbres/garbanzos.png';
import CelestialLentejas from '../../images/celestial/legumbres/lentejas.png';
import CelestialPisingallo from '../../images/celestial/legumbres/pisingallo.png';
import CelestialPorotos from '../../images/celestial/legumbres/porotos.png';
import CelestialBizcochueloVain from '../../images/celestial/preparaciones/bizcochuelo-vain.png';
import CelestialBizcochueloChoc from '../../images/celestial/preparaciones/bizcochuelo-choc.png';
import CelestialÑoquis from '../../images/celestial/preparaciones/ñoquis.png';
import CelestialPizza from '../../images/celestial/preparaciones/pizza.png';
import CelestialAnillitos from '../../images/celestial/galletas/anillitos.png';
import CelestialBastones from '../../images/celestial/galletas/bastones.png';


export const data = [
  {
    name: "Capannoli",
    logo: CapannoliLogo,
    sections: [
      {
        name: "Fideos",
        products: [
          { name: "Caracolito", img: CapannoliCaracolito },
          { name: "Celentano", img: CapannoliCelentano },
          { name: "Codos", img: CapannoliCodos },
          { name: "Dedalitos", img: CapannoliDedalitos },
          { name: "Mostachol", img: CapannoliMostachol },
          { name: "Radiatore", img: CapannoliRadiatore },
          { name: "Rigatti", img: CapannoliRigatti },
          { name: "Spaghetti", img: CapannoliSpaghetti },
          { name: "Tallarín", img: CapannoliTallarin },
          { name: "Tirabuzón", img: CapannoliTirabuzon },
        ],
      },
      {
        name: "Harinas",
        products: [
          { name: "000", img: CapannoliH000 },
          { name: "0000", img: CapannoliH0000 },
          { name: "Leudante", img: CapannoliHleudante },
        ],
      },
    ],
  },
  {
    name: "Fidelli",
    logo: FidelliLogo,
    sections: [
      {
        name: "Fideos",
        products: [
          { name: "Celentano", img: FidelliCelentano },
          { name: "Fusilli", img: FidelliFusilli },
          { name: "Gomiti Rigati", img: FidelliGomitiRigati },
          { name: "Mostaccioli", img: FidelliMostaccioli },
          { name: "Penne Rigate", img: FidelliPenneRigate },
          { name: "Radiatori", img: FidelliRadiatori },
          { name: "Spaghetti", img: FidelliSpaghetti },
          { name: "Tagliolini", img: FidelliTagliolini },
        ],
      },
    ],
  },
  {
    name: "Celestial",
    logo: CelestialLogo,
    sections: [
      {
        name: "Harinas Industriales",
        products: [
          { name: "000", img: CelestialHI000 },
          { name: "0000", img: CelestialHI0000 },
          { name: "000 Plus", img: CelestialHI000plus },
          { name: "000 Premium", img: CelestialHI000premium },
          { name: "000 Preparada", img: CelestialHI000preparada },
        ],
      },
      {
        name: "Harinas",
        products: [
          { name: "000", img: CelestialH000 },
          { name: "0000", img: CelestialH0000 },
          { name: "Leudante", img: CelestialHleudante },
        ],
      },
      {
        name: "Fideos",
        products: [
          { name: "Caracolito", img: CelestialCaracolito },
          { name: "Celentano", img: CelestialCelentano },
          { name: "Codos", img: CelestialCodos },
          { name: "Dedalitos", img: CelestialDedalitos },
          { name: "Mostachol", img: CelestialMostachol },
          { name: "Radiatore", img: CelestialRadiatore },
          { name: "Rigatti", img: CelestialRigatti },
          { name: "Spaghetti", img: CelestialSpaghetti },
          { name: "Tallarín", img: CelestialTallarin },
          { name: "Tirabuzón", img: CelestialTirabuzon },
        ],
      },
     
      
      {
        name: "Legumbres",
        products: [
          { name: "Garbanzos", img: CelestialGarbanzos },
          { name: "Lentejas", img: CelestialLentejas },
          { name: "Pizingallo", img: CelestialPisingallo },
          { name: "Porotos", img: CelestialPorotos },
        ],
      },
      {
        name: "Preparaciones",
        products: [
          { name: "Bizcochuelo Vainilla", img: CelestialBizcochueloVain },
          { name: "Bizcochuelo Chocolate", img: CelestialBizcochueloChoc },
          { name: "Ñoquis", img: CelestialÑoquis },
          { name: "Pizza", img: CelestialPizza },
        ],
      },
      {
        name: "Galletas",
        products: [
          { name: "Anillitos", img: CelestialAnillitos },
          { name: "Bastones", img: CelestialBastones },
        ],
      },
    ],
  },
];
