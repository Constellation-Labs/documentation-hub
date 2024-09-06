---
title: Verify Utility Binary
hide_table_of_contents: false
---
import Collapsible from '@components/global/Collapsible/Collapsible.jsx';
import MacWindow from '@site/src/components/global/MacWindow';

## Quick Start
Execute the verify nodectl command after logging into your Node.

<MacWindow>
sudo nodectl verify_nodectl
</MacWindow>

You should receive a successful message

<MacWindow>
SUCCESSFUL - AUTHENTIC NODECTL
</MacWindow>

or if the version is not valid

<MacWindow>
INVALID SIGNATURE - WARNING
</MacWindow>

### Short Option
You can also minimize the displayed output using the `-s` option.
<MacWindow>
sudo nodectl verify_nodectl -s
</MacWindow>

## Understanding `verify_nodectl`

After issuing the command `sudo nodectl verify_nodectl` on your Node you should respond with validation output, as described in this section of the documentation.

After we initiate the `verify_nodectl` command, nodectl will reach out to the GitHub repository and download:
- Public Key
- Signature Hash
- Signature File

<MacWindow>
nodeadmin@Constellation-Node:~$ sudo nodectl verify_nodectl<br />
</MacWindow>

<MacWindow>
[sudo] password for nodeadmin:<br />
<br />
========================================<br />
=   CONSTELLATION NETWORK HYPERGRAPH&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=<br />
=             VERIFY NODECTL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=<br />
=          WARNING VERIFY KEYS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=<br />
========================================<br />
Code Name: Princess Warrior<br />
<br />
fetching public key ........................... complete <br />                                              
fetching digital signature hash ............... complete  <br />                                             
fetching digital signature .................... complete  <br />    
</MacWindow>

nodectl will display the public key that was found for this particular version of nodectl.  For added security you can access the GitHub repository and compare the key located within the repository against what is displayed by nodectl.  This will help to guard against "man-in-the-middle" attacks.

<Collapsible title="man-in-the-middle attack?">
A man-in-the-middle (MITM) attack happens when someone secretly inserts themselves between two parties communicating over the internet, without either party realizing it. In this scenario, we are sending sensitive digital signature hashes and locations from the GitHub website.  In a MITM attack, the attacker intercepts this communication, and can return their information, alter the messages, or impersonate the website to send malicious or invalid responses back to your Node.  You may then believe you have an authentic nodectl, but in fact you have the attackers version.  If run via the attacker's version, they may be able to steal sensitive information including your private p12 keystore (hot wallet).
</Collapsible>

:::danger IMPORTANT
When following the URL below 👇 you should check the SSL certificate on GitHub to verify you are not being directed to a phishing website, and that the GitHub repo name matches `StardustCollective -> nodectl`.
:::

*The public key shown below is not valid*.

<MacWindow>                                         
PUBLIC KEY<br />
=============================================<br />
-----BEGIN PUBLIC KEY-----<br />
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA6PYmRU353OXMAE6ui5SwBM8PGKUgCqPy8eBjuQMyeuWu3OHSjLVXR7ybA46OsS8qTKWJMw2ywPo9v03i3XWgmQF8yNsLkbYvix//4V0NJQ6yiq+NynbqXp2aHYRTiTHjL6tasVB3KMLgEi/twI/AE+jglU0tXjiHrED12KeclAhm8NjRRWlfTVHTvqQayHXSqAa3s31EADAJlXcr5Lvyx6ghLshwBPIOqmK8pY5qObgseTJ1qbHLhFWw6g6HIz/t4+nSFf5Rf7JhbfpdftiLlei3fRxG84818UAINsVMXR/qsqKizDW1Q4LObKYlsXM2ltNcv8B/gssqpTOQj4XBCWXJTj96RgOh8kbSDrfqElVBtrrXF8er4vRoG+O4Ztress+5LLSZ6j+V8SwuDjLf9Hz9Oy0sOEubG4bmKLhXSiDjAzAN/ZviFBDYMo0QURmpeImHRJ42xmqFPdSPglX301b+vl+7c0PfFwy+ZrnK82y7uBrGZqb8QlSd6b7yVfKuNU7WwBDpM5FrJCi2dQTy4rXHK+Gj9Zu0aNfaEUw88vB3rSuPsvZD6J9OcpWHGDvfXWH39YZHPHqycIgtYTBmZiiWdqOjhd+55Pwzj4uKltyVV0MLcrcDOLPNOd+VQDhJOjVuWXaNdnwTbTVgwB8vWrvkwk
  9dkm1eENXwECAwEAAQ==<br />
-----END PUBLIC KEY-----<br />
<br />
To further secure that you have the correct binary that was authenticated with a matching
PUBLIC KEY found in yellow [above]. Please open the following url in
our local browser to compare to the authentic repository via https secure
hypertext transport protocol.<br />
</MacWindow>

nodectl will display the URL you need to use to connect for your own manual validation. This will help us verify we were not redirected to a phishing site and allow us to compare notes against the output of the command.

<MacWindow>
https://raw.githubusercontent.com/StardustCollective/nodectl/nodectl_v2130/admin/nodectl_public
</MacWindow>

nodectl will download and show us the hash that our digital signature should produce.  As stated above, we can verify this hash against the GitHub repository as well.

<MacWindow>
BINARY HASH<br />
=============================================<br />
SHA256(nodectl_x86_64)=
decb0a84724c78bdd0cf57ae771545950dd2f135d8d4280bb5ac8491e8f23d71 <br />
<br />
To further secure that you have the correct binary that was authenticated with a matching
BINARY HASH found in yellow [above]. Please open the following url in
our local browser to compare to the authentic repository via https secure
hypertext transport protocol.<br />
</MacWindow>

nodectl will present the URL where we can connect, verify we are not redirected to a phishing site, and compare notes against the output of the `verify_nodectl` command.

<MacWindow>
<br />
https://raw.githubusercontent.com/StardustCollective/nodectl/nodectl_v2130/admin/nodectl_v2130
_x86_64.sha256<br />
</MacWindow>

Finally we should receive a valid successful message!

<MacWindow>
verifying signature match .....................<br />                                                      
<br />
VERIFICATION RESULT<br />
SUCCESSFUL - AUTHENTIC NODECTL<br />
Review logs for details.<br />
</MacWindow>

We can review the logs for more details.

<MacWindow>
sudo nodectl logs -l nodectl
</MacWindow>

## Digital Signatures
In order to increase the security measures, the Constellation Network supported binary version of nodectl has been digitally signed.

<Collapsible title="What do you mean by digitally signed?">
nodectl is put into a single file that only computers can read. We do this so it's easy for you to download, set up, and run on your server (which we call a Node). After making this file, we use a special method to generate a unique code, called a hash. This code is made with a secret key (which is called a private key) that only Constellation Network has. But, you can check this code with a public key, which anyone can use. This is like a digital signature that helps prove the file is safe and hasn't been tampered with.
</Collapsible>

nodectl will automatically handle all aspects of the validation for you, you do not need to to do anything other than execute the `validate_nodectl` command.

### Extra security
In order to defend against "man in the middle" attacks, you can retrieve and review the public key and valid signature hash for the version of nodectl you are running, via the GitHub repository.  

:::danger Phishing Attempts
Make sure you are reviewing the hashes and public key for the version of nodectl you are currently running. 

This is done by simply making sure you are on the proper branch of nodectl in the GitHub repository which is offered as a link during the execution of the command; however, you should validate that you are navigating the official nodectl repository and not via a phishing attempt.

>https://github.com/StardustCollective/nodectl


