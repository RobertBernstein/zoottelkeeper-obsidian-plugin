# Obsidian Zoottelkeeper

## 1. General Idea
Following the idea of Nick Milo and the [LYT](https://www.linkingyourthinking.com/) -concept (Linking Your Thinking), an amazing way to bring structure to your files, folder and thoughts is by using **Maps of Content** (MOCs). Because even though Obsidian is generally built around the idea of being 'beyond' folder structures, you generally still need to have some sort of system to store all those juicy insights.

## 2. How does it work?
ZoottelKeeper watches the followings:

- _Creation_ of files in rootFolder and any subfolders within 
- _Deletion_ of files in rootFolder and any subfolders within 
- _Move_ a file among rootFolder to subFolders
- _Move_ a file among subfolders

### 2.1 Introduction
So, the idea behind Zoottelkeeper is to help you generate the base form of these maps automatically. It does so by indexing all the files and folders that lay in a folder, thus creating a link from the file to all it's content.

![image](https://user-images.githubusercontent.com/46029522/126865703-c3a3d12f-a88f-42d1-806a-415d9e1afa53.png)  -->  ![image](https://user-images.githubusercontent.com/46029522/126865758-883888d3-8cf1-496a-aa04-58ae6a4c69a6.png)  --> ![image](https://user-images.githubusercontent.com/46029522/126865823-84272e62-8f4f-417c-8af1-e624a02963be.png)

**(1)** shows the current folder structure. The plugin generates an index-file in each folder, showing all files and folders it contains. An example list **(2)** is shown for the main folder, but the subfolders contain a similar file. Each of these index-files is tagged **(3)** based on your preferences. This then results in the graph view with "folders" **(4)** (it's actually the index-files that are connected, but it looks like folders) and their respective files **(5)**.

### 2.2 What's actually cool about this?
So far so good, we've seen that before. The actually nice thing is, if I now move *Folder B* into *Folder A* **(6)**, then the index file will automatically update **(7)**, resulting in the desired graph view **(8)**.

![image](https://user-images.githubusercontent.com/46029522/126866100-be3717da-cae6-4550-9e52-7719d00e49f7.png)  -->  ![image](https://user-images.githubusercontent.com/46029522/126866120-b2b8d0b1-2334-4be9-88d8-84bb825705a6.png)  -->  ![image](https://user-images.githubusercontent.com/46029522/126866136-ba068748-5698-4ca7-aeff-562ab0c435a0.png)

### 2.3 Disclaimer and other used plugins
You might have noticed that you can't see the index files in the folders in view **(1)** and **(6)**, that is because I did not add a prefix to the index-file (so it's automatically named like the folder) and I also use the **Folder Note** plugin, just for the fact that it hides files in folders when they are named like the folder and displays them when you click on the folder (which is super nice for the MOC purpose here too).

### 2.4 TL;DR
Does this plugin replace the need to think about structure? No. But it could relief you of the tedious work that has to happen when you just want to allocate files to a broad category and, what's even bigger, it will relief you of the pain to manually go through all the files and change their "parent-category whenever a topic gets too big or you want to move it somewhere else. Basically all you have to do is save things where they belong and the plugin will map that basic structure out for you. You can then, on top of that, add whatever MOC, index or tag logic you like.

## 3. Installation and Settings
Similarly to any other plugins it is downloadable within Obsidian. Then, after enabling it, you will be able to configure Zoottelkeeper in its config interface.

![image](https://user-images.githubusercontent.com/46029522/126864195-4a8c7dd6-54ca-435e-a0bf-5a6520083609.png)

### 3.1 Choose your List-Style
There is three different types of lists for you to choose from:
	- pure Obsidian links, 
	- list items (dots)
	- links with checkboxes

### 3.2 Choose your Index Prefix
Depending on your preferences, you can set any prefix to your index-files (or none at all). (Please note that the prefix must be unique, otherwise, normal notes with the same note name might be recognized as index files, and in this cases they will be updated! 

### 3.3 Enable Meta Tags
You can choose to add YAML Meta Tags to your automatically generated index-files.

### 3.4 Set Custom Meta Tags
You can set one or multiple custom Meta Tags. Since they are displayed in the YAML format, you don't need to add a '#'.
If you're setting multiple tags please make sure to separate them with commas.

### 3.5 Additional Things
- The file and the folder are no longer listed in the in the index-file.
	
---

**As with every plugin, there is risk of data-loss and I don't give any guarantees or take any responsibility.**