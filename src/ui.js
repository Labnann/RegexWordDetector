(()=>{
    const inputTextElement = document.getElementById("input_text");
    const outputElement = document.getElementById("output_text");
    const runButton = document.getElementById("run_button");
 

    runButton.onclick = ()=>{
        const input = inputTextElement.value;
        if(input.length===0) return;

        const matcherRegex = createMatcherRegex(input);
        outputElement.value = matcherRegex;
    }


    outputElement.onclick = ()=>{
        if (outputElement.value.length === 0)
            return;
        const output = outputElement.value;
        navigator.clipboard.writeText(output);
    }

})()