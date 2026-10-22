# PLANO — Chronos Art

Plano por fases, cada tarefa com arquivo, ação e critério de pronto. Marque `[x]` ao concluir e cite o PR.

**Ordem sugerida:** Fase 1 → Fase 2 → Fase 3 → Fase 4. As fases 1 e 2 podem andar em paralelo.

---

## Fase 1 — Checagem de fatos

**Objetivo:** nenhum erro factual conhecido nos dados.
**Pronto quando:** todos os itens abaixo marcados, cada correção com fonte citada no PR.

### 1.1 Erros confirmados em `src/data/movements.ts` (revisão de 21/10/2026)

| # | Linha | Problema | Correção |
|---|---|---|---|
| [x] 1 | 242 | Pirâmides de Gizé atribuídas a "Imhotep & Mestres Construtores". Imhotep projetou a pirâmide de degraus de Djoser (Saqqara, c. 2670 a.C.). | Trocar o artista para **Hemiunu** (como já está em `periodArtworksByMedium.ts:313`). Manter Imhotep em `keyArtists` (l. 235), que está correto. *(feito em `5e0702c`: autor → "Hemiunu & Mestres Construtores dos Faraós"; Imhotep mantido em `keyArtists` com o papel correto)* |
| [x] 2 | 280, 286 | "Praxíteles" numa obra de c. 450 a.C. Praxíteles atuou c. 370–330 a.C. | Trocar o artista para **Míron/Policleto** *ou* a data para c. 350 a.C. *(feito em `5e0702c`: artista → Policleto, mantida a data c. 450 a.C.)* |
| [x] 3 | 198 | "O Grande Zigurate e Cidade da Babilônia", c. 2100 a.C. Em 2100 a.C. é o Zigurate de **Ur** (Ur-Nammu); o Etemenanki da Babilônia é dos séc. VII–VI a.C. | Renomear para *Zigurate de Ur* (mantendo a data) *ou* datar como séc. VI a.C. *(feito em `5e0702c`: obra → "O Grande Zigurate de Ur", autor Ur-Nammu; id → `zigurate-ur`)* |
| [x] 4 | 24 | "O Bisão Vermelho Rupestre", c. 36.000 a.C. Os bisões de Altamira são de c. 15.000–13.000 a.C.; Chauvet (c. 36.000 a.C.) não é "o bisão vermelho". | Usar *Bisões de Altamira*, c. 15.000 a.C. *(feito em `5e0702c`: título → "Bisão Policromado de Altamira", data c. 15.000–13.000 a.C.; id → `bisao-altamira`)* |
| [x] 5 | 460 | Catedral de Colônia "1248–1473". As obras pararam em 1473; a conclusão é de **1880**. | `year: '1248–1880'`, com nota sobre a pausa na descrição. *(feito em `5e0702c`: ano → "1248–1473; concluída em 1880", título → "Catedral de Colônia (Kölner Dom)")* |
| [x] 6 | 1364 | "Number 1A / Convergence" (Pollock) junta duas obras: *Number 1A, 1948* e *Convergence* (1952). | Escolher uma: *Number 1A, 1948*. *(feito em `5e0702c`: obra única → "Convergence", 1952)* |
| [x] 7 | 1408 | "Garota Pop Art com Cabelo Amarelo" (Lichtenstein): título inventado. | Usar obra real: *Drowning Girl* (1963) ou *Girl with Hair Ribbon* (1965). *(feito em `5e0702c`: → "Drowning Girl", Roy Lichtenstein, 1963)* |
| [x] 8 | 1372 | "No. 14 (Horizontes Luminosos)" (Rothko): o subtítulo não existe. | `title: 'No. 14, 1960'`. *(feito em `5e0702c`: título → "No. 14, 1960")* |

> Os números de linha valem para o commit `eb643e1`. Se mudarem, busque pelo título.

### 1.2 Arquivos ainda não checados

- [ ] `src/data/periodArtworksByMedium.ts`: conferir título, autor, data e local de cada obra.
- [ ] `src/data/movementExtendedDetails.ts`: conferir artistas e datas. Atenção ao texto genérico gerado na l. 541 ("Obra fundamental representativa…"), que deve ser trocado por descrições reais.
- [ ] `src/data/regionalContexts.ts` (45 entradas): conferir intervalos de anos e fatos por região.
- [ ] `src/data/eras.ts` e `src/data/dinosaurs.ts`: conferir limites de datas.
- [ ] Imagens em `src/assets/images/`: conferir se cada imagem é da obra indicada ou só ilustrativa. Imagens ilustrativas (ex.: `will_smith_spaghetti_*.jpg`) precisam de legenda dizendo isso.

