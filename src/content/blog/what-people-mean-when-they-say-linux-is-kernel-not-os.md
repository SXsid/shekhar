---
title: "Linux is just a kernel. But what does that actually mean?"
dateOfPublish: "06 May 2026"
topic: "Linux"
color: "#f5a623"
image: "https://media.licdn.com/dms/image/v2/D5622AQG2TV2Qha8eww/feedshare-shrink_800/B56Z2ks9keHkAc-/0/1776584743762?e=1779926400&v=beta&t=ZkLZ9WOxq1Lf2wQpYwT1GNVLX3B3LX_-U-LEc-T3Jh8"
---

Linux is just a kernel. But what does that actually mean?

Here is how I think about it.

Your Linux system is split into two worlds based on how much power a program has over your hardware.

<u>Kernel space.</u> <u>User space.</u>

The kernel gets full, unrestricted access to your CPU, memory, and hardware.

Everything else, your browser, your terminal, your display manager, your SSH daemon, lives in user space.

It has to ask the kernel politely to do anything real.

Now the fun part.

Every process in user space is born through `fork()`.

Every program is a child of another program.

Trace it all the way back and you hit one root process, the one the kernel itself hands control to right after booting.

That is <u>PID 1.</u>

On most modern systems, that is <u>systemd.</u>

The kernel does not really care what that process is. It just looks for a binary in a few known spots like `/sbin/init` and runs it.

Placing that binary there is the OS's job, or yours if you are building things manually.

Everything you know, network manager, display drivers, bluetooth, sshd, all of it descends from that one process.

See it yourself right now:

```bash
pstree -p
```

This command lists your entire process family tree, all the way up to PID 1.

```bash
systemctl list-units --type=service
```

Everything systemd is babysitting, which is basically all of user space.

Want to really feel this?

Install Arch Linux once. No pre-built system. You partition manually, install manually, place that init binary yourself.

Nothing is hidden from you.
