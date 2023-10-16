---
title: "From Route Instructions to Landmark Graphs"
excerpt: "This projects sought to bridge the gap between mapping technologies and people's mental maps by 
automatically constructing graphical representations of landmarks and how they relate in space from natural 
language route instructions."
collection: projects
permalink: /projects/2020_route_instructions
author_profile: true
year: 2020
role: "Principal Investigator"
---

Mapping technologies have traditionally relied on moving sensors through space along predefined paths (e.g., driving 
a car equipped with cameras and lidar along a road), but this approach has limited utility in emergencies (when 
predefined paths may have changed without warning), in parts of the developing world where infrastructure is not 
well-developed, or in the last mile / last meter context, where couriers must find unusual entrances or navigate 
interior spaces. In all such cases, people navigate by constructing a mental map using landmarks. 

This projects sought to bridge the gap between mapping technologies and people's mental maps by automatically 
constructing graphical representations of landmarks and how they relate in space from natural language route 
instructions. We developed a neural model (based on a bidirectional LSTM using the encoder-decoder approach) to
repeatedly parse route instructions, iteratively attending to different portions of the text to predict an action 
or world state (landmark cue) that could be combined into a final graphical representation.

<img src="/images/2018_cervantes_last-meter-diagram.png" alt="Last Meter Diagram" 
style="width:75%;margin-left:auto;margin-right:auto;display:block;">

Additional details can be found [in the paper](/files/2020_cervantes_landmark.pdf).
