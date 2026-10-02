export interface Dinosaur {
  id: string;
  name: string;
  scientificName: string;
  periodId: 'triassico' | 'jurassico' | 'cretaceo';
  eraName: string;
  startYear: number; // in negative years, e.g. -68000000 (-68 Ma)
  endYear: number;   // e.g. -66000000 (-66 Ma)
  displayPeriod: string;
  type: string;
  diet: 'Carnívoro' | 'Herbívoro' | 'Onívoro' | 'Piscívoro';
  size: string;
  weight: string;
  region: string;
  imageUrl: string;
  description: string;
  curiosities: string[];
  anatomicalFeatures: string[];
}

export const DINOSAURS: Dinosaur[] = [
  // TRIÁSSICO (252 Ma – 201 Ma)
  {
    id: 'dino-herrerasaurus',
    name: 'Herrerassauro',
    scientificName: 'Herrerasaurus ischigualastensis',
    periodId: 'triassico',
    eraName: 'Período Triássico',
    startYear: -231000000,
    endYear: -228000000,
    displayPeriod: 'c. 231 – 228 Ma atrás',
    type: 'Saurísquio basal bípede',
    diet: 'Carnívoro',
    size: '3 a 6 metros de comprimento',
    weight: '210 a 350 kg',
    region: 'Gondwana (América do Sul - Argentina)',
    imageUrl: 'https://images.unsplash.com/photo-1570481662006-a3a1374699e8?q=80&w=800&auto=format&fit=crop',
    description: 'Um dos dinossauros carnívoros mais antigos e primitivos já registrados pela paleontologia. Bípede ágil com mandíbula flexível para segurar presas velozes no supercontinente Pangeia.',
    curiosities: [
      'Descoberto na formação Ischigualasto na Argentina por Victorino Herrera em 1959',
      'Possuía juntas mandibulares deslizantes incomuns que permitiam mastigar carne densa',
      'Convivia com os primeiros cinodontes e arcossauros não-dinossauros'
    ],
    anatomicalFeatures: [
      'Garras afiadas nas patas anteriores para agarrar presas',
      'Cauda rígida que servia como contrapeso dinâmico',
      'Dentes serrilhados recurvados para trás'
    ]
  },
  {
    id: 'dino-coelophysis',
    name: 'Celófise',
    scientificName: 'Coelophysis bauri',
    periodId: 'triassico',
    eraName: 'Período Triássico',
    startYear: -216000000,
    endYear: -203000000,
    displayPeriod: 'c. 216 – 203 Ma atrás',
    type: 'Terópode grácil',
    diet: 'Carnívoro',
    size: '2 a 3 metros de comprimento',
    weight: '15 a 25 kg',
    region: 'Laurásia (América do Norte)',
    imageUrl: 'https://images.unsplash.com/photo-1525877442103-5dd522936e9c?q=80&w=800&auto=format&fit=crop',
    description: 'Predador pequeno, esbelto e incrivelmente rápido. Seus ossos finos e ocos inspiraram seu nome grego ("forma oca"), antecipando a anatomia que milhões de anos depois geraria as aves.',
    curiosities: [
      'Milhares de esqueletos foram encontrados juntos no Ghost Ranch, Novo México',
      'Possuía visão estereoscópica apurada para caça diurna e crepuscular',
      'Caçava em bandos coordenados pelas planícies áridas do Triássico'
    ],
    anatomicalFeatures: [
      'Ossos ocos de paredes delgadas para leveza extrema',
      'Pescoço em formato de S com grande alcance de bote',
      'Mãos com três dedos funcionais equipados com garras em foice'
    ]
  },
  {
    id: 'dino-plateosaurus',
    name: 'Plateossauro',
    scientificName: 'Plateosaurus trossingensis',
    periodId: 'triassico',
    eraName: 'Período Triássico',
    startYear: -214000000,
    endYear: -204000000,
    displayPeriod: 'c. 214 – 204 Ma atrás',
    type: 'Prosaurópode herbívoro',
    diet: 'Herbívoro',
    size: '6 a 10 metros de comprimento',
    weight: '4 toneladas',
    region: 'Europa Central e Setentrional',
    imageUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop',
    description: 'O primeiro grande dinossauro herbívoro da história geológica. Capaz de pastar tanto em quatro patas quanto apoiar-se sobre as patas traseiras para devorar folhas de coníferas e cicadáceas altas.',
    curiosities: [
      'Um dos dinossauros mais abundantes descobertos na Alemanha e Suíça',
      'Primeiro elo evidente rumo aos gigantescos saurópodes do Jurássico',
      'Possuía estômagos com gastrólitos (pedras engolidas para moer celulose vegetal)'
    ],
    anatomicalFeatures: [
      'Pescoço alongado com vértebras robustas',
      'Polegar dianteiro com enorme garra defensiva',
      'Dentes pequenos em formato de folha desenhados para triturar vegetação'
    ]
  },

  // JURÁSSICO (201 Ma – 145 Ma)
  {
    id: 'dino-brachiosaurus',
    name: 'Braquiossauro',
    scientificName: 'Brachiosaurus altithorax',
    periodId: 'jurassico',
    eraName: 'Período Jurássico',
    startYear: -154000000,
    endYear: -140000000,
    displayPeriod: 'c. 154 – 140 Ma atrás',
    type: 'Saurópode braquiosaurídeo',
    diet: 'Herbívoro',
    size: '22 a 26 metros de comprimento / 13m de altura',
    weight: '35 a 45 toneladas',
    region: 'América do Norte (Formação Morrison)',
    imageUrl: 'https://images.unsplash.com/photo-1582234372722-50d7ccc30ebd?q=80&w=800&auto=format&fit=crop',
    description: 'Um verdadeiro arranha-céu biológico do Jurássico. Suas patas dianteiras eram mais longas que as traseiras (daí o nome "lagarto-braço"), mantendo seu dorso inclinado para alcançar o topo da floresta.',
    curiosities: [
      'Necessitava ingerir até 400 kg de folhas frescas diariamente',
      'Seu coração devia pesar cerca de 200 kg para bombear sangue até a cabeça elevada',
      'Suas narinas situavam-se no topo da caixa craniana com câmaras de ressonância'
    ],
    anatomicalFeatures: [
      'Pescoço verticalizado com até 9 metros de extensão',
      'Membros anteriores proporcionalmente maiores que os posteriores',
      'Vértebras com cavidades pneumáticas para alívio de peso ósseo'
    ]
  },
  {
    id: 'dino-stegosaurus',
    name: 'Estegossauro',
    scientificName: 'Stegosaurus stenops',
    periodId: 'jurassico',
    eraName: 'Período Jurássico',
    startYear: -155000000,
    endYear: -145000000,
    displayPeriod: 'c. 155 – 145 Ma atrás',
    type: 'Tireóforo estegosaurídeo',
    diet: 'Herbívoro',
    size: '9 metros de comprimento',
    weight: '5 a 7 toneladas',
    region: 'América do Norte e Portugal',
    imageUrl: 'https://images.unsplash.com/photo-1569096651661-820d0de8b4ab?q=80&w=800&auto=format&fit=crop',
    description: 'Ícone inconfundível do Jurássico com suas grandes placas ósseas triangulares alternadas nas costas e quatro espigões mortais na ponta da cauda, conhecidos formalmente como "tagomizador".',
    curiosities: [
      'As placas eram irrigadas por vasos sanguíneos para termorregulação térmica corporal',
      'Seu cérebro tinha o tamanho de uma noz (aproximadamente 80 gramas)',
      'A cauda com espigões podia desferir golpes laterais com força de quebrar fêmures de predadores'
    ],
    anatomicalFeatures: [
      '17 placas osteodérmicas verticais dispostas em duas fileiras alternadas',
      'Tagomizador composto por 4 espigões afiados de até 1 metro cada',
      'Bico córneo anterior para podar samambaias rasteiras e cicadáceas'
    ]
  },
  {
    id: 'dino-allosaurus',
    name: 'Alossauro',
    scientificName: 'Allosaurus fragilis',
    periodId: 'jurassico',
    eraName: 'Período Jurássico',
    startYear: -155000000,
    endYear: -145000000,
    displayPeriod: 'c. 155 – 145 Ma atrás',
    type: 'Superpredador terópode carnosauro',
    diet: 'Carnívoro',
    size: '8,5 a 10 metros de comprimento',
    weight: '2 a 3 toneladas',
    region: 'América do Norte e Europa Ocidental',
    imageUrl: 'https://images.unsplash.com/photo-1570481662006-a3a1374699e8?q=80&w=800&auto=format&fit=crop',
    description: 'O maior predador carnívoro de topo do Jurássico Superior. Sua mandíbula operava como um machado de corte, desferindo golpes rápidos contra grandes herbívoros da época.',
    curiosities: [
      'O fóssil mais célebre é o "Big Al", com 95% do esqueleto intacto',
      'Possuía cristas baixas e pontudas acima de cada olho para exibição sexual',
      'Existem evidências fósseis de lutas brutais contra estegossauros'
    ],
    anatomicalFeatures: [
      'Articulação craniana cinética permitindo abrir a boca em ângulo de 92 graus',
      'Garras recurvadas de 25 cm nas patas anteriores',
      'Dentes em lâmina serrilhada trocados continuamente ao longo da vida'
    ]
  },

  // CRETÁCEO (145 Ma – 66 Ma)
  {
    id: 'dino-trex',
    name: 'Tiranossauro Rex',
    scientificName: 'Tyrannosaurus rex',
    periodId: 'cretaceo',
    eraName: 'Período Cretáceo',
    startYear: -68000000,
    endYear: -66000000,
    displayPeriod: 'c. 68 – 66 Ma atrás',
    type: 'Superpredador celurassauro ápice',
    diet: 'Carnívoro',
    size: '12 a 13 metros de comprimento / 4m de altura no quadril',
    weight: '8 a 10 toneladas',
    region: 'América do Norte (Laurásia)',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop',
    description: 'O "rei dos lagartos tiranos". Dono da mordida terrestre mais esmagadora de todos os tempos geológicos (35.000 a 57.000 Newtons), capaz de pulverizar ossos inteiros de ceratopsídeos e hadrossauros.',
    curiosities: [
      'Sua visão binocular tinha maior percepção de profundidade que a de uma águia atual',
      'O bulbo olfativo cerebral era imenso, rastreando carcaças a dezenas de quilômetros',
      'Dentes em formato de banana de até 30 centímetros com raízes ultra reforçadas'
    ],
    anatomicalFeatures: [
      'Crânio maciço reforçado de 1,5 metro de comprimento com fenestras amplas',
      'Membros anteriores curtos com 2 dedos, mas capazes de erguer mais de 200 kg cada',
      'Pernas musculosas com fêmur denso para arrancadas explosivas'
    ]
  },
  {
    id: 'dino-triceratops',
    name: 'Tricerátops',
    scientificName: 'Triceratops horridus',
    periodId: 'cretaceo',
    eraName: 'Período Cretáceo',
    startYear: -68000000,
    endYear: -66000000,
    displayPeriod: 'c. 68 – 66 Ma atrás',
    type: 'Ceratopsídeo quadrúpede encouraçado',
    diet: 'Herbívoro',
    size: '8 a 9 metros de comprimento',
    weight: '9 a 12 toneladas',
    region: 'América do Norte (Formação Hell Creek)',
    imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop',
    description: 'O mais célebre e robusto dos dinossauros com chifres. Equipado com uma impenetrável gola óssea posterior e três temíveis chifres maciços capazes de resistir ao ataque frontal de um T-Rex faminto.',
    curiosities: [
      'Seu crânio podia atingir 2,5 metros, sendo um dos maiores de qualquer animal terrestre',
      'Baterias dentárias com até 800 dentes que se autorrenovavam para moer palmeiras e cicadas',
      'A gola óssea também servia como display visual colorido de comunicação intraespecífica'
    ],
    anatomicalFeatures: [
      'Dois chifres supraorbitais de 1 metro de comprimento acima dos olhos',
      'Chifre nasal frontal menor acima de bico pontiagudo adunco',
      'Gola cervical osteodérmica sólida sem fenestras abertas'
    ]
  },
  {
    id: 'dino-spinosaurus',
    name: 'Espinossauro',
    scientificName: 'Spinosaurus aegyptiacus',
    periodId: 'cretaceo',
    eraName: 'Período Cretáceo',
    startYear: -100000000,
    endYear: -93000000,
    displayPeriod: 'c. 100 – 93 Ma atrás',
    type: 'Megaterópode semiaquático piscívoro',
    diet: 'Piscívoro',
    size: '14 a 16 metros de comprimento',
    weight: '7 a 9 toneladas',
    region: 'Norte da África (Egito e Marrocos)',
    imageUrl: 'https://images.unsplash.com/photo-1569096651661-820d0de8b4ab?q=80&w=800&auto=format&fit=crop',
    description: 'O maior dinossauro predador conhecido em comprimento, superando o T-Rex. Possuía uma espetacular vela dorsal de espinhos ósseos de 2 metros de altura e uma cauda achatada adaptada para natação.',
    curiosities: [
      'Primeiro dinossauro comprovadamente adaptado à vida e caça semiaquática',
      'Focinho alongado repleto de sensores neurais semelhantes aos dos crocodilos modernos',
      'Alimentava-se de peixes celacantos gigantes e peixes-serra pré-históricos de 4 metros'
    ],
    anatomicalFeatures: [
      'Vela dorsal suportada por espinhas neurais de até 1,8 metro',
      'Cauda em formato de remo propulsor aquático',
      'Dentes cônicos lisos ideais para perfurar escamas escorregadias de peixes'
    ]
  },
  {
    id: 'dino-velociraptor',
    name: 'Velociraptor',
    scientificName: 'Velociraptor mongoliensis',
    periodId: 'cretaceo',
    eraName: 'Período Cretáceo',
    startYear: -75000000,
    endYear: -71000000,
    displayPeriod: 'c. 75 – 71 Ma atrás',
    type: 'Dromeossaurídeo emplumado veloz',
    diet: 'Carnívoro',
    size: '2 metros de comprimento / 0,5m de altura',
    weight: '15 a 18 kg',
    region: 'Ásia Central (Deserto de Gobi - Mongólia)',
    imageUrl: 'https://images.unsplash.com/photo-1525877442103-5dd522936e9c?q=80&w=800&auto=format&fit=crop',
    description: 'Predador plumoso altamente ágil e inteligente do final do Cretáceo. Ao contrário do cinema, era do tamanho de um peru grande e totalmente coberto de penas penáceas aerodinâmicas.',
    curiosities: [
      'O fóssil "Fighting Dinosaurs" registrou um Velociraptor e um Protoceratops travados em combate mortal eterno',
      'A garra em foice do segundo dedo do pé media 6,5 cm e servia para imobilizar presas',
      'Possuía penas com bárbulas comprovadas por orifícios de fixação óssea na ulna'
    ],
    anatomicalFeatures: [
      'Garra retrátil hipertrofiada no segundo dedo de cada pata posterior',
      'Cauda revestida por tendões ósseos que servia como leme direcional em alta velocidade',
      'Bravatas de plumagem nas asas e cauda para equilíbrio em saltos e curvas bruscas'
    ]
  }
];

export interface DinosaurEraBanner {
  id: string;
  name: string;
  startYear: number;
  endYear: number;
  displayYears: string;
  color: string;
  description: string;
}

export const DINOSAUR_ERAS: DinosaurEraBanner[] = [
  {
    id: 'triassico',
    name: 'Período Triássico',
    startYear: -252000000,
    endYear: -201000000,
    displayYears: '252 – 201 Ma',
    color: '#b45309',
    description: 'Alvorada dos dinossauros no supercontinente Pangeia após a grande extinção Permo-Triássica.'
  },
  {
    id: 'jurassico',
    name: 'Período Jurássico',
    startYear: -201000000,
    endYear: -145000000,
    displayYears: '201 – 145 Ma',
    color: '#047857',
    description: 'A Era de Ouro dos saurópodes gigantescos e surgimento das primeiras aves aladas.'
  },
  {
    id: 'cretaceo',
    name: 'Período Cretáceo',
    startYear: -145000000,
    endYear: -66000000,
    displayYears: '145 – 66 Ma',
    color: '#b91c1c',
    description: 'Apogeu da diversidade com T-Rex, Tricerátops e Espinossauro até o encerramento do Mesozoico.'
  }
];
