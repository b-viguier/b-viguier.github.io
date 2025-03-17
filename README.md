# Personnal Website

https://b-viguier.github.io


## Development

* Create Docker image
```bash
docker build -t jekyll . 
```

* Run it
```bash
docker run --rm -it --volume="$PWD:/srv/jekyll" -p 4000:4000 -p 35729:35729 jekyll serve --host 0.0.0.0 --livereload
```

Then open `http://localhost:4000/`.

## Help

[Setting up your GitHub Pages site locally with Jekyll](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/)