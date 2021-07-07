---
title: 'The Cone Game'
icon: '/images/projects/theconegame/icon.png'
banner: '/images/projects/theconegame/banner.png'
software: [ 'unrealengine', 'wwise', 'amazonaws', 'discord', 'steam' ]
sort_date:  '3000-01-01'
start_date: '2020-04-15'
---

<br/>

___

<br/>

## Project Summary

This game is a continuation of the original [**itch game**](/projects/theconegame-itch). We have adapted the game design based on real player feedback that we received.

**The Cone Game** is a game where you play as a **physics cone**. Scattered throughout the **open world** are challenges which the player must complete to get back to where it belongs; **The Duke of Wellington's** head.

The gimmick around this game is that it features a **persistent world**. Players can place cones anywhere they want and those **cones will replicate to other players**. This functionality is not implemented yet but a proof-of-concept can be seen within the original itch game.

This game will be **Darkroom Interactive's** first **IP release**. Our primary target platform is **Steam** but we have aspirations to target as many platforms as possible. However, some platforms may only be realistic if we first acquire a publisher.

<br/>

___

<br/>

## Development Details

- This game is developed using **Unreal 4.26**. 
- Team of **two programmers**, three artists, and one sound designer.
- I hold the role of **Lead Programmer**.
- This game is still in **active development**. 
- **AWS** will be used to host the **persistent world** server backend. The persistent world is not yet implemented.
- The **current milestone** target for this game is to get it to **vertical slice** quality and then start **pitching** it to **publishers** for funding. 

The games website is not live yet, but, when it is it will be hosted at [https://theconegame.com](https://theconegame.com).

<br/>

___

<br/>

## My Contribution

This is a relatively large indie project given the current team size. As one of two available programmers, I have contributed to many aspects of the game.

### Project Management

The project is currently managed by **myself and one other**. We are the **Directors of Darkroom**.

Originally the project was managed using **Trello** and **Google Drive**. We quickly realized that this approach was not optimal and switched to using **Jira** and **Confluence**. We use **Confluence** for documentation and **Jira** for task management. 

I typically manage the **technical side** of the project. It is my responsibility to ensure that the right features are being developed at the right time. We are following the **agile methodology** so features are **prototyped first** and then **polished after** we decide that we want it in the game.

I perform **code reviews** for the other programmer in the team.

### Networking

Although primitive in its current form, I set up a structured way for the game to handle networked **REST** calls. This will be essential in the future because the **server backend** will be considerably more complex than what the itch game used.

### Player Locomotion

The original cone locomotion in the itch game was primitive. For this project I am developing a **complex locomotion system** which makes traversing around the map fun. 

Some features of the new locomotion system include;

- **Precise WASD controls**. If the cone is standing up and you try to move in any direction, the cone will tip over. It will do this without the base of the cone sliding.
- **Tip Jump**. If the player tips the cone forward using WASD and jumps whilst falling over, the tip of the cone will hit the ground first. If the player jumps whilst the tip is touching the ground, they will get a jump boost. This small feature adds complexity to normal movement. It also makes jumping a lot more fun to do. 
- **Waddle Mode**. Since making the cone fall over and then rolling the cone takes a lot of ground space, Waddle Mode will allow the player to move the cone whilst it's still standing upwards. If Waddle Mode is active and the player moves in a direction, the cone will waddle in that direction instead of falling over. Waddling isn't as fast as regular movement to allow for more precise control (i.e. you can move the cone to an edge without falling off by waddling).
- **Rotate Mode**. When in the air the cone can be at an undesirable rotation. When the player activates this mode it allows them to control the cones rotation using their mouse. The expected behavior is that players will use it to control how they land after falling.
- **Slow Motion Mode**. To aide in precise movement control the player can activate slow-mo mode. It runs on a cooldown.

It is important to me that the movement **feels controlled** by the player and not chaotic. Since i'm doing the locomotion, i'm also handling the platforming. The goal is to have the platforming be as **predictable** as a physics-based movement system can realistically be.

### Roadworks (Challenges)

One design goal for this game is to have challenges be **server compatible**. The easiest way of doing this is by having **challenges saved in a plain-text format**; in this case we're using **JSON**. Both the server and client can read JSON easily.

One issue with this is that Unreal doesn't have any interface for converting JSON to in-game content. My **solution** to this was to **develop an in-game tool** to do this for us. This tool is called **Roadworks**. 

Roadworks is a graph tool which allows editors to **design challenges visually**. It will automatically save and load challenges using JSON.

This tool is **still in development** and will progress with the project. It is designed to be **scalable** so that anyone can add new functionality without rewriting code. This will likely prove to be invaluable as the project progresses and the design changes.

![Roadworks Image](/images/projects/theconegame/roadworks.gif)

<br/>

___

<br/>