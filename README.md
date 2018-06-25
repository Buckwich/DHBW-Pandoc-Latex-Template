# DHBW Bachelorthesis Pandoc

This repo contains a complete tool box to simplify the writing of latex documents.
The main purpose is to use markdown for the main content. For this pandoc is used.
The template could be exchanged for a different university or modified to suite your needs.

Currently only Windows is supported, but you could easily adapt the project for Linux or Mac.

## Installation

Make sure a working copy of pandoc and latex is installed. Then just `npm i` and you are done.

## Structure

All necessary scripts are located in the main folder.
Images in the images folder and the markdown chapters in the chapters folder.
The current template is based on https://github.com/schnes4/dhbw-heidenheim-latex-template for instructions to modify the settings look in that Repo.

Your bibliography is also in the main folder.

## Scripts

### Build Latex

Simply run

```bash
npm start
```

to generate the pdf from the markdown files.

### Add chapter

To start using this template add the first chapter with this command:

```bash
npm run add 01 firstChapter
```

To keep the order of the markdown files in right, they are appended with increasing numbers. To simplify adding chapters in between this script can be used. The first parameter is the chapternumber where it should go and the second one the name of the chapter.

### Generate command

Because pandoc cant be called with a \* on Windows all markdown files have to be included in the pandoc call, to create this command run:

```bash
npm run generate
```

This command is automatically triggered if you try to build the files. If you are in watch mode while creating files you have to restart to include the new files.

### Watch for file changes

With the command

```bash
npm run watch
```

all files in the chapters folder are watched for changes and triggers a build. To manually start a build while in watch mode press any key in the command line.

## Markdown examples

The file `98-ShowcaseMarkdown.md` contains some examples on how to use markdown syntax to create the desired latex output. Make sure to delete it if you no longer need it.

## Issues

Because of a problem in the base template I had to change the reviewer part on the cover. Now in all versions both reviewers are shown.

Pandoc generates citations and bibliography before converting the latex to pdf this means the bibliography gets appended after the last markdown file. Therefore the `99-Bibliography.md` file is required.

On Windows not all files are deleted after the build. I would suggest to hide the `tex2pdf` folders in your editor and delete them from time to time.
