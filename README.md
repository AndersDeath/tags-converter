# TagConverter

## What is it?

Hello. My name is Vladimir Bolshakov and this is my educational pet project. For the last two years (today is 12.08.2020) I've been participating in project that is based on monorepo pattern. We use nx cli for composition Angular and Nestjs applications. You can ask me "Vladimir, why did you decide to create a new monorepo project, if you have already been working with one?" The reason is very simple. I can't implement all my arcitecture ideas in corporative project that is used by thousand of customers. So I have decided to select one of my Angular demo projects and implement server, desktop Electron based application, and Ionic based mobile application for it.

## What is here?

1. **Nx**
2. **Angular**
3. **Angular Material**
4. **Nestjs**

## What is the project about?

Tags converter is a super simple utility for converting words sequence in format that we need. For example we have sequence of "one two three" with space separator. In utility we can select an initial separator as space and nesessary one as hash and press "convert". In this case we get the string "#one #two #three". The utility supports 3 types of separators: space, comma, and hash. You can convert words sequences in both sides. The application also supports convertation history and favorite sequences.

## How can I run it?

1. Install all dependencies. The best way is to use **yarn**.
2. Run `npm run start:app` for web applications.
3. Run `npm run start:server` for server.

## Extra information

1. Demo https://tags-converter.vnbstudio.ru
2. Video presentation https://www.youtube.com/watch?v=OUC7hFkRmiQ (In Russian)

## Task board
https://github.com/AndersDeath/tags-converter/projects/1
