var extractAllNodesFunc = function() {
    var nodesArr = [];
    var stack = [];
    nodesArr.push(rootNode);
    stack.push(rootNode);
    while(stack.length > 0) {
        var tmpNode = stack.pop();
        if(tmpNode.childNodes != null) {
            tmpNode.childNodes?.forEach(tNode => {
                nodesArr.push(tNode);
                stack.push(tNode);
            });
        }
    }
    return nodesArr;
};
