# AI.md — Etichette Vinted

Contratto per qualsiasi AI che lavora in questo repository. `CLAUDE.md` e `AGENTS.md` sono solo ponti verso questo file.

## Memoria del progetto (leggere PRIMA di lavorare)

La memoria vive nel vault Obsidian:
`C:\Users\ismai\Desktop\ismail2ndbrain\03 Projects\Etichette Vinted\`
(WSL: `/mnt/c/Users/ismai/Desktop/ismail2ndbrain/03 Projects/Etichette Vinted/`)

1. Leggi `PROJECT.md` — stato attuale e prossima azione
2. In base al task: `ARCHITECTURE.md` (sviluppo/refactor), `PROBLEMS.md` (bug e strade morte già esplorate), `DECISIONS.md` (prima di proporre modifiche tecniche), `ROADMAP.md` + ultime voci di `JOURNAL.md` (pianificare o riprendere il filo)
3. Il contratto generale del vault è in `ismail2ndbrain\AI.md`

## Navigazione codice

Il repo è un solo file (`index.html`) più il test: Graphify non serve finché resta così. Se il codice si divide in più file, genera il grafo con `graphify .` (vedi il vault, `00 SYSTEM/INDEX` → Setup Graphify).

## A fine sessione (obbligatorio, SEMPRE)

1. Aggiungi una voce datata **in cima** a `JOURNAL.md` nel vault: **Fatto**, **Deciso**, **Problemi**, **Prossimo passo**, **Note/morale**
2. Aggiorna "Stato attuale" e "Prossima azione" di `PROJECT.md`
3. Instrada le novità: bug → PROBLEMS, scelta tecnica → DECISIONS, feature → ROADMAP, cambio stack → ARCHITECTURE

## Regole del repo

- Comandi: nessuna build. Test: `node test.mjs` (deve stampare `ok`). Per provare la pagina: `python -m http.server 8765` nella cartella, poi `http://localhost:8765`
- Convenzioni: tutto in `index.html`. Le funzioni di geometria stanno nel `<script id="core">` senza DOM, perché `test.mjs` le estrae da lì: non spostarle. Librerie solo da cdnjs, nessun upload: i PDF restano nel browser
- Commit in stile convenzionale, in inglese: `feat(scope): description`
- MAI esporre o committare secrets, API key, `.env`
- MAI inventare fatti sul progetto: se un'informazione manca, chiedi o scrivi TODO

---
