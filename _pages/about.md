---
permalink: /
title: "About Me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<div class="homepage-intro" markdown="1">

I am currently a Postdoctoral Researcher at the [HASP Lab](https://hasp-lab.github.io/), VRAIN, Universitat Politècnica de València (UPV), Spain, working with Professor [Jose Such](https://scholar.google.com/citations?user=xNr_IMUAAAAJ). I received my Ph.D. in Computer Science from Aalto University, Finland, under the supervision of Associate Professor [Janne Lindqvist](https://scholar.google.com/citations?user=rOW28UoAAAAJ). Before that, I completed my M.Sc. through the EIT Joint Master Program at Aalto University, Finland, and the University of Twente, the Netherlands.

My research lies at the intersection of **Human–Computer Interaction (HCI), usable security and privacy**, with a current focus on **human–AI interaction**. I am particularly interested in three interconnected research directions:

- **Technology Appropriation:** Technology adoption is not a one-time decision but an ongoing process of adopting, adapting, and integrating technologies into everyday life. I explore how people appropriate technologies, from web browsers that have long been part of everyday life to emerging AI systems that are increasingly becoming embedded in daily practices, and how to support their responsible appropriation.
- **Ecosystem Perspectives on Privacy:** Privacy in human–AI interaction extends beyond individual users. I take a user-centered yet ecosystem-wide perspective, examining how different stakeholders, including users, creators, infrastructure providers, and third parties, have intertwined roles, perceptions, and interests that shape how AI is appropriated, how privacy is experienced, and what strategies emerge to manage the privacy.
- **Human–AI Relationships and Relational Privacy:** What distinguishes AI from many earlier technologies is its evolving role in people's lives—not merely as a functional tool, but increasingly as a relational partner. I am particularly interested in romantic human–AI relationships, where privacy is relational, negotiated, and continuously evolving. My work explores how these dynamics challenge traditional understandings of privacy and why a more dynamic, relationship-centered perspective is needed.

My research has been published in leading HCI conferences and journals, including **ACM CHI** and **ACM CSCW**. You can find a selection of my publications below.

</div>

{% include research.html %}

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

