function getTextContent() {
  const childNodes = document.body.childNodes;

  if (childNodes.length >= 1) {
    let childNode;

    for (let index in childNodes) {
      if (childNodes[index].nodeName !== 'PRE') continue;

      childNode = childNodes[index];
    }

    if (childNode) {
      return childNode.textContent.trim();
    }
  }

  return null;
}

function getSwagger() {
  const text = getTextContent();
  if (!text) return;

  let swagger = {};
  try {
    swagger = JSON.parse(text);
  } catch (error) {
    console.log(error);
  }

  if (swagger) {
    chrome.runtime.sendMessage({ swagger });
  }
}

document.addEventListener('DOMContentLoaded', getSwagger, false);
