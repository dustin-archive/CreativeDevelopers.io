
PATH := node_modules/.bin:$(PATH)
SHELL := /bin/bash

.SILENT:

all: prep js css minify html

demo: all
	dev-server dist --watch 'src/**/*' 'make'

start: prep js css html
	dev-server dist --watch 'src/**/*.js' 'make js' --watch 'src/**/*.scss' 'make css html'

minify:
	node scripts/babel
	uglifyjs dist/app.js -o dist/app.js -c pure_funcs=['Object.defineProperty'] -m --source-map content='dist/app.js.map',url='app.js.map'
	postcss dist/app.css -o dist/app.css -u autoprefixer -m
	cleancss dist/app.css -o dist/app.css --source-map --source-map-inline-sources

prep:
	rm -rf dist
	mkdir dist
	cp -r fonts images favicon.png sitemap.xml dist

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
		@babel/core \
		@babel/plugin-transform-arrow-functions \
		@babel/plugin-transform-block-scoped-functions \
		@babel/plugin-transform-block-scoping \
		@babel/plugin-transform-computed-properties \
		@babel/plugin-transform-destructuring \
		@babel/plugin-transform-function-name \
		@babel/plugin-transform-parameters \
		@babel/plugin-transform-shorthand-properties \
		@babel/plugin-transform-spread \
		@babel/plugin-transform-template-literals \
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
