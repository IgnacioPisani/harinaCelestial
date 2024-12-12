
import CapannoliCaracolito from '../../images/capannoli/fideos/caracolitos.webp';
import CapannoliCelentano from '../../images/capannoli/fideos/celentano.webp';
import CapannoliCodos from '../../images/capannoli/fideos/codos.webp';
import CapannoliDedalitos from '../../images/capannoli/fideos/dedalitos.webp';
import CapannoliMostachol from '../../images/capannoli/fideos/mostachol.webp';
import CapannoliRadiatore from '../../images/capannoli/fideos/radiatore.webp';
import CapannoliRigatti from '../../images/capannoli/fideos/rigatti.webp';
import CapannoliSpaghetti from '../../images/capannoli/fideos/spaghetti.webp';
import CapannoliTallarin from '../../images/capannoli/fideos/tallarin.webp';
import CapannoliTirabuzon from '../../images/capannoli/fideos/tirabuzon.webp';
import CapannoliH000 from '../../images/capannoli/harinas/h000.webp';
import CapannoliH0000 from '../../images/capannoli/harinas/h0000.webp';
import CapannoliHleudante from '../../images/capannoli/harinas/hleudante.webp';
import CapannoliLogo from '../../images/logos-brands/capannoli.webp';

import FidelliCelentano from '../../images/fidelli/fideos/celentano.webp';
import FidelliFusilli from '../../images/fidelli/fideos/fusilli.webp';
import FidelliGomitiRigati from '../../images/fidelli/fideos/gomiti-rigati.webp';
import FidelliMostaccioli from '../../images/fidelli/fideos/mostaccioli.webp';
import FidelliPenneRigate from '../../images/fidelli/fideos/penne-rigate.webp';
import FidelliRadiatori from '../../images/fidelli/fideos/radiatori.webp';
import FidelliSpaghetti from '../../images/fidelli/fideos/spaghetti.webp';
import FidelliTagliolini from '../../images/fidelli/fideos/tagliolini.webp';
import FidelliLogo from '../../images/fidelli/logo/fidelli.webp';

import CelestialHI000 from '../../images/celestial/harinas-industriales/h000.webp';
import CelestialHI0000 from '../../images/celestial/harinas-industriales/h0000.webp';
import CelestialHI000plus from '../../images/celestial/harinas-industriales/h000plus.webp';
import CelestialHI000premium from '../../images/celestial/harinas-industriales/h000premium.webp';
import CelestialHI000preparada from '../../images/celestial/harinas-industriales/h000preparada.webp';
import CelestialH000 from '../../images/celestial/harinas/h000.webp';
import CelestialH0000 from '../../images/celestial/harinas/h0000.webp';
import CelestialHleudante from '../../images/celestial/harinas/hleudante.webp';
import CelestialHintegral from '../../images/celestial/harinas/hintegral.webp';
import CelestialCaracolito from '../../images/celestial/fideos/caracolito.webp';
import CelestialCelentano from '../../images/celestial/fideos/celentano.webp';
import CelestialCodos from '../../images/celestial/fideos/codos.webp';
import CelestialDedalitos from '../../images/celestial/fideos/dedalitos.webp';
import CelestialMostachol from '../../images/celestial/fideos/mostachol.webp';
import CelestialRadiatore from '../../images/celestial/fideos/radiatore.webp';
import CelestialRigatti from '../../images/celestial/fideos/rigatti.webp';
import CelestialSpaghetti from '../../images/celestial/fideos/spaghetti.webp';
import CelestialTallarin from '../../images/celestial/fideos/tallarin.webp';
import CelestialTirabuzon from '../../images/celestial/fideos/tirabuzon.webp';
import CelestialGarbanzos from '../../images/celestial/legumbres/garbanzos.webp';
import CelestialLentejas from '../../images/celestial/legumbres/lentejas.webp';
import CelestialPisingallo from '../../images/celestial/legumbres/pisingallo.webp';
import CelestialPorotos from '../../images/celestial/legumbres/porotos.webp';
import CelestialBizcochueloVain from '../../images/celestial/preparaciones/bizcochuelo-vain.webp';
import CelestialBizcochueloChoc from '../../images/celestial/preparaciones/bizcochuelo-choc.webp';
import CelestialÑoquis from '../../images/celestial/preparaciones/ñoquis.webp';
import CelestialPizza from '../../images/celestial/preparaciones/pizza.webp';
import CelestialAnillitosLimon from '../../images/celestial/galletas/anillitos-limon.webp';
import CelestialAnillitosVainilla from '../../images/celestial/galletas/anillitos-vainilla.webp';
import CelestialBastones from '../../images/celestial/galletas/bastones.webp';
import CelestialChips from '../../images/celestial/galletas/cookies-chips.webp';
import CelestialLogo from '../../images/logos-brands/celestial.webp';

export const data = [
  {
    name: "Capannoli",
    logo: CapannoliLogo,
    sections: [
      {
        name: "Harinas",
        products: [
          { name: "Harina 000", img: CapannoliH000 },
          { name: "Harina 0000", img: CapannoliH0000 },
          { name: "Harina Leudante", img: CapannoliHleudante },
        ],
      },
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
          { name: "Harina 000 Standard", img: CelestialHI000 },
          { name: "Harina 000", img: CelestialHI000plus },
          { name: "Harina 000 Premium", img: CelestialHI000premium },
          { name: "Harina 000 Preparada", img: CelestialHI000preparada },
          { name: "Harina 0000", img: CelestialHI0000 },
        ],
      },
      {
        name: "Harinas",
        products: [
          { name: "Harina 000", img: CelestialH000 },
          { name: "Harina 0000", img: CelestialH0000 },
          { name: "Harina Leudante", img: CelestialHleudante },
          { name: "Harina Integral", img: CelestialHintegral},

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
          { name: "Porotos", img: CelestialPorotos },
          { name: "Pizingallo", img: CelestialPisingallo },
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
          { name: "Anillitos Limón", img: CelestialAnillitosLimon },
          { name: "Anillitos Vainilla", img: CelestialAnillitosVainilla },
          { name: "Bastones", img: CelestialBastones },
          { name: "Cookies con Chips", img: CelestialChips },
        ],
      },
    ],
  },
];
