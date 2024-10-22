---
title: Alerting Module Troubleshooter
hide_table_of_contents: false
hide_title: false
---

import MacWindow from '@site/src/components/global/MacWindow';

<head>
  <title>Constellation nodectl utility</title>
  <meta
    name="description"
    content="nodectl utility upgrade tessellation"
  />
</head>

This guide is specifically for troubleshoot your node that is running alert module optional extension.

There are several troubleshooting steps you can take in the event that you are not properly receiving alerts, as expected.

## ◽ Support 
It is important to understand that the alerting module is an extension of the [auto_restart](/validate/quick-start/autorestart-quickstart) feature of nodectl.

:::danger WARNING
These are basic troubleshooting steps.  The alerting module is not a supported feature of nodectl, so **use at your own risk**. We can not provide extensive troubleshooting support for this feature.
:::

## ◽ Clear alerting cache
Clear the alerting cache on the node.

```
sudo nodectl auto_restart clear_alerts
```

## ◽ Send Test Report
Send a [report test](/validate/quick-start/alerting-quickstart#-test-a-report).

## ◽ Send an Alert Test
Send an [alert test](/validate/quick-start/alerting-quickstart#-test-an-alert).

## ◽ Review Logs
Review your logs for errors that may clue us in to why the alerts are not egressing from your node.

```
sudo nodectl logs -l nodectl
```

## ◽ Handle possible spam 
If you are sending your alerts to a standard email address, you will want to make sure that your email provider is not marking the incoming alerts as **spam**.  Setup rules within your email provider's settings or application settings to avoid the spam filter from marking the incoming messages as spam or black listing the gmail address you [configured](/validate/quick-start/alerting-quickstart) during installation.

## ◽ Mobile providers
If you setup your alerts to be received as a text message via your mobile provider, you can run into issues with getting blocked.

- Verify that you have MMS support enabled on your mobile phone's messaging application.
- Verify that you are able to send messages manually from your email address to your mobile phone's email address.
- Contact your mobile provider and ask them to allow the email address you setup on your node to send outbound to your mobile provider, through their mobile email gateway.  There is a good chance the mobile provider will attempt to block repetitive alerts.

## ◽ Last resort
Request assistance on Constellation Network's Official Discord server.