### 1.3 Rastreabilidade

- [x] Adicionar `source?: string` (museu/catálogo/URL) ao tipo `Artwork` em `src/types.ts`. *(feito em `5e0702c`: campo `fonte?` adicionado ao tipo `Artwork`)*
- [~] Preencher `source` nas obras corrigidas na 1.1. Pronto quando: 100% das obras de `movements.ts` com fonte. *(parcial em `5e0702c`: `fonte` preenchida nas 8 obras corrigidas; falta preencher nas demais)*
- [ ] Exibir a fonte no painel (`MovementModal.tsx`), abaixo de cada obra.

---

## Fase 2 — Qualidade e entrega

**Objetivo:** todo PR validado de forma automática e com preview publicado.

- [ ] **Corrigir metadados:** `package.json` tem `"name": "react-example"`; trocar para `chronos-art`.
- [ ] **CI (GitHub Actions)** em `.github/workflows/ci.yml`: `npm ci` → `npm run lint` → `npm run build` em todo PR. Pronto quando: check verde obrigatório na `main`.
- [ ] **Validador de dados** em `scripts/validate-data.ts` (rodar com `tsx`), chamado na CI:
  - `startYear <= endYear` em movimentos, eras, contextos e dinossauros;
  - `id` único em cada coleção;
  - todo id citado em `influences` / `influenced` existe em `MOVEMENTS`;
  - campos obrigatórios preenchidos (`name`, `summary`, `displayPeriod`, ao menos 1 obra);
  - todo `imageUrl` local aponta para um arquivo que existe.
  - Pronto quando: `npm run validate` sai com código ≠ 0 se houver erro e roda na CI.
- [ ] **Deploy na Vercel** com preview por PR. Pronto quando: link do preview comentado no PR de forma automática.
- [ ] **Limpeza de dependências:** remover `express`, `dotenv`, `@types/express` e `@google/genai` se a Fase 4 (IA) não for adiante. Hoje nenhum deles é usado em `src/`.

---

## Fase 3 — Ligar o que já está pronto

Componentes já escritos em `src/components/`, mas que não são importados pelo app:

- [ ] **Filtros:** ligar `FilterBar.tsx` ao `App.tsx`, substituindo as listas fixas de `activeRegions` / `activeCategories` (l. 92–97). Pronto quando: ativar/desativar uma região muda as faixas no canvas.
- [ ] **Seletor de visão:** usar o tipo `ViewMode` (`types.ts:119`: `canvas | linear | comparative | explorer | docs`) na `Navbar` e renderizar `LinearTimelineView`, `ComparativeView`, `ExplorerView` e `TechnicalDocModal` conforme a visão escolhida.
- [ ] **Decidir sobre `DinosaurMode.tsx`:** o modo dinossauro hoje vive dentro do `TimelineCanvas`. Integrar ou apagar o componente órfão.
- [ ] **Busca:** incluir obras e contextos regionais nos resultados (hoje só movimentos, limitados a 6, em `Navbar.tsx:44`).
- [ ] Atualizar a tabela "O que já existe" do README a cada item entregue.

---

## Fase 4 — Conteúdo e alcance

- [ ] **Versão em inglês:** extrair os textos da UI para `src/i18n/{pt,en}.ts`; traduzir `src/data/` offline (Hy-MT2) e revisar à mão. Pronto quando: há um seletor PT/EN e nenhum texto fixo fica sem tradução.
- [ ] **IA (Gemini), opcional:** ex.: "explique esta obra" no painel. Exige proxy no servidor para não expor `GEMINI_API_KEY` no bundle. Se não for feito, aplicar a limpeza de dependências da Fase 2.
- [ ] **Hero com ShaderGradient (opcional):** só depois da Fase 2, medindo o tamanho do bundle antes e depois.
- [ ] **Mais design e cultura visual:** design gráfico, tipografia e design de produto como categoria ou movimentos próprios.
