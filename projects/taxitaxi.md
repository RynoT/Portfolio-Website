---
title: 'Taxi Taxi'
icon: '/images/projects/taxitaxi/icon.png'
banner: '/images/projects/taxitaxi/banner.png'
software: [ 'unrealengine', 'fmod', 'android' ]
sort_date:  '2019-06-11'
start_date: '2019-06-11'
end_date: '2020-03-24'
---

<br/>

___

<br/>

## Project Summary

Taxi Taxi is a **work-in-progress** mobile game being developed by **Darkroom Interactive**.

It was **inspired by a game jam** done at **FunPlus** whilst we were in **Beijing**. We were in Beijing as a prize for placing **2nd** in **Dare Academy 2017** for [**King of the Castle**](/projects/kingofthecastle).

It was the original IP planned before [**The Cone Game**](/projects/theconegame) came along.

<br/>

___

<br/>

## Development Details

- Team of 4. **One programmer**, two artists, and one sound designer.
- The **target platform** was mobile to better manage scope.
- The game was planned as a **LiveOps** title but the server backend was never started.
- Since this was a mobile title, features were designed around looking good but being cheap.

<br/>

___

<br/>

## My Contribution

The current gameplay available is a simple **pickup and drop off system**. To aide the player in where they need to go, I implemented a **GPS system** where a glowing (**spline**) line will shoot out from the player and act as a guide for the player to follow if they want to reach the drop off location. The pathfinding was done using **A\***.

Expanding from this GPS line, I also implemented a **Road Network** and **Path Network** system. This was an automatic runtime network generator that A* could run on. Primitive pedestrians would walk from point A to point B and use the path network to keep them off of the roads. This also meant that they could cross the roads using cross walks.

The game was still in its **early stages** so this features was never fully fleshed out. The **Road Network** system was designed for other cars, and potentially the GPS line, to use. It was designed in a way to allow for **traffic** within the game. It could also communicate with the **Path Network** so that NPC cars wouldn't run over pedestrians.

The network generator worked based on preset tiles. It knows how pedestrians and cars move on each tile. The generator will look at adjacent tiles and combine them into a giant, **optimized**, pathfinding network.

<br/>

___

<br/>

## Media

<video autoplay="" muted="" loop="" playsinline="">
	<source src="/images/projects/taxitaxi/video.mp4" type="video/mp4">
</video>

![Image1](/images/projects/taxitaxi/image1.png)
![Image2](/images/projects/taxitaxi/image2.png)
![Image3](/images/projects/taxitaxi/image3.png)
![Path2](/images/projects/taxitaxi/path2.png)
![Path1](/images/projects/taxitaxi/path1.png)

<br/>

___

<br/>