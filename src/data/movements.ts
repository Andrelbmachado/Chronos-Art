import { Movement } from '../types';

export const MOVEMENTS: Movement[] = [
  {
    id: 'paleolitico-inferior',
    name: 'Paleolítico Inferior',
    eraId: 'pre-historia',
    startYear: -40000,
    endYear: -30000,
    displayPeriod: 'c. 2,5 milhões – 300.000 a.C.',
    originRegion: 'África, Ásia e Europa',
    visualCharacteristics: [
      'Primeiros instrumentos de pedra lascada (Olduvaiense e Achelense)',
      'Simetria rudimentar em bifaces',
      'Uso utilitário transformando-se em senso de forma e peso'
    ],
    historicalContext: 'A emergência do gênero Homo (Habilis, Erectus) e o desenvolvimento da coordenação motora fina e percepção espacial através da pedra.',
    keyArtists: [
      { name: 'Hominídeos do Paleolítico', role: 'Artífices e ferramentas ancestrais', country: 'África / Eurásia' }
    ],
    famousWorks: [
      {
        id: 'biface-achelense',
        title: 'Biface Achelense de Simetria Perfeita',
        artist: 'Homo Erectus',
        year: 'c. 500.000 a.C.',
        imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop',
        description: 'Pedra de quartzo esculpida com simetria intencional além da mera necessidade funcional.'
      }
    ],
    influences: [],
    influenced: ['paleolitico-medio'],
    color: '#78350f',
    summary: 'A aurora da manipulação simbólica e estética dos materiais naturais pela humanidade ancestral.',
    tags: ['Pré-história', 'Pedra Lascada', 'Ferramentas']
  },
  {
    id: 'paleolitico-medio',
    name: 'Paleolítico Médio',
    eraId: 'pre-historia',
    startYear: -30000,
    endYear: -15000,
    displayPeriod: 'c. 300.000 – 40.000 a.C.',
    originRegion: 'Europa, África e Oriente Médio',
    visualCharacteristics: [
      'Gravuras geométricas simples em ocre',
      'Uso ceremonial de pigmentos minerais (ocre vermelho)',
      'Adornos corporais com conchas perfuradas'
    ],
    historicalContext: 'Cultura do Neandertal e Homo sapiens arcaico. Início de rituais funerários e pensamento abstrato simbólico.',
    keyArtists: [
      { name: 'Caçadores Neandertais e Sapiens', role: 'Gravadores e ornamentadores', country: 'Europa / África' }
    ],
    famousWorks: [
      {
        id: 'blombos-ocre',
        title: 'Ocre Gravado da Caverna de Blombos',
        artist: 'Homo Sapiens Arcaico',
        year: 'c. 75.000 a.C.',
        imageUrl: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=800&auto=format&fit=crop',
        description: 'Bloco de ocre gravado com hachuras geométricas cruzadas, considerado um dos primeiros registros gráficos abstratos.'
      }
    ],
    influences: ['paleolitico-inferior'],
    influenced: ['paleolitico-superior'],
    color: '#92400e',
    summary: 'Surgimento da pigmentação corporal, adornos e hachuras geométricas abstratas.',
    tags: ['Ocre', 'Símbolos', 'Gravura']
  },
  {
    id: 'paleolitico-superior',
    name: 'Paleolítico Superior',
    eraId: 'pre-historia',
    startYear: -15000,
    endYear: -10000,
    displayPeriod: 'c. 40.000 – 10.000 a.C.',
    originRegion: 'França, Espanha, África',
    visualCharacteristics: [
      'Pinturas rupestres parietal vibrantes (animais em movimento)',
      'Estatuetas estilizadas de estearatita e marfim (Vênus de fertilidade)',
      'Contornos a carvão e pigmentos naturais aplicados por sopro ou pincel de cerda'
    ],
    historicalContext: 'Comunidades nomadicas de caçadores-coletores Sapiens produzindo rituais mágicos de caça e celebração da fertilidade em cavernas profundas.',
    keyArtists: [
      { name: 'Mestres de Lascaux e Altamira', role: 'Pintores das cavernas', country: 'França / Espanha' }
    ],
    famousWorks: [
      {
        id: 'venus-willendorf',
        title: 'Vênus de Willendorf',
        artist: 'Escultor Paleolítico',
        year: 'c. 28.000 a.C.',
        imageUrl: 'https://images.unsplash.com/photo-1569317002804-ab77bcf1bce4?q=80&w=800&auto=format&fit=crop',
        description: 'Escultura em calcário ocre representando atributos femininos acentuados como símbolo de fertilidade e abundância.'
      },
      {
        id: 'lascaux-painel',
        title: 'Salão dos Touros em Lascaux',
        artist: 'Pintores Rupestres',
        year: 'c. 17.000 a.C.',
        imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop',
        description: 'Pintura mural magnífica retratando bisões, cavalos e cervos com ilusão de movimento naturalista.'
      }
    ],
    influences: ['paleolitico-medio'],
    influenced: ['neolitico'],
    color: '#b45309',
    summary: 'A apoteose do figurativismo rupestre e das vênus paleolíticas nas cavernas sagradas.',
    tags: ['Pintura Rupestre', 'Vênus', 'Lascaux', 'Altamira']
  },
  {
    id: 'neolitico',
    name: 'Neolítico',
    eraId: 'pre-historia',
    startYear: -10000,
    endYear: -4000,
    displayPeriod: 'c. 10.000 – 4.000 a.C.',
    originRegion: 'Crescente Fértil, Europa, Ásia',
    visualCharacteristics: [
      'Arquitetura megalítica (dólmens, menires e cromlechs)',
      'Pinturas rupestres esquemáticas com figuras humanas e danças rituais',
      'Cerâmica decorada com padrões geométricos e polimento de pedra'
    ],
    historicalContext: 'Revolução Agrícola: sedentarização, domesticação de animais, surgimento dos primeiros vilarejos e culto aos ancestrais.',
    keyArtists: [
      { name: 'Construtores Megalíticos', role: 'Arquitetos e ceramistas ancestrais', country: 'Inglaterra / Europa ocidental' }
    ],
    famousWorks: [
      {
        id: 'stonehenge',
        title: 'Stonehenge (Fase Inicial)',
        artist: 'Construtores Neolíticos',
        year: 'c. 3.000 a.C.',
        imageUrl: 'https://images.unsplash.com/photo-1599833975787-5c143f373c30?q=80&w=800&auto=format&fit=crop',
        description: 'Monumento megalítico em círculo alinhado com o solstício de verão e rituais astronômicos.'
      }
    ],
    influences: ['paleolitico-superior'],
    influenced: ['idade-dos-metais', 'antiguidade'],
    color: '#a16207',
    summary: 'A Revolução Agrícola se reflete em estruturas megalíticas, cerâmica e geometria sacra.',
    tags: ['Megalitos', 'Stonehenge', 'Cerâmica', 'Sedentarização']
  },
  {
    id: 'idade-dos-metais',
    name: 'Idade dos Metais',
    eraId: 'pre-historia',
    startYear: -4000,
    endYear: -3000,
    displayPeriod: 'c. 4.000 – 1.000 a.C.',
    originRegion: 'Oriente Próximo, Europa, China',
    visualCharacteristics: [
      'Metalurgia refinada do cobre, bronze e ferro',
      'Ourivesaria elaborada, armas ornamentadas e joias',
      'Estátuas e vasos em fundição de cera perdida'
    ],
    historicalContext: 'Surgimento do comércio de longa distância, estratificação social, guerreiros elites e proto-cidades.',
    keyArtists: [
      { name: 'Metalúrgicos Ancestrais', role: 'Fundidores de bronze e ourives', country: 'Oriente Próximo / Europa' }
    ],
    famousWorks: [
      {
        id: 'carro-sol-truundholm',
        title: 'Carro do Sol de Trundholm',
        artist: 'Artesãos do Bronze Nórdico',
        year: 'c. 1.400 a.C.',
        imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop',
        description: 'Disco de bronze folheado a ouro puxado por um cavalo sobre rodas, representando a jornada solar.'
      }
    ],
    influences: ['neolitico'],
    influenced: ['antiguidade'],
    color: '#854d0e',
    summary: 'Tecnologia do bronze e ferro fundindo mitologia, adornos de guerreiros e monumentos.',
    tags: ['Bronze', 'Ferro', 'Metalurgia', 'Joalheria']
  },
  {
    id: 'arte-mesopotamica',
    name: 'Arte Mesopotâmica',
    eraId: 'antiguidade',
    startYear: -3500,
    endYear: -539,
    displayPeriod: 'c. 3.500 – 539 a.C.',
    originRegion: 'Suméria, Babilônia e Assíria (Iraque)',
    visualCharacteristics: [
      'Zigurates escalonados erguidos em tijolos de adobe',
      'Portais monumentais em tijolos vidrados azuis (Porta de Ishtar)',
      'Esculturas votivas com olhos de lápis-lazúli e relevos dinâmicos de caça assírios'
    ],
    historicalContext: 'Berço da escrita cuneiforme, das primeiras cidades-estado e de grandes impérios que uniram os vales dos rios Tigre e Eufrates.',
    keyArtists: [
      { name: 'Artesãos Reais da Babilônia', role: 'Artífices de tijolos vidrados e ourivesaria', country: 'Mesopotâmia' },
      { name: 'Escultores Assírios de Nínive', role: 'Mestres dos baixos-relevos narrativos de guerra', country: 'Assíria' }
    ],
    famousWorks: [
      {
        id: 'porta-ishtar',
        title: 'A Porta de Ishtar',
        artist: 'Arquitetos de Nabucodonosor II',
        year: 'c. 575 a.C.',
        imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop',
        description: 'Monumental portal vidrado em azul cobalto decorado com dragões mušḫuššu e touros celestiais.'
      },
      {
        id: 'estela-hamurabi',
        title: 'Estela do Código de Hamurabi',
        artist: 'Escultores Babilônicos',
        year: 'c. 1754 a.C.',
        imageUrl: 'https://images.unsplash.com/photo-1569317002804-ab77bcf1bce4?q=80&w=800&auto=format&fit=crop',
        description: 'Monólito de basalto negro contendo o primeiro conjunto legal sistemático e o rei recebendo as leis do deus Shamash.'
      }
    ],
    influences: ['idade-dos-metais'],
    influenced: ['arte-persa', 'arte-grega'],
    color: '#9a3412',
    summary: 'A arte das primeiras cidades-estado do Tigre e Eufrates: zigurates majestosos, relevos assírios e a Porta de Ishtar.',
    tags: ['Mesopotâmia', 'Porta de Ishtar', 'Zigurate', 'Babilônia', 'Cuneiforme']
  },
  {
    id: 'arte-egipcia',
    name: 'Arte do Antigo Egito',
    eraId: 'antiguidade',
    startYear: -3100,
    endYear: -30,
    displayPeriod: 'c. 3.100 – 30 a.C.',
    originRegion: 'Vale do Rio Nilo, Egito',
    visualCharacteristics: [
      'Lei da Frontalidade (tronco de frente, cabeça e pernas de perfil)',
      'Escala hierárquica (figuras mais importantes desenhadas em tamanho maior)',
      'Arquitetura monumental em pedra eterna (pirâmides, mastabas e hipogeus)',
      'Uso sagrado de hieróglifos integrados a relevos policromados e folhas de ouro'
    ],
    historicalContext: 'Civilização fluvial às margens do Nilo com teocracia faraônica; a arte servia à imortalidade da alma (Ka) e aos rituais fúnebres divinos.',
    keyArtists: [
      { name: 'Imhotep', role: 'Primeiro arquiteto conhecido da história (Pirâmide Escalonada de Saqqara)', country: 'Egito' },
      { name: 'Tutmés', role: 'Escultor-mestre da corte de Amarna (Busto de Nefertiti)', country: 'Egito' }
    ],
    famousWorks: [
      {
        id: 'mascara-tutancamon',
        title: 'Máscara Funerária de Tutancâmon',
        artist: 'Ourives Reais de Tebas',
        year: 'c. 1323 a.C.',
        imageUrl: 'https://images.unsplash.com/photo-1503152394-c571994fd383?q=80&w=800&auto=format&fit=crop',
        description: 'Ícone supremo da arte egípcia em ouro maciço com incrustações de lápis-lazúli, quartzo e faiança.'
      },
      {
        id: 'busto-nefertiti',
        title: 'Busto da Rainha Nefertiti',
        artist: 'Tutmés',
        year: 'c. 1345 a.C.',
        imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop',
        description: 'Escultura de calcário estucado exibindo graça, simetria e realismo da revolucionária era de Amarna.'
      }
    ],
    influences: ['idade-dos-metais'],
    influenced: ['arte-grega', 'arte-romana'],
    color: '#ca8a04',
    summary: 'A busca pela eternidade espiritual expressa em pirâmides, hieróglifos, esculturas funerárias e no ouro dos faraós.',
    tags: ['Egito', 'Tutancâmon', 'Pirâmides', 'Nefertiti', 'Hieróglifos']
  },
  {
    id: 'arte-grega',
    name: 'Arte Grega Clássica e Helenística',
    eraId: 'antiguidade',
    startYear: -900,
    endYear: -31,
    displayPeriod: 'c. 900 – 31 a.C.',
    originRegion: 'Atenas, Esparta e cidades do Mar Egeu, Grécia',
    visualCharacteristics: [
      'Busca da harmonia perfeita, simetria matemática e proporção áurea',
      'Evolução da rigidez dos Kourói para o naturalismo dinâmico do contrapposto',
      'Ordens arquitetônicas sagradas: Dórica, Jônica e Coríntia',
      'Dramatismo teatral e movimento exuberante no período Helenístico'
    ],
    historicalContext: 'Florescimento da democracia em Atenas, teatro trágico e cômico, jogos olímpicos e a expansão helenística de Alexandre, o Grande.',
    keyArtists: [
      { name: 'Fídias', role: 'Escultor do Parthenon e da estátua de Zeus em Olímpia', country: 'Grécia' },
      { name: 'Policleto', role: 'Criador do Cânone de proporções humanas (Doríforo)', country: 'Grécia' },
      { name: 'Praxíteles', role: 'Mestre da curva sinuosa e graciosidade clássica', country: 'Grécia' }
    ],
    famousWorks: [
      {
        id: 'parthenon-grecia',
        title: 'O Parthenon na Acrópole de Atenas',
        artist: 'Ictinos e Calícrates (Supervisão de Fídias)',
        year: '447 a.C.',
        imageUrl: 'https://images.unsplash.com/photo-1555993539-1732b0258235?q=80&w=800&auto=format&fit=crop',
        description: 'Templo dórico perfeito dedicado à deusa Atena com sutis correções ópticas de perspectiva.'
      },
      {
        id: 'vitoria-samotracia',
        title: 'Vitória de Samotrácia',
        artist: 'Escultor Helenístico de Rodes',
        year: 'c. 190 a.C.',
        imageUrl: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=800&auto=format&fit=crop',
        description: 'Estátua em mármore da deusa Nice com vestes esvoaçantes simulando o vento marinho na proa de um navio.'
      }
    ],
    influences: ['arte-egipcia'],
    influenced: ['arte-romana', 'renascimento', 'neoclassicismo'],
    color: '#0284c7',
    summary: 'A apoteose do humanismo, do cânone corporal ideal e da arquitetura proporcional no mundo grego.',
    tags: ['Grécia', 'Parthenon', 'Fídias', 'Vitória de Samotrácia', 'Escultura Clássica']
  },
  {
    id: 'arte-romana',
    name: 'Arte Romana Imperial',
    eraId: 'antiguidade',
    startYear: -509,
    endYear: 476,
    displayPeriod: '509 a.C. – 476 d.C.',
    originRegion: 'Roma, Itália e províncias do Império Romano',
    visualCharacteristics: [
      'Invenção do concreto e domínio do arco de volta perfeita, abóbada e cúpula',
      'Realismo fisionômico em retratos escultóricos (verismo republicano e bustos imperiais)',
      'Narrativa épica em relevos contínuos helicoidais (Coluna de Trajano)',
      'Afrescos decorativos em perspectiva ilusionista e mosaicos detalhados em pisos'
    ],
    historicalContext: 'Construção da maior potência administrativa e militar do Mediterrâneo antigo (Pax Romana), unindo diversas culturas sob a lei romana.',
    keyArtists: [
      { name: 'Apolodoro de Damasco', role: 'Arquiteto do Fórum e Coluna de Trajano', country: 'Roma / Síria' },
      { name: 'Mestres Mosaiquistas e Pintores de Pompeia', role: 'Criadores dos afrescos murais ilusionistas', country: 'Itália' }
    ],
    famousWorks: [
      {
        id: 'coliseu-roma',
        title: 'O Coliseu (Anfiteatro Flaviano)',
        artist: 'Engenheiros Imperiais de Vespasiano',
        year: '80 d.C.',
        imageUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=800&auto=format&fit=crop',
        description: 'Monumental anfiteatro elíptico com capacidade para mais de 50.000 espectadores, ápice da engenharia com arcos e concreto.'
      },
      {
        id: 'panteao-roma',
        title: 'O Panteão de Roma',
        artist: 'Reconstruído por Adriano',
        year: 'c. 126 d.C.',
        imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop',
        description: 'Templo com cúpula de concreto não armado de 43 metros e óculo central aberto para os céus.'
      }
    ],
    influences: ['arte-grega', 'arte-egipcia'],
    influenced: ['arte-bizantina', 'renascimento', 'neoclassicismo'],
    color: '#b91c1c',
    summary: 'A grandiosidade do Império Romano em aquedutos, arcos triunfais, o Panteão e o realismo expressivo de seus bustos.',
    tags: ['Roma', 'Coliseu', 'Panteão', 'Pompeia', 'Concreto Romano']
  },
  {
    id: 'arte-bizantina',
    name: 'Arte Bizantina',
    eraId: 'idade-media',
    startYear: 330,
    endYear: 1453,
    displayPeriod: '330 – 1453 d.C.',
    originRegion: 'Constantinopla (Istambul) e Império Romano do Oriente',
    visualCharacteristics: [
      'Mosaicos dourados cintilantes cobrindo paredes e cúpulas de igrejas',
      'Figuras hieráticas, frontais e espiritualizadas com olhos expressivos',
      'Pintura de ícones sacros em têmpera sobre madeira com folhas de ouro',
      'Igrejas com planta em cruz grega coroada por cúpulas grandiosas'
    ],
    historicalContext: 'Fundação de Constantinopla por Constantino e governo do imperador Justiniano; síntese do cristianismo com o fausto cerimonial da corte oriental.',
    keyArtists: [
      { name: 'Isidoro de Mileto e Antêmio de Trales', role: 'Arquitetos e matemáticos da Basílica de Santa Sofia', country: 'Império Bizantino' },
      { name: 'Mestres dos Mosaicos de Ravena', role: 'Artífices de San Vitale e Sant\'Apollinare', country: 'Itália Bizantina' }
    ],
    famousWorks: [
      {
        id: 'hagia-sophia',
        title: 'Basílica de Santa Sofia (Hagia Sophia)',
        artist: 'Isidoro de Mileto e Antêmio de Trales',
        year: '537 d.C.',
        imageUrl: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=800&auto=format&fit=crop',
        description: 'Maravilha da arquitetura mundial com cúpula monumental parecendo flutuar sobre um colar de luz dourada.'
      },
      {
        id: 'mosaicos-san-vitale',
        title: 'Mosaico do Imperador Justiniano e sua Corte',
        artist: 'Mestres Mosaiquistas de Ravena',
        year: 'c. 547 d.C.',
        imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop',
        description: 'Mosaico suntuoso na Basílica de San Vitale representando o poder divino e terreno do imperador.'
      }
    ],
    influences: ['arte-romana', 'arte-grega'],
    influenced: ['arte-romanica', 'arte-gotica', 'renascimento'],
    color: '#b45309',
    summary: 'A luz divina refletida em mosaicos de ouro, cúpulas monumentais e a veneração sagrada dos ícones cristãos.',
    tags: ['Bizantino', 'Hagia Sophia', 'Mosaicos', 'Ravena', 'Ícones']
  },
  {
    id: 'arte-romanica',
    name: 'Arte Românica',
    eraId: 'idade-media',
    startYear: 1000,
    endYear: 1150,
    displayPeriod: 'c. 1000 – 1150 d.C.',
    originRegion: 'França, Espanha, Alemanha e Itália',
    visualCharacteristics: [
      'Paredes espessas de pedra maciça com poucas e pequenas aberturas',
      'Arcos plenos (de volta perfeita) e robustas abóbadas de berço',
      'Tímpanos esculpidos sobre os portais retratando o Juízo Final com vigor expressivo',
      'Aspecto imponente de fortaleza sagrada para acolher peregrinos'
    ],
    historicalContext: 'Florescimento das grandes rotas de peregrinação a Santiago de Compostela, reformas monásticas cluniacenses e paz feudal relativa.',
    keyArtists: [
      { name: 'Gislebertus', role: 'Escultor do impressionante Tímpano do Juízo Final de Autun', country: 'França' },
      { name: 'Mestre da Tapeçaria de Bayeux', role: 'Bordadores da épica conquista normanda', country: 'França / Inglaterra' }
    ],
    famousWorks: [
      {
        id: 'timpano-autun',
        title: 'Tímpano do Juízo Final na Catedral de Saint-Lazare',
        artist: 'Gislebertus',
        year: 'c. 1130',
        imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop',
        description: 'Escultura dramática em relevo no portal mostrando Cristo majestoso julgando as almas e pesando os pecados.'
      },
      {
        id: 'santiago-romanico',
        title: 'Catedral de Santiago de Compostela (Núcleo Românico)',
        artist: 'Mestre Bernardo o Velho e Roberto',
        year: '1075–1122',
        imageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop',
        description: 'A maior igreja de peregrinação românica com ampla nave e deambulatório para procissões de fiéis.'
      }
    ],
    influences: ['arte-romana', 'arte-bizantina'],
    influenced: ['arte-gotica'],
    color: '#57534e',
    summary: 'Igrejas-fortalezas de pedra com arcos plenos e portais esculpidos do Juízo Final acolhendo multidões de peregrinos.',
    tags: ['Românico', 'Peregrinação', 'Juízo Final', 'Autun', 'Santiago de Compostela']
  },
  {
    id: 'arte-gotica',
    name: 'Arte Gótica',
    eraId: 'idade-media',
    startYear: 1140,
    endYear: 1450,
    displayPeriod: '1140 – 1450 d.C.',
    originRegion: 'Île-de-France (Paris) e Europa Ocidental',
    visualCharacteristics: [
      'Arcos ogivais pontiagudos e abóbadas de cruzaria de ogivas',
      'Arcobotantes externos permitindo paredes finas e janelas altíssimas',
      'Vitrais translúcidos coloridos criando luz mística e rosáceas gigantescas',
      'Esculturas esguias e naturalistas nos portais e afrescos líricos pré-renascentistas'
    ],
    historicalContext: 'Crescimento dinâmico das cidades, surgimento das universidades medievais, corporações de pedreiros-livres e culto da luz como manifestação de Deus (Abade Suger).',
    keyArtists: [
      { name: 'Giotto di Bondone', role: 'Pintor inovador que introduziu humanidade e volume tridimensional', country: 'Itália' },
      { name: 'Abade Suger', role: 'Teólogo e idealizador da primeira catedral gótica em Saint-Denis', country: 'França' },
      { name: 'Duccio di Buoninsegna', role: 'Mestre da graça lírica da Escola de Siena', country: 'Itália' }
    ],
    famousWorks: [
      {
        id: 'notre-dame-paris',
        title: 'Catedral de Notre-Dame de Paris',
        artist: 'Mestres Construtores Góticos',
        year: '1163–1345',
        imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop',
        description: 'Símbolo sublime da arquitetura gótica francesa com gárgulas, rosáceas e arcobotantes esbeltos.'
      },
      {
        id: 'giotto-scrovegni',
        title: 'A Lamentação de Cristo (Capela Scrovegni)',
        artist: 'Giotto di Bondone',
        year: '1305',
        imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop',
        description: 'Afresco revolucionário que inaugurou o drama humano realista e o espaço pré-renascentista.'
      },
      {
        id: 'sainte-chapelle',
        title: 'Vitrais da Sainte-Chapelle',
        artist: 'Mestres Vidreiros de Luís IX',
        year: '1248',
        imageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop',
        description: 'Paredes translúcidas de vitrais em arco ogival criando um relicário resplandecente de luz mística policromada.'
      }
    ],
    influences: ['arte-romanica', 'arte-bizantina'],
    influenced: ['renascimento'],
    color: '#475569',
    summary: 'A ascensão vertical em direção aos céus, vitrais luminosos de catedrais e a humanização emocional pioneira de Giotto.',
    tags: ['Gótico', 'Notre-Dame', 'Vitrais', 'Giotto', 'Arcobotantes']
  },
  {
    id: 'renascimento',
    name: 'Renascimento',
    eraId: 'renascimento-maneirismo',
    startYear: 1400,
    endYear: 1520,
    displayPeriod: '1400 – 1520',
    originRegion: 'Florença e Roma, Itália',
    visualCharacteristics: [
      'Perspectiva científica de ponto de fuga único',
      'Sfumato (suavização de contornos) e iluminação realista',
      'Composição piramidal equilibrada e redescoberta da anatomia humanista'
    ],
    historicalContext: 'Humanismo renascentista, patrocínio da família Médici e dos Papas, imprensa de Gutenberg, viagens marítimas e revolução científica.',
    keyArtists: [
      { name: 'Leonardo da Vinci', role: 'Polímata, pintor e inventor', country: 'Itália' },
      { name: 'Michelangelo Buonarroti', role: 'Escultor, pintor e arquiteto', country: 'Itália' },
      { name: 'Rafael Sanzio', role: 'Pintor mestre da harmonia', country: 'Itália' },
      { name: 'Sandro Botticelli', role: 'Pintor mitológico e lírico', country: 'Itália' }
    ],
    famousWorks: [
      {
        id: 'mona-lisa',
        title: 'Mona Lisa (La Gioconda)',
        artist: 'Leonardo da Vinci',
        year: '1503–1519',
        imageUrl: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=800&auto=format&fit=crop',
        description: 'Retrato emblemático mundialmente famoso por seu olhar enigmático e uso magistral do sfumato.'
      },
      {
        id: 'davida-michelangelo',
        title: 'Davi',
        artist: 'Michelangelo',
        year: '1501–1504',
        imageUrl: 'https://images.unsplash.com/photo-1582561424760-0321d75e81fa?q=80&w=800&auto=format&fit=crop',
        description: 'Monumento em mármore exultando o ideal humanista de coragem, razão e perfeita anatomia masculina.'
      }
    ],
    influences: ['antiguidade', 'idade-media'],
    influenced: ['maneirismo', 'barroco'],
    color: '#d97706',
    summary: 'A revolução do humanismo, perspectiva perspectiva e perfeição anatômica do Il Quattrocento e Cinquecento.',
    tags: ['Leonardo', 'Michelangelo', 'Rafael', 'Florença', 'Perspectiva']
  },
  {
    id: 'maneirismo',
    name: 'Maneirismo',
    eraId: 'renascimento-maneirismo',
    startYear: 1520,
    endYear: 1600,
    displayPeriod: '1520 – 1600',
    originRegion: 'Itália e Espanha',
    visualCharacteristics: [
      'Alongamento elegante e serpentinado das figuras humanas',
      'Cores artificiais, ácidas ou saturadas',
      'Composições instáveis, espaciais complexas e atmosfera dramático-intelectual'
    ],
    historicalContext: 'Sacco di Roma (1527), Reforma Protestante e o abalo da serenidade racional do Alto Renascimento.',
    keyArtists: [
      { name: 'El Greco', role: 'Pintor mestre de figuras alongadas espirituais', country: 'Grécia / Espanha' },
      { name: 'Parmigianino', role: 'Pintor da sofisticação cortesa', country: 'Itália' },
      { name: 'Tintoretto', role: 'Pintor de dinamismo e luz dramática', country: 'Itália' }
    ],
    famousWorks: [
      {
        id: 'el-greco-orgaz',
        title: 'O Enterro do Conde de Orgaz',
        artist: 'El Greco',
        year: '1586',
        imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop',
        description: 'Fusão magistral entre a terra realista e o céu estilizado com corpos elásticos e luz mística.'
      }
    ],
    influences: ['renascimento'],
    influenced: ['barroco'],
    color: '#c2410c',
    summary: 'A quebra sofisticada das regras clássicas com proporções alongadas e tensão psicológica.',
    tags: ['El Greco', 'Serpentinata', 'Espanha', 'Pós-Renascimento']
  },
  {
    id: 'barroco',
    name: 'Barroco',
    eraId: 'barroco-rococo',
    startYear: 1600,
    endYear: 1750,
    displayPeriod: '1600 – 1750',
    originRegion: 'Roma (Itália), Espanha, Holanda, Brasil',
    visualCharacteristics: [
      'Tenebrismo e claroscuro intenso (luz focal direta e sombras profundas)',
      'Movimento diagonal dramático e teatralidade emocional',
      'Ornamentação riquíssima em ouro, mármores e ilusão de ótica (Trompe-l\'œil)'
    ],
    historicalContext: 'Contrarreforma Católica para emocionar fiéis; Absolutismo monárquico e Expansão Colonial (incluindo o Barroco Mineiro no Brasil).',
    keyArtists: [
      { name: 'Caravaggio', role: 'Mestre do tenebrismo cru e realista', country: 'Itália' },
      { name: 'Gian Lorenzo Bernini', role: 'Genial mestre escultor e arquiteto', country: 'Itália' },
      { name: 'Rembrandt van Rijn', role: 'Pintor da luz psicológica holandesa', country: 'Holanda' },
      { name: 'Diego Velázquez', role: 'Pintor da corte espanhola', country: 'Espanha' },
      { name: 'Aleijadinho (Antônio Francisco Lisboa)', role: 'Escultor e arquiteto do Barroco Mineiro', country: 'Brasil' }
    ],
    famousWorks: [
      {
        id: 'las-meninas',
        title: 'As Meninas',
        artist: 'Diego Velázquez',
        year: '1656',
        imageUrl: 'https://images.unsplash.com/photo-1580136579312-94651dfd596d?q=80&w=800&auto=format&fit=crop',
        description: 'Complexa obra de arte com espelho, autorretrato do artista e a infanta de Espanha no ateliê.'
      },
      {
        id: 'extase-santa-teresa',
        title: 'O Éxtase de Santa Teresa',
        artist: 'Gian Lorenzo Bernini',
        year: '1647–1652',
        imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop',
        description: 'Escultura barroca em mármore capturando o momento de fervor místico e teatralidade sublime.'
      },
      {
        id: 'aleijadinho-profetas',
        title: 'Os Doze Profetas de Congonhas',
        artist: 'Aleijadinho',
        year: '1800–1805',
        imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop',
        description: 'Conjunto monumental de esculturas em pedra-sabão no Santuário do Bom Jesus de Matosinhos, no Brasil.'
      }
    ],
    influences: ['renascimento', 'maneirismo'],
    influenced: ['rococo', 'neoclassicismo'],
    color: '#b45309',
    summary: 'Teatralidade dramática, luz intensa de Caravaggio e a riqueza dourada do Barroco Colonial.',
    tags: ['Caravaggio', 'Bernini', 'Velázquez', 'Aleijadinho', 'Tenebrismo', 'Brasil Colonial']
  },
  {
    id: 'rococo',
    name: 'Rococó',
    eraId: 'barroco-rococo',
    startYear: 1720,
    endYear: 1780,
    displayPeriod: '1720 – 1780',
    originRegion: 'França e Áustria',
    visualCharacteristics: [
      'Pinceladas suaves, tons pastel e curvas delicadas em forma de concha (rocaille)',
      'Temas galantes, festas aristocráticas, mitologia bucolica e amor romântico',
      'Interiores ricamente decorados com espelhos, porcelana e douração leve'
    ],
    historicalContext: 'A corte hedonista de Luís XV na França, salons intelectuais e a busca pela leveza aristocrática antes da Revolução Francesa.',
    keyArtists: [
      { name: 'Jean-Antoine Watteau', role: 'Criador do estilo de fêtes galantes', country: 'França' },
      { name: 'Jean-Honoré Fragonard', role: 'Pintor do sensualismo refinado', country: 'França' },
      { name: 'François Boucher', role: 'Pintor oficial da corte de Luís XV', country: 'França' }
    ],
    famousWorks: [
      {
        id: 'o-balanco-fragonard',
        title: 'O Balanço',
        artist: 'Jean-Honoré Fragonard',
        year: '1767',
        imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop',
        description: 'Símbolo estético do Rococó retratando uma jovem em um balanço em jardim luxulento com sapatilha arremessada no ar.'
      }
    ],
    influences: ['barroco'],
    influenced: ['neoclassicismo'],
    color: '#db2777',
    summary: 'Graciosidade festiva, tons pastel e romantismo refinado dos salões aristocráticos franceses.',
    tags: ['França', 'Fragonard', 'Tons Pastel', 'Fêtes Galantes']
  },
  {
    id: 'neoclassicismo',
    name: 'Neoclassicismo',
    eraId: 'neoclassicismo-romantismo',
    startYear: 1770,
    endYear: 1830,
    displayPeriod: '1770 – 1830',
    originRegion: 'França, Itália, Inglaterra',
    visualCharacteristics: [
      'Linhas limpas e firmes, composturas estáticas e sobriedade moral',
      'Inspiração direta na antiguidade greco-romana e nas ruínas recém-descobertas de Pompéia',
      'Temas de virtude cívica, sacrifício patriótico e heroísmo'
    ],
    historicalContext: 'O Iluminismo, Revolução Francesa e o Império Napoleônico. Rejeição do excesso rococó em favor da ordem racional.',
    keyArtists: [
      { name: 'Jacques-Louis David', role: 'Pintor oficial da Revolução e Napoleão', country: 'França' },
      { name: 'Jean-Auguste-Dominique Ingres', role: 'Mestre do desenho purista clássico', country: 'França' },
      { name: 'Antonio Canova', role: 'Escultor do mármore neoclássico', country: 'Itália' }
    ],
    famousWorks: [
      {
        id: 'juramento-horacios',
        title: 'O Juramento dos Horácios',
        artist: 'Jacques-Louis David',
        year: '1784',
        imageUrl: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=800&auto=format&fit=crop',
        description: 'Manifesto pictórico do Neoclassicismo exaltando dever, honra e austeridade moral romanas.'
      }
    ],
    influences: ['antiguidade', 'rococo'],
    influenced: ['romantismo', 'realismo'],
    color: '#2563eb',
    summary: 'Racionalismo do Iluminismo inspirado na ordem cívica, heroísmo e clareza grego-romana.',
    tags: ['Iluminismo', 'Jacques-Louis David', 'Napoleão', 'Pompéia']
  },
  {
    id: 'romantismo',
    name: 'Romantismo',
    eraId: 'neoclassicismo-romantismo',
    startYear: 1800,
    endYear: 1850,
    displayPeriod: '1800 – 1850',
    originRegion: 'Alemanha, Inglaterra, França',
    visualCharacteristics: [
      'Cores vibrantes e expressivas, pinceladas livres e emotivas',
      'O conceito do "Sublime": a natureza indômita e a insignificância humana',
      'Temas de paixão, revolução, mistério, sonho e folclore nacionalista'
    ],
    historicalContext: 'Reação contra o racionalismo frio da Revolução Industrial; ascensão dos sentimentos de identidade nacional e individualismoismo.',
    keyArtists: [
      { name: 'Caspar David Friedrich', role: 'Pintor da paisagem meditativa sublime', country: 'Alemanha' },
      { name: 'Eugène Delacroix', role: 'Mestre da cor vibrante e drama histórico', country: 'França' },
      { name: 'J.M.W. Turner', role: 'Pintor da luz atmosférica e tempestades', country: 'Inglaterra' },
      { name: 'Francisco de Goya', role: 'Visionário do drama e horror humano', country: 'Espanha' }
    ],
    famousWorks: [
      {
        id: 'liberdade-guiando-povo',
        title: 'A Liberdade Guiando o Povo',
        artist: 'Eugène Delacroix',
        year: '1830',
        imageUrl: 'https://images.unsplash.com/photo-1579783901467-31b604eac7a8?q=80&w=800&auto=format&fit=crop',
        description: 'Ícone apaixonado da revolução de julho em Paris com a figura alegórica da Liberdade.'
      },
      {
        id: 'caminhante-nevoeiro',
        title: 'O Caminhante Sobre o Mar de Névoa',
        artist: 'Caspar David Friedrich',
        year: '1818',
        imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop',
        description: 'A epitome do sentimento Romântico do Sublime e contempla-ção solitária da natureza colossal.'
      }
    ],
    influences: ['neoclassicismo', 'barroco'],
    influenced: ['realismo', 'impressionismo', 'simbolismo'],
    color: '#dc2626',
    summary: 'A exaltação da emoção individual, o drama revolucionário e a natureza sublime e tempestuosa.',
    tags: ['Delacroix', 'Friedrich', 'Turner', 'Goya', 'Sublime']
  },
  {
    id: 'realismo',
    name: 'Realismo',
    eraId: 'seculo-xix',
    startYear: 1848,
    endYear: 1880,
    displayPeriod: '1848 – 1880',
    originRegion: 'França',
    visualCharacteristics: [
      'Representação objetiva e sem filtros da classe trabalhadora e camponeses',
      'Rejeição da idealização acadêmica e do drama romântico',
      'Paleta terrosa, técnica direta e atenção ao detalhe social verídico'
    ],
    historicalContext: 'Revoluções de 1848 na Europa, consolidação do capitalismo industrial, surgimento do socialismo e da fotografia.',
    keyArtists: [
      { name: 'Gustave Courbet', role: 'Líder do movimento realista ("Pinte o que vê")', country: 'França' },
      { name: 'Jean-François Millet', role: 'Pintor dos camponeses dignificados', country: 'França' },
      { name: 'Honoré Daumier', role: 'Caricaturista e crítico social', country: 'França' },
      { name: 'Édouard Manet', role: 'Ponte crucial entre Realismo e Impressionismo', country: 'França' }
    ],
    famousWorks: [
      {
        id: 'courbet-enterro-ornans',
        title: 'Um Enterro em Ornans',
        artist: 'Gustave Courbet',
        year: '1849–1850',
        imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop',
        description: 'Tela monumental retratando um funeral provincial comum com o respeito anteriormente reservado aos reis.'
      }
    ],
    influences: ['romantismo'],
    influenced: ['impressionismo'],
    color: '#16a34a',
    summary: 'A vida real do trabalhador retratada sem idealizações mythologicas ou românticas.',
    tags: ['Courbet', 'Trabalhadores', 'Crítica Social', 'Fotografia']
  },
  {
    id: 'impressionismo',
    name: 'Impressionismo',
    eraId: 'seculo-xix',
    startYear: 1874,
    endYear: 1886,
    displayPeriod: '1874 – 1886',
    originRegion: 'Paris, França',
    visualCharacteristics: [
      'Pinceladas rápidas e visíveis para capturar a luz fugaz (plein air)',
      'Uso de cores puras justapostas sem misturar na paleta',
      'Temas de lazer urbano modernos, jardins luminosos e paisagens em constante mutação'
    ],
    historicalContext: 'A modernização de Paris por Haussmann, tintas em tubo portáteis, influência das estampas japonesas ukiyo-e e independização dos Salões Oficiais.',
    keyArtists: [
      { name: 'Claude Monet', role: 'Pai do Impressionismo e Mestre da luz', country: 'França' },
      { name: 'Pierre-Auguste Renoir', role: 'Pintor da alegria de viver e bailes', country: 'França' },
      { name: 'Edgar Degas', role: 'Observador mestre de bailarinas e movimento', country: 'França' },
      { name: 'Camille Pissarro', role: 'Patriarca do grupo impressionista', country: 'França' }
    ],
    famousWorks: [
      {
        id: 'impression-nascer-sol',
        title: 'Impressão, Nascer do Sol',
        artist: 'Claude Monet',
        year: '1872',
        imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop',
        description: 'A tela exposta em 1874 que batizou o movimento por meio do comentário irônico do crítico Louis Leroy.'
      },
      {
        id: 'bal-moulin-galette',
        title: 'O Baile no Moulin de la Galette',
        artist: 'Pierre-Auguste Renoir',
        year: '1876',
        imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop',
        description: 'Celebração cintilante da vida parisiense sob a luz filtrada pelas árvores em Montmartre.'
      }
    ],
    influences: ['realismo', 'romantismo'],
    influenced: ['pos-impressionismo', 'fauvismo'],
    color: '#059669',
    summary: 'Pintura ao ar livre capturando a luz instantânea e os momentos fugazes da vida moderna.',
    tags: ['Monet', 'Renoir', 'Degas', 'Luz Fugaz', 'Plein Air']
  },
  {
    id: 'pos-impressionismo',
    name: 'Pós-Impressionismo',
    eraId: 'seculo-xix',
    startYear: 1886,
    endYear: 1905,
    displayPeriod: '1886 – 1905',
    originRegion: 'França e Holanda',
    visualCharacteristics: [
      'Evolução para além da simples impressão óptica em direção à estrutura formal ou expressividade emocional',
      'Uso de contornos definidos, formas simplificadas e cores arbitrárias simbólicas',
      'Pontilhismo (Seurat) e pincelada emotiva em turbilhão (Van Gogh)'
    ],
    historicalContext: 'Fim do século XIX (Fin de Siècle), busca por significado interior, espiritual ou rigor geométrico diante da aceleração industrial.',
    keyArtists: [
      { name: 'Vincent van Gogh', role: 'Visionário do Expressionismo e cor emocional', country: 'Holanda / França' },
      { name: 'Paul Cézanne', role: 'Pai da pintura moderna e estrutura pré-cubista', country: 'França' },
      { name: 'Paul Gauguin', role: 'Pioneiro do Sintetismo e busca do exótico', country: 'França' },
      { name: 'Georges Seurat', role: 'Criador do Pontilhismo (Cromoluminarismo)', country: 'França' }
    ],
    famousWorks: [
      {
        id: 'noite-estrelada',
        title: 'A Noite Estrelada',
        artist: 'Vincent van Gogh',
        year: '1889',
        imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop',
        description: 'Visão cósmica e vibrante do céu noturno pintada no asilo de Saint-Rémy-de-Provence.'
      },
      {
        id: 'cezanne-mont-sainte-victoire',
        title: 'Mont Sainte-Victoire',
        artist: 'Paul Cézanne',
        year: '1902–1904',
        imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop',
        description: 'Análise geométrica da paisagem que abriu caminho direto para a invenção do Cubismo.'
      }
    ],
    influences: ['impressionismo'],
    influenced: ['cubismo', 'expressionismo', 'fauvismo'],
    color: '#0284c7',
    summary: 'A ponte seminal entre a impressão luminosa e a geometria de Cézanne e a paixão de Van Gogh.',
    tags: ['Van Gogh', 'Cézanne', 'Gauguin', 'Seurat', 'Pontilhismo']
  },
  {
    id: 'simbolismo',
    name: 'Simbolismo',
    eraId: 'seculo-xix',
    startYear: 1880,
    endYear: 1910,
    displayPeriod: '1880 – 1910',
    originRegion: 'França, Bélgica, Áustria',
    visualCharacteristics: [
      'Temas de sonhos, mitologia interior, mistério, erotismo e morte',
      'Rejeição do materialismo científico realista',
      'Linhas decorativas sinuosas e atmosferas de devaneio hipnótico'
    ],
    historicalContext: 'Poesia de Baudelaire, Mallarmé e Verlaine; reação psíquica contra o positivismo materialista do fim de século.',
    keyArtists: [
      { name: 'Gustave Moreau', role: 'Pintor de visões míticas ornamentadas', country: 'França' },
      { name: 'Odilon Redon', role: 'Visionário de sonhos a pastel e carvão', country: 'França' },
      { name: 'Gustav Klimt', role: 'Líder da Secessão de Viena e fase dourada', country: 'Áustria' }
    ],
    famousWorks: [
      {
        id: 'o-beijo-klimt',
        title: 'O Beijo',
        artist: 'Gustav Klimt',
        year: '1907–1908',
        imageUrl: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=800&auto=format&fit=crop',
        description: 'Pintura icônica em folha de ouro unindo padrão ornamentado, erotismo e espiritualidade amorosa.'
      },
      {
        id: 'redon-olho-balao',
        title: 'O Olho Como um Balão Bizarro',
        artist: 'Odilon Redon',
        year: '1882',
        imageUrl: 'https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?q=80&w=800&auto=format&fit=crop',
        description: 'Visão mística do simbolismo floral e onírico, explorando os recessos secretos do inconsciente e dos sonhos.'
      }
    ],
    influences: ['romantismo'],
    influenced: ['art-nouveau', 'surrealismo'],
    color: '#7c3aed',
    summary: 'A imaginação poética dos sonhos, mitos misteriosos e o luxo dourado da Secessão de Viena.',
    tags: ['Klimt', 'Sonhos', 'Misticismo', 'Secessão de Viena']
  },
  {
    id: 'art-nouveau',
    name: 'Art Nouveau',
    eraId: 'seculo-xix',
    startYear: 1890,
    endYear: 1910,
    displayPeriod: '1890 – 1910',
    originRegion: 'Bélgica, França, Áustria, Catalunha',
    visualCharacteristics: [
      'Linhas orgânicas contínuas inspiradas em plantas e flores ("chicotada")',
      'Integração total das artes (arquitetura, vitrais, joias, cartazes e mobiliário)',
      'Uso de ferro forjado curvado e mosaicos estilizados'
    ],
    historicalContext: 'A Belle Époque; tentativa de unificar arte fina e artesanato funcional contra a fealdade da produção fabril em massa.',
    keyArtists: [
      { name: 'Alphonse Mucha', role: 'Mestre dos cartazes gráficos de elegância feminina', country: 'Chéquia / França' },
      { name: 'Antoni Gaudí', role: 'Arquiteto genial da arquitetura orgânica catalã', country: 'Espanha' },
      { name: 'Victor Horta', role: 'Pioneiro da arquitetura em ferro e vidro Art Nouveau', country: 'Bélgica' }
    ],
    famousWorks: [
      {
        id: 'sagrada-familia',
        title: 'Templo Expiatório da Sagrada Família',
        artist: 'Antoni Gaudí',
        year: '1882–Presente',
        imageUrl: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop',
        description: 'Catedral orgânica incomparável em Barcelona inspirada no crescimento das florestas e na natureza.'
      }
    ],
    influences: ['simbolismo'],
    influenced: ['art-deco', 'bauhaus'],
    color: '#0d9488',
    summary: 'Linhas fluídas inspiradas na natureza integrando arquitetura, joias e cartazes gráficos.',
    tags: ['Gaudí', 'Mucha', 'Belle Époque', 'Arquitetura Orgânica']
  },
  {
    id: 'fauvismo',
    name: 'Fauvismo',
    eraId: 'vanguardas-seculo-xx',
    startYear: 1905,
    endYear: 1910,
    displayPeriod: '1905 – 1910',
    originRegion: 'Paris, França',
    visualCharacteristics: [
      'Uso da cor pura e estridente diretamente do tubo, sem compromisso com a realidade física',
      'Pinceladas vigorosas, simplificação de formas e abandono do claro-escuro acadêmico',
      'Exaltação da alegria de viver e da sensação cromática emotiva imediata'
    ],
    historicalContext: 'Escândalo no Salão de Outono de 1905 em Paris, onde o crítico Louis Vauxcelles chamou os artistas de "les fauves" (as feras selvagens) diante de suas cores incandescentes.',
    keyArtists: [
      { name: 'Henri Matisse', role: 'Líder indiscutível e mestre do desenho e da cor', country: 'França' },
      { name: 'André Derain', role: 'Pintor de paisagens fluviais incendiárias', country: 'França' },
      { name: 'Maurice de Vlaminck', role: 'Pintor impulsivo do ritmo cromático emotivo', country: 'França' }
    ],
    famousWorks: [
      {
        id: 'matisse-danse',
        title: 'A Dança (La Danse)',
        artist: 'Henri Matisse',
        year: '1910',
        imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop',
        description: 'Cinco figuras nuas dançando em roda sob um céu azul cobalto e colina verde esmeralda com dinamismo rítmico puro.'
      },
      {
        id: 'matisse-mulher-chapeu',
        title: 'Mulher com Chapéu',
        artist: 'Henri Matisse',
        year: '1905',
        imageUrl: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=800&auto=format&fit=crop',
        description: 'Retrato de Amélie Matisse com pinceladas livres e contrastes de verde, vermelho e amarelo que causaram choque no Salão de 1905.'
      }
    ],
    influences: ['pos-impressionismo', 'pontilhismo'],
    influenced: ['expressionismo', 'cubismo', 'abstracionismo'],
    color: '#ea580c',
    summary: 'A explosão libertadora da cor pura e vibrante, rompendo com o realismo acadêmico sob o gênio de Matisse.',
    tags: ['Matisse', 'Cor Pura', 'Les Fauves', 'A Dança', 'Vanguardas']
  },
  {
    id: 'expressionismo',
    name: 'Expressionismo',
    eraId: 'vanguardas-seculo-xx',
    startYear: 1905,
    endYear: 1925,
    displayPeriod: '1905 – 1925',
    originRegion: 'Alemanha e Noruega',
    visualCharacteristics: [
      'Distorção emocional e contornos angulares agressivos',
      'Cores violentas e não naturalistas projetando angústia psíquica',
      'Grupos vanguardistas: Die Brücke (A Ponte) e Der Blaue Reiter (O Cavaleiro Azul)'
    ],
    historicalContext: 'Alienação urbana nas metrópoles industrializadas, tensões que levaram à Primeira Guerra Mundial e descoberta do inconsciente por Freud.',
    keyArtists: [
      { name: 'Edvard Munch', role: 'Precursor do horror existencial moderno', country: 'Noruega' },
      { name: 'Ernst Ludwig Kirchner', role: 'Líder do Die Brücke em Berlim', country: 'Alemanha' },
      { name: 'Wassily Kandinsky', role: 'Pioneiro da abstração espiritual em Der Blaue Reiter', country: 'Rússia / Alemanha' },
      { name: 'Egon Schiele', role: 'Mestre do traço tenso e figuras atormentadas', country: 'Áustria' }
    ],
    famousWorks: [
      {
        id: 'o-grito',
        title: 'O Grito',
        artist: 'Edvard Munch',
        year: '1893',
        imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop',
        description: 'O supremo símbolo moderno da ansiedade existencial com o céu sangrento e a figura semipresencial.'
      }
    ],
    influences: ['pos-impressionismo', 'simbolismo'],
    influenced: ['dadaismo', 'abstracionismo'],
    color: '#dc2626',
    summary: 'A distorção dramática da forma e cores intensas expressando a ansiedade existencial do homem moderno.',
    tags: ['Munch', 'Kirchner', 'Schiele', 'Kandinsky', 'Angústia']
  },
  {
    id: 'cubismo',
    name: 'Cubismo',
    eraId: 'vanguardas-seculo-xx',
    startYear: 1907,
    endYear: 1914,
    displayPeriod: '1907 – 1914',
    originRegion: 'Paris, França',
    visualCharacteristics: [
      'Decomposição do objeto em planos geométricos e facetas simultâneas',
      'Abandono da perspectiva tradicional de ponto de vista único',
      'Fases: Cubismo Analítico (fração fragmentada monocromática) e Cubismo Sintético (colagens, jornais e cor)'
    ],
    historicalContext: 'Teoria da Relatividade de Einstein, influência das máscaras tradicionais africanas e ritmo acelerado das metrópoles.',
    keyArtists: [
      { name: 'Pablo Picasso', role: 'Co-fundador genial do Cubismo', country: 'Espanha / França' },
      { name: 'Georges Braque', role: 'Co-fundador da análise dos planos', country: 'França' },
      { name: 'Juan Gris', role: 'Mestre do Cubismo Sintético harmonioso', country: 'Espanha / França' }
    ],
    famousWorks: [
      {
        id: 'les-demoiselles-avignon',
        title: 'Les Demoiselles d\'Avignon',
        artist: 'Pablo Picasso',
        year: '1907',
        imageUrl: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=800&auto=format&fit=crop',
        description: 'A tela que abalou a história da arte ao destruir a perspectiva ilusionista com figuras angulares e máscaras afrotribais.'
      },
      {
        id: 'guernica',
        title: 'Guernica',
        artist: 'Pablo Picasso',
        year: '1937',
        imageUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=800&auto=format&fit=crop',
        description: 'Mural monumental cubista em preto e branco denunciando o bombardeio nazista à cidade basca durante a Guerra Civil Espanhola.'
      }
    ],
    influences: ['pos-impressionismo', 'africa'],
    influenced: ['futurismo', 'dadaismo', 'abstracionismo', 'modernismo'],
    color: '#2563eb',
    summary: 'A fragmentação geométrica radical dos objetos vistos de múltiplos ângulos simultâneos.',
    tags: ['Picasso', 'Braque', 'Colagem', 'Perspectiva Múltipla']
  },
  {
    id: 'futurismo',
    name: 'Futurismo',
    eraId: 'vanguardas-seculo-xx',
    startYear: 1909,
    endYear: 1916,
    displayPeriod: '1909 – 1916',
    originRegion: 'Itália',
    visualCharacteristics: [
      'Representação do movimento dinâmico, velocidade, luz e máquinas industrializadas',
      'Linhas de força e multiplicação sequencial dos membros do corpo em ação',
      'Tipografia experimental e manifesto provocativo'
    ],
    historicalContext: 'Publicação do Manifesto Futurista por Marinetti em 1909; culto à velocidade, aos carros, aviões e à tecnologia moderna na Itália.',
    keyArtists: [
      { name: 'Umberto Boccioni', role: 'Escultor e pintor das formas no espaço', country: 'Itália' },
      { name: 'Giacomo Balla', role: 'Estudioso da decomposição do movimento rápido', country: 'Itália' },
      { name: 'Carlo Carrà', role: 'Pintor do dinamismo urbano', country: 'Itália' }
    ],
    famousWorks: [
      {
        id: 'boccioni-formas-continuidade',
        title: 'Formas Únicas de Continuidade no Espaço',
        artist: 'Umberto Boccioni',
        year: '1913',
        imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop',
        description: 'Escultura em bronze capturando uma figura humana marchando em dinamismo fluído com o vento e a velocidade.'
      }
    ],
    influences: ['cubismo'],
    influenced: ['dadaismo', 'art-deco'],
    color: '#d97706',
    summary: 'O culto à velocidade, tecnologia, máquinas e à decomposição do movimento dinâmico no espaço.',
    tags: ['Velocidade', 'Boccioni', 'Máquinas', 'Dinamismo']
  },
  {
    id: 'dadaismo',
    name: 'Dadaísmo',
    eraId: 'vanguardas-seculo-xx',
    startYear: 1916,
    endYear: 1923,
    displayPeriod: '1916 – 1923',
    originRegion: 'Zurique (Suiça), Nova York, Paris, Berlim',
    visualCharacteristics: [
      'Ready-mades (objetos industriais do cotidiano descontextualizados como arte)',
      'Colagens aleatórias, fotomontagens e poesia fonética absurda',
      'Provocação antiarte, anarquia estética e humor mordaz'
    ],
    historicalContext: 'Fundação do Cabaret Voltaire em Zurique por refugiados traumatizados pela estupidez e devastação da Primeira Guerra Mundial.',
    keyArtists: [
      { name: 'Marcel Duchamp', role: 'Genial provocador e inventor dos ready-mades', country: 'França / EUA' },
      { name: 'Hannah Höch', role: 'Pioneira radical da fotomontagem política', country: 'Alemanha' },
      { name: 'Man Ray', role: 'Fotógrafo e criador dos rayogramas', country: 'EUA / França' },
      { name: 'Tristan Tzara', role: 'Poeta e autor do manifesto dadaísta', country: 'Romênia / França' }
    ],
    famousWorks: [
      {
        id: 'duchamp-fonte',
        title: 'A Fonte (Fountain)',
        artist: 'Marcel Duchamp',
        year: '1917',
        imageUrl: 'https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop',
        description: 'O mictório assinado como "R. Mutt" que redefiniu o conceito de arte ao priorizar a ideia conceitual sobre a manufatura física.'
      },
      {
        id: 'hannah-hoch-colagem',
        title: 'Corte com a Faca de Cozinha Dada',
        artist: 'Hannah Höch',
        year: '1919',
        imageUrl: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=800&auto=format&fit=crop',
        description: 'Fotomontagem satírica monumental recortando figuras políticas, engrenagens industriais e manifesto dadaísta.'
      }
    ],
    influences: ['cubismo', 'futurismo'],
    influenced: ['surrealismo', 'arte-conceitual', 'pop-art'],
    color: '#be123c',
    summary: 'Protesto anárquico antiarte contra os horrores da guerra através do absurdo e dos ready-mades de Duchamp.',
    tags: ['Duchamp', 'Ready-made', 'Absurdo', 'Fotomontagem']
  },
  {
    id: 'surrealismo',
    name: 'Surrealismo',
    eraId: 'vanguardas-seculo-xx',
    startYear: 1924,
    endYear: 1966,
    displayPeriod: '1924 – 1966',
    originRegion: 'Paris, França',
    visualCharacteristics: [
      'Ilustração minuciosa do mundo dos sonhos, delírios e fantasias inconscientes',
      'Justaposição bizarra e poética de objetos desconexos',
      'Técnicas de automatismo psíquico sem controle racional'
    ],
    historicalContext: 'Manifesto Surrealista de André Breton (1924); impacto profundo da psicanálise de Sigmund Freud sobre os sonhos e o inconsciente.',
    keyArtists: [
      { name: 'Salvador Dalí', role: 'Pintor do método paranoico-crítico', country: 'Espanha' },
      { name: 'René Magritte', role: 'Mestre da ilusão conceitual e poética', country: 'Bélgica' },
      { name: 'Frida Kahlo', role: 'Pintora do simbolismo doloroso e identidade', country: 'México' },
      { name: 'Joan Miró', role: 'Pintor de formas biomórficas e lirismo poético', country: 'Espanha' },
      { name: 'Max Ernst', role: 'Inovador de frottage e colagens oníricas', country: 'Alemanha / França' }
    ],
    famousWorks: [
      {
        id: 'persistencia-memoria',
        title: 'A Persistência da Memória',
        artist: 'Salvador Dalí',
        year: '1931',
        imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop',
        description: 'Pintura surrealista com os célebres relógios derretidos em uma paisagem desértica catalã.'
      },
      {
        id: 'traicao-imagens',
        title: 'A Traição das Imagens (Isto não é um cachimbo)',
        artist: 'René Magritte',
        year: '1929',
        imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop',
        description: 'Questionamento genial sobre a representação e a linguagem gráfica contra a realidade.'
      }
    ],
    influences: ['dadaismo', 'simbolismo'],
    influenced: ['pop-art', 'arte-digital'],
    color: '#7c3aed',
    summary: 'A libertação do inconsciente, psicanálise freudiana e a pintura precisa dos sonhos oníricos.',
    tags: ['Dalí', 'Magritte', 'Frida Kahlo', 'Sonhos', 'Inconsciente']
  },
  {
    id: 'bauhaus',
    name: 'Bauhaus',
    eraId: 'vanguardas-seculo-xx',
    startYear: 1919,
    endYear: 1933,
    displayPeriod: '1919 – 1933',
    originRegion: 'Weimar e Dessau, Alemanha',
    visualCharacteristics: [
      'Princípio "A forma segue a função" (Form follows function)',
      'Minimalismo geométrico limpo, tipografia sem serifa e cores primárias',
      'União entre artes visuais, design industrial, artes gráficas e arquitetura'
    ],
    historicalContext: 'República de Weimar na Alemanha pós-Primeira Guerra. Escola revolucionária fundada por Walter Gropius e fechada pelos nazistas em 1933.',
    keyArtists: [
      { name: 'Walter Gropius', role: 'Arquiteto fundador da Bauhaus', country: 'Alemanha' },
      { name: 'Wassily Kandinsky', role: 'Professor e teórico da cor e forma', country: 'Rússia / Alemanha' },
      { name: 'Paul Klee', role: 'Pintor e teórico pedagógico da linha', country: 'Suíça' },
      { name: 'Mies van der Rohe', role: 'Último diretor e arquiteto ("Less is more")', country: 'Alemanha / EUA' }
    ],
    famousWorks: [
      {
        id: 'bauhaus-dessau',
        title: 'Edifício da Escola Bauhaus em Dessau',
        artist: 'Walter Gropius',
        year: '1925–1926',
        imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop',
        description: 'Marco fundador da arquitetura moderna funcional em aço, vidro e concreto.'
      }
    ],
    influences: ['art-nouveau', 'abstracionismo'],
    influenced: ['minimalismo', 'art-deco', 'arte-digital'],
    color: '#0284c7',
    summary: 'A lendária escola alemã que unificou arte, design industrial, funcionalismo e arquitetura moderna.',
    tags: ['Alemanha', 'Gropius', 'Mies van der Rohe', 'Design', 'Funcionalismo']
  },
  {
    id: 'art-deco',
    name: 'Art Déco',
    eraId: 'vanguardas-seculo-xx',
    startYear: 1920,
    endYear: 1939,
    displayPeriod: '1920 – 1939',
    originRegion: 'França, EUA',
    visualCharacteristics: [
      'Formas geométricas estilizadas, ziguezagues, simetria e padrões aerodinâmicos',
      'Materiais luxuosos: cromo, bronze, laca, baquelite, vidro e mármore',
      'Opulência decorativa elegante inspirada nas descobertas arqueológicas e na máquina'
    ],
    historicalContext: 'Os "Loucos Anos 20" (Roaring Twenties); otimismo tecnológico do entreguerra e glamour moderno representado em arranha-céus.',
    keyArtists: [
      { name: 'Tamara de Lempicka', role: 'Pintora do glamour neocubista refinado', country: 'Polônia / França' },
      { name: 'Erté (Romain de Tirtoff)', role: 'Ilustrador e designer de moda glamourosa', country: 'Rússia / França' },
      { name: 'William Van Alen', role: 'Arquiteto do Chrysler Building', country: 'EUA' }
    ],
    famousWorks: [
      {
        id: 'chrysler-building',
        title: 'Chrysler Building em Nova York',
        artist: 'William Van Alen',
        year: '1930',
        imageUrl: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?q=80&w=800&auto=format&fit=crop',
        description: 'Arranha-céu ícone em Nova York com agulha e ornamento de coroas radiantes em aço inoxidável.'
      },
      {
        id: 'cristo-redentor',
        title: 'Cristo Redentor no Rio de Janeiro',
        artist: 'Paul Landowski e Heitor da Silva Costa',
        year: '1922–1931',
        imageUrl: 'https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?q=80&w=800&auto=format&fit=crop',
        description: 'Maior escultura monumental em estilo Art Déco do mundo, no topo do Corcovado no Brasil.'
      }
    ],
    influences: ['cubismo', 'futurismo', 'art-nouveau'],
    influenced: ['pop-art', 'minimalismo'],
    color: '#ca8a04',
    summary: 'Glamour elegante das formas geométricas dos anos 20 e 30, de Nova York ao Cristo Redentor no Brasil.',
    tags: ['Glamour', 'Arranha-céus', 'Cristo Redentor', 'Chrysler']
  },
  {
    id: 'modernismo',
    name: 'Modernismo (Brasil e Internacional)',
    eraId: 'vanguardas-seculo-xx',
    startYear: 1922,
    endYear: 1960,
    displayPeriod: '1922 – 1960',
    originRegion: 'Brasil, América Latina e Europa',
    visualCharacteristics: [
      'Ruptura com o academicismo e valorização das raízes e identidades culturais locais',
      'Antropofagia cultural (deglutir influências europeias e reinterpretar com brasilidade)',
      'Arquitetura moderna de curvas arrojadas (Oscar Niemeyer)'
    ],
    historicalContext: 'Semana de Arte Moderna de 1922 no Teatro Municipal de São Paulo; busca pela emancipação cultural e construção de uma identidade nacional moderna.',
    keyArtists: [
      { name: 'Tarsila do Amaral', role: 'Pintora ícone do movimento Pau-Brasil e Antropofágico', country: 'Brasil' },
      { name: 'Cândido Portinari', role: 'Pintor dos trabalhadores e do povo brasileiro', country: 'Brasil' },
      { name: 'Anita Malfatti', role: 'Pioneira da pintura expressionista no Brasil', country: 'Brasil' },
      { name: 'Oscar Niemeyer', role: 'Genial arquiteto das curvas em concreto armado', country: 'Brasil' }
    ],
    famousWorks: [
      {
        id: 'abaporu',
        title: 'Abaporu',
        artist: 'Tarsila do Amaral',
        year: '1928',
        imageUrl: 'https://images.unsplash.com/photo-1576769267415-9642010aa962?q=80&w=800&auto=format&fit=crop',
        description: 'Símbolo supremo do Movimento Antropofágico brasileiro, retratando o "homem que come gente" com pés e mãos colossais.'
      },
      {
        id: 'brasilia-niemeyer',
        title: 'Catedral Metropolitana de Brasília',
        artist: 'Oscar Niemeyer',
        year: '1958–1970',
        imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop',
        description: 'Obra-prima da arquitetura moderna mundial em formato de coroa hiperbólica de concreto e vitrais azuis.'
      }
    ],
    influences: ['cubismo', 'expressionismo', 'surrealismo'],
    influenced: ['postmodernismo', 'arte-conceitual'],
    color: '#16a34a',
    summary: 'A revolução cultural da Semana de 1922 no Brasil, a Antropofagia de Tarsila e as curvas de Niemeyer.',
    tags: ['Brasil 1922', 'Tarsila', 'Niemeyer', 'Abaporu', 'Antropofagia']
  },
  {
    id: 'abstracionismo',
    name: 'Abstracionismo (Lírico e Geométrico)',
    eraId: 'vanguardas-seculo-xx',
    startYear: 1910,
    endYear: 1950,
    displayPeriod: '1910 – 1950',
    originRegion: 'Rússia, Holanda, Alemanha, França',
    visualCharacteristics: [
      'Rejeição total da figuração ou cópia da realidade visível',
      'Abstração Lírica/Espiritual: ritmos intuitivos, cores poéticas e improvisações (Kandinsky)',
      'Abstração Geométrica (De Stijl / Neoplasticismo): linhas pretas ortogonais e cores primárias puras (Mondrian)'
    ],
    historicalContext: 'Pesquisas teóricas sobre a música como arte não figurativa, buscando a essência pura do espírito e da ordem cósmica.',
    keyArtists: [
      { name: 'Wassily Kandinsky', role: 'Criador da primeira aquarela abstrata (1910)', country: 'Rússia / Alemanha' },
      { name: 'Piet Mondrian', role: 'Líder do Neoplasticismo e grade ortogonal', country: 'Holanda' },
      { name: 'Kazimir Malevich', role: 'Criador do Suprematismo (Quadrado Negro)', country: 'Rússia' },
      { name: 'Hilma af Klint', role: 'Pioneira mística da abstração pictórica', country: 'Suécia' }
    ],
    famousWorks: [
      {
        id: 'composicao-amarelo-azul-vermelho',
        title: 'Composição com Vermelho, Azul e Amarelo',
        artist: 'Piet Mondrian',
        year: '1930',
        imageUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=800&auto=format&fit=crop',
        description: 'A essência da pureza neoplasticista com a grade ortogonal preta e blocos de cores primárias.'
      }
    ],
    influences: ['cubismo', 'expressionismo'],
    influenced: ['minimalismo', 'pop-art', 'arte-digital'],
    color: '#3b82f6',
    summary: 'A libertação radical da arte da representação da realidade: da intuição poética à grade pura de Mondrian.',
    tags: ['Mondrian', 'Kandinsky', 'Malevich', 'Cores Primárias', 'De Stijl']
  },
  {
    id: 'expressionismo-abstrato',
    name: 'Expressionismo Abstrato (Escola de Nova York)',
    eraId: 'pos-guerra-conceitual',
    startYear: 1943,
    endYear: 1965,
    displayPeriod: '1943 – 1965',
    originRegion: 'Nova York, EUA',
    visualCharacteristics: [
      'Action Painting (gotejamento, respingos e gestualidade enérgica com o corpo)',
      'Color Field (campos de cor monumentais meditativos e contemplativos)',
      'Escala monumental de telas preenchendo a visão periférica do observador',
      'Expressão psicológica direta sem objetos figurativos'
    ],
    historicalContext: 'Transferência do eixo mundial da arte de Paris para Nova York após a Segunda Guerra Mundial; existencialismo e liberdade individual.',
    keyArtists: [
      { name: 'Jackson Pollock', role: 'Mestre da técnica do gotejamento dinâmico (Drip Painting)', country: 'EUA' },
      { name: 'Mark Rothko', role: 'Mestre dos campos de cor luminosos e transcendentais', country: 'EUA' },
      { name: 'Willem de Kooning', role: 'Pintor de pinceladas viscerais e figuras femininas dilaceradas', country: 'Holanda / EUA' },
      { name: 'Lee Krasner', role: 'Pioneira do gestualismo abstrato e colagens monumentais', country: 'EUA' }
    ],
    famousWorks: [
      {
        id: 'pollock-convergence',
        title: 'Number 1A / Convergence',
        artist: 'Jackson Pollock',
        year: '1948',
        imageUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=800&auto=format&fit=crop',
        description: 'Trama rítmica estonteante de esmaltes industriais aplicados no chão com dança gestual por todo o espaço da tela.'
      },
      {
        id: 'rothko-no-14',
        title: 'No. 14 (Horizontes Luminosos)',
        artist: 'Mark Rothko',
        year: '1960',
        imageUrl: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop',
        description: 'Camadas flutuantes de pigmentos aveludados evocando comoção espiritual e contemplação íntima profunda.'
      }
    ],
    influences: ['surrealismo', 'abstracionismo', 'expressionismo'],
    influenced: ['pop-art', 'minimalismo', 'arte-conceitual'],
    color: '#0284c7',
    summary: 'A energia física visceral do gotejamento de Pollock e o êxtase meditativo dos campos de cor de Rothko.',
    tags: ['Pollock', 'Rothko', 'Action Painting', 'Color Field', 'Escola de Nova York']
  },
  {
    id: 'pop-art',
    name: 'Pop Art',
    eraId: 'pos-guerra-conceitual',
    startYear: 1956,
    endYear: 1975,
    displayPeriod: '1956 – 1975',
    originRegion: 'Inglaterra e Nova York (EUA)',
    visualCharacteristics: [
      'Apropriação da cultura de massa, histórias em quadrinhos, rótulos e celebridades',
      'Serigrafia industrial, cores fluorescentes e estética de propaganda comercial',
      'Ironia, apagamento da distinção entre alta arte e cultura popular'
    ],
    historicalContext: 'Boom econômico do pós-guerra, consumo de massa, auge da televisão, Hollywood e a sociedade do espetáculo.',
    keyArtists: [
      { name: 'Andy Warhol', role: 'Rei da Pop Art e fundador da The Factory', country: 'EUA' },
      { name: 'Roy Lichtenstein', role: 'Pintor de quadrinhos ampliados com pontos Ben-Day', country: 'EUA' },
      { name: 'Richard Hamilton', role: 'Pioneiro da Pop Art britânica', country: 'Inglaterra' },
      { name: 'Keith Haring', role: 'Artista de rua e iconografia vibrante', country: 'EUA' }
    ],
    famousWorks: [
      {
        id: 'campbells-soup-warhol',
        title: 'Latas de Sopa Campbell',
        artist: 'Andy Warhol',
        year: '1962',
        imageUrl: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=800&auto=format&fit=crop',
        description: '32 telas reproduzindo em série as latas de sopa industriais, elevando o objeto de supermercado ao museu.'
      },
      {
        id: 'marilyn-diptych',
        title: 'Díptico de Marilyn',
        artist: 'Andy Warhol',
        year: '1962',
        imageUrl: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=800&auto=format&fit=crop',
        description: 'Serigrafia colorida em massa celebrando e problematizando o culto das celebridades tragicamente desaparecidas.'
      }
    ],
    influences: ['dadaismo', 'art-deco'],
    influenced: ['pós-modernismo', 'arte-digital', 'internet-art'],
    color: '#ec4899',
    summary: 'A exaltação irônica e serigráfica do consumo de massa, quadrinhos e celebridades hollywoodianas.',
    tags: ['Warhol', 'Lichtenstein', 'Sopa Campbell', 'Consumo', 'Quadrinhos']
  },
  {
    id: 'minimalismo',
    name: 'Minimalismo',
    eraId: 'pos-guerra-conceitual',
    startYear: 1960,
    endYear: 1975,
    displayPeriod: '1960 – 1975',
    originRegion: 'Nova York, EUA',
    visualCharacteristics: [
      'Uso de formas geométricas tridimensionais puras (cubos, grades, retângulos)',
      'Superfícies industriais sem marcas de pincel, sem ilusão nem narrativa',
      'Redução absoluta: "O que você vê é o que você vê" (Frank Stella)'
    ],
    historicalContext: 'Reação contra o excesso emocional e autoral do Expressionismo Abstrato; busca por presença espacial física pura.',
    keyArtists: [
      { name: 'Donald Judd', role: 'Mestre das caixas metálicas industriais em série', country: 'EUA' },
      { name: 'Dan Flavin', role: 'Escultor com tubos de luz fluorescente colorida', country: 'EUA' },
      { name: 'Frank Stella', role: 'Pintor de listras pretas e telas moldadas', country: 'EUA' },
      { name: 'Sol LeWitt', role: 'Pioneiro das estruturas cúbicas e instruções de desenho', country: 'EUA' }
    ],
    famousWorks: [
      {
        id: 'judd-untitled-boxes',
        title: 'Sem Título (Caixas de Alumínio)',
        artist: 'Donald Judd',
        year: '1969',
        imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop',
        description: 'Unidades tridimensionais idênticas dispostas em intervalos verticais matemáticos na parede do museu.'
      }
    ],
    influences: ['bauhaus', 'abstracionismo'],
    influenced: ['arte-conceitual', 'arte-digital'],
    color: '#475569',
    summary: 'Estruturas geométricas industriais sem ornamentos, onde a forma e o espaço físico são absolutos.',
    tags: ['Donald Judd', 'Geometria Pura', 'Menos é Mais', 'Escultura']
  },
  {
    id: 'neoconcretismo',
    name: 'Neoconcretismo & Tropicália',
    eraId: 'pos-guerra-conceitual',
    startYear: 1959,
    endYear: 1970,
    displayPeriod: '1959 – 1970',
    originRegion: 'Rio de Janeiro e São Paulo, Brasil',
    visualCharacteristics: [
      'Ruptura com o racionalismo mecanicista e geométrico do Concretismo ortodoxo',
      'Obras participativas e sensoriais ativadas pelo toque e pela ação do espectador (o "não-objeto")',
      'Uso de planos dobráveis de alumínio, tecidos vestidos (Parangolés) e caixas táteis',
      'Fusão de vanguarda estética com a cultura popular brasileira e o tropicalismo'
    ],
    historicalContext: 'Manifesto Neoconcreto de 1959 escrito por Ferreira Gullar no Jornal do Brasil; apogeu criativo interrompido pelo golpe militar de 1964 e o endurecimento do AI-5 (1968).',
    keyArtists: [
      { name: 'Lygia Clark', role: 'Criadora dos "Bichos" de alumínio articuláveis e da arte sensorial', country: 'Brasil' },
      { name: 'Hélio Oiticica', role: 'Criador dos "Parangolés", "Penetráveis" e da instalação Tropicália', country: 'Brasil' },
      { name: 'Lygia Pape', role: 'Autora do "Livro da Criação" e performances urbanas participativas', country: 'Brasil' },
      { name: 'Amilcar de Castro', role: 'Escultor do corte e dobra em chapas maciças de aço', country: 'Brasil' }
    ],
    famousWorks: [
      {
        id: 'lygia-clark-bicho',
        title: 'Bicho - Pássaro do Espaço',
        artist: 'Lygia Clark',
        year: '1960',
        imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop',
        description: 'Escultura geométrica em placas articuladas de alumínio que só existe plenamente através da manipulação do participante.'
      },
      {
        id: 'oiticica-parangole',
        title: 'Parangolé P4 Capa 1',
        artist: 'Hélio Oiticica',
        year: '1964',
        imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop',
        description: 'Manto de tecidos coloridos, faixas e pigmentos que se transforma em pintura viva em movimento quando vestido por corpos que dançam.'
      }
    ],
    influences: ['abstracionismo', 'modernismo'],
    influenced: ['arte-conceitual', 'pos-modernismo'],
    color: '#059669',
    summary: 'A revolução sensorial brasileira onde o espectador toca, veste e cocria a obra de arte.',
    tags: ['Lygia Clark', 'Hélio Oiticica', 'Parangolé', 'Bichos', 'Neoconcretismo', 'Brasil']
  },
  {
    id: 'arte-conceitual',
    name: 'Arte Conceitual',
    eraId: 'pos-guerra-conceitual',
    startYear: 1965,
    endYear: 1980,
    displayPeriod: '1965 – 1980',
    originRegion: 'EUA, Europa, Brasil',
    visualCharacteristics: [
      'A ideia ou conceito subjacente é mais importante do que o objeto físico final',
      'Uso de texto, fotografias, documentos, instruções escritas e instalações',
      'Desmaterialização da arte e contestação do mercado tradicional de galerias'
    ],
    historicalContext: 'Movimentos sociais de 1968, Guerra do Vietnã, contestação da mercantilização da arte e surgimento da performance.',
    keyArtists: [
      { name: 'Joseph Kosuth', role: 'Autor da obra axiomática "Uma e Três Cadeiras"', country: 'EUA' },
      { name: 'Cildo Meireles', role: 'Pioneiro brasileiro de circuitos conceituais em moedas e notas', country: 'Brasil' },
      { name: 'Sol LeWitt', role: 'Teórico da arte conceitual ("A ideia torna-se uma máquina que faz a arte")', country: 'EUA' },
      { name: 'Lygia Clark', role: 'Pioneira da arte sensorial e participativa dos Bichos', country: 'Brasil' },
      { name: 'Hélio Oiticica', role: 'Criador dos Parangolés e do Neoconcretismo', country: 'Brasil' }
    ],
    famousWorks: [
      {
        id: 'kosuth-tres-cadeiras',
        title: 'Uma e Três Cadeiras',
        artist: 'Joseph Kosuth',
        year: '1965',
        imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop',
        description: 'Exposição simultânea de uma cadeira física, uma foto da cadeira e a definição do dicionário da palavra "cadeira".'
      },
      {
        id: 'cildo-insercoes-coca-cola',
        title: 'Inserções em Circuitos Ideológicos',
        artist: 'Cildo Meireles',
        year: '1970',
        imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop',
        description: 'Garrafas de Coca-Cola gravadas com mensagens políticas críticas e recolocadas em circulação na ditadura.'
      }
    ],
    influences: ['dadaismo', 'minimalismo'],
    influenced: ['pós-modernismo', 'internet-art'],
    color: '#8b5cf6',
    summary: 'A primazia da ideia sobre a matéria física, desmaterialização do objeto e participação crítica.',
    tags: ['Kosuth', 'Cildo Meireles', 'Ideia', 'Desmaterialização', 'Brasil']
  },
  {
    id: 'pos-modernismo',
    name: 'Pós-Modernismo',
    eraId: 'pos-guerra-conceitual',
    startYear: 1975,
    endYear: 2000,
    displayPeriod: '1975 – 2000',
    originRegion: 'Global',
    visualCharacteristics: [
      'Apropriação, pastiche, ecletismo e citação histórica sem hierarquia',
      'Desconstrução de grandes narrativas e verdades universais',
      'Fusão de alta cultura e baixa cultura, humor, ironia e pluralismo'
    ],
    historicalContext: 'A Era da Informação, globalização, sociedade de consumo pós-industrial e surgimento da cultura de massa hiper-conectada.',
    keyArtists: [
      { name: 'Jeff Koons', role: 'Pintor e escultor dos ícones kitsch brilhantes', country: 'EUA' },
      { name: 'Cindy Sherman', role: 'Fotógrafa de autorretratos desconstruindo estereótipos cinematográficos', country: 'EUA' },
      { name: 'Jean-Michel Basquiat', role: 'Genial neo-expressionista urbano do grafite de Nova York', country: 'EUA' },
      { name: 'Barbara Kruger', role: 'Artista gráfica de slogans feministas e críticos', country: 'EUA' }
    ],
    famousWorks: [
      {
        id: 'basquiat-untilted-skull',
        title: 'Sem Título (Skull)',
        artist: 'Jean-Michel Basquiat',
        year: '1981',
        imageUrl: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=800&auto=format&fit=crop',
        description: 'Tela visceral unindo anatomia, grafite urbano, simbolismo de coroas e energia neo-expressionista.'
      },
      {
        id: 'cindy-sherman-untitled',
        title: 'Untitled Film Still #21',
        artist: 'Cindy Sherman',
        year: '1978',
        imageUrl: 'https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?q=80&w=800&auto=format&fit=crop',
        description: 'Fotografia concebida como autorretrato desconstruindo estereótipos cinematográficos femininos do cinema noir.'
      }
    ],
    influences: ['pop-art', 'arte-conceitual'],
    influenced: ['arte-digital', 'internet-art'],
    color: '#6366f1',
    summary: 'Apropriação, pluralismo cultural, o grafite de Basquiat e a desconstrução das verdades absolutas.',
    tags: ['Basquiat', 'Cindy Sherman', 'Pastiche', 'Ironia', 'Grafite']
  },
  {
    id: 'arte-urbana',
    name: 'Arte Urbana & Street Art',
    eraId: 'pos-guerra-conceitual',
    startYear: 1970,
    endYear: 2005,
    displayPeriod: '1970 – 2005',
    originRegion: 'Nova York, Paris, Bristol, São Paulo',
    visualCharacteristics: [
      'Uso do espaço público urbano (muros, trens, viadutos e empenas de prédios) como tela',
      'Técnicas de estêncil rápido (stencil graffiti), spray aerosol, lambe-lambe (paste-up) e murais monumentais',
      'Crítica social cortante, humor ácido, iconografia pop e personagens autorais marcantes'
    ],
    historicalContext: 'Nascimento da cultura Hip-Hop no Bronx dos anos 70, grafite do metrô de Nova York, transição para galerias mundiais e a intervenção urbana clandestina global.',
    keyArtists: [
      { name: 'Keith Haring', role: 'Ícone das figuras radiantes em giz no metrô de NY e ativismo social', country: 'EUA' },
      { name: 'Banksy', role: 'Enigmático mestre britânico do estêncil político satírico', country: 'Inglaterra' },
      { name: 'OsGêmeos', role: 'Irmãos pioneiros de São Paulo célebres pelos gigantes amarelos poéticos', country: 'Brasil' },
      { name: 'Blek le Rat', role: 'Pioneiro parisiense do estêncil urbano nos anos 80', country: 'França' }
    ],
    famousWorks: [
      {
        id: 'banksy-balloon-girl',
        title: 'Menina com Balão (Girl with Balloon)',
        artist: 'Banksy',
        year: '2002',
        imageUrl: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=800&auto=format&fit=crop',
        description: 'Estêncil emblemático de uma jovem vendo seu balão vermelho em formato de coração voar, com a frase "There is always hope".'
      },
      {
        id: 'osgemeos-mural',
        title: 'O Gigante Amarelo',
        artist: 'OsGêmeos',
        year: '2008',
        imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop',
        description: 'Mural monumental retratando os personagens amarelos oníricos e a imagética folclórica e urbana brasileira.'
      }
    ],
    influences: ['pop-art', 'dadaismo'],
    influenced: ['arte-digital', 'pos-modernismo'],
    color: '#f59e0b',
    summary: 'A cidade como museu a céu aberto: o estêncil de Banksy, as linhas de Haring e os murais dos Gêmeos.',
    tags: ['Street Art', 'Grafite', 'Banksy', 'Keith Haring', 'OsGêmeos']
  },
  {
    id: 'arte-digital',
    name: 'Arte Digital e Novas Mídias',
    eraId: 'era-digital-contemporanea',
    startYear: 1990,
    endYear: 2010,
    displayPeriod: '1990 – 2010',
    originRegion: 'Global',
    visualCharacteristics: [
      'Modelagem 3D, pintura digital, arte algorítmica e instalações multimídia interativas',
      'Pixels, animações computadorizadas, projeções mapeadas (video mapping)',
      'Uso do computador pessoal como ferramenta de criação estestética principal'
    ],
    historicalContext: 'A popularização do computador pessoal, softwares gráficos (Photoshop, Maya), multimídia em CD-ROM e expansão dos computadores nas artes.',
    keyArtists: [
      { name: 'Cory Arcangel', role: 'Pioneiro da apropriação e modificação de software e videogame', country: 'EUA' },
      { name: 'TeamLab', role: 'Coletivo interativo de experiências imersivas digitais', country: 'Japão' },
      { name: 'Casey Reas', role: 'Co-criador do ambiente de programação Processing', country: 'EUA' }
    ],
    famousWorks: [
      {
        id: 'teamlab-borderless',
        title: 'Borderless Museum',
        artist: 'Coletivo TeamLab',
        year: '2018',
        imageUrl: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop',
        description: 'Instalação imersiva tridimensional de luz digital que reage continuamente à presença dos visitantes em Tóquio.'
      }
    ],
    influences: ['pop-art', 'bauhaus', 'pós-modernismo'],
    influenced: ['internet-art', 'generative-art'],
    color: '#0284c7',
    summary: 'A revolução do software, pixels, modelagem 3D e experiências imersivas sensoriais de luz.',
    tags: ['TeamLab', 'Pixels', 'Software', 'Interatividade', 'Videoart']
  },
  {
    id: 'internet-art',
    name: 'Internet Art (Net.art)',
    eraId: 'era-digital-contemporanea',
    startYear: 1995,
    endYear: 2015,
    displayPeriod: '1995 – 2015',
    originRegion: 'Rede Mundial de Computadores (Web)',
    visualCharacteristics: [
      'Artistic sites, hiperlinks interativos, arte de código HTML/CSS/JS, memes e estéticas glitch',
      'A própria Web como suporte primário sem intermediários físicos',
      'Exploração de privacidade na rede, direitos autorais e comportamento online'
    ],
    historicalContext: 'A expansão comercial da World Wide Web, navegação por navegadores gráficos (Netscape) e a utopia da informação livre descentralizada.',
    keyArtists: [
      { name: 'Olia Lialina', role: 'Pioneira da net.art ("My Boyfriend Came Back from the War")', country: 'Rússia / Alemanha' },
      { name: 'Vuk Ćosić', role: 'Inovador da ASCII art na web', country: 'Eslovênia' },
      { name: 'Rafael Rozendaal', role: 'Criador de sites de arte abstrata interativa em domínio próprio', country: 'Holanda / EUA' }
    ],
    famousWorks: [
      {
        id: 'lia-my-boyfriend',
        title: 'My Boyfriend Came Back from the War',
        artist: 'Olia Lialina',
        year: '1996',
        imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop',
        description: 'Obra fundamental em HTML usando frames interativos para contar uma narrativa poética de retorno da guerra.'
      }
    ],
    influences: ['arte-conceitual', 'arte-digital'],
    influenced: ['generative-art', 'ai-art'],
    color: '#06b6d4',
    summary: 'A internet como galeria e suporte primário: de sites em HTML poéticos à estética do hiperlink.',
    tags: ['Net.art', 'Web', 'Glitch', 'HTML', 'Memes']
  },
  {
    id: 'generative-art',
    name: 'Generative Art (Arte Generativa)',
    eraId: 'era-digital-contemporanea',
    startYear: 2005,
    endYear: 2026,
    displayPeriod: '2005 – Presente',
    originRegion: 'Global',
    visualCharacteristics: [
      'Sistemas autônomos impulsionados por algoritmos, equações matemáticas e ruído perlin',
      'Padrões geométricos vivos que nunca se repetem exatamente da mesma maneira',
      'Código de computador (Processing, p5.js, WebGL) atuando como co-criador ou ferramenta do artista'
    ],
    historicalContext: 'Avanço da capacidade de processamento gráfico nos navegadores, ascensão das artes computacionais, NFT e arte em código aberto.',
    keyArtists: [
      { name: 'Tyler Hobbs', role: 'Criador da célebre série generativa "Fidenza"', country: 'EUA' },
      { name: 'Manolo Gamboa Naon', role: 'Artista generativo de formas orgânicas e cor vibrante', country: 'Argentina' },
      { name: 'Matt DesLauriers', role: 'Pioneiro em creative coding e shader art', country: 'Canadá' }
    ],
    famousWorks: [
      {
        id: 'fidenza-tyler-hobbs',
        title: 'Fidenza',
        artist: 'Tyler Hobbs',
        year: '2021',
        imageUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=800&auto=format&fit=crop',
        description: 'Obra gerada totalmente por código algorítmico combinando campos de vetores, curvas e paletas orgânicas.'
      }
    ],
    influences: ['abstracionismo', 'minimalismo', 'arte-digital'],
    influenced: ['ai-art'],
    color: '#3b82f6',
    summary: 'Arte criada através de regras, algoritmos e código autônomo gerando padrões infinitos únicos.',
    tags: ['Algoritmos', 'Processing', 'p5.js', 'Fidenza', 'Código']
  },
  {
    id: 'ai-art',
    name: 'AI Art e Inteligência Artificial',
    eraId: 'era-digital-contemporanea',
    startYear: 2020,
    endYear: 2026,
    displayPeriod: '2020 – Presente',
    originRegion: 'Global',
    visualCharacteristics: [
      'Geração de imagens através de modelos de difusão, redes neurais e redes adversariais (GANs)',
      'Síntese trans-mídia combinando prompt enginnering, fine-tuning e modelos generativos multimodais',
      'Aesthetics do latente, hiprealismo sintético, fusões de estilos históricos improváveis'
    ],
    historicalContext: 'A revolução dos Large Multimodal Models e redes de difusão profunda (Midjourney, Stable Diffusion, Imagen, DALL-E) transformando os limites do processo criativo e da autoria humana.',
    keyArtists: [
      { name: 'Refik Anadol', role: 'Pioneiro em dados de IA e esculturas de memória de dados neurais', country: 'Turquia / EUA' },
      { name: 'Mario Klingemann', role: 'Pioneiro de arte com redes neurais adversariais (GANs)', country: 'Alemanha' },
      { name: 'Sougwen Chung', role: 'Pioneira em performances robóticas colaborando em tempo real com redes de IA', country: 'Canadá / China' }
    ],
    famousWorks: [
      {
        id: 'refik-anadol-unsupervised',
        title: 'Unsupervised (MoMA)',
        artist: 'Refik Anadol',
        year: '2022',
        imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
        description: 'Monstruoso painel de inteligência artificial alimentado por 200 anos de acervo do MoMA sonhando em tempo real.'
      }
    ],
    influences: ['generative-art', 'internet-art', 'arte-conceitual'],
    influenced: [],
    color: '#8b5cf6',
    summary: 'A fronteira da síntese criativa com redes neurais, dados latentes e inteligência artificial generativa.',
    tags: ['IA Generativa', 'Redes Neurais', 'Refik Anadol', 'Espaço Latente', 'Futuro']
  }
];
