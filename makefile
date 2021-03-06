help:
	@echo -B --always-make
	@echo first
	@echo docs

first: build docs
	rm -rfv .git
	git init
	git add --all
	git commit -m "make this the first and the only commit"
	git remote add origin https://github.com/albraga/crime-aki.git 
	git push -u --force origin master 

.PHONY: docs
docs:
	rm -rfv docs
	mv -v dist docs

build:
	npm run build

serve:
	npm run serve
	
inspect:
	vue inspect 1> inspect.js
