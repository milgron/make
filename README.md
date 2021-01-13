# Make 0.1 (Beta)

## Description

make is a minimal blogging tool. No databases, no server configurations. Clone, setup & launch :rocket:

## Install

1 - First, clone/fork the project and install it

NPM:

```
npm i
```

Yarn: 

```
yarn
```

2 - Setup the blog data.

- Create a .env file on root.

- Complete the following data:

  ```
  BLOGNAME = Your blog name
  AUTHOR = Your name
  DESCRIPTION = Blog description
  CONTACT = Contact email
  DARKMODE = true/false
  TWITTER = yourTwitterUsernameWithout@
  ```

4 - Put your .md files inside the ./content dir. This is the file structure:

```markdown
1 | ---
2 | title: This is the title of the post
3 | ---
4 | excerpt: This is a content preview for the post 
5 | ---
6 | 
7 | # Hola mundo!
8 | ¡Este es un post de prueba!
[...]
```



5- Go to your terminal and type...

```
npm make
```

```
yarn make
```

... and it's done! Your rendered static files are ready in ./dist directory.

## Roadmap

- [ ] Improve .env setup to make it easier using the CLI.
- [ ] Connect with Vercel to automatic publish with a single command.
- [ ] Improve HTML templates

## Contact

contacto@lagranmesa.org