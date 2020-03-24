class NumbersDeleter{
    constructor(editor)
    {
        this.regex = new RegExp(/^ *\d+/gm);
        this.clearLine = this.clearLine.bind(this);
        this.getValueFromTextArea = this.getValueFromTextArea.bind(this);
        this.showClearedText = this.showClearedText.bind(this);
        this.copyText = this.copyText.bind(this);
        this.element = editor;
        this.animation = new Animations();
    }

    clearLine(line)
    {
        return  line.replace(this.regex,'');
    }

    getValueFromTextArea()
    {
        var clearedTextArray = [];
        const inputedText = this.element.getValue().split("\n");
        inputedText.map((line,index) => {
            clearedTextArray[index] = this.clearLine(line);
        })
        this.showClearedText(clearedTextArray);
    }

    showClearedText(text)
    {
        const outputBlock = this.element;
        outputBlock.setValue("")
        var outputBlockContent = outputBlock.getValue();

        text.map((line, index) => {
            outputBlockContent = outputBlockContent + this.clearLine(line.toString()) + (index != (text.length - 1) ? "\n" : "");
            console.log(line);
        });

        outputBlock.setValue(outputBlockContent);
        this.copyText();
        this.animation.messageBoxOpen();
    }

    copyText()
    {
        var text = this.element.getValue();
        copyToClipBoard(text);
    }
}

class Animations
{
    constructor()
    {
        this.messageBoxOpen = this.messageBoxOpen.bind(this);
    }

    messageBoxOpen()
    {
        var block = document.getElementsByClassName("messageBox")[0];
        block.setAttribute("class", "messageBox active");
        setTimeout(() => {
            block.getElementsByTagName("h1")[0].innerHTML = "Your code has been cleaned and copied to the clipboard";
        }, 300);
        setTimeout(() => {
            this.messageBoxClose(block);
        }, 3000);
    }

    messageBoxClose(block)
    {
        block.setAttribute("class", "messageBox");
        block.getElementsByTagName("h1")[0].innerHTML = "";
    }
}

function copyToClipBoard(text)
{
    var copyBlock = document.createElement("textarea");
    //copyBlock.style.display = "none";
    copyBlock.setAttribute("id","copyBlock");
    document.body.appendChild(copyBlock);
    copyBlock = document.getElementById("copyBlock");
    copyBlock.value = text;
    copyBlock.select();
    copyBlock.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(copyBlock);
}

function removeIndicator()
{
    const indicator = document.getElementById("ActivityIndicator");
    document.body.removeChild(indicator);
}


window.onload = function(){
    removeIndicator();
    var code = document.getElementsByClassName("codemirror-textarea")[0];
    var editor = CodeMirror.fromTextArea(code, {
        lineNumbers: true,
        mode: 'clike',
        theme: "lesser-dark",
    })

    const NumDeleter = new NumbersDeleter(editor);

    this.document.getElementById("buttonSubmiter").addEventListener("click", () => {NumDeleter.getValueFromTextArea()});
    this.document.getElementById("buttonCleaner").addEventListener("click", () => {editor.setValue("")});
}

