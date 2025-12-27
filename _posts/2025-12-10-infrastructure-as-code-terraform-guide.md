---
layout: post
title: Infrastructure as Code With Terraform
date: 2025-12-10
categories: [infrastructure, devops]
tags: [terraform, iac, automation]
---

Infrastructure as Code is the difference between "I built a thing" and "I can reliably rebuild that thing 100 times."

The first time I wrote infrastructure in Terraform, I felt like I'd been doing things wrong forever. Here's why it matters and how to think about it correctly.

## The Old Way (Manual Infrastructure)

Click through AWS console. Create VPC. Create subnets. Create security groups. Document it in a spreadsheet nobody updates. When you need to recreate it, you forget something. It breaks.

## The New Way (Infrastructure as Code)

```hcl
resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"
  
  tags = {
    Name = "main-vpc"
  }
}

resource "aws_subnet" "private" {
  vpc_id            = aws_vpc.main.id
  cidr_block        = "10.0.1.0/24"
  availability_zone = "us-east-1a"
}
```

Your infrastructure is now:
- **Version controlled** (git history shows every change)
- **Reviewable** (code reviews catch mistakes)
- **Reproducible** (apply the same config, get the same result)
- **Testable** (validate it before applying)

## Core Concepts

**State:** Terraform maintains a file that tracks "what resources exist right now." When you apply changes, it compares desired state (your code) to actual state (real infrastructure) and makes the difference.

**Resources:** The things you create—VPCs, instances, databases, etc.

**Variables:** Inputs to your code. Instead of hardcoding values, parameterize them.

**Outputs:** What you want to know about what you created (instance IPs, database endpoints, etc.).

**Modules:** Reusable packages of infrastructure. Write once, use 100 times.

## A Real Example

```hcl
variable "environment" {
  type = string
}

variable "instance_count" {
  type = number
  default = 2
}

resource "aws_instance" "web" {
  count         = var.instance_count
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
  
  tags = {
    Name = "${var.environment}-web-${count.index}"
  }
}

output "instance_ips" {
  value = aws_instance.web[*].public_ip
}
```

Deploy to dev:
```bash
terraform apply -var="environment=dev" -var="instance_count=2"
```

Deploy to prod:
```bash
terraform apply -var="environment=prod" -var="instance_count=5"
```

Same code, different parameters. Consistent, repeatable, auditable.

## Common Mistakes

**Mistake 1: Manually changing infrastructure**
Don't. If you SSH and change something, Terraform gets confused. Make the change in code, apply it, then Terraform knows about it.

**Mistake 2: Storing state locally**
Use remote backends (S3, Terraform Cloud, etc.). Local state breaks when you work with a team.

**Mistake 3: Not locking state**
When two people apply changes simultaneously, state gets corrupted. Use state locking (S3 + DynamoDB, for example).

**Mistake 4: Secrets in code**
Never. Use variable files that aren't checked in, or use secret management tools.

## The Workflow

1. **Write** infrastructure as code (`.tf` files)
2. **Plan** changes (`terraform plan` shows what will happen)
3. **Review** the plan (is this actually what I want?)
4. **Apply** (`terraform apply` makes it real)
5. **Verify** (manually check everything works)
6. **Document** why this infrastructure exists (comments matter)
7. **Version** (commit to git with meaningful messages)

## Why This Matters for Your Career

When you understand IaC:
- You can move between cloud providers (AWS, GCP, Azure—Terraform does them all)
- You can build infrastructure faster
- You can collaborate with teams (pull requests > manual communication)
- You prevent "works on my machine" problems at the infrastructure level

## What's Next?

Learn these in order:

1. **Terraform basics:** Resources, variables, outputs
2. **State management:** Remote state, locking
3. **Modules:** Write reusable infrastructure
4. **Best practices:** Workspace separation, testing (terratest), policy enforcement
5. **Advanced:** Custom providers, module registries

---

*I'm publishing complete Terraform examples on GitHub. Start there, tweak them, break them, fix them. That's how you learn.*
