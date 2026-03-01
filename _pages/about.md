---
permalink: /
title: "Rongjun Ma"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

Welcome to my personal academic website. Here you can find my publications, talks, teaching, and other activities.

My research explores how people appropriate technologies in everyday life. 

## Education

- **M.Sc.** EIT Joint Master Program (2018–2020)
  - Entry: Aalto University, Finland
  - Exit: University of Twente, Netherlands
- **Ph.D.** Computer Science, Aalto University, Finland (Dec 2020 – Oct 2025)
  - Supervisors: Associate Professor Janne Lindqvist
- **Postdoctoral Researcher** (Jan 2026 – present)
  - Host: HASP Lab, VRAIN, UPV Valencia, Spain
  - Supervisor: Professor José Such

<!-- news section: loaded from _data/news.yml -->
{% assign updates = site.data.news %}
{% if updates and updates.size > 0 %}
## News
<ul class="site-news">
  {% for item in updates %}
    <li><strong>{{ item.date }}:</strong> {{ item.text }}</li>
  {% endfor %}
</ul>
{% endif %}



