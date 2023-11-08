---
layout: archive
title: "Projects"
permalink: /projects/
author_profile: true
---

A sample of my research projects can be found below.

{% include base_path %}

{% for post in site.projects reversed %}
  {% include archive-single-projects.html %}
{% endfor %}
