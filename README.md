# PEARIE SOL

- https://peariesol.com/
  > https://github.com/peariesol/peariesol.github.io

## Random notes for me

- To make changes with styling and to watch the changes in real time, you need to run two node processes.

1. `npm run watch-css` -> Watches sass files in real time and updates css with changes
   > Note watch-css is a heavy load on the comp!
2. `npm start` -> Runs the rest

### How to Release updates

1. `npm run deploy`
   > This package handles pretty much everything for you. It will build and push the correct files up to github
   > Do not try to run build yourself and push to github or you will run into problems
   > Do not pull down master because its essentially a build repo and you will run into problems
2. In `https://github.com/peariesol/peariesol.github.io`, click "Settings", under custom domain, enter `peariesol.com`
3. Confirm changes at `https://peariesol.com/`

custom domain: peariesol.com
enforce https

### Resources

<!-- https://gifcities.org/ -->
<!-- http://www.rw-designer.com/gallery -->
<!-- https://hackernoon.com/how-to-set-up-godaddy-domain-with-github-pages-a9300366c7b -->
