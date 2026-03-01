---
permalink: /
# title: "Rongjun Ma"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

Welcome to my personal academic website. Here you can find my publications, talks, teaching, and other activities.

My research explores how people appropriate technologies in everyday life. 

## Education
- **Postdoctoral Researcher** (Jan 2026 – present)
  - Host: [HASP Lab](https://hasp-lab.github.io/), VRAIN, UPV Valencia, Spain
  - Supervisor: Professor [Jose Such](https://scholar.google.com/citations?user=xNr_IMUAAAAJ&hl=en&oi=ao)
- **Ph.D.** Computer Science, Aalto University, Finland (Dec 2020 – Oct 2025)
  - Supervisor: Associate Professor [Janne Lindqvist](https://scholar.google.com/citations?user=rOW28UoAAAAJ&hl=en&oi=ao)
- **M.Sc.** EIT Joint Master Program (2018–2020)
  - Entry: Aalto University, Finland
  - Exit: University of Twente, Netherlands



<!-- news section: loaded from _data/news.yml -->
{% assign updates = site.data.news %}
{% if updates and updates.size > 0 %}
## News
<ul class="site-news">
  {%- comment -%} show at most 10 most recent entries {%- endcomment -%}
  {% for item in updates limit:10 %}
    <li><strong>{{ item.date }}:</strong> {{ item.text }}</li>
  {% endfor %}
</ul>
{% endif %}



