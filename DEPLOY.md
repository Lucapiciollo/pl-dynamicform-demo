# PlDynamicForm — pacchetto di distribuzione

Questa cartella è un repository separato pronto per la pubblicazione.

## Struttura

| Percorso     | Contenuto                                                            |
| ------------ | ------------------------------------------------------------------- |
| /          | Demo compilata (GitHub Pages), base-href /pl-dynamicform-demo/              |
| /library   | Pacchetto npm della libreria PlDynamicForm (FESM offuscati, livello: none) |
| index.html / 404.html | Entry SPA + fallback per il routing su Pages           |
| README.md  | Documentazione della libreria (mostrata anche nel tab Readme della demo) |

## Pubblicare la demo su GitHub Pages

1. Crea/usa un repository GitHub chiamato **pl-dynamicform-demo**.
2. Da questa cartella:
   `ash
   git add -A
   git commit -m "Deploy demo + library"
   git push origin main
   `
3. Su GitHub → Settings → Pages → Source: Deploy from a branch, branch main, cartella / (root).
4. La demo sarà online su: `https://<utente>.github.io/pl-dynamicform-demo/`

> Se cambi il nome del repository ricompila con `-RepoName <nuovo-nome>` per aggiornare la base-href.

## Usare la libreria

La libreria è in /library. Per installarla in un progetto:

`ash
npm install <utente>/pl-dynamicform-demo#main --save   # via git, sottocartella library
# oppure copia /library in node_modules/pl-dynamicform, o pubblica su un registry npm
`

I tipi TypeScript (*.d.ts) NON sono offuscati: l'API pubblica resta completamente tipizzata.
