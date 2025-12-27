---
layout: home
title: Home
---

# Learning DevOps in Public

I'm Noor Latif, a DevOps professional on a mission to master Kubernetes and cloud-native technologies while helping others do the same. This is my learning journey—documented, shared, and real.

## What You'll Find Here

**For Beginners:** Clear, accessible explanations of DevOps concepts that make complex ideas feel simple. No gatekeeping, no pretense—just practical knowledge broken down so you actually understand it.

**For Advanced Learners:** Deep dives into production patterns, Kubernetes architectures, and lessons learned from real-world DevOps challenges. Technical depth delivered conversationally.

**For Recruiters:** A portfolio of my growth, projects, and certifications. See how I approach problems, communicate technical concepts, and contribute to the DevOps community.

## My Approach

I follow Kelsey Hightower's philosophy: **technical depth delivered with clarity and practicality**. Like Mischa van den Burg, I learn in public—sharing what works, what breaks, and everything in between. No fluff. Just the signal, not the noise.

Every post is either:
- A concept I've just understood and want to explain clearly
- A problem I've solved and documented for the next person who hits it
- A lesson learned from production incidents and real-world constraints
- A tool, pattern, or practice that actually delivers value

---

## Latest Posts

{% for post in site.posts limit:5 %}
<div class="post-preview" markdown="1">
### [{{ post.title }}]({{ post.url }})
*{{ post.date | date: "%B %d, %Y" }}*

{{ post.excerpt }}
[Read more →]({{ post.url }})
</div>
{% endfor %}

---

## Let's Connect

- **GitHub:** [@noor-latif](https://github.com/noor-latif)
- **LinkedIn:** [linkedin.com/in/noor-latif](https://linkedin.com/in/noor-latif)
- **Email:** [hello@noor-latif.com](mailto:hello@noor-latif.com)

Whether you're recruiting, learning DevOps, or just exploring what's possible with Kubernetes—let's talk.
