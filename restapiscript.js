function copyC(btnId, codeId) {
    const copyText = document.getElementById(codeId);
    const range = document.createRange();
    range.selectNode(copyText);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
  
    const copyBtn = document.getElementById(btnId);
    const originalText = copyBtn.innerHTML;
    copyBtn.innerHTML = "Copied!";
    setTimeout(function() {
      copyBtn.innerHTML = originalText;
    }, 2000);
  }
  