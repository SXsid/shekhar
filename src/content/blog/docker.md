---
title: "How Does a Linux Container Run on Your Windows Machine?"
dateOfPublish: "06 May 2026"
topic: "Docker"
color: "#2496ED"
image: "https://miro.medium.com/0*pN4fvf9VLBMy11nu.jpg"
---

> Ever wonder how Linux-based images can run on your Windows machine, even though the OS dependencies are Linux, and by container architecture, a Linux-based image should run on a Linux host to share the OS with similar images?

---

# The "Runs Everywhere" Promise

Docker says:

> **Build once. Run anywhere.**

And it works.

You pull a Linux image on your Windows machine,

```bash
docker run nginx
```

and the thing just runs.

But there is a quiet detail nobody talks about.

---

## Linux Containers Need a Linux Kernel

Linux containers depend on Linux kernel features like **cgroups** and **namespaces** to work.

So they need a Linux kernel to run.

Not prefer.

**Need.**

That means Docker's promise is really:

> **Runs everywhere a Linux kernel is available.**

On a Linux host, your container talks directly to the kernel.

**Zero tricks.**

On Windows?

There is no Linux kernel.

So Docker has to bring one.

---

# What Docker Actually Does on Windows

Docker uses a lightweight Linux VM through **WSL 2** (or **LinuxKit** on older systems).

Unlike traditional virtual machines, this VM is highly optimized, so the overhead is minimal.

It also bridges:

- Networking
- File sharing
- Resource management

so everything feels native.

---

## Where Is Your Container Actually Running?

Your container is **not running on Windows.**

It is running:

> **Inside a Linux VM that runs on Windows.**

```text
Windows
│
└── WSL 2 / Linux VM
      │
      ├── Linux Kernel
      ├── Docker Engine
      └── Containers
```

The VM provides the Linux kernel.

The container borrows from it.

Windows is simply the host.

---

# What About Windows Containers?

Windows containers are different.

They use the **Windows kernel directly**, so no Linux VM is needed.

The downside is that they only run on Windows.

Almost every image you'll pull—**nginx**, **postgres**, **redis**, **node**—is Linux-based.

So **99% of the time**, the Linux VM is doing the real work.

---

## TL;DR

Docker Desktop doesn't magically make Windows understand Linux containers.

It quietly starts a lightweight Linux VM, and **that's where your Linux containers are actually running.**

---

## References

- https://docs.docker.com/desktop/
- https://docs.docker.com/desktop/features/wsl/
- https://learn.microsoft.com/windows/wsl/
- https://github.com/linuxkit/linuxkit
