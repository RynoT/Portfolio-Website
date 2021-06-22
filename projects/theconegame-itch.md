---
title: 'The Cone Game (PoC)'
icon: '/images/projects/theconegame-itch/icon.png'
banner: '/images/projects/theconegame-itch/banner.png'
software:
  - '/images/icons/unrealengine.svg'
  - '/images/icons/fmod.svg'
  - '/images/icons/amazonaws.svg'
  - '/images/icons/nodedotjs.svg'
  - '/images/icons/npm.svg'
  - '/images/icons/mongodb.svg'
  - '/images/icons/itchdotio.svg'
sort_date:  '2020-03-27'
start_date: '2020-03-27'
end_date: '2020-04-10'
---

<br/>

___

<br/>

## Project Summary

This project was developed for the [StaySafe Jam](https://www.staysafejam.org/). The jam was supposed to happen over 48 hours but we decided to extend that time to **2 weeks** for a better polished product.

The game was published to **itch.io** under the **Darkroom Interactive** name. This better allows the development team to use the game as a portfolio piece.

During **Game Jams** we like to try and learn something new. The purpose behind this project was to experiment with a **persistent world**.

<br/>

___

<br/>

## Development Details

- This game is developed using **Unreal 4.24**. 
- Team of **two programmers**, three artists, and one sound designer.
- Since **Darkroom** were leading the production, I assumed the role of **Lead Programmer**.
- Server data was stored with **NoSQL** using **MongoDB**.
- The server backend was written using **Express.js** and **NPM**.
- The server backend was hosted through **AWS**. We used a Free Tier **Amazon EC2** instance. The server is still currently live.
- The game was published on [**Itch.io**](https://darkroom.games/conegame).
- The game had an unanticipated surge in popularity. Due to this we had to reset the persistent world **three** times. Before the first reset it got to the point where there were too many cones to move.

Since we got proof that this kind of game idea works, **Darkroom** decided to use this **itch version** as a **proof of concept** and [commit to the development of this game](/projects/theconegame). Development is continuing using the **original team**.

Game Link: [https://darkroom.games/conegame](https://darkroom.games/conegame)

___

<br/>

## My Contribution

Due to the very limited development scope available, my contribution was limited to a very specific aspect of the game; **the persistent world**.

I handled the **server** and **client** networking support. Communication was done through a structured **REST** api. 

The primary objective of this persistence was to make it **seamless**. The client needed to handle all server communication without any assistance from the player. To accomplish this the game will **automatically** connect to the **persistent world** by requesting an **auth token** from the server. Using this auth token, the player can place cones on the map and then the server will **replicate** that placed cone to all connected clients. This means you can see other people (strangers) place cones in **near-realtime**. 

Since the world is **persistent** and stored in an external database, any cones placed are **permanent**. If you place a cone and then come back one week later, that cone will still be there.

Due to time constraints I also created the **user interface** using **UMG**. We didn't have time to create UI art so the entire interface was done using **programmer art**.

___

<br/>

## Media Coverage

[**Glasgow Live**](https://www.glasgowlive.co.uk/news/glasgow-news/glasgow-cone-game-funny-online-18098583)

[**The Scottish Sun**](https://www.thescottishsun.co.uk/gaming-2/5505996/the-cone-game-glasgow-free-download/)

[**Escapist Magazine** ](https://www.escapistmagazine.com/v2/the-cone-game-free-glittering-sandbox-glaswegian-culture-darkroom-games/)

\+ Quite a few YouTube videos. You can find some of them in the comments section of [the itch page](https://darkroom.games/conegame).

<br/>

___

<br/>