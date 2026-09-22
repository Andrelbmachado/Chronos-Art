import { Era } from '../types';

export const ERAS: Era[] = [
  {
    id: 'pre-historia',
    name: 'Pré-História',
    startYear: -40000,
    endYear: -3000,
    displayYears: 'c. 40.000 a.C. – 3.000 a.C.',
    description: 'Primeiras expressões visuais, arte rupestre, estatuetas de fertilidade e estruturas megalíticas no Paleolítico e Neolítico.',
    color: '#8C6D53'
  },
  {
    id: 'antiguidade',
    name: 'Antiguidade',
    startYear: -3000,
    endYear: 476,
    displayYears: 'c. 3.000 a.C. – 476 d.C.',
    description: 'Civilizações clássicas e monumentais: Egito, Mesopotâmia, Grécia e Roma. Busca pela proporção, mito e arquitetura duradoura.',
    color: '#B8860B'
  },
  {
    id: 'idade-media',
    name: 'Idade Média',
    startYear: 476,
    endYear: 1400,
    displayYears: '476 – 1400 d.C.',
    description: 'Arte sacra bizantina, estilo românico e gótico. Vitrais, iluminuras, catedrais majestosas e simbolismo teocêntrico.',
    color: '#4B5563'
  },
  {
    id: 'renascimento-maneirismo',
    name: 'Renascimento e Maneirismo',
    startYear: 1400,
    endYear: 1600,
    displayYears: '1400 – 1600',
    description: 'Renascer do humanismo clássico, perspectiva linear, antropocentrismo, anatomia rigorosa e a transição estilizada do Maneirismo.',
    color: '#D97706'
  },
  {
    id: 'barroco-rococo',
    name: 'Barroco e Rococó',
    startYear: 1600,
    endYear: 1780,
    displayYears: '1600 – 1780',
    description: 'Dramatismo, claroscuro e ornamentação teatral do Barroco, evoluindo para a elegância leve, curvilínea e festiva do Rococó.',
    color: '#B45309'
  },
  {
    id: 'neoclassicismo-romantismo',
    name: 'Neoclassicismo e Romantismo',
    startYear: 1780,
    endYear: 1850,
    displayYears: '1780 – 1850',
    description: 'Oceano de tensão entre a ordem racionaliluminista e a paixão dramática, sublime, melancólica e nacionalista do Romantismo.',
    color: '#DC2626'
  },
  {
    id: 'seculo-xix',
    name: 'Realismo e Impressionismo',
    startYear: 1850,
    endYear: 1900,
    displayYears: '1850 – 1900',
    description: 'A luz ao ar livre, a vida cotidiana urbana sem idealizações, a invenção da fotografia, a ruptura Impressionista e o Simbolismo.',
    color: '#059669'
  },
  {
    id: 'vanguardas-seculo-xx',
    name: 'Vanguardas do Século XX',
    startYear: 1900,
    endYear: 1945,
    displayYears: '1900 – 1945',
    description: 'A explosão de rupturas radicais: Fauvismo, Cubismo, Futurismo, Dadaísmo, Surrealismo, Bauhaus, Abstracionismo e Art Déco.',
    color: '#2563EB'
  },
  {
    id: 'pos-guerra-conceitual',
    name: 'Pós-Guerra & Arte Conceitual',
    startYear: 1945,
    endYear: 1990,
    displayYears: '1945 – 1990',
    description: 'Expressionismo Abstrato, Pop Art, Minimalismo, Arte Conceitual, Performance, Land Art e o surgimento do Pós-modernismo.',
    color: '#7C3AED'
  },
  {
    id: 'era-digital-contemporanea',
    name: 'Arte Digital & Contemporânea',
    startYear: 1990,
    endYear: 2026,
    displayYears: '1990 – Presente',
    description: 'Internet Art, arte interativa, algoritmos generativos, mídias imersivas e a revolução criativa com Inteligência Artificial.',
    color: '#0284C7'
  }
];
