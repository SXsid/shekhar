---
title: "how does a Linux container run on your Windows machine?"
dateOfPublish: "06 May 2026"
topic: "Docker"
color: "#2496ED"
image: "https://miro.medium.com/0*pN4fvf9VLBMy11nu.jpg"
---

Ever wonder how Linux-based images can run on your Windows machine, even though the OS dependencies are Linux, and by container architecture, a Linux-based image should run on a Linux host to share the OS with similar images?

## the "runs everywhere" promise

Docker says build once, run anywhere.

And it works.

You pull a Linux image on your Windows machine, run `docker run`, and the thing just runs.

But there is a quiet detail nobody talks about.

Linux containers depend on Linux kernel features, cgroups and namespaces, to work.

So they need a Linux kernel to run. Not prefer. <u>Need.</u>

That means "runs everywhere" really means runs everywhere <u>a Linux kernel is available.</u>

On a Linux host, your container talks directly to the kernel. Zero tricks.

On Windows? There is no Linux kernel. So Docker has to bring one.

## what Docker actually does on Windows

To achieve this, Docker uses lightweight VMs like <u>WSL 2</u> or <u>LinuxKit</u>, as the Windows kernel is incompatible with Linux-based containers.

The VM is highly optimized, so it is not a problem like the overhead we face while running traditional virtual machines directly.

The VM bridges networking, file sharing, and resource management to integrate seamlessly with the Windows host.

Your container is not running on Windows.

It is running <u>inside a Linux VM that runs on Windows.</u>

The VM provides the Linux kernel. The container borrows from it. Windows is just the host.

## what about Windows containers?

For Windows containers, Docker directly uses the Windows kernel without needing a VM.

But those images only work on Windows. They do not run everywhere.

Almost every image you will pull, nginx, postgres, redis, node, is Linux-based.

So 99% of the time, the Linux VM is what is doing the actual work.

This setup ensures efficient performance and compatibility for both Linux and Windows-based containers.
