
import CapannoliCaracolito from '../../images/capannoli/fideos/caracolitos.png';
import CapannoliCelentano from '../../images/capannoli/fideos/celentano.png';
import CapannoliCodos from '../../images/capannoli/fideos/codos.png';
import CapannoliDedalitos from '../../images/capannoli/fideos/dedalitos.png';
import CapannoliMostachol from '../../images/capannoli/fideos/mostachol.png';
import CapannoliRadiatore from '../../images/capannoli/fideos/radiatore.png';
import CapannoliRigati from '../../images/capannoli/fideos/rigati.png';
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
          { name: "Rigati", img: CapannoliRigati },
          { name: "Spaghetti", img: CapannoliSpaghetti },
          { name: "Tallarin", img: CapannoliTallarin },
          { name: "Tirabuzon", img: CapannoliTirabuzon },
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
];