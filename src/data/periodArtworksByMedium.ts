import { Artwork } from '../types';

export interface PeriodQuartet {
  pintura: Artwork;
  escultura: Artwork;
  arquitetura: Artwork;
  musica: Artwork;
}

export const PERIOD_CANONICAL_WORKS: Record<string, PeriodQuartet> = {
  'paleolitico-inferior': {
    pintura: {
      id: 'pal-inf-pintura',
      title: 'Pigmentos Parietais de Ocre e Mãos em Negativo',
      artist: 'Hominídeos Ancestrais',
      year: 'c. 300.000 a.C.',
      location: 'Sítios Parietais da Eurásia e África',
      imageUrl: '/src/assets/images/lascaux_red_bison_1790228212922.jpg',
      description: 'Primeiras aplicações deliberadas de pigmento mineral de óxido de ferro sobre superfícies rochosas.',
      medium: 'pintura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Pintura_rupestre'
    },
    escultura: {
      id: 'pal-inf-escultura',
      title: 'Biface Simétrico de Saint-Acheul',
      artist: 'Artífices Acheulenses (Homo erectus)',
      year: 'c. 400.000 a.C.',
      location: 'Vale do Somme, França',
      imageUrl: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=800&auto=format&fit=crop',
      description: 'Escultura lítica com simetria axial rigorosa, evidenciando o despertar do senso de proporção e forma.',
      medium: 'escultura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Achelense'
    },
    arquitetura: {
      id: 'pal-inf-arquitetura',
      title: 'Abrigo e Estrutura Habitacional de Terra Amata',
      artist: 'Grupos Pré-Neandertais',
      year: 'c. 380.000 a.C.',
      location: 'Nice, França',
      imageUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=800&auto=format&fit=crop',
      description: 'Primeiros vestígios de cabanas sustentadas por estacas com lareira central protegida por quebra-ventos.',
      medium: 'arquitetura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Terra_Amata'
    },
    musica: {
      id: 'pal-inf-musica',
      title: 'Lito-percussão Rítmica e Ressonâncias Naturais em Cavernas',
      artist: 'Bandos de Caçadores-Coletores',
      year: 'c. 350.000 a.C.',
      location: 'Sítios Arqueológicos Globais',
      imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop',
      description: 'Exploração de estalagmites sonoras e percussão de pedras sílex gerando padrões rítmicos cerimoniais.',
      medium: 'musica',
      externalUrl: 'https://pt.wikipedia.org/wiki/M%C3%BAsica_da_Pr%C3%A9-Hist%C3%B3ria'
    }
  },
  'paleolitico-medio': {
    pintura: {
      id: 'pal-med-pintura',
      title: 'Bloco de Ocre com Padrões Cruzados de Blombos',
      artist: 'Homo sapiens arcaico',
      year: 'c. 75.000 a.C.',
      location: 'Caverna de Blombos, África do Sul',
      imageUrl: 'https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=800&auto=format&fit=crop',
      description: 'Gravação geométrica abstrata em matriz de ocre vermelho, um dos primeiros desenhos simbólicos humanos.',
      medium: 'pintura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Caverna_de_Blombos'
    },
    escultura: {
      id: 'pal-med-escultura',
      title: 'Máscara Proto-escultural de La Roche-Cotard',
      artist: 'Homem de Neandertal',
      year: 'c. 70.000 a.C.',
      location: 'Langeais, França',
      imageUrl: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=800&auto=format&fit=crop',
      description: 'Artefato de sílex trabalhado com uma lasca de osso inserida sugerindo deliberadamente traços fisionômicos.',
      medium: 'escultura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Homem_de_Neandertal'
    },
    arquitetura: {
      id: 'pal-med-arquitetura',
      title: 'Habitação Circular de Ossos de Mamute de Molodova',
      artist: 'Caçadores Neandertais',
      year: 'c. 44.000 a.C.',
      location: 'Molodova, Ucrânia',
      imageUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=800&auto=format&fit=crop',
      description: 'Recinto arquitetônico estruturado com ossos e presas de mamute organizados em anel defensivo com lareiras.',
      medium: 'arquitetura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Musteriense'
    },
    musica: {
      id: 'pal-med-musica',
      title: 'Flauta Neandertal de Divje Babe',
      artist: 'Músicos Neandertais',
      year: 'c. 43.000 a.C.',
      location: 'Museu Nacional da Eslovênia, Liubliana',
      imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop',
      description: 'Fêmur de urso-das-cavernas com orifícios alinhados em intervalos compatíveis com escalas musicais diatônicas.',
      medium: 'musica',
      externalUrl: 'https://pt.wikipedia.org/wiki/Flauta_de_Divje_Babe'
    }
  },
  'paleolitico-superior': {
    pintura: {
      id: 'pal-sup-pintura',
      title: 'O Grande Painel dos Bisões e Cavalos de Lascaux',
      artist: 'Mestres de Lascaux e Chauvet',
      year: 'c. 17.000 a.C.',
      location: 'Dordonha, França',
      imageUrl: '/src/assets/images/lascaux_red_bison_1790228212922.jpg',
      description: 'Composição magistral em carvão e ocre com modulação de volume aproveitando o relevo das paredes rochosas.',
      medium: 'pintura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Caverna_de_Lascaux'
    },
    escultura: {
      id: 'pal-sup-escultura',
      title: 'Vênus de Willendorf',
      artist: 'Escultores Gravettianos',
      year: 'c. 28.000 a.C.',
      location: 'Museu de História Natural, Viena',
      imageUrl: '/src/assets/images/venus_of_willendorf_1790228224315.jpg',
      description: 'Estatueta em calcário oolítico tingida com ocre vermelho, ícone universal da fertilidade e maternidade sagrada.',
      medium: 'escultura',
      externalUrl: 'https://pt.wikipedia.org/wiki/V%C3%AAnus_de_Willendorf'
    },
    arquitetura: {
      id: 'pal-sup-arquitetura',
      title: 'Cúpulas Habitacionais de Mezhyrich',
      artist: 'Caçadores de Mamutes do Paleolítico Superior',
      year: 'c. 15.000 a.C.',
      location: 'Cherkasy, Ucrânia',
      imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop',
      description: 'Engenharia habitacional construída com quase 400 ossos de mamute dispostos com estabilidade construtiva e peles.',
      medium: 'arquitetura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Paleol%C3%ADtico_Superior'
    },
    musica: {
      id: 'pal-sup-musica',
      title: 'Flauta de Osso de Abutre de Hohle Fels',
      artist: 'Artífices Aurignacianos',
      year: 'c. 35.000 a.C.',
      location: 'Universidade de Tübingen, Alemanha',
      imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop',
      description: 'Instrumento aerofone completo de 5 furos esculpido em rádio de abutre-grifo, comprovando a prática instrumental sofisticada.',
      medium: 'musica',
      externalUrl: 'https://pt.wikipedia.org/wiki/Hohle_Fels'
    }
  },
  'neolitico': {
    pintura: {
      id: 'neo-pintura',
      title: 'Pintura Mural da Caça de Touros em Çatalhöyük',
      artist: 'Pintores Murais de Çatalhöyük',
      year: 'c. 6.500 a.C.',
      location: 'Museu das Civilizações da Anatólia, Ancara',
      imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop',
      description: 'Afresco sobre gesso em reboco de argila mostrando caçadores em torno de auroques monumentais.',
      medium: 'pintura',
      externalUrl: 'https://pt.wikipedia.org/wiki/%C3%87atalh%C3%B6y%C3%BCk'
    },
    escultura: {
      id: 'neo-escultura',
      title: 'A Mulher Sentada de Çatalhöyük',
      artist: 'Escultores da Anatólia',
      year: 'c. 6.000 a.C.',
      location: 'Museu de Ancara, Turquia',
      imageUrl: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=800&auto=format&fit=crop',
      description: 'Escultura em terracota representando uma deusa-mãe entronizada ladeada por duas leoas protetoras.',
      medium: 'escultura',
      externalUrl: 'https://pt.wikipedia.org/wiki/%C3%87atalh%C3%B6y%C3%BCk'
    },
    arquitetura: {
      id: 'neo-arquitetura',
      title: 'Monumento Megalítico de Stonehenge',
      artist: 'Construtores Neolíticos da Britânia',
      year: 'c. 3.000 – 2.000 a.C.',
      location: 'Wiltshire, Inglaterra',
      imageUrl: 'https://images.unsplash.com/photo-1599833975787-5c143f373c30?q=80&w=800&auto=format&fit=crop',
      description: 'Cromlech monumental alinhado com precisão com os solstícios, o ápice da engenharia lítica neolítica.',
      medium: 'arquitetura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Stonehenge'
    },
    musica: {
      id: 'neo-musica',
      title: 'Flautas Sagradas de Osso de Jiahu (Gudi)',
      artist: 'Músicos Neolíticos do Vale do Rio Amarelo',
      year: 'c. 7.000 – 6.000 a.C.',
      location: 'Museu Provincial de Henan, China',
      imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop',
      description: 'Flautas de osso de grou de 7 furos afinadas em escala heptatônica perfeitamente funcional.',
      medium: 'musica',
      externalUrl: 'https://pt.wikipedia.org/wiki/Jiahu'
    }
  },
  'idade-dos-metais': {
    pintura: {
      id: 'metais-pintura',
      title: 'Petróglifos e Painéis Pigmentados de Valcamonica',
      artist: 'Camúnios da Idade do Bronze',
      year: 'c. 1.800 a.C.',
      location: 'Val Camonica, Lombardia, Itália',
      imageUrl: 'https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=800&auto=format&fit=crop',
      description: 'Painéis rupestres com cenas de metalurgia, combates e divindades solares gravadas em arenito polido.',
      medium: 'pintura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Arte_rupestre_de_Valcamonica'
    },
    escultura: {
      id: 'metais-escultura',
      title: 'Carro Solar de Trundholm',
      artist: 'Mestres Fundidores da Idade do Bronze Nórdica',
      year: 'c. 1.400 a.C.',
      location: 'Museu Nacional da Dinamarca, Copenhague',
      imageUrl: '/src/assets/images/bronze_age_relic_1790228234285.jpg',
      description: 'Escultura fundida em bronze com disco solar recoberto de folha de ouro puxado por um cavalo cósmico.',
      medium: 'escultura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Carro_solar_de_Trundholm'
    },
    arquitetura: {
      id: 'metais-arquitetura',
      title: 'Nurague Su Nuraxi de Barumini',
      artist: 'Arquitetos Nurágicos',
      year: 'c. 1.500 a.C.',
      location: 'Sardenha, Itália',
      imageUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=800&auto=format&fit=crop',
      description: 'Fortaleza megalítica em pedra seca com torres circulares troncocônicas e galerias em cúpula falsa (tholos).',
      medium: 'arquitetura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Su_Nuraxi'
    },
    musica: {
      id: 'metais-musica',
      title: 'Trompas Espirais de Bronze (Lur Nórdico e Carnyx Céltico)',
      artist: 'Fundidores e Bardos do Bronze e Ferro',
      year: 'c. 1.200 – 800 a.C.',
      location: 'Museu Nacional da Dinamarca / Museu da Escócia',
      imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop',
      description: 'Trompas rituais em liga de bronze com sonoridade rica e penetrante usada em ritos guerreiros e solares.',
      medium: 'musica',
      externalUrl: 'https://pt.wikipedia.org/wiki/Lur'
    }
  },
  'arte-mesopotamica': {
    pintura: {
      id: 'meso-pintura',
      title: 'A Investidura de Zimri-Lim (Afresco Palaciano)',
      artist: 'Pintores Reais Amoritas',
      year: 'c. 1.770 a.C.',
      location: 'Museu do Louvre, Paris',
      imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop',
      description: 'Pintura mural cerimonial detalhando a deusa Ishtar entregando as insígnias reais ao rei de Mari.',
      medium: 'pintura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Mari_(S%C3%ADria)'
    },
    escultura: {
      id: 'meso-escultura',
      title: 'Lamassu Alado de Corsabade (Touro Androcéfalo)',
      artist: 'Escultores Reais de Sargão II',
      year: 'c. 721 a.C.',
      location: 'Museu do Louvre, Paris',
      imageUrl: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=800&auto=format&fit=crop',
      description: 'Colosso guardião híbrido esculpido em alabastro gipsoso com cinco pernas para simular imobilidade frontal e passo lateral.',
      medium: 'escultura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Lamassu'
    },
    arquitetura: {
      id: 'meso-arquitetura',
      title: 'O Grande Zigurate de Ur',
      artist: 'Ur-Nammu e arquitetos sumérios',
      year: 'c. 2.100 a.C.',
      location: 'Dhi Qar, Iraque',
      imageUrl: '/src/assets/images/mesopotamia_ziggurat_city_1790228271799.jpg',
      description: 'Pirâmide escalonada de tijolos cozidos com betume erguida para a deusa lunar Nanna.',
      medium: 'arquitetura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Grande_Zigurate_de_Ur'
    },
    musica: {
      id: 'meso-musica',
      title: 'Lira Dourada de Ur e o Hino Hurrita a Nikkal',
      artist: 'Músicos do Templo Real de Ur',
      year: 'c. 2.500 – 1.400 a.C.',
      location: 'Museu Nacional do Iraque, Bagdá',
      imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop',
      description: 'Lira incrustada de lápis-lazúli com a notação musical cuneiforme do Hino a Nikkal, a canção notada mais antiga conhecida.',
      medium: 'musica',
      externalUrl: 'https://pt.wikipedia.org/wiki/Liras_de_Ur'
    }
  },
  'arte-egipcia': {
    pintura: {
      id: 'egito-pintura',
      title: 'O Jardim e Banquete na Tumba de Nebamun',
      artist: 'Pintores Reais Tebanos',
      year: 'c. 1.350 a.C.',
      location: 'British Museum, Londres',
      imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=800&auto=format&fit=crop',
      description: 'Afresco magistral sobre estuque com a lei da frontalidade, peixes sob águas translúcidas e folhagens botânicas.',
      medium: 'pintura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Tumba_de_Nebamun'
    },
    escultura: {
      id: 'egito-escultura',
      title: 'Máscara Funerária de Ouro de Tutancâmon e Busto de Nefertiti',
      artist: 'Tutmés e artífices reais de Amarna',
      year: 'c. 1.323 a.C.',
      location: 'Museu Egípcio do Cairo / Museu de Berlim',
      imageUrl: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=800&auto=format&fit=crop',
      description: 'Escultura suprema em ouro maciço com incrustações de lápis-lazúli, quartzo e obsidiana.',
      medium: 'escultura',
      externalUrl: 'https://pt.wikipedia.org/wiki/M%C3%A1scara_de_Tutanc%C3%A2mon'
    },
    arquitetura: {
      id: 'egito-arquitetura',
      title: 'Complexo das Grandes Pirâmides de Gizé',
      artist: 'Hemiunu e engenheiros reais da IV Dinastia',
      year: 'c. 2.560 a.C.',
      location: 'Planalto de Gizé, Egito',
      imageUrl: '/src/assets/images/egypt_giza_pyramids_1790228283102.jpg',
      description: 'A Grande Pirâmide de Quéops, maravilha do mundo antigo construída com mais de 2 milhões de blocos calcários.',
      medium: 'arquitetura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Necr%C3%B3pole_de_Giz%C3%A9'
    },
    musica: {
      id: 'egito-musica',
      title: 'Hinos Sagrados a Hator com Sistro e Harpas Curvadas',
      artist: 'Cantoras e Músicos do Templo de Karnak',
      year: 'c. 1.500 a.C.',
      location: 'Tebas e Luxor, Egito',
      imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop',
      description: 'Liturgias musicais conduzidas por quironomia manual, sistros de bronze e harpas arqueadas em ritos de renascimento.',
      medium: 'musica',
      externalUrl: 'https://pt.wikipedia.org/wiki/M%C3%BAsica_do_Antigo_Egito'
    }
  },
  'arte-grega': {
    pintura: {
      id: 'grega-pintura',
      title: 'Aquiles e Ájax Jogando Dados (Ânfora Ática de Figuras Negras)',
      artist: 'Exéquias',
      year: 'c. 540 – 530 a.C.',
      location: 'Museus Vaticanos, Roma',
      imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop',
      description: 'Pintura cerâmica de incisão com intensidade dramática pré-batalha, ápice da narrativa pictórica arcaica.',
      medium: 'pintura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Ex%C3%A9quias'
    },
    escultura: {
      id: 'grega-escultura',
      title: 'Vitória de Samotrácia (Níke)',
      artist: 'Pitócrito de Rodes (atribuído)',
      year: 'c. 190 a.C.',
      location: 'Museu do Louvre, Paris',
      imageUrl: '/src/assets/images/greek_marble_statue_1790228295511.jpg',
      description: 'Escultura em mármore de Paros celebrando o triunfo naval com panejamentos molhados esculpidos com dinamismo aerodinâmico.',
      medium: 'escultura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Vit%C3%B3ria_de_Samotr%C3%A1cia'
    },
    arquitetura: {
      id: 'grega-arquitetura',
      title: 'O Parthenon da Acrópole de Atenas',
      artist: 'Ictinos, Calícrates e Fídias',
      year: '447 – 432 a.C.',
      location: 'Acrópole de Atenas, Grécia',
      imageUrl: 'https://images.unsplash.com/photo-1555993539-1732b0258235?q=80&w=800&auto=format&fit=crop',
      description: 'Templo dórico octastilo em mármore pentélico com correções ópticas sutis para a perfeição visual humana.',
      medium: 'arquitetura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Partenon'
    },
    musica: {
      id: 'grega-musica',
      title: 'O Epitáfio de Sícilo',
      artist: 'Sícilo',
      year: 'c. 200 a.C. – 100 d.C.',
      location: 'Museu Nacional da Dinamarca, Copenhague',
      imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop',
      description: 'A mais antiga composição musical completa com letra e notação melódica preservada em estela de mármore.',
      medium: 'musica',
      externalUrl: 'https://pt.wikipedia.org/wiki/Epit%C3%A1fio_de_S%C3%ADcilo'
    }
  },
  'arte-romana': {
    pintura: {
      id: 'romana-pintura',
      title: 'Os Ritos Dionisíacos da Vila dos Mistérios',
      artist: 'Mestres Afresquistas Campanianos',
      year: 'c. 60 – 50 a.C.',
      location: 'Pompeia, Itália',
      imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop',
      description: 'Ciclo monumental de afrescos em vermelho pompeiano encenando a iniciação matrimonial nos mistérios de Baco.',
      medium: 'pintura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Vila_dos_Mist%C3%A9rios'
    },
    escultura: {
      id: 'romana-escultura',
      title: 'Estátua Equestre de Marco Aurélio',
      artist: 'Escultores Imperiais Romanos',
      year: 'c. 175 d.C.',
      location: 'Museus Capitolinos, Roma',
      imageUrl: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=800&auto=format&fit=crop',
      description: 'O maior bronze dourado equestre sobrevivente da Antiguidade, arquétipo do poder imperial sereno e filosófico.',
      medium: 'escultura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Est%C3%A1tua_equestre_de_Marco_Aur%C3%A9lio'
    },
    arquitetura: {
      id: 'romana-arquitetura',
      title: 'O Coliseu e o Panteão de Roma',
      artist: 'Apolodoro de Damasco e arquitetos flavianos/adriânicos',
      year: '80 – 125 d.C.',
      location: 'Roma, Itália',
      imageUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=800&auto=format&fit=crop',
      description: 'Revolução arquitetônica do concreto romano (opus caementicium) com a maior cúpula de concreto não reforçado do mundo.',
      medium: 'arquitetura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Coliseu'
    },
    musica: {
      id: 'romana-musica',
      title: 'Fanfarras Marciais com Cornu, Tuba Romana e Órgão Hidráulico',
      artist: 'Músicos e Tubicines das Legiões Romanas',
      year: 'c. 100 d.C.',
      location: 'Arenas e Fóruns de Roma',
      imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop',
      description: 'A música cívica e militar romana com tubas curvas de bronze e o hidraulo tocado nos espetáculos do anfiteatro.',
      medium: 'musica',
      externalUrl: 'https://pt.wikipedia.org/wiki/M%C3%BAsica_da_Roma_Antiga'
    }
  },
  'arte-bizantina': {
    pintura: {
      id: 'bizantina-pintura',
      title: 'Ícone do Cristo Pantocrator do Sinai',
      artist: 'Mestre Iconógrafo Imperial',
      year: 'século VI',
      location: 'Mosteiro de Santa Catarina, Monte Sinai',
      imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=800&auto=format&fit=crop',
      description: 'Pintura em encáustica sobre madeira com assimetria sutil no rosto expressando justiça e misericórdia divinas.',
      medium: 'pintura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Cristo_Pantocrator'
    },
    escultura: {
      id: 'bizantina-escultura',
      title: 'Tríptico Harbaville e Placas em Marfim Imperial',
      artist: 'Oficinas Palacianas de Constantinopla',
      year: 'c. 950 d.C.',
      location: 'Museu do Louvre, Paris',
      imageUrl: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=800&auto=format&fit=crop',
      description: 'Relevo em marfim de primorosa elegância clássica representando a Dêesis e cortejo de santos apostólicos.',
      medium: 'escultura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Arte_bizantina'
    },
    arquitetura: {
      id: 'bizantina-arquitetura',
      title: 'Basílica de Santa Sofia (Hagia Sophia)',
      artist: 'Isidoro de Mileto e Antêmio de Trales',
      year: '532 – 537 d.C.',
      location: 'Istambul, Turquia',
      imageUrl: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a1b?q=80&w=800&auto=format&fit=crop',
      description: 'Cúpula colossal suspensa sobre pendículos com 40 janelas inundando o espaço sagrado de luz mística.',
      medium: 'arquitetura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Santa_Sofia'
    },
    musica: {
      id: 'bizantina-musica',
      title: 'Canto Litúrgico Bizantino e o Hino Acatista',
      artist: 'São Romano, o Melodista',
      year: 'século VI',
      location: 'Constantinopla',
      imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop',
      description: 'Canto monofônico modal com bordão ison estruturado no sistema octoeco de oito modos harmônicos.',
      medium: 'musica',
      externalUrl: 'https://pt.wikipedia.org/wiki/M%C3%BAsica_bizantina'
    }
  },
  'arte-romanica': {
    pintura: {
      id: 'romanica-pintura',
      title: 'Afresco do Cristo Pantocrator de Sant Climent de Taüll',
      artist: 'Mestre de Taüll',
      year: '1123',
      location: 'Museu Nacional de Arte da Catalunha, Barcelona',
      imageUrl: '/src/assets/images/romanic_art_fresco_1790228250752.jpg',
      description: 'Afresco absidal de expressividade hierática com olhar penetrante e cores vivas delineadas a negro.',
      medium: 'pintura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Igreja_de_S%C3%A3o_Clemente_de_Ta%C3%BCll'
    },
    escultura: {
      id: 'romanica-escultura',
      title: 'Pórtico da Glória da Catedral de Santiago de Compostela',
      artist: 'Mestre Mateus',
      year: '1168 – 1188',
      location: 'Santiago de Compostela, Galiza, Espanha',
      imageUrl: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=800&auto=format&fit=crop',
      description: 'Mais de 200 figuras esculpidas em granito retratando o Apocalipse e os 24 anciãos afinando instrumentos musicais.',
      medium: 'escultura',
      externalUrl: 'https://pt.wikipedia.org/wiki/P%C3%B3rtico_da_Gl%C3%B3ria'
    },
    arquitetura: {
      id: 'romanica-arquitetura',
      title: 'Basílica de Saint-Sernin de Toulouse',
      artist: 'Mestres Construtores Românicos',
      year: 'c. 1080 – 1120',
      location: 'Toulouse, França',
      imageUrl: 'https://images.unsplash.com/photo-1548625361-195fe5790df6?q=80&w=800&auto=format&fit=crop',
      description: 'Maior igreja românica preservada da Europa com nave abobadada de berço e deambulatório para peregrinos.',
      medium: 'arquitetura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Bas%C3%ADlica_de_S%C3%A3o_Saturnino_de_Toulouse'
    },
    musica: {
      id: 'romanica-musica',
      title: 'O Canto Gregoriano e a Notação Musical de Guido d\'Arezzo',
      artist: 'Monges Beneditinos e Guido d\'Arezzo',
      year: 'c. 1025',
      location: 'Abadias de Cluny e Saint-Gall',
      imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop',
      description: 'A fundação da escrita musical no Ocidente sobre pauta de 4 linhas, eternizando o repertório litúrgico sagrado.',
      medium: 'musica',
      externalUrl: 'https://pt.wikipedia.org/wiki/Canto_gregoriano'
    }
  },
  'arte-gotica': {
    pintura: {
      id: 'gotica-pintura',
      title: 'Afrescos da Capela Scrovegni (O Beijo de Judas e Lamentação)',
      artist: 'Giotto di Bondone',
      year: '1303 – 1305',
      location: 'Pádua, Itália',
      imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop',
      description: 'Revolução humanista na pintura ocidental introduzindo emoção psicológica profunda e tridimensionalidade espacial.',
      medium: 'pintura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Capela_Scrovegni'
    },
    escultura: {
      id: 'gotica-escultura',
      title: 'O Cavaleiro de Bamberg e os Santos de Chartres',
      artist: 'Mestres Escultores das Catedrais',
      year: 'c. 1225 – 1235',
      location: 'Catedral de Bamberg, Alemanha / Chartres, França',
      imageUrl: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=800&auto=format&fit=crop',
      description: 'Transição das figuras-coluna rígidas para o naturalismo dinâmico e expressividade psicológica gótica.',
      medium: 'escultura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Cavaleiro_de_Bamberg'
    },
    arquitetura: {
      id: 'gotica-arquitetura',
      title: 'Catedral de Notre-Dame de Paris e Catedral de Colônia',
      artist: 'Maurice de Sully, Jean de Chelles e mestres góticos',
      year: '1163 – 1345',
      location: 'Paris, França / Colônia, Alemanha',
      imageUrl: '/src/assets/images/gothic_black_cathedral_1790228306617.jpg',
      description: 'Verticalidade sublime e paredes de vitrais translúcidos possibilitadas pelo arco quebrado e arcobotantes.',
      medium: 'arquitetura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Catedral_de_Notre-Dame_de_Paris'
    },
    musica: {
      id: 'gotica-musica',
      title: 'Messe de Nostre Dame e o Organum da Escola de Notre-Dame',
      artist: 'Guillaume de Machaut, Léonin e Pérotin',
      year: 'c. 1200 – 1365',
      location: 'Paris e Reims, França',
      imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop',
      description: 'A primeira missa polifônica completa composta por um único autor e o nascimento do contraponto polifônico da Ars Nova.',
      medium: 'musica',
      externalUrl: 'https://pt.wikipedia.org/wiki/Messe_de_Nostre_Dame'
    }
  },
  'renascimento': {
    pintura: {
      id: 'ren-pintura',
      title: 'Mona Lisa (La Gioconda) e A Criação de Adão',
      artist: 'Leonardo da Vinci e Michelangelo',
      year: '1503 – 1512',
      location: 'Museu do Louvre, Paris / Capela Sistina, Roma',
      imageUrl: '/src/assets/images/mona_lisa_renaissance_1790228201668.jpg',
      description: 'O ápice da pintura ocidental com sfumato atmosférico impecável e representação anatômica monumental.',
      medium: 'pintura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Mona_Lisa'
    },
    escultura: {
      id: 'ren-escultura',
      title: 'David e Pietà em Mármore de Carrara',
      artist: 'Michelangelo Buonarroti',
      year: '1499 – 1504',
      location: 'Galleria dell\'Accademia, Florença / Basílica de São Pedro, Roma',
      imageUrl: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=800&auto=format&fit=crop',
      description: 'A perfeição suprema do contrapposto clássico e da anatomia humana expressando a dignidade heroica do homem renascentista.',
      medium: 'escultura',
      externalUrl: 'https://pt.wikipedia.org/wiki/David_(Michelangelo)'
    },
    arquitetura: {
      id: 'ren-arquitetura',
      title: 'Cúpula de Santa Maria del Fiore e Tempietto de San Pietro',
      artist: 'Filippo Brunelleschi e Donato Bramante',
      year: '1420 – 1502',
      location: 'Florença e Roma, Itália',
      imageUrl: 'https://images.unsplash.com/photo-1543429776-2782fc8e1acd?q=80&w=800&auto=format&fit=crop',
      description: 'Proeza revolucionária de engenharia em espinha de peixe e a restauração da harmonia das proporções clássicas vitruvianas.',
      medium: 'arquitetura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Catedral_de_Floren%C3%A7a'
    },
    musica: {
      id: 'ren-musica',
      title: 'Missa Papae Marcelli e Madrigais Polifônicos',
      artist: 'Giovanni Pierluigi da Palestrina e Josquin des Prez',
      year: '1562',
      location: 'Roma e Flandres',
      imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop',
      description: 'O apogeu da polifonia coral com transparência inteligível do texto e equilíbrio consonante impecável.',
      medium: 'musica',
      externalUrl: 'https://pt.wikipedia.org/wiki/Missa_do_Papa_Marcelo'
    }
  },
  'maneirismo': {
    pintura: {
      id: 'man-pintura',
      title: 'O Sepultamento do Conde de Orgaz',
      artist: 'El Greco',
      year: '1586 – 1588',
      location: 'Igreja de Santo Tomé, Toledo, Espanha',
      imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop',
      description: 'Composição de figuras alongadas e cores elétricas separando o plano terreno e a visão celestial mística.',
      medium: 'pintura',
      externalUrl: 'https://pt.wikipedia.org/wiki/O_Enterro_do_Conde_de_Orgaz'
    },
    escultura: {
      id: 'man-escultura',
      title: 'O Rapto das Sabinas (Figura Serpentinata)',
      artist: 'Giambologna',
      year: '1581 – 1583',
      location: 'Loggia dei Lanzi, Florença',
      imageUrl: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=800&auto=format&fit=crop',
      description: 'Virtuosismo escultural esculpido em bloco único de mármore convidando o observador a um giro contínuo de 360 graus.',
      medium: 'escultura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Rapto_das_Sabinas_(Giambologna)'
    },
    arquitetura: {
      id: 'man-arquitetura',
      title: 'Villa Capra "La Rotonda" e Palazzo Te',
      artist: 'Andrea Palladio e Giulio Romano',
      year: '1524 – 1591',
      location: 'Vicenza e Mântua, Itália',
      imageUrl: 'https://images.unsplash.com/photo-1548625361-195fe5790df6?q=80&w=800&auto=format&fit=crop',
      description: 'Simetria absoluta de quatro fachadas idênticas com cúpula central que inspirou o palladianismo internacional.',
      medium: 'arquitetura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Villa_Capra'
    },
    musica: {
      id: 'man-musica',
      title: 'Madrigais Cromáticos ("Moro, lasso, al mio duolo")',
      artist: 'Carlo Gesualdo da Venosa',
      year: '1611',
      location: 'Nápoles e Ferrara, Itália',
      imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop',
      description: 'Dissonâncias harmônicas arrojadas e cromatismos expressivos que desafiaram a tonalidade tradicional séculos antes do modernismo.',
      medium: 'musica',
      externalUrl: 'https://pt.wikipedia.org/wiki/Carlo_Gesualdo'
    }
  },
  'barroco': {
    pintura: {
      id: 'bar-pintura',
      title: 'As Meninas e A Vocação de São Mateus',
      artist: 'Diego Velázquez e Caravaggio',
      year: '1599 – 1656',
      location: 'Museu do Prado, Madri / Roma',
      imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=800&auto=format&fit=crop',
      description: 'Chiaroscuro teatral dramático e jogos de espelhos metaficcionais que redefiniram o estatuto da pintura.',
      medium: 'pintura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Las_Meninas'
    },
    escultura: {
      id: 'bar-escultura',
      title: 'O Êxtase de Santa Teresa e Os Doze Profetas de Congonhas',
      artist: 'Gian Lorenzo Bernini e Aleijadinho',
      year: '1652 – 1805',
      location: 'Roma / Minas Gerais, Brasil',
      imageUrl: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=800&auto=format&fit=crop',
      description: 'Dramatismo esculpido em mármore e pedra-sabão capturando o êxtase místico com panejamentos ondulantes em turbilhão.',
      medium: 'escultura',
      externalUrl: 'https://pt.wikipedia.org/wiki/O_%C3%8Axtase_de_Santa_Teresa'
    },
    arquitetura: {
      id: 'bar-arquitetura',
      title: 'Palácio de Versalhes e Colunata da Praça de São Pedro',
      artist: 'Louis Le Vau, Jules Hardouin-Mansart e Bernini',
      year: '1661 – 1682',
      location: 'Versalhes, França / Vaticano',
      imageUrl: 'https://images.unsplash.com/photo-1582201942988-13e60e4556ee?q=80&w=800&auto=format&fit=crop',
      description: 'Cenografia monumental de escala triunfal com a Galeria dos Espelhos e abraço arquitetônico da colunata vaticana.',
      medium: 'arquitetura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Pal%C3%A1cio_de_Versalhes'
    },
    musica: {
      id: 'bar-musica',
      title: 'As Quatro Estações e Concertos de Brandemburgo',
      artist: 'Antonio Vivaldi e Johann Sebastian Bach',
      year: '1721 – 1725',
      location: 'Veneza / Leipzig',
      imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop',
      description: 'O zênite do contraponto polifônico barroco, do baixo contínuo e da música descritiva orquestral.',
      medium: 'musica',
      externalUrl: 'https://pt.wikipedia.org/wiki/As_Quatro_Esta%C3%A7%C3%B5es'
    }
  },
  'rococo': {
    pintura: {
      id: 'roc-pintura',
      title: 'O Balanço (Les Hasards Heureux de l\'Escarpolette)',
      artist: 'Jean-Honoré Fragonard',
      year: '1767',
      location: 'Wallace Collection, Londres',
      imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop',
      description: 'A quintessência do hedonismo aristocrático com tons pastéis luminosos, folhagens espumantes e galanteria teatral.',
      medium: 'pintura',
      externalUrl: 'https://pt.wikipedia.org/wiki/O_Balan%C3%A7o_(Fragonard)'
    },
    escultura: {
      id: 'roc-escultura',
      title: 'Cupido Fabricando seu Arco a partir da Clava de Hércules',
      artist: 'Edmé Bouchardon e Étienne-Maurice Falconet',
      year: '1750',
      location: 'Museu do Louvre, Paris',
      imageUrl: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=800&auto=format&fit=crop',
      description: 'Graça curvilínea e leveza temática contrastando a força heróica com a sensualidade graciosa do rococó.',
      medium: 'escultura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Rococ%C3%B3'
    },
    arquitetura: {
      id: 'roc-arquitetura',
      title: 'Palácio de Sanssouci e Pavilhão de Amalienburg',
      artist: 'Georg Wenzeslaus von Knobelsdorff e François de Cuvilliés',
      year: '1745 – 1747',
      location: 'Potsdam, Alemanha / Munique',
      imageUrl: 'https://images.unsplash.com/photo-1548625361-195fe5790df6?q=80&w=800&auto=format&fit=crop',
      description: 'Interiores decorados com estuques dourados em rocalhas assimétricas, espelhos e salas circulares intimistas.',
      medium: 'arquitetura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Pal%C3%A1cio_de_Sanssouci'
    },
    musica: {
      id: 'roc-musica',
      title: 'Pièces de Clavecin e o Estilo Galante',
      artist: 'Jean-Philippe Rameau e François Couperin',
      year: '1724 – 1740',
      location: 'Paris, França',
      imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop',
      description: 'Música para cravo graciosa repleta de ornamentos e filigranas expressivas representando o refinamento dos salões.',
      medium: 'musica',
      externalUrl: 'https://pt.wikipedia.org/wiki/Estilo_galante'
    }
  },
  'neoclassicismo': {
    pintura: {
      id: 'neo-cla-pintura',
      title: 'O Juramento dos Horácios e A Morte de Sócrates',
      artist: 'Jacques-Louis David',
      year: '1784 – 1787',
      location: 'Museu do Louvre, Paris / Metropolitan Museum, Nova York',
      imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop',
      description: 'Clareza cívica monumental com desenho linear rigoroso e rejeição dos excessos decorativos em prol do heroísmo republicano.',
      medium: 'pintura',
      externalUrl: 'https://pt.wikipedia.org/wiki/O_Juramento_dos_Hor%C3%A1cios'
    },
    escultura: {
      id: 'neo-cla-escultura',
      title: 'Psiquê Reanimada pelo Beijo do Amor',
      artist: 'Antonio Canova',
      year: '1787 – 1793',
      location: 'Museu do Louvre, Paris',
      imageUrl: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=800&auto=format&fit=crop',
      description: 'Mármore translúcido esculpido com suavidade sedosa em pirâmide compositiva de equilíbrio clássico irrepreensível.',
      medium: 'escultura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Psiqu%C3%AA_Reanimada_pelo_Beijo_do_Amor'
    },
    arquitetura: {
      id: 'neo-cla-arquitetura',
      title: 'O Panteão de Paris e Portão de Brandemburgo',
      artist: 'Jacques-Germain Soufflot e Carl Gotthard Langhans',
      year: '1758 – 1791',
      location: 'Paris, França / Berlim, Alemanha',
      imageUrl: 'https://images.unsplash.com/photo-1555993539-1732b0258235?q=80&w=800&auto=format&fit=crop',
      description: 'Monumentos civis inspirados nas colunatas gregas e romanas com pórticos templários e solenidade purista.',
      medium: 'arquitetura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Pante%C3%A3o_(Paris)'
    },
    musica: {
      id: 'neo-cla-musica',
      title: 'Sinfonia nº 40 em Sol Menor e Pequena Serenata Noturna',
      artist: 'Wolfgang Amadeus Mozart e Joseph Haydn',
      year: '1787 – 1788',
      location: 'Viena e Salzburgo, Áustria',
      imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop',
      description: 'A perfeição da forma-sonata clássica com clareza melódica cristalina, proporção harmônica e elegância perene.',
      medium: 'musica',
      externalUrl: 'https://pt.wikipedia.org/wiki/Sinfonia_n.%C2%BA_40_(Mozart)'
    }
  },
  'romantismo': {
    pintura: {
      id: 'rom-pintura',
      title: 'A Liberdade Guiando o Povo e O Caminhante sobre o Mar de Névoa',
      artist: 'Eugène Delacroix e Caspar David Friedrich',
      year: '1818 – 1830',
      location: 'Museu do Louvre, Paris / Hamburger Kunsthalle',
      imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop',
      description: 'Exaltação da paixão, revolução e da infinitude sublime da natureza sobreposta à fragilidade humana.',
      medium: 'pintura',
      externalUrl: 'https://pt.wikipedia.org/wiki/A_Liberdade_Guiando_o_Povo'
    },
    escultura: {
      id: 'rom-escultura',
      title: 'A Partida dos Voluntários de 1792 (La Marseillaise)',
      artist: 'François Rude',
      year: '1833 – 1836',
      location: 'Arco do Triunfo, Paris',
      imageUrl: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=800&auto=format&fit=crop',
      description: 'Alto-relevo patriótico pleno de fúria e movimento heroico encimado pela Deusa da Guerra gritando às armas.',
      medium: 'escultura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Arco_do_Triunfo_(Paris)'
    },
    arquitetura: {
      id: 'rom-arquitetura',
      title: 'Palácio de Westminster e Big Ben (Revivalismo Neogótico)',
      artist: 'Charles Barry e Augustus Pugin',
      year: '1840 – 1876',
      location: 'Londres, Inglaterra',
      imageUrl: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop',
      description: 'O renascimento romântico do gótico medieval como símbolo identitário e monumento nacional com torres pontiagudas.',
      medium: 'arquitetura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Pal%C3%A1cio_de_Westminster'
    },
    musica: {
      id: 'rom-musica',
      title: 'Sinfonia nº 9 "Coral" e Noturnos para Piano',
      artist: 'Ludwig van Beethoven e Frédéric Chopin',
      year: '1824 – 1835',
      location: 'Viena / Paris',
      imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop',
      description: 'A Ode à Alegria e o lirismo introspectivo que libertaram a música orquestral e pianística para a expressão pura do espírito.',
      medium: 'musica',
      externalUrl: 'https://pt.wikipedia.org/wiki/Sinfonia_n.%C2%BA_9_(Beethoven)'
    }
  },
  'realismo': {
    pintura: {
      id: 'rea-pintura',
      title: 'Um Enterro em Ornans e As Resigadeiras',
      artist: 'Gustave Courbet e Jean-François Millet',
      year: '1849 – 1857',
      location: 'Museu de Orsay, Paris',
      imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop',
      description: 'A recusa da idealização em favor do cotidiano cru e da dignidade da classe trabalhadora rural.',
      medium: 'pintura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Um_Enterro_em_Ornans'
    },
    escultura: {
      id: 'rea-escultura',
      title: 'O Homem com o Nariz Quebrado e O Pensador',
      artist: 'Auguste Rodin',
      year: '1864 – 1880',
      location: 'Museu Rodin, Paris',
      imageUrl: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=800&auto=format&fit=crop',
      description: 'Texturas vigorosas e expressivas que mostram as marcas do trabalho e a musculatura humana em tensão.',
      medium: 'escultura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Auguste_Rodin'
    },
    arquitetura: {
      id: 'rea-arquitetura',
      title: 'Biblioteca Sainte-Geneviève e Palácio de Cristal',
      artist: 'Henri Labrouste e Joseph Paxton',
      year: '1850 – 1851',
      location: 'Paris / Londres',
      imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop',
      description: 'Arquitetura honesta estrutural exibindo colunas e arcos de ferro fundido sem disfarces neoclássicos.',
      medium: 'arquitetura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Biblioteca_Sainte-Genevi%C3%A8ve'
    },
    musica: {
      id: 'rea-musica',
      title: 'Ópera Carmen e o Verismo Dramático',
      artist: 'Georges Bizet e Giuseppe Verdi',
      year: '1875',
      location: 'Opéra-Comique, Paris',
      imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop',
      description: 'Paixões viscerais e tragédias do povo comum retratadas com realismo eletrizante e orquestração vibrante.',
      medium: 'musica',
      externalUrl: 'https://pt.wikipedia.org/wiki/Carmen_(%C3%B3pera)'
    }
  },
  'impressionismo': {
    pintura: {
      id: 'imp-pintura',
      title: 'Impressão, Nascer do Sol e Baile no Moulin de la Galette',
      artist: 'Claude Monet e Pierre-Auguste Renoir',
      year: '1872 – 1876',
      location: 'Museu Marmottan / Museu de Orsay, Paris',
      imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=800&auto=format&fit=crop',
      description: 'Pinceladas soltas capturando as vibrações efêmeras da luz natural e os reflexos óticos plein-air.',
      medium: 'pintura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Impress%C3%A3o,_nascer_do_sol'
    },
    escultura: {
      id: 'imp-escultura',
      title: 'A Pequena Bailarina de Catorze Anos',
      artist: 'Edgar Degas',
      year: '1881',
      location: 'National Gallery of Art, Washington / Museu de Orsay',
      imageUrl: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=800&auto=format&fit=crop',
      description: 'Escultura com cera pigmentada e saia de tule real, capturando a pose viva de uma jovem bailarina parisiense.',
      medium: 'escultura',
      externalUrl: 'https://pt.wikipedia.org/wiki/A_Pequena_Bailarina_de_Catorze_Anos'
    },
    arquitetura: {
      id: 'imp-arquitetura',
      title: 'Gare d\'Orsay e Pavilhões de Ferro e Vidro de Paris',
      artist: 'Victor Laloux',
      year: '1898 – 1900',
      location: 'Paris, França',
      imageUrl: 'https://images.unsplash.com/photo-1548625361-195fe5790df6?q=80&w=800&auto=format&fit=crop',
      description: 'Estação ferroviária banhada por luz diáfana através de grandes claraboias de vidro, hoje sede do Museu d\'Orsay.',
      medium: 'arquitetura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Museu_de_Orsay'
    },
    musica: {
      id: 'imp-musica',
      title: 'Clair de Lune e Prélude à l\'après-midi d\'un faune',
      artist: 'Claude Debussy',
      year: '1890 – 1894',
      location: 'Paris, França',
      imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop',
      description: 'Harmonias fluidas por tons inteiros que dissolvem a métrica rígida em ondas sonoras cintilantes como luz na água.',
      medium: 'musica',
      externalUrl: 'https://pt.wikipedia.org/wiki/Claude_Debussy'
    }
  },
  'pos-impressionismo': {
    pintura: {
      id: 'pos-imp-pintura',
      title: 'A Noite Estrelada e Uma Tarde de Domingo na Ilha de Grande Jatte',
      artist: 'Vincent van Gogh e Georges Seurat',
      year: '1884 – 1889',
      location: 'MoMA, Nova York / Art Institute of Chicago',
      imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop',
      description: 'Céus em turbilhões emocionais espessos e o pontilhismo científico reconstruindo a estrutura autônoma da pintura.',
      medium: 'pintura',
      externalUrl: 'https://pt.wikipedia.org/wiki/A_Noite_Estrelada'
    },
    escultura: {
      id: 'pos-imp-escultura',
      title: 'Monumento a Balzac',
      artist: 'Auguste Rodin',
      year: '1897',
      location: 'Boulevard du Montparnasse / Museu Rodin, Paris',
      imageUrl: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=800&auto=format&fit=crop',
      description: 'Massa escultural potente envolvida em um manto ondulante que sintetiza o gênio criador sobre a forma anatômica estrita.',
      medium: 'escultura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Monumento_a_Balzac'
    },
    arquitetura: {
      id: 'pos-imp-arquitetura',
      title: 'Casa Vicens e Cripta da Colónia Güell',
      artist: 'Antoni Gaudí',
      year: '1883 – 1908',
      location: 'Barcelona, Catalunha',
      imageUrl: 'https://images.unsplash.com/photo-1582201942988-13e60e4556ee?q=80&w=800&auto=format&fit=crop',
      description: 'Uso arrojado de cerâmica polícroma, arcos catenários e fusão orgânica de formas naturais com a matéria.',
      medium: 'arquitetura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Casa_Vicens'
    },
    musica: {
      id: 'pos-imp-musica',
      title: 'Gymnopédies e Pavane pour une infante défunte',
      artist: 'Erik Satie e Maurice Ravel',
      year: '1888 – 1899',
      location: 'Paris, França',
      imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop',
      description: 'Minimalismo meditativo despojado de sentimentalismo retórico e precisão de orquestração arquitetônica.',
      medium: 'musica',
      externalUrl: 'https://pt.wikipedia.org/wiki/Gymnop%C3%A9dies'
    }
  },
  'simbolismo': {
    pintura: {
      id: 'sim-pintura',
      title: 'O Beijo e A Aparição',
      artist: 'Gustav Klimt e Gustave Moreau',
      year: '1876 – 1908',
      location: 'Galeria Belvedere, Viena / Museu Gustave Moreau, Paris',
      imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=800&auto=format&fit=crop',
      description: 'Manto dourado ornamental fundindo erotismo, misticismo e as profundezas do inconsciente humano.',
      medium: 'pintura',
      externalUrl: 'https://pt.wikipedia.org/wiki/O_Beijo_(Klimt)'
    },
    escultura: {
      id: 'sim-escultura',
      title: 'A Porta do Inferno e A Idade Madura',
      artist: 'Auguste Rodin e Camille Claudel',
      year: '1880 – 1900',
      location: 'Museu Rodin / Museu de Orsay, Paris',
      imageUrl: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=800&auto=format&fit=crop',
      description: 'Painel monumental em bronze povoado por mais de 180 almas atormentadas saídas da Divina Comédia de Dante.',
      medium: 'escultura',
      externalUrl: 'https://pt.wikipedia.org/wiki/A_Porta_do_Inferno'
    },
    arquitetura: {
      id: 'sim-arquitetura',
      title: 'Palácio da Secessão de Viena',
      artist: 'Joseph Maria Olbrich',
      year: '1897 – 1898',
      location: 'Viena, Áustria',
      imageUrl: 'https://images.unsplash.com/photo-1548625361-195fe5790df6?q=80&w=800&auto=format&fit=crop',
      description: 'Templo da vanguarda com cúpula de louros dourados e a divisa "A cada época sua arte, à arte sua liberdade".',
      medium: 'arquitetura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Edif%C3%ADcio_da_Secess%C3%A3o'
    },
    musica: {
      id: 'sim-musica',
      title: 'O Poema do Êxtase e Salomé',
      artist: 'Aleksandr Scriabin e Richard Strauss',
      year: '1905 – 1908',
      location: 'Moscou / Dresden',
      imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop',
      description: 'Exploração do "acorde místico" sinestésico associando notas a cores e drama psicológico operístico febril.',
      medium: 'musica',
      externalUrl: 'https://pt.wikipedia.org/wiki/Aleksandr_Scriabin'
    }
  },
  'art-nouveau': {
    pintura: {
      id: 'artn-pintura',
      title: 'Cartazes Litográficos de Sarah Bernhardt e As Quatro Estações',
      artist: 'Alphonse Mucha',
      year: '1894 – 1896',
      location: 'Museu Mucha, Praga',
      imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop',
      description: 'Linhas sinuosas em "chicote", motivos florais exuberantes e arabescos orgânicos que embelezaram a vida urbana.',
      medium: 'pintura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Alphonse_Mucha'
    },
    escultura: {
      id: 'artn-escultura',
      title: 'Lâmpadas Esculturais de Libélula e Vasos em Vidro Camafeu',
      artist: 'Émile Gallé e René Lalique',
      year: '1895 – 1902',
      location: 'Nancy / Paris',
      imageUrl: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=800&auto=format&fit=crop',
      description: 'A elevação do vidro soprado gravado e da ourivesaria escultural botânica à categoria de obra de arte maior.',
      medium: 'escultura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Art_nouveau'
    },
    arquitetura: {
      id: 'artn-arquitetura',
      title: 'Basílica da Sagrada Família e Entradas do Metrô de Paris',
      artist: 'Antoni Gaudí e Hector Guimard',
      year: '1882 – 1900',
      location: 'Barcelona / Paris',
      imageUrl: 'https://images.unsplash.com/photo-1582201942988-13e60e4556ee?q=80&w=800&auto=format&fit=crop',
      description: 'Colunas arbóreas que se ramificam como florestas de pedra e pórticos de ferro fundido em gavinhas vegetais.',
      medium: 'arquitetura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Templo_Expiat%C3%B3rio_da_Sagrada_Fam%C3%ADlia'
    },
    musica: {
      id: 'artn-musica',
      title: 'Pelléas et Mélisande e La Mer',
      artist: 'Claude Debussy',
      year: '1902 – 1905',
      location: 'Paris, França',
      imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop',
      description: 'Linhas melódicas ondulantes sem cadenceamentos quadrados, casando perfeitamente com a estética curva da época.',
      medium: 'musica',
      externalUrl: 'https://pt.wikipedia.org/wiki/Pell%C3%A9as_et_M%C3%A9lisande_(%C3%B3pera)'
    }
  },
  'cubismo': {
    pintura: {
      id: 'cub-pintura',
      title: 'Les Demoiselles d\'Avignon e Guernica',
      artist: 'Pablo Picasso e Georges Braque',
      year: '1907 – 1937',
      location: 'MoMA, Nova York / Museu Reina Sofia, Madri',
      imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=800&auto=format&fit=crop',
      description: 'Desconstrução radical da perspectiva renascentista, decompondo os planos espaciais em múltiplos ângulos simultâneos.',
      medium: 'pintura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Les_Demoiselles_d%27Avignon'
    },
    escultura: {
      id: 'cub-escultura',
      title: 'Cabeça de Mulher (Fernande) e O Cavalo Mecânico',
      artist: 'Pablo Picasso e Raymond Duchamp-Villon',
      year: '1909 – 1914',
      location: 'Centre Pompidou / MoMA',
      imageUrl: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=800&auto=format&fit=crop',
      description: 'Volumes multifacetados em bronze onde as cavidades e convexidades interagem dinamicamente com o espaço circundante.',
      medium: 'escultura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Cubismo'
    },
    arquitetura: {
      id: 'cub-arquitetura',
      title: 'Casa da Mãe Negra de Deus em Praga',
      artist: 'Josef Gočár',
      year: '1911 – 1912',
      location: 'Praga, República Tcheca',
      imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop',
      description: 'O ápice da arquitetura cubista tcheca com fachadas facetadas em prismas geométricos e interiores integrados.',
      medium: 'arquitetura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Josef_Go%C4%8D%C3%A1r'
    },
    musica: {
      id: 'cub-musica',
      title: 'A Sagração da Primavera (Le Sacre du printemps)',
      artist: 'Igor Stravinsky',
      year: '1913',
      location: 'Théâtre des Champs-Élysées, Paris',
      imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop',
      description: 'Blocos rítmicos angulares e polirritmias marteladas que causaram comoção histórica ao quebrar a linearidade clássica.',
      medium: 'musica',
      externalUrl: 'https://pt.wikipedia.org/wiki/A_Sagra%C3%A7%C3%A3o_da_Primavera'
    }
  },
  'surrealismo': {
    pintura: {
      id: 'sur-pintura',
      title: 'A Persistência da Memória e A Traição das Imagens',
      artist: 'Salvador Dalí e René Magritte',
      year: '1929 – 1931',
      location: 'MoMA, Nova York / LACMA',
      imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop',
      description: 'Relógios derretidos sobre paisagens desérticas oníricas e reflexões lógicas sobre a representação e a realidade.',
      medium: 'pintura',
      externalUrl: 'https://pt.wikipedia.org/wiki/A_Persist%C3%AAncia_da_Mem%C3%B3ria'
    },
    escultura: {
      id: 'sur-escultura',
      title: 'Objeto (Café da Manhã em Peles) e O Palácio às 4 da Madrugada',
      artist: 'Meret Oppenheim e Alberto Giacometti',
      year: '1932 – 1936',
      location: 'MoMA, Nova York',
      imageUrl: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=800&auto=format&fit=crop',
      description: 'Xícara de chá forrada de pele de gazela subvertendo radicalmente a função cotidiana pela via do estranhamento poético.',
      medium: 'escultura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Meret_Oppenheim'
    },
    arquitetura: {
      id: 'sur-arquitetura',
      title: 'O Palácio Ideal do Carteiro Cheval e Casa Batlló',
      artist: 'Ferdinand Cheval e Salvador Dalí (cenografias)',
      year: '1879 – 1912',
      location: 'Hauterives, França',
      imageUrl: 'https://images.unsplash.com/photo-1582201942988-13e60e4556ee?q=80&w=800&auto=format&fit=crop',
      description: 'Monumento arquitetônico erguido pedra por pedra a partir de visões oníricas, elogiado pelos surrealistas como arquitetura pura.',
      medium: 'arquitetura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Pal%C3%A1cio_Ideal'
    },
    musica: {
      id: 'sur-musica',
      title: 'Concert Champêtre e Peças Oníricas de Balé',
      artist: 'Francis Poulenc e Erik Satie',
      year: '1924 – 1928',
      location: 'Paris, França',
      imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop',
      description: 'Justaposições surpreendentes de fanfarras de circo, cravo barroco e colagens sonoras do automatismo psíquico.',
      medium: 'musica',
      externalUrl: 'https://pt.wikipedia.org/wiki/Surrealismo'
    }
  },
  'modernismo': {
    pintura: {
      id: 'mod-pintura',
      title: 'Abaporu e Antropofagia',
      artist: 'Tarsila do Amaral',
      year: '1928 – 1929',
      location: 'MALBA, Buenos Aires / Pinacoteca de São Paulo',
      imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop',
      description: 'Obra matricial do Movimento Antropofágico, deglutindo a vanguarda europeia para recriar a autêntica arte brasileira.',
      medium: 'pintura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Abaporu'
    },
    escultura: {
      id: 'mod-escultura',
      title: 'Meteoro no Lago do Itamaraty e Monumento às Bandeiras',
      artist: 'Bruno Giorgi e Victor Brecheret',
      year: '1953 – 1967',
      location: 'Palácio do Itamaraty, Brasília / Parque Ibirapuera, São Paulo',
      imageUrl: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=800&auto=format&fit=crop',
      description: 'Formas geométricas curvas em mármore branco de Carrara suspensas sobre espelhos d\'água modernistas.',
      medium: 'escultura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Meteoro_(escultura)'
    },
    arquitetura: {
      id: 'mod-arquitetura',
      title: 'Conjunto Arquitetônico de Brasília e Ministério da Educação (MEC)',
      artist: 'Oscar Niemeyer e Lúcio Costa',
      year: '1936 – 1960',
      location: 'Brasília e Rio de Janeiro, Brasil',
      imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop',
      description: 'Curvas sensuais em concreto armado e pilotis suspensos que colocaram o Brasil na vanguarda da arquitetura moderna mundial.',
      medium: 'arquitetura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Oscar_Niemeyer'
    },
    musica: {
      id: 'mod-musica',
      title: 'Bachianas Brasileiras nº 5 e Chôros',
      artist: 'Heitor Villa-Lobos',
      year: '1920 – 1938',
      location: 'Rio de Janeiro, Brasil',
      imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop',
      description: 'A genial síntese entre as estruturas de contraponto de J. S. Bach e as melodias do folclore indígena e choro urbano do Brasil.',
      medium: 'musica',
      externalUrl: 'https://pt.wikipedia.org/wiki/Bachianas_Brasileiras'
    }
  },
  'pop-art': {
    pintura: {
      id: 'pop-pintura',
      title: 'Latas de Sopa Campbell e Marilyn Diptych',
      artist: 'Andy Warhol e Roy Lichtenstein',
      year: '1962 – 1963',
      location: 'MoMA, Nova York / Tate Modern, Londres',
      imageUrl: '/src/assets/images/pop_art_woman_1790228330060.jpg',
      description: 'A apropriação serial da iconografia da sociedade de consumo através da serigrafia industrial e dos pontos Benday.',
      medium: 'pintura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Campbell%27s_Soup_Cans'
    },
    escultura: {
      id: 'pop-escultura',
      title: 'Claes Oldenburg: Hambúrguer Gigante e Esculturas Moles',
      artist: 'Claes Oldenburg e Coosje van Bruggen',
      year: '1962 – 1980',
      location: 'MoMA / Espaços Públicos Globais',
      imageUrl: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=800&auto=format&fit=crop',
      description: 'Gigantismo escultural com lona recheada e vinil transformando objetos descartáveis em monumentos públicos lúdicos.',
      medium: 'escultura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Claes_Oldenburg'
    },
    arquitetura: {
      id: 'pop-arquitetura',
      title: 'Arquitetura de Las Vegas e Edifício da Casa Vanna Venturi',
      artist: 'Robert Venturi e Denise Scott Brown',
      year: '1964 – 1972',
      location: 'Filadélfia / Las Vegas, EUA',
      imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop',
      description: 'A lição de "Aprendendo com Las Vegas", acolhendo os letreiros luminosos e a linguagem popular na teoria arquitetônica.',
      medium: 'arquitetura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Robert_Venturi'
    },
    musica: {
      id: 'pop-musica',
      title: 'The Velvet Underground & Nico e Sgt. Pepper\'s Lonely Hearts Club Band',
      artist: 'The Velvet Underground, Andy Warhol e The Beatles (capa de Peter Blake)',
      year: '1967',
      location: 'Nova York / Londres',
      imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop',
      description: 'O cruzamento definitivo da arte de vanguarda com o rock psicodélico, embalado pelas mais célebres capas de disco da história.',
      medium: 'musica',
      externalUrl: 'https://pt.wikipedia.org/wiki/The_Velvet_Underground_%26_Nico'
    }
  },
  'arte-urbana': {
    pintura: {
      id: 'urb-pintura',
      title: 'Menina com Balão (Girl with Balloon) e Murais Étnicos',
      artist: 'Banksy e Eduardo Kobra',
      year: '2002 – 2016',
      location: 'Londres / Rio de Janeiro e São Paulo',
      imageUrl: '/src/assets/images/street_art_graffiti_1790228373350.jpg',
      description: 'Poética do estêncil urbano e murais caleidoscópicos monumentais transformando as empenas cegas das cidades.',
      medium: 'pintura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Banksy'
    },
    escultura: {
      id: 'urb-escultura',
      title: 'Relevos Esculpidos com Britadeira e Explosivos em Muros (Scratching the Surface)',
      artist: 'Vhils (Alexandre Farto)',
      year: '2008 – presente',
      location: 'Lisboa, Londres, Rio de Janeiro',
      imageUrl: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=800&auto=format&fit=crop',
      description: 'Arqueologia urbana esculpindo retratos humanos gigantescos diretamente nas camadas de argamassa e tijolo das paredes.',
      medium: 'escultura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Vhils'
    },
    arquitetura: {
      id: 'urb-arquitetura',
      title: 'High Line de Nova York e Parque das Águas Urbanas',
      artist: 'Diller Scofidio + Renfro e James Corner',
      year: '2009 – 2014',
      location: 'Nova York, EUA',
      imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop',
      description: 'Recuperação de antiga ferrovia elevada integrada a galerias a céu aberto de murais, jardins e arte pública.',
      medium: 'arquitetura',
      externalUrl: 'https://pt.wikipedia.org/wiki/High_Line'
    },
    musica: {
      id: 'urb-musica',
      title: 'O Nascimento do Hip-Hop: Breakbeats, Turntablism e MCing',
      artist: 'DJ Kool Herc, Grandmaster Flash e Afrika Bambaataa',
      year: '1973 – 1982',
      location: 'Bronx, Nova York',
      imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop',
      description: 'A revolução sônica das block parties usando toca-discos como instrumentos rítmicos, base seminal da cultura de rua mundial.',
      medium: 'musica',
      externalUrl: 'https://pt.wikipedia.org/wiki/Hip_hop'
    }
  },
  'arte-digital': {
    pintura: {
      id: 'dig-pintura',
      title: 'Iconografias Gráficas de 1-bit e Pinturas em Raster',
      artist: 'Susan Kare e David Em',
      year: '1984 – 1990',
      location: 'Palo Alto / Califórnia, EUA',
      imageUrl: '/src/assets/images/digital_nineties_pixel_1790228343536.jpg',
      description: 'As primeiras pinturas digitais em matrizes de pixels que fundaram a linguagem visual da era dos computadores.',
      medium: 'pintura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Arte_digital'
    },
    escultura: {
      id: 'dig-escultura',
      title: 'teamLab Borderless: Esculturas de Luz e Partículas em Tempo Real',
      artist: 'teamLab',
      year: '2018 – presente',
      location: 'Tóquio, Japão',
      imageUrl: 'https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop',
      description: 'Esculturas efêmeras imersivas modeladas por renderização tridimensional interativa reagindo ao toque dos visitantes.',
      medium: 'escultura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Arte_digital'
    },
    arquitetura: {
      id: 'dig-arquitetura',
      title: 'Museu Guggenheim de Bilbao (Modelagem Computacional Paramétrica CATIA)',
      artist: 'Frank Gehry',
      year: '1997',
      location: 'Bilbao, País Basco, Espanha',
      imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop',
      description: 'Placas curvas de titânio calculadas digitalmente em software aeroespacial, inaugurando a era da arquitetura digital desconstrutivista.',
      medium: 'arquitetura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Museu_Guggenheim_Bilbao'
    },
    musica: {
      id: 'dig-musica',
      title: 'Música Eletrônica Sintetizada e Áudio Algorítmico',
      artist: 'Kraftwerk e Ryoji Ikeda',
      year: '1974 – 2000',
      location: 'Düsseldorf / Tóquio',
      imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop',
      description: 'Sintetizadores digitais, vocoders e dados binários transformados em ritmos eletrônicos precisos e estéticas glitch.',
      medium: 'musica',
      externalUrl: 'https://pt.wikipedia.org/wiki/Kraftwerk'
    }
  },
  'ai-art': {
    pintura: {
      id: 'ai-pintura',
      title: 'Théâtre D\'opéra Spatial e Retrato de Edmond de Belamy',
      artist: 'Jason M. Allen e Coletivo Obvious',
      year: '2018 – 2022',
      location: 'Colorado State Fair / Leilão Christie\'s, Nova York',
      imageUrl: '/src/assets/images/will_smith_spaghetti_1790228316847.jpg',
      description: 'Pintura sintética gerada através de difusão latente explorando a colaboração estética entre prompts humanos e modelos neurais.',
      medium: 'pintura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Arte_de_intelig%C3%AAncia_artificial'
    },
    escultura: {
      id: 'ai-escultura',
      title: 'Unsupervised – Machine Hallucinations no MoMA',
      artist: 'Refik Anadol',
      year: '2022 – 2023',
      location: 'Museum of Modern Art (MoMA), Nova York',
      imageUrl: 'https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop',
      description: 'Monólito escultural cinético de 7 metros processando e alucinando o acervo de 200 anos de arte do MoMA em tempo real.',
      medium: 'escultura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Arte_de_intelig%C3%AAncia_artificial'
    },
    arquitetura: {
      id: 'ai-arquitetura',
      title: 'Morfologias Arquitetônicas Geradas por Redes Neurais',
      artist: 'Studio Tim Fu e Zaha Hadid Analytics',
      year: '2023 – presente',
      location: 'Londres / Ambientes Virtuais e Prototipagem',
      imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop',
      description: 'Fachadas e estruturas biônicas otimizadas em tempo real por algoritmos generativos com economia máxima de material.',
      medium: 'arquitetura',
      externalUrl: 'https://pt.wikipedia.org/wiki/Arquitetura'
    },
    musica: {
      id: 'ai-musica',
      title: 'A Décima Sinfonia de Beethoven Concluída por Redes Neurais e Holly Herndon',
      artist: 'Equipe Beethoven X e Holly Herndon (Spawn)',
      year: '2021',
      location: 'Bonn, Alemanha / Berlim',
      imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop',
      description: 'Modelos de aprendizado profundo prevendo e orquestrando esboços fragmentados deixados por mestres do passado.',
      medium: 'musica',
      externalUrl: 'https://pt.wikipedia.org/wiki/M%C3%BAsica_gerada_por_computador'
    }
  }
};

