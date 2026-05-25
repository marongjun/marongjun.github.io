---
permalink: /
title: "About Me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
I'm curious about how people appropriate different technologies into their everyday lives. Currently, I'm interested in usable security and privacy, and in how our relational and evolving relationship with AI reshapes the landscape and challenges conventional theories of privacy.

I'm interested in theory and methodology; they are lenses and tools to interpret and observe the world around us.

I have a cat Chester, who is a rebellious, talkative, peaceful, multicultural middle-aged male. He has been accompanying my research journey since day one.

I left my hometown for university and have been living abroad ever since. I spent four years in Beijing, China, and seven years in Espoo, Finland (a city a few metro stops from Helsinki). Now I live in Valencia, Spain. I’ve loved every stop, and I keep wondering where I’ll be in 10 years.

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
