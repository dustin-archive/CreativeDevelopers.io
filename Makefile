# GNU Make 3.8.2 or above

PATH := $(PATH):node_modules/.bin
SHELL := /bin/bash

.ONESHELL:
.SILENT:

all: prep js css minify html

demo: all
	dev-server dist --watch 'src/**/*' 'make'

start: prep js css html
	dev-server dist --watch 'src/**/*.js' 'make js' --watch 'src/**/*.scss' 'make css html'

minify:
	babel dist/app.js --presets=@babel/preset-es2015 | uglifyjs -o dist/app.js -c pure_funcs=['Object.defineProperty'] -m --source-map content='dist/app.js.map',url='app.js.map' &
	postcss dist/app.css -o dist/app.css -u autoprefixer -m
	cleancss dist/app.css -o dist/app.css --source-map --source-map-inline-sources

prep:
	rm -rf dist
	mkdir dist
	cp -r fonts images favicon.png sitemap.xml dist &

html:
	rollup index.js -f cjs -e 'fs' -c | node > dist/index.html

js:
	env $$(cat .env) rollup src/app.js -o dist/app.js -f iife -m -c

css:
	node-sass src/app.scss -o dist --source-map true --source-map-contents

setup:
	cp .env-example .env
	npm i \
		@whaaaley/query-string \
		classcat \
		hyperapp
	npm i -D \
		@babel/cli \
		@babel/core \
		@babel/preset-es2015 \
		@hyperapp/render \
		@jamen/dev-server \
		autoprefixer \
		clean-css-cli \
		node-sass \
		postcss-cli \
		rollup \
		rollup-plugin-node-resolve \
		rollup-plugin-replace \
		uglify-js
