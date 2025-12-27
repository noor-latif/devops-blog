---
layout: post
title: Building a CI/CD Pipeline From Scratch
date: 2025-12-15
categories: [devops, ci-cd]
tags: [automation, jenkins, best-practices]
---

Every time someone asks me "how do I set up CI/CD?", I realize there's a gap between theory and practice. Theory talks about "continuous integration" and "deployment pipelines." Practice is... messy.

This post documents building a real pipeline that actually works—from code commit to production.

## What Are We Building?

A pipeline that:
- Runs tests automatically when code is pushed
- Builds a Docker image if tests pass
- Scans it for vulnerabilities
- Deploys it to Kubernetes if everything is clean
- Alerts us if anything breaks

## The Philosophy First

Before tools, understand the principles:

**1. Automation Beats Humans**
If you're doing it manually, it will fail. Automate first, perfect later.

**2. Fast Feedback**
Your developers should know if their code is broken *in seconds*, not hours.

**3. Security Isn't Separate**
It's not a step at the end. It's woven in: scan code, scan images, enforce policies.

**4. Simple > Clever**
Everyone on your team should understand the pipeline. If you need a flowchart to explain it, simplify.

## The Minimal Viable Pipeline

Here's the absolute minimum:

```yaml
name: Test and Build
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run tests
        run: npm test
      - name: Build image
        run: docker build -t myapp:${{ github.sha }} .
```

That's it. Code comes in, tests run, image is built. Takes 5 minutes to set up. Solves 80% of the problem.

## Growing From There

Once this works, add:

**1. Container Scanning**
```bash
trivy image myapp:latest
```

**2. Deploy to Dev**
```bash
kubectl apply -f k8s/dev/ --image=myapp:sha
```

**3. Run Integration Tests**
Test against the real deployment, not just unit tests.

**4. Production Deployment**
Only if everything above passed.

## Real Problems You'll Hit

**Problem 1: Pipeline takes 30 minutes**
*Solution:* Run tests in parallel. Cache dependencies. Build images once, not twice.

**Problem 2: Tests pass locally, fail in CI**
*Solution:* CI environment should match dev. Docker helps with this—same image everywhere.

**Problem 3: Deployments fail, but pipeline says "success"**
*Solution:* Add health checks. Don't just deploy—verify it's actually running.

**Problem 4: Everyone's afraid to deploy**
*Solution:* If your pipeline is trustworthy, fear goes away. Automate thoroughly, then deploy frequently.

## The Checklist

Before calling your pipeline "done":

- [ ] Tests run automatically on every commit
- [ ] Code is scanned for security issues
- [ ] Container images are built reproducibly
- [ ] Images are scanned before deployment
- [ ] Deployment is automated, not manual
- [ ] Failed deployments are caught and alerted
- [ ] Rollbacks are automated and fast
- [ ] The whole pipeline is version-controlled

## What Changed My Approach

I used to treat CI/CD as a "nice to have." Then I spent a week fixing production bugs manually while deployments were broken. Now it's first, not last.

Pipeline > Code > Everything Else.

---

*In my next post, I'll walk through setting up Jenkins in Kubernetes with dynamic agents. Real code, real configs.*
