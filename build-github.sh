  npm run build
  cd dist
  git init
  git remote add origin https://github.com/EscolaDeSaudePublica/qualiz-saude.git
  git branch gh-pages
  git checkout -b gh-pages
  git add .
  git commit -m "autobuild"
  git push origin gh-pages --force