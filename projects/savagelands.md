---
title: 'Savage Lands'
icon: '/images/projects/savagelands/icon.png'
banner: '/images/projects/savagelands/banner.png'
software:
  - '/images/icons/unrealengine.svg'
  - '/images/icons/xbox.svg'
  - '/images/icons/playstation.svg'
  - '/images/icons/nintendoswitch.svg'
  - '/images/icons/steam.svg'
  - '/images/icons/epicgames.svg'
sort_date:  '3001-01-01'
start_date: '2020-08-01'
---

<br/>

___

<br/>

## Project Summary

Savage Lands is a survival game focused around player progression and cooperative play. 

It was originally released in **2015** by **Last Bastion Studios** through [Steam Early Access](https://store.steampowered.com/app/307880/Savage_Lands/). Although still receiving periodic updates the game has become outdated which is why we, at **Pocket Sized Hands**, are recreating the game from scratch.

The ultimate goal is to bring the game up to modern standards, take it out of early access, and then release it on **Xbox**, **PlayStation**, and the **Nintendo Switch**.

<br/>

___

<br/>

## Development Details

- Small team of **two programmers**, three artists, and one production manager.
- The entire codebase for the game has been written in **C++**.
- The original game was made using **Unity 5.3.8p2**. We are recreating the game using **Unreal 4.26**.
- Networking has been done using **Epic Online Services** to allow for **cross-platform** capability.
- Git and GitLab are used for Source Control. 
- Production is handled using **Jira** and **Confluence**. Tasks are structured into **2-week sprints**.

<br/>

___

<br/>

## My Contribution

Since the entire project is being done by myself and one other programmer, **I have development responsibilities in all areas of the game**. 

Every feature developed must work in **single-player**, **peer-to-peer**, and through a **dedicated server**. They must also work and compile **cross-platform**.

<br/>
Features which I took lead on include;

- **Saving System**. It can save **locally** and to the **cloud**.
- **Inventory System**. It was structured in a way that allowed for various inventory types such as for players, chests, and NPCs.
- **Equipment System**. The player can equip weapons and armour. The visual state of the players character will update async and any effects/abilities will be applied depending on the item equipped.
- [**Gameplay Ability System (GAS)**](https://github.com/tranek/GASDocumentation). This is a framework, created by epic, that allows us to design, implement, and network abilities that traditional RPG games usually have.
- **Character Customization System**. During character creation the player can modify their characters appearance. This was made by swapping out modular skeletal meshes and modifying morph targets at runtime. 
- **Multiplayer Lobbies and Sessions**. Using Unreal's OnlineSubsystem framework the game can create, search, and join player made sessions. This is designed to work through **Epic Online Services** and is therefore also cross-platform capable.
- **Sound and Haptic Feedback**. The game doesn't use any fancy sound plugins so it was just done using Unreal's integrated sound support.

This is just a portion of my involvement with this game. 

Most features require some sort of user interface to go along side it and that was done using **UMG**. 

To maintain code quality and provide some quality-assurance all code is **code-reviewed** by the other programmer. So I review the work done by the other programmer and they review my work.

<br/>

___

<br/>