// Fill generator for all remaining movements ensuring all 44 have Pintura, Escultura, Arquitetura and Musica
export function getCanonicalQuartetForMovement(movementId: string, movementName: string, region: string): PeriodQuartet {
  if (PERIOD_CANONICAL_WORKS[movementId]) {
    return PERIOD_CANONICAL_WORKS[movementId];
  }

  const wikiBase = `https://pt.wikipedia.org/wiki/${encodeURIComponent(movementName)}`;

  return {
    pintura: {
      id: `${movementId}-canon-pintura`,
      title: `Pintura Canônica de ${movementName}`,
      artist: `Mestres Pintores de ${movementName}`,
      year: 'Época do Período',
      location: `${region} / Museus de Belas Artes`,
      imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop',
      description: `Expressão pictórica fundamental que delineou os temas, paleta cromática e inovação visual de ${movementName}.`,
      medium: 'pintura',
      externalUrl: `${wikiBase}#Pintura`
    },
    escultura: {
      id: `${movementId}-canon-escultura`,
      title: `Monumento e Escultura de ${movementName}`,
      artist: `Mestres Escultores do Movimento`,
      year: 'Época do Período',
      location: `${region} / Acervos Esculturais e Praças Cívicas`,
      imageUrl: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=800&auto=format&fit=crop',
      description: `Manifestação tridimensional em materiais escultóricos consagrando a volumetria e presença espacial de ${movementName}.`,
      medium: 'escultura',
      externalUrl: `${wikiBase}#Escultura`
    },
    arquitetura: {
      id: `${movementId}-canon-arquitetura`,
      title: `Marco Arquitetônico de ${movementName}`,
      artist: `Arquitetos e Urbanistas do Período`,
      year: 'Época do Período',
      location: `${region} / Patrimônio Histórico Arquitetônico`,
      imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop',
      description: `Edifício e concepção espacial monumental representativa das inovações estruturais e estéticas de ${movementName}.`,
      medium: 'arquitetura',
      externalUrl: `${wikiBase}#Arquitetura`
    },
    musica: {
      id: `${movementId}-canon-musica`,
      title: `Composição Musical e Paisagem Sonora de ${movementName}`,
      artist: `Compositores e Músicos do Período`,
      year: 'Época do Período',
      location: `${region} / Tradição Musical e Registros Históricos`,
      imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop',
      description: `Patrimônio musical e harmônico contemporâneo que ecoou a sensibilidade cultural e espiritual de ${movementName}.`,
      medium: 'musica',
      externalUrl: `${wikiBase}#M%C3%BAsica`
    }
  };
}
