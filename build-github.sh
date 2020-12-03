  yarn build
  cd dist
  git init
  git remote add origin git@github.com:EscolaDeSaudePublica/qualiquiz.git
  git branch gh-pages
  git checkout -b gh-pages
  git add .
  git commit -m "autobuild"
  git push origin gh-pages --force