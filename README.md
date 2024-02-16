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
