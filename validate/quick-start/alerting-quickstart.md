---
title: Setup Alerting Quick Start
hide_table_of_contents: false
hide_title: true
---
import BrowserWindow from '@site/src/components/global/BrowserWindow';
import MacWindow from '@site/src/components/global/MacWindow';
import WinCommandPrompt from '@site/src/components/global/WinCommandPrompt/WinCommandPrompt';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Introduction

This guide is specifically for setting up basic alerting and reporting on your node using nodectl.

This feature will report if the node falls off the cluster for any reason other than a network outage directly related to the node.

:::caution
It is important to understand that nodectl's alerting feature can only alert when the node is available on the network.  If the node falls off the network and is no longer accessible, any alerts that are created will not be able to egress from the node and therefore will not be received by the receiving party or service.
:::

## ◽ Prerequisites 
nodectl's alerting feature utilizes [gmail](https://www.gmail.com) to send out alerts to/from.  You will be required to setup a gmail account with 2-Step Verification and create an access token (app password) for nodectl to use to send alerts and reports to.

These steps are covered in this quick start guide.

## ◽ Create a Gmail account
Follow the following [procedure](https://support.google.com/mail/answer/56256?hl=en) directly from Gmail's support page.

Alternatively, you can use an existing Gmail account if you already own one.

## ◽ Enable 2-Step Verification

If you already have 2-step verification enabled you can skip this step.

Follow the following [procedure](https://support.google.com/mail/answer/185839?hl=en&co=GENIE.Platform%3DDesktop&sjid=12848508336786962715-NA) to enable 2-factor authentication.

:::danger Important
This is required in order to obtain an email access token for nodectl to use!
:::

## ◽ Open Gmail Account Management

Access your gmail account as normal.

From the `top right` click on your avatar icon and select `Manage your Google Account`.

## ◽ Access Security Panel

From the `left` side menu click on `Security`.

## ◽ Create an App Password

- From the `right` menu click on `2-Step Verfication`.
- Scroll down to `App passwords` section.
- Expand the `App passwords` section by clicking on the arrow to the `right` of the section.

Enter in an `App name` such as `constellation_alerts` (*example only, you can use this name or choose a name to your liking*).

Click on the <kbd>Create</kbd> button.

A module will pop up with a new `app password`.  Write this down... 

**DO NOT FORGET IT**.

:::caution
This app password (which we can refer to as a token) will not be retrievable once you close the module displaying it.

If you lose this token, you can delete the app password by clicking on the trash can icon next to the app password with the name you used, and then create a new app password.
:::

## ◽ Determine Timezone
nodectl's alerting feature requires an understanding of your local timezone. If nodectl knows your local timezone, it can help report alerts with local timezones, instead of translating manually from `UTC`. 

The VPS that your node is running on should be using `UTC`. You can also use `UTC` for alerting, this is up to you.

You can lookup your timezone [here](https://gist.github.com/heyalexej/8bf688fd67d7199be4a1682b3eec7568).
:::success IMPORTANT
You must use the exact string wording as found in the above list for your node's alerting to work properly.  Failure to do so will result in errors.
:::

:::danger IMPORTANT
Do not use direct timezone shortcuts like `CET` or `EST`. 

For exmaple:
- New York USA, will use `America/New_York`
- Zurich, GE will use `Europe/Zurich`

If your city is not in the list, use a city that is in the same timezone as your location.
For exampe:
- If you live in `Miami USA` you will use `America/New_York` or `US/Eastern`.
:::

Write down your timezone for later use.

## ◽ SSH into Your VPS
```
ssh -i /path/to/ssh/private/key nodeadmin@vps_ip_address
```
Refer to [SSH Explanation](/validate/validator/ssh-keys), [Mac SSH Guide](/validate/resources/accessMac), and [Windows SSH Guide](/validate/resources/accessWin)
for detailed understanding.

## ◽ Start Configurator
We will enter into the configurator using the `-e` (edit), `-cb` (confirm backups), and `-d` (detailed mode) options.
```
sudo nodectl configure -e -cb -d
```

## ◽ Enter Alerting Setup
```
N) Setup Alerting
```

## ◽ Configure Alerting
We will be greeted with a `New Configuration Detected` message.

Press any key to continue and start entering the required input as prompted. Each option will include a detailed explanation of what is being requested from you. 

You can **also** use the reference table below.

| option to enter | description | recommended |
| :---: | :--- |
| gmail account | This is the gmail account that you setup with the App password and created for your App password token through. | - |
| token | This is the App password token you created during the initial gmail account setup. | - |
| send method | 'multi' (recommended) send strategy will send a single email per email address.  The 'single' send strategy | multi |
| recipient emails | What email addresses do you want the alerts and daily report sent to?  If you have multiple emails that will be receiving messages from the alerting module such as a mobile provider email and a local email, you must separate each email by a comma. example) `email1@gmail.com,email2@yahoo.com`. | - |
| time zone | In order to make your alerts more reader friendly, nodectl will convert the default UTC time utilized by the node into your local time zone for you. You should have retrieved this string value from the quick start guide on Constellation Network's documentation hub: [here](#-determine-timezone). | - |
| begin alerting hour | What hour in UTC 24 hour format, do you want alerting to start.  Enter 0 for always. | 0 |
| end alerting hour | What hour in UTC 24 hour format, do you want alerting to start.  Enter 0 for always. | 0 |
| send report hour |  What hour in UTC 24 hour format, do you want the daily report to be sent.  Each day, nodectl will send the report only once, as soon as the configured UTC hour is reached. Only a single report will be sent each day. | - |

- Confirm the values you entered.

## ◽ Quit Configurator
Once you complete the process, you will be returned to the main menu.
```
Q)uit
```

## ◽ Test an Alert
```
sudo nodectl auto_restart alert_test
```
Check your email for the test to come in.  

:::caution SPAM
Please remember to adhere to the normal spam protocols by marking any incoming email as "not spam" if the spam filter catches it.
:::

:::caution MOBILE PROVIDER EMAIL
In some cases, you may need to contact your cell phone provider and make sure they are aware that your email is not phishing, so that they do not "black hole" it.  If you are sending to your mobile phone number and do not receive it.  Add another valid email to make sure the email is being received before other troubleshooting.
:::

## ◽ Test a Report
```
sudo nodectl auto_restart send_report
```

## ◽ Troubleshooting
You may troubleshoot your alerting module [here](/validate/troubleshooting/alerting-troubleshoot).