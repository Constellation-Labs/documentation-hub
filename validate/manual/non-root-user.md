---
title: Setup Non-Root User
hide_table_of_contents: false
---

<head>
  <title>Setup Node Non-Root User</title>
  <meta
    name="description"
    content="This document will help to create a non-root user to access our Node with instead of the default user."
  />
</head>

At this point in the documentation, you should have successfully accessed your **new** VPS (Virtual Private Server) in the cloud of your choice.

:::info GCP USERS
If you are utilizing **GCP** (Google Cloud Platform) this section can be skipped, and you can proceed directly to the next section [installing dependencies](/validate/manual/dependencies)
:::

## Best Practices

Best practice is **not** to be logged in as the **`root`** user, or a `generic commonly used and known username` such as the **ubuntu** user that AWS uses on their default AMI (Amazon Machine Image) instances.

This can give **bad actors** an easier avenue and the ability to guess at `well known` options to gain access to your instance, for nefarious activities.

The **root** user has privileges that are too expansive and it has unrestricted access to do things that; whether nefarious or not, can still cause trouble.

Our goal is to create a user that does not have **root** access. This will add an extra layer of security around our instance. Once this user is created, we will request to become a **super user** every time we want to issue a request against our instance to do something as if we were the **root administrator**.

## Log into your node

From your local system, log into (**create an SSH session**) your cloud instance's terminal, as **root**. 

:::tip 
You can review the **[Accessing your Node YouTube video](https://www.youtube.com/embed/7lhiuFtrOzU)** to remind yourself how to gain access to your node; alternatively, you may return to the previous section [mac](/validate/resources/accessMac) or [windows](/validate/resources/accessWin) for details.
:::

Use your **Apple terminal**, **Window's PuTTY**, or your terminal application of choice.

:::danger
It is discouraged to use the Google Cloud Platform's console application on their website. Their console web application access should only be used in **emergency** situations.
:::

## Add a new user

From our root user account we will add a new user.
```
adduser nodeadmin
```
The output will look similar to this:
```
Adding user `nodeadmin' ...
Adding new group `nodeadmin' (1001) ...
Adding new user `nodeadmin' (1001) with group `nodeadmin' ...
Creating home directory `/home/nodeadmin' ...
Copying files from `/etc/skel' ...
New password:
```

### Enter password

Enter in a **complex** [password](/validate/resources/password), verify it, and **copy it into a safe location** so you don't forget.

```
New password:
Retype new password:
passwd: password updated successfully
```

### Enter user information

You will be prompted to enter in various information about this new user. You can either enter in the information that you deem necessary, or just hit **⏎** through each question. You will have to confirm the information with a **Y** at the end of the input section.

```
Changing the user information for nodeadmin
Enter the new value, or press ENTER for the default
Full Name[]: nodeadmin
Room Number[]:
Work Phone[]:
Home Phone[]:
Other[]:
Is the information correct?[Y/n]Y
```

### Add nodeadmin to sudo group

Let's make **nodeadmin** a member of the super users **sudo** group.

```
usermod -aG sudo nodeadmin
```

We need to make sure our new user can properly **`ssh`** into our node. First we will copy our **`authorized_keys`** file to our new **nodeadmin's** home directory.

```
cp /root/.ssh/authorized_keys /home/nodeadmin
```

We need the change the ownership of the file from **root** to **nodeadmin**.

```
chown nodeadmin:nodeadmin /home/nodeadmin/authorized_keys
```

Let's change to our new **nodeadmin** user.

```
su - nodeadmin
```

:::tip
To run a command as administrator (user "root"), use `sudo <command>`.

See "man sudo_root" for details.
:::

Create a hidden directory called **`.ssh`** do not forget the `.` (period) in front of the **ssh**.

```
cd ~
mkdir .ssh
```

Move our **`authorized_keys`** into our new directory. We will do this with some checks along the way.  Do **not** forget the `.` (period) at the end of the command.

```
cd .ssh/
mv ../authorized_keys .
```
*The 2 **l** are the letter **l** (L) not the number 1 (ls -la)*
```
ls -la
```
Output will look **similar** to this:

:::note
Dates and File Sizes may be different
:::

```
total 12
drwxrwxr-x 2 nodeadmin nodeadmin 4096 Jul 10 02:05 .
drwxr-xr-x 3 nodeadmin nodeadmin 4096 Jul 10 02:04 ..
-rw------- 1 nodeadmin nodeadmin 742 Jul 10 02:05 authorized_keys
nodeadmin@nconstellation-networke:~/.ssh$
```

### Log out

---
We are done and can *logout* of our **nodeadmin** session.

```
logout
```

Prompt should change back to your root user.

###### root@constellation-network:~$

### Exit instance

We will exit out of our instance.

```
exit
```

We should now be completely out of our Node. 

Your Terminal should return to your local system's prompt (Apple/Linux) or, if you are using an application like PuTTy, you will see the window *completely exit* and *disappear*. **This is expected behavior**.

:::tip
**WINDOWS USERS**

It is now time to go back into your PuTTy session and update the username from **root** to **nodeadmin**.

You will do this within the configuration sections of PuTTy.

If you do not remember how to do this access this link [Access your cloud instance](/validate/resources/accessWin) to refresh your memory.  

While going through the steps again, substitute `nodeadmin` where ever you see `root`.
:::

:::tip
**APPLE and LINUX USERS**

You will change the **root@** to **nodeadmin@** in your ssh access expression from your Apple/Linux local terminal session.

If you do not remember how to do this access this link select [Access your cloud instance](/validate/resources/accessMac) to refresh your memory.

While going through the steps again, substitute `nodeadmin` where ever you see `root`.
:::

Our user is setup! 

Moving forward connect as **nodeadmin** to work on our instance. The **root** user should **no longer** be used.

:::note
It is recommended to disable the root user's SSH access; however, we will take care of this during the installation of our Node on our instance.
:::
