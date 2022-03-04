# Personnal Website

https://b-viguier.github.io


## Run

```
docker run --rm -it -e JEKYLL_ROOTLESS=1 --volume="$PWD:/srv/jekyll" -p 4000:4000 -p 35729:35729 jekyll/jekyll jekyll serve --livereload
```

## Update
```
docker run --rm -it -e JEKYLL_ROOTLESS=1 --volume="$PWD:/srv/jekyll" -p 4000:4000 -p 35729:35729 jekyll/jekyll bundle lock --update`
```

## Help

[Setting up your GitHub Pages site locally with Jekyll](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/)