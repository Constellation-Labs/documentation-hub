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
This feature will report if the node falls off the cluster for any reason other than a network outage directly related to the node.

:::caution
It is important to understand that nodectl's alerting feature can only alert when the node is available on the network.  If the node falls off the network and is no longer accessible, any alerts that are created will not be able to egress from the node and therefor will not be received by the receiving party or service.
:::

## ◽ Prerequisities 
nodectl's alerting feature utilizes [gmail](https://www.gmail.com) to send out alerts to/from.  You will be required to setup a gmail account with 2-Step Verification and create an access token (app password) for nodectl to use to send alerts and reports to.

These steps are covered in this quick start guide.

## ◽ Create a Gmail account
Follow the following [procedure](https://support.google.com/mail/answer/56256?hl=en) directly from Gmail's support page.

Alternatively, you can use an existing Gmail account if you already own one.

## ◽ Enable 2-Step Verification

If you already have 2-step verification enabled you can skip this step.

Follow the following [procedure](https://support.google.com/mail/answer/185839?hl=en&co=GENIE.Platform%3DDesktop&sjid=12848508336786962715-NA) to enable 2-factor authentication.

:::danger Important
This is required in order to obtain a email access token for nodectl to use!
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

## ◽ Prepare to create configuration

- Navigate to the nodectl's `includes` directory.
```
cd /var/tessellation/nodectl/includes
```
:::danger Possible Error
If we receive this error:
<MacWindow>
-bash: cd: /var/tessellation/nodectl/includes: No such file or directory<br />
nodeadmin@Constellation-Node:~$
</MacWindow>

Create the directory:
```
sudo mkdir /var/tessellation/nodectl/includes
```
Navigate to the directory again.
```
cd /var/tessellation/nodectl/includes
```
:::
We should now be in our `includes` directory.
<MacWindow>
nodeadmin@Constellation-Node:/var/tessellation/nodectl/includes#
</MacWindow>

## ◽ Build Your Alerting configuration
We should be in our `/var/tessellation/nodectl/includes` directory.
```
sudo nano alerting.yaml
```
Copy and Paste the following into the `nano` editor.  Remember, this is a terminal editor application, you cannot use your mouse, instead use the arrow keys. 

***Make sure the file starts with `---` on its own line at the top of the file.***

```
---
alerting:
  enable: True
  gmail: '<myemail>@gmail.com'
  token: 'password'
  send_method: 'multi' # 'multi' or 'single'
  recipients:
    - 'cellphone@mms.att.net'
    - '<an_email>@gmail.com'
  begin_alert_utc: 0  # 0-23 or 'disable'
  end_alert_utc: 0   # 0-23 or 'disable'
  report_hour_utc: 18  # 0-23 or 'disable'
  local_time_zone: '<my_timezone>'
  ```

All values should be surrounded by `'` (single quotes).

- Arrow up to the `gmail:` line and replace with your gmail account where you created the [App password](#-create-an-app-password).
- Arrow to the `token:` line and replace the token (App password) with your App password.
- Arrow to the `send_method` line. Keep the `multi` (*recommended*) if you should like a multiple emails sent per email address. Otherwise, you can change it to `single` if you would like the emails to be sent out in a single email, where all email addresses are in the `to` field of the email.  
- Arrow to the `recipients:` and replace the list of emails with the list of emails where you would like your alerts to be sent.  *If you only have one email address you will be sending alerts to you can remove the extra line.*
  ```
  receipients:
    - '<an_email>@gmail.com'
  begin_alert_utc: 0
  ```
- Arrow to the `begin_alert_utc` and place the hour that you would like to have your alerting active.  If you would like to have alerting 24/7, you can keep both values at `0`.
- Arrow to the `end_alert_utc` and place the hour that you would like to have your alerting stop. *Keep at `0` for 24/7.*
- Arrow to the `report_hour_utc` and place an hour for when a daily report will be sent out.  Reports are only sent once a day at the hour specified.
- Arrow to the `local_time_zone:` and place the timezone your discovered [here](#-determine-timezone).

## ◽ Save the Configuration

Press <kbd>Ctrl</kbd>+<kbd>o</kbd> to write it out.

Press <kbd>Enter</kbd> to accept the `File Name to Write:`.

Press <kbd>Ctrl</kbd>+<kbd>x</kbd> to exit the `nano` editor.

## ◽ Verify the Config
```
cat /var/tessellation/nodectl/includes/alerting.yaml
```
You should see the contents as you edited it.  If not, return to the [build](#-build-your-alerting-configuration) step, to repeat the step.

## ◽ Return to Home Directory
```
cd ~
```

## ◽ Restart Auto Restart
Since the `alerting` sub-feature is part of the `auto_restart` feature, we need to restart the `auto_restart` to implement our changes.
```
sudo nodectl auto_restart restart
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
In some cases, you may need to contact your cell phone provider and make sure they are aware that you email is not phishing, so that they do not "black hole" it.  If you are sending to your mobile phone number and do not receive it.  Add another valid email to make sure the email is being received before other troubleshooting.
:::

## ◽ Test a Report
```
sudo nodectl auto_restart send_report
```

# WARNING
:::danger
This is not a support feature of nodectl, so use at your own risk.

We can not provide extensive troubleshooting support for this feature.
:::