---
title: 'King of the Castle'
icon: '/images/projects/kingofthecastle/icon.png'
banner: '/images/projects/kingofthecastle/banner.png'
software:
  - '/images/icons/unrealengine.svg'
  - '/images/icons/wwise.svg'
sort_date:  '2017-09-01'
start_date: '2017-09-01'
end_date: '2018-09-01'
---

<br/>

___

<br/>

## Project Summary

King of the Castle is a fun multiplayer game targeting a younger audience.

The objective of the game is similar to the **domination** gamemode. Players must **capture flags to earn points**.

It was created with the purpose of entering it into **Dare Academy** and showcasing it at **EGX**. 

<br/>

[![YouTube Video](https://img.youtube.com/vi/kIAGHUiPl1M/0.jpg)](https://www.youtube.com/watch?v=kIAGHUiPl1M?)

<br/>

___

<br/>

## Development Details

- Team of 7. As the **only programmer** on this project, I was the **Lead Programmer**.
- Development first started during University third-year professional project - although the team evolved once that class was complete.
- The game was developed for **Dare Academy**. We showcased it at **EGX 2017** and placed **2nd**.

Development for this game stopped after EGX. **Our prize** for winning involved a free educational trip to **Beijing** where we got introduced to several prominent games companies located there.

This project brought about the inception of **Darkroom Interactive**. Several of the team members would later break off to start this entity and develop [**SnapHunt**](/projects/snaphunt).

<br/>

___

<br/>

## My Contribution

As the sole programmer I had to program every single element of this game. This includes **combat**, **split-screen multiplayer**, **the building system**, **the gamemode (+ hazards)**, and all of **the UI**.

The block **building system** was **relatively complex** for the time. Placement worked based on a **grid setup** and each block placed would provide **support for adjacent blocks**. If a player were to break a block the game would then check the adjacent blocks to see if they were still supported. If they were not, it would trigger an **A\* pathfinding algorithm** that would locate the furthest away block which now has no support. From this block, it would **trigger a chain reaction** back to the original block and break each block without any support. This provided a fun gameplay mechanic where people could **build and strategically break** bridges. Gameplay was quite vertical so placing and breaking were naturally encouraged.

As the game played on we noticed that many **stray blocks would start to pile up**. These are blocks which were placed that no-one has any incentive to break. As a solution I implemented a **Marble Rain** feature which would trigger randomly during gameplay. It would cause marble to **rain from the sky** and those marbles would break and knock-out anything they hit on the way down. This ended up being an extremely **effective way of clearing unwanted blocks** from the map whilst adding to the gameplay.

There was not enough time for UI art to be made so we were left with the **programmer art** that I came up with.

<br/>

___

<br/>

## Media Coverage

[**Featured on Redbrick**](https://www.redbrick.me/egx-top-5-multiplayer-games/)

<br/>

___

<br/>

## Media

![The Team](/images/projects/kingofthecastle/theteam.png)
![EGX](/images/projects/kingofthecastle/egx.png)
![Room3](/images/projects/kingofthecastle/room3.png)
![Room2](/images/projects/kingofthecastle/room2.png)
![Room1](/images/projects/kingofthecastle/room1.png)

<br/>

___

<br/>