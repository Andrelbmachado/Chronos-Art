# PLANO — Chronos Art

## Fase 1 — Checagem de fatos (contínua)
Revisão inicial de `src/data/movements.ts` (21/10/2026). Itens a corrigir:
- [ ] **Pirâmides de Gizé** atribuídas a "Imhotep": Imhotep projetou a pirâmide de degraus de Djoser (Saqqara, c. 2670 a.C.). A Grande Pirâmide é atribuída a **Hemiunu**.
- [ ] **"Escultura clássica… Praxíteles", c. 450 a.C.**: Praxíteles atuou no séc. IV a.C. (c. 370–330 a.C.). Ou troca a data, ou o artista (ex.: Míron/Policleto para c. 450 a.C.).
- [ ] **"Grande Zigurate e Cidade da Babilônia", c. 2100 a.C.**: 2100 a.C. é o Zigurate de **Ur** (Ur-Nammu). O zigurate da Babilônia (Etemenanki) é do séc. VII–VI a.C.
- [ ] **"O Bisão Vermelho Rupestre", c. 36.000 a.C.**: os bisões de Altamira são de c. 15.000–13.000 a.C. (Chauvet é c. 36.000 a.C., mas não é "o bisão vermelho").
- [ ] **Catedral gótica 1248–1473** (Colônia): as obras pararam em 1473, mas a catedral só foi concluída em **1880**.
- [ ] **"Number 1A / Convergence", 1948 (Pollock)**: são duas obras diferentes — *Number 1A, 1948* e *Convergence* (1952).
- [ ] **"Garota Pop Art com Cabelo Amarelo" (Lichtenstein & Estilo Pop)**: título genérico; usar uma obra real (ex.: *Girl with Hair Ribbon*, 1965, ou *Drowning Girl*, 1963).
- [ ] **"No. 14 (Horizontes Luminosos)" (Rothko)**: o subtítulo não existe; usar *No. 14, 1960*.
- [ ] Revisar os demais arquivos (`periodArtworksByMedium.ts`, `movementExtendedDetails.ts`, `regionalContexts.ts`), ainda não checados.
- [ ] Adicionar campo `fonte` (museu/catálogo) a cada obra.

## Fase 2 — Qualidade
- [ ] CI com `lint` + `build`; deploy com preview (Vercel).
- [ ] Script que valida datas (formato, início ≤ fim) e campos obrigatórios.

## Fase 3 — Conteúdo
- [ ] Versão em inglês (tradução offline Hy-MT2 + revisão).
- [ ] Hero com ShaderGradient (opcional).
