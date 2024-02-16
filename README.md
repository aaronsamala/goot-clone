# goot-clone
a bootleg clone of some parts of goot

This requires you to run a webserver. I just run a simple python server via "python3 -m http.server" from the folder with the files.
This also requires you to modify the logging file to whatever you're using.

As of 15FEB24: The goot.js will create a PS file in a random roaming folder, execute the PS, and that PS will download stage3 from the web server.

For the road map ideas - this project isn't really something I'm fully commited to. It's more of something I'm just exploring to become familiar with Github Copilot, and to maybe make a few Youtube videos explaining.

Road map ideas:
  - Create another script to obfuscate everything
  - Enumerate the env and B64 encode it, and include it in the beacon just like the regular Goot
  - Create a scheduled task to run the PS script from the roaming folder
  - Add the fake forum JS using the research from https://github.com/aaronsamala/goot-research/

GitHub Copilot generated road map ideas from "provide other road map ideas":

GitHub Copilot
Here are some additional road map ideas for your project:

- Implement a command and control (C2) server to manage communication with the cloned Goot instances.
- Enhance the obfuscation techniques used in the script to make it more difficult to detect and analyze.
- Develop a module for lateral movement, allowing the cloned Goot instances to spread across a network.
- Integrate encryption algorithms to secure the communication between the cloned Goot instances and the C2 server.
- Implement persistence mechanisms to ensure the cloned Goot instances can survive system reboots.
- Explore techniques for evading antivirus and intrusion detection systems.
- Develop a module for privilege escalation, enabling the cloned Goot instances to gain higher levels of access on compromised systems.
- Investigate methods for bypassing endpoint protection and application whitelisting.
- Create a module for data exfiltration, allowing the cloned Goot instances to steal sensitive information from compromised systems.
- Research and implement anti-forensic techniques to make it more challenging for investigators to trace the activities of the cloned Goot instances.
- Remember to consider the ethical implications of your project and ensure that you are using your skills responsibly and legally.



