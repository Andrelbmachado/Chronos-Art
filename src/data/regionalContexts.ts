import { RegionalContextEntry } from '../types';

export const REGIONAL_CONTEXTS: RegionalContextEntry[] = [
  // =============================================================
  // 1. PRÉ-HISTÓRIA (c. 40.000 a.C. – 3.000 a.C.)
  // =============================================================
  {
    id: 'brasil_pre_historia',
    regionId: 'brasil',
    eraId: 'pre-historia',
    startYear: -40000,
    endYear: -3000,
    facets: {
      arte: 'Pinturas rupestres espetaculares no Parque Nacional Serra da Capivara (Piauí), com a Tradição Nordeste e Tradição Agreste retratando caça, danças rituais e figuras humanas dinâmicas em ocre vermelho e carvão.',
      politica: 'Bandos e clãs nômades caçadores-coletores com lideranças situacionais baseadas na experiência xamânica e conhecimento da caça.',
      sociedade: 'Bandos familiares com divisões cooperativas de trabalho; rituais comunitários gravados em paredões rochosos e abrigos sob rocha.',
      musica: 'Ritmos percussivos com pedras, paus, ossos e palmas, acompanhados de cantos vocais xamânicos para invocar a caça e espíritos da floresta.',
      arquitetura: 'Abrigos sob rocha naturais (Toca do Boqueirão da Pedra Furada) e acampamentos sazonais próximos a fontes de água e cânions.',
      tecnologia: 'Indústria lítica avançada em quartzo e sílex, raspadores, pontas de projétil e preparo de pigmentos minerais de alta durabilidade.',
      religiao: 'Animismo xamânico primordial reverenciando os animais sagrados da megafauna e as forças cosmológicas da natureza.',
      economia: 'Economia de subsistência por forrageamento, caça da megafauna pleistocênica (preguiças-gigantes, tatus gigantes) e coleta de sementes.',
      filosofia: 'Cosmovisão totêmica em que humanos, animais e paisagem compartilham a mesma essência vital integrada.'
    },
    highlights: ['Serra da Capivara', 'Pedra Furada', 'Tradição Nordeste', 'Niède Guidon', 'Megafauna']
  },
  {
    id: 'franca_pre_historia',
    regionId: 'franca',
    eraId: 'pre-historia',
    startYear: -40000,
    endYear: -3000,
    facets: {
      arte: 'Apogeu da arte parietal paleolítica: Caverna de Lascaux (Salão dos Touros) e Caverna de Chauvet. Desenhos magistrais com senso de movimento, sombreamento e perspectiva anatômica animal.',
      politica: 'Organização em clãs semi-nômades com líderes de caça e xamãs que orientavam os ciclos sazonais.',
      sociedade: 'Comunidades caçadoras adaptadas à Era Glacial; respeito ancestral e rituais profundos de passagem no interior de cavernas escuras.',
      musica: 'Flautas feitas de ossos de urubu e marfim de mamute (como as flautas de Aurignaciano), emitindo escalas tonais rudimentares.',
      arquitetura: 'Santuários profundos nas cavernas calcárias do Vale do Dordogne e abrigos com ossadas de mamute e peles.',
      tecnologia: 'Lâminas de sílex da cultura Magdaleniana, propulsores de lanças entalhados, agulhas de osso e lâmpadas de gordura animal.',
      religiao: 'Xamanismo paleolítico focado no espírito dos bisões, cavalos, leões-das-cavernas e culto à fertilidade com estatuetas femininas.',
      economia: 'Caça cooperativa de renas, mamutes e cavalos selvagens, com curtimento avançado de peles.',
      filosofia: 'A caverna como útero primordial da Terra e espaço sagrado de mediação entre o mundo físico e espiritual.'
    },
    highlights: ['Caverna de Lascaux', 'Chauvet', 'Flautas de Osso', 'Cultura Magdaleniana', 'Bisões']
  },
  {
    id: 'espanha_pre_historia',
    regionId: 'espanha',
    eraId: 'pre-historia',
    startYear: -40000,
    endYear: -3000,
    facets: {
      arte: 'A "Capela Sistina da Pré-História" na Caverna de Altamira (Cantábria), com bisões policromados aproveitando as protuberâncias naturais da rocha para dar volume tridimensional.',
      politica: 'Clãs familiares do Paleolítico Superior e comunidades neolíticas posteriores organizadas em aldeias agrícolas muradas.',
      sociedade: 'Sociedades que transitam de caçadores especializados para os primeiros pastores e agricultores na costa levantina.',
      musica: 'Canções fúnebres rituais, uso de chocalhos de conchas perfuradas e tambores de pele esticada.',
      arquitetura: 'Cavernas habitacionais costeiras e, posteriormente no Neolítico, monumentos megalíticos como os Dólmens de Antequera.',
      tecnologia: 'Pigmentos policromados à base de ocre, manganês e carvão vegetal misturados a gordura e água; machados de pedra polida.',
      religiao: 'Culto aos espíritos dos grandes animais e posterior culto megalítico ao sol e ancestrais sepultados em túmulos de corredor.',
      economia: 'Subsistência baseada na caça de cervos e bisões, coleta marinha e transição neolítica para cevada e ovelhas.',
      filosofia: 'Aproveitamento da forma viva da rocha como co-criação com a natureza espiritual.'
    },
    highlights: ['Caverna de Altamira', 'Bisões Policromados', 'Cantábria', 'Dólmens de Antequera', 'Arte Levantina']
  },
  {
    id: 'inglaterra_pre_historia',
    regionId: 'inglaterra',
    eraId: 'pre-historia',
    startYear: -40000,
    endYear: -3000,
    facets: {
      arte: 'Arquitetura megalítica monumental e esculturas de giz: início do complexo circular de Stonehenge e terraplanagem em Avebury.',
      politica: 'Chefias tribais neolíticas capazes de mobilizar milhares de trabalhadores para transporte de pedras a centenas de quilômetros.',
      sociedade: 'Sociedades agrárias neolíticas sedentárias articuladas em torno de centros cerimoniais comunitários e cemitérios de túmulos longos.',
      musica: 'Acústica monumental: círculos de pedra megalíticos projetados com propriedades de ressonância acústica para tambores e cânticos rituais.',
      arquitetura: 'Monumento de Stonehenge (pedras sarsen e pedras azuis transportadas do País de Gales) alinhado aos solstícios.',
      tecnologia: 'Engenharia de transporte por trenós e troncos de madeira, encaixes macho-e-fêmea em pedra megalítica e mineração de sílex.',
      religiao: 'Culto solar e astronômico ao solstício de verão e inverno, celebração dos ciclos agrícolas de renascimento e ancestrais.',
      economia: 'Agricultura de trigo emmer, cevada e criação de gado bovino e suíno em pastagens demarcadas.',
      filosofia: 'Consciência astronômica da ordem cíclica do cosmos e comunhão entre a Terra e o firmamento.'
    },
    highlights: ['Stonehenge', 'Avebury', 'Megalitismo', 'Solstício', 'Neolítico Britânico']
  },
  {
    id: 'africa_pre_historia',
    regionId: 'africa',
    eraId: 'pre-historia',
    startYear: -40000,
    endYear: -3000,
    facets: {
      arte: 'Berço original da arte simbólica humana: gravuras em ocre na Caverna de Blombos (África do Sul) e pinturas rupestres do Tassili n\'Ajjer (Saara verde) e maciço de Brandberg.',
      politica: 'Bandos de Homo sapiens pioneiros, estruturados em redes igualitárias de parentesco e partilha universal de recursos.',
      sociedade: 'Ancestrais diretos da humanidade contemporânea, com papéis colaborativos de rastreamento e partilha comunitária.',
      musica: 'Tradição primordial de tambores batidos, canções polifônicas de caça e dança do transe dos povos San.',
      arquitetura: 'Acampamentos móveis e cavernas com lareiras comunitárias demarcadas por círculos de pedra.',
      tecnologia: 'Primeiras pontas de projétil tratadas a calor, microlitos, arcos e flechas primitivos e contas de ovos de avestruz perfuradas.',
      religiao: 'Dança do transe para cura comunitária e conexão com a força vital sobrenatural através do espírito do antílope elande.',
      economia: 'Caça por persistência na savana africana, forrageamento botânico de raízes, frutos e mel.',
      filosofia: 'Princípio primordial de interconexão humana e simbiose absoluta com a vida na savana.'
    },
    highlights: ['Caverna de Blombos', 'Tassili n\'Ajjer', 'Povo San', 'Dança do Transe', 'Berço da Humanidade']
  },

  // =============================================================
  // 2. ANTIGUIDADE (c. 3.000 a.C. – 476 d.C.)
  // =============================================================
  {
    id: 'egito_antiguidade',
    regionId: 'egito',
    eraId: 'antiguidade',
    startYear: -3000,
    endYear: 476,
    facets: {
      arte: 'Cânone monumental da arte egípcia: lei da frontalidade, hieróglifos esculpidos, estátuas em diorito e basalto, pinturas funerárias e a máscara dourada de Tutancâmon.',
      politica: 'Teocracia faraônica centralizada com faraó divinizado como encarnação viva de Hórus na Terra e burocracia de escribas e vizires.',
      sociedade: 'Estrutura piramidal com nobres, sacerdotes, escribas, artesãos do faraó e massa camponesa trabalhadora das cheias do Nilo.',
      musica: 'Harpa arqueada, sistro sagrado dedicado à deusa Hathor, flautas duplas de cana e cantos de liturgia nos templos de Karnak e Luxor.',
      arquitetura: 'Pirâmides de Gizé (Quéops, Quéfren, Miquerinos), templos monumentais com colunas papiriformes e lótus, e tumbas no Vale dos Reis.',
      tecnologia: 'Engenharia de cálculo de níveis com água, manufatura de papiro, embalsamamento e mumificação anatômica avançada.',
      religiao: 'Politeísmo com Osíris, Ísis, Rá e Amon; obsessão com a vida após a morte e o julgamento da alma pesando o coração com a pena da verdade (Ma\'at).',
      economia: 'Economia agrícola baseada nas inundações anuais do Rio Nilo, produção massiva de linho, trigo e comércio naval pelo Mar Vermelho.',
      filosofia: 'Conceito de Ma\'at: ordem universal, justiça, harmonia e equilíbrio cósmico contra o caos (Isfet).'
    },
    highlights: ['Pirâmides de Gizé', 'Karnak', 'Tutancâmon', 'Ma\'at', 'Vale dos Reis']
  },
  {
    id: 'mesopotamia_antiguidade',
    regionId: 'mesopotamia',
    eraId: 'antiguidade',
    startYear: -3000,
    endYear: 476,
    facets: {
      arte: 'Relevos narrativos assírios de caçadas reais, esculturas votivas sumérias com olhos esbugalhados de lápis-lazúli e a estonteante Porta de Ishtar vidrada em azul cobalto.',
      politica: 'Cidades-Estado sumérias (Ur, Uruk), seguidas pelos impérios Babilônico (Código de Hamurabi) e Assírio com monarquias guerreiras.',
      sociedade: 'Primeiras sociedades letradas urbanas da humanidade, organizadas em torno do palácio real e do templo (zigurate).',
      musica: 'Liras de Ur esculpidas com cabeças de touro em ouro e lápis-lazúli, hinos cantados à deusa Nikkal (primeira partitura anotada).',
      arquitetura: 'Zigurates monumentais de tijolos cozidos ascendendo aos céus, jardins suspensos da Babilônia e muralhas colossais.',
      tecnologia: 'Invenção da escrita cuneiforme em tabuletas de argila, roda com raios, sistema sexagesimal (base 60) e arado metálico.',
      religiao: 'Cosmogonia épica (Enuma Elish e Epopeia de Gilgamesh) com deuses personificando tempestades e forças cósmicas (Marduk, Ishtar, Enlil).',
      economia: 'Canais de irrigação entre os rios Tigre e Eufrates, celeiro de cevada, comércio de metais e tecidos em rotas caravanistas.',
      filosofia: 'A Epopeia de Gilgamesh: o primeiro questionamento filosófico sobre a mortalidade humana e a busca pela imortalidade.'
    },
    highlights: ['Porta de Ishtar', 'Zigurate de Ur', 'Código de Hamurabi', 'Escrita Cuneiforme', 'Gilgamesh']
  },
  {
    id: 'grecia_antiguidade',
    regionId: 'grecia',
    eraId: 'antiguidade',
    startYear: -3000,
    endYear: 476,
    facets: {
      arte: 'Apogeu da escultura clássica e helenística: busca da harmonia, Cânone de Policleto, contrapposto, Parthenon e Vitória de Samotrácia.',
      politica: 'Nascimento da Democracia Ateniense de Péricles, cidades-estado (Pólis) com modelos cívicos como Esparta e Atenas.',
      sociedade: 'Cidadãos deliberando na Ágora, valorização do debate público, Jogos Olímpicos pan-helênicos e academias de ginásio.',
      musica: 'Lira, cítara e aulos; doutrinação da harmonia das esferas de Pitágoras e a teoria dos modos musicais éticos.',
      arquitetura: 'Ordens clássicas (Dórica, Jônica e Coríntia), Acrópole de Atenas, teatros de encosta com acústica perfeita (Epidauro).',
      tecnologia: 'Mecanismo de Anticítera (computador astronômico de engrenagens), princípios de física de Arquimedes e geometria de Euclides.',
      religiao: 'Panteão Olímpico (Zeus, Atena, Apolo, Poseidon) com mitos teatrais e oráculos proféticos como Delfos.',
      economia: 'Comércio marítimo pelo Mar Egeu e Mediterrâneo, cunhagem de moedas de prata (Dracma ateniense) e cerâmica de exportação.',
      filosofia: 'Fundação da filosofia ocidental: Sócrates, Platão (Mundo das Ideias) e Aristóteles (Lógica e Ética).'
    },
    highlights: ['Parthenon', 'Democracia Ateniense', 'Sócrates e Platão', 'Cânone de Policleto', 'Epidauro']
  },
  {
    id: 'italia_antiguidade',
    regionId: 'italia',
    eraId: 'antiguidade',
    startYear: -3000,
    endYear: 476,
    facets: {
      arte: 'Retratos escultóricos realistas (verismo republicano), relevos históricos na Coluna de Trajano e afrescos e mosaicos primorosos de Pompeia.',
      politica: 'De Monarquia a República e apogeu do Império Romano (Pax Romana de Augusto), governando da Britânia à Mesopotâmia.',
      sociedade: 'Cidadãos patrícios, plebeus, senadores e escravizados; espetáculos públicos de massas no Coliseu e Termas monumentais.',
      musica: 'Tuba romana militar de bronze, cornos de batalha, tíbias e órgãos hidráulicos (hydraulis) nos grandes anfiteatros.',
      arquitetura: 'Invenção do concreto romano (pozzolana), cúpula do Panteão de Roma, arcos de triunfo e aquedutos como a Pont du Gard.',
      tecnologia: 'Rede viária de estradas pavimentadas (Via Ápia), esgotos urbanos (Cloaca Maxima) e máquinas de cerco balísticas.',
      religiao: 'Politeísmo sincrético com deuses gregos latinizados, culto imperial e ascensão do Cristianismo (Edito de Milão e Roma cristã).',
      economia: 'Mercado mediterrâneo unificado (Mare Nostrum), rotas do azeite, trigo do Egito e moedas universais (Denário).',
      filosofia: 'Estoicismo romano praticado por Sêneca, Cícero e pelo imperador filósofo Marco Aurélio (Meditações).'
    },
    highlights: ['Coliseu de Roma', 'Panteão', 'Marco Aurélio', 'Pompeia', 'Direito Romano']
  },
  {
    id: 'china_antiguidade',
    regionId: 'china',
    eraId: 'antiguidade',
    startYear: -3000,
    endYear: 476,
    facets: {
      arte: 'Bronzes rituais das dinastias Shang e Zhou, o monumental Exército de Terracota do Primeiro Imperador Qin e pinturas em rolos de seda Han.',
      politica: 'Unificação da China por Qin Shi Huang (Dinastia Qin), seguida pela duradoura e próspera Dinastia Han com o Mandato do Céu.',
      sociedade: 'Ordem social confucionista valorizando a piedade filial, hierarquia moral e o sistema de exames para letrados e mandarins.',
      musica: 'Conjuntos monumentais de sinos de bronze afinados (Bianzhong do Marquês Yi), cítaras Guqin e flautas de bambu.',
      arquitetura: 'Início da construção da Grande Muralha da China, palácios de madeira com encaixes de suporte sem pregos (dougong).',
      tecnologia: 'Invenção do papel de trapos e cânhamo, bússola magnética primitiva, fundição de ferro e sericultura da seda.',
      religiao: 'Culto aos ancestrais, ritos de adivinhação nos ossos oraculares e síntese entre Taoísmo (harmonia cósmica) e Confucionismo.',
      economia: 'Abertura da histórica Rota da Seda conectando Chang\'an a Roma, comércio de seda, cerâmica e ferro fundido.',
      filosofia: 'As Cem Escolas de Pensamento: Confúcio (Os Analectos), Lao Tsé (Tao Te Ching) e Sun Tzu (A Arte da Guerra).'
    },
    highlights: ['Exército de Terracota', 'Grande Muralha', 'Confucionismo', 'Rota da Seda', 'Tao Te Ching']
  },

  // =============================================================
  // 3. IDADE MÉDIA (476 – 1400 d.C.)
  // =============================================================
  {
    id: 'italia_idade_media',
    regionId: 'italia',
    eraId: 'idade-media',
    startYear: 476,
    endYear: 1400,
    facets: {
      arte: 'Mosaicos reluzentes bizantinos de Ravena e Basílica de São Marcos em Veneza; revolução pictórica pré-renascentista de Giotto di Bondone e Cimabue.',
      politica: 'Cidades-Estado mercantis autônomas (Veneza, Gênova, Florença) e a autoridade temporal e espiritual dos Papas em Roma.',
      sociedade: 'Ascensão das corporações de ofício (guildas de artesãos), burguesia mercantil precoce e ordens religiosas franciscanas e dominicanas.',
      musica: 'Canto Gregoriano monódico unificado pela Igreja Católica e a invenção da notação musical na pauta por Guido d\'Arezzo.',
      arquitetura: 'Batistérios de mármore e a Catedral de Pisa (estilo românico pisano) e os primeiros palácios comunais góticos (Palazzo Vecchio).',
      tecnologia: 'Invenção dos óculos de leitura em Pisa/Veneza, bússola de marinheiro aperfeiçoada e contabilidade por partidas dobradas.',
      religiao: 'Catolicismo fervoroso com espiritualidade franciscana de amor à natureza de São Francisco de Assis e mosteiros beneditinos.',
      economia: 'Veneza e Gênova como rainhas do comércio marítimo com o Levante e Constantinopla; início das primeiras casas bancárias.',
      filosofia: 'A Divina Comédia de Dante Alighieri estruturando a cosmologia cristã medieval e São Tomás de Aquino unindo fé e razão aristotélica.'
    },
    highlights: ['Giotto', 'Dante Alighieri', 'Ravena', 'Guido d\'Arezzo', 'Veneza Medieval']
  },
  {
    id: 'franca_idade_media',
    regionId: 'franca',
    eraId: 'idade-media',
    startYear: 476,
    endYear: 1400,
    facets: {
      arte: 'O berço da Revolução Gótica: vitrais translúcidos multicoloridos da Sainte-Chapelle, iluminuras preciosas (Très Riches Heures) e esculturas de catedrais.',
      politica: 'Dinastia dos Capetianos consolidando o reino francês, cavaleiros feudais e conflitos épicos na Guerra dos Cem Anos contra a Inglaterra.',
      sociedade: 'Três Ordens feudais canônicas: os que oram (clero), os que guerreiam (nobres) e os que trabalham (camponeses servos).',
      musica: 'Escola de Notre-Dame em Paris (Léonin e Pérotin) criando a polifonia musical sacra elaborada; canções dos trovadores e troveiros.',
      arquitetura: 'Nascimento do estilo Gótico na Basílica de Saint-Denis pelo Abade Suger, Catedral de Notre-Dame de Paris e Catedral de Chartres com arcobotantes.',
      tecnologia: 'Moinhos de água e de vento, rotação trienal de culturas agrícolas e o relógio mecânico de torre.',
      religiao: 'O Cristianismo católico como eixo total da vida; cruzadas para a Terra Santa e devoção intensa à Virgem Maria nas catedrais góticas.',
      economia: 'Feiras de Champagne ligando o comércio do Mediterrâneo à Flandres; crescimento pujante de Paris como centro urbano universitário.',
      filosofia: 'Fundação da Universidade de Paris (Sorbonne), Escolástica e os debates de Pedro Abelardo e Santo Alberto Magno.'
    },
    highlights: ['Notre-Dame de Paris', 'Catedral de Chartres', 'Abade Suger', 'Polifonia Notre-Dame', 'Trovadores']
  },
  {
    id: 'alemanha_idade_media',
    regionId: 'alemanha',
    eraId: 'idade-media',
    startYear: 476,
    endYear: 1400,
    facets: {
      arte: 'Arte otoniana com manuscritos iluminados dourados de Reichenau, portas monumentais de bronze da Catedral de Hildesheim e esculturas góticas de Naumburg.',
      politica: 'Sacro Império Romano-Germânico de Carlos Magno e Oto I, caracterizado pela descentralização e poder dos príncipes-eleitores.',
      sociedade: 'Ligas de cidades mercantis livres como a Liga Hanseática no norte da Europa e cavaleiros da Ordem Teutônica.',
      musica: 'Composições místicas e hinos visionários da abadessa polímata Hildegarda de Bingen; canções dos Minnesänger (cantores de amor cortês).',
      arquitetura: 'Catedrais imperiais românicas de Espira, Worms e Mainz; início da construção da imensa Catedral Gótica de Colônia (1248).',
      tecnologia: 'Metalurgia avançada da prata nas montanhas de Harz, armas de aço e melhorias fundamentais nas charruas agrícolas pesadas.',
      religiao: 'Poderosos bispados-príncipes, misticismo renano com Mestre Eckhart e mosteiros como centros de saber preservadores de códices.',
      economia: 'Liga Hanseática controlando o comércio de peixe seco, madeira e peles no Báltico e Mar do Norte.',
      filosofia: 'Misticismo de Mestre Eckhart propondo o desapego da alma para união direta com Deus e Teologia Natural.'
    },
    highlights: ['Catedral de Colônia', 'Hildegarda de Bingen', 'Sacro Império', 'Liga Hanseática', 'Mestre Eckhart']
  },
  {
    id: 'oriente_medio_idade_media',
    regionId: 'oriente-medio',
    eraId: 'idade-media',
    startYear: 476,
    endYear: 1400,
    facets: {
      arte: 'Idade de Ouro Islâmica: arabescos geométricos complexos, azulejos esmaltados luminosos, caligrafia cúfica sagrada e miniaturas persas.',
      politica: 'Califados Omíada (Damasco) e Abássida (Bagdá), governados por califas e vizires integrando territórios da Espanha à Índia.',
      sociedade: 'Sociedade cosmopolita urbana com acadêmicos muçulmanos, cristãos e judeus convivendo e traduzindo textos científicos universais.',
      musica: 'Tratados teóricos de música de Al-Farabi, alaúde oriental (Oud, ancestral do violão), cantos modais e escalas maqam refinadas.',
      arquitetura: 'Domo da Rocha em Jerusalém, Grande Mesquita de Damasco e a Mesquita-Catedral de Córdova com arcadas bicolores.',
      tecnologia: 'Criação da Álgebra por Al-Khwarizmi, óptica revolucionária de Ibn al-Haytham (Alhazen), destilação química e astrolábios.',
      religiao: 'Revelação do Islão pelo profeta Maomé, os Cinco Pilares da fé e a expansão do Sufismo com poetas místicos como Rumi.',
      economia: 'Rede comercial global ligando o Mediterrâneo ao Oceano Índico com cheques bancários (Sakk), bazares de especiarias e seda.',
      filosofia: 'Preservação e desenvolvimento da filosofia grega por Ibn Sina (Avicena) e Ibn Rushd (Averróis), que inspiraram a Europa.'
    },
    highlights: ['Idade de Ouro Islâmica', 'Avicena e Averróis', 'Álgebra de Al-Khwarizmi', 'Domo da Rocha', 'Astrolábios']
  },
  {
    id: 'espanha_idade_media',
    regionId: 'espanha',
    eraId: 'idade-media',
    startYear: 476,
    endYear: 1400,
    facets: {
      arte: 'Arte Mudéjar e Islâmica em Al-Andalus: os estuques e arabescos poéticos da Alhambra de Granada e a Grande Mesquita de Córdova.',
      politica: 'Convivência e conflito da Reconquista: reinos cristãos do norte (Castela, Aragão, Leão) e os emirados e califados mouros no sul.',
      sociedade: 'Período da "Convivencia" em Toledo e Córdova, onde sábios cristãos, muçulmanos e judeus traduziam saberes na Escola de Tradutores de Toledo.',
      musica: 'As Cantigas de Santa Maria do rei Afonso X, o Sábio; canções de alaúde mouriscas e romances medievais cavaleirescos.',
      arquitetura: 'Complexo palaciano da Alhambra de Granada com o Pátio dos Leões, Catedral de Santiago de Compostela no estilo românico.',
      tecnologia: 'Técnicas de irrigação andaluzas (norias, acequias), introdução do papel na Europa via Xàtiva e medicina de Maimônides.',
      religiao: 'Tensão e síntese entre Catolicismo, Islão e Judaísmo; peregrinações massivas de toda a Europa a Santiago de Compostela.',
      economia: 'Criação de ovelhas merinas para lã em Castela (Mesta) e rica agricultura irrigada de frutas e cana-de-açúcar na Andaluzia.',
      filosofia: 'Averróis em Córdova e Maimônides (Guia dos Perplexos) reconciliando a fé monoteísta com a razão aristotélica.'
    },
    highlights: ['Alhambra de Granada', 'Santiago de Compostela', 'Cantigas de Afonso X', 'Maimônides', 'Toledo']
  },

  // =============================================================
  // 4. RENASCIMENTO & MANEIRISMO (1400 – 1600)
  // =============================================================
  {
    id: 'italia_renascimento',
    regionId: 'italia',
    eraId: 'renascimento-maneirismo',
    startYear: 1400,
    endYear: 1600,
    facets: {
      arte: 'Apogeu do Renascimento e Maneirismo: Leonardo da Vinci, Michelangelo, Rafael Sanzio, Botticelli e Titiano. Invenção da perspectiva linear por Brunelleschi.',
      politica: 'Cidades-Estado prósperas (Florença, Veneza, Milão, Roma). Mecenato exercido por famílias como os Médici e os Papas do Vaticano.',
      sociedade: 'Emergência do valor do indivíduo, do ideal do "Homem Universal" (Polímata) e da burguesia mercantil letrada.',
      musica: 'Polifonia vocal da Escola Romana (Palestrina) e madrigais seculares refinados nas cortes de Ferrara e Mantua.',
      arquitetura: 'Cúpula da Catedral de Florença por Brunelleschi, Basílica de São Pedro por Michelangelo e vilas clássicas de Andrea Palladio.',
      tecnologia: 'Estudos anatômicos rigorosos, máquinas voadoras de Da Vinci e avanços em engenharia hidráulica e perspectiva.',
      religiao: 'Tensão entre a sabedoria neoplatônica/paganismo clássico e o dogma Católico, agravada pelo moralismo de Savonarola.',
      economia: 'Bancos internacionais florentinos (Banco Médici) e redes bancárias que financiavam reis e papas por toda a Europa.',
      filosofia: 'Humanismo Renascentista (Marsilio Ficino, Pico della Mirandola) e a ciência política realista de Nicolau Maquiavel (O Príncipe).'
    },
    highlights: ['Leonardo da Vinci', 'Michelangelo', 'Florença', 'Família Médici', 'Maquiavel']
  },
  {
    id: 'alemanha_renascimento',
    regionId: 'alemanha',
    eraId: 'renascimento-maneirismo',
    startYear: 1400,
    endYear: 1600,
    facets: {
      arte: 'O Renascimento Nórdico liderado por Albrecht Dürer (gravuras de precisão milimétrica, autorretratos e anatomia), Lucas Cranach e Hans Holbein.',
      politica: 'A Reforma Protestante fracionando o Sacro Império em ligas de príncipes luteranos contra o imperador católico Carlos V.',
      sociedade: 'Alfabetização impulsionada pela Bíblia vernácula impressa; ascensão da burguesia letrada nas cidades comerciais de Nuremberg e Augsburgo.',
      musica: 'Corais luteranos cantados em alemão pela congregação inteira, abrindo caminho para a tradição musical protestante alemã.',
      arquitetura: 'Prefeituras renascentistas germânicas com frontões em espiral ornamentados e castelos com pátios italianizados (Heidelberg).',
      tecnologia: 'A invenção da Imprensa com tipos móveis de metal por Johannes Gutenberg em Mainz (1440), revolucionando o conhecimento global.',
      religiao: 'Martinho Lutero fixando as 95 Teses em Wittenberg (1517), rompendo com Roma contra a venda de indulgências.',
      economia: 'A família de banqueiros Fugger em Augsburgo, os maiores financiadores da realeza e papado do século XVI.',
      filosofia: 'Humanismo cristão de Erasmo de Roterdã e Melanchthon, defendendo o estudo das fontes bíblicas originais.'
    },
    highlights: ['Albrecht Dürer', 'Johannes Gutenberg', 'Martinho Lutero', '95 Teses', 'Família Fugger']
  },
  {
    id: 'espanha_renascimento',
    regionId: 'espanha',
    eraId: 'renascimento-maneirismo',
    startYear: 1400,
    endYear: 1600,
    facets: {
      arte: 'Transição do estilo Plateresco e místico para o Maneirismo singular de El Greco em Toledo, com figuras alongadas e cores incandescentes.',
      politica: 'Unificação dos Reinos de Castela e Aragão (Reis Católicos) e o auge do Império Espanhol no Século de Ouro sob Filipe II.',
      sociedade: 'Estrutura social dominada pela fidalguia e pelo zelo religioso de "limpeza de sangue" na Inquisição Espanhola.',
      musica: 'Polifonia sacra mística de Tomás Luis de Victoria e obras para vihuela de cordas nas cortes de Madri.',
      arquitetura: 'Estilo Plateresco ornamentado e a austeridade geométrica monumental do Real Monasterio de El Escorial de Juan de Herrera.',
      tecnologia: 'Navegação transatlântica, cartografia do Novo Mundo e avanços na fundição de artilharia naval dos galeões.',
      religiao: 'Triunfo do Catolicismo militante, expulsão de judeus e mouriscos (1492) e o misticismo de Santa Teresa de Ávila e São João da Cruz.',
      economia: 'Afluxo colossal de prata das minas de Potosí e Zacatecas nas Américas, gerando hiperinflação na Europa.',
      filosofia: 'Escola de Salamanca (Francisco de Vitoria) desenvolvendo os primeiros conceitos de Direito Internacional e direitos humanos.'
    },
    highlights: ['El Greco', 'Século de Ouro', 'El Escorial', 'Prata das Américas', 'Inquisição']
  },
  {
    id: 'america_precolombiana_renascimento',
    regionId: 'america-pre-colombiana',
    eraId: 'renascimento-maneirismo',
    startYear: 1400,
    endYear: 1600,
    facets: {
      arte: 'Arte plumar monumental, esculturas em pedra de deuses, cerâmica policromada e orfebraria de ouro sofisticada entre Astecas e Incas.',
      politica: 'Grandes impérios teocráticos altamente centralizados: Império Asteca (Tenochtitlán) e Império Inca (Tawantinsuyu em Cusco).',
      sociedade: 'Sociedades urbanas complexas divididas em nobreza sacerdotal, guerreiros, artesãos especializados e agricultores.',
      musica: 'Música ritualística baseada em tambores (huehuetl), flautas de argila, ocarinas e guizos metálicos.',
      arquitetura: 'Pirâmides escalonadas de Tenochtitlán e a engenharia antissísmica em pedra polida de Machu Picchu e Sacsayhuamán.',
      tecnologia: 'Sistemas hidráulicos de irrigação, agricultura de chinampas (jardins flutuantes) e o sistema de registro de dados Quipu entre os Incas.',
      religiao: 'Religiões cosmogônicas baseadas na manutenção do ciclo solar através de rituais e oferendas às divindades (Quetzalcóatl, Inti).',
      economia: 'Economia agrícola baseada no milho, batata e feijão, com feiras de trocas vibrantes sem uso de moeda metálica.',
      filosofia: 'Poesia filosófica asteca (Nahuatl) refletindo sobre a efemeridade da vida na terra ("Cantos de Flores e Manta").'
    },
    highlights: ['Tenochtitlán', 'Machu Picchu', 'Quipu', 'Orfebraria Inca e Asteca', 'Calendário Solar']
  },
  {
    id: 'brasil_renascimento',
    regionId: 'brasil',
    eraId: 'renascimento-maneirismo',
    startYear: 1400,
    endYear: 1600,
    facets: {
      arte: 'Arte plumária indígena tupinambá espetacular (mantos de penas de guará), cerâmica utilitária e as primeiras pinturas e gravuras dos viajantes (Hans Staden).',
      politica: 'Chegada da armada portuguesa de Pedro Álvares Cabral (1500), criação das Capitanias Hereditárias e fundação do Governo-Geral em Salvador (1549).',
      sociedade: 'Choque civilizacional entre as populações originárias indígenas e os colonizadores portugueses; início do tráfico de escravizados africanos.',
      musica: 'Cantos e danças circulares indígenas registradas por cronistas; primeiros autos teatrais e hinos sacros compostos pelo padre José de Anchieta.',
      arquitetura: 'Primeiras fortificações de pau-a-pique e pedra-e-cal em Salvador e Olinda, e colégios jesuíticos quinhentistas.',
      tecnologia: 'Conhecimento indígena fitoterápico da floresta atlântica; introdução de engenhos de cana-de-açúcar movidos a água e tração animal.',
      religiao: 'Cosmovisões xamânicas Tupi-Guarani da "Terra sem Mal", confrontadas pela catequese católica dos jesuítas (Manuel da Nóbrega e Anchieta).',
      economia: 'Ciclo do Pau-Brasil com escambo indígena, seguido da implantação da agroindústria açucareira nos engenhos do Nordeste.',
      filosofia: 'Carta de Pero Vaz de Caminha descrevendo o "novo mundo" com o olhar renascentista de deslumbramento e paraíso terrestre.'
    },
    highlights: ['Carta de Caminha', 'Mantos Tupinambás', 'Fundação de Salvador', 'José de Anchieta', 'Ciclo do Açúcar']
  },

  // =============================================================
  // 5. BARROCO & ROCOCÓ (1600 – 1780)
  // =============================================================
  {
    id: 'brasil_barroco',
    regionId: 'brasil',
    eraId: 'barroco-rococo',
    startYear: 1600,
    endYear: 1780,
    facets: {
      arte: 'Desenvolvimento do Barroco e Rococó Mineiro e Baiano. Destaque para Aleijadinho (escultura em pedra-sabão e talha dourada) e Mestre Ataíde (pinturas de tetos ilusionistas nas igrejas).',
      politica: 'Brasil Colonial sob domínio português. Período do Ciclo do Ouro em Minas Gerais e fiscalização rígida da Coroa (Quinto, Derrama).',
      sociedade: 'Estrutura social profundamente estratificada, baseada no trabalho escravizado africano e na aristocracia dos senhores de engenho e mineradores.',
      musica: 'Florescimento da música sacra mineira (Música Colonial), composta predominantemente por músicos negros e mulatos alforriados (como Emerico Lobo de Mesquita).',
      arquitetura: 'Igrejas barrocas e rococós com fachadas imponentes, curvas e interiores suntuosos em talha dourada em Ouro Preto, Mariana, Salvador e Recife.',
      tecnologia: 'Técnicas de mineração em leito de rio, construção civil em alvenaria de pedra e estuque, e engenhos de açúcar.',
      religiao: 'Catolicismo rígido da Contrarreforma imposto pela Igreja Católica e ordens religiosas (Jesuítas, Franciscanos e Carmelitas), com sincretismo velado.',
      economia: 'Transição da economia açucareira do Nordeste para a corrida do ouro e dos diamantes no Centro-Sul (Minas Gerais).',
      filosofia: 'Surgimento das primeiras ideias iluministas trazidas por jovens da elite que estudavam em Coimbra, culminando na Inconfidência Mineira (1789).'
    },
    highlights: ['Aleijadinho', 'Mestre Ataíde', 'Barroco Mineiro', 'Ciclo do Ouro', 'Ouro Preto']
  },
  {
    id: 'italia_barroco',
    regionId: 'italia',
    eraId: 'barroco-rococo',
    startYear: 1600,
    endYear: 1780,
    facets: {
      arte: 'Nascimento do Barroco em Roma com Caravaggio (tenebrismo) e Bernini (escultura e arquitetura teatral). Pintura ilusionista de tetos por Andrea Pozzo.',
      politica: 'Fragmentação política em estados pontifícios, repúblicas (Veneza) e territórios sob influência espanhola. O Papado como patrono central das artes.',
      sociedade: 'A corte papal e a nobreza patrícia dominavam a vida pública; festas religiosas teatrais e procissões rituais para engajar a população.',
      musica: 'Invenção e apogeu da Ópera (Claudio Monteverdi em Mantua/Veneza) e o florescimento do concerto barroco com Antonio Vivaldi.',
      arquitetura: 'Praça de São Pedro de Bernini, fachada de San Carlo alle Quattro Fontane por Borromini; dinamismo de fachadas onduladas.',
      tecnologia: 'Avanços na óptica e astronomia com Galileu Galilei enfrentando a Inquisição em Roma.',
      religiao: 'Centro do catolicismo da Contrarreforma após o Concílio de Trento, utilizando a arte dramática como propaganda espiritual.',
      economia: 'Declínio do comércio marítimo mediterrâneo frente às rotas atlânticas, sustentado por serviços financeiros e mecenato religioso.',
      filosofia: 'Tensão entre o pensamento científico emergente (Galileu, Bruno) e a ortodoxia dogmática da Contrarreforma.'
    },
    highlights: ['Caravaggio', 'Bernini', 'Vivaldi', 'Monteverdi', 'Contrarreforma']
  },
  {
    id: 'franca_barroco',
    regionId: 'franca',
    eraId: 'barroco-rococo',
    startYear: 1600,
    endYear: 1780,
    facets: {
      arte: 'Barroco clássico da corte de Luís XIV (Hyacinthe Rigaud, Nicolas Poussin), evoluindo para a elegância rococó de Watteau, Boucher e Fragonard.',
      politica: 'Auge do Absolutismo Monárquico sob o "Rei Sol" (Luís XIV) e a centralização do poder no Palácio de Versalhes.',
      sociedade: 'Corte aristocrática cerimonialista em Versalhes e posterior ascensão dos salões literários urbanos da burguesia e intelectuais em Paris.',
      musica: 'Música de corte de Jean-Baptiste Lully e Jean-Philippe Rameau; tragédia lírica francesa e balé de corte.',
      arquitetura: 'Grandiosidade neoclássica do Palácio de Versalhes (Jules Hardouin-Mansart e jardins de André Le Nôtre).',
      tecnologia: 'Fundação da Academia de Ciências por Colbert e desenvolvimento do tear mecânico e cartografia do reino.',
      religiao: 'Conflitos entre católicos e protestantes (huguenotes), terminando com a revogação do Edito de Nantes.',
      economia: 'Mercantilismo estatal (Colbertismo) focado em manufaturas de luxo (tapeçarias Gobelins, porcelana) e império colonial.',
      filosofia: 'Surgimento do Iluminismo (Voltaire, Rousseau, Montesquieu, Diderot com a Enciclopédia) questionando o poder absoluto.'
    },
    highlights: ['Luís XIV', 'Palácio de Versalhes', 'Rococó', 'Iluminismo', 'Voltaire']
  },
  {
    id: 'alemanha_barroco',
    regionId: 'alemanha',
    eraId: 'barroco-rococo',
    startYear: 1600,
    endYear: 1780,
    facets: {
      arte: 'Barroco e Rococó exuberante da Baviera e Áustria: esculturas em estuque dourado de Asam e afrescos celestiais de Cosmas Damian Asam.',
      politica: 'Devastação da Guerra dos Trinta Anos (1618–1648), Paz de Vestfália e a ascensão do Reino da Prússia sob Frederico o Grande.',
      sociedade: 'Cortes principescas fragmentadas competindo em sofisticação artística e reconstrução populacional pós-guerra.',
      musica: 'Apogeu absoluto da música barroca mundial com Johann Sebastian Bach em Leipzig e Georg Friedrich Händel.',
      arquitetura: 'Igrejas de peregrinação rococó como a Wieskirche e a Basílica de Vierzehnheiligen por Balthasar Neumann.',
      tecnologia: 'Cálculo infinitesimal descoberto de forma independente por Gottfried Wilhelm Leibniz e o desenvolvimento do tear mecânico.',
      religiao: 'Coexistência formalizada entre luteranos, calvinistas e católicos nos territórios germânicos.',
      economia: 'Recuperação econômica agrária e mercantilismo cameralista prussiano focado em autossuficiência.',
      filosofia: 'Racionalismo alemão de Leibniz (Monadologia) e o início do Iluminismo germânico (Aufklärung).'
    },
    highlights: ['J. S. Bach', 'Wieskirche', 'Balthasar Neumann', 'Leibniz', 'Guerra dos Trinta Anos']
  },
  {
    id: 'japao_barroco',
    regionId: 'japao',
    eraId: 'barroco-rococo',
    startYear: 1600,
    endYear: 1780,
    facets: {
      arte: 'Florescimento da arte do Ukiyo-e ("Pinturas do Mundo Flutuante") em gravuras em madeira; pintura da Escola Rimpa com fundos de folha de ouro (Ogata Korin).',
      politica: 'Início do Xogunato Tokugawa (Período Edo) e a política de isolamento nacional rígido (Sakoku). Pax Tokugawa.',
      sociedade: 'Hierarquia rígida de classes (Samurai, Camponeses, Artesãos, Comerciantes); florescimento da cultura urbana dos chōnin em Edo (Tóquio).',
      musica: 'Consolidação do Teatro Kabuki, Bunraku (teatro de marionetes) e a música tradicional para Shamisen e Koto.',
      arquitetura: 'Castelos feudais fortificados (como Himeji) e arquitetura de chá (sōan) com foco na sobriedade estética wabi-sabi.',
      tecnologia: 'Estudos holandeses (Rangaku) introduzindo medicina, anatomia e botânica ocidental via enclave de Dejima.',
      religiao: 'Sincretismo entre Xintoísmo e Budismo Zen, com forte influência das normas éticas do Neoconfucionismo estatal.',
      economia: 'Crescimento de uma economia monetária urbana, comércio interno vibrante e mercado de arroz centralizado em Osaka.',
      filosofia: 'Neoconfucionismo como ideologia oficial e desenvolvimento da poesia Haiku por Matsuo Bashō.'
    },
    highlights: ['Período Edo', 'Ukiyo-e', 'Matsuo Bashō', 'Xogunato Tokugawa', 'Escola Rimpa']
  },

  // =============================================================
  // 6. NEOCLASSICISMO & ROMANTISMO (1780 – 1850)
  // =============================================================
  {
    id: 'franca_neoclassicismo_romantismo',
    regionId: 'franca',
    eraId: 'neoclassicismo-romantismo',
    startYear: 1780,
    endYear: 1850,
    facets: {
      arte: 'Conflito titânico entre a ordem cívica neoclássica de Jacques-Louis David e Ingres contra o drama arrebatador do Romantismo de Eugène Delacroix (A Liberdade Guiando o Povo) e Théodore Géricault.',
      politica: 'Revolução Francesa de 1789, queda da Bastilha, ascensão e queda do Império Napoleônico, e as Revoluções de 1830 e 1848.',
      sociedade: 'Abolição dos privilégios feudais, ascensão definitiva da burguesia e surgimento do proletariado urbano industrial.',
      musica: 'Ópera romântica de Berlioz (Sinfonia Fantástica com orquestração revolucionária) e estadas célebres de Chopin em Paris.',
      arquitetura: 'Monumentos neoclássicos triunfais napoleônicos: o Arco do Triunfo de l\'Étoile e a Igreja de La Madeleine inspirada em templos gregos.',
      tecnologia: 'Invenção do Daguerreótipo por Louis Daguerre (1839), inaugurando a era histórica da Fotografia.',
      religiao: 'Descristianização temporária na Revolução, seguida pela Concordata napoleônica e secularização do Estado.',
      economia: 'Início da industrialização francesa, expansão das primeiras ferrovias e sistema métrico decimal unificado.',
      filosofia: 'Declaração dos Direitos do Homem e do Cidadão e os alicerces do Positivismo por Auguste Comte.'
    },
    highlights: ['Delacroix', 'Jacques-Louis David', 'Revolução Francesa', 'Invenção da Fotografia', 'Arco do Triunfo']
  },
  {
    id: 'alemanha_neoclassicismo_romantismo',
    regionId: 'alemanha',
    eraId: 'neoclassicismo-romantismo',
    startYear: 1780,
    endYear: 1850,
    facets: {
      arte: 'O Romantismo sublime e contemplativo de Caspar David Friedrich (O Caminhante sobre o Mar de Névoa), representando a pequenez do homem diante da grandiosidade infinita da natureza.',
      politica: 'Dissolução do Sacro Império por Napoleão, guerras de libertação e o surgimento do anseio pela unificação nacional alemã.',
      sociedade: 'O movimento literário "Sturm und Drang" (Tempestade e Ímpeto); salões intelectuais em Berlim e Jena.',
      musica: 'Revolução sinfônica monumental de Ludwig van Beethoven na transição do classicismo vienense para o Romantismo heroico; lieder de Franz Schubert.',
      arquitetura: 'Neoclassicismo prussiano de Karl Friedrich Schinkel em Berlim (Altes Museum) e o Portão de Brandemburgo.',
      tecnologia: 'Primeiras locomotivas na Prússia e desenvolvimento da química orgânica por Justus von Liebig.',
      religiao: 'Pietismo luterano enfatizando o sentimento interior e o ressurgimento da teologia romântica de Schleiermacher.',
      economia: 'Criação da união aduaneira Zollverein (1834), alavancando a integração econômica e siderúrgica alemã.',
      filosofia: 'Idealismo Alemão no ápice: Immanuel Kant (Crítica da Razão Pura), G.W.F. Hegel (Dialética Histórica) e Schopenhauer.'
    },
    highlights: ['Caspar David Friedrich', 'Beethoven', 'Immanuel Kant', 'Hegel', 'Sturm und Drang']
  },
  {
    id: 'inglaterra_neoclassicismo_romantismo',
    regionId: 'inglaterra',
    eraId: 'neoclassicismo-romantismo',
    startYear: 1780,
    endYear: 1850,
    facets: {
      arte: 'A revolução da paisagem romântica: J.M.W. Turner com suas tempestades luminosas e etéreas precursoras da abstração, e John Constable retratando a vida rural inglesa.',
      politica: 'Monarquia parlamentar britânica consolidada, vitória sobre Napoleão em Waterloo (1815) e expansão imperial.',
      sociedade: 'A Primeira Revolução Industrial transformando camponeses em operários de fábricas têxteis em Manchester e Londres; protestos ludistas.',
      musica: 'Concertos públicos orquestrais em Londres atraindo Haydn e Mendelssohn; baladas folclóricas escocesas e inglesas.',
      arquitetura: 'Estilo Neogótico na reconstrução do Palácio de Westminster (Parlamento britânico) por Charles Barry e A.W.N. Pugin.',
      tecnologia: 'Máquina a vapor de James Watt, locomotiva a vapor "Rocket" de George Stephenson e teares mecânicos industriais.',
      religiao: 'Avivamento metodista entre a classe trabalhadora operária e tradição anglicana da Igreja da Inglaterra.',
      economia: 'A Grã-Bretanha como a "Oficina do Mundo", liderando a produção mundial de carvão, ferro fundido e algodão.',
      filosofia: 'Poesia romântica transcendental de William Blake, Lord Byron, Percy Shelley e William Wordsworth; economia política de Adam Smith e David Ricardo.'
    },
    highlights: ['J.M.W. Turner', 'John Constable', 'Revolução Industrial', 'William Blake', 'Máquina a Vapor']
  },
  {
    id: 'brasil_neoclassicismo_romantismo',
    regionId: 'brasil',
    eraId: 'neoclassicismo-romantismo',
    startYear: 1780,
    endYear: 1850,
    facets: {
      arte: 'Chegada da Missão Artística Francesa de 1816: Jean-Baptiste Debret documentando a vida cotidiana, indígenas e escravizados; Nicolas-Antoine Taunay e a fundação da Academia Imperial de Belas Artes.',
      politica: 'Transferência da Corte Portuguesa para o Rio de Janeiro (1808), Independência do Brasil (1822) e Primeiro Reinado sob Dom Pedro I.',
      sociedade: 'Abertura dos Portos às Nações Amigas, transformação do Rio em corte europeia tropical e intensa presença escravista urbana.',
      musica: 'Música sacra e clássica do Padre José Maurício Nunes Garcia, mestre da Capela Real aclamado por Dom João VI.',
      arquitetura: 'Neoclassicismo oficial implantado por Grandjean de Montigny (Casa França-Brasil, Academia de Belas Artes).',
      tecnologia: 'Criação da Imprensa Régia, do Jardim Botânico do Rio de Janeiro e das primeiras faculdades de Medicina e Direito.',
      religiao: 'Catolicismo como religião oficial do Império brasileiro, com manutenção de irmandades leigas e sincretismo.',
      economia: 'Abertura comercial internacional quebrando o exclusivo colonial; início da transição cafeeira no Vale do Paraíba.',
      filosofia: 'Romantismo indigenista de Gonçalves Dias ("Canção do Exílio", "I-Juca-Pirama") forjando o mito de identidade nacional brasileira.'
    },
    highlights: ['Missão Francesa de 1816', 'Jean-Baptiste Debret', 'Independência (1822)', 'José Maurício Nunes Garcia', 'Gonçalves Dias']
  },
  {
    id: 'espanha_neoclassicismo_romantismo',
    regionId: 'espanha',
    eraId: 'neoclassicismo-romantismo',
    startYear: 1780,
    endYear: 1850,
    facets: {
      arte: 'A figura titânica e revolucionária de Francisco de Goya: dos retratos reais ao horror da guerra em "Os Fuzilamentos de 3 de Maio de 1808" e as perturbadoras "Pinturas Negras".',
      politica: 'Invasão napoleônica da Espanha, Guerra da Independência (1808–1814), Constituição liberal de Cádiz (1812) e Guerras Carlistas.',
      sociedade: 'Povo espanhol em resistência armada de guerrilha contra os exércitos de Napoleão; choque entre liberais e monarquistas absolutistas.',
      musica: 'Consolidação das primeiras formas da Zarzuela espanhola e da guitarra flamenca com mestres como Fernando Sor.',
      arquitetura: 'Neoclassicismo madrileño: Museu do Prado projetado por Juan de Villanueva e a Porta de Alcalá.',
      tecnologia: 'Início da modernização das minas de mercúrio de Almadén e primeiras ferrovias pioneiras (Barcelona-Mataró).',
      religiao: 'Fim formal dos tribunais da Inquisição espanhola após séculos de atuação inquisitorial.',
      economia: 'Perda colossal da maioria das colônias no continente americano (independências hispano-americanas).',
      filosofia: 'A célebre gravura de Goya: "O sono da razão produz monstros", prenunciando o Modernismo e a crítica aos horrores da razão instrumental.'
    },
    highlights: ['Francisco de Goya', 'Fuzilamentos de 3 de Maio', 'Pinturas Negras', 'Guerra da Independência', 'Museu do Prado']
  },

  // =============================================================
  // 7. SÉCULO XIX: REALISMO & IMPRESSIONISMO (1850 – 1900)
  // =============================================================
  {
    id: 'franca_seculo_xix',
    regionId: 'franca',
    eraId: 'seculo-xix',
    startYear: 1850,
    endYear: 1900,
    facets: {
      arte: 'Epicentro mundial da pintura moderna: Realismo de Gustave Courbet, escândalo do "Almoço na Relva" de Manet, Revolução Impressionista (Monet, Renoir, Degas) e Pós-Impressionismo (Cézanne, Van Gogh, Gauguin).',
      politica: 'Segundo Império de Napoleão III, Comuna de Paris de 1871 e consolidação da Terceira República Francesa.',
      sociedade: 'A "Belle Époque" parisiense, lazer burguês nos cafés-concerto de Montmartre, dançarinas de cancã e o "flâneur" urbano.',
      musica: 'Impressionismo musical etéreo de Claude Debussy (Prelúdio à Tarde de um Fauno) e as óperas célebres de Georges Bizet (Carmen).',
      arquitetura: 'Reforma radical de Paris pelo Barão Haussmann com largas avenidas, e a inauguração da Torre Eiffel em ferro forjado para a Exposição Universal de 1889.',
      tecnologia: 'Invenção do Cinema pelos Irmãos Lumière (1895), tubos de tinta portáteis que permitiram pintar ao ar livre ("en plein air") e pasteurização por Louis Pasteur.',
      religiao: 'Laicização progressiva da educação e da vida cívica francesa.',
      economia: 'Auge do capitalismo financeiro e expansão das grandes lojas de departamento (Le Bon Marché).',
      filosofia: 'Simbolismo literário de Baudelaire ("As Flores do Mal"), Mallarmé e o naturalismo literário de Émile Zola.'
    },
    highlights: ['Claude Monet', 'Impressionismo', 'Torre Eiffel', 'Irmãos Lumière', 'Paul Cézanne']
  },
  {
    id: 'brasil_seculo_xix',
    regionId: 'brasil',
    eraId: 'seculo-xix',
    startYear: 1850,
    endYear: 1900,
    facets: {
      arte: 'Apogeu da pintura histórica da Academia Imperial: Victor Meirelles ("A Primeira Missa no Brasil"), Pedro Américo ("Batalha do Avaí", "O Grito do Ipiranga") e o Realismo caipira de Almeida Júnior.',
      politica: 'Segundo Reinado estável sob Dom Pedro II, Guerra do Paraguai (1864–1870), Abolição da Escravidão com a Lei Áurea (1888) e Proclamação da República (1889).',
      sociedade: 'Declínio do cativeiro, início da imigração em massa europeia (italianos) para as lavouras de café em São Paulo e urbanização carioca.',
      musica: 'Ópera nacional de Carlos Gomes ("Il Guarany" aclamado no Scala de Milão) e o surgimento do Choro e do Maxixe no Rio de Janeiro (Chiquinha Gonzaga).',
      arquitetura: 'Ecletismo arquitetônico nos teatros municipais, Estação da Luz e palacetes neoclássicos dos barões do café.',
      tecnologia: 'Primeiras linhas de telégrafo e ferrovias (Estrada de Ferro D. Pedro II), iluminação a gás e o imperador entusiasta da fotografia e telefone de Bell.',
      religiao: 'Catolicismo padroado imperial mantido, com crescimento velado do espiritismo kardecista e das primeiras igrejas protestantes.',
      economia: 'A marcha do café pelo Vale do Paraíba e Oeste Paulista transformando o Brasil no maior exportador mundial do grão.',
      filosofia: 'Positivismo militar ("Ordem e Progresso") na República e a genialidade cética e irônica de Machado de Assis na literatura.'
    },
    highlights: ['Machado de Assis', 'Carlos Gomes', 'Almeida Júnior', 'Pedro Américo', 'Abolição (1888)']
  },
  {
    id: 'inglaterra_seculo_xix',
    regionId: 'inglaterra',
    eraId: 'seculo-xix',
    startYear: 1850,
    endYear: 1900,
    facets: {
      arte: 'A Irmandade Pré-Rafaelita (Dante Gabriel Rossetti, John Everett Millais, Holman Hunt) resgatando a pureza e o detalhismo luminoso anterior a Rafael, e o movimento Arts & Crafts de William Morris.',
      politica: 'Era Vitoriana no auge da "Pax Britannica", com a Rainha Vitória reinando sobre o maior império colonial da história humana.',
      sociedade: 'Sociedade de moralismo puritano rígido, desigualdade abismal entre a opulência dos industriais e a miséria das favelas descritas por Charles Dickens.',
      musica: 'Operetas cômicas de Gilbert & Sullivan e a consagração das orquestras corais em salões como o Royal Albert Hall.',
      arquitetura: 'O Palácio de Cristal (Crystal Palace) de Joseph Paxton para a Grande Exposição de 1851 em ferro e vidro pré-fabricado.',
      tecnologia: 'A teoria da evolução biológica de Charles Darwin ("A Origem das Espécies", 1859), metropolitano de Londres (primeiro metrô do mundo) e cabos submarinos telegráficos.',
      religiao: 'Tensão abaladora entre o literalismo bíblico e a nova geologia/teoria da evolução de Darwin.',
      economia: 'Domínio dos mares, libras esterlinas como moeda hegemônica global e a City de Londres como o centro financeiro do planeta.',
      filosofia: 'Utilitarismo de John Stuart Mill, teoria socialista de Karl Marx escrevendo "O Capital" na Biblioteca Britânica.'
    },
    highlights: ['Pré-Rafaelitas', 'Charles Darwin', 'Rainha Vitória', 'William Morris', 'Crystal Palace']
  },

  // =============================================================
  // 8. VANGUARDAS DO SÉCULO XX (1900 – 1945)
  // =============================================================
  {
    id: 'brasil_vanguardas',
    regionId: 'brasil',
    eraId: 'vanguardas-seculo-xx',
    startYear: 1900,
    endYear: 1945,
    facets: {
      arte: 'Semana de Arte Moderna de 1922 em SP. Movimentos Pau-Brasil e Antropofágico de Tarsila do Amaral e Oswald de Andrade; Cândido Portinari, Anita Malfatti e Di Cavalcanti.',
      politica: 'Fim da República Velha ("Café com Leite"), Revolução de 1930 e a ditadura do Estado Novo de Getúlio Vargas (1937–1945).',
      sociedade: 'Urbanização rápida de São Paulo e Rio de Janeiro, imigração europeia e japonesa e a formação da classe operária industrial.',
      musica: 'Nascimento do Samba urbano no Rio de Janeiro, Choro, e as composições geniais eruditas de Heitor Villa-Lobos (Bachianas Brasileiras).',
      arquitetura: 'Pioneirismo do projeto do Ministério da Educação e Saúde no Rio (com conselho de Le Corbusier) e o conjunto da Pampulha por Niemeyer.',
      tecnologia: 'Inauguração das transmissões de Rádio no Brasil, expansão das ferrovias e início da industrialização de base (CSN).',
      religiao: 'Predomínio do catolicismo e consolidação das religiões de matriz africana (Candomblé, Umbanda) na cultura urbana.',
      economia: 'Crise do café com a quebra de Wall Street em 1929 e a transição programada para a industrialização substitutiva de importações.',
      filosofia: 'Manifesto Antropófago de Oswald de Andrade e os ensaios de interpretação do Brasil (Casa-Grande & Senzala de Gilberto Freyre).'
    },
    highlights: ['Semana de 1922', 'Tarsila do Amaral', 'Villa-Lobos', 'Getúlio Vargas', 'Antropofagia']
  },
  {
    id: 'alemanha_vanguardas',
    regionId: 'alemanha',
    eraId: 'vanguardas-seculo-xx',
    startYear: 1900,
    endYear: 1945,
    facets: {
      arte: 'Expressionismo (Die Brücke, Der Blaue Reiter), fundação da escola Bauhaus (Walter Gropius, Paul Klee, Kandinsky) e a fotomontagem do Dadaísmo berlinense.',
      politica: 'Primeira Guerra Mundial, queda do Império Alemão, conturbada República de Weimar e ascensão catastrófica do Nazismo.',
      sociedade: 'Cabarés de Berlim dos anos 20, hiperinflação, agitação política de rua e posterior controle totalitário e perseguição à "Arte Degenerada".',
      musica: 'Atonalismo e dodecafonismo da Segunda Escola de Viena (Arnold Schoenberg) e a ópera social de Kurt Weill (Ópera dos Três Vinténs).',
      arquitetura: 'Arquitetura funcionalista da Bauhaus em Dessau e o racionalismo de Mies van der Rohe antes do fechamento pelos nazistas.',
      tecnologia: 'Física quântica de Albert Einstein e Max Planck, teoria da relatividade, avanços em química industrial e aviação.',
      religiao: 'Tensão entre a tradição protestante e católica e a ideologia neopagã e anticristã do regime nazista.',
      economia: 'Hiperinflação devastadora em 1923, Plano Dawes e posterior economia de rearmamento militar do III Reich.',
      filosofia: 'Fenomenologia e Existencialismo (Martin Heidegger), Teoria Crítica da Escola de Frankfurt (Walter Benjamin, Adorno).'
    },
    highlights: ['Bauhaus', 'Expressionismo', 'Walter Benjamin', 'República de Weimar', 'Arte Degenerada']
  },
  {
    id: 'franca_vanguardas',
    regionId: 'franca',
    eraId: 'vanguardas-seculo-xx',
    startYear: 1900,
    endYear: 1945,
    facets: {
      arte: 'Paris como capital mundial das artes: Fauvismo (Matisse), Cubismo (Picasso, Braque), Surrealismo (Breton, Dalí, Magritte) e Art Déco.',
      politica: 'Vitória cara na Primeira Guerra Mundial, instabilidade parlamentar na III República e ocupação nazista durante a Segunda Guerra.',
      sociedade: 'A geração perdida de escritores e artistas estrangeiros em Paris (Hemingway, Joyce, Picasso, Gertrude Stein) nos cafés de Montparnasse.',
      musica: 'Impressionismo musical de Claude Debussy e Maurice Ravel; jazz norte-americano nos clubes de Paris com Josephine Baker.',
      arquitetura: 'Nascimento da Arquitetura Moderna com Le Corbusier (Villa Savoye) e os Cinco Pontos da Nova Arquitetura.',
      tecnologia: 'Avanços na radioatividade com Marie Curie e fundação da indústria automobilística (Renault, Citroën).',
      religiao: 'Laicismo republicano estrito após a lei de separação entre Igreja e Estado de 1905.',
      economia: 'Economia industrial europeia afetada pela Grande Depressão de 1929 e pelas reconstruções de guerra.',
      filosofia: 'Existencialismo de Jean-Paul Sartre e Simone de Beauvoir nascendo nas reuniões do café Les Deux Magots.'
    },
    highlights: ['Paris Capital das Artes', 'Picasso', 'Le Corbusier', 'Surrealismo', 'Existencialismo']
  },
  {
    id: 'italia_vanguardas',
    regionId: 'italia',
    eraId: 'vanguardas-seculo-xx',
    startYear: 1900,
    endYear: 1945,
    facets: {
      arte: 'O dinamismo explosivo do Futurismo de Umberto Boccioni e Giacomo Balla, seguido pela Pintura Metafísica enigmática de Giorgio de Chirico.',
      politica: 'A Marcha sobre Roma de 1922 e a ascensão da Ditadura Fascista de Benito Mussolini, aliada ao Eixo na Segunda Guerra Mundial.',
      sociedade: 'Mobilização fascista de massa, culto à força juvenil e choque violento entre movimentos operários e camisas negras.',
      musica: 'O "Intonarumori" de Luigi Russolo inaugurando a arte dos ruídos (Noise Music); óperas tardias de Giacomo Puccini.',
      arquitetura: 'Arquitetura Racionalista Italiana (Giuseppe Terragni - Casa del Fascio em Como) e o monumentalismo metafísico do bairro EUR em Roma.',
      tecnologia: 'Avanços na radiotelefonia sem fio com Guglielmo Marconi e a fábrica automobilística vertical da Fiat Lingotto.',
      religiao: 'Tratado de Latrão (1929) estabelecendo a soberania do Estado do Vaticano e aliança com a Igreja Católica.',
      economia: 'Economia corporativista estatal fascista e o esforço de autarquia militar nos anos 30.',
      filosofia: 'Manifesto Futurista de F.T. Marinetti exaltando a máquina e a velocidade, e o pensamento marxista nos Cadernos do Cárcere de Antonio Gramsci.'
    },
    highlights: ['Futurismo', 'Umberto Boccioni', 'Giorgio de Chirico', 'Antonio Gramsci', 'Racionalismo']
  },

  // =============================================================
  // 9. PÓS-GUERRA & ARTE CONCEITUAL (1945 – 1990)
  // =============================================================
  {
    id: 'brasil_pos_guerra',
    regionId: 'brasil',
    eraId: 'pos-guerra-conceitual',
    startYear: 1945,
    endYear: 1990,
    facets: {
      arte: 'Concretismo e Movimento Neoconcreto de Lygia Clark (Bichos manipuláveis) e Hélio Oiticica (Parangolés); Tropicália, e a Arte Conceitual de resistência política de Cildo Meireles (Inserções em Circuitos Ideológicos).',
      politica: 'Período democrático dos anos 50 (JK), golpe militar de 1964, Ditadura Militar com AI-5 (1968), e redemocratização com as Diretas Já (1984).',
      sociedade: 'Otimismo desenvolvimentista ("50 anos em 5"), seguido pela censura e resistência cultural jovem nos festivais de música e universidades.',
      musica: 'Invenção da Bossa Nova com João Gilberto e Tom Jobim; explosão do Tropicalismo (Caetano Veloso, Gilberto Gil) e ascensão do Rock Nacional dos anos 80 (Legião Urbana).',
      arquitetura: 'A epopeia da construção de Brasília (1960), projeto urbanístico genial de Lúcio Costa e palácios curvos monumentais de Oscar Niemeyer.',
      tecnologia: 'Inauguração de Brasília, implantação da indústria automobilística multinacional e fundação da Embraer.',
      religiao: 'Teologia da Libertação com Dom Hélder Câmara e Leonardo Boff lutando pelos direitos dos pobres contra a opressão.',
      economia: 'O "Milagre Econômico" dos anos 70 seguido pela "Década Perdida" dos anos 80 marcada por hiperinflação crônica.',
      filosofia: 'Pedagogia do Oprimido de Paulo Freire revolucionando a educação mundial e a Teoria da Dependência.'
    },
    highlights: ['Lygia Clark', 'Hélio Oiticica', 'Brasília de Niemeyer', 'Bossa Nova', 'Cildo Meireles']
  },
  {
    id: 'inglaterra_pos_guerra',
    regionId: 'inglaterra',
    eraId: 'pos-guerra-conceitual',
    startYear: 1945,
    endYear: 1990,
    facets: {
      arte: 'Nascimento da Pop Art com o Independent Group (Richard Hamilton: "O que torna os lares de hoje tão diferentes?"), pintura existencialista visceral de Francis Bacon e Lucian Freud.',
      politica: 'Criação do Estado de Bem-Estar Social (NHS), descolonização do Império Britânico e a revolução neoliberal de Margaret Thatcher nos anos 80.',
      sociedade: 'A "Swinging London" dos anos 60 com Carnaby Street e a explosão de subculturas juvenis (Mods, Rockers, Punks em 1977).',
      musica: 'Invasão Britânica do Rock mundial com The Beatles, The Rolling Stones, Pink Floyd, Queen, David Bowie e o movimento Punk dos Sex Pistols.',
      arquitetura: 'Arquitetura Brutalista em concreto aparente (Barbican Estate em Londres) e o estilo High-Tech de Norman Foster e Richard Rogers.',
      tecnologia: 'Descoberta da estrutura em dupla hélice do DNA por Watson, Crick e Rosalind Franklin em Cambridge (1953).',
      religiao: 'Secularização acelerada da sociedade britânica e chegada de comunidades hindus, muçulmanas e caribenhas da Commonwealth.',
      economia: 'Crise industrial dos anos 70, greves dos mineiros e reestruturação financeira radical de Londres ("Big Bang" de 1986).',
      filosofia: 'Estudos Culturais de Birmingham (Stuart Hall) e a filosofia da linguagem cotidiana em Oxford.'
    },
    highlights: ['Francis Bacon', 'The Beatles', 'Richard Hamilton', 'Brutalismo', 'Dupla Hélice do DNA']
  },
  {
    id: 'alemanha_pos_guerra',
    regionId: 'alemanha',
    eraId: 'pos-guerra-conceitual',
    startYear: 1945,
    endYear: 1990,
    facets: {
      arte: 'O movimento revolucionário Fluxus, Joseph Beuys e o conceito de "Escultura Social" ("Todo ser humano é um artista"), e o Neoexpressionismo de Anselm Kiefer e Gerhard Richter.',
      politica: 'Divisão da Alemanha na Guerra Fria entre a RFA (capitalista) e a RDA (comunista), o Muro de Berlim (1961–1989) e a histórica Queda do Muro.',
      sociedade: 'O processo de luto e memória crítica do Holocausto (Vergangenheitsbewältigung) e a cultura alternativa e contracultural de Berlim Ocidental.',
      musica: 'Nascimento da música eletrônica pioneira com o Kraftwerk (Krautrock) e festivais de vanguarda de Karlheinz Stockhausen.',
      arquitetura: 'Reconstrução modernista aberta (Filarmônica de Berlim por Hans Scharoun) e a arquitetura das olimpíadas de Munique (Frei Otto).',
      tecnologia: 'Milagre Econômico Alemão (Wirtschaftswunder) com a liderança em engenharia mecânica e automotiva (Volkswagen, BMW, Siemens).',
      religiao: 'Igrejas protestantes na Alemanha Oriental servindo como refúgio pacífico para os protestos das "Velas" que derrubaram o Muro.',
      economia: 'A economia social de mercado da Alemanha Ocidental tornando-se a maior potência industrial da Europa.',
      filosofia: 'Teoria da Ação Comunicativa de Jürgen Habermas e a Escola de Frankfurt em debate público democrático.'
    },
    highlights: ['Joseph Beuys', 'Muro de Berlim (1989)', 'Kraftwerk', 'Gerhard Richter', 'Jürgen Habermas']
  },
  {
    id: 'franca_pos_guerra',
    regionId: 'franca',
    eraId: 'pos-guerra-conceitual',
    startYear: 1945,
    endYear: 1990,
    facets: {
      arte: 'O Novo Realismo (Nouveau Réalisme) fundado por Pierre Restany com Yves Klein (o célebre International Klein Blue - IKB), Arman, Niki de Saint Phalle e César.',
      politica: 'Quinta República fundada pelo General Charles de Gaulle, Guerra da Argélia e os levantes estudantis do Maio de 1968.',
      sociedade: 'A geração dos bulevares do Quartier Latin, cinema da Nouvelle Vague (Godard, Truffaut) e a liberação sexual e feminista.',
      musica: 'A chanson française de Edith Piaf, Jacques Brel e Serge Gainsbourg; música eletroacústica com Pierre Schaeffer.',
      arquitetura: 'Construção do Centro Georges Pompidou por Renzo Piano e Richard Rogers (1977), com suas tubulações coloridas expostas ao exterior.',
      tecnologia: 'O trem de altíssima velocidade TGV (1981), o caça Mirage e o consórcio aeroespacial europeu Airbus.',
      religiao: 'Consolidação de uma sociedade profundamente laica, com crescente presença de comunidades islâmicas norte-africanas.',
      economia: 'Os "Trinta Anos Gloriosos" (Trente Glorieuses) de crescimento econômico ininterrupto e modernização do padrão de vida.',
      filosofia: 'A era de ouro do Pós-Estruturalismo francês: Michel Foucault, Jacques Derrida, Gilles Deleuze e Jean Baudrillard.'
    },
    highlights: ['Yves Klein (IKB)', 'Centro Pompidou', 'Maio de 1968', 'Michel Foucault', 'Nouvelle Vague']
  },

  // =============================================================
  // 10. ERA DIGITAL & CONTEMPORÂNEA (1990 – 2026)
  // =============================================================
  {
    id: 'brasil_digital',
    regionId: 'brasil',
    eraId: 'era-digital-contemporanea',
    startYear: 1990,
    endYear: 2026,
    facets: {
      arte: 'Arte contemporânea multicultural, arte urbana e grafite reconhecidos mundialmente (OsGêmeos, Eduardo Kobra), coletivos de arte digital, bienais e obras de IA.',
      politica: 'Redemocratização, Constituição de 1988, alternância democrática de poder e intensa polarização política na era das redes sociais.',
      sociedade: 'Inclusão digital em massa via smartphones, ascensão das periferias, saraus e o fortalecimento do movimento negro e indígena.',
      musica: 'Funk carioca e paulista conquistando o mundo, Sertanejo universitário, Manguebeat de Chico Science, e a potência do Rap nacional (Racionais MC\'s).',
      arquitetura: 'Revitalização de centros culturais (Sesc Pompeia, Museu do Amanhã de Santiago Calatrava) e arquitetura sustentável vernacular.',
      tecnologia: 'Adoção massiva de Pix (pagamentos instantâneos), sistema de urnas eletrônicas seguras e polos de startups e fintechs.',
      religiao: 'Crescimento veloz das igrejas neopentecostais, persistência do catolicismo e preservação das tradições sagradas de matriz africana.',
      economia: 'Estabilização com o Plano Real (1994), boom de commodities agrícolas e consolidação como potência mundial de agronegócio e serviços.',
      filosofia: 'Pensamento contemporâneo anticolonial e sabedoria indígena com Ailton Krenak ("Ideias para Adiar o Fim do Mundo") e Davi Kopenawa.'
    },
    highlights: ['Ailton Krenak', 'Pix', 'Arte Urbana OsGêmeos', 'Manguebeat', 'Inclusão Digital']
  },
  {
    id: 'japao_digital',
    regionId: 'japao',
    eraId: 'era-digital-contemporanea',
    startYear: 1990,
    endYear: 2026,
    facets: {
      arte: 'Movimento Superflat de Takashi Murakami unindo arte tradicional e cultura pop, exposições interativas imersivas do coletivo TeamLab e arte generativa.',
      politica: 'Estabilidade política com o Partido Liberal Democrata (LDP), transição para a era imperial Reiwa (2019) e geopolítica no Pacífico.',
      sociedade: 'Desafios do envelhecimento populacional acelerado, cultura do consumo otaku e convivência com robôs assistentes.',
      musica: 'J-Pop global, ícones virtuais sintetizados com inteligência artificial como Hatsune Miku (Vocaloid), e trilhas de videogame aclamadas.',
      arquitetura: 'Minimalismo poético de Shigeru Ban (arquitetura de papelão para refugiados), Tadao Ando e SANAA (Kazuyo Sejima e Ryue Nishizawa).',
      tecnologia: 'Vanguarda mundial em robótica, trens-bala Shinkansen de levitação magnética, jogos eletrônicos (Nintendo, Sony) e semicondutores.',
      religiao: 'Integração contínua da espiritualidade xintoísta da pureza e do respeito aos kami com o cotidiano ultratecnológico.',
      economia: 'Reestruturação econômica de alta precisão pós-bolha imobiliária dos anos 90, com foco em eletrônica e componentes de alta tecnologia.',
      filosofia: 'Estética contemporânea do imperfeito e do efêmero fundindo tecnologia cibernética com o pensamento Zen tradicional.'
    },
    highlights: ['Takashi Murakami', 'TeamLab', 'Hatsune Miku', 'Shigeru Ban', 'Superflat']
  },
  {
    id: 'inglaterra_digital',
    regionId: 'inglaterra',
    eraId: 'era-digital-contemporanea',
    startYear: 1990,
    endYear: 2026,
    facets: {
      arte: 'Young British Artists (Damien Hirst com animais em formol, Tracey Emin), intervenções urbanas misteriosas e provocadoras de Banksy e a Tate Modern.',
      politica: 'A Era Tony Blair (New Labour), referendo do Brexit (2016) desvinculando o Reino Unido da União Europeia e sucessão da monarquia britânica.',
      sociedade: 'Londres cosmopolita ultradiversa, debates intensos sobre a memória colonial em estátuas e inclusão multicultural.',
      musica: 'Britpop dos anos 90 (Oasis, Blur), música eletrônica de clube (Trip-hop, Drum and Bass), Grime com Skepta e estrelas globais como Adele e Coldplay.',
      arquitetura: 'A silhueta futurista de Londres: The Gherkin por Norman Foster, The Shard por Renzo Piano e a ampliação da Tate Modern por Herzog & de Meuron.',
      tecnologia: 'Invenção da World Wide Web (WWW) por Sir Tim Berners-Lee (1989/1990) e o polo de inteligência artificial de ponta Google DeepMind em Londres.',
      religiao: 'Declínio do cristianismo tradicional e florescimento de comunidades religiosas multiculturais na capital.',
      economia: 'A City de Londres consolidada como a maior praça de câmbio de moedas internacionais e capital de fintechs da Europa.',
      filosofia: 'Filosofia da mente, debates éticos profundos sobre inteligência artificial e a teoria do "Realismo Capitalista" de Mark Fisher.'
    },
    highlights: ['Banksy', 'Damien Hirst', 'Tim Berners-Lee (WWW)', 'DeepMind', 'Tate Modern']
  },
  {
    id: 'china_digital',
    regionId: 'china',
    eraId: 'era-digital-contemporanea',
    startYear: 1990,
    endYear: 2026,
    facets: {
      arte: 'Ascensão retumbante da arte contemporânea chinesa: Ai Weiwei (ativismo e esculturas conceituais), Cai Guo-Qiang (desenhos pirotécnicos com pólvora) e Realismo Cínico de Yue Minjun.',
      politica: 'Abertura econômica continuada, entrada na OMC (2001), presidência de Xi Jinping e ascensão da China como superpotência mundial.',
      sociedade: 'A maior migração campo-cidade da história humana, erguendo megacidades com centenas de milhões de habitantes integrados por superaplicativos.',
      musica: 'Música pop chinesa contemporânea (C-Pop), orquestras ocidentais de prestígio internacional com virtuosos como Lang Lang e rock alternativo de Pequim.',
      arquitetura: 'Maravilhas da arquitetura contemporânea: Estádio Ninho de Pássaro (Herzog & de Meuron com Ai Weiwei) e a Torre da CCTV por Rem Koolhaas.',
      tecnologia: 'Liderança global em inteligência artificial, redes de internet 5G/6G, trens de alta velocidade, carros elétricos (BYD) e ecossistemas digitais (WeChat, TikTok).',
      religiao: 'Práticas do Budismo, Taoísmo e valores morais neoconfucionistas integrados à política de harmonia social do Estado.',
      economia: 'O "Milagre Chinês" que retirou 800 milhões de pessoas da pobreza extrema, tornando o país a segunda maior economia e a fábrica tecnológica do mundo.',
      filosofia: 'Nova síntese teórica chinesa entre o socialismo com características chinesas, tradição confucionista e governança algorítmica moderna.'
    },
    highlights: ['Ai Weiwei', 'Cai Guo-Qiang', 'Superaplicativo WeChat', 'Ninho de Pássaro', 'Ascensão Global']
  }
];
