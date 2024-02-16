' Goot.vbs
' This will be written in VBScript so that when it is double-clicked, it will run in Windows Script Host
' and will not be visible to the user.

' Add "hello world" to "c:\testing\log.txt"
Set objFSO = CreateObject("Scripting.FileSystemObject")
Set objFile = objFSO.OpenTextFile("c:\testing\log.txt", 8, True)
objFile.WriteLine "Hello World"
objFile.Close

