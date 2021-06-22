---
title: 'Snap Hunt'
icon: '/images/projects/snaphunt/icon.png'
banner: '/images/projects/snaphunt/banner.png'
software:
  - '/images/icons/unrealengine.svg'
  - '/images/icons/wwise.svg'
sort_date:  '2019-11-01'
start_date: '2018-11-01'
end_date: '2019-09-01'
---

<br/>

___

<br/>

## Project Summary

Snap Hunt is an **asymmetric photography horror game**. It was developed to be showcased with **Tranzfuser** at **EGX**.

The objective behind the game is to locate and capture evidence of some **mythological creature** - in the case of the demo, the **Wendigo**.

The game took away traditional guns and violence and instead equipped the player with a **camera**. Using this camera the player had to **take a photo of the Wendigo** and any other evidence they came across.

The game was **multiplayer**. The **asymmetry** came from the fact that you would have one person **playing the wendigo**, and up to **four people with cameras**. The demo that was used at EGX was single-player due to the unreliable internet that EGX has.

<br/>

[![YouTube Video](https://img.youtube.com/vi/DWaHFn83rjo/0.jpg)](https://www.youtube.com/watch?v=DWaHFn83rjo?)

<br/>

___

<br/>

## Development Details

- This game is developed using **Unreal 4.21**. 
- Team of 6. I was the **only programmer** but we had a **technical designer** who would help out.
- The game was developed until ready to demo, and then it was **showcased at EGX 2018** through **Tranzfuser**.
- Development took place as most people in the team were starting to graduate.

The game cased development after Tranzfuser was complete. The **Darkroom Interactive** which developed was a different entity to the one that exists now.

<br/>

___

<br/>

## My Contribution

### Networking

The game was designed to be played online. I ensured that every feature we developed worked on a **dedicated server** and in **single player**. This includes replicating the images taken so that they match up exactly between all clients.

### The Camera

The camera is a major component of the game - it is the pillar of gameplay that the game is built around. Therefore it was essential that the camera felt **smooth** and **satisfying to use**. **Myself and the technical designer** were in charge of making this happen.

I wrote a custom material which mimicked the aesthetics of a [real life camera shutter](https://www.youtube.com/watch?v=zV0iMoT-3F8). 

A **major design issue** we tackled was how to differentiate between a good photo and a bad photo. We settled on judging the picture based on the visibility of the object of the photo. This was **not** as simple as it sounded. The **Wendigo** is made up of many parts and a simple check to see if it's in the photo or not was not enough information to grade a photo (e.g. If there are two photos of a leg, but in one photo the leg is covered by foliage, then the one not covered in foliage should be recognized as being better).

The solution was to write a **custom visibility check**. This worked by performing a **multi-trace to the limb** and gathering all meshes that are potentially **blocking the limb**. I then **projected** the vertices of each mesh into **screen space**. Using the **now-2d meshes** I converted them into geometric concave **polygons**. Using these polygons I could now apply standard polygon algorithms to **clip all polygons** to the **limbs polygon**, and then calculate the **area** of each polygon. After this point all that's left to do is subtract the covering areas from the limbs area to get the total limb area covered. Using this number we can now calculate the exact **percentage** of limb visibility - and, back to that example, we now know precisely how much the foliage is blocking the limb in the photo.

An additional benefit to this approach is that each polygon can have operations done on it in **parallel**. So calculating limb visibility is **multi-threaded and quick**.

<br/>

___

<br/>

## Media Coverage

[**Tranzfuser/EGX**](https://www.egx.net/egx/news/tranzfuser-returns-to-egx-with-18-playable-games)

[**Featured in The Guardian**](https://www.theguardian.com/games/2019/feb/25/point-and-shoot-whats-next-for-photography-in-video-games)

[**Featured on Rock Paper Shotgun**](https://www.youtube.com/watch?v=i-2SrfnStvE&t=654s)

[**Featured on The Gadget Show**](https://www.my5.tv/the-gadget-show/season-28/episode-6)

![Gadget Show Award](/images/projects/snaphunt/gadget.png)


<br/>

___

<br/>

## Media

![The Team](/images/projects/snaphunt/theteam.png)
![Scenery1](/images/projects/snaphunt/scenery1.png)
![Scenery2](/images/projects/snaphunt/scenery2.png)
![Tranzfuser](/images/projects/snaphunt/tranzfuser.png)
![Whiteboard](/images/projects/snaphunt/whiteboard.png)

<br/>

___

<br/>
