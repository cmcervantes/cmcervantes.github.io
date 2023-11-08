---
title: "Entity-Based Scene Understanding"
excerpt: "This thesis focuses on the task of _entity-based scene understanding_: automatically identifying the entities 
in a visual scene as described by multiple captions."
collection: projects
permalink: /projects/2018_entity_based
author_profile: true
year: 2018
role: "Graduate Researcher"
---

<p>{{ page.year }} &mdash; <i>{{ page.role }}</i></p>

This thesis focuses on the task of _entity-based scene understanding_: automatically identifying the entities 
in a visual scene as described by multiple captions. This task subsumes coreference resolution (e.g., linking 
the appropriate text spans in "a man and a dog on a beach" and "a person and their pet on the shore") and grounding
(e.g., localizing the person and the dog in the image) as it requires the production of mutually consistent relations 
between entity mentions and image regions.

<p>
    <img src="/images/2015_cervantes_flickr30k_ex.png" alt="Flickr30k v2 Example" 
    style="width:75%;margin-left:auto;margin-right:auto;display:block;">
    <em>Example Flickr30k Entities v2 image; coreference chains are color-coded and share
    subscripts; groundings are shown with superscripts </em>
</p>

We combined neural classification (i.e., to predict coreference, sub/superset, mention / bounding box affinity) with 
integer linear programming to enforce consistency for issues like coreference symmetry, subset transitivity, and 
mention cardinality. Our approach showed promising results, particularly around relation inference and how 
coreference resolution meaningfully improves grounding performance (though in this experiments grounding 
did not improve coreference resolution). 

Additional details can be found [in the thesis](/files/2018_cervantes_entity.pdf